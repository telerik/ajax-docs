---
title: OnClientLoad
page_title: OnClientLoad | RadCloudUpload for ASP.NET AJAX Documentation
description: OnClientLoad
slug: cloudupload/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 0
---

# OnClientLoad



## 

The **OnClientLoad** event occurs after the **RadCloudUpload** has been fully initialized at the client-side.

The event handler receives one parameter:

1. The instance of the **RadCloudUpload** control firing the event.

This event is helpful if you need to get the client-side instance of the **RadCloudUpload**. Hook the **OnClientLoad** event and get the client-side instance of the control as demonstrated in the example below. This technique can be used to retrieve the RadCloudUpload instance for use elsewhere.

````ASP.NET
<telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientLoad="onClientLoad" ...>
</telerik:RadCloudUpload>
````


````JavaScript
function onClientLoad(sender) {
	var cloudUpload;
	cloudUpload = sender;
}
````


