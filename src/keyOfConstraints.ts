

    type richPersonDevice={
              mobile:string;
              computer:string;
              TV:string;
    }

    type poorPersonDevice= 'tv'|'mobile'|'computer'

   //key of method
   type poorPerson2= keyof richPersonDevice;
   const device:poorPerson2='computer';
   const device2:poorPerson2='headphone' //not supported
//    console.log(device);

type User={
     name:string;
     id:number
     city:{
        city:string;
        postal_code:number
     }
}
    
    const user1:User={
                name:'Lalon fokir',
                id:34,
                city:{
                    city:'kushtia',
                    postal_code:7000
                }
    }
 
    // console.log(user1['city']); //array notation
     //const userDetail=(obj:User,key:'name'|'id','city')
     //const userDetail=(obj:User,key:keyof User)
    const userDetail=<X>(obj:X,key:keyof X)=>{
        return obj[key]
    } 

    type Vehicle={
           name:string,
           speed:string,
           price:number
    }
      
      const vehicle={
             name:'Rolls Royals',
             speed:'235 km/h ',
             price:340000000
      }


    console.log(userDetail(user1,'name'));
    console.log(userDetail(vehicle,'speed'));
