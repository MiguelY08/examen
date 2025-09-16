export default  class CreateCuenta {
    constructor(cuentaRepository){
        this.cuentaRepository = cuentaRepository
    }
    async execute(cuentaData){
        return await this.cuentaRepository.create(cuentaData)
    }

}
