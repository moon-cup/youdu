import React, { Component } from "react";
import { Input } from "antd";
import { Button } from "antd";
import style from "../views/Login.module.css";
import api from "../api/api_youdu";

export default class Login extends Component {
  state = {
    ipt1: "",
    ipt2: ""
  };
  render() {
    return (
      <div>
        <img
          src="https://www.youdubook.com/static/index/Img/indexbanner.jpg"
          className={style.img}
        />
        <span className={style.title}>有毒小说后台管理系统</span>
        <div className={style.input1}>
          用户名:
          <Input placeholder="admin" className={style.ipt1} ref="ipt1" />
        </div>
        <div className={style.input2}>
          密码:
          <Input  placeholder="admin" className={style.ipt2} ref='ipt2'/>
        </div>
        <Button
          type="primary"
          block
          className={style.button}
          onClick={this.login.bind(this)}
        >
          登陆
        </Button>
      </div>
    );
  }
  // 登陆
  login() {
    // console.log(this.refs.ipt1.state.value)
    // console.log(this.refs.ipt2.state.value)
    let params = {
      userName: this.refs.ipt1.state.value,
      password: this.refs.ipt2.state.value
    };
    api.adminLogin(params).then(data => {
      // console.log(data.data.token)
      let token = data.data.token
      localStorage.setItem('token',token)
      alert('登陆成功!')
    })
  }
}
