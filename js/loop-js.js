// count object
let count = Object.keys(obj).length
// obj -> arr
let arr = Object.values(obj)

// take by id
let item = obj.filter((e) => e.id == item_id)

// loop obj
for (const key in obj) {
    let item = obj[key]
}
Object.entries(obj).map(([key, item], i) => {

})
// loop arr
arr.forEach(function (item, key) {
})

// delete element array
arr.map(function (item, i) {
    if (arr.indexOf(arr1.id) !== -1) {
        arr.splice(i, 1)
    }
})
// delete element obj
delete obj[id]

// sort arr
arr.sort((a, b) => Number(a.price) - Number(b.price));

getMax(obj, key) {
    let arr = Object.values(obj);
    let max = arr.length
        ? Math.max.apply(
            Math,
            arr.map(function (o) {
                return o[key];
            })
        )
        : 0;
    return max;
}

getMin(obj, key) {
    let arr = Object.values(obj);
    let min = arr.length
        ? Math.min.apply(
            Math,
            arr.map(function (o) {
                return o[key];
            })
        )
        : 0;
    return min;
}