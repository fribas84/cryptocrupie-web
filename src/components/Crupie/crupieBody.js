import styled from 'styled-components';

export const  Background = styled.div`
    background-color: ${(props) => props.bgColor};
    border-radius:100%;
    border: solid 3px black;
    width: 100%;
    height: 100%;
    position: relative;
    
    `
export const  Ears = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    `

export const  RightEar = styled.div`
    border-radius: 70% 0% 90% 0%;
    background-color:  ${(props) => props.earsColor};
    width: 20%;
    height: 30%;
    position: absolute;
    border: solid 3px black;
    top:0%;
    right: 15%;
    z-index:1;
    `
export const  LeftEar = styled.div`
    border-radius: 0% 70% 00% 90%;
    background-color:  ${(props) => props.earsColor};
    width: 20%;
    height: 30%;
    position: absolute;
    border: solid 3px black;
    top:0%;
    left: 15%;
    z-index:1;
    `

export const  Eyes  = styled.div`
    position: relative;
    height: 25%;
    width: 25%;
    top:10%;
`

export const  LeftEye = styled.div`
    background-color: white;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    border: solid 2px black;
    position: absolute; 
    margin:15%;
    left: -80%;
`
export const  RightEye = styled.div`
    background-color: white;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    border: solid 2px black;
    position: absolute;
    margin:15%;
    right: -80%;
    `


export const  Body = styled.div`
    background-color:  ${(props) => props.bodyColor};
    width: 70%;
    height: 60%;
    border-radius: 40% 40% 10% 10%;
    border: solid 3px black;
    position: absolute;
    top:15%;
    left:15%;
    z-index:3; 
    `

export const  InnerEarL = styled.div`
    border-radius:  0% 70% 00% 90%;
    background-color:  ${(props) => props.tailColor};
    width: 60%;
    height: 60%;
    position: absolute;
    border: solid 3px black;
    top:20%;
    left: 20%;
    z-index:2;

`

export const  InnerEarR = styled.div`
    border-radius: 70% 0% 90% 0%;
    background-color: ${(props) => props.tailColor};
    width: 60%;
    height: 60%;
    position: absolute;
    border: solid 3px black;
    top:20%;
    left: 20%;
    z-index:2;
`

export const  Pupil = styled.div`
    background-color: black;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    position: absolute;
    top: 10%;
    left: 10%;
    `
export const  Shine = styled.div`
    width: 35%;
    height: 35%;
    border-radius: 50% 0% 50% 0%;
    background-color: white;
    top: 10%;
    left: -10%;
    position: relative;
    `

export const Nose = styled.div`
width: 15%;
height: 15%;
border-radius: 25% 25% 50% 50%;
border: solid 2px;
background-color: red;
position: relative;
top:15%
`

export const Mouth = styled.div`
    width: 40%;
    height: 15%;
    border-radius: 0% 0% 50% 50%;
    border: solid 2px;
    background-color: white;
    position: relative;
    top:25%
`

export const Shoes = styled.div`
position: relative;
top:40%;
display: flex;
width:80%;
height:10%;

`
export const Shoe = styled.div`
width: 20%;
height: 100%;
border-radius: 50% 50% 0% 0%;
border: solid 2px;
background-color: ${(props) => props.shoesColor};
position: relative;
margin-left: 15%;
margin-right: 15%;

`
export const Tail = styled.div`
border-radius: 70% 0% 90% 0%;
background-color: ${(props) => props.tailColor};
width: 15%;
height: 25%;
position: absolute;
border: solid 3px black;
top:45%;
left: 80%;
z-index:1;
`