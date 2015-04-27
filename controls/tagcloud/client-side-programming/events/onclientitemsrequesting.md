---
title: OnClientItemsRequesting
page_title: OnClientItemsRequesting | RadTagCloud for ASP.NET AJAX Documentation
description: OnClientItemsRequesting
slug: tagcloud/client-side-programming/events/onclientitemsrequesting
tags: onclientitemsrequesting
published: True
position: 4
---

# OnClientItemsRequesting



The **OnClientItemsRequesting** is fired before sending a request to a Web Service for the items to be bound.

## 

The event handler receives two arguments:

* **Sender**–the [TagCould object]({%slug tagcloud/client-side-programming/tagcloud-object%}) that fired the event.

* **Event arguments**–event arguments object of type **Sys.CancelEventArgs**, that exposes the following properties and methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_cancel||Bool|Returns a bool value that indicates whether the event was canceled. True means the event is canceled.|
|set_cancel|bool||Sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.|
|get_context||String|Returns the parameter which will be sent to the Web Service|
|set_context|string||Sets the parameter which will be sent to the Web Service|

In the TagCloud's [Web Service online example](http://demos.telerik.com/aspnet-ajax/tagcloud/examples/webservice/defaultcs.aspx) you can examine how this event can be used.

# See Also

 * [TagCloud Client-side object]({%slug tagcloud/client-side-programming/tagcloud-object%})

 * [Overview]({%slug tagcloud/client-side-programming/events/overview%})

 * [OnClientItemsRequested]({%slug tagcloud/client-side-programming/events/onclientitemsrequested%})

 * [OnClientItemsRequestFailed]({%slug tagcloud/client-side-programming/events/onclientitemsrequestfailed%})

 * [Demo - Web Service](http://demos.telerik.com/aspnet-ajax/tagcloud/examples/webservice/defaultcs.aspx)

 * [Demo - WCF Service](http://demos.telerik.com/aspnet-ajax/tagcloud/examples/wcfservice/defaultcs.aspx)
