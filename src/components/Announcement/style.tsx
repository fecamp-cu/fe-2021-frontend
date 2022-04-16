import styled, { css } from "styled-components"

export const AnnouncementContainer = styled.div`
    display : flex;
    flex-direction : row;
    row-gap : 40px;
    margin-top : 54px;
    padding : 45px 0px;
    padding-left : 30px;
`

export const AnnouncementBox = styled.div`
    width : 810px;
    height : 249px;
    padding : 15px;
    border : 1px solid #ffffff;
    border-radius : 20px;
    marginTop : 54px;
    background: linear-gradient(98.4deg, rgba(255, 255, 255, 0.175) 10.21%, rgba(255, 255, 255, 0.07) 90.92%);
    backdrop-filter: blur(50px);
    color : #ffffff;
    display : flex;
    flex-direction : column;
    text-align : center;
`

export const Header = styled.h5`
    margin-bottom : 10px;
    font-style: normal;
    font-weight : 700;
    line-height : 54px;
`

export const Description = styled.p`
    margin : 10px 70px;
    font-style: normal;
    font-weight : 700;
`

export const Duration = styled.h6`
    margin : 10px 0px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;
`