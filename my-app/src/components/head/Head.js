import React from 'react';
import {HeadWrap,Logo,Nav,NavItem,SearchWrap,Search,SearchInfo} from "./headstyle";
import {connect} from "react-redux";
import * as handActionCreaters from './store/headActionCreaters'

import {BrowserRouter as Router,NavLink,Route,Switch}from "react-router-dom"
function showInfo(flag) {
    if(flag){
        return(
            <SearchInfo>
                <span>精品锅具</span>
                <span>厨房用品</span>
                <span>酒杯茶具</span>
            </SearchInfo>
        )}else{
        return null
    }

}
// class Head extends Component{
//     render(){
function Head(props) {
    const {flag,inputFocus,inputBlue} = props;
    return(
    <div>
            <HeadWrap>
                <NavLink to='/single/3'>
                    <Logo/>
                </NavLink>
                    <Nav>
                        <NavLink to='/'>
                            <NavItem>首页</NavItem>
                        </NavLink>
                        <NavLink to='/detail'>
                            <NavItem>详情页</NavItem>
                        </NavLink>
                    </Nav>


                {showInfo(flag)}
                <SearchWrap>
                    <Search className={flag?'flag':''}
                            onFocus={inputFocus}
                            onBlur={inputBlue}/>
                    <span className="glyphicon glyphicon-search"></span>
                </SearchWrap>
            </HeadWrap>
        </div>
    )
}

    //}
//}
const mapStateToprops = (state) =>({
    flag:state.head.flag,
});
const mapDispatchToprops = (dispatch)=>({
    inputFocus(){
     /*  const action = {
           type:'input_focus'
       }
        dispatch(action);*/
     dispatch(handActionCreaters.handleFocus())
    },
    inputBlue(){
       /* const action = {
            type:'input_blur'
        }
        dispatch(action);*/
        dispatch(handActionCreaters.handleBlur())
    },
})
export default connect(mapStateToprops,mapDispatchToprops)(Head);