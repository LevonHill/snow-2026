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
//returns 'User does not have MFA set' for Simon and 'User has MFA set' for Von its checking mobilephone property of each user object
console.table(list);//im returning the list of users in a table format for better visualization
console.log(checkMFA(Simon));
console.log(checkMFA(Von));