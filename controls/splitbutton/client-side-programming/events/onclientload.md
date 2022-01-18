---
title: OnClientLoad
page_title: OnClientLoad - RadSplitButton
description: Check our Web Forms article about OnClientLoad.
slug: splitbutton/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad

The load event occurs when the RadSplitButton client-side object is instantiated on the page.

The event handler receives two parameters:

1. The instance of the loaded RadSplitButton control.

1. An empty event args.

This event comes handy in scenarios when the user wants to operate with the control's client-side API and events at the earliest available stage.

>caption Example 1: Handling RadSplitButton OnClientLoad event.

````ASP.NET
<script type="text/javascript">
	function clientLoad(sender, args) {
		alert('RadSplitButton Object Loaded');
	}
</script>
<telerik:RadSplitButton ID="RadSplitButton1" runat="server" Text="Submit" OnClientLoad="clientLoad">
</telerik:RadSplitButton>
````


## See Also

 * [SplitButton - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/splitbutton/client-side-api/client-side-events/defaultcs.aspx)

 * [SplitButton Object]({%slug splitbutton/client-side-programming/splitbutton-object%})
 