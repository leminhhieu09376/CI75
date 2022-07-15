import styled from "styled-components";

export const SPlanned = styled.div`
background-color: #BD6D68;
height: 100vh;
display: flex;

justify-content: center;

.container{
    margin-top: 32px;
    height: 70vh;
    background-color: white;
  
}
.content-container{

    margin-top: 16px;
    .content-item{
        border-bottom: 1px solid black;
        
        .time{
            display: flex;
            justify-content: space-between;

            button{
                margin: auto;
                background-color: #36BE7C;
                border: none;
                border-radius: 10px;
            }

        }
        .content{
            width: 100%;
            max-width: 350px;
            margin-bottom: 16px;
        }
    }
}
`;