---
title: OnClientLoad
page_title: OnClientLoad | RadToggleButton for ASP.NET AJAX Documentation
description: OnClientLoad
slug: togglebutton/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad

The load event occurs when the RadToggleButton client-side object is instantiated on the page.

The event handler receives two parameters:

1. The instance of the loaded RadToggleButton control.

1. An empty event args.

This event comes handy in scenarios when the user wants to operate with the control's client-side API and events at the earliest available stage.

>caption Example 1: Handling RadToggleButton OnClientLoad event.

````ASP.NET
<script type="text/javascript">
	function clientLoad(sender, args) {
		alert('RadToggleButton Object Loaded');
	}
</script>
<telerik:RadToggleButton ID="RadToggleButton1" runat="server" OnClientLoad="clientLoad">
	<ToggleStates>
	    <telerik:ButtonToggleState Text="State 1" />
	    <telerik:ButtonToggleState Text="State 2" />
	</ToggleStates>
</telerik:RadToggleButton>
````


## See Also

 * [ToggleButton - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/togglebutton/client-side-api/client-side-events/defaultcs.aspx)

 * [ToggleButton Object]({%slug togglebutton/client-side-programming/togglebutton-object%})
 
 * [OnClientClicking]({%slug togglebutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug togglebutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug togglebutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug togglebutton/client-side-programming/events/onclientmouseout%})

