
    // 01
// const fruits = ["mango","lemon","blueburry"]
// console.log(fruits);

    // 02
// const ingredients = ["egg","milk","butter"]
// console.log(ingredients[1]);
// console.log(ingredients.indexOf("butter"))

//     03
//  const object = ["pen", "book", "lamp"]
//  console.log(object);

//  object.unshift("chair")
//  console.log(object)

//  object.pop("lamp")
//  console.log(object)

//  object.push("laptop")
//  console.log(object);

//  object.shift("chair")
//  console.log(object)

    // // 04
    // const number = [4, 10, 8, 12, 6]
    // number.reverse()
    // console.log

    // 05
    // let total = 0
    // const limit = 10
    // for (let i = 0; i <= limit; i++) {
    //     total = i + total
    //     console.log(total)        
    // }

    // 06
    // const sentence = "Hello Konexio"
    // const lengthOfsentense = sentence.length
    // let character = sentence.charAt(lengthOfsentense - 1)
    
    // for (let i = sentence.length ; i >= 0; i--) {
    //    let character = sentence.charAt(i - 1)
    //     console.log(character);
    // }

    // 06 (2)
    // const sentence = "Hello Konexio"
    // const theArray = sentence.split("")
    // const lenght = theArray.length
    // const secondArray = []

    // for (let i = sentence.length ; i >= 0; i--) {
    //     let character = sentence.charAt(i - 1)
    //     secondArray.push(character)
    // }
    // console.log(secondArray.join(""));

    // 07
    // for (let i = 0; i <= 100; i++) {
    //     if (i % 3 === 0 && i % 5 === 0) {
    //         console.log("fizzbuzz")
    //     }else if (i % 3 === 0) {
    //         console.log("fizz")
    //     }else if (i % 5 === 0) {
    //         console.log("buzz");
    //     }
    //     console.log(i);        
    // }

    //   08
    // let total = 0
    // const limit = 10
    // let i = 0
    // while (i < limit) {
    //     i += 1
    //     total = i + total
    //     console.log(total)
    // }

    // 09
    // const names = ["Thomas", "Mago", "Walid", "Aurélien", "Dahn"]
    // const namesLength = names.length
    // const random = Math.floor(Math.random() * (namesLength - 0)) 
    // const theSlice = names.slice(random, random + 1)
    // console.log(theSlice);

    // 10
    // let numbers = []
    // let numbersLength = numbers.length
    
    // for (let i = 0; i <= 20; i++) {
    //     numbers[i] = Math.floor(Math.random() * (100 - 0)) 
    // }
    // console.log(numbers)


    // 11
    // for (let i = 11; i < 47; i++) {
    //     if ( i % 2 === 0) {
    //         console.log(i)
    //     }
    // }
    
    // 12
    // for (let i = 11; i < 47; i++) {
    //     if ( i % 2 !== 0) {
    //         console.log(i)
    //     }
    // }
    
    // 13
    // const numbers = [1, 2, 3, 4, 5]
    // const squares = []
    // const roots = []
    
    // console.log("Le Tableau numbers : ",numbers)
    // for (let i = numbers.length - 1; i >= 0; i--) {    
    //     squares.unshift(numbers[i] ** 2)
    // }
    // console.log("La puissance au carré de 'numbers': ",squares);
    // for (let i = squares.length -1 ; i >= 0; i--) {
    //     roots.unshift(Math.sqrt(squares[i]))
    // }
    // console.log("La racine carré de 'numbers'",roots)
