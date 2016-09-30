---
title: OnClientTabDisabled
page_title: OnClientTabDisabled | RadTabStrip for ASP.NET AJAX Documentation
description: OnClientTabDisabled
slug: tabstrip/client-side-programming/onclienttabdisabled
tags: onclienttabdisabled
published: True
position: 6
---

# OnClientTabDisabled

## 

The **OnClientTabDisabled** client-side event occurs when a tab is disabled.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following method:

* **get_tab** returns a reference to the **RadTab** that has been disabled.

You can use this event to respond when a tab is disabled:

````ASPNET
<script type="text/javascript">
    function disableTab() {
        var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
        var secondTab = tabStrip.findTabByText("Root Tab 2");
        secondTab.disable();
    }
    function tabDisabled(sender, args) {
        alert("You have just disabled the " + args.get_tab().get_text() + " tab");
    }
</script>
<telerik:radtabstrip id="RadTabStrip1" runat="server" onclienttabdisabled="tabDisabled"> 
<Tabs>    
...
</Tabs>
</telerik:radtabstrip>
````


