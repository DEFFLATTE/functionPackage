var all = {};
//排序
all.compare=function(property) {
    return function (a,b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
//使用 list.sort(this.compare("webTableNum"));


export default all;
