//create data folder > then create: breadData will have array of bread objects, will export a getter function (getBreads) - this is how we get the bread object to the sandwich 
//each bread object: type, color, price, id

// TO DO: Hex colors!!

const breads = [
{
    type: "White",
    color: '#fff',
    price: 1,
    id: "white"
},
{
    type: "Wheat",
    color: '#A52A2A',
    price: 1,
    id: "wheat"
},
{
    type: "Rye",
    color: '#D2691E',
    price: 1,
    id: "rye"
}
];

let selectedBreadId = '';

const setSelectedBread = (breadId) => {
    selectedBreadId = breadId; 
    console.log('selectedBreadId', selectedBreadId);
};

const getBreads = () => {
    return breads;
};

export default { setSelectedBread, getBreads };