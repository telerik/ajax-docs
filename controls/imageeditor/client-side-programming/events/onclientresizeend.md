---
title: OnClientResizeEnd
page_title: OnClientResizeEnd | UI for ASP.NET AJAX Documentation
description: OnClientResizeEnd
slug: imageeditor/client-side-programming/events/onclientresizeend
tags: onclientresizeend
published: True
position: 9
---

# OnClientResizeEnd



## 

The __OnClientResizeEnd__ event is raised when the user has finished resizing the control.

The event handler receives the following parameters:

1. The __RadImageEditor__ client instance that fired the event.

1. Event arguments object.

````ASPNET
	    <telerik:RadImageEditor runat="server" ID="RadImageEditor1" OnClientResizeEnd="OnClientResizeEnd"></telerik:RadImageEditor>
	    <script type="text/javascript">
	        function OnClientResizeEnd(sender, eventArgs)
	        {
	            alert("OnClientResizeEnd event fired by RadImageEditor with ID: " + sender.get_id());
	        }
	    </script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
