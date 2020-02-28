---
title: OnClientLoad
page_title: OnClientLoad | RadPushButton for ASP.NET AJAX Documentation
description: OnClientLoad
slug: pushbutton/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad

The load event occurs when the RadPushButton client-side object is instantiated on the page.

The event handler receives two parameters:

1. The instance of the loaded RadPushButton control.

1. An empty event args.

This event comes handy in scenarios when the user wants to operate with the control's client-side API and events at the earliest available stage.

>caption Example 1: Handling RadPushButton OnClientLoad event.

````ASP.NET
<script type="text/javascript">
	function clientLoad(sender, args) {
		alert('RadPushButton Object Loaded');
	}
</script>
<telerik:RadPushButton ID="RadPushButton1" runat="server" Text="Submit" OnClientLoad="clientLoad">
</telerik:RadPushButton>
````


## See Also

 * [PushButton - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/pushbutton/client-side-api/client-side-events/defaultcs.aspx)

 * [PushButton Object]({%slug pushbutton/client-side-programming/pushbutton-object%})
 
 * [OnClientClicking]({%slug pushbutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug pushbutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug pushbutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug pushbutton/client-side-programming/events/onclientmouseout%})

