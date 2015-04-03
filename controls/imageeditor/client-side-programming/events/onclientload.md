---
title: OnClientLoad
page_title: OnClientLoad | UI for ASP.NET AJAX Documentation
description: OnClientLoad
slug: imageeditor/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad



## 

The __OnClientLoad__ event is raised when the control is initialized.

The event handler receives the following parameters:

1. The __RadImageEditor__ client instance that fired the event.

1. Event arguments object.

````ASPNET
	    <telerik:RadImageEditor runat="server" ID="RadImageEditor1" OnClientLoad="OnClientLoad"></telerik:RadImageEditor>
	    <script type="text/javascript">
	        function OnClientLoad(sender, eventArgs)
	        {
	            alert("OnClientLoad event fired by RadImageEditor with ID: " + sender.get_id());
	        }
	    </script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
