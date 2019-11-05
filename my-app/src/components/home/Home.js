import React,{Component} from 'react';
import {HomeWrap,LeftNav,RightNav} from './homestyle'
import Lefttop from "./components/Lefttop";
import Leftbottom from "./components/Leftbottom";
import Righttop from "./components/Righttop";
import Rightbottom from "./components/Rightbottom";
import axios from 'axios';
import {connect} from "react-redux";
class Home extends Component{
    render() {
        return(
            <div>
                <HomeWrap>
                    <LeftNav>
                        <div className='imgTop'>
                            <img src="http://asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_1572510848" alt=""/>
                        </div>

                        <Lefttop/>
                        <Leftbottom/>
                    </LeftNav>
                    <RightNav>
                        <Righttop/>
                        <Rightbottom/>
                    </RightNav>
                </HomeWrap>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/data/getHomeList.json')
            .then((res)=>{
                //console.log(res.data)
                const data = res.data.data;
                const action = {
                    type:'init_home_data',
                    data,
                }
                this.props.changeHomeData(action)
            })
    }
};
const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        dispatch(action)
    }
});
export default connect(null,mapDispatch)(Home);