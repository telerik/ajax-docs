---
title: Overview
page_title: ToolTipManager Specific Events Overview - RadTooltip
description: Check our Web Forms article about Overview.
slug: tooltip/client-side-programming/events/tooltipmanager-specific/overview
tags: overview
published: True
position: 0
---

# ToolTipManager Specific Events Overview





**RadToolTipManager** differs from the stand-alone **RadToolTip** in the way its content is loaded - it uses two Load-On-Demand mechanisms to fetch the content only when needed, instead of always putting it in the page. For this reason it provides three additional events that allow better control over this functionality:

* [OnClientRequestStart]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/onclientrequeststart%}) is fired when the call to the WebService or the AJAX request starts. The event is cancellable.

* [OnClientResponseEnd]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/onclientresponseend%}) is fired immediately after the response from a WebService or an AJAX request is received.

* [OnClientResponseError]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/onclientresponseerror%}) is fired when a server error occurs during the request. Makes the alert with the error cancellable.

To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding property.

````ASP.NET
<script type="text/javascript">
    function OnClientRequestStart(sender, args)
    {
        alert("RadToolTipManager with ID: " + sender.get_id() + " is requesting data...");
    }
</script>
<telerik:RadToolTipManager RenderMode="Lightweight" ID="RadToolTipManager1" OnClientRequestStart="OnClientRequestStart">
    <WebServiceSettings Method="GetToolTipData" Path="ToolTipWebService.asmx" />
</telerik:RadToolTipManager>
````



You can also set the event handlers via JavaScript by passing a reference to the event handler rather than its name:

````JavaScript
function addEvents()
{
    var radToolTipManager1 = $find("<%= RadToolTipManager1.ClientID %>");
    radToolTipManager1.add_requestStart(requestStart1);
    radToolTipManager1.add_requestStart(requestStart2);
}
````



The Client-side API also allows you to detach event handlers in the same manner:

````JavaScript
function removeEvents()
{
    var radToolTipManager1 = $find("<%= RadToolTipManager1.ClientID %>");
    radToolTipManager1.remove_requestStart(requestStart1);
}
````



Here follows the full list with the API related to the dynamic handling of events:


>caption A list with the available methods

| Name | Description |
| ------ | ------ |
| **add_requestStart** |Add a handler to the RequestStart event.|
| **add_requestEnd** |Add a handler to the ResponseEnd event.|
| **add_responseError** |Add a handler to the ResponseError event.|
| **remove_requestStart** |Remove a handler from the RequestStart event.|
| **remove_requestEnd** |Remove a handler from the ResponseEnd event.|
| **remove_responseError** |Remove a handler from the ResponseError event.|

# See Also

 * [OnClientRequestStart]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/onclientrequeststart%})

 * [OnClientResponseEnd]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/onclientresponseend%})

 * [OnClientResponseError]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/onclientresponseerror%})
