import TableText from './TableText';
import TableTextMobile from './TableTextMobile';
function TableConditioner() {

  const dataHeader = [
    {
      name: "Subject title",
      style: "w-[33.33%]"
    },
    {
      name: "Subject Grouping",
      style: "w-[33.33%]"
    },
    {
      name: "Prerequisite Subject Codes",
      style: "w-[33.33%]"
    }
  ]

  const data = [
        ["Calculus","Mathematics ", "NIL"],
        ["Introduction to Business and Fundamentals of Information Systems","Information Systems  ", "NIL"],
        ["Digital Fundamentals of Computer Systems","Digital Systems Design  ", "NIL"],
        ["Integrating Critical Thought and Language Skills ","Language Skills", "NIL"],
        ["Myanmar Literature ","Literature ", "NIL"],
        ["Physics (Mechanics and electromagnetism)","Natural Science ", "NIL"],
        
      ]
    

    return (
      
     <>
        {(window.innerWidth >= 1024 ) ? <TableText name="Year 1  Semester 1" dataHeader={dataHeader} data={data} /> : <TableTextMobile name="Year 1  Semester 2" dataHeader={dataHeader} data={data} />}
    </>
    

    );
  }
  
  export default TableConditioner;
