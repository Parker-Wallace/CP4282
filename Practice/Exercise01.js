// JavaScript Exercise

// Create a file ReviewExercise.js. Use Node.js to run this file. Complete the instructions and then then test the function.

/*  Write a function which accepts an array of numbers and returns the sum of all the even numbers in the array. 
    Have the function use the reduce method to calculate the sum of the even numbers.*/

const sumOfEvenNumbers = (numbers) => {
    return numbers.filter(e => e % 2 === 0).reduce((acc, curr) => acc + curr)
}
console.log(sumOfEvenNumbers([1,2,3,4]))


/*  Create an array which represents a person’s skills. The first and second elements are the person’s name. 
    The remaining elements in the array are the person’s skills.

    EX// [“Eric”, “Stock”, “Java”, “Game Design”, “Teaching”]

    EX// [“Pranjal”, “Patra”, “Python”]

    Create a function which accepts an array as an argument and uses the destructure operator to place the first 
    and last name into variables. Use the rest operator to place the skills into a new array. The function should 
    then print the person’s name and loop through the skills array and print out each skill. */

const personSkillDeconstructor = (person) => {
    [first, last, ...skills] = person
    console.log(`first name: ${first}`)
    console.log(`last: ${last}`)
    console.log("skills:")
    for (skill of skills) {
        console.log(skill)
    }
}

personSkillDeconstructor(['Eric', 'Stock', 'Java', 'Game Design', 'Teaching'])




/*  Create an array with the following values [ “hello”, “there”, “how”, “are”, “you”]. Use the destructuing and the 
    rest operator to store the first two values in variables and to store the remaining 3 values in an array. */

    
/*  Create two arrays. The first array will have the numbers 1 up to 6 and the 2nd array will have the numbers 7 up to 15. 
    Use the spread operator to create a new array which includes the contents of the first two arrays. Console.log the new array.
*/


/*   Create an array with several numbers. Use the map method to create a new array where each value is the corresponding 
    value in the original array with 10 subtracted. Console.log the new array.
*/








