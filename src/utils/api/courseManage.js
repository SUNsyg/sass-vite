/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-16 16:21:07
 * @LastEditTime: 2022-09-06 15:03:10
 * @LastEditors: Sun yinge
 */
import request from '../request'

// 获取一级分类
export function getFirstCategorys(){
	return request({
		url:'/api/course/category/getFirstCategorys'
	})
}

export function mostNew( data ){
	return request({
		url:'/api/course/mostNew',
		method:"post",
		data
	})
}