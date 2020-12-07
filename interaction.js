
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.startx = 0
    this.starty = 0
    this.endx = 0
    this.endy = 0
    var pressed = false
	// Developper les 3 fonctions gérant les événements

  this.mouseDown = function (evt) {
    pressed = true
    var coord = getMousePosition(canvas, evt)
    this.startx = coord.x
    this.starty = coord.y
    console.log('mouseDown : '+this.startx+', '+this.starty)
    //interactor.onInteractionUpdate(this)
  }.bind(this);

  this.mouseMove = function (evt) {
    if (pressed) {
      var coord = getMousePosition(canvas, evt)
      this.endx = coord.x
      this.endy = coord.y
      console.log('mouseMove : '+coord.x+', '+coord.y)
      //interactor.onInteractionUpdate(this)
    }
  }.bind(this);

  this.mouseUp = function (evt) {
    if (pressed) {
      var coord = getMousePosition(canvas, evt)
      this.endx = coord.x
      this.endy = coord.y
      console.log('mouseMove : '+coord.x+', '+coord.y)
      pressed = false
      //interactor.onInteractionUpdate(this)
    }

  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mouseDown, false)
  canvas.addEventListener('mouseup', this.mouseUp, false)
  canvas.addEventListener('mousemove', this.mouseMove, false)


};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};
