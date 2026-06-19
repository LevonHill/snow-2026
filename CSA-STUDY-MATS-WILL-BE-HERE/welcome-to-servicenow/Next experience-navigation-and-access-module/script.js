
let caller = current.caller_id.name;
let incidentstate = current.state;
let respond = true


function taskLogic(caller, incidentstate, respond){
if(caller === respond){
incidentstate = 'Active';
}
else if(caller !== respond){
incidentstate = 'Awaiting User Info';
}
};