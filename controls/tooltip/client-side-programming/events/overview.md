---
title: Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: tooltip/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## 

__RadToolTip__ and __RadToolTipManager__ both support the same client-side events that let you customize the behavior of the control:

* [OnClientBeforeShow]({%slug tooltip/client-side-programming/events/onclientbeforeshow%}) occurs just prior to the display of the tool tip.

* [OnClientShow]({%slug tooltip/client-side-programming/events/onclientshow%}) occurs as the tooltip is displayed.

* [OnClientBeforeHide]({%slug tooltip/client-side-programming/events/onclientbeforehide%}) occurs just prior to the tool tip being hidden.

* [OnClientHide]({%slug tooltip/client-side-programming/events/onclienthide%}) occurs as the tooltip is hidden.

To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the correspondingproperty.

````ASPNET
	    <script type="text/javascript">
	        function clientShow(sender, eventArgs)
	        {
	            alert("OnClientShow tool tip: " + sender.get_text());
	        } 
	    </script>
	    <telerik:RadToolTip ID="RadToolTip1" runat="server" Skin="Inox" TargetControlID="Button1"
	        IsClientID="true" OnClientShow="clientShow" Text="text">
	    </telerik:RadToolTip>
````



You can also assign event handlers in client-side code. For more information see the [Setting Event Handlers via JavaScript]({%slug tooltip/client-side-programming/events/setting-event-handlers-via-javascript%}) article.

For a live example illustrating the RadToolTip client-side events, see [Client-side events](http://demos.telerik.com/aspnet-ajax/tooltip/examples/clientsideevents/defaultcs.aspx).

>tip The __RadToolTipManager__ also offers three additional events that are specific for its Load-On-Demand functionaliaty:
>
* OnClientRequestStart
* OnClientResponseEnd
* OnClientResponseError>Read more about them in the[ToolTipManager Specific Events]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/overview%})help article.
>


# See Also

 * [OnClientBeforeShow]({%slug tooltip/client-side-programming/events/onclientbeforeshow%})

 * [OnClientShow]({%slug tooltip/client-side-programming/events/onclientshow%})

 * [OnClientBeforeHide]({%slug tooltip/client-side-programming/events/onclientbeforehide%})

 * [OnClientHide]({%slug tooltip/client-side-programming/events/onclienthide%})

 * [ToolTipManager Specific Events]({%slug tooltip/client-side-programming/events/tooltipmanager-specific/overview%})
