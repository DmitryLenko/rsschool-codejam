module.exports = function recursion(tree , index = 0, arr = []) {
    if(arr[index] === undefined) arr[index] = [];
    for(let item in tree) {
        if(item === 'value') {
            arr[index].push(tree[item]);
        }
        if(item === 'left') {
            recursion(tree[item], ++index, arr);
        } else if( item === 'right') {
            recursion(tree[item], index, arr);
        } 
    }
    return arr;
}