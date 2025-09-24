
const StudentScheme = require("../models/student")

const getallStudents = async(req,res)=>{
  
    try{
        const allstudents = await StudentScheme.find({});
        if(allstudents?.length>0){
            res.status(200).json({
                success:true,
                message:"Students retrieved successfully",
                data:allstudents
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"No students found"
            })
        }

    }catch(error){
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Something went wrong! Try it again"
        })
        
    }

}

const getallStudentsSameAge = async(req,res)=>{
    
    
    
}


const getallStudentsSameYear = async(req,res)=>{
    
}


const getallStudentsByName= async(req,res)=>{
    
}


const studentSortByage = async(req,res)=>{
    try{
        const sorStudentByAge = await StudentScheme.find().sort({age:1})
        if(sorStudentByAge){
            res.status(200).json({
                success:true,
                message:"Students retrieved successfully (sorted by age ascending)",
                data:sorStudentByAge
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"No students found"
            })
        }

    }catch(error){
            res.status(500).json({
                success:false,
                message:"Failed to add student(s). Please try again later."
            })
        
    }
    
}

const studentSortByYear = async(req,res)=>{
    
}

const addstudent= async(req,res)=>{
    try{
        const newStudentInput = req.body;
        const newStudentISCreated =await StudentScheme.create(newStudentInput)

        if(newStudentInput){
            res.status(201).json({
                success:true,
                message:"Student successfully added",
                data:newStudentISCreated
            })
        }
        else{
            res.status(500).json({
                success:false,
                message:"Failed to add student(s). Please try again later."
            })
        }

    }catch(error){
        console.error(error)
        res.status(500).json({
            succes:false,
            message:"Something went wrong! Try it again"
        })
    }
    
}

const updateStudentByid= async(req,res)=>{

}

const deleteStudentById= async(req,res)=>{

}



module.exports={
    getallStudents,
    getallStudentsByName,
    getallStudentsSameAge,
    getallStudentsSameYear,
    studentSortByage,
    studentSortByYear,
    addstudent,
    updateStudentByid,
    deleteStudentById,
}