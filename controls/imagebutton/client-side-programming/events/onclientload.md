---
title: OnClientLoad
page_title: OnClientLoad | RadImageButton for ASP.NET AJAX Documentation
description: OnClientLoad
slug: imagebutton/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad

The load event occurs when the RadImageButton client-side object is instantiated on the page.

The event handler receives two parameters:

1. The instance of the loaded RadImageButton control.

1. An empty event args.

This event comes handy in scenarios when the user wants to operate with the control's client-side API and events at the earliest available stage.

>caption Example 1: Handling RadImageButton OnClientLoad event.

````ASP.NET
<script type="text/javascript">
	function clientLoad(sender, args) {
		alert('RadImageButton Object Loaded');
	}
</script>
<telerik:RadImageButton ID="RadImageButton1" runat="server" Text="Submit" OnClientLoad="clientLoad">
</telerik:RadImageButton>
````


## See Also

 * [ImageButton - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/imagebutton/client-side-api/client-side-events/defaultcs.aspx)

 * [ImageButton Object]({%slug imagebutton/client-side-programming/imagebutton-object%})
 
 * [OnClientClicking]({%slug imagebutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug imagebutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug imagebutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug imagebutton/client-side-programming/events/onclientmouseout%})

