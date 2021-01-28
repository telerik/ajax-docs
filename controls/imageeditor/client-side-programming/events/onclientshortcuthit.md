---
title: OnClientShortCutHit
page_title: OnClientShortCutHit - RadImageEditor
description: Check our Web Forms article about OnClientShortCutHit.
slug: imageeditor/client-side-programming/events/onclientshortcuthit
tags: onclientshortcuthit
published: True
position: 12
---

# OnClientShortCutHit




The **OnClientShortCutHit** event raises when a given Keyboard ShortCut of the RadImageEditor was hit. The event can be cancelled.

The event handler receives the following parameters:

1. The **RadImageEditor** client instance that fired the event.

1. Event arguments object.

````ASP.NET
<telerik:RadImageEditor RenderMode="Lightweight" runat="server" ID="RadImageEditor1" OnClientShortCutHit="OnClientShortCutHit">
	<telerik:ImageEditorTool CommandName="AddText" ShortCut="A" />
</telerik:RadImageEditor>
<script type="text/javascript">
	function OnClientDialogLoaded(sender, eventArgs) {
		alert("OnClientShortCutHit event fired by RadImageEditor with ID: " + sender.get_id());
		eventArgs.set_cancel(true); //cancels the event
	}
</script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
