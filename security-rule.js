const user = [];

let user1 = {
    name: 'John wick',
    role: 'admin',
    number: 1234567890
}
let user2 = {
    name: 'Jane Doe',
    role: 'user',
    number: 9876543210
}
user.push(user1, user2);



 function checkPermissions(user){
if(user.role === 'admin'){
    console.log('FullAccess granted');
}
else if(user.role === 'user'){
    console.log('Access granted with limited permissions');
    }

}

checkPermissions(user1), checkPermissions(user2);