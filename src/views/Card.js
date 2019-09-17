import React, { Component } from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default class PCard extends Component {
    render() {
        return (
            <Card
                style={{ width: "100%" }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        )
    }
    componentDidMount(){
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        console.log(userInfo)
    }
}

