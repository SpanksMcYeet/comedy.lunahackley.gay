(async () => {
  const characters = await fetch('./charList.json')
  const CHAR = await characters.json()
  document.getElementById('generateBypass').addEventListener('click', () => {
    document.getElementById('showBypass').innerHTML = ''
    let desiredBypass = document.getElementById('inputBypass').value
    desiredBypass.split('')
    for (let letter of desiredBypass) {
      let desiredChars = CHAR[letter.toUpperCase()]
      let desiredCharacter = desiredChars[Math.floor(Math.random() * desiredChars.length)]
      if (desiredChars === null)
        console.log(`Unable to find bypassable character for character ${letter}`)
      document.getElementById('showBypass').innerHTML += String.fromCodePoint(parseInt(desiredCharacter, 16))
    }
  })
})()
