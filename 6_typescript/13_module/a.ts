export default interface Person {
    name:string,
    age:number,
}

type obj={gender:string,hobby:string[]}
var c = 5;
// 导出的是type类型的obj，和值c
export {type obj, c}