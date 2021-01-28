---
title: Click on child tab and load its ContentUrl using JavaScript
page_title: Click on child tab and load its ContentUrl using JavaScript - RadTabStrip
description: Check our Web Forms article about Click on child tab and load its ContentUrl using JavaScript.
slug: tabstrip/how-to/click-on-child-tab-and-load-its-content-url-using-javascript
tags: click,tabs,child,load. ContentUrl,JavaScript,client-side
published: True
position: 7
---

# Click on child tab and load its ContentUrl using JavaScript

The below implementation demonstrates how to select child tab when a parent tab has been clicked and simultaneously load the content of the child corresponding page when using NavigateUrl property:

````JavaScript
<script type="text/javascript">
	function ClientTabSelectedHandler(sender, eventArgs) {
	  var tabStrip = sender;
	  var tab = eventArgs.get_tab();
	  if (tab.get_tabs().get_count() > 0) {
	      tab.get_tabs().getTab(0).click();
	      var url = tab.get_tabs().getTab(0).get_navigateUrl();
	      document.location.href = url;
	  }
	}
</script>
````

````ASPNET	
<telerik:RadTabStrip RenderMode="Lightweight" id="RadTabStrip" runat="server" Skin="Outlook" EnableViewState="False" OnClientTabSelected="ClientTabSelectedHandler">
  <Tabs>
    <telerik:RadTab runat="server" Text="RootTabLevel0Tab0" NavigateUrl="~/Tabs/Home.aspx"></ telerik:RadTab>
    <telerik:RadTab runat="server" Text="RootTabLevel0Tab1">
     <Tabs>
        <telerik:RadTab runat="server" Text="ChildTabLevel1Tab0" NavigateUrl="~/Tabs/ChildTabContent0.aspx"></telerik:RadTab>
        <telerik:RadTab runat="server" Text="ChildTabLevel1Tab1" NavigateUrl="~/Tabs/ChildTabContent1.aspx"></telerik:RadTab>
        <telerik:RadTab runat="server" Text="ChildTabLevel1Tab2" NavigateUrl="~/ Tabs/ChildTabContent2.aspx"></telerik:RadTab>
      </Tabs>
    </ telerik:RadTab>
  </Tabs>
</ telerik:RadTabStrip>	
````

