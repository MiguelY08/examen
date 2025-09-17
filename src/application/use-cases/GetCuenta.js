export default class GetCuenta {
    constructor(cuentaRepository){
        this.cuentaRepository = cuentaRepository
    }
    async execute(){
        return await this.cuentaRepository.findAll()
    }
}