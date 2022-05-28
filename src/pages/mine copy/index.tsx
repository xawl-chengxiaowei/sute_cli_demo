import React, { Fragment, memo, useState } from 'react'
import { Modal, Button, Form, Input, } from 'antd'
import './style.css'

const XWMine = memo(() => {

  const [isLogin, setIsLogin] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm()


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {

    form.validateFields().then(values => {
      console.log(values);
    });

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Fragment>

      {
        isLogin ? <div>已登录
        </div> :

          <Button type="primary" onClick={showModal}>
            未登录请先登录
          </Button>
      }
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
            label="Password"
            name="password"
            rules={[{ required: true, message: '请输入字母数字下划线组成的密码', pattern: /^[0-9a-zA-Z_]{1,}$/, }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

    </Fragment>
  )
})

export default XWMine