---
title: OnClientBeforeShow
page_title: OnClientBeforeShow | RadTooltip for ASP.NET AJAX Documentation
description: OnClientBeforeShow
slug: tooltip/client-side-programming/events/onclientbeforeshow
tags: onclientbeforeshow
published: True
position: 2
---

# OnClientBeforeShow




The **OnClientBeforeShow** client-side event occurs just prior to the display of the tool tip. The event can be canceled.

The event handler receives parameters:

1. The RadToolTip client instance that fired the event.

1. Event arguments with method:

	* `set_cancel()`: call this method to cancel the event.

In the example below, when the mouse passes over "Button1", the `clientBeforeShow()` method calls `set_cancel()` and the OnClientShow event is prevented from firing.

````ASP.NET
<script type="text/javascript">
    function clientShow(sender, eventArgs)
    {
        alert("OnClientShow tool tip: " + sender.get_text());
    }
    function clientBeforeShow(sender, eventArgs)
    {
        eventArgs.set_cancel(true);
    }
</script>
<telerik:RadToolTip ID="RadToolTip1" runat="server" Skin="Inox" TargetControlID="Button1"
    IsClientID="true" OnClientBeforeShow="clientBeforeShow" OnClientShow="clientShow"
    Text="text">
</telerik:RadToolTip>
````





# See Also

 * [Overview]({%slug tooltip/client-side-programming/events/overview%})
