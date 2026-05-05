
 type a=null;
 type b=undefined

 type elsa= a extends number?true: b extends undefined?true:false

 type vehicle ={
         car:string;
         bike:string;
         bus:string;
 }

//   type vehicleCheck<T>=T extends 'bike'|'car'|'bus'?true:false;
  type vehicleCheck<T>=T extends keyof vehicle?true:false;
  type checked=vehicleCheck<'ship'>
  