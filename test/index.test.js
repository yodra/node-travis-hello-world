
const sum = require('../index');

describe('sum', () => {
    test('should sum two numbers', () => {
        expect(sum(2, 2)).toBe(4);
    });
});