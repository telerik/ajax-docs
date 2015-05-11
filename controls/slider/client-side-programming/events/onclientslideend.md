---
title: OnClientSlideEnd
page_title: OnClientSlideEnd | RadSlider for ASP.NET AJAX Documentation
description: OnClientSlideEnd
slug: slider/client-side-programming/events/onclientslideend
tags: onclientslideend
published: True
position: 4
---

# OnClientSlideEnd

The **OnClientSlideEnd** client-side event occurs as the drag handle stops moving along the track.

The event handler receives parameters:

1. The slider instance that fired the event.

1. Event arguments. The parameter has no methods for this event.

The example below displays the value of the slider as the drag handle stops moving.

````ASP.NET
<script type="text/javascript">
	function clientSlideEnd(sender, eventArgs)
	{
		alert('Value before the slide starts is: ' + sender.get_value());
	}
</script>
<telerik:radslider id="RadSlider1" runat="server" onclientslideend="clientSlideEnd" />
````


