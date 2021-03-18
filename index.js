import fs from 'fs'

import Interpreter from './src/interpreter'
import Console from './src/console'
import interpreter from './src/interpreter'

const script = fs.readFileSync(`${__dirname}/scripts/test.tiringa`, 'utf-8', (err, data) => {
    if (err) {
        Console.message('Erro ao ler script! ' + err)
        return;
    }
}).split('\n')

while (Interpreter.pointer < script.length) {
    //Console.debug('Step ' + parseInt((interpreter.pointer) + 1) + '/' + script.length)
    Interpreter.run(script[Interpreter.pointer]);
    Interpreter.pointer++;
}
console.log("===================")
//console.log(Interpreter.memory)

