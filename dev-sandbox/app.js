const list = [];
const finance = [];

excelData = {
   totalAmmount: 100000,
   totalUsers: 1000,
   totalRevenue: 500000,
   totalExpenses: 200000
};
excelData2 = {
    totalAmmount: 200000,
    totalUsers: 2000,
    totalRevenue: 1000000,
    totalExpenses: 400000
};

user1 = {
    name: 'Simon',
    age: 24,
    city: 'Wheatland',
    state: 'PA',
    role: 'Admin',
    mobilephone: ''
};
user2 = {
    name: 'Levon',
    age: 29,
    city: 'Austintown',
    state: 'Ohio',
    role: 'User',
    mobilephone: '123-456-7890'
};

finance.push(excelData, excelData2);


list.push(user1, user2);


function checkPermissions(user) {
    if(user.mobilephone === ''){
        return 1 ,'User does not have MFA set';
    }
    else if (user.mobilephone !== ''){
        return 0 ,'User has MFA set';
    }
}
function checkData(array) {
       console.table(array);
}

setInterval(() => {
  console.table(finance);
}, 5000);