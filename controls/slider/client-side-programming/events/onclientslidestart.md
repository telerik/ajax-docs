---
title: OnClientSlideStart
page_title: OnClientSlideStart | RadSlider for ASP.NET AJAX Documentation
description: OnClientSlideStart
slug: slider/client-side-programming/events/onclientslidestart
tags: onclientslidestart
published: True
position: 5
---

# OnClientSlideStart



## 

The **OnClientSlideStart**client-side event occurs just before the drag handle is moved along the track.

The event handler receives parameters:

1. The slider instance that fired the event.

1. Event arguments. The parameter has no methods for this event.

The example below displays the value of the slider before the slide begins.

````ASPNET
	    <script type="text/javascript">
	        function clientSlideStart(sender, eventArgs)
	        {
	            alert('Value before the slide starts is: ' + sender.get_value());
	        } 
	    </script>
	    <telerik:radslider id="RadSlider1" runat="server" onclientslidestart="clientSlideStart" />
````


