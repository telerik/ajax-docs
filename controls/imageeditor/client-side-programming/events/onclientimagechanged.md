---
title: OnClientImageChanged
page_title: OnClientImageChanged - RadImageEditor
description: Check our Web Forms article about OnClientImageChanged.
slug: imageeditor/client-side-programming/events/onclientimagechanged
tags: onclientimagechanged
published: True
position: 6
---

# OnClientImageChanged




The **OnClientImageChanged** event is raised after the image has changed. The event is fired after **OnClientImageChanging** event.

The event handler receives the following parameters:

1. The **RadImageEditor** client instance that fired the event.

1. Event arguments object.

````ASP.NET
<telerik:RadImageEditor RenderMode="Lightweight" runat="server" ID="RadImageEditor1" OnClientImageChanged="OnClientImageChanged"></telerik:RadImageEditor>
<script type="text/javascript">
    function OnClientImageChanged(sender, eventArgs)
    {
        alert("OnClientImageChanged event fired by RadImageEditor with ID: " + sender.get_id());
    }
</script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
