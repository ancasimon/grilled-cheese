import util from '../helpers/util.js';
import cheeseData from '../helpers//data/cheeseData.js';
import sandwich from './sandwich.js';

const selectCheese = (e) => {
    const cheeseId = e.target.id;
    cheeseData.setSelectedCheese(cheeseId);
    sandwich.sandwichMaker();
    console.log(cheeseData.getSelectedCheeseList());
};

const addCheeseButtonEvent = (e) => {
    const cheeseButtons = document.getElementsByClassName('cheeseButton');
    for (let i=0; i < cheeseButtons.length; i++) {
        cheeseButtons[i].addEventListener('click', selectCheese);
    }
};

const makeCheeseSelection  = () => {
    const allCheeses = cheeseData.getCheeses();
    let domString = '';
    for (let i=0; i < allCheeses.length; i++) {
        domString += `<button class="btn btn-primary px-md-2 mx-md-2 cheeseButton" id="${allCheeses[i].id}" type="submit">${allCheeses[i].type}</button>`;
    }
    util.printToDom('cheese-container', domString);
    addCheeseButtonEvent();
}; 

export default { makeCheeseSelection };
