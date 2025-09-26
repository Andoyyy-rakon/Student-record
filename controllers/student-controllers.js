
const StudentScheme = require("../models/student")

const getallStudents = async(req,res)=>{
  
    try{
        const allstudents = await StudentScheme.find({});
        if(allstudents?.length>0){
            res.status(200).json({
                success:true,
                message:"Students retrieved successfully",
                count:allstudents,
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
    try{
        const Age = req.params.age;

        if(!Age||isNaN(Age)||Age<=0){
            return res.status(400).json({
                success:false,
                message:"Age value is not valid. Please enter a valid number"
            })
        }

        const SameAge = await StudentScheme.find({age:Age});

        if(SameAge && SameAge.length>0){
            res.status(200).json({
                success:true,
                count:SameAge.length,
                message:`Found ${SameAge.length} students with age ${Age}`,
                data:SameAge
            })
        }else{
            res.status(404).json({
                success:false,
                message:`No students found with age ${Age}`
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


const getallStudentsSameYear = async(req,res)=>{
        try{
        const Year = req.params.year;

        if(!Year||isNaN(Year)||Year<=0 && Year>4){
            return res.status(400).json({
                success:false,
                message:"Age value is not valid. Please enter a valid number"
            })
        }

        const SameYear = await StudentScheme.find({year:Year});


        if(SameYear){
            res.status(200).json({
                success:true,
                count:SameYear.length,
                message:`Found ${SameYear.length} students with year ${Year}`,
                data:SameYear
            })
        }else{
            res.status(404).json({
                success:false,
                message:`No students found with year ${Year}`
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


const getallStudentsByName= async(req,res)=>{
    try{
        const getName = req.params.name;

        if(!getName){
            return res.status(404).json({
                success:false,
                message:"Please enter a valid Name"
            })
        }

        const getNameData = await StudentScheme.find({name:{$regex:"^"+getName,$options:"i"}})




        if(getNameData.length===0){
            return res.status(404).json({
                success:false,
                message:`No Student found matching name "${getName}"`
            })

        }

        res.status(200).json({
            success:true,
            message:`Student matching name "${getName}" retrieved successfully`,
            data:getNameData
        })

    



        }catch(error){
            res.status(500).json({
            success:false,
            message:"Server Error, Please try again later."
         })
        }
    
}


const studentSortByage = async(req,res)=>{
    try{

        const sortAge = req.query.sort==="desc"? -1:1;
        const sortStudentByAge = await StudentScheme.find().sort({age:sortAge})
        if(sortStudentByAge){
            res.status(200).json({
                success:true,
                message:`Students retrieved successfully (sorted by age ${sortYear===1?" ascending":"descending"})`,
                count:sortStudentByAge.length,
                data:sortStudentByAge
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
    try{
        const sortYear = req.query.sort==="desc"? -1:1;
        const sortStudentByYear = await StudentScheme.find().sort({year:sortYear});
        if(sortStudentByYear){
            res.status(200).json({
                success:true,
                message:`Students retrieved successfully (sorted by year ${sortYear===1?" ascending":"descending"})`,
                data:sortStudentByYear
            })
        }

    }catch(error){
        res.status(500).json({
                success:false,
                message:"Failed to add student(s). Please try again later."
            })

    }
    
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
    try{
        const updateStudent=req.params.id;
        const StudentForm=req.body;
        const studentUpdated=await StudentScheme.findByIdAndUpdate(updateStudent,StudentForm,{new:true})

        if(!studentUpdated){
            return res.status(404).json({
                success:false,
                message:"No student found with the given ID"
            })
        }


        res.status(200).json({
            succes:true,
            message:`Student with ID ${studentUpdated.id} updated successfully`,
            data:studentUpdated
        })
        
    }catch(error){
        console.error(error)
        res.status(500).json({
            succes:false,
            message:"Something went wrong! Try it again"
        })
    }

}

const deleteStudentById= async(req,res)=>{
    try{
        const deleteStudent = req.params.id;
        const studentDeleted=await StudentScheme.findByIdAndDelete(deleteStudent);

        if(!studentDeleted){
            return res.status(404).json({
                success:false,
                message:"No student found with the given ID"
            })
        }

        res.status(200).json({
            success:true,
            message:`Student with name ${studentDeleted.name} deleted successfully`,
            data:studentDeleted
        })



    }catch(error){
        console.error(error)
        res.status(500).json({
            succes:false,
            message:"Something went wrong! Try it again"
        })

    }

    

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