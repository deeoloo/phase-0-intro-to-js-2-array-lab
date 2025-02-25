// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Destructive functionswhich modify the original array given
function destructivelyAppendCat(name) {
    cats.push(name);//appends a cat to the end of the cat array
}

function destructivelyPrependCat(name) {
    cats.unshift(name);//prepends a cat to teh beginning of the cats array
}

function destructivelyRemoveLastCat() {
    cats.pop();//removes the last cat from the cats array
}

function destructivelyRemoveFirstCat() {
    cats.shift();//removes the first cat from the cats array
}

// Non-destructive functions that return a new array without modifying the original array
function appendCat(name) {
    return [...cats, name]; // appends a cat to the cats array and returns a new array, leaving the cats array unchanged
}

function prependCat(name) {
    return [name, ...cats]; // prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
}

function removeLastCat() {
    return cats.slice(0, -1); // removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
}

function removeFirstCat() {
    return cats.slice(1); // removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
}
