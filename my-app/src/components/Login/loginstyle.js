import styled from "styled-components";
import LoginImg from './../../static/login.jpg'
export const LoginWrap = styled.div`
width: 100%;
height: 800px;
position: relative;
  img{
    width: 100%;
    height: 800px;
    position: absolute;
    left: 0px;
    top:0px;
    z-index: -1;
  }
`
export const LoginDemo = styled.div`
width: 400px;
height: 350px;
position: absolute;
right: 200px;
top: 150px;
z-index: 5;
border: 2px solid #ccc;
padding: 10px 50px;
    h2{
      text-align: center;
    }
    input{
    width: 300px;
    height: 40px;
    }
    button{
    width: 300px;
    height: 40px;
    }
`