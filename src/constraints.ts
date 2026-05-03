
 //constraint -সীমাবদ্ধতা - if we are only use generic for dynamically the user can insert any kind value and can skip mandatory value thats we should apply constraint
 
type Info={
    name:string;
    id:number
}
//   const programmerDetails=<X extends {name:string,id:number}> process 1
   const programmerDetails=<X extends Info>(programmerInfo:X)=>{
           return {
                   company:'programming hero',
                   ...programmerInfo
           }
   }

   const programmer1={
            id:3434,
            name:'Gaurav Sen Gupto',
            programming_language:['javascript','python'],
            district:'kushtia',
            marriedStatus:true
   }
   const programmer2={
            id:4343,
            name:'Rajat patidhar',
            programming_language:['javascript','c++'],
            district:'dhaka',
            marriedStatus:true
   }

   const programmer3={
              name:'kuddus miya',
              id:34,
              hasRegular:false
   }


   console.log(programmerDetails(programmer3));