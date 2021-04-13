---
title: OnClientLoad
page_title: OnClientLoad - RadSwitch
description: Check our Web Forms article about OnClientLoad.
slug: switch/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad

The load event occurs when the RadSwitch client-side object is instantiated on the page.

The event handler receives two parameters:

1. The instance of the loaded RadSwitch control.

1. An empty event args.

This event comes handy in scenarios when the user wants to operate with the control's client-side API and events at the earliest available stage.

>caption Example 1: Handling RadSwitch OnClientLoad event.

````ASP.NET
<script type="text/javascript">
	function clientLoad(sender, args) {
		alert('RadSwitch Object Loaded');
	}
</script>
<telerik:RadSwitch ID="RadSwitch1" Text="Check here" runat="server" OnClientLoad="clientLoad">
</telerik:RadSwitch>
````


## See Also

 * [Switch - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/switch/client-side-api/client-side-events/defaultcs.aspx)

 * [Switch Object]({%slug switch/client-side-programming/switch-object%})
 
 * [OnClientClicking]({%slug switch/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug switch/client-side-programming/events/onclientclicked%})
 
 * [OnClientCheckedChanging]({%slug switch/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug switch/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug switch/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug switch/client-side-programming/events/onclientmouseout%})
