---
title: OnClientLoad
page_title: OnClientLoad | UI for ASP.NET AJAX Documentation
description: OnClientLoad
slug: cloudupload/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 0
---

# OnClientLoad



## 

The __OnClientLoad__ event occurs after the __RadCloudUpload__ has been fully initialized at the client-side.

The event handler receives one parameter:

1. The instance of the __RadCloudUpload__ control firing the event.

This event is helpful if you need to get the client-side instance of the __RadCloudUpload__. Hook the __OnClientLoad__ event and get the client-side instance of the control as demonstrated in the example below. This technique can be used to retrieve the RadCloudUpload instance for use elsewhere.

````ASPNET
	            <telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientLoad="onClientLoad" ...>
	            </telerik:RadCloudUpload>
````



````JavaScript
	            function onClientLoad(sender) {
	                var cloudUpload;
	                cloudUpload = sender;
	            }
````


