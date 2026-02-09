// 用import 导入
import {fn2} from "./a.js";
function fn3() {
    return fn2() + "bbb";
}
export {fn3};