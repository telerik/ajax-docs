---
title: OnClientRequestEnd
page_title: OnClientRequestEnd - RadGantt
description: Check our Web Forms article about OnClientRequestEnd.
slug: gantt/client-side-programming/events/onclientrequestend
tags: onclientrequestend
published: True
position: 9
---


# OnClientRequestEnd


The **OnClientRequestEnd** occurs when a response from the Web Service is received. The event is raised only when the Gantt is bound to a Web Service and is raised for every request sent to the service, including all CRUD operations on tasks, dependencies, resources and assignments.

The event is equivalent to the Kendo UI DataSource [requestEnd event](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/events/requestend).

The event handler receives two parameters:

1. The instance of the Gantt control firing the event.

2. An **eventArgs** parameter containing the following methods:

* **get_type** returns the type of the request. Possible options are `create`, `read`, `update` and `destroy`.

* **get_response** returns the raw remote service response.

* **get_sender** returns the data source instance which fired the event.
  


````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientRequestEnd="OnClientRequestEnd">
</telerik:RadGantt>
````

````JavaScript
function OnClientRequestEnd(sender, eventArgs) {
    var response = eventArgs.get_response();
}
````



# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
