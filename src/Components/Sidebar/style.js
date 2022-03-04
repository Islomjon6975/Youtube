import styled from "styled-components";

export const Container = styled.div`

    display: ${({displayy})=>displayy ? 'none' : 'flex'};
    flex-direction: column;
    width: 380px;
    background: #212121;
    height: calc(100vh - 56px);
    overflow-y: ${({scroll})=> scroll ? 'auto' : 'hidden'};
    ::-webkit-scrollbar{
        width:8px;
        height: 8px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1;
    }
    ::-webkit-scrollbar-track{
        background-color: #666;
        border-radius: 8px;
        box-shadow: inset 0 0 10px rgba(0,0,0,0.25);
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: #888;
        
    }
    padding-top: 15px;
    
`


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: ${({color})=>color && '#4D4D4D'};
    padding-left: 27px;
    :hover{
        background-color: #4D4D4D;
    }
    border-bottom: ${({border})=>border && '1px solid rgba(255, 255, 255, 0.2)'};
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
    width: 180px;
`
export const Icons_tolqin = styled.img`
    width: ${({sizee})=>sizee ? sizee:'20px' };
    height: ${({sizee})=>sizee ? sizee:'20px'};
    margin-left: ${({sizee})=>sizee=='8px'? '5px' : '0'};
`


export const False_container = styled.div`
    width: 80px;
    height: calc(100vh - 56px);
    background-color: #212121;
    box-shadow: 2px 2px 19px 5px rgba(0,0,0,0.69);
`

export const Iconsss =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: ${({color})=>color && '#4D4D4D'};

    :hover{
        background-color: #4D4D4D;
    }
    
`

export const Iconsss_title = styled.div`
    font-size: 11px;
    font-size: 700;
    margin-top: 5px;
    color: whitesmoke;
`

export const Iconsss_icon = styled.img`
    width: 23px;
    height: 23px;
`