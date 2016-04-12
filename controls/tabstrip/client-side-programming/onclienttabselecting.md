---
title: OnClientTabSelecting
page_title: OnClientTabSelecting | RadTabStrip for ASP.NET AJAX Documentation
description: OnClientTabSelecting
slug: tabstrip/client-side-programming/onclienttabselecting
tags: onclienttabselecting
published: True
position: 18
---

# OnClientTabSelecting

## 

The **OnClientTabSelecting** client-side event occurs when the user selects a tab, before the tab is selected.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following methods:

* **get_tab** returns a reference to the **RadTab** that is about to be selected.

* **set_cancel** lets you stop the selection by passing *true* to the **set_cancel** method.

* **get_domEvent** returns a reference to the DOM object for the event that caused the selection.

You can use this event to pre-process a tab's selection or to cancel the default response:

````ASPNET	 
<script>
function OnClientTabSelecting(sender, eventArgs)
{
var tab = eventArgs.get_tab();
var navigateUrl = tab.get_navigateUrl();
if (navigateUrl && navigateUrl != "#")
{
   var proceed = confirm("Navigate to "+ navigateUrl + " ?");
   if (!proceed)
   {
      eventArgs.set_cancel(true);
   }
   else
   {
      eventArgs.set_cancel(false);
   }
 }
}
</script>
<telerik:RadTabStrip RenderMode="Lightweight" ID="RadTabStrip1" runat="server" OnClientTabSelecting="OnClientTabSelecting" ... /> 	 
````


