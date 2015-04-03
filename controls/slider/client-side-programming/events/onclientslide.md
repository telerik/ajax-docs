---
title: OnClientSlide
page_title: OnClientSlide | UI for ASP.NET AJAX Documentation
description: OnClientSlide
slug: slider/client-side-programming/events/onclientslide
tags: onclientslide
published: True
position: 3
---

# OnClientSlide



## 

The __OnClientSlide__client-side event occurs as the drag handle is moved along the track.

The event handler receives parameters:

1. The slider instance that fired the event.

1. Event arguments. The parameter has no methods for this event.

The example below updates a div tag with the slider value as it changes..

````ASPNET
	    <script type="text/javascript">
	        function clientSlide(sender, eventArgs)
	        {
	            var myDiv = document.getElementById("myDiv")
	            myDiv.innerHTML = sender.get_value();
	        }
	    </script>
	    <div id="myDiv">
	    </div>
	    <telerik:radslider id="RadSlider1" runat="server" onclientslide="clientSlide" />
````


