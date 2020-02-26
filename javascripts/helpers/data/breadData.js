//create data folder > then create: breadData will have array of bread objects, will export a getter function (getBreads) - this is how we get the bread object to the sandwich 
//each bread object: type, color, price, id

// TO DO: Hex colors!!

const breads = [
{
    type: "White",
    color: 'white',
    price: 1,
    id: "white"
},
{
    type: "Wheat",
    color: '#F5DEB3',
    price: 1,
    id: "wheat"
},
{
    type: "Rye",
    color: '#DEB887',
    price: 1,
    id: "rye"
}
];

let selectedBreadId = '';

const setSelectedBread = (breadId) => {
    selectedBreadId = breadId; 
    console.log('selectedBreadId', selectedBreadId);
};

const getSelectedBread = () => {
    const foundBread = breads.find((currentBreadItem) => currentBreadItem.id === selectedBreadId);
    return foundBread;
};

const getBreads = () => {
    return breads;
};

export default { setSelectedBread, getBreads, getSelectedBread };