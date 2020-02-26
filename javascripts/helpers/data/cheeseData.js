const cheeses = [
    {
        id: "swiss",
        type: "Swiss",
        color: 'cornsilk',
        price: 0.5
    },
    {
        id: "blue",
        type: "Blue",
        color: 'blue',
        price: 1
    },
    {
        id: "american",
        type: "American",
        color: '#FFB90F',
        price: 0.5
    }
];

const selectedCheeseList = [];

const setSelectedCheese = (cheeseId) => {
    const foundCheese = cheeses.find((currentCheeseItem) => currentCheeseItem.id === cheeseId);
    selectedCheeseList.push(foundCheese);
};

const getCheeses = () => {
    return cheeses;
};

const getSelectedCheeseList = () => {
    return selectedCheeseList;
};

export default { getCheeses, setSelectedCheese, getSelectedCheeseList };