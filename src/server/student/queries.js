const getStudentsQuery = "SELECT * FROM students";
const getStudentsByIdQuery = "SELECT * FROM students where id = $1";
const addStudentQuery = "INSERT INTO students (name,email,age,dob) VALUES($1,$2,$3,$4)";
const deleteStudentQuery = "DELETE FROM students where id = $1";
const checkEmailExistsQuery = "SELECT * FROM students where email = $1";
export {getStudentsQuery,getStudentsByIdQuery,checkEmailExistsQuery,addStudentQuery,deleteStudentQuery};