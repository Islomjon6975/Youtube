    import styled from "styled-components";

    export const Container = styled.div`
        width: 100%;
        background-color: #181818;
        height: 100%;
        overflow-y: auto;
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
    `

    export const Buttons_container = styled.div`
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 56px;
        background: #212121;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        z-index: 999;
    `

    export const Button = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 200px;
        height: 30px;
        background-color: #4D4D4D;
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-sizing: border-box;
        border-radius: 30px;
        padding: 15px;
        margin: 0 8px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    `

    export const Cards_container = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        grid-gap: 16px;
        width: 100%;
        padding: 16px 17px;
        
    `

    export const Card = styled.div`
        height: 300px;
        background-color: #171717; 
        -webkit-box-shadow: 1px 7px 13px 1px rgba(0,0,0,0.67); 
box-shadow: 1px 7px 13px 1px rgba(0,0,0,0.67); 
    `

    export const Img = styled.img`
        width: 100%;
        height: 200px;

    `

    export const Title_container = styled.div`
        display: flex;
        width: 100%;
        padding: 8px;
    `

    export const Title_img = styled.img`
        width: 36px;
        height: 36px;
        background-color: green;
        border-radius: 50%;
        margin-right: 15px;
    `

    export const Movie_title = styled.div`
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        
    `

    export const NoVideo = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 56px - 56px);
        font-size:30px;
        color: white;
        font-weight: 700;
    `