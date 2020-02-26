//div id html folder with id="bread-container"
//printToDom function in utils file
//create data folder > then create: breadData will have array of bread objects, will export a getter function (getBreads) - this is how we get the bread object to the sandwich 
//each bread object: type, color, price, id
//breads.js component - with domString builder (find something nice in Bootstrap for the radio buttons)
//will need to import breads component into main.js
//also need an event listener on the radio button (that you click to select the bread)--this event listener adds the selected bread to the sandwich; for this we need a set method (we will call this method and pass in the breadId: breadData.setSelectedBread(breadId)); we will create a selectedBreadId variable in bbreadData
//setSelectedBread = assign a variable(selectedBreadId) to the id passed in
// init function lives here!!

import breads from './components/breads.js';
import cheeses from './components/cheeses.js';

const init = () => {
    breads.makeBreadSelection();
    cheeses.makeCheeseSelection();
};

init();