const obj1 = {
    "name":"Ram",
    "age":5,
};
const obj2 = {
    "age" :5,
    "name":"Ram"
};
    for(let key in obj1) { 
        if(obj1[key] !== obj2[key]) {
            console.log(false);    
        }
        else {
             console.log(true);
        }
    };
