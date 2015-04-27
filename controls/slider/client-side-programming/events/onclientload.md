---
title: OnClientLoad
page_title: OnClientLoad | RadSlider for ASP.NET AJAX Documentation
description: OnClientLoad
slug: slider/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad



## 

The **OnClientLoad**client-side event occurs after the slider loads on the page.

The event handler receives parameters:

1. The slider instance that fired the event.

1. Event arguments. The parameter has no methods for this event.

The example below sets the value of the slider at 50.

````ASPNET
	    <script type="text/javascript">
	        function clientLoaded(sender, eventArgs)
	        {
	            sender.set_value(50);
	        }
	    </script>
	    <telerik:radslider id="RadSlider1" runat="server" onclientload="clientLoaded" />
````


