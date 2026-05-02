//type assertion . as keyword

let read:any;
 let write:any;
read=12;
(read as number)
write='essay';
(write as string)

//kgToGConverter

const kgToGConverter=(input:string | number):number|string|undefined=>{
       if(typeof input==='number'){
             const Gram=input*1000;
             return Gram
       }

       else if(typeof input==='string'){
              const [value]=input.split(' ')
              const Gram= Number(value)*1000;
              return Gram;
       }

       else return 'Invalid input'
}

   const result1=(kgToGConverter(3) as number)
   console.log({result1});
   const result2=(kgToGConverter('5 kg') as string )
   console.log({result2});

    type Error ={
            message:string
    }

    try{

    }catch(err){
            console.log((err as Error).message);
    }