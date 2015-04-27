---
title: OnClientRequestStart
page_title: OnClientRequestStart | RadTooltip for ASP.NET AJAX Documentation
description: OnClientRequestStart
slug: tooltip/client-side-programming/events/tooltipmanager-specific/onclientrequeststart
tags: onclientrequeststart
published: True
position: 1
---

# OnClientRequestStart



## 

**OnClientRequestStart** - it is fired when the call to the WebService or the AJAX request starts. The event is cancellable and receives the following parameters:

1. The RadToolTipManager instance that fired the event. Note that this is not the tooltip that is being shown, this reference should be obtained via the static getCurrent() method of the class

1. Event arguments - this object exposes the set_cancel() method that can be used to prevent the request

````ASPNET
	    <script type="text/javascript">
	        function OnClientRequestStart(sender, args)
	        {
	            var current = Telerik.Web.UI.RadToolTip.getCurrent();
	            if (toCancel)
	            {
	                args.set_cancel(true);
	            }
	            else if (current)
	            {
	                current.set_modal(true);
	            }
	        }
	    </script>
	    <telerik:RadToolTipManager ID="RadToolTipManager1" OnClientRequestStart="OnClientRequestStart">
	        <WebServiceSettings Method="GetToolTipData" Path="ToolTipWebService.asmx" />
		</telerik:RadToolTipManager>
````


