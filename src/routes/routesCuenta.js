import { Router } from "express";
import { crearCuenta, getCuenta, getCuentaById, updateCuenta, deleteCuenta} from '../interfaces/controllers/cuentaControllers.js'

const router = Router();
// Ruta POST para crear una nueva cuenta bancaria
router.post('/', crearCuenta);

// Ruta GET para obtener todas las cuentas bancarias
router.get('/', getCuenta);

// Ruta GET para obtener una cuenta específica por su ID
router.get('/:id', getCuentaById);

// Ruta PUT para actualizar una cuenta específica por su ID
router.put('/:id', updateCuenta);

// Ruta DELETE para eliminar una cuenta específica por su ID
router.delete('/:id', deleteCuenta);

export default router;
