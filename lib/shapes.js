class Square{
    constructor(shapeObject) {
        this.svgCode = 
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white" />
        <rect x="60" y="10" width="180" height="180" fill="${shapeObject.shapeColor}"/> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${shapeObject.textColor}>${shapeObject.text}</text>
        </svg>`
    }
    render() {
        return this.svgCode;
    }
}

class Triangle {
    constructor(shapeObject) {
        this.svgCode = 
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white" />
        <polygon points = "150, 10 250, 190 50, 190" fill="${shapeObject.shapeColor}"/> 
        <text x="150" y="160" font-size="60" text-anchor="middle" fill=${shapeObject.textColor}>${shapeObject.text}</text>
        </svg>`
    }
    render() {
        return this.svgCode;
    }
}

class Circle {
    constructor(shapeObject) {
        this.svgCode = 
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white" />
        <circle cx="150" cy="100" r="90" fill="${shapeObject.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${shapeObject.textColor}>${shapeObject.text}</text>
        </svg>`
        console.log(shapeObject.shapeColor);
    }
    render() {
        return this.svgCode;
    }
}

function generateSVG(shapeObject) {
    console.log(shapeObject.shape)
    if (shapeObject.shape == 'square') {
        let s = new Square(shapeObject);
        renderedCode = s.render();
        return renderedCode;
    }
    else if (shapeObject.shape == "triangle") {
        let t = new Triangle(shapeObject);
        renderedCode = t.render();
        return renderedCode;
    } else {
        let c = new Circle(shapeObject);
        renderedCode = c.render();
        return renderedCode;
    }
}

module.exports = generateSVG;