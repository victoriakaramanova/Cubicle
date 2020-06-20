const Cube = require('../models/cube');

const newCube = new Cube('First','It is the actually the second cube','https://google.com',1);

console.log(newCube);

newCube.save();