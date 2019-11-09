var fs = require('fs')
var mem
var main
var selection_sort
var f64a

module.exports = () =>
    new Promise((y, n) => {
        fs.readFile('main.wasm', (error, _) =>
            error
                ? n(error)
                : WebAssembly.instantiate(_, {js: {mem}})
                    .then(_ => {
                        selection_sort = _.instance.exports.selection_sort
                        y(main)
                    })
        )
        mem = new WebAssembly.Memory({initial: 1, maximum: 10})
        f64a = new Float64Array(mem.buffer)
    })

function main (array) {
    var i = 0
    const sorted = new Array(array.length)
    if (array.length === 1) return array.copyWithin()
    while (i < array.length) f64a[i] = array[i++]
    selection_sort(i)
    while (i--) sorted[i] = f64a[i]
    return sorted
}
