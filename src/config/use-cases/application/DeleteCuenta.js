export default class DeleteCuenta {
    constructor(cuentaRepository) {
        this.cuentaRepository = cuentaRepository
    }
    async execute(id, cuentaData){
        return await this.cuentaRepository.update(id,cuentaData)            
    }
}