
 //there are lot of utilities such as pick type, omit type, partial type, read only type, required type,record type

 type device={
          name:string;
          price:number;
          color:string;
          model:string;
          released_year:string;

 }

 type pickUtility=Pick<device,'name'|'price'|'model'>
  
  type omitUtility=Omit<device,'released_year'>

  
 const mobile:omitUtility={
       name:'readme',
       price:20000,
       model:'note 11 s',
       color:'black',
      
 }
 console.log(mobile);