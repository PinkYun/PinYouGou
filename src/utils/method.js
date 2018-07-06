// var baseURL = 'https://www.zhengzhicheng.cn/'

// // 声明一个对象 把公用的装起来的
// var method ={
//     request:(opt)=>{
//        wx.request({
//         url:`${baseURL}${opt}`||'',
//         method:opt.method||'get',
//         success:opt.success||(()=>{}),
//         fail:opt.fail||(()=>{})
//        });
//     }
// }
// //暴露出去
// module.exports.request = method.request;