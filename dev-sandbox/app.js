const list = [];
Simon = {
    name: 'Simon',
    age: 24,
    city: 'Wheatland',
    state: 'PA',
    role: 'Admin',
    mobilephone: ''
};
Von = {
    name: 'Levon',
    age: 29,
    city: 'Austintown',
    state: 'Ohio',
    role: 'User',
    mobilephone: '123-456-7890'
};
list.push(Simon, Von);

function checkMFA(user) {
    if(user.mobilephone === ''){
        return 1 ,'User does not have MFA set';
    }
    else if (user.mobilephone !== ''){
        return 0 ,'User has MFA set';
    }
}

list.push(user1, user2);

setInterval(() => {
checkPermissions(user1);
checkPermissions(user2);
},1000);
