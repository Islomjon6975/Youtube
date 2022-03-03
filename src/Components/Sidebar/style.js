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
