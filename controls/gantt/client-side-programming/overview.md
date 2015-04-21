---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: gantt/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview


**Gantt** provides a flexible client-side API. You can easily interact with RadComboBox in the browser using its client-side object.In addition to a variety of [client-side events]({%slug gantt/client-side-programming/events/overview%}), the client-side object model lets you achieve complicated tasks whileavoiding unnecessary postbacks.

## Getting the Gantt Client-side Object

**Gantt** creates a client-side object with its **ClientID**. You can obtain the reference using the following JavaScript code:

````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
````


## Getting the Instance of a Particular Gantt Task

Getting instance of a particular task using the **Gantt's** client API:

````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var tasks = gantt.get_tasks();
var task = tasks.getTask(0);
````

## Getting the Instance of a Particular Gantt Dependency

Getting instance of a particular dependency using the **Gantt's** client API:

````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var dependencies = gantt.get_dependencies();
var dependency  = get_dependencies().getDependency(0);
````

## Cancelling an Event

Several client-side events occur immediately before **Gantt** performs some action. Most of these events all have names that end with "-ing".You can use these events to cancel the **Gantt**'s action by using the **set_cancel** method of the **eventArgs** passed tothe handler:

````JavaScript
function OnClientTaskResizing(sender, eventArgs) {
    eventArgs.set_cancel(true);
}
````

# See Also

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
