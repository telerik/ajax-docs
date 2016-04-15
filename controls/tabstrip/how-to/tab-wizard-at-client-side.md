---
title: Tab Wizard at Client-side
page_title: Tab Wizard at Client-side | RadTabStrip for ASP.NET AJAX Documentation
description: Tab Wizard at Client-side
slug: tabstrip/how-to/tab-wizard-at-client-side
tags: tab,wizard,at,client-side
published: True
position: 3
---

# Tab Wizard at Client-side

## 

````JavaScript
function onNavigate(isMoveNext)
{  
   var tabs = $find('<%= rtbstMain.ClientID %>');
   var totalNumOfTabs = tabs.get_tabs().get_count();
   if(totalNumOfTabs > 0) {
       var newTabIndex;
       var currentTabIndex = tabs.get_selectedIndex();
  
       if(isMoveNext){
           if(currentTabIndex + 1 == totalNumOfTabs) {
               newTabIndex = 0;
           }
           else {
               newTabIndex = currentTabIndex + 1;
           }
       }
       else{
           if(currentTabIndex - 1 < 0) {
               newTabIndex = totalNumOfTabs - 1;
           }
           else {
               newTabIndex = currentTabIndex - 1
           }
       }
       tabs.set_selectedIndex(newTabIndex);
   }
}
````

````ASPNET
<asp:ScriptManager ID="smPageScriptManager" runat="server" />
<telerik:RadTabStrip RenderMode="Lightweight" ID="rtbstMain" runat="server" MultiPageID="RadMultiPage1" SelectedIndex="0">
   <Tabs>
       <telerik:RadTab runat="server" Text="Root RadTab1" Selected="True">
       </telerik:RadTab>
       <telerik:RadTab runat="server" Text="Root RadTab2">
       </telerik:RadTab>
       <telerik:RadTab runat="server" Text="Root RadTab3">
       </telerik:RadTab>
   </Tabs>
</telerik:RadTabStrip>
<telerik:RadMultiPage ID="RadMultiPage1" runat="server" SelectedIndex="0">
   <telerik:RadPageView ID="RadPageView1" runat="server">
       RadPageView1</telerik:RadPageView>
   <telerik:RadPageView ID="RadPageView2" runat="server">
       RadPageView2</telerik:RadPageView>
   <telerik:RadPageView ID="RadPageView3" runat="server">
       RadPageView3</telerik:RadPageView>
</telerik:RadMultiPage>
<asp:Button ID="Button1" runat="server" Text="Prev" OnClientClick="onNavigate(false); return false;" />
<asp:Button ID="Button2" runat="server" Text="Next" OnClientClick="onNavigate(true); return false;" />
</form> 				
````


