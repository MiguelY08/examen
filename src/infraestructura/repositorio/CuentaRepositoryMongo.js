import mongoose from 'mongoose'

const cuentaSchema = new mongoose.Schema ({
    NroCuenta : {type:Number, required: true},
    nombreCliente : {type:String, required: true},
    saldo : {type:Number, required: true}
})

const cuentaModel = mongoose.model ("cuenta", cuentaSchema)

class cuentaRepository {
    async create (cuentaData) {
        return await new cuentaModel(cuentaData).save
    }
    async findAll() {
        return await cuentaModel.find()
    }
}