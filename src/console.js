class Console {
    message(msg) {console.log(`[CONSOLE] ${msg}`)}
    debug(msg) {console.log(`[DEBUG] ${msg}`)}
}

export default new Console();