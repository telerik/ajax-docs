---
title: OnClientResponseError
page_title: OnClientResponseError | RadTooltip for ASP.NET AJAX Documentation
description: OnClientResponseError
slug: tooltip/client-side-programming/events/tooltipmanager-specific/onclientresponseerror
tags: onclientresponseerror
published: True
position: 3
---

# OnClientResponseError




The **OnClientResponseError** event is fired when a server error occurs during the request. It allows the developer to choose the behavior if this happens. The event receives the following parameters:

1. The RadToolTipManager instance that fired the event. Note that this is not the tooltip that is being shown, this reference should be obtained via the static `getCurrent()` method of the class

1. Event arguments - this object exposes the `set_cancelErrorAlert()` method that can be used to prevent the alert with the error thrown from the server. It also has the `get_errorMessage()` method which holds only the message itself. This allows you to formulate a user friendly response or take an action accordingly without interrupting the workflow.

````ASP.NET
<script type="text/javascript">
    function OnClientResponseError(sender, args)
    {
        args.set_cancelErrorAlert(true);
        alert("There was an error while retrieving the data: " + args.get_errorMessage() + " . Please try again later.");
        var current = Telerik.Web.UI.RadToolTip.getCurrent();
        if (current)
        {
            current.hide();
        }
    }
</script>
<telerik:RadToolTipManager RenderMode="Lightweight" ID="RadToolTipManager1" OnClientResponseError="OnClientResponseError">
    <WebServiceSettings Method="GetToolTipData" Path="ToolTipWebService.asmx" />
</telerik:RadToolTipManager>
````


