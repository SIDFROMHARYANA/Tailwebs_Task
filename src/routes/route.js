const express = require('express');
const router = express.Router();

const adminH = require('../controller/admincontroller')
const studentH = require('../controller/studentcontroller')

const auth = require('../middleware/auth')

router.get("/test-me", function(req,res)
{
    res.send("My first api!")

})

//admin create n login

router.post('/createAdmin',adminH.createAdmin)
router.post('/adminLogin',adminH.loginAdmin)

//student record , delete and view

router.post('/createStudent/:adminId',auth.authentication,auth.authorization,studentH.createStudent)
router.get('/getStudent',auth.authentication,studentH.studentDetail)
router.put('/Student/:adminId/:studentId',auth.authentication,auth.authorization,studentH.updateStudent)
router.delete('/Student/:adminId/studentId',auth.authentication,auth.authorization,studentH.deleteStudent)



module.exports = router;