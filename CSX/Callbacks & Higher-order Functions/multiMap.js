// MULTIMAP

// expected input: arr1 (an array of values), arr2 (an array of callbacks)
// expected output: new object

// APPROACH:
// 1. use each arr1[elem] as a parameter in each arr2[function], pushing result into an array
// 2. split this new array into an array of groups, each group containing all function results of one element
// 3. for each element (i) in arr1, add a property to a new object:
    //key - arr1[i]
    //value - arrayOfGroups[i]


// construct a function "multiMap" that returns an object
function multiMap(arr1, arr2) {

    // 1: create the array of results
    // delcare a new array
    let newArr = []; 

    //iterating through arr1
    for (let i = 0; i < arr1.length; i++) {
    
    //for each element of arr2
    arr2.forEach(elem => {
        
        //push arr2[elem](arr1[i]) into new array
        newArr.push(elem(arr1[i]))
    })
    }


    //2. split this array into chunks
    //declare a grouped array
    let groupedArr = [];

    //iterate through each group of values within newArray
    for (let i = 0; i < newArr.length; i+= arr1.length) {

        //create a local subarray 
        let group = newArr.slice(i, i + arr1.length)

        //push this subarray into the grouped array
        groupedArr.push(group);
    }
 
    //3. Add pairs of arr1 elements and their arrays to an object
    //declare new object
    let obj = {};

    // for each element in arr1
    for (let i = 0; i < arr1.length; i++) {

        //push a property into object
        obj[arr1[i]] = groupedArr[i];

    //return the object
  }
  return obj;
}
  

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }