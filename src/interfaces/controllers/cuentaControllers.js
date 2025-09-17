// Controller para gestión de cuentas bancarias y dashboard de indicadores
import CreateCuenta from '../../application/use-cases/CreateCuenta.js'
import DeleteCuenta from '../../application/use-cases/DeleteCuenta.js'
import GetCuenta from '../../application/use-cases/GetCuenta.js'
import GetCuentaById from '../../application/use-cases/GetCuentaById.js'
import UpdateData from '../../application/use-cases/Update.js'
import CuentaRepository from '../../infraestructura/repositorio/CuentaRepositoryMongo.js'

const cuentaRepository = new CuentaRepository()

// Crear cuenta
export const crearCuenta = async (req, res) => {
  try {
    const use_case = new CreateCuenta(cuentaRepository)
    const cuenta = await use_case.execute(req.body)
    res.status(201).json(cuenta)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener todas las cuentas
export const getCuenta = async (req, res) => {
  try {
    const use_case = new GetCuenta(cuentaRepository)
    const cuentas = await use_case.execute()
    res.json(cuentas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener una cuenta por ID
export const getCuentaById = async (req, res) => {
  try {
    const use_case = new GetCuentaById(cuentaRepository)
    const cuenta = await use_case.execute(req.params.id)
    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta no encontrada" })
    }
    res.json(cuenta)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Actualizar una cuenta por ID
export const updateCuenta = async (req, res) => {
  try {
    const use_case = new UpdateData(cuentaRepository)
    const cuenta = await use_case.execute(req.params.id, req.body)
    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta no encontrada" })
    }
    res.json(cuenta)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Eliminar una cuenta por ID
export const deleteCuenta = async (req, res) => {
  try {
    const use_case = new DeleteCuenta(cuentaRepository)
    const result = await use_case.execute(req.params.id)
    if (!result) {
      return res.status(404).json({ error: "Cuenta no encontrada" })
    }
    res.json({ message: "Cuenta eliminada correctamente", cuenta: result })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
