/**
 * api promise化
 * 
 */
export function toPromisify(target){
  if(target){
    return (arg) => new Promise((reslove,reject)=>{
      arg.success = (res)=>{
        reslove(res)
      }
      arg.fail =(err)=>{
        reject(err)
      }
      target(arg)
    })
  }
}
const funcs =[ // 将所有的异步方法(有success和fail方法的api)全部导出
  "request"
]
export const promisifys = {}
funcs
 .forEach((f)=>{
   if(wx[f]){
     promisifys[f] = toPromisify[wx[f]]
   }
 })