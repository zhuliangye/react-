import React,{Component} from 'react';
import {Leftbottomwrap,LeftDemo} from './../homestyle'
import {connect} from "react-redux";
import {BrowserRouter as Router,NavLink,Route,Switch}from "react-router-dom"
import {Nav} from "../../head/headstyle";
class Leftbottom extends Component{

    render() {
        return(
            <div>
                <Leftbottomwrap>
                    {
                        this.props.list.map((item,index)=>{
                            return(
                                <LeftDemo key={index}>
                                    <img src={item.imgUrl} alt=""/>
                                    <div>
                                        <NavLink to={'/single/'+ (index+1)}>
                                            <h3>{item.txt}</h3>
                                        </NavLink>
                                        <p>{item.desc}</p>
                                    </div>
                                </LeftDemo>
                            )
                        })
                    }
                </Leftbottomwrap>
            </div>
        )
    }
}

const mapStateToprops = (state) =>({
    list:state.home.list,
});

export default connect(mapStateToprops,null)(Leftbottom);