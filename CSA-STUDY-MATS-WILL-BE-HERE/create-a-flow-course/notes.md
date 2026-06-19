![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)
![alt text](image-3.png)

https://app.diagrams.net/

Before they developed anything...

Jessie and David documented the different paths an approval could take based on the priority level. They reviewed their work with colleagues, management, and business stakeholders to ensure it was correct.“We ended up adding Flow Logic we did not even think of when we were initially documenting our process. Being pretty new at this, it took us a few minutes to figure out how to do it. I’m sure the development process would have been much longer if we had not documented the process at all.”

- Jessie Barkle


![alt text](image-4.png)

![alt text](image-5.png)

"Now you're beginning to see the shape of the domain."

Yes. If you're talking about modern ServiceNow development, Flows (specifically ServiceNow Flow Designer) are one of the things that make the platform feel alive rather than just a collection of forms and tickets.

Without flows, the front end can still:

Collect data
Display records
Route tickets
Present catalogs and forms

But a lot of the magic is missing.

With flows, you can:

Automatically assign work based on conditions
Trigger approvals
Send notifications
Create tasks across teams
Update records when other records change
Integrate with external systems
Build end-to-end business processes without writing much code

Think of it this way:

Forms collect information.
Flows decide what happens next.

A manager fills out a request form → Flow starts → Approval goes to the director → Tasks are generated for IT → User receives updates → Record closes automatically when all work is completed.

To the end user, it feels like the portal is smart. In reality, the flow is orchestrating everything behind the scenes.

"A beautiful throne means nothing if there are no servants carrying out the king's commands."

The really powerful combination in ServiceNow is:

Good forms/catalog items
Flow Designer
Business rules/client scripts when needed
Integrations

That's when you stop managing tickets and start automating work.

The fact that you're asking this tells me you're moving beyond the "help desk user" view of ServiceNow and starting to think like a platform owner or developer. Once you understand how data enters the system, how flows move it, and how approvals/tasks are generated, entire departments can be automated with surprisingly little code.

"The front end is merely the gate. The flow decides what happens after someone walks through it." 😏

![alt text](image-6.png)
![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-9.png)
![alt text](image-10.png)
![alt text](image-11.png)
![alt text](image-12.png)

1. Entry is created in the event queue
Every time trigger conditions are met, Flows creates an event entry.

The system processes triggers after database operations. Typically, business rules and workflows that run synchronously, execute before a triggered Flow.

2. Event processed
Each Flow event contains a reference to the Flow to start and a reference to either the triggering record or the execution time.

The system processes these events using standard event processing, where a scheduler periodically works through the current items in the event queue in the order they were added.

Depending on other events in the queue, the system may not immediately start a flow. Flow developers should expect some lag time between when the trigger conditions occur and when the Flow starts.

3. Process plan built
When the system pulls an event from the queue, it builds a process plan to run the Flow.

A process plan contains all the information necessary to execute a Flow, such as the sequence of published actions or Subflows, the input values for each Subflow or Action, the Action steps to run for each Action, and the data provided by the Trigger or Fubflow output.

The system uses a just-in-time compilation scheme to ensure that process plans contain the latest changes to Flows, Subflows, and Actions. If no changes are detected, the system uses a cached copy of the process plan. Otherwise, it builds a new process plan.

By automatically checking for updated Flows, Subflows, and Actions with process plans, the system enables you to apply changes from update sets and upgrades without having to edit current Flows. If you move published actions to a target instance, every Flow that uses the published action will automatically update the next time it is executed.

Warning: If changing Subflows or Actions that are used in activated Flows, do not change the inputs and outputs used in the Subflow or Action: 

Changing inputs and outputs may cause errors when the activated Flow is next triggered, because it has not been configured to use the new inputs and outputs. 

Any currently running Flows are unaffected by changes to inputs or outputs as the Flow uses the compiled Subflows and Actions from the process plan.

4. Process plan runs
The system runs the process plan as the 'System user' within the Flow application scope.

When running a flow with a record-based trigger, the system stores the triggering record in memory as an instance that is represented in the interface as a data pill.

The instance contains the record values from when the Flow started, which may differ from the current record stored in the database.

For example, suppose that creating an incident record triggers a Flow. Any changes a user makes to the incident record after the Flow has started do not update the triggering record unless an Action looks up the current record value.

5. Store flow execution details
The system stores Flow execution details in a Flow context record, which contains the following information:

Flow outcome state

Flow runtime duration

Flow log messages

Flow configuration and runtime values

Each time a Flow runs, the system adds an entry to the Flow Executions list. Each entry has its own context record and matching execution details page.

A Flow can have one of these outcome states:

Complete: The Flow completed successfully.

In Progress: The Flow is running. By default, a transaction quota rule prevents Flows from running longer than an hour.

Waiting: The Flow is waiting for another event to occur. (For example, a user must update a task or approval, or a record must reach a specific state. When in the waiting state, the Flow is quiesced and serialized into a context record.)

Canceled: The Flow was canceled by a user.

Error: The Flow encountered an error and has stopped running. (For example, an action is missing an input value, or a quota transaction rule has stopped the Flow.)


![alt text](image-13.png)
![alt text](image-14.png)

setup triggers
![alt text](image-15.png)
When configuring a Trigger, the first step is to identify the Trigger type. The Trigger drop-down menu provides a list of available options:![alt text](image-16.png)
![alt text](image-17.png)

If you are developing a Flow and cannot remember which Trigger type to select, there are two places you can quickly refer to for that information.

1
Definitions are provided in a popup when an information button is selected:

The Product Documentation website lists Trigger Types and the definitions.https://www.servicenow.com/docs/r/build-workflows/workflow-studio/flow-triggers.html

![alt text](image-18.png)

![alt text](image-19.png)

![alt text](image-20.png)
![alt text](image-21.png)


IMPORTANT: Flows that have a record trigger that runs For each unique change can produce recursions when run in a non-interactive session. When these Flows make a change to the trigger record, the change meets the Flow trigger conditions and causes a recursion.


bringing it all together is what it'll look like ![alt text](image-22.png)


Summary

This lesson focused on configuring Triggers for a Flow, which dictate when the Flow will execute. You learned about Trigger types, table selection, conditions, and run options. Here are some key takeaways:

Identify the Trigger type. Choose between record-based, schedule-based, or application-based Triggers.

Select the appropriate table. Ensure it aligns with the purpose of your Flow.

Use conditions wisely. Refine execution timing by setting optional conditions.

Understand run options. Recognize how settings influence Trigger frequency and circumstances.



Actions section 
![alt text](image-23.png)

![alt text](image-24.png)

![alt text](image-25.png)
![alt text](image-26.png)

![alt text](image-27.png)
![alt text](image-28.png)

![alt text](image-29.png)

![alt text](image-30.png)
![alt text](image-31.png)

![alt text](image-32.png)

1. ![alt text](image-33.png)
2. ![alt text](image-34.png)
3. ![alt text](image-35.png)
4. ![alt text](image-36.png)
![alt text](image-37.png)


IMPORTANT FOR BIG BOY SCRIPTING
![alt text](image-38.png)

https://www.servicenow.com/docs/r/build-workflows/workflow-studio/inline-scripts.html


https://www.servicenow.com/docs/r/build-workflows/workflow-studio/transform-functions.html

![alt text](image-39.png)


TESTING FLOWS

![alt text](image-40.png)

![alt text](image-41.png)

![alt text](image-42.png)

![alt text](image-43.png)

![alt text](image-44.png)

![alt text](image-45.png)

![alt text](image-46.png)

![alt text](image-47.png)

![alt text](image-48.png)

![alt text](image-49.png)

![alt text](image-50.png)

![alt text](image-51.png)

![alt text](image-52.png)

![alt text](image-53.png)



Summary

The lesson on Flow Execution Details provides a comprehensive overview of the key components and states involved in Flow execution. It emphasizes how to access logs, data values, and related records for better troubleshooting and analysis. Here are some key takeaways:

Understand the components. Each Flow execution details page includes calling source, flow state, related record options, and flow statistics.

Recognize Flow states. Flows can be completed, waiting, or in error, each indicating different execution statuses.

Utilize related record options. Accessing related records and logs can help in troubleshooting and modifying Flows effectively.

Analyze Flow statistics. Reviewing configuration details and run-time values can help identify errors and performance issues.


lOGIC IN OUR FLOWS

![alt text](image-54.png)

![alt text](image-55.png)

OPTIONS 
![alt text](image-56.png)

![alt text](image-57.png)


TEST
![alt text](image-58.png)