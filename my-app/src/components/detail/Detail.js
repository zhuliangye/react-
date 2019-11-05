import React,{Component} from 'react';
import {DetailWrap,DetailSwraper,DetailDescript} from './detailstyle'
import { Carousel } from 'antd';
class Detail extends Component{
    render() {
        return(
            <div>
                <DetailWrap>
                    <h1>青竹良品原创生活类电商品牌</h1>
                    <DetailSwraper>
                        <Carousel autoplay>
                            <div>
                                <img src="//asset.ibanquan.com/s/30611/727/index_slide_2?v=1568268246_1572510848" alt=""/>
                            </div>
                            <div>
                                <img src="//asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_1572510848" alt=""/>
                            </div>
                            <div>
                                <img src="//asset.ibanquan.com/s/30611/727/index_slide_3?v=1568268246_1572510848" alt=""/>
                            </div>
                        </Carousel>
                    </DetailSwraper>
                    <DetailDescript>
                        青竹良品原创生活类电商品牌,秉承-贯的严谨态度 ,我们深入世界各地，从源头全程
                        严格把控商品生产环节, 力求帮消费者甄选到最优质的商品,全线采用天然原材料，拐
                        制甲醛低量无害,采用进口工艺,国际生产线不断优化,食材保证核心原产地新鲜直
                        供，让你享受品质生活!
                    </DetailDescript>
                    <DetailDescript>
                        青竹良品原创生活类电商品牌,秉承-贯的严谨态度 ,我们深入世界各地，从源头全程
                        严格把控商品生产环节, 力求帮消费者甄选到最优质的商品,全线采用天然原材料，拐
                        制甲醛低量无害,采用进口工艺,国际生产线不断优化,食材保证核心原产地新鲜直
                        供，让你享受品质生活!
                    </DetailDescript>
                </DetailWrap>
            </div>
        )
    }
}
export default Detail;
