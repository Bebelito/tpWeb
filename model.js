// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing {
  this.shapes = [];
  this.deletedShapes = [];



  this.add = function (shape) {
    this.shapes.push(shape)
  }.bind(this);

  this.remove = function (index) {
    var toDelete = this.shapes[index]
    this.shapes.splice(index)
    this.deletedShapes.push(toDelete)
  }.bind(this);

  this.undo = function () {
    this.shapes.push(this.deletedShapes[this.deletedShapes.length-1])
    this.deletedShapes.splice(this.deletedShapes.length-1)
  }
};

this.Shape = function {
  this.color
  this.thickness
};

this.Shape.prototype.Rectangle = function (color, thickness) {
  Shape.call(this,color, thickness);
  this.x
  this.y
  this.width
  this.height
};

this.Shape.prototype.Line = function (x1, y1, x2, y2, color, thickness) {
  Shape.call(this,color, thickness)
  this.startx
  this.starty
  this.endx
  this.endy
};
