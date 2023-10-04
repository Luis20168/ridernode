
import express  from 'express';
 import {stockdatos, getApdz, createApdz, UpdateApdz, DeleteApdz}  from '../controllers/control.js';

 const router= express.Router();

router.get('/',stockdatos);
router.get('/:id',getApdz);
router.post('/',createApdz);
router.put('/:id',UpdateApdz);
router.delete('/:id',DeleteApdz);




export default router;