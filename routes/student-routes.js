const express = require('express');
const {getallStudents,getallStudentsByName, getallStudentsSameAge,
        getallStudentsSameYear,studentSortByage,studentSortByYear,
        addstudent,updateStudentByid,deleteStudentById} =require('../controllers/student-controllers')

const router = express.Router();


router.get('/get',getallStudents);
router.get('/get/sameAge/:age',getallStudentsSameAge);
router.get('/get/sameYear/:year',getallStudentsSameYear)
router.get('/get/Name/:name',getallStudentsByName)
router.get('/get/sortAge',studentSortByage)
router.get('/get/sortYear',studentSortByYear)
router.post('/addStudent',addstudent)
router.delete('/deleteStudent/:id',deleteStudentById)
router.put('/updateStudent/:id',updateStudentByid)

module.exports=router;