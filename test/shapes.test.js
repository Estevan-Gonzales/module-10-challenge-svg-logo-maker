const Circle = require('../lib/shapes.js');

// A testing suite for Circle is created.
describe('Circle', () => {

  describe('start', () => {
    it('should return svg code to form a circle', () => {

      const circleParams = {
        text: 'ABC',
        textColor: 'blue',
        shape: 'circle',
        shapeColor: 'red'
      }

      const expectedOutput = 
      `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <circle cx="150" cy="100" r="90" fill="red" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=blue>ABC</text>
      </svg>`
    
      const c = new Circle(circleParams);
      const producedOutput = c.renderShape();
      expect(producedOutput).toEqual(expectedOutput);
    });
  });
});
