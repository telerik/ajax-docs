---
title: OnClientMouseOut
page_title: OnClientMouseOut | RadTabStrip for ASP.NET AJAX Documentation
description: OnClientMouseOut
slug: tabstrip/client-side-programming/onclientmouseout
tags: onclientmouseout
published: True
position: 4
---

# OnClientMouseOut

## 

The **OnClientMouseOut** client-side event occurs when the mouse moves off a tab in the tab strip.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following methods:

* **get_tab** returns a reference to the **RadTab** that the mouse just left.

* **get_domEvent** returns a reference to the DOM event object for the mouse movement.

You can use this event to respond when the mouse moves off a tab:

````ASPNET	 
<script type="text/javascript">
function markTab(sender, args)
{
	var attributes = args.get_tab().get_attributes();
	attributes.setAttribute("visited", "true");
}
</script>
<telerik:RadTabStrip
  ID="RadTabStrip1" runat="server" OnClientMouseOut="markTab">
<Tabs>
  <telerik:RadTab runat="server" Text="Item 1" visited="false" />
  <telerik:RadTab runat="server" Text="Item 2" visited="false" />
  <telerik:RadTab runat="server" Text="Item 3" visited="false" />
</Tabs>
</telerik:RadTabStrip> 	 
````


