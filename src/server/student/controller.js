import pool from "../../db.js";
import { getStudentsByIdQuery, getStudentsQuery,checkEmailExistsQuery,addStudentQuery,deleteStudentQuery } from "./queries.js";
const getStudents = (req,res) => {
    
    pool.query(getStudentsQuery,(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    });
};
    
const getStudentsById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(getStudentsByIdQuery,[id],(error,result) => {
        if(error) throw error;
        // console.log(result.rows.length)
        if(result.rows.length == 0)
            res.status(200).json("Student with given id, doesn't exist ");
        res.status(200).json(result.rows);
    });
};

const addStudent = (req,res) => {
    const {name,email,age,dob} = req.body;
    pool.query(checkEmailExistsQuery,[email],(error,result) => {
        if(error) throw error;
        if(result.rows.length > 0)
        {
            res.status(400).json("Email Already Exists");
            return null;
        }
        else
        {
            pool.query(addStudentQuery,[name,email,age,dob],(error,result) => {
                if(error) throw error;
                res.status(200).json("Student Added Successfully. ");
            });
        }
    });
}

const removeStudent = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(checkEmailExistsQuery,[id],(error,result) => {
        if(error) throw error;
        if(result.rows.length == 0)
        {
            res.status(400).json("Student with given Id doesn't exist");
            return null;
        }
        pool.query(deleteStudentQuery,[id],(error,result) => {
            if(error) throw error;
            res.status(200).json("Student Deleted Successfully. ");
        });
    }); 
    
}
export {getStudents,getStudentsById,addStudent,removeStudent};