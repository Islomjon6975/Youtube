import styled from "styled-components";
import {ReactComponent as menu} from '../../assets/navbar/menu.svg'
import {ReactComponent as logo} from '../../assets/navbar/logo.svg'

export const Container = styled.div`
    flex: 2;
    min-height: 100%;
    background: #212121;
`

export const Logo_container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    margin-bottom: 12px;
    padding-left: 15px;
    padding-top: 10px;

`

export const Menu = styled(menu)`
    margin-right: 27px;
    width: 50px;
    
`

export const Logo = styled(logo)`

`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: ${({color})=>color && '#4D4D4D'};
    padding-left: 27px;

`

export const Icon = styled.img`
    width: 22px;
    height: 24px;
`

export const Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 20px;
    color: #FFFFFF;
    margin-left: 28px;
`
