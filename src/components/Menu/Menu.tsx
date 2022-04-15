import React from 'react';
import styled from "styled-components";
import {border, menuInputText, colorMain, colorSimpleText} from '../styles/vatiables';
import TasksIcon from "../assets/icons/TasksIcon";
import HomeIcon from '../assets/icons/HomeIcon';


const MenuContainer = styled.div`
  padding-top: 10px;
  width: 250px;
  border-right: ${border};
  }
`

const MenuInput = styled.div`
  display: flex;
  margin-top: 38px;
  color: ${colorSimpleText};
  fill: ${colorSimpleText};
  stroke: ${colorSimpleText};

  &:hover {
    color: ${colorMain};
    fill: ${colorMain};
    stroke: ${colorMain};
  }
`
const MenuText = styled.p`
  ${menuInputText};
  margin-left: 8px;
`
const Menu = () => {

    return (
        <MenuContainer>
                <MenuInput>
                    <HomeIcon/>
                    <MenuText>Home</MenuText>
                </MenuInput>
            <MenuInput>
                <TasksIcon />
                <MenuText>Tasks</MenuText>
            </MenuInput>

        </MenuContainer>
    );
};

export default Menu;
