# ServiceNow Certified System Administrator (CSA)

## Mental Cheat Sheet (Exam-Day Recall)

> **Think like the platform, not a developer.**
> Configuration over data. Enforcement over appearance.

---

## 1. Platform Basics

* **Instance** = your ServiceNow environment
* **Applications** = scoped or global
* **Configuration ≠ Data** (CSA theme)

---

## 2. Tables & Data Model (Spine of the Exam)

* **task** → parent of incident, problem, change, request
* Child tables inherit:

  * Fields
  * ACLs
  * Behaviors
* **Dictionary** defines fields
* **Reference field** = points to another table
* **Choice field** = fixed values

**Burn it in:**

> If you don’t know the table, you don’t know ServiceNow.

---

## 3. Forms, Lists, Views

* **Form Layout** = fields on form
* **List Layout** = columns in list
* **View** = different layout per role/use case
* **Personal vs Global**:

  * Personal = only you
  * Global = everyone

---

## 4. UI Policy vs Business Rule

### UI Policy (Client-side / Illusion)

* Runs in browser
* Show/hide
* Mandatory
* Read-only
* Improves UX

**Fails if:** API, import, background script

### Business Rule (Server-side / Law)

* Runs on server
* Enforces logic
* Modifies data
* Always executes

**Golden Rule:**

> If it must ALWAYS be true → Business Rule

---

## 5. Client Scripts (CSA Level)

* Runs in browser
* OnLoad / OnChange / OnSubmit
* Enhances form behavior

**Not security. Not enforcement.**

---

## 6. Update Sets (Configuration Ownership)

### Captured

* Tables & fields
* Business Rules
* UI Policies
* Client Scripts
* ACLs
* Forms & layouts
* Workflows / Flows

### NOT Captured

* Incidents / Requests / Users
* Attachments
* Import Set data
* User preferences

**Rule:**

> Update Sets move configuration, not outcomes.

---

## 7. Security Model (High-Value Exam Area)

### Users / Groups / Roles

* Users → assigned roles
* Groups → assign roles to many users

### ACLs

* Table ACL vs Field ACL
* Most restrictive wins
* Order matters

**CSA Trap:**

> Can see record but not edit field → Field ACL

---

## 8. Workflow & Flow Designer

* Automates processes
* Triggered by record changes
* Flow Designer = modern
* Workflow = legacy (still tested lightly)

---

## 9. Notifications

* Triggered by events or conditions
* Sent via email/SMS
* Uses templates

---

## 10. CMDB (Conceptual Only)

* Stores CIs
* Relationships matter
* Discovery populates CMDB

---

## 11. Import Sets

* Used to bring **data** into tables
* Does NOT capture in update sets

---

## 12. Reporting & Dashboards

* Based on tables
* Filters matter
* Role-based visibility

---

## 13. Performance Analytics (Awareness)

* Trend analysis
* KPIs over time
* NOT real-time reporting

---

## 14. System Properties

* Instance-wide settings
* Powerful
* Dangerous if changed blindly

---

## 15. Exam Strategy (Critical)

### Ask yourself every question:

1. Is this **configuration or data**?
2. Client-side or server-side?
3. UX improvement or enforcement?
4. Least complex correct solution?

### Keywords to listen for

* **Always / enforce / regardless** → Business Rule
* **On the form / user experience** → UI Policy
* **Move to another instance** → Update Set

---

## Final Rule of the CSA

> **ServiceNow is a platform of control, not creativity.**

If you think like an admin,
You pass.
