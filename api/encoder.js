module.exports = function encoder (req, res) {
    let { inputString } = req.body

    if(inputString == '' || typeof inputString !== 'string' || /\d/.test(inputString)) return res.status(422).send('Invalid input.')
    
    let outputString = ''
    let charCount = 0
    inputString = inputString.split('')
    
    for(let i = 0; i < inputString.length; i++) {
        if(i === 0) {
            outputString = inputString[i]
        } else if(inputString[i] === inputString[i-1]) {
            charCount++
            if(i === inputString.length-1) {
                charCount++
                outputString += `${charCount}`
            }
        } else if(inputString[i] !== inputString[i-1]) {
            charCount++
            outputString += `${charCount}${inputString[i]}`
            charCount = 0

            if(i === inputString.length-1) {
                outputString += `${charCount+1}`
            }
        }
    }
    res.json({outputString})
}
  