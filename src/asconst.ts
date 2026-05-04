
 //we can we use as const method instead enum

  const UserRole={
         Admin:'ADMIN',
         Manager:'MANAGER',
         Viewer:'Viewer'
  }as const;

 /* 
            // as const use for not changing the value of key.we can change value of object
   //behind the scene 

   {readonly Admin:'Admin',
    readonly Manager:'Manager'}

    typeof useRole
    key type

    keyof --keys of object
 */

//   const userDetail=(role:keyof typeof UserRole)=>{
//              if(role===UserRole.Admin||role===UserRole.Manager){
//                  console.log(true);
//              }
//              else{
//                 console.log(false);
//              }
//   }

//if value becomes different from key 
  const userDetail=(role:(typeof UserRole)[keyof typeof UserRole])=>{  //array of string notation a['key']
             if(role===UserRole.Admin||role===UserRole.Manager){
                 console.log(true);
             }
             else{
                console.log(false);
             }
  }
   userDetail(UserRole.Manager)