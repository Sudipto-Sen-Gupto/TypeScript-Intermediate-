

  //generics with interface

   interface Status<X,Y=null>{
          name:string;
          job:string;
          age:number;
          address:{
            division:string,
            district:string
          }
          daily_food:X
          bike?:Y
   }

  
   type FoodTime=
    {breakfast:string,lunch:string,dinner:string}
   

  const poorAdmi:Status<FoodTime>={
         name:'kuddus miya',
         job:'labour',
         age:30,
         address:{
              division:'khulna',
              district:'kushtia'
         },
         daily_food:{
            breakfast:'rice,mass potato,papaya,pulse',
            lunch:'pulse ,rice,vegetable',
            dinner:'vegetable,rice,roti,chicken sometime'

         },
         bike:null

  }  


   const richAdmi:Status<FoodTime,string>={
         name:'Kabir singh',
         job:'Software engineer',
         age:28,
         address:{
              division:'khulna',
              district:'jashore'
         },
         daily_food:{
            breakfast:'bread,boiled egg,boiled chickpea,milk,toast,coffee',
            lunch:'rice,chicken,fish,vegetables,salad,dessert',
            dinner:'rice,mutton,fish,yogurt,'

         },
         bike:'yamaha'
  }

  console.log(poorAdmi,richAdmi);