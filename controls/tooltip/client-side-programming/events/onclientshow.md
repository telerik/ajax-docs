---
title: OnClientShow
page_title: OnClientShow - RadTooltip
description: Check our Web Forms article about OnClientShow.
slug: tooltip/client-side-programming/events/onclientshow
tags: onclientshow
published: True
position: 3
---

# OnClientShow


 

The **OnClientShow** client-side event occurs as the tooltip is displayed. The event cannot be canceled.

The event handler receives parameters:

1. The RadToolTip client instance that fired the event.

1. Event arguments.

In the example below, when the mouse passes over "Button1", `clientShow()` displays an alert box with the text of the tool tip.

````ASP.NET
<script type="text/javascript">
    function clientShow(sender, eventArgs)
    {
        alert("OnClientShow tool tip: " + sender.get_text());
    }
</script>
<telerik:RadToolTip RenderMode="Lightweight" ID="RadToolTip1" runat="server" Skin="Inox" TargetControlID="Button1"
    IsClientID="true" OnClientShow="clientShow" Text="text">
</telerik:RadToolTip>
````



# See Also

 * [Overview]({%slug tooltip/client-side-programming/events/overview%})
