const getLogsQuery = "SELECT * FROM UsageLog";
const getOemReportsQuery = `SELECT OE.OemName,sum(UL.No_of_Checkouts) as No_of_Checkouts, count(UL.UserID) as no_of_users FROM eda_tools.usagelog as UL, eda_tools.tools as TL, eda_tools.users as US,eda_tools.oems as OE WHERE TL.OemID = OE.OemID and UL.ToolID = TL.ToolID and UL.UserID = US.UserID GROUP BY OE.OemID`;
const getUsersReportQuery = `SELECT UL.UsageDate,UL.UserID,US.UserName,sum(UL.no_of_checkouts) as Total_Checkouts FROM eda_tools.usagelog as UL, eda_tools.users as US WHERE UL.UserID = US.UserID  group by UsageDate,UserID;`;
const getUsageLogForGivenIntervalQuery = `SELECT * FROM eda_tools.usagelog WHERE UsageDate >= ? and UsageDate <= ?`
const getADayReportQuery = "";
// const getStudentsByIdQuery = "SELECT * FROM students where id = $1";
// const addStudentQuery = "INSERT INTO students (name,email,age,dob) VALUES($1,$2,$3,$4)";
// const deleteStudentQuery = "DELETE FROM students where id = $1";
// const checkEmailExistsQuery = "SELECT * FROM students where email = $1";
export {getLogsQuery,getOemReportsQuery,getUsersReportQuery,getUsageLogForGivenIntervalQuery};