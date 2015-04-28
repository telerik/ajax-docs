---
title: OnClientImageChanging
page_title: OnClientImageChanging | RadImageEditor for ASP.NET AJAX Documentation
description: OnClientImageChanging
slug: imageeditor/client-side-programming/events/onclientimagechanging
tags: onclientimagechanging
published: True
position: 5
---

# OnClientImageChanging




The **OnClientImageChanging** event is raised when the user initiates an action on the image. The event can be canceled.

The event handler receives the following parameters:

1. The **RadImageEditor** client instance that fired the event.

1. Event arguments object. You can cancel the event by calling its set_cancel(true) method

````ASP.NET
<telerik:RadImageEditor runat="server" ID="RadImageEditor1" OnClientImageChanging="OnClientImageChanging"></telerik:RadImageEditor>
<script type="text/javascript">
    function OnClientImageChanging(sender, eventArgs)
    {
        alert("OnClientImageChanging event fired by RadImageEditor with ID: " + sender.get_id());
        eventArgs.set_cancel(true); //cancels the event
    }
</script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
