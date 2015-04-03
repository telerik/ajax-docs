---
title: OnClientDialogLoaded
page_title: OnClientDialogLoaded | UI for ASP.NET AJAX Documentation
description: OnClientDialogLoaded
slug: imageeditor/client-side-programming/events/onclientdialogloaded
tags: onclientdialogloaded
published: True
position: 4
---

# OnClientDialogLoaded



## 

The __OnClientDialogLoaded__ event is raised when a tool widget dialog is loaded from the server.

The event handler receives the following parameters:

1. The __RadImageEditor__ client instance that fired the event.

1. Event arguments object.

````ASPNET
		<telerik:RadImageEditor runat="server" ID="RadImageEditor1" OnClientToolsDialogClosed="OnClientDialogLoaded"></telerik:RadImageEditor>
		<script type="text/javascript">
			function OnClientDialogLoaded(sender, eventArgs) {
				alert("OnClientDialogLoaded event fired by RadImageEditor with ID: " + sender.get_id());
			}
		</script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
