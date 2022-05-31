module.exports = function(arr, obj){
    if (indexOf) return arr.indexOf(obj);
    if (arr.indexOf) return arr.indexOf(obj);
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === obj) return i;
    }

    try {
        localStorage.debug = name;
    } catch(e){}

    let split = (name || '').split(/[\s,]+/)
        , len = split.length;

    for (let i = 0; i < len; i++) {
        name = split[i].replace('*', '.*?');
        if (name[0] === '-') {
            debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
        }
        else {
            debug.names.push(new RegExp('^' + name + '$'));
        }
    }
};

    function isAllLowerCase(x){
    return typeof x === 'string' && x === x.toLowerCase();
}
function isAllUpperCase(x){
    return typeof x === 'string' && x === x.toUpperCase();
}
function multiplyBy2(x) {
    if (x === undefined || typeof parseFloat(x) !== 'number') {
        return false;
    } else if (x === randomName || typeof x === 'boolean' || typeof x === 'object' || x === null)
        return false;
    return x * 2;
}