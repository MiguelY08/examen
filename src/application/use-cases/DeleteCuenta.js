export default class DeleteCuenta {
    constructor(cuentaRepository) {
        this.cuentaRepository = cuentaRepository
    }
    async execute(id){
        return await this.cuentaRepository.delete(id)            
    }
}