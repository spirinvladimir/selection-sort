var fs = require('fs')
var mem
var main
var f64a

module.exports = () =>
    new Promise((y, n) => {
        fs.readFile('main.wasm', (error, _) =>
            error
                ? n(error)
                : WebAssembly.instantiate(_, {js: {mem}})
                    .then(_ => {
                        sort = _.instance.exports.sort
                        y(main)
                    })
        )
        mem = new WebAssembly.Memory({initial: 1, maximum: 10})
        f64a = new Float64Array(mem.buffer)
    })

function main (array) {
    //return array.sort()
    var i = 0
    const sorted = new Array(array.length)
    while (i < array.length) f64a[i] = array[i++]
    sort(i)
    while (i--) sorted[i] = f64a[i]
    return sorted
}
