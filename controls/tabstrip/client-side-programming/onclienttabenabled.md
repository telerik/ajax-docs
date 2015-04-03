---
title: OnClientTabEnabled
page_title: OnClientTabEnabled | UI for ASP.NET AJAX Documentation
description: OnClientTabEnabled
slug: tabstrip/client-side-programming/onclienttabenabled
tags: onclienttabenabled
published: True
position: 17
---

# OnClientTabEnabled



## 

The __OnClientTabEnabled__ client-side event occurs when a tab is enabled.

The event handler receives two parameters:

1. The instance of the tab strip firing the event.

1. An eventArgs parameter containing the following method:

* __get_tab__ returns a reference to the __RadTab__ that has been enabled.

You can use this event to respond when a tab is enabled:

````ASPNET
	    <script type="text/javascript">
	        function enableTab() {
	            var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	            var secondTab = tabStrip.findTabByText("Root Tab 2");
	            secondTab.enable();
	        }
	        function tabEnabled(sender, args) {
	            alert("You have just enabled the " + args.get_tab().get_text() + " tab");
	        }
	    </script>
	    <telerik:radtabstrip id="RadTabStrip1" runat="server" onclienttabenabled="tabEnabled"> 
	        <Tabs>    
	        ...
	        </Tabs>
	    </telerik:radtabstrip>
````


