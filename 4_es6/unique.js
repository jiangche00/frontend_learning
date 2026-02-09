// unique.js
const origin = [1,1,1,2,2,2,3,3,3];


// 1. 使用Set + ...解构方式
const unique1 = (arr) => [...new Set(arr)];
console.log(unique1(origin));


// 2. 使用filter + Map来筛
const unique2 = (arr) => {
    const map = new Map();
    return arr.filter(item => !map.has(item) && map.set(item, true));
}
console.log(unique2(origin));


// 3. for循环遍历
const unique3 = (arr) => {
    const bucket1 = {};
    const bucket2 = [];
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (!bucket1[val]) {
            bucket1[val] = true;
            bucket2.push(val);
        }
    }
    return bucket2
}
console.log(unique3(origin));