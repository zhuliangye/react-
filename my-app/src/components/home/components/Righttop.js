import React,{Component} from 'react';
import {Righttopwrap,RightItem} from './../homestyle'
import {connect} from "react-redux";
class Righttop extends Component{

    render() {
        return(
            <div>
                <Righttopwrap>
                    {
                        this.props.data.map((item,index)=>{
                           return(
                               <RightItem key={index}>
                                   <img src={item.topicUrl} alt=""/>
                                   <p>{item.title}</p>
                               </RightItem>
                           )
                        })
                    }
                </Righttopwrap>
            </div>
        )
    }
}

const mapStateToprops = (state) =>({
    data:state.home.data,
});

export default connect(mapStateToprops,null)(Righttop);