// getGreeting should return a string containing
// 'Hello ' and the contents of `name`
export function getGreeting(name: string): string {
    return "Hello " + name
}

// getFullName should return a string containing the contents
// of `firstName` and the contents of `lastName`
export function getFullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName
}

// addNumbers should return the sum of the two parameters
export function addNumbers(a: number, b: number): number {
    return a + b
}

// bottlesOfBeerOnTheWall should return a string containing
// the number of bottles of beer on the wall, but!
// if the number of bottles is 0, it should return 'No more bottles of beer on the wall'
export function bottlesOfBeerOnTheWall(bottles: number): string {
    if(bottles === 0) {
        return 'No more bottles of beer on the wall'
    } else {
        return bottles + ' bottles of beer on the wall'
    }
}

// printGreeting should not return a value,
// instead it should console.log a string containing
// 'Hello name'
export function printGreeting(name : string): void {
    console.log('Hello ' + name )
}

// ----------- OPTIONAL PARAMS -----------

// sumFrame accepts two balls and returns the sum of the two numbers
// sometimes there may be a third ball, if there is, add it to the sum
export function sumFrame(a: number, b: number, c?: number): number {
    if(c) {
        return a + b + c
    } else {
        return a + b
    }
}

// greetFullName should return a string containing the full name
// including middle name if it exists
export function greetFullName(first: string, last: string, middle?: string) : string {
    if(middle) {
        return 'Hello ' + first + ' ' + middle + ' ' + last
    } else {
        return 'Hello ' + first + ' ' + last
    }
}

// ----------- UNIONS -----------

// addNumbersAndStrings accepts two arguments that can be either a number or a number inside a string
// the sum of the two arguments should be returned as a number regardless of their original type
export function addNumbersAndStrings(a: string | number, b: string | number): number {
    return Number(a) + Number(b)
}

// fizzbuzz accepts a number and returns a string or number
// if the number is divisible by 3, return 'fizz'
// if the number is divisible by 5, return 'buzz'
// if the number is divisible by 3 and 5, return 'fizzbuzz'
// otherwise, return the original number
export function fizzbuzz(number: number): string | number {
    if(number % 5 === 0 && number % 3 === 0) {
        return 'fizzbuzz'
    } else if (number % 5 === 0){
        return 'buzz'
    } else if (number % 3 === 0){
        return 'fizz'
    } else {
        return number
    }
}

// ----------- TYPE ALIASES -----------

type StringOrNumber = void

// sumMatchingType accepts two arguments that can be either a number or a string
// if both arguments are numbers, the sum of the two arguments should be returned as a number
// if either argument is a string, the two arguments should be summed together and returned as a string
export function sumMatchingType(number: number | string, number2: number | string): string | number {
    if(typeof number === 'number' && typeof number2 === 'number') {
        return number + number2
    } else {
        const sum = Number(number) + Number(number2)
        return String(sum) 
    }
}

// getNextTrafficLightColour accepts the current colour of a traffic light colour and returns the next colour
// the light sequence is green -> yellow -> red -> green -> yellow -> (etc)
// Remember to use a type alias!
export function getNextTrafficLightColour(): void {}
