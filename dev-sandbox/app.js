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




const btn = document.getElementById('Btn');
btn.addEventListener('click', () => {
alert('You clicked the button');
});



list.push(user1, user2);

console.log(checkPermissions(user2));