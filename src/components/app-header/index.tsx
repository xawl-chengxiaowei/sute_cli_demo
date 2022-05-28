import React, { memo, useState } from 'react'

import { Menu } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

import './style.css'
import { NavLink } from 'react-router-dom'

const XWAppHeader = memo(() => {

  const [current, setCurrent] = React.useState('displayMusic')
  const [items, setItems] = useState([
    {
      label: (
        <>
          <NavLink to='/'>发现音乐</NavLink>
        </>
      ),
      key: 'displayMusic',
    },
    {
      label: (
        <>
          <NavLink to='/mine'>我的音乐</NavLink>
        </>
      ),
      key: 'app',
    },
    {
      label: (
        <>
          <NavLink to='/mysong'>我的歌单</NavLink>
        </>
      ),
      key: 'friend'

    },
    {
      label: '我的设置',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: '设置1',
          children: [
            {
              label: '设置1-1',
              key: 'setting:1',
            },
            {
              label: '设置1-2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: '设置2',
          children: [
            {
              label: '设置2-1',
              key: 'setting:3',
            },
            {
              label: '设置2-2',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="#" target="_blank" rel="noopener noreferrer">
          社区服务
        </a>
      ),
      key: 'alipay',
    },
  ])

  const onClick = (e: any) => {
    console.log('click', e);
    setCurrent(e.key)
  }
  return (
    <div>

      {/* <NavLink to="/">发现音乐</NavLink>
      <NavLink to="/mine">我的音乐</NavLink>
      <NavLink to="/friend">我的朋友</NavLink> */}
      <div className='header-setting'>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>

    </div>
  )
})


export default XWAppHeader