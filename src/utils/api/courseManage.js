/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-08-16 16:21:07
 * @LastEditTime: 2022-08-16 16:33:45
 * @LastEditors: Sun yinge
 */
import request from '../request'

// 获取一级分类
export function getFirstCategorys(){
	return request({
		url:'/api/course/category/getFirstCategorys'
	})
}