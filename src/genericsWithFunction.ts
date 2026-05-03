 

  //generics with function
//normal function
//    const funcString=(value:string)=>{
//           return [value]
//    }

//    const funcNumber=(value:number)=>{
//     return [value]
//    }

//    const funcBoolean=(value:boolean)=>{
//        return [value]
//    }

// //    const funcObj=(value:object)=>{
// //             return [value]
// //    }

//    const funcObj=(value:{name:string,id:number})=>{
//     return [value]
//    }

  

//    console.log(funcString("gaurav"));
//    console.log(funcNumber(134));
//    console.log(funcObj({name:'dip',id:23}));
//    console.log(funcBoolean(false));
 
//generic function

 const genenricFunction=<X>(value:X)=>{
             return [value]
   }
     console.log(genenricFunction(134));
     console.log(genenricFunction('earki maro'));
     console.log(genenricFunction(true));
     console.log(genenricFunction({name:'dip',id:3}));