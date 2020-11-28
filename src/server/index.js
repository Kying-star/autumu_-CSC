/*
 * @Author: your name
 * @Date: 2020-11-28 17:07:32
 * @LastEditTime: 2020-11-28 17:27:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /app/src/server/index.js
 */
import axios from 'axios'
// const BACEURL = '123.57.77.163:80'
const instance = axios.create({
    baseURL: '/api',
    timeout: 50000,
    headers: {
      'Content-Type': 'application/json'
    }
})
/**
 * @description: 注册
 * @param {*} username
 * @param {*} password
 * @return {*}
 */
export function register(username,password){
    return instance.post('/user/register',{username,password})
}