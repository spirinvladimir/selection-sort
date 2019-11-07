const selection_sort = require('./index')
const assert = require('assert')

describe('Selection sort', () => {
    it('should keep it sorted', () =>
        selection_sort()
            .then(sort =>
                assert.deepEqual(
                    sort([1, 2, 3, 4]),
                    [1, 2, 3, 4]
                )
            )
    )
    it('should sort numbers', () =>
        selection_sort()
            .then(sort =>
                assert.deepEqual(
                    sort([2, 1, 4, 3]),
                    [1, 2, 3, 4]
                )
            )
    )
})
