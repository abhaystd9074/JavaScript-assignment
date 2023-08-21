

let students=[{name:"Alice",marks:98}, {name:"Bob",marks:85} , {name:"Hery",marks:90} ,{name:"Jhon",marks:88} ,{name:"Peter",marks:92.5},{name:"Chef",marks:92}];


   function checkResult(name){

  for(let i=0;i<students.length;i++){
    if(students[i].name == name ){
        if(students[i].marks>=90){
        console.log(`Congratulation ${students[i].name} you have cleared the exam `);
    return true;}
    
     else {
        console.log(`Sorry  ${students[i].name} you have not cleared the exam `);
  return true;
    }

  }
}
console.log(` Sorry  ${name} is a invalid student `);
 
   }

     checkResult("Bob");
     checkResult("Chef");
     checkResult("Hery");
     checkResult("tom");