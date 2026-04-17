oooh so basically finde the real specificy rule in the dom copy paste but put my own custom class infront?

Yeah—that’s basically the right mental model, just tighten it up a bit so it doesn’t turn into copy-paste chaos.

What you’re doing is:

“Borrow the selector that already wins, then scope it to my page so I win cleanly.”

That’s solid 👍

🧠 The refined version of your idea

Instead of blindly copying the full selector from DevTools like:

body .sp-page .panel .panel-body a.link span { ... }

You do:

.sp-page.page-XXXX .panel-body a {
  color: #7dd3fc;
}

👉 Same power, way less brittle.

⚠️ Important nuance (this is where people mess up)

Don’t literally copy the whole selector chain.

❌ Bad (too fragile)
.sp-page.page-XXXX div.container div.row div.col-md-12 .panel .panel-body a

This will break the second:

layout changes
widget updates
upgrade happens
✅ Good (target the “meaningful” parts)
.sp-page.page-XXXX .panel-body a

or:

.sp-page.page-XXXX .my-widget-class a

👉 You’re keeping:

just enough specificity
without tying yourself to DOM structure
🔑 The trick you’re discovering

In ServiceNow Service Portal, most OOB styles win because of:

.panel a
.nav-tabs > li > a
.btn-link
etc.

So your move is:

👉 Add one extra level of specificity (your page scope)

That’s usually enough to beat them without !important

💡 Clean workflow (pro version of what you said)
Inspect element
Find the rule that’s winning
Identify the important part of its selector
Rebuild a simpler version

Prefix with:

.sp-page.page-XXXX
🔥 Example

OOB rule:

.panel a {
  color: blue;
}

You write:

.sp-page.page-XXXX .panel a {
  color: #7dd3fc;
}

👉 You win. No !important. No mess.

🧭 Even better (future-proof mindset)

If you can, prefer something like:

.sp-page.page-XXXX .mes-dashboard a {
  color: #7dd3fc;
}

Where .mes-dashboard is your own class

👉 That way you’re not tied to OOB classes at all

🧠 One-liner to remember

Don’t copy selectors — extract the intent, then out-specify it cleanly