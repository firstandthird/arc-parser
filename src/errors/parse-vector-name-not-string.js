module.exports = class VectorNameNotStrng extends SyntaxError {
  constructor({line, column}) {
    super(`Vector name not a string (line: ${line} column: ${column})`)
    this.line = line
    this.column = column
    this.name = this.constructor.name
  }
}