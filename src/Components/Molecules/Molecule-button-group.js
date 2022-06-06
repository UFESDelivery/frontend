import React, { useState } from 'react';
import styled from 'styled-components';
import AtomButton from '../Atoms/Atom-button';
import CostumerService from '../../Services/ProductService';

const ButtonGroup = styled.div
  `
    background: transparent;
    border-radius: 3px;
    border: 2px solid #dc3545;
    color: #dc3545;
    margin: 0 1em;
    padding: 0.25em 1em;
    width:100px;
  `;

const MoleculeButtonGroup = ()=> {

  return(
    <div>
      <AtomButton type="cancel" title="Cancelar" />
      <AtomButton type="add" title="Adicionar" />
      <AtomButton type="details" title="Detalhes" />
    </div>
  );
}

export default MoleculeButtonGroup;