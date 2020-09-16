// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

function remove(myArray, member) {
    let newArray = Array(0)
    newArray.indexOf(member)
    for (let i = 0; i < myArray.length; i++ ) {
        if (myArray[i] !== member) {
            newArray.push(myArray[i])  
        }
    }
    return newArray
}


//Alternate code for remove
/*
function remove(array, member) {
    let newArray = Array(0)
    students.splice(array.indexOf(member)) 
}
*/

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.


// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
function sum(numArray) {
    let sum = 0
    for (let i = 0; i < numArray.length; i++ ) {
        sum += numArray[i]
    }
    return sum
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(numArray) {
    if (numArray.length == 0) {
        return undefined
    }
    return sum(numArray)/numArray.length
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(numArray) {
    if (numArray.length == 0) {
        return undefined
    }
    let minimum = numArray[0]
    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] < minimum) {
            minimum = numArray[i]
        }
    }
    return minimum
}

//Attempt at a function that returns the index of the minimum
/*function indexMin(numArray) {
    let minimum = numArray[0]
    let index = 0
    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] < minimum) {
            minimum = numArray[i]
            index = i
        }
    }
    return index
}*/

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(array) {
    let arrayCopy = []  
    while (array.length > 0) {
        for (let ele of array) {
            console.log(ele)
        }
        for (let ele of arrayCopy) {
            console.log(ele)
        }
        let min = minimum(array)
        arrayCopy.push(min)
        let index = array.indexOf(min)
        array.splice(index, 1)
        for (let ele of array) {
            console.log(ele)
        }
        for (let ele of arrayCopy) {
            console.log(ele)
        }
    }
    return arrayCopy
}



// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
function textList(textArray) {
    let name = ""
    let len = textArray.length
    for (let i = 0; i < len; i++) {
        name += textArray[i]
        if (i < len-1) {
            name += ','
        }
    }
    return name
}
