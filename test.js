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
    it('should sort numbers [5,4,3,2,1]', () =>
        selection_sort()
            .then(sort =>
                assert.deepEqual(
                    sort([5, 4, 3, 2, 1]),
                    [1, 2, 3, 4, 5]
                )
            )
    )
    it('should sort numbers [0,5,4,3,2,1]', () =>
        selection_sort()
            .then(sort =>
                assert.deepEqual(
                    sort([0, 5, 4, 3, 2, 1]),
                    [0, 1, 2, 3, 4, 5]
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
})
