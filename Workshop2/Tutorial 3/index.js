user={
    username:"Pranay",
    password:"Hacker",
post:[
    {name:"Hike", like: 200},
    {name:"camp", like: 300},
],
postdekhaune(){
    this.post.forEach(p=>{
        console.log(p.like,p.name)
}
);
}
}
user.postdekhaune()

// function user1(){
//    return 
//     {
//         name:"pranay"
//     }
// }
// console.log(user1());
