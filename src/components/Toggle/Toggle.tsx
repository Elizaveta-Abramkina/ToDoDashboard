import React from 'react';
import styled from "styled-components";
import {colorDark, colorLight, colorMain, colorSimpleText} from "../styles/vatiables";

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  & input {
    display: none;
  }
`

const ToggleInput = styled.input`
  &:checked + span {
    background-color: ${colorSimpleText};
  }
  &:focus + span {
    box-shadow: 0 0 1px ${colorMain};
  }
  &:checked + span:before {
    transform: translateX(26px);
  }
  
`
const ToggleRound = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colorMain};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${colorLight};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`



const Toggle = () => {



    return (
        <ToggleLabel>
            <ToggleInput type='checkbox'/>
            <ToggleRound/>
        </ToggleLabel>
    );
};

export default Toggle;
