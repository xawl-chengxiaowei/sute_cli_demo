import React, { Fragment, memo, useEffect, useState } from 'react'
import { Modal, Button, Form, Input, } from 'antd'
import cookie from 'react-cookies'
import './style.scss'

const XWMine = memo(() => {

  const [isLogin, setIsLogin] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm()

  const handleOk = () => {

    form.validateFields().then(values => {

      let cookieInfo = {
        useName: values.username,
        passWord: values.password
      }
      let expires = new Date(new Date().getTime() + 1 * 6 * 1000)//设置为1分钟
      cookie.save('userInfo', cookieInfo, expires)
      console.log('这是cookie', cookie.load('userInfo'));
      setIsLogin(true)
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <Fragment>
      <div className='minePage'>
        {
          isLogin || cookie.load('userInfo') ? <div>您已登录
            <h5>账号:{cookie.load('userInfo').useName}</h5>
            <h5>账号:{cookie.load('userInfo').passWord}</h5>
          </div> :
            <Button type="primary" onClick={showModal}>
              未登录请先登录
            </Button>
        }
      </div>
      <Modal title="表单效验" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={form}
          name="basicForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: '请输入非中文字符', pattern: /^[^\u4e00-\u9fa5]+$/, }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: '请输入字母数字下划线组成的密码', pattern: /^[0-9a-zA-Z_]{1,}$/, }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  )
})

export default XWMine