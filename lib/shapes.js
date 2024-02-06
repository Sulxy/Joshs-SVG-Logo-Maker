// Define a class called Shapes
class Shapes {
    constructor() {
        this.color = '';
    }

    // Method to set the color of the shape
    setColor(color) {
        this.color = color;
    }
}

// Define a class called Square that extends the Shapes class
class Square extends Shapes {
    // Method to render the square shape as an SVG rectangle
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
    }
}

// Define a class called Triangle that extends the Shapes class
class Triangle extends Shapes {
    // Method to render the triangle shape as an SVG polygon
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`;
    }
}

// Define a class called Circle that extends the Shapes class
class Circle extends Shapes {
    // Method to render the circle shape as an SVG circle
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
    }
}

// Export the Square, Triangle, and Circle classes
module.exports = { Square, Triangle, Circle };