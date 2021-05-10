---
title: OnClientRequestFailed
page_title: OnClientRequestFailed - RadGantt
description: Check our Web Forms article about OnClientRequestFailed.
slug: gantt/client-side-programming/events/onclientrequestfailed
tags: onclientrequestfailed
published: True
position: 10
---


# OnClientRequestFailed


The **OnClientRequestFailed** occurs when a request to the remote service fails. The event is raised only when the Gantt is bound to a Web Service and is raised for every failed request sent to the service, including all CRUD operations on tasks, dependencies, resources and assignments.

The event is equivalent to the Kendo UI DataSource [error event](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/events/error).

The event handler receives two parameters:

1. The instance of the Gantt control firing the event.

2. An **eventArgs** parameter containing the following methods:

* **get_errorThrown** returns the exception if there is such.

* **get_status** returns a string describing the type of the error.

* **get_xhr** returns the current [jqXHR](https://api.jquery.com/Types/#jqXHR).

* **get_sender** returns the data source instance which fired the event.
  


````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientRequestFailed="OnClientRequestFailed">
</telerik:RadGantt>
````

````JavaScript
function OnClientRequestFailed(sender, eventArgs) {
    var status = eventArgs.get_status();
}
````



# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
