const { Square, Triangle, Circle } = require("./shapes")
// Imports the Circle, Square, and Triangle classes from the shapes module


// The test suite for the Circle, Square, and Triangle classes. Each test suite contains a single test case that checks if the render method returns the expected SVG string.
// Square Shape
describe('Square', () => {
    test('renders a square', () => {
        const shape = new Square();
        let color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"></rect>`);
    })
});
    // Triangle Shape
    describe('Triangle', () => {
        test('renders a triangle', () => {
            const shape = new Triangle();
            let color = ('blue');
            shape.setColor(color);
            expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon>`);
        })});
    // Circle Shape
    describe('Circle', () => {
        test('renders a circle', () => {
            const shape = new Circle();
            let color = ('green');
            shape.setColor(color);
            expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></circle>`);
        })
    });
