const cheeses = [
    {
        id: "swiss",
        type: "Swiss",
        color: "white",
        price: .50
    },
    {
        id: "blue",
        type: "Blue Cheese",
        color: "light blue",
        price: 1
    },
    {
        id: "american",
        type: "American",
        color: "Yellow",
        price: .50
    }
];

let selectedCheeseList = [];

let selectedCheeseId = '';

const setSelectedCheese = (cheeseId) => {
    selectedCheeseId = cheeseId; 
    console.log(selectedCheeseId);
};

// selectedCheeseList.push(selectedCheeseId);

const getCheeses = () => {
    return cheeses;
};

// const setSelectedCheeseList = () => {
//     return selectedCheeseList;
// }

export default { setSelectedCheese, getCheeses };