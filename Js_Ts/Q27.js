

function payment(status) {
    return new Promise((resolve,reject)=>{
        const product={
            amount:1000,
            name:'raju',
            transaction:true
        }
        if(product.available==true){
            resolve(product)
        }else{
            reject("transaction completed ");
        }
    })
}
payment(true).then((req)=>{
    console.log(req);
    
}).catch((Error)=>{
    console.log(Error);
    
})