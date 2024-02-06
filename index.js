// Importing required modules
const filesystem = require("graceful-fs");
const inquirer = require("inquirer");
const { Square, Triangle, Circle } = require("./lib/shapes");

// Svg class for rendering SVG elements
class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    // Render method to generate SVG markup
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    // Method to set the text element in SVG
    setTextElement(text, color) {
        const textWidth = text.length * 20; // Assuming each character has a width of 20
        const x = 150 - (textWidth / 2); // Calculate the x position to center the text
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    // Method to set the shape element in SVG
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "Background-Shape",
        message: "Select a Background Shape?",
        choices: ["Square", "Triangle", "Circle"],
    },
];

// Function to write data to a file
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]");
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("logo.svg created!");
    });
}

// Function to initialize the program
async function init() {
    console.log("Initializing...");
    let svgString = "";
    let svg_file = "logo.svg";

    // Prompt the user with questions and get answers
    const answers = await inquirer.prompt(questions);

    let user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        // Validate user input for text
        user_text = answers.text;
    } else {
        console.log("Please use 3 characters or less!");
        return;
    }
    console.log("User text: [" + user_text + "]");

    // Get user input for font color and shape color
    user_font_color = answers["text-color"];
    console.log("Font color: [" + user_font_color + "] has been selected.");
    user_shape_color = answers.shape;
    console.log("Shape color: [" + user_shape_color + "] has been selected.");

    // Get user input for shape type
    user_shape_type = answers["Background-Shape"];
    console.log("Background Shape: [" + user_shape_type + "] has been selected.");

    // Create the appropriate shape object based on user input
    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User selected Square Shape");
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("User selected Triangle Shape");
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User selected Circle Shape");
    }
    else {
        console.log("Invalid shape!");
    }
    user_shape.setColor(user_shape_color);

    // Create a new Svg instance and add the shape and text elements to it
    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();

    // Print the generated shape to the console
    console.log("Displaying shape:\n\n" + svgString);

    // Write the shape to a file
    console.log("Shape creation complete!");
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString);
}

// Call the init function to start the program
init();
