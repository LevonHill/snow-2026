usable ServiceNow-style JS template  can drop into a Business Rule / Script Action in your PDI (Zurich).

A clean ServiceNow-style template (.js mindset)

This is written exactly how you’d script it in a Business Rule.

(function executeRule(current, previous /*null when async*/) {

    // ---- CONFIG ----
    var AWAITING_USER_INFO = 3; // example state value
    var ACTIVE = 2;             // example state value

    // ---- DATA ----
    var callerId = current.caller_id;
    var lastUpdatedBy = current.sys_updated_by;
    var callerEmail = callerId.email;

    // ---- LOGIC ----
    var callerResponded = false;

    // If the person who last updated the ticket is the caller
    if (lastUpdatedBy === callerEmail) {
        callerResponded = true;
    }

    // ---- CONTROL FLOW ----
    if (callerResponded) {
        current.state = ACTIVE;
    } else {
        current.state = AWAITING_USER_INFO;
    }

})(current, previous);


Why this works (important for CSA + real life)

sys_updated_by tells you who last touched the record

If it matches the caller → they responded

No response → ticket stays waiting

Response → ticket becomes active again

This mirrors real ITSM behavior, not just theory.



If you want a simpler “starter” version

Strip it down even more while learning:
(function executeRule(current) {

    if (current.sys_updated_by === current.caller_id.email) {
        current.state = 2; // Active
    } else {
        current.state = 3; // Awaiting User Info
    }

})(current);
Same idea. Fewer moving parts.





Where to put this in your PDI (Zurich)

Business Rule

Table: Incident

When: Before

Update

Condition: state changes (optional but smart)



Basic setup

Name: Auto set state based on caller response (POC)

Table: Incident

When: Before

Insert: ❌

Update: ✅

Advanced: ✅

Paste the script into the Script field.

That’s it structurally.


















my idea

The core value (manager-friendly)

Right now, Tier 2 has to:

Open the incident

Read the activity stream

Figure out who last replied

Decide whether to work it or wait

Your idea:

Incident state alone answers the question

Active → user replied, work it

Awaiting User Info → waiting on user

No form open

No scrolling

No guesswork

That’s a straight decision-time reduction.


Rough productivity math (very defensible)

Let’s lowball everything so you don’t overpromise.

Assume:

Tier 2 touches 40–60 incidents/day

Only half require checking for user response

Time saved per check: 20 seconds

Per tech per day

20–30 incidents × 20 seconds
≈ 6–10 minutes saved/day

Per week

~30–50 minutes

Per year

25–40 hours per Tier 2 tech

That’s 1 full work week per person, reclaimed — without hiring anyone.

If you have:

5 Tier 2 techs → 125–200 hours/year

10 Tier 2 techs → 250–400 hours/year

That’s not small. Managers perk up at that.


The subtle but powerful side effect

This also:

Reduces context switching fatigue

Prevents incidents being worked prematurely

Improves response consistency

Makes queues self-organizing

And the best part:

No behavior change required

Techs already look at list views

You’re just making the state mean something


“I’ve been thinking about a small automation that updates the incident state automatically when a user replies.

That way Tier 2 can tell instantly from list view whether a ticket is waiting on the user or ready to work, without opening the form or reading the activity stream.

It’s lightweight, reversible, and could save each tech several hours a month just in click reduction.”

That’s it. No code. No buzzwords.



Why this is a safe idea to propose

Doesn’t touch SLAs directly

Doesn’t change routing

Doesn’t auto-close anything

Doesn’t replace human judgment

Easy rollback (disable rule)

Low blast radius = easy yes.