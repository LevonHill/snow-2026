const list = [];

user1 = {
    name: 'Levon',
    age: 30,
    city: 'Austintown',
    state: 'Ohio',
    role: 'Admin'
};
user2 = {
    name: 'John',
    age: 25,
    city: 'Youngstown',
    state: 'Ohio',
    role: 'User'
};


function checkPermissions(user) {
    if(user.role === 'Admin'){
        return 'Your an Admin Access granted';
    }
    else{
        return 'Your not an Admin Access Denied';
    }
}

list.push(user1, user2);

setInterval(() => {
checkPermissions(user1);
checkPermissions(user2);
},1000);
