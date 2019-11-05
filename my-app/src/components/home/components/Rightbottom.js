import React,{Component} from 'react';
import {Rightbottomwrap,RightDemo} from './../homestyle'
import {connect} from "react-redux";
class Rightbottom extends Component{
    render() {
        return(
            <div>
                <Rightbottomwrap>
                    <RightDemo>
                        <div className='erweima'>
                            <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/>
                            <p>微信公众号</p>
                        </div>
                        <div className='erweima'>
                            <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_1?v=1568268246_1572510848" alt=""/>
                            <p>微博公众号</p>
                        </div>
                        <div className='lianjie'>
                            {
                                this.props.msg.map((item,index)=>{
                                    return(
                                        <p key={index}>{item.title}</p>
                                    )
                                })
                            }
                        </div>
                    </RightDemo>
                </Rightbottomwrap>
            </div>
        )
    }
}

const mapStateToprops = (state) =>({
    msg:state.home.msg,
});

export default connect(mapStateToprops,null)(Rightbottom);