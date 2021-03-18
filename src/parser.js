class Parser {
    print(args){
        console.log(args.match(/([^"]+)/)[0])
    }

}

export default new Parser();