var obj1 = {
    "name":"Ram",
    "age":5,
};

var obj2 = {
    "age" :5,
    "name":"Ram",
};
   
if(obj1.length !== obj2.length) {
    if(typeof obj1 !== typeof obj2){
            console.log(false);
    }
    else {
            console.log(true);
    };
    console.log(false);

}else{
    console.log(true);
};