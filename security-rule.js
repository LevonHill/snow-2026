const user = [];
let counter = 0;

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
user.forEach((user) => {
    console.log(`Name: ${user.name}, Role: ${user.role}, Number: ${user.number}`)});;


 function checkPermissions(user){
if(user.role === 'admin'){
    console.log(`Access granted to ${user.name} with full permissions`);
}
else if(user.role === 'user'){
    console.log(`Access granted to ${user.name} with limited permissions`);
    }

}

function CheckCounter(){
    if(counter === 1){
        console.log('You have accessed the system for the first time');
    }
    else if (counter >= 5){
        console.log('You have exceeded the maximum number of accesses');
        clearInterval(timer);
    }

}
function ChangeNumber(num){
    console.log(counter += num);
}

checkPermissions(user1), checkPermissions(user2);
timer = setInterval(() => {
    ChangeNumber(1);
CheckCounter();
}, 1000); // Adjust the interval time as needed

