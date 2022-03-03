import styled from "styled-components";
import {ReactComponent as menu} from '../../assets/navbar/menu.svg'
import {ReactComponent as logo} from '../../assets/navbar/logo.svg'
import {ReactComponent as search} from '../../assets/navbar/search.svg'

import {ReactComponent as live} from '../../assets/navbar/live.svg'
import {ReactComponent as channels} from '../../assets/navbar/channels.svg'
import {ReactComponent as bell} from '../../assets/navbar/bell.svg'
import {ReactComponent as person} from '../../assets/navbar/person.svg'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
    background: #212121;
`

export const Logo_container = styled.div`
    display: flex;
    align-items: center;
    width: 240px;
    height: 56px;
    padding-left: 15px;
`

export const Menu = styled(menu)`
    margin-right: 27px;
    width: 43px;
    height: 43px;
    cursor: pointer;
    :active{
        background: rgba(179,179,185,0.1);
        border-radius: 50%;
        border: 1px solid rgba(179,179,185,0.2);
    }
`

export const Logo = styled(logo)`
    cursor: pointer;
`

export const Input_container = styled.div`
    display: flex;
    width: 640px;
    height: 40px;
    border-radius: 2px;
    background-color: red;
`

export const Search_input = styled.input`
    width: 574px;
    height: 100%;
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 2px 0px 0px 2px;
    outline: none;
    padding: 0 8px;
    color: rgba(255, 255, 255, 0.2);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
`

export const Search_box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(640px - 574px);
    height: 100%;
    background-color: #4D4D4D;
    border-radius: 0px 2px 2px 0px;
`

export const Search_icon = styled(search)`
    width: 17.87px;
    height: 17.87px;
    color: rgba(255, 255, 255, 0.6);
    transition: all .8s ease;
    :active{
        transform: scale(0.97);
    }
`

export const Icons_container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 100%;
    margin-right: 15px;
`

export const Live = styled(live)`
    width: 27px;
    height:27px;
    color: #fff;
    cursor: pointer;
    transition: all .3s ease;
    :active{
        transform: scale(0.97);
    }
`

export const Channels = styled(channels)`
    width: 22px;
    height: 22px;
    color: #fff;
    cursor: pointer;
    transition: all .3s ease;
    :active{
        transform: scale(0.97);
    }
`

export const Bell = styled(bell)`
    width: 25px;
    height: 25px;
    color: #fff;
    cursor: pointer;
    transition: all .3s ease;
    :active{
        transform: scale(0.97);
    }
`

export const Person = styled(person)`
    width: 29px;
    height: 29px;
    color: #fff;
    cursor: pointer;
    transition: all .3s ease;
    :active{
        transform: scale(0.97);
    }
`