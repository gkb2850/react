import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import { WechatOutlined, WeiboOutlined } from '@ant-design/icons';

export default class App extends Component {
  onChange = () => {

  }
  render() {
    return (
      <div>
        App........
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Primary Button</Button>
        <WechatOutlined />
        <WeiboOutlined />
        <DatePicker onChange={this.onChange} />
      </div>
    )
  }
}
