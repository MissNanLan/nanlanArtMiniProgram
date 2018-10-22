let config = require('./config.js');
import { promisifys, toPromisify } from '../promisfy/promisfy.js'
let DEBUG = false; //切换数据入口
//var Mock = require('../miniprogram_npm/mockjs/index.js')



export function apiRequest(url ,params, callBack, method, header) {
  if (!DEBUG) { 
    promisifys.request({ // api Promise化
      url: config.BATH_PATH + url, // 请求的地址
      method: method ? method : 'post', // 请求的方法
      data: params, // 请求的参数
      header: header ? header : { // 设置请求的header
        "Content-Type": "application/json"
      }
    }).then((res)=>{
        
    }).cacth((err) =>{

    })
    // wx.request({
    //   // url: config.BATH_PATH + url, // 请求的地址
    //   // method: method ? method : 'post', // 请求的方法
    //   // data: params, // 请求的参数
    //   // header: header ? header : { // 设置请求的header
    //   //   "Content-Type": "application/json"
    //   },
    //   success: callBack
      
    // });
  }
}
//  else {
//   // 模拟数据
//   var res = Mock.mock({
//     'error_code': '',
//     'error_msg': '',
//     'photographyData|4': [{
//       "categoryName": "@cname(2,5)",
//       "categoryId|+1": 1,
//       "result|9": [{
//         'id|+1': 1,
//         'imgSrc': "@image('200x100', '#50B347', '#FFF', 'Mock.js')",
//         'imgName': '@ctitle(3,8)',
//         'footprint': '@integer(1,1000)',
//         'favorite': '@integer(1,1000)',
//         'description': '@cparagraph(3,20)'
//       }]
//     }],
//     'essayData|4': [{
//       "categoryName": "@cname(2,5)",
//       "categoryId|+1": 1,
//       "result|2": [{
//         'id|+1': 1,
//         'avatar': "@image('30x30', '#50B347', '#FFF', '暂无图片')",
//         'username': "@cname(2,5)",
//         'thumbnail': "@image('60x60', '#50B347', '#FFF', 'Mock.js')",
//         'essayTitle': '@string(3,8)',
//         'essayDetail': '@cparagraph(3,8)', // 详细内容
//         'favorite': '@integer(1,1000)', // 点赞数
//         'footprint': '@integer(3,20)' // 足迹数
//       }]
//     }]
//   })
//   fn(res);
// }

// module.exports = apiRequest;