
 
 //generic with tuple

   //normal
   const add =(num1:number,num2:number)=> num1+num2
   console.log(add(2,5));
   
   //generics
   const info =<X,Y>(num1:X,num2:Y)=>{
              return [num1,num2]
   }
//    console.log(info(20,{name:'dip',id:38}));

const studentDetails=<T>(studentInfo:T)=>{
            return {
                 course_Name:'Next level',
                 company:'Programming hero',
                 ...studentInfo
            }
}


const student1={
        name:'Biplob ali',
        id:1334,
        enrolled:true,
        employed:false

    }
    
const student2={
        name:'Sadia khanom',
        id:1345,
        enrolled:true,
        employed:true

    }

    console.log(studentDetails(student1));
    console.log(studentDetails(student2));
