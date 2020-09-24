
const add = (a,b) =>{
    return a+b;
}

const sub = (a,b) =>{
    return a-b;
}

const mult = (a,b) =>{
    return a*b;
}

const name = "Nik";

// For a single function or Variable
// module.exports = add;

// For multiple function or variable
module.exports = {add,sub,mult,name};

// OR 
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;
// module.exports.name = name;


