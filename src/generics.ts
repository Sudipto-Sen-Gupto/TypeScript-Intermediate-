  

   const arr1:string[]=['a','b','c']
   const arr2:number[]=[1,3,4,5]

   const arr3:Array<string>=['aa','bb','cc']  //array constructor 
   const arr4:Array<number>=[11,12,23]
   
    type GenericArray<t>=Array<t>
        const arr5:GenericArray<string>=['dd','ee','ff']
        const arr6:GenericArray<boolean>=[true,false,true]
        const arr7:GenericArray<number>=[33,534]
   
        const object:GenericArray<{name:string,age:number,cgpa:number}>=[
            {
                name:'gaurav',
                age:27,
                cgpa:3.75
            },{
                name:'Troye',
                age:25,
                cgpa:4
            }
        ]

        console.log(arr5,arr6,object);
     
        //tuple
      const coordinates:number[]=[23,53]
      
       type Coordinates2=[string,string]
       const coordinates2:Coordinates2=['35','34']
     
       type Coordinates3<X,Y>=[X,Y]
        
       const coordinates4:Coordinates3<number,number>=[34,53]
       console.log(coordinates4);