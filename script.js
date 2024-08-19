// TA 1
function repeatString(texto, repeticiones) {
    let result = '';
    for (let i = 0; i < repeticiones; i++) {
        result += texto + '\n';
    }
    return result;
}

// TA 2
function reverseString(texto) {
    let currentPos = 0;
    let textoInvertido = [];
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido[currentPos] = texto[i];
        currentPos++;
    }
    return textoInvertido.join("");
}

// TA 3
function removeFromArray(array, item) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// TA 4
function sumAll(num1, num2) {
    let total = 0;
    for (let i = num1; i <= num2; i++) {
        total += i;
    }
    return total;
}

// TA 5
function leapYears(año) {
    if (año % 4 === 0) {
        return "true";
    }
    else if (año % 100 === 0 && año % 400 === 0) {
        return "true";
    }
    else {
        return "false";
    }
}

// TA 6
function convertToCelsius(temp) {
    return Math.round((temp - 32) * 5 / 9 * 10) / 10;
}

function convertToFahrenheit(temp) {
    return Math.round((temp * 9 / 5 + 32) * 10) / 10;
}

// TA 7
function getTheTitles(books) {
    let titles = [];
    books.forEach(book => {
        titles.push(book.title);
    });
    return titles;
}

// TA 8
function findTheOldest(people) {
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
        let person = people[i];
        if ((person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth > 
            (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth) {
            oldest = person;
        }
    }
    return oldest;
}

// TA 9
function getOdds(nums) {
    let odds = [];
    nums.forEach(element => {
        if (element % 2 !== 0) {
            odds.push(element);
        }
    });
    return odds;
}

// TA 10
function getSum2(nums) {
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum;
}

// TA 11
function duplicates(nums) {
    let duplicates = [];
    nums.forEach(element => {
        if (nums.indexOf(element) !== nums.lastIndexOf(element)) {
            duplicates.push(element);
        }
    });
    return duplicates.length;
}

// TA 12
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

// Event Listeners
document.getElementById('btnTA1').addEventListener('click', function() {
    const texto = document.getElementById('texto1').value;
    const repeticiones = parseInt(document.getElementById('repeticiones1').value);
    const resultado = repeatString(texto, repeticiones);
    document.getElementById('resultado1').innerHTML = resultado.replace(/\n/g, '<br>');
});

document.getElementById('btnTA2').addEventListener('click', function() {
    const texto = document.getElementById('texto2').value;
    const resultado = reverseString(texto);
    document.getElementById('resultado2').textContent = resultado;
});

document.getElementById('btnTA3').addEventListener('click', function() {
    const array = document.getElementById('array3').value.split(',').map(item => item.trim());
    const item = document.getElementById('item3').value;
    const resultado = removeFromArray(array, item);
    document.getElementById('resultado3').textContent = resultado.join(', ');
});

document.getElementById('btnTA4').addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('num1_4').value);
    const num2 = parseInt(document.getElementById('num2_4').value);
    const resultado = sumAll(num1, num2);
    document.getElementById('resultado4').textContent = resultado;
});

document.getElementById('btnTA5').addEventListener('click', function() {
    const año = parseInt(document.getElementById('año5').value);
    const resultado = leapYears(año);
    document.getElementById('resultado5').textContent = resultado;
});

document.getElementById('btnTA6Celsius').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temp6').value);
    const resultado = convertToCelsius(temp);
    document.getElementById('resultado6').textContent = `${resultado}°C`;
});

document.getElementById('btnTA6Fahrenheit').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temp6').value);
    const resultado = convertToFahrenheit(temp);
    document.getElementById('resultado6').textContent = `${resultado}°F`;
});

document.getElementById('btnTA7').addEventListener('click', function() {
    const books = [
        { title: 'Harry Potter', author: 'J. K. Rowling' },
        { title: 'El Señor de los Anillos', author: 'J. R. R. Tolkien' },
        { title: 'El Hobbit', author: 'J. R. R. Tolkien' },
        { title: 'Juego de Tronos', author: 'George R. R. Martin' }
    ];
    const resultado = getTheTitles(books);
    document.getElementById('resultado7').innerHTML = resultado.map(title => `<h1>${title}</h1>`).join('');
});

document.getElementById('btnTA8').addEventListener('click', function() {
    const people = [
        { name: 'Fer Vasquez', yearOfBirth: 1998, yearOfDeath: 2070 },
        { name: 'Agustin Casanova', yearOfBirth: 1997, yearOfDeath: 2081 },
        { name: 'Bad Bunny', yearOfBirth: 1990, yearOfDeath: 2025 },
        { name: 'Duki', yearOfBirth: 1996, yearOfDeath: 2040 },
        { name: 'Khea', yearOfBirth: 2000, yearOfDeath: 2060 }
    ];
    const resultado = findTheOldest(people);
    document.getElementById('resultado8').textContent = `${resultado.name} (${resultado.yearOfBirth}-${resultado.yearOfDeath || 'presente'})`;
});

document.getElementById('btnTA9').addEventListener('click', function() {
    const nums = document.getElementById('nums9').value.split(',').map(num => parseInt(num.trim()));
    const resultado = getOdds(nums);
    document.getElementById('resultado9').innerHTML = resultado.map(num => `<span class="impar">${num}</span>`).join(', ');
});

document.getElementById('btnTA10').addEventListener('click', function() {
    const nums = document.getElementById('nums10').value.split(',').map(num => parseInt(num.trim()));
    const resultado = getSum2(nums);
    document.getElementById('resultado10').textContent = resultado;
});

document.getElementById('btnTA11').addEventListener('click', function() {
    const nums = document.getElementById('nums11').value.split(',').map(num => parseInt(num.trim()));
    const resultado = duplicates(nums);
    document.getElementById('resultado11').textContent = resultado;
});

document.getElementById('btnTA12').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length12').value);
    const resultado = generatePassword(length);
    document.getElementById('resultado12').textContent = resultado;
});