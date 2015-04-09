What is this?
=============

It's a math library for when you want to find things out about angles.

My own particular use case for this is that I always (for some reason) find myself needing
to find the angular difference between two angles.

For example, if an airplane is facing 23 degrees north of east, and I want it to face west, which
way should it turn? The answer to that is found by calculating the angular difference and
then examining the sign. This library provides that angular difference calculation.

Other notes & portability
=========================

I wrote (and intend on keeping) this in a style that makes it very easy to port the logic to other languages.
The only assumption I (try to) make about the behavior of the programming language is the behavior of the
`fmod` (floating point modulus or `%`) for negative numbers. Later on, this assumption may even be relaxed.


How to run tests?
=================

Well, first you need to install the dependencies (just run `npm install` with no other
arguments) and then run `mocha` to run the tests.
