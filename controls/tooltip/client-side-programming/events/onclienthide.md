---
title: OnClientHide
page_title: OnClientHide | RadTooltip for ASP.NET AJAX Documentation
description: OnClientHide
slug: tooltip/client-side-programming/events/onclienthide
tags: onclienthide
published: True
position: 5
---

# OnClientHide




The **OnClientHide** client-side event occurs as the tooltip is hidden. The event cannot be canceled.

The event handler receives parameters:

1. The RadToolTip client instance that fired the event.

1. Event arguments.

In the example below, when the mouse passes out of "Button1", `clientHide()` displays an alert box with the text of the tool tip.

````ASP.NET
<script type="text/javascript">
    function clientHide(sender, eventArgs)
    {
        alert("OnClientHide tool tip: " + sender.get_text());
    }
</script>
<telerik:RadToolTip ID="RadToolTip1" runat="server" Skin="Inox" TargetControlID="Button1"
    IsClientID="true" OnClientHide="clientHide" Text="text">
</telerik:RadToolTip>
````



# See Also

 * [Overview]({%slug tooltip/client-side-programming/events/overview%})
