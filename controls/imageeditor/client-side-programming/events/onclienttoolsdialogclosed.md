---
title: OnClientToolsDialogClosed
page_title: OnClientToolsDialogClosed | RadImageEditor for ASP.NET AJAX Documentation
description: OnClientToolsDialogClosed
slug: imageeditor/client-side-programming/events/onclienttoolsdialogclosed
tags: onclienttoolsdialogclosed
published: True
position: 13
---

# OnClientToolsDialogClosed



## 

The **OnClientToolsDialogClosed** event is raised when the tool's dialog is closed (if opened).

The event handler receives the following parameters:

1. The **RadImageEditor** client instance that fired the event.

1. Event arguments object.

````ASPNET
	    <telerik:RadImageEditor runat="server" ID="RadImageEditor1" OnClientToolsDialogClosed="OnClientToolsDialogClosed"></telerik:RadImageEditor>
	    <script type="text/javascript">
	        function OnClientToolsDialogClosed(sender, eventArgs)
	        {
	            alert("OnClientToolsDialogClosed event fired by RadImageEditor with ID: " + sender.get_id());
	        }
	    </script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
