import React,{Component} from "react";
import {LoginWrap,LoginDemo} from './loginstyle'
import LoginImg from './../../static/login.jpg'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(values.username == 111 && values.password == 111){
                    this.props.history.push('/')
                }else {
                    this.props.history.push('/login')
                }
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <LoginWrap>
                    <img src={LoginImg} alt=""/>
                    <LoginDemo>
                        <h2>登录</h2>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入用户名"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住密码</Checkbox>)}
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </LoginDemo>
                </LoginWrap>

            </div>
        )
    }
}
export default Form.create()(Login);