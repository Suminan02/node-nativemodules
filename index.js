const fs=require("fs");

fs.writeFile("massage.txt","hello from NodeJS!",(err)=>{
  if (err) throw err;
  console.log("the file has bees save!")
});

fs.readFile('massage.txt',"utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 