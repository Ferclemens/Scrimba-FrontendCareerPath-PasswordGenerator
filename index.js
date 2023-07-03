
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Container
const containerEl = document.getElementById('container-el')
//Button theme
const buttonEl = document.getElementById('button-el')
//Password Elements
const pass1El = document.getElementById('pass1-el')
const pass2El = document.getElementById('pass2-el')
//Link
const linkEl = document.getElementById('link-el')

function setPassword() {
    pass1El.textContent = randomPassword()
    pass2El.textContent = randomPassword()
}

function randomPassword() {
    let password = ''
    for(let i = 0; i <= 14; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function changeTheme() {
    if(buttonEl.textContent === 'Light?') {
        buttonEl.textContent = 'Dark?'
        containerEl.classList.add('light')
        linkEl.classList.add('repo-light')
    } else {
        buttonEl.textContent = 'Light?'
        containerEl.classList.remove('light')
        linkEl.classList.remove('repo-light')
    }
}