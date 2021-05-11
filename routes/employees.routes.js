const { Router } =require('express');
const router = Router();

const employeesCtrl = require('../controllers/employees.controller');

 
router.get('/',employeesCtrl.getEmployees);

router.get('/cocineros',employeesCtrl.getCocineros)

router.post('/',employeesCtrl.createEmployee);

router.get('/:id',employeesCtrl.getEmployee);

router.put('/:id',employeesCtrl.editEmployee);

router.delete('/:id',employeesCtrl.deleteEmployee);

router.post('/verify',employeesCtrl.verifyEmployee)


module.exports = router;