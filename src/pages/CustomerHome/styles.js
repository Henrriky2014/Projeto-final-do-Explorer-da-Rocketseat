import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-areas: 
    "header"
    "content";

    grid-area: content;

    max-width: 428px;

    margin: 0 auto;

    background: ${({theme}) => theme.COLORS.DARK_400};
`;

export const Box = styled.div`

    width: 100%;
    height: 120px;

    max-width: 376px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-image: linear-gradient(to right, #091E26, #00131C);

    margin: 44px auto 62px;

    border-radius: 12.92px;

    > img {
        margin-left: -32px;
        margin-top: -24px;
    }

    > div {
        
        width: 100%;
        

        h1 {
            font-family: "Poppins", sans-serif;
            
            font-size: 16px;   
            font-weight: 600;
            

            margin-bottom: 3px;
        }

        p {
            font-family: "Poppins", sans-serif;
            
            font-size: 12px;
            text-align: left;

        }

        
    }
    
`;
