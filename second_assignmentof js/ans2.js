


  function totalSum(){
    let arr=arguments; let sum=0;
    for(let i=0;i<arr.length;i++){
sum+=arr[i];
    }
    console.log(`total value is ${sum} `);
  }

  totalSum(90,80,70);
  totalSum(100,200,40,66,888);
  