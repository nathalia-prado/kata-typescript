// getNextNum should return the first number in the array
export function getNextNum(arr: Array<number>): number {
    return arr[0]
}

// getLastSongPlayed should return the last song in the array
export function getLastSongPlayed(arr: Array<string>): string {
    return arr[arr.length - 1]
}

// findLongestWord should return the longest word in the array
export function findLongestWord(arr: Array<string>): string {
    let longestWord = ''
    for(const word of arr) {
        if(word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}

// fillArrayWithBees should return an array of the correct length, filled with the string 'buzz'
export function fillArrayWithBees(number: number): Array<string> {
    return Array(number).fill('buzz')
}

// sortBySize should return an array of strings sorted by length
export function sortBySize(arr: Array<string>): Array<string> {
    return [...arr.sort((a, b) => a.length - b.length)]
}

// ----------- ARRAYS WITH UNIONS -----------
// Note: as we are dealing with multiple types in these arrays, TS may have a harder time inferring
// the types you expect. E.g. if you choose use a built in method, you may need to add types to
// the inner function to help TS infer the correct type.
// You can also use type assertions to help TS infer the correct type.

// sumStringsAndNumbers should return the sum of all the items in the array
// regardless of whether they are strings or numbers
export function sumStringsAndNumbers(arr: Array<number | string> ): number {
    const sum = arr.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue))
    return Number(sum)
}

// stringsOnly will be passed an array of strings and some null values
// it should return a new array with all the null values removed - strings only!
export function stringsOnly(): void {}

// ----------- TUPLES -----------

// generateUsername should return a username
// based on a tuple containing the first name, last name and year born
// e.g. generateUsername(['John', 'Smith', 1980]) should return 'smithjo_1980'
// e.g. generateUsername(['Jane', 'Doe', 1965]) should return 'doeja_1965'
export function generateUsername(): void {}

// getNextMapCoord should return the next coordinate in the direction specified
// e.g. getNextMapCoord([0, 0], 'N') should return [0, 1]
// e.g. getNextMapCoord([0, 0], 'S') should return [0, -1]
// e.g. getNextMapCoord([0, 0], 'E') should return [1, 0]
// e.g. getNextMapCoord([0, 0], 'W') should return [-1, 0]
export function getNextMapCoord(): void {}
