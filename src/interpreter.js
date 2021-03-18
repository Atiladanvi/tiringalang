import Console from './console'
import tokens from './tokens/main.json'

import Lexer from './lexer'

class Interpreter {
    constructor() {
        this.pointer = 0;
        this.memory = []; 
    }

    run(line) {
        let pointer = 0;
        let tokenCollector = '';
        while (pointer < line.length) {
            if (line[pointer] != " " || line[pointer] != ')') {

                tokenCollector += line[pointer];
            }
            if (line[pointer] == " " || line[pointer] == ')') {
                if (tokenCollector.includes("(")) {
                    let token = tokenCollector.split('(')[0];
                    let value = tokenCollector.split('(')[1];
                    value = value.substr(0, value.length - 1);
                    this.memory.push(token);
                    this.memory.push(value);
                } else {
                    this.memory.push(tokenCollector);
                }
                tokenCollector = ''
            }
            pointer++;
        }
        Lexer.run(this.memory)
    }
}

export default new Interpreter();