import React, {Component} from "react";
import {SingleWrap} from "./singlestyle";
import axios from 'axios';
class Single extends Component{
    constructor(){
        super();
        this.state = {
            title:'',
            body:'',
        }
    }
    render() {
        //console.log(this.state.page)
        return(
            <div>
                <SingleWrap>
                  <h2>{this.state.title}</h2>
                    <p>{this.state.body}</p>
                </SingleWrap>
            </div>
        )
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        axios.get('http://jsonplaceholder.typicode.com/posts/'+id)
            .then((res)=>{
                this.setState({
                    title:res.data.title,
                    body:res.data.body,
                })

            })

    }
}



export default Single;