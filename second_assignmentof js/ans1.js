
 let user=["mithun","akshay","salman","ajay","tiger","kartik","sushant"]
 function findUser(name){
    for(let i=0;i<user.length;i++){
        if(user[i]== name) {
            console.log(`Yes ${name} is a valid user `);
            return true;
        }
    }
    console.log(`No ${name} is not  a valid user `);
}
findUser("sushant");
 findUser("mithun");
 findUser("akshay");
   findUser("someone");
   findUser("roy");
