// import add subtract multiply divide from './math.js' and write tests for each function.

const { add, subtract, multiply, divide } = require('./math.js');

describe('add', () => {
    it('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
}
);

describe('subtract', () => {
    it('subtracts two numbers', () => {
        expect(subtract(1, 2)).toBe(-1);
    });
}
);

describe('multiply', () => {
    it('multiplies two numbers', () => {
        expect(multiply(1, 2)).toBe(2);
    });
}
);

describe('divide', () => {
    it('divides two numbers', () => {
        expect(divide(1, 2)).toBe(0.5);
    });
}
);
