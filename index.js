const readLine = require('readline-sync')
function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.slideTime = askAndReturnSlideTime()

    function askAndReturnSearchTerm() {
        return readLine.question('Qual é o titulo do projeto? ')
    }

    function askAndReturnSlideTime() {
        const options = ['Low (1s - 3s)', 'Medium (3s - 5s)', 'Larg (5s - 7s)']
        const selectedSlideTime = readLine.keyInSelect(options, 'Chose individual slide time: ')
        return options[selectedSlideTime]
        
    }
    console.log(content)
}
start()