---
title: OnClientDialogLoaded
page_title: OnClientDialogLoaded | RadImageEditor for ASP.NET AJAX Documentation
description: OnClientDialogLoaded
slug: imageeditor/client-side-programming/events/onclientdialogloaded
tags: onclientdialogloaded
published: True
position: 4
---

# OnClientDialogLoaded





The **OnClientDialogLoaded** event is raised when a tool widget dialog is loaded from the server.

The event handler receives the following parameters:

1. The **RadImageEditor** client instance that fired the event.

1. Event arguments object.

````ASP.NET
<telerik:RadImageEditor RenderMode="Lightweight" runat="server" ID="RadImageEditor1" OnClientToolsDialogClosed="OnClientDialogLoaded"></telerik:RadImageEditor>
<script type="text/javascript">
	function OnClientDialogLoaded(sender, eventArgs) {
		alert("OnClientDialogLoaded event fired by RadImageEditor with ID: " + sender.get_id());
	}
</script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
