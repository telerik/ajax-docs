---
title: OnClientLoad
page_title: OnClientLoad | RadRadioButtonList for ASP.NET AJAX Documentation
description: OnClientLoad
slug: radiobuttonlist/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad

The load event occurs when the RadRadioButtonList client-side object is instantiated on the page.

The event handler receives two parameters:

1. The instance of the loaded RadRadioButtonList control.

1. An empty event args.

This event comes handy in scenarios when the user wants to operate with the control's client-side API and events at the earliest available stage.

>caption Example 1: Handling RadRadioButtonList OnClientLoad event.

````ASP.NET
<script type="text/javascript">
	function clientLoad(sender, args) {
		alert('RadRadioButtonList Object Loaded');
	}
</script>
<telerik:RadRadioButtonList ID="RadRadioButtonList1" Text="Check here" runat="server" OnClientLoad="clientLoad">
</telerik:RadRadioButtonList>
````


## See Also

 * [CheckBox - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/checkbox/client-side-api/client-side-events/defaultcs.aspx)

 * [CheckBox Object]({%slug checkbox/client-side-programming/checkbox-object%})
 
 * [OnClientClicking]({%slug checkbox/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug checkbox/client-side-programming/events/onclientclicked%})
 
 * [OnClientCheckedChanging]({%slug checkbox/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug checkbox/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug checkbox/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug checkbox/client-side-programming/events/onclientmouseout%})
