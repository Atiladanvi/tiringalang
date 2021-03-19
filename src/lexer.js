import Console from './console'
import tokens from './tokens/main.json'

import Parser from './parser'

class Lexer {
    constructor() {
        this.data = []
        this.p = 0
        this.vars = []

        this.inloop = false;
        this.for_pointer = 0;
        this.fors = []
    }


    read(line, p) {
        tokens.special.map((i) => {
            if (line.includes(i.key)) {
                switch (i.parser) {

                    case "PRINT":
                        if (this.data[p + 1][this.data[p + 1].length - 1] == '"') {
                            Parser.print(this.data[p + 1])
                        } else {
                            let p = this.p + 1;
                            let str = "";
                            while (this.data[p].includes(")") == false) {
                                str += this.data[p] + " "
                                p++;
                            }
                            str += this.data[p]
                            Parser.print(str.substr(0, str.length - 1))

                        }
                        break;

                    case "LOOP":
                        if (this.inloop == false) {
                            this.data[p + 2]
                            this.fors.push({
                                counter: parseInt(this.data[p + 2]),
                                step: 0,
                                line,
                                p
                            })
                            this.for_pointer++;
                            this.inloop = true;
                        }
                        break;

                    case "END":
                        if (this.inloop == true) {
                            if (this.fors[this.for_pointer - 1].step < this.fors[this.for_pointer - 1].counter) {
                                this.fors[this.for_pointer - 1].step++;
                                this.p = this.fors[this.for_pointer - 1].p
                                this.line = this.fors[this.for_pointer - 1].line
                            }
                        }
                        break;

                    default:
                        return;
                }
            }
        })

    }

    run(object) {
        this.data = object;

        while (this.p < this.data.length) {
            this.read(this.data[this.p], this.p)
            this.p++;
        }

    }
}

export default new Lexer();