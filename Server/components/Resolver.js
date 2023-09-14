let uuid = require("uuid");

let localData = {};

let posts = [{title: "delectus aut autem",content: "DELETED_CONTENT",author:"AQIB"},
             {title: "mY fIRST bLOG",content: "hEY GUYS! ..... thats the end of our blog",author:"JEREMY"},
             {title: "Food Blog",content: " bbq , karahi , tikka, chinese, pizza",author:"SUSAN"}]
const resolver = {
    Query: {
        
        check: () => "CHECKING PURPOSES"
    },
    Mutation:{
        
        createMessage: (_,{message},input,info) => {
            let id = uuid.v4();
            console.log("Input:",input,"AND",_,"AND",message,"AND",info);
            localData[id] = message;
            return {title: id,message:message}
        }

    }
}

module.exports = resolver;

/*
user: ()=>{
           // console.log("args:",args);
            return {name: "AQIB SHAH",age: 20,NIC: "61101-18263947-5",previous_customer: true,posts: posts.filter((e) => e.title === true)}
        },
        posts: (args) => {
            return{...posts[0]}
        },
        */