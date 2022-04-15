import React from 'react';
import LogoIcon from '../assets/icons/LogoIcon';
import styled from "styled-components";
import {border, projectLogoText} from "../styles/vatiables"
import Toggle from "./Toggle";



const Logo = styled.h1`
  ${projectLogoText};
  margin-left: 8px;
`

const ProjectLogoContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: ${border};
  width: 250px;
  height: 100%;
`

const HeaderContainer = styled.header`
  height: 90px;
  display: flex;
  align-items: center;
  border-bottom: ${border};
`

const Header = () => {
    return (
        <HeaderContainer>
            <ProjectLogoContainer>
                <LogoIcon/>
                <Logo>LoGo</Logo>
            </ProjectLogoContainer>
            <Toggle/>
        </HeaderContainer>
    );
};

export default Header;
