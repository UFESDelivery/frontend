import { logDOM } from '@testing-library/react';
import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 7rem;

  ${props => {
    switch(props.$mode){
      case "submit":
        return css`
          border: 2px solid #0d6efd;
          color: #0d6efd;
        `;
      case "cancel":
        return css`
          border: 2px solid #dc3545;
          color: #dc3545;
        `;
      case "add":
      return css`
        border: 2px solid #0d6efd;
        color: #0d6efd;
      `;
      case "details":
      return css`
        border: 2px solid #198754;
        color: #198754;
      `;
      }
    }
  }
`;

const AtomSubmitButton = (item)=> {

  const title = item.title;
  const type = item.type;
  
  return(
  <>
    <Button $mode={type} > { title } </Button>
  </>
  );
}

export default AtomSubmitButton;