import Unicode from './charList.js'

document.getElementById('generateBypass').addEventListener('click', () => {
  document.getElementById('showBypass').innerHTML = ''
  let desiredBypass = document.getElementById('inputBypass').value
  for (let letter of desiredBypass) {
    let desiredChars = Unicode[letter.toUpperCase()]
    let desiredCharacter = desiredChars[Math.floor(Math.random() * desiredChars.length)]
    if (desiredChars === null)
      console.log(`Unable to find bypassable character for character ${letter}`)
    document.getElementById('showBypass').innerHTML += desiredCharacter
  }
})
