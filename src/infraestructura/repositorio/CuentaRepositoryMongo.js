import mongoose from 'mongoose'

// Definición del esquema
const cuentaSchema = new mongoose.Schema(
  {
    NroCuenta: { type: Number, required: true, unique: true },
    nombreCliente: { type: String, required: true, trim: true },
    saldo: { 
      type: Number, 
      required: true, 
      min: [0, "El saldo no puede ser negativo"] 
    },
    totalT: { type: Number, default: 0 }
  },
  {
    timestamps: true // crea createdAt y updatedAt automáticamente
  }
)

// Modelo
const CuentaModel = mongoose.model("Cuenta", cuentaSchema)

// Repositorio
class CuentaRepository {
  async create(cuentaData) {
    try {
      const cuenta = new CuentaModel(cuentaData)
      return await cuenta.save()
    } catch (error) {
      throw new Error("Error al crear cuenta: " + error.message)
    }
  }

  async findAll() {
    try {
      return await CuentaModel.find()
    } catch (error) {
      throw new Error("Error al obtener cuentas: " + error.message)
    }
  }

  async findById(id) {
    return await CuentaModel.findById(id);  // Busca un pedido por su identificador único (ID).
  }

  async update(id, cuentaData) {
    try {
      return await CuentaModel.findByIdAndUpdate(id, cuentaData, { new: true })
    } catch (error) {
      throw new Error("Error al actualizar cuenta: " + error.message)
    }
  }

  async delete(id) {
    try {
      return await CuentaModel.findByIdAndDelete(id)
    } catch (error) {
      throw new Error("Error al eliminar cuenta: " + error.message)
    }
  }
}

export default CuentaRepository
