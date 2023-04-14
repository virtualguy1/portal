import React from 'react'
import { Form, message } from 'antd'
import { Link } from 'react-router-dom'
import { RegisterUser } from './apis/authentication';

function Register() {

    const onFinish = async (values) => {
        //console.log("Success :", values);
        try {
            const response = await RegisterUser(values);
            if (response.success) {
                message.success(response.message);
            } else {
                message.error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    return (
        <div className='h-screen d-flex justify-content-center align-items-center bg-primary'>
            <div className='bg-white p-4 w-400'>
                <h4>Placement Portal - Register</h4>
                <div className='divider'></div>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item name='name' label='Name'>
                        <input type='text' />
                    </Form.Item>
                    <Form.Item name='email' label='College Email'>
                        <input type='text' />
                    </Form.Item>
                    <Form.Item name='Password' label='Password'>
                        <input type='password' />
                    </Form.Item>
                    <button className='primary-contained-btn w-100 mt-2' type='submit'>Register</button>
                    <Link to='/login' className='d-block mt-2'>Already a Member? Click here to Login</Link>
                </Form>
            </div>
        </div>
    )

}
export default Register