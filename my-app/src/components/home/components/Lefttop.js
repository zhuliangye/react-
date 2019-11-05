import React,{Component} from 'react';
import {Lefttopwrap,LeftItem} from './../homestyle'
import {connect} from "react-redux";
class Lefttop extends Component{
    render() {
        return(
            <div>
                <Lefttopwrap>
                    {
                        this.props.piclist.map((item,index)=>{
                            return(
                                <LeftItem key={index}>
                                    <img src={item.topicUrl} alt=""/>
                                    <span>{item.txt}</span>
                                </LeftItem>
                            )
                        })
                    }
                </Lefttopwrap>
            </div>
        )
    }
}

const mapStateToprops = (state) =>({
    piclist:state.home.piclist,
});

export default connect(mapStateToprops,null)(Lefttop);