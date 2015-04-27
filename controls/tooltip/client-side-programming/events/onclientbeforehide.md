---
title: OnClientBeforeHide
page_title: OnClientBeforeHide | RadTooltip for ASP.NET AJAX Documentation
description: OnClientBeforeHide
slug: tooltip/client-side-programming/events/onclientbeforehide
tags: onclientbeforehide
published: True
position: 4
---

# OnClientBeforeHide



## 

The **OnClientBeforeHide** client-side event occurs just prior to the tool tip being hidden. The event can be canceled.

The event handler receives parameters:

1. The RadToolTip client instance that fired the event.

1. Event arguments with method:

1. set_cancel(): call this method to cancel the event.

In the example below, when the mouse passes out of "Button1", the clientBeforeHide() method calls set_cancel() and the OnClientHide event is prevented from firing. The effect is that the tool tip remains on the screen.

````ASPNET
	    <script type="text/javascript">
	        function clientHide(sender)
	        {
	            alert("OnClientHide tool tip: " + sender.get_text());
	        }
	        function clientBeforeHide(sender, eventArgs)
	        {
	            eventArgs.set_cancel(true);
	        }
	    </script>
	    <telerik:RadToolTip ID="RadToolTip1" runat="server" Skin="Inox" TargetControlID="Button1"
	        IsClientID="true" OnClientBeforeHide="clientBeforeHide" OnClientHide="clientHide"
	        Text="text">
	    </telerik:RadToolTip>
````



# See Also

 * [Overview]({%slug tooltip/client-side-programming/events/overview%})
