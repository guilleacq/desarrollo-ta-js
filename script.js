// TA 1 -------------------------------------------------

function repeatString(texto, repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
        console.log(texto);
    }
}
// TA 2 -------------------------------------------------

function reverseString(texto) {
    let currentPos = 0;
    let textoInvertido = [];

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido[currentPos] = texto[i];
        currentPos++;
    }
    console.log(textoInvertido.join(""));
}

// TA 3 -------------------------------------------------

function removeFromArray(array, item) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}

// TA 4 -------------------------------------------------

function sumAll(num1, num2) {
    let total = 0;
    for (let i = num1; i <= num2; i++) {
        total += i;
    }
    console.log(total);
}

// TA 5 -------------------------------------------------

function leapYears(año) {
    if (año % 4 === 0) {
        console.log("true");
    }
    else if (año % 100 === 0 && año % 400 === 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}

// TA 6 -------------------------------------------------

function convertToCelsius(temp) {
    return Math.round((temp - 32) * 5 / 9 * 10) / 10;
}

function convertToFahrenheit(temp) {
    return Math.round((temp * 9 / 5 + 32) * 10) / 10;
}

// TA 7 -------------------------------------------------

function getTheTitles(books) {
    let titles = [];
    
    books.forEach(book => {
        titles.push(book.title);
    });
    
    console.log(titles);
}

// TA 8 -------------------------------------------------

function findTheOldest(people) {
    let oldest = people[0];
    for (let person in people) {
        if (person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = person;
        }
    }
}

// TA 9 -------------------------------------------------

function getOdds(nums) {
    let odds = [];

    nums.forEach(element => {
        if (element % 2 !== 0) {
            odds.push(element);
        }
    });
}

// TA 10 -------------------------------------------------

function getSum2(nums) {
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum;
}

// TA 11 -------------------------------------------------

function duplicates(nums) {
    let duplicates = [];
    nums.forEach(element => {
        if (nums.indexOf(element) !== nums.lastIndexOf(element)) {
            duplicates.push(element);
        }
    });
    return duplicates.length;
}

// TA 12 -------------------------------------------------

// Crea una contraseña con estas condiciones: tiene mayusculas, minusculas, numeros y simbolos especiales.
function generatePassword(length) {
    if (length < 8) {
        return "La contraseña debe tener al menos 8 caracteres";
    }

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let password = '';
    let all = lowerCase + upperCase + numbers + symbols;

    for (let i = 0; i < length; i++) {
        let character = all.charAt(Math.floor(Math.random() * all.length));
        password += character;
    }
    return password;
}




// PRUEBAS -------------------------------------------------

// TA1:
repeatString("Hola", 3);

// TA2:
reverseString("Hola");

// TA3:
removeFromArray([1, 2, 3, 4, 5], 3);

// TA4:
sumAll(1, 4);

// TA5:
leapYears(2000);
leapYears(2004);

// TA6:
console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// TA7:
const books = [
    {
        title: 'Harry Potter',
        author: 'J. K. Rowling'
    },
    {
        title: 'Lord of the Rings',
        author: 'J. R. R. Tolkien'
    },
    {
        title: 'The Hobbit',
        author: 'J. R. R. Tolkien'
    },
    {
        title: 'A Game of Thrones',
        author: 'George R. R. Martin'
    }
]

getTheTitles(books);

// TA8:
const people = [
    {
        name: 'Fer Vasquez',
        yearOfBirth: 1998,
        yearOfDeath: 2070
    },
    {
        name: 'Agustin Casanova',
        yearOfBirth: 1997,
        yearOfDeath: 2081
    },
    {
        name: 'Bad Bunny',
        yearOfBirth: 1990,
        yearOfDeath: 2025
    },
    {
        name: 'Duki',
        yearOfBirth: 1996,
        yearOfDeath: 2040
    },
    {
        name: 'Khea',
        yearOfBirth: 2000,
        yearOfDeath: 2060
    }
]
findTheOldest(people);

// TA9:
getOdds([1, 2, 3, 4, 5]);

// TA10:
console.log(getSum2([1, 2, 3, 4, 5]));

// TA11:
console.log(duplicates([1, 2, 3, 4, 5, 1, 2, 3]));

// TA12:
console.log(generatePassword(10));




