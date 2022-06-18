from typing import Any, Iterable

from flask import Response

import datetime as dt

import sqlalchemy as sa

import random as rdm

import json


def commit_db(
    conn: sa.engine.Connection
):
    conn.exec_driver_sql("COMMIT")


def rollback_db(
    conn: sa.engine.Connection
):
    conn.exec_driver_sql("ROLLBACK")


def delete_from_formater(
    table_name: str,
    columns: Iterable[str]
):
    where_format = [
        f"{k} = %({k})s"
        for k in columns
    ]

    query_update = f"""
        UPDATE FROM {table_name}
        WHERE {" AND ".join(where_format)}
    """

    return query_update


def update_from_formater(
    table_name: str,
    columns: Iterable[str],
    pk_v: list[tuple[str, int]]
):
    set_format = [
        f"{k} = %({k})s"
        for k in columns
    ]

    where_format = [
        f"{pk} = {v}"
        for pk, v in pk_v
    ]

    query_update = f"""
        UPDATE {table_name}
        SET {", ".join(set_format)}
        WHERE {" AND ".join(where_format)}
    """

    return query_update


def insert_into_formater(
    table_name: str,
    columns: Iterable[str]
):
    columns_formated = [
        f"%({k})s"
        for k in columns
    ]

    query_insert = f"""
        INSERT INTO {table_name} (
            {format_columns(columns)}
        )
        VALUES
            ({", ".join(columns_formated)})
    """

    return query_insert


def get_all_valid_users_types():
    all_users = dict(
        enumerate([
            "CLIENTE",
            "ATENDENTE",
            "GERENTE",
            "ADMINISTRADOR"
        ], 1)
    )

    return all_users.keys()


def get_all_valid_status():
    all_status = dict(
        enumerate([
            "NOVO",
            "AGUARDANDO PAGAMENTO",
            "CONFIRMADO",
            "PRONTO PARA ENTREGA",
            "EM ROTA DE ENTREGA",
            "ENTREGUE",
            "CANCELADO PELO CLIENTE",
            "CANCELADO PELO ESTABELECIMENTO"
        ], 1)
    )

    return all_status.keys()


def format_columns(
    cols: Iterable[str]
):
    values = ", ".join(cols)

    return values


def datetime_to_dict(
    date: dt.datetime
):
    return {
        "dia": date.day,
        "mes": date.month,
        "ano": date.year,
        "hora": date.hour,
        "minuto": date.minute,
        "segundo": date.second
    }


def rows_in_list_dict(
    ref_table: sa.engine.CursorResult
):
    rows = ref_table.fetchall()
    columns = [c for c in ref_table.keys()]

    list_dict = [
        {
            columns[i % len(columns)]: (
                datetime_to_dict(c)
                if isinstance(c, dt.datetime)
                else c
            )
            for i, c in enumerate(r)
        }
        for r in rows
    ]

    return list_dict


def authenticate(
    conn: sa.engine.Connection,
    type_: int,
    email: str = None,
    password: str = None,
    token: str = None,
):
    table_name = "usuario"

    realy_email = treat_str(email)

    if token:
        query = f"""
            SELECT COUNT(1)
            FROM {table_name}
            WHERE cd_token = '{token}'
                AND cd_tipo_usuario = {type_}
        """
    else:
        if not realy_email or not password:
            return False
        
        query = f"""
            SELECT COUNT(1)
            FROM {table_name}
            WHERE ds_email = '{realy_email}'
                AND cd_senha = '{password}'
                AND cd_tipo_usuario = {type_}
        """

    if conn.execute(query).fetchone()[0] == 1:
        return True
    
    return False


def generate_token(
    conn: sa.engine.Connection,
    len_: int = 64
):
    query = """
        SELECT cd_token
        FROM usuario
    """

    result = conn.execute(query).fetchall()

    try:
        token_list = [t[0] for t in result]
    except:
        token_list = []

    possible_char = "1234567890abcdef"

    while True:
        token = "".join([rdm.choice(possible_char) for _ in range(len_)])

        if token not in token_list:
            break

    return token


def get_response(
    response: dict,
    status: int,
    mimetype: str = "application/json"
):
    return Response(
        response=json.dumps(response),
        status=status,
        mimetype=mimetype
    )


def conn_mysql(
    username: str,
    password: str,
    database: str,
    server: str,
    port: int
) -> sa.engine.Connection:
    url = f"mysql+pymysql://{username}:{password}@{server}:{port}/{database}"

    return sa.create_engine(url=url).connect()


def treat_str(
    value: str | int | float
):
    if value is not None:
        return str(value).strip().upper()
    
    return None


def treat_int(
    value: str | int | float
):
    try:
        return int(value)
    except:
        return None


def treat_float(
    value: str | int | float
):
    try:
        return float(value)
    except:
        try:
            return float(value.replace(",", "."))
        except:
            return None


def treat_postal_code(
    value: str | int
):
    if treat_int(value) is None:
        return None

    if len(str(value)) != 8:
        return None
    
    return value


def table_exists(
    conn: sa.engine.Connection,
    table_name: str
):
    return conn.dialect.has_table(conn, table_name)


def is_valid_email(
    email: str
):
    split_at = email.split("@")

    if len(email) < 9:
        return False

    if len(split_at) != 2:
        return False
    
    if " " in email:
        return False

    if "." not in split_at[1]:
        return False
    
    if treat_int(email[0]) is not None:
        return False
    
    if treat_int(split_at[1][0]) is not None:
        return False

    if email[0] == ".":
        return False
    
    if split_at[1][0] == ".":
        return False

    return True


def validate_parameters(
    dict_args: dict[str, Any],
    ignore_args: Iterable[str] = []
):
    return None not in [v for k, v in dict_args.items() if k not in ignore_args]
