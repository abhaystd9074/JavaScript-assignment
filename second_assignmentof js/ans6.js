const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
  };
   console.log(`Below are the Product detail`);
   console.log(`name : ${productDetails.name}  `);
   console.log(`price : ${productDetails.price}  `);
   console.log(`color : ${productDetails.color}  `);
   console.log(`harDisk: ${productDetails.hardDisk}  `);

   for (const key in productDetails) {
    console.log(`${key}`);
  }