 const products=[
    {name:"Laptop", price:250000},
    {name:"ear-birds", price:3870},
    {name:"smart_watch", price:6700},
    {name:"Mobile", price:21999},
    {name:"keyboard", price:2999},
    {name:"washing_machine", price:289999},
    {name:"Car", price:2019999}

 ];
  let max_product_name=""; let min_product_name="";
 let max_price=products[0].price;
 let min_price=products[0].price;

 for(let i=0;i<products.length;i++){
    if(products[i].price > max_price){
        max_price=products[i].price;
        max_product_name=products[i].name;
    }
    if(products[i].price< min_price){
        min_price=products[i].price;
        min_product_name=products[i].name;
    }

 }
   console.log(`the product with maximum amount is ${max_product_name} which priced at rs ${max_price}`);
   console.log(`the product with minimum amount is ${min_product_name} which priced at rs ${min_price}`);
