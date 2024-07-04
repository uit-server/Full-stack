import Table from '../Components/Table';
import TableMobile from '../Components/TableMobile';
function TableConditioner() {

    const dataHeader = [
        {
          name: "Type",
          style: "w-[20%]"
        },
        {
          name: "Semester-1",
          style: "w-[20%]"
        },
        {
          name: "Semester-2",
          style: "w-[20%]"
        },
        {
          name: "Description",
          style: "w-[40%]"
        }
      ]
    
      const data = [
        ["Lecture Period","15 weeks","15 weeks", "The lecture starts fro Monday to Friday"],
        ["Private Study","1 week","1 week", "One-week private study period is available for all students"],
        ["Examination","2 weeks","2 weeks", "Students have to take their exam after private study period"],
        ["Total Duration","18 weeks","18 weeks", "-"],
        ["Vacation","4-5 weeks","4-5 weeks", "The duration of the first semester from December to April and the second semester is from May to September."]
      ]
    

    return (
      
     <>
        {(window.innerWidth >= 1024 ) ? <Table dataHeader={dataHeader} data={data} /> : <TableMobile dataHeader={dataHeader} data={data} />}
    </>
    

    );
  }
  
  export default TableConditioner;
