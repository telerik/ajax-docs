---
title: OnClientLoad
page_title: OnClientLoad | RadLinkButton for ASP.NET AJAX Documentation
description: OnClientLoad
slug: linkbutton/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad

The load event occurs when the RadLinkButton client-side object is instantiated on the page.

The event handler receives two parameters:

1. The instance of the loaded RadLinkButton control.

1. An empty event args.

This event comes handy in scenarios when the user wants to operate with the control's client-side API and events at the earliest available stage.

>caption Example 1: Handling RadLinkButton OnClientLoad event.

````ASP.NET
<script type="text/javascript">
	function clientLoad(sender, args) {
		alert('RadLinkButton Object Loaded');
	}
</script>
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Click" OnClientLoad="clientLoad" NavigateUrl="https://www.telerik.com" Target="_blank">
</telerik:RadLinkButton>
````


## See Also

 * [LinkButton - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/linkbutton/client-side-api/client-side-events/defaultcs.aspx)

 * [LinkButton Object]({%slug linkbutton/client-side-programming/linkbutton-object%})
 
 * [OnClientClicking]({%slug linkbutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug linkbutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug linkbutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug linkbutton/client-side-programming/events/onclientmouseout%})

