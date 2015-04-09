var angle_math = require('../index.js');
var should = require('should');

var PI = Math.PI;
var TWO_PI = 2*Math.PI;

function deg(x) {
   return x/180*PI;
}

describe('Angle Math', function() {
   describe('normalize', function() {

      it('should normalize 0 to 0', function() {
         angle_math.normalize(0).should.equal(0);
      });

      it('should normalize 1 to 1', function() {
         angle_math.normalize(1).should.equal(1);
      });

      it('should normalize 2pi to 0', function() {
         angle_math.normalize(TWO_PI).should.equal(0);
      });

      it('should normalize -1 to 2pi-1', function() {
         angle_math.normalize(-1).should.equal(TWO_PI-1);
      });

      it('should normalize -2pi to 0', function() {
         angle_math.normalize(-TWO_PI).should.equal(0);
      });

      it('should normalize -3pi to pi', function() {
         angle_math.normalize(-3*PI).should.equal(PI);
      });

      it('should normalize +3pi to pi', function() {
         angle_math.normalize(3*PI).should.equal(PI);
      });

   });

   describe('angular difference', function() {
      
      describe('unambiguous cases', function() {
         var tests = [
            [20, 20, 0],

            [100, 50, 50],
            [50, 100, -50],

            [350, 10, -20],
            [10, 350, 20],

            [360, 0, 0],
            [0, 360, 0],
         ];

      
         for (var i = 0; i < tests.length; i++) {
            var b = tests[i][0];
            var a = tests[i][1];
            var c = tests[i][2];
            it(b + 'deg - ' + a + 'deg = ' + c + 'deg', function() {
               angle_math.difference(deg(b), deg(a)).should.equal(deg(c))
            });
         }
      });

      describe('ambiguous cases', function() {
         var tests = [
            [0, 180, 180],
            [180, 0, 180],
            [360, 180, 180],
            [180, 360, 180],
            [100, 280, 180],
            [280, 100, 180],
         ];

      
         for (var i = 0; i < tests.length; i++) {
            var b = tests[i][0];
            var a = tests[i][1];
            var c = tests[i][2];
            
            it(b + 'deg - ' + a + 'deg = +/-' + c + 'deg', function() {
               Math.abs(
                  angle_math.difference(deg(b), deg(a))
               )
               .should.equal(deg(c))
            });
         }
      });
      
   });
});
