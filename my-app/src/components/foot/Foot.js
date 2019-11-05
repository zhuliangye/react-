import React,{Component} from 'react';
import {FootWrap,FootLeft,FootCenter,FootRight,FootLogo,FootDesc} from "./footstyle";
import {connect} from "react-redux";
class Foot extends Component{
    render(){
        return(
            <FootWrap>
               <div className='FootContent'>
                   <FootLeft>
                       <FootLogo/>
                        <FootDesc>
                            青竹良品原创生活类电商品牌。秉承一贯的严道态
                            度，我们深入世界各地，从源头全程严格把控商品生
                            产环节，力求帮消费者甄选到最优质的商品，全线采
                            用天然原材料，控制甲醛低量无害， 采用进口工艺，
                            国际生产线不断优化。食材保证核心原产地新鲜直
                            供，让你享受品质生活!
                        </FootDesc>
                    </FootLeft>
                   <FootCenter>
                       <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/>
                       <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_1?v=1568268246_1572510848" alt=""/>
                   </FootCenter>
                   <FootRight>
                       <ul>
                           {
                               this.props.list.map((item,index)=>{
                                   return(
                                       <li key={index}>{item}</li>
                                   )
                               })
                           }
                       </ul>
                   </FootRight>
               </div>
            </FootWrap>
        )
    }
}
// const mapStateToprops = (state) =>{
//     console.log(state)
// };
const mapStateToprops = (state) =>({
    list:state.foot.list,

});
export default connect(mapStateToprops,null)(Foot);