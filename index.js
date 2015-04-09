var PI = Math.PI;
var TWO_PI = 2*PI;

/**
 * Computes "b-a" in angular terms, i.e. the smallest
 * (in terms of magnitude) angle x such that a+x = b.
 *
 * This may also be called the angular difference or
 * angular distance.
 */
function difference(b, a) {
   // First normalize each arg
   a = normalize(a);
   b = normalize(b);

   var diff = b-a;
   var mag = Math.abs(b-a);

   var answer = b-a;
   if (mag < PI) {
      return answer;
   }
   else {
      if (answer > 0) {
         return answer-TWO_PI;
      }
      else {
         return TWO_PI+answer;
      }
   }
}

/**
 * Converts an angle to the range [0, 2*PI)
 */
function normalize(theta) {
   return ((theta % TWO_PI) + TWO_PI) % TWO_PI;
}

exports.normalize = normalize;
exports.difference = difference;
