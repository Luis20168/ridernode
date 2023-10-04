
import express  from 'express';
 import {stockdatos, getApdz, createApdz, UpdateApdz, DeleteApdz}  from '../controllers/control.js';

 const router= express.Router();

router.get('/',stockdatos);
router.get('/:id',getApdz);
router.get('/',createApdz);
router.get('/:id',UpdateApdz);
router.get('/:id',DeleteApdz);




export default router;