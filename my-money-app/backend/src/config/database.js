const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio"
mongoose.Error.messages.Number.min = 
"O {VALUE} informado é menor que o minimo de '{MIN}'"
mongoose.Error.messages.Number.max = 
"O {VALUE} informado é maior que o máxio de '{MAX}'"
mongoose.Error.messages.Number.enum = 
"O {VALUE} não é valido para '{PATH}'"