---
title: OnClientSaving
page_title: OnClientSaving | RadImageEditor for ASP.NET AJAX Documentation
description: OnClientSaving
slug: imageeditor/client-side-programming/events/onclientsaving
tags: onclientsaving
published: True
position: 10
---

# OnClientSaving





The **OnClientSaving** event is raised when the user starts saving the changes on the image. The event can be canceled.

The event handler receives the following parameters:

1. The **RadImageEditor** client instance that fired the event.

1. Event arguments object. You can cancel the event by calling its set_cancel(true) method

````ASP.NET
<telerik:RadImageEditor RenderMode="Lightweight" runat="server" ID="RadImageEditor1" OnClientSaving="OnClientSaving"></telerik:RadImageEditor>
<script type="text/javascript">
    function OnClientSaving(sender, eventArgs)
    {
        alert("OnClientSaving event fired by RadImageEditor with ID: " + sender.get_id());
        eventArgs.set_cancel(true); //cancels the event
    }
</script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
