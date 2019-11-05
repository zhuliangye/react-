import styled from 'styled-components';
export const HomeWrap = styled.div`
width: 1000px;
margin: 20px auto;
.imgTop{
    width: 630px;
    height: 300px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      display: block;
      transition: 1s;
    }
    img:hover{
     transform: scale(1.1);
    }
}

`
export const LeftNav = styled.div`
  width: 630px;
  float: left;

`
export const RightNav = styled.div`
  width: 270px;
  float: right;
`
export const Lefttopwrap = styled.div`
  width: 630px;
  float: left;
  padding: 5px;
`
export const Leftbottomwrap = styled.div`
  width: 630px;
  float: left;
`
export const Righttopwrap = styled.div`
  width: 270px;
  float: right;
`
export const Rightbottomwrap = styled.div`
  width: 270px;
  float: right;
`
export const LeftItem = styled.div`
  width: 100px;
  height: 50px;
  float: left;
  border: 2px solid #ccc;
  margin: 12px;
  img{
  width: 50px;
  height: 30px;
  margin: 6px 5px;
  }
`
export const LeftDemo = styled.div`
  width: 630px;
  height: 150px;
  border: 2px solid #ccc;
  margin-bottom: 20px;
  img{
    width: 150px;
    height: 110px;
    margin: 15px;
    float: left;
  }
  div{
    width:420px;
    height: 146px;
    padding-left: 20px;
    border-left: 2px solid #ccc;
    float: left;
    h3{
      text-align: center;
    }
  }
`
export const RightItem = styled.div`
  width: 270px;
  height: 120px;
  border: 2px solid #ccc;
  margin-bottom: 10px;
  img{
  width: 200px;
  height: 80px;
  display: block;
  margin: 5px auto;
  }
  p{
    font-size: 16px;
    text-align: center;
  }
`
export const RightDemo = styled.div`
width: 270px;
height: 550px;
border: 2px solid #ccc;
.erweima{
    width: 120px;
    height: 150px;
    text-align: center;
    margin-left: 10px;
    float: left;
    margin-top: 10px;
    img{
    width: 120px;
    height: 120px;
    }
}
.lianjie{
text-align: center;
font-size: 20px;
width: 270px;
height: 200px;
float: left;
padding: 20px;
    p{
        line-height:30px;
        height: 40px;
        border-bottom: 2px solid #ccc;
    }
}

`