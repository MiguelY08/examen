import { findById } from "moongose/models/user_model"

export default class GetCuentaById {
    constructor (cuentaRepository){
        this.cuentaRepository = cuentaRepository
    }
    async execute(id) {
        return await this.cuentaRepository,findById(id)
    }
}