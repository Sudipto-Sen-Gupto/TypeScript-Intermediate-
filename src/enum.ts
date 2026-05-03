

 //In TypeScript, an enum (short for enumeration) is a way to define a set of named constant values. It makes  code more readable and less error-prone.

//  type Userrole='Admin'|'Manager'|'Viewer'

enum UserRole {
         'Admin',
         'Manager',
         'Viewer'
}
  
  const dashBoard=(role:UserRole)=>{
        if(role===UserRole.Admin||role===UserRole.Manager){
              console.log(true);
        }
        
      else console.log('false');
  }

  dashBoard(UserRole.Manager)