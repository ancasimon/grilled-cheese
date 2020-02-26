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