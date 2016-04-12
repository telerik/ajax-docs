---
title: OnClientSaved
page_title: OnClientSaved | RadImageEditor for ASP.NET AJAX Documentation
description: OnClientSaved
slug: imageeditor/client-side-programming/events/onclientsaved
tags: onclientsaved
published: True
position: 11
---

# OnClientSaved




The **OnClientSaved** event is raised after the user has saved the image.

The event handler receives the following parameters:

1. The **RadImageEditor** client instance that fired the event.

1. Event arguments object.

````ASP.NET
<telerik:RadImageEditor RenderMode="Lightweight" runat="server" ID="RadImageEditor1" OnClientSaved="OnClientSaved"></telerik:RadImageEditor>
<script type="text/javascript">
    function OnClientSaved(sender, eventArgs)
    {
        alert("OnClientSaved event fired by RadImageEditor with ID: " + sender.get_id());
    }
</script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
