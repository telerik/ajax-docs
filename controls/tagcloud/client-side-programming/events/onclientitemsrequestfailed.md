---
title: OnClientItemsRequestFailed
page_title: OnClientItemsRequestFailed | UI for ASP.NET AJAX Documentation
description: OnClientItemsRequestFailed
slug: tagcloud/client-side-programming/events/onclientitemsrequestfailed
tags: onclientitemsrequestfailed
published: True
position: 6
---

# OnClientItemsRequestFailed



The __OnClientItemsRequestFailed__ is fired when the request to the web service is failed.The event arguments provide information about the error message and allow the developer to cancel the error alert and process the error otherwise

## 

The event handler receives two arguments:

* __Sender__–the [TagCould object]({%slug tagcloud/client-side-programming/tagcloud-object%}) that fired the event.

* __Event arguments__–event arguments object of type __Telerik.Web.UI.RadTagCloudErrorEventArgs__, that exposes the following properties and methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_errorMessage||String|Returns the error message that describes the specific problem.|
|get_cancelErrorAlert||Bool|Returns a boolean value that indicates whether the error message will be displayed. True means the message will not be shown.|
|et_cancelErrorAlert|bool||Sets a boolean value that indicates whether the error message will be displayed. Setting true means the message will not be shown.|

In the TagCloud's [Web Service online example](http://demos.telerik.com/aspnet-ajax/tagcloud/examples/webservice/defaultcs.aspx) you can examine how this event can be used.

# See Also

 * [TagCloud Client-side object]({%slug tagcloud/client-side-programming/tagcloud-object%})

 * [Overview]({%slug tagcloud/client-side-programming/events/overview%})

 * [OnClientItemsRequesting]({%slug tagcloud/client-side-programming/events/onclientitemsrequesting%})

 * [OnClientItemsRequested]({%slug tagcloud/client-side-programming/events/onclientitemsrequested%})

 * [Demo - Web Service](http://demos.telerik.com/aspnet-ajax/tagcloud/examples/webservice/defaultcs.aspx)

 * [Demo - WCF Service](http://demos.telerik.com/aspnet-ajax/tagcloud/examples/wcfservice/defaultcs.aspx)
