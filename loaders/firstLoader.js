module.exports = function (source) {
    console.log("\x1b[36m%s\x1b[0m", `FirstLoader excuted!, source = ${source}`)
    return source
}