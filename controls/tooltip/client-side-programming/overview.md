---
title: Overview
page_title: Client-side Programming Overview | RadTooltip for ASP.NET AJAX Documentation
description: Overview
slug: tooltip/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



The **RadToolTip** and **RadToolTipManager** objects provide a client-side API that lets you interact with the controls in client-side code. In addition to a full set of [client-side events]({%slug tooltip/client-side-programming/events/overview%}), the client-side object model lets you manipulate tool tips while avoiding unnecessary post-backs.

## Getting the RadToolTip and RadToolTipManager Client-side Objects

**RadToolTip** and **RadToolTipManager** create a client-side object with the **ClientID** of the control. You can obtain the reference to these objects using the following JavaScript code:

````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
var radToolTipManager = $find("<%= RadToolTipManager1.ClientID %>");
````



## Get the Currently Active Tooltip

You can get the tooltip that is currently active (shown) by using the using the following method:

````JavaScript
var activeTooltip = Telerik.Web.UI.RadToolTip.getCurrent();
````



You can use this to close the current tooltip according to your logic (e.g., a button click, a [load-on-demand request error]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/onclientresponseerror%})) or to modify the tooltip when the [load-on-demand response is received]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/onclientresponseend%}).

## Cancelling an Event

Some client-side events occur immediately before **RadToolTip** or **RadToolTipManager** performs some action. You can use these events to cancel the impending action by using the cancel property of the eventArgs passed to the handler:

````JavaScript
function clientBeforeShow(sender, eventArgs)
{
    eventArgs.set_cancel(true);
}
````



# See Also

 * [Overview]({%slug tooltip/client-side-programming/events/overview%})

 * [RadToolTip Object]({%slug tooltip/client-side-programming/radtooltip-object%})

 * [OnClientBeforeShow]({%slug tooltip/client-side-programming/events/onclientbeforeshow%})

 * [OnClientShow]({%slug tooltip/client-side-programming/events/onclientshow%})

 * [OnClientBeforeHide]({%slug tooltip/client-side-programming/events/onclientbeforehide%})

 * [OnClientHide]({%slug tooltip/client-side-programming/events/onclienthide%})
