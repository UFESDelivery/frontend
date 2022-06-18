from sqlalchemy.engine import Connection


def insert_state(
    conn: Connection
):
    query = """
        INSERT INTO estado (
            ds_estado
            , cd_uf
        )
        VALUES
            ('ACRE', 'AC')
            , ('ALAGOAS', 'AL')
            , ('AMAPÁ', 'AP')
            , ('AMAZONAS', 'AM')
            , ('BAHIA', 'BA')
            , ('CEARÁ', 'CE')
            , ('DISTRITO FEDERAL', 'DF')
            , ('ESPÍRITO SANTO', 'ES')
            , ('GOIÁS', 'GO')
            , ('MARANHÃO', 'MA')
            , ('MATO GROSSO', 'MT')
            , ('MATO GROSSO DO SUL', 'MS')
            , ('MINAS GERAIS', 'MG')
            , ('PARÁ', 'PA')
            , ('PARAÍBA', 'PB')
            , ('PARANÁ', 'PR')
            , ('PERNAMBUCO', 'PE')
            , ('PIAUÍ', 'PI')
            , ('RIO DE JANEIRO', 'RJ')
            , ('RIO GRANDE DO NORTE', 'RN')
            , ('RIO GRANDE DO SUL', 'RS')
            , ('RONDÔNIA', 'RO')
            , ('RORAIMA', 'RR')
            , ('SANTA CATARINA', 'SC')
            , ('SÃO PAULO', 'SP')
            , ('SERGIPE', 'SE')
            , ('TOCANTINS', 'TO')
    """

    conn.execute(query)


def insert_user(
    conn: Connection
):
    query = """
        INSERT INTO usuario (
            cd_endereco
            , cd_token
            , cd_tipo_usuario
            , no_usuario
            , ds_email
            , cd_senha
        )
        VALUES
            (NULL, NULL, 4, 'ADM', 'ADM@UFESDELIVERY.COM.BR', '1234adm')
    """

    conn.execute(query)


def insert_product_category(
    conn: Connection
):
    query = """
        INSERT INTO categoria_produto (
            ds_categoria
        )
        VALUES
            ('VITAMINAS')
            , ('SUCOS')
            , ('BEBIDAS')
            , ('MISTOS')
            , ('PORÇÕES')
            , ('LANCHES GOURMET')
    """

    conn.execute(query)


def insert_product(
    conn: Connection
):
    query = """
        INSERT INTO produto (
            cd_categoria
            , no_produto
            , vl_unitario
            , qt_estoque
        )
        VALUES
            -- VITAMINAS
            (1, 'VITAMINA DE ABACAXI', 7.00, 10)
            , (1, 'VITAMINA DE MORANGO', 7.00, 10)
            , (1, 'VITAMINA DE ABACAXI COM HORTELÃ', 7.00, 10)
            , (1, 'VITAMINA DE GRAVIOLA', 7.00, 10)
            , (1, 'VITAMINA DE CAJU', 7.00, 10)
            , (1, 'VITAMINA DE MARACUJÁ', 7.00, 10)
            , (1, 'VITAMINA DE GOIABA', 7.00, 0)
            , (1, 'VITAMINA DE MANGA', 7.00, 10)
            , (1, 'VITAMINA DE ACEROLA', 7.00, 10)
            -- SUCOS
            , (2, 'SUCO DE ABACAXI', 6.00, 10)
            , (2, 'SUCO DE MORANGO', 6.00, 10)
            , (2, 'SUCO DE ABACAXI COM HORTELÃ', 6.00, 10)
            , (2, 'SUCO DE GRAVIOLA', 6.00, 10)
            , (2, 'SUCO DE CAJU', 6.00, 10)
            , (2, 'SUCO DE MARACUJÁ', 6.00, 10)
            , (2, 'SUCO DE GOIABA', 6.00, 10)
            , (2, 'SUCO DE MANGA', 6.00, 10)
            , (2, 'SUCO DE ACEROLA', 6.00, 10)
            -- BEBIDAS
            , (3, 'ÁGUA MINERAL', 3.00, 10)
            , (3, 'ÁGUA MINERAL COM GÁS', 3.50, 10)
            , (3, 'ÁGUA TÔNICA', 6.00, 10)
            , (3, 'REFRIGERANTE LATA', 6.00, 10)
            , (3, 'REFRIGERANTE 1,5L', 10.00, 10)
            , (3, 'REFRIGERANTE 2L', 11.00, 10)
            , (3, 'SWEEPS CITRUS', 6.00, 10)
            -- MISTOS
            , (4, 'MISTO', 9.00, 10)
            , (4, 'MISTO EGG', 12.00, 10)
            , (4, 'MISTÃO', 12.00, 10)
            , (4, 'MISTO LIGHT', 12.00, 10)
            -- PORÇÕES
            , (5, 'PORÇÃO DE FRITAS', 19.50, 10)
            , (5, 'PORÇÃO DE FRITAS COM CHEDDAR E BACON', 14.50, 10)
            , (5, 'PORÇÃO DE FRITAS COM COSTELA', 16.50, 10)
            , (5, 'PORÇÃO DE ANEL DE CEBOLA', 18.00, 10)
            , (5, 'PORÇÃO DE MINI CHICKEN', 16.00, 10)
            , (5, 'PORÇÃO DE MINI COXINHAS', 16.00, 10)
            -- LANCHES GOURMET
            , (6, 'FIRE BURGER', 20.00, 10)
            , (6, 'MAGNÍFICO', 28.00, 10)
            , (6, 'CALABRESA CRISPY', 25.00, 10)
            , (6, 'VIP BURGUER', 25.00, 10)
            , (6, 'PIG BURGUER', 20.00, 10)
    """

    conn.execute(query)


def insert_all(
    conn: Connection
):
    insert_state(conn)
    insert_user(conn)
    insert_product_category(conn)
    insert_product(conn)
