---
title: RadSplitter and RadTabStrip integration layout
description: RadSplitter and RadTabStrip integration layout. Check it now!
type: how-to
page_title: RadSplitter and RadTabStrip integration layout
slug: splitter-radsplitter-and-radtabstrip-integration-layout.md
res_type: kb
---


   
   
## HOW-TO
Create a layout which uses a RadTabStrip and a splitter which occupies all the remaining area  

## SOLUTION   

A common scenario is to use a **RadTabStrip** and **RadSplitter** nested in the page views the tabs display. To make the splitter in the page view occupy 100% of its parent, you should set explicit height to the page view. In the common case, to determine what should be the height of the page view you should use JavaScript and calculate the height of the multipage as the height of the visible viewport in pixels minus the height of the tabstrip. However, it is better to achieve this by using the built - in splitter functionality of the free size pane by inserting an additional splitter control.   
   

This KB article shows how to implement this scenario by inserting an additionl **RadSplitter** which will automatically perform the needed calculations for the page view. In order to do so, you should have one **RadSplitter**, to put the **RadTabStrip** in its first **RadPane** and set explidit height to this **RadPane** equal to the height of the tab strip (e.g 25px). The second pane of the splitter should hold the **RadMultiPage** and should be left to free size - in this manner it will automatically occupy the exact left available area except for the tab strip. Note, that you should set **ResizeWithParentPane="false"** for a splitter nested in a page view because there is a RadPane which is its parent and at the same time it is not its direct parent.  
   

You can find sample code which demonstrates the above explained approach below:  
   
````ASP.NET
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>
  
<%@ Register TagPrefix="telerik" Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Untitled Page</title>
    <style type="text/css">
      
    html, body, form
    {
      height: 100%;
      margin: 0;
      padding: 0;
    }
      
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server" />
        <telerik:RadSplitter ID="RadSplitter1" runat="server" Orientation="Horizontal" Height="100%"
            Width="100%" BorderSize="0" VisibleDuringInit="false">
            <telerik:RadPane ID="RadPane1" runat="server" Height="25" Scrolling="None">
                <telerik:RadTabStrip ID="RadTabStrip1" runat="server" MultiPageID="RadMultiPage1">
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
                <telerik:RadMultiPage ID="RadMultiPage1" runat="server" Width="100%" Height="100%"
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
    </form>
</body>
</html>
````

  