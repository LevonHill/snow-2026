var incident = new GlideRecord('incident');
incident.addQuery('active', true);
incident.addQuery('category','MFA');
incident.query();

while(incident.next() ) {
    gs.print(incident.number + ': ' + incident.short_description);
}

let group = [];

let User1 = {
    name: 'Levon',
    email: 'Levon.hill@zekelman.com',
    role: 'administrator'
}
let User2 = {
    name: 'Alice',
    email: 'alice@example.com',
    role: 'user'
}
group.push(User1,User2);


function calculate (){
    var count = 0;
    while(incident.next() ) {
        count++;
    }
    return count;
}