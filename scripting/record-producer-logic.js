// target table: incident
var inc = new GlideRecord('incident');
inc.initialize();
inc.caller_id = producer.variables.caller;
inc.short_description = producer.variables.summary;
inc.description = producer.variables.details;
inc.insert();



//Here producer.variables.<name> → maps your catalog variable to the actual table field
//Runs server-side when submitted → no UI policy needed

//A. OnSubmit Mapping (Server-side)Use a Scripted REST / Catalog Client Script + Business Rule / Script Include 
// Map each variable to the appropriate field in the target table