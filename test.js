const selection_sort = require('./index')
const assert = require('assert')

describe('Selection sort', () => {
    it('should keep it sorted [1,2,3,4]', () =>
        selection_sort()
            .then(sort =>
                assert.deepEqual(
                    sort([1, 2, 3, 4]),
                    [1, 2, 3, 4]
                )
            )
    )
    it('should sort numbers [2,4,1,3]', () =>
        selection_sort()
            .then(sort =>
                assert.deepEqual(
                    sort([2, 4, 1, 3]),
                    [1, 2, 3, 4]
                )
            )
    )
    it('should sort two elements [5,4]', () =>
        selection_sort()
            .then(sort =>
                assert.deepEqual(
                    sort([5, 4]),
                    [4, 5]
                )
            )
    )
    it('should leave one element without sort [5]', () =>
        selection_sort()
            .then(sort =>
                assert.deepEqual(
                    sort([5]),
                    [5]
                )
            )
    )
    const n = 8192
    describe('Max array length ' + n, () => {
        const sin = Array(n).fill(Math.PI).map((x, i) => Math.sin(i * x / n)).map(x => x.toFixed(5))
        const cos = Array(n).fill(Math.PI).map((x, i) => Math.cos(i * x / n)).map(x => x.toFixed(5))
        const sin_sorted = sin.sort((a, b) => a - b)
        const cos_sorted = cos.sort((a, b) => a - b)
        it('sin()', () =>
            selection_sort()
                .then(sort =>
                    assert.deepEqual(
                        sort(sin),
                        sin_sorted
                    )
            )
        )
        it('cos()', () =>
            selection_sort()
                .then(sort =>
                    assert.deepEqual(
                        sort(cos),
                        cos_sorted
                    )
            )
        )
    })
})
