---
title: OnCommand
page_title: OnCommand | UI for ASP.NET AJAX Documentation
description: OnCommand
slug: ribbonbar/server-side-programming/events/oncommand
tags: oncommand
published: True
position: 3
---

# OnCommand



## OnCommand

The Server-side __OnCommand__ event is raised when the RadRibbonBar has Command specified.

The event handler function receives two arguments:

1. The __RadRibbonBar__ which has fired the event. This argument is of type object, but can be cast to the __RadRibbonBar type__.

1. An EventArgs object with the following properties:

* __CommandArgument__ - optional parameter passed to the Command event along with the associated CommandName.

* __CommandName__ -command name associated with the RadRibbonBarButton control that is passed to the Command event.
