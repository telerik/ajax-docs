---
title: OnClientFormCreated
page_title: OnClientFormCreated | UI for ASP.NET AJAX Documentation
description: OnClientFormCreated
slug: scheduler/client-side-programming/events/onclientformcreated
tags: onclientformcreated
published: True
position: 17
---

# OnClientFormCreated



## 

The __OnClientFormCreated__ client-side event is called when the in-line editor or the edit form is about to appear.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__ - returns the appointment instance.

* __get_formElement()__ - returns a reference to the form DOM element.

* __get_mode() -__Enum of type Telerik.Web.UI.SchedulerFormMode.


