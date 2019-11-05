import styled from "styled-components";
import logo from './../../static/logo.jpg'
export const FootWrap = styled.div`
width: 100%;
height: 300px;
background: #ccc;
float: left;
.FootContent{
  width: 1000px;
  height: 300px;
  margin: 0 auto;
}
`
export const FootLeft = styled.div`
width: 300px;
height: 300px;
float: left;
`
export const FootCenter = styled.div`
width: 300px;
height: 300px;
float: left;
margin-left: 50px;
img{
width: 140px;
height: 140px;
margin: 50px 10px 20px 0px;
}
`
export const FootRight = styled.div`
width: 300px;
height: 300px;
float: right;
padding-top: 40px;
ul{
    li{
    float: left;
    margin: 15px 20px 0px 20px;
    }
}
`
export const FootLogo = styled.a`
height:60px;
width:100px;
display: block;
background: url(${logo});
background-size: contain;
margin: 20px 0px;
`
export const FootDesc = styled.p`
font-size: 16px;
margin-bottom: 20px;
`