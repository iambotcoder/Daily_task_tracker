import db from "../../db.js";
import { getLogsQuery,getOemReportsQuery,getUsersReportQuery,getUsageLogForGivenIntervalQuery} from "./queries.js";
const getLogs = async(req,res) => {
    try
    {
        const [rows] = await db.execute(getLogsQuery);
        res.status(200).json(rows);
    }
    catch(error)
    {
        res.status(500).json({message:`Internal Server Error ${error}`});
    }
};

const getOemsReport = async(req,res) => {
    // pool.query("select usagedate,sum(no_of_checkouts) from usagelog group by usagedate;",(error,result)=>{
    //     if(error) throw error;
    //     res.status(200).json(result.rows);
    // });
    // res.status(200).json("Data");
    try
    {
        const [rows] = await db.execute(getOemReportsQuery);
        res.status(200).json(rows);
    }
    catch(error)
    {
        res.status(500).json({message:`Internal Server Error ${error}`});
    }
}

const getUsersReport = async(req,res) => {
    try
    {
        const [rows] = await db.execute(getUsersReportQuery);
        res.status(200).json(rows);
    }
    catch(error)
    {
        res.status(500).json({message:`Internal Server Error ${error}`});
    }
}

const getUsageLogForGivenInterval = async (req,res) =>{
    try
    {
        const dates = req.body;
        const startDate = dates['start_date'];
        const endDate = dates['end_date'];
        const [rows] = await db.execute(getUsageLogForGivenIntervalQuery,[startDate,endDate]);
        res.status(200).json(rows);
    }
    catch(error)
    {
        res.status(500).json({message:`Internal Server Error ${error}`});
    }
}
// const getStudentsById = (req,res) => {
//     const id = parseInt(req.params.id);
//     pool.query(getStudentsByIdQuery,[id],(error,result) => {
//         if(error) throw error;
//         // console.log(result.rows.length)
//         if(result.rows.length == 0)
//             res.status(200).json("Student with given id, doesn't exist ");
//         res.status(200).json(result.rows);
//     });
// };

// const addStudent = (req,res) => {
//     const {name,email,age,dob} = req.body;
//     pool.query(checkEmailExistsQuery,[email],(error,result) => {
//         if(error) throw error;
//         if(result.rows.length > 0)
//         {
//             res.status(400).json("Email Already Exists");
//             return null;
//         }
//         else
//         {
//             pool.query(addStudentQuery,[name,email,age,dob],(error,result) => {
//                 if(error) throw error;
//                 res.status(200).json("Student Added Successfully. ");
//             });
//         }
//     });
// }

// const removeStudent = (req,res)=>{
//     const id = parseInt(req.params.id);
//     pool.query(checkEmailExistsQuery,[id],(error,result) => {
//         if(error) throw error;
//         if(result.rows.length == 0)
//         {
//             res.status(400).json("Student with given Id doesn't exist");
//             return null;
//         }
//         pool.query(deleteStudentQuery,[id],(error,result) => {
//             if(error) throw error;
//             res.status(200).json("Student Deleted Successfully. ");
//         });
//     }); 
    
// }
export {getLogs,getOemsReport,getUsersReport,getUsageLogForGivenInterval};