//breads.js component - with domString builder (find something nice in Bootstrap for the radio buttons)
//will need to import breads component into main.js
//also need an event listener on the radio button (that you click to select the bread)--this event listener adds the selected bread to the sandwich; for this we need a set method (we will call this method and pass in the breadId: breadData.setSelectedBread(breadId)); we will create a selectedBreadId variable in breadData
//setSelectedBread = assign a variable(selectedBreadId) to the id passed in


import util from '../helpers/util.js';
import breadData from '../helpers/data/breadData.js';

//forEach loop - takes the current thing you are on/you name it whatever you want to name it (second set of parentheses {this is the equivalent of the [i] in the regular for loop} and then specifies a condition ) - can doit only with arrays of objects (not html collections!!)

//monkeybutts.forEach((monkeybutt) => {
//     console.log(monkeybutt)
// })

const selectBread = (e) => {
    const breadId = e.target.id;
    breadData.setSelectedBread(breadId);
};

const radioButtonEvent = (e) => {
    const radioButtons = document.getElementsByClassName('breadRadio');
    for (let i=0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('click', selectBread);
    }
};

const makeBreadSelection  = () => {
    const allBreads = breadData.getBreads();
    let domString = '';
    for (let i=0; i < allBreads.length; i++) {
        domString += '<div class="form-check form-check-inline">';
            domString += `<input class="form-check-input breadRadio" type="radio" name="inlineRadioOptions" id="${allBreads[i].id}" value="option1">`;
            domString += `<label class="form-check-label" for="${allBreads[i].id}">${allBreads[i].type}</label>`;
        domString += '</div>';
    }
    util.printToDom('bread-container', domString);
    radioButtonEvent();
}; 

export default { makeBreadSelection };

