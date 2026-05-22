const { log } = require('console');
const {db,connectdb}=require('./db');
connectdb()
function CreateTable() {
    db.query("create table cust(id int ,name varchar(20),account decimal(10,2))",(err)=>{
if (err) {
    console.log(err);
    
}else{
    console.log("Table Created Successfully");
    
}

    })
}

function InsertData(id,name,account){
    const user={id,name,account};
    db.query("insert into cust set ?",user,(err)=>{
        if (err) {
           console.log(err);
            
        }else{
            console.log("Data Inserted Successfull..");
            
        }
    })
}
function UpdateData(id,account) {
    const upd=[account,id];
    db.query("update cust set account=? where id=?",upd,(err)=>{
         if (err) {
           console.log(err);
            
        }else{
            console.log("Data Updated Successfull..");
            
        }
    })
}

function DeleteData(id) {
    const del=[id];
    db.query("delete from cust where  id=?",del,(err)=>{
         if (err) {
           console.log(err);
            
        }else{
            console.log("Data Deleted Successfull..");
            
        }
    })
}

function ShowData(){
db.query("select * from cust",(err,result)=>{
    if (err) {
        console.log(err);

    }else{
        console.log(result);
        
    }
})
}
ShowData()



