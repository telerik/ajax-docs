---
title: OnCommand
page_title: OnCommand | RadRibbonBar for ASP.NET AJAX Documentation
description: OnCommand
slug: ribbonbar/server-side-programming/events/oncommand
tags: oncommand
published: True
position: 3
---

# OnCommand



## OnCommand

The Server-side **OnCommand** event is raised when the RadRibbonBar has Command specified.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar type**.

1. An EventArgs object with the following properties:

	* **CommandArgument** - optional parameter passed to the Command event along with the associated CommandName.

	* **CommandName** -command name associated with the RadRibbonBarButton control that is passed to the Command event.
