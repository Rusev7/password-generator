// DOM Elements ---
const buttonSimple = document.querySelector('#simple');
const buttonComplicated = document.querySelector('#complicated');
const buttonGenerate = document.querySelector('#generate');
const buttonCopy = document.querySelector('#copy');
const passwordLength = document.querySelector('.input');
const infoParagraph = document.querySelector('#info');
const generatedPass = document.querySelector('#generatedPass');

let selectedPasswordType = '';
let passLen = 0;

buttonSimple.addEventListener('click', () =>{
    selectedPasswordType = 'simple';
    checkPasswordField();
});

buttonComplicated.addEventListener('click', () => {
    selectedPasswordType = 'complicated';
    checkPasswordField();
});

buttonGenerate.addEventListener('click', generate);

buttonCopy.addEventListener('click', () => {
    generatedPass.select();
    generatedPass.setSelectionRange(0, 99999);
    document.execCommand('copy');
})

function checkPasswordField() {
    if(passwordLength.value == null || passwordLength.value == '') {
        passwordLength.focus();
    } else if (passwordLength.value >= 2 && passwordLength.value <= 300) {
        displayChosenOption(selectedPasswordType);
        passLen = Number(passwordLength.value);
    }
}

// Display functions
function displayChosenOption(passType) {
    infoParagraph.style.display = 'block';
    infoParagraph.innerHTML = `You have chosen <span class='bold'>${passType}</span> type password with <span class='bold'>${passwordLength.value}</span> symbols/words`;
}

function displayErr() {
    infoParagraph.style.display = 'block';
    infoParagraph.innerHTML = `You have chosen password length lower than 8 / more than 300 symbols`;
}

function displayLenErr() {
    infoParagraph.style.display = 'block';
    infoParagraph.innerHTML = `You have chosen password length lower than 2 / more than 20 words`;
}
// -------------------------------------------------------------------------------------------------


function generate() {
    if (selectedPasswordType == 'simple') {
        if(passLen >= 2 && passLen <= 20) {
            generateSimple(passLen);
        } else {
            displayLenErr();
        } 
    } else {
        if(passLen >= 8 && passLen <= 300) {
            generateComplicated(passLen);
        } else {
            displayErr();
        }
    }
}


function generateSimple(passLen) {
    const words = ['Addicted', 'Representative', 'Kiss', 'Jump', 'Sharp', 'Journey', 'Capable', 'Permissible', 
    'Happy', 'Goldfish', 'Stamp', 'Count', 'Market', 'Gentle', 'Convene', 'Neighborly', 'Animal', 'Tiresome', 
    'Reflective', 'Ahead', 'Fine', 'Corrod', 'Creator', 'Scrub', 'Arch', 'Vessel', 'Great', 'Statement', 'Zinc', 
    'Lawyer', 'Uttermost', 'Halting', 'Flap', 'Shock', 'Violate', 'Organize', 'Merciful', 'Society', 'Sight',
    'Mass', 'Jellyfish', 'Repeat', 'Cower', 'Ambitious', 'Bun', 'Threatening', 'Throne', 'Frogs'];
    let result = '';

    for(let i = 1; i <= passLen; i++) {
        result += words[Math.floor(Math.random() * words.length)];
    } 

    generatedPass.value = result;
}


function generateComplicated(passLen) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-/';
    let result = '';

    for(let i = 1; i <= passLen; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    generatedPass.value = result;
}