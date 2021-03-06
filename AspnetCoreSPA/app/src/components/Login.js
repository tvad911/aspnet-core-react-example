﻿import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Icon, notification } from 'antd';
import { login } from '../utils/APIUtils';

class Login extends Component {
    //constructor(props) {
    //    super(props);
    //}
    render() {
        const AntWrappedLoginForm = Form.create()(LoginForm)
        return (
            <div className="login-container">
                <h1 className="page-title">Login</h1>
                <div className="login-content">
                    <AntWrappedLoginForm onLogin={this.props.onLogin} />
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //const submit houstRequest = Object.assign({}, values); // clone target values
                // build submit request
                let submitRequest = {
                    Email: values.email,
                    Password: values.password
                };
                login(submitRequest)
                    .then(response => {
                        localStorage.setItem("accessToken", response.AccessToken);
                        this.props.onLogin();
                    }).catch(error => {
                        alert(error);
                        console.log("Login Form - handleSubmit - error");
                        console.log(error);
                        if (error.status === 401) {
                            notification.error({
                                message: 'Polling App',
                                description: 'Your Username or Password is incorrect. Please try again!'
                            });
                        } else {
                            notification.error({
                                message: 'Polling App',
                                description: error.message || 'Sorry! Something went wrong. Please try again!'
                            });
                        }
                    });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your username or email!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" />}
                            size="large"
                            name="email"
                            placeholder="Username or Email" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" />}
                            size="large"
                            name="password"
                            type="password"
                            placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Login;