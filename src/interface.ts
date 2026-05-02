   
   //interface is also like almost type alias but it only works on non primitive data type

  type User={
         name:string;
         age:number
  }

  type UserRole={
        role:'admin'|'user'
  }

  type userDetail=User& UserRole

  const user1:userDetail={
          name:'gaurav sen gupto',
          age:27,
          role:'user'
  }
//    console.log(user1);


//interface for object

 interface User2{
      name:string;
      age:number
 }
interface UserInterface extends User2 {
      role:'admin'| 'user'
}

const user2:UserInterface={
        name:'dip',
        age:27,
        role:'admin'
}
console.log(user2);

//interface for array

//type alias
type Arr=string[]

const array:Arr=['a','b','c']

//interface

interface NewArr{
    [index:number]:string
}

const newArray:NewArr=['a','d','f']
console.log(newArray);

//interface for function
 
//type alias
   type Add=(num1:number,num2:number)=>number;
   const add:Add=(num1,num2)=>num1+num2
   console.log(add(2,5));

//interface
 interface Add2{
        (num3:number,num4:number):number;
 }

 const add2:Add2=(num3,num4)=>num3+num4;
 console.log(add2(4,5));