---
title: RadSplitter and RadTabStrip integration layout
description: RadSplitter and RadTabStrip integration layout. Check it now!
type: how-to
page_title: RadSplitter and RadTabStrip integration layout
slug: splitter-and-tabstrip-integration-layout
res_type: kb
---
  
   
## PROBLEM

In this article you will see how to create a layout which uses a **RadTabStrip** and **RadSplitter** which occupies all the remaining area  

   
## DESCRIPTION

A common scenario is to use a **RadTabStrip** and **RadSplitter** nested in the **RadPageViews**. To make the splitter in the page view occupy 100% of its parent, you should set explicit height to the page view. You can achieve this layout easily by splitting the TabStrip and the MultiPage into two separate panes - one with fixed height for the tabs, and one free-sized - for the PageViews. 
   

This KB article shows how to implement this scenario by inserting an additionl **RadSplitter** which will automatically perform the needed calculations for the page view. In order to do so, you should have 
1. One **RadSplitter**, to put the **RadTabStrip** in its first **RadPane** and set explidit height to this **RadPane** equal to the height of the tab strip (e.g `45px`)
2. Second pane of the splitter should hold the **RadMultiPage** and should be left to free size - in this manner it will automatically occupy the exact left available area except for the tab strip.
1. Set **ResizeWithParentPane="false"** for all splitters nested in a `PageView` to force its resizeing when the view is selected.
1. Set the `AutoPostBack="true"` property of **RadTabStrip**.
2. Set the `RenderSelectedPageOnly="true"` property of **RadMultiPage**.
   

You can find sample code which demonstrates the above explained approach below:  
  
```CSS
<style type="text/css">   
    html, body, form
    {
      height: 100%;
      margin: 0;
      padding: 0;
    }
</style>
```

```ASP.NET
<telerik:RadSplitter ID="RadSplitter1" runat="server" Orientation="Horizontal" Height="100%"
   Width="100%" BorderSize="0" VisibleDuringInit="false">
   <telerik:RadPane ID="RadPane1" runat="server" Height="45" Scrolling="None">
         <telerik:RadTabStrip ID="RadTabStrip1" runat="server" MultiPageID="RadMultiPage1" AutoPostBack="true">
            <Tabs>
               <telerik:RadTab runat="server" Text="Tab1" PageViewID="RadPageView1" Selected="true">
               </telerik:RadTab>
               <telerik:RadTab runat="server" Text="Tab2" PageViewID="RadPageView2">
               </telerik:RadTab>
               <telerik:RadTab runat="server" Text="Tab3" PageViewID="RadPageView3">
               </telerik:RadTab>
            </Tabs>
         </telerik:RadTabStrip>
   </telerik:RadPane>
   <telerik:RadPane ID="RadPane2" runat="server">
         <telerik:RadMultiPage ID="RadMultiPage1" runat="server" Width="100%" Height="100%" RenderSelectedPageOnly="true"
            SelectedIndex="0">
            <telerik:RadPageView ID="RadPageView1" runat="server" Width="100%" Height="100%">
               <telerik:RadSplitter ID="RadSplitter2" runat="server" Width="100%" Height="100%"
                     ResizeWithParentPane="false" VisibleDuringInit="false">
                     <telerik:RadPane ID="RadPane3" runat="server">
                     </telerik:RadPane>
                     <telerik:RadSplitBar ID="splitBar" runat="server" CollapseMode="Both" />
                     <telerik:RadPane ID="RadPane4" runat="server">
                     </telerik:RadPane>
               </telerik:RadSplitter>
            </telerik:RadPageView>
            <telerik:RadPageView ID="RadPageView2" runat="server" Width="100%" Height="100%">
               <telerik:RadSplitter ID="RadSplitter3" runat="server" Orientation="Horizontal" Width="100%"
                     Height="100%" ResizeWithParentPane="false" VisibleDuringInit="false">
                     <telerik:RadPane ID="RadPane5" runat="server">
                     </telerik:RadPane>
                     <telerik:RadSplitBar ID="RadSplitBar1" runat="server" CollapseMode="Forward" />
                     <telerik:RadPane ID="RadPane6" runat="server">
                     </telerik:RadPane>
               </telerik:RadSplitter>
            </telerik:RadPageView>
            <telerik:RadPageView ID="RadPageView3" runat="server" Width="100%" Height="100%">
               <telerik:RadSplitter ID="RadSplitter4" runat="server" Width="100%" Height="100%"
                     ResizeWithParentPane="false" VisibleDuringInit="false">
                     <telerik:RadPane ID="RadPane7" runat="server">
                     </telerik:RadPane>
                     <telerik:RadSplitBar ID="RadSplitBar2" runat="server" CollapseMode="Backward" />
                     <telerik:RadPane ID="RadPane8" runat="server">
                     </telerik:RadPane>
               </telerik:RadSplitter>
            </telerik:RadPageView>
         </telerik:RadMultiPage>
   </telerik:RadPane>
</telerik:RadSplitter>
```



