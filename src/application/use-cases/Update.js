export default class Update {
    constructor(cuentaRepository) {
        this.cuentaRepository = cuentaRepository
    }

    async execute(id, cuentaData) {
        const cuentaExistente = await this.cuentaRepository.findById(id)
        if (!cuentaExistente) return null

        
        const nuevoTotal = cuentaExistente.totalT + 1

        
        return await this.cuentaRepository.update(id, {
            ...cuentaData,
            totalT: nuevoTotal
        })
    }
}