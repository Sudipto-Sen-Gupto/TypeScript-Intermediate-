//map on type
 
 const arr:number[]=[3,5,3]
 //if we want to make each value as string 

 const arr2=arr.map(num=>num.toLocaleString())
 console.log(arr2);

 type areaOfNum={
         base:number;
         height:number;
 }
  
type areaOfString={
         base:string;
         height:string;
}

//reducing this declaration frequently we can move dynamically 

type area<T>={
    //in is keyword
    //syntax [anyname in keyof typeName]:type
    //  [key in 'base'|'height']:string;
    // [key in keyof areaOfNum]:string;
    [key in keyof T]:T[key]
}

   const areaOfTriangle:area<{base:string,height:number}>={
             base:'4',
             height:12
   }
    console.log(areaOfTriangle);