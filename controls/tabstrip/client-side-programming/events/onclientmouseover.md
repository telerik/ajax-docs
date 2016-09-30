---
title: OnClientMouseOver
page_title: OnClientMouseOver | RadTabStrip for ASP.NET AJAX Documentation
description: OnClientMouseOver
slug: tabstrip/client-side-programming/onclientmouseover
tags: onclientmouseover
published: True
position: 5
---

# OnClientMouseOver

## 

The **OnClientMouseOver** client-side event occurs when the mouse moves over a tab in the tab strip.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following methods:

* **get_tab** returns a reference to the **RadTab** that the mouse just entered.

* **get_domEvent** returns a reference to the DOM event object for the mouse movement.

You can use this event to respond when the mouse is over a tab:

````ASPNET	
<script type="text/javascript">
function showTab(sender, args)
{
	var label = document.getElementById("Label1");
	label.innerText = args.get_tab().get_text();
}
</script>
<telerik:RadTabStrip
  ID="RadTabStrip1" runat="server" OnClientMouseOver="showTab">
<Tabs>
   ...
</Tabs>
</telerik:RadTabStrip>
<br />
<br />
<asp:Label ID="Label1" runat="server" Text=""></asp:Label> 				
````


