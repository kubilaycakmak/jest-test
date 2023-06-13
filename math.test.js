const { add, subtract, multiply, divide } = require('./math.js');

test('add', () => {
    expect(add(1, 2)).toBe(3);
}
);

test('subtract', () => {
    expect(subtract(2, 1)).toBe(1);
}
);

test('multiply', () => {
    expect(multiply(2, 2)).toBe(4);
}
);

test('divide', () => {
    expect(divide(4, 2)).toBe(2);
}
);

// Path: math.test.js