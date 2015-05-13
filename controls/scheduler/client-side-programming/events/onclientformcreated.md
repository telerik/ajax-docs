---
title: OnClientFormCreated
page_title: OnClientFormCreated | RadScheduler for ASP.NET AJAX Documentation
description: OnClientFormCreated
slug: scheduler/client-side-programming/events/onclientformcreated
tags: onclientformcreated
published: True
position: 17
---

# OnClientFormCreated



## 

The **OnClientFormCreated** client-side event is called when the in-line editor or the edit form is about to appear.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** - returns the appointment instance.

* **get_formElement()** - returns a reference to the form DOM element.

* **get_mode()** - Enum of type Telerik.Web.UI.SchedulerFormMode.


