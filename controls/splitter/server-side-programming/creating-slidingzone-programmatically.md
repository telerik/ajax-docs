---
title: Creating SlidingZone Programmatically
page_title: Creating SlidingZone Programmatically | UI for ASP.NET AJAX Documentation
description: Creating SlidingZone Programmatically
slug: splitter/server-side-programming/creating-slidingzone-programmatically
tags: creating,slidingzone,programmatically
published: True
position: 1
---

# Creating SlidingZone Programmatically



You can create sliding panes dynamically in server-side code. To do this, you need to create __RadSlidingZone__ controls and add them to the __Controls__ collection of existing __RadPane__ controls. Then create __RadSlidingPane__ controls and add them to the __Items__ collections of the __RadSlidingZone__ controls.

>caution The __Items__ collections do not persist in the ViewState when you create the splitter controls in the code-behind. You need to recreate them on __every__ postback!
>


## Example

The example below demonstrates how to declare left and right sliding zones, containing two sliding panes each. Note that you can also [create the RadSplitter programmatically]({%slug splitter/server-side-programming/creating-splitter-programatically%}) instead of declaring it in the ASPX page.

````ASPNET
	    <telerik:radsplitter id="RadSplitter1" runat="server" height="300" width="400">
	        <telerik:RadPane id="LeftPane" runat="server" Width="22" />
	        <telerik:RadSplitBar id="RadSplitBar1" runat="server" />
	        <telerik:RadPane id="MiddlePane" runat="server">Middle Pane</telerik:RadPane>
	        <telerik:RadSplitBar id="RadSplitBar2" runat="server" />
	        <telerik:RadPane id="RightPane" runat="server" Width="22" />
	    </telerik:radsplitter>
````



>tabbedCode

````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadSlidingZone leftZone = new RadSlidingZone();
	        leftZone.ID = "LeftZone";
	        leftZone.Width = LeftPane.Width;
	        RadSlidingPane leftSlidingPane1 = new RadSlidingPane();
	        leftSlidingPane1.ID = "LeftSlidingPane1";
	        leftSlidingPane1.Title = "Left1";
	        leftSlidingPane1.Width = new Unit(150);
	        leftZone.Items.Add(leftSlidingPane1);
	        RadSlidingPane leftSlidingPane2 = new RadSlidingPane();
	        leftSlidingPane2.ID = "LeftSlidingPane2";
	        leftSlidingPane2.Title = "Left2";
	        leftSlidingPane2.Width = new Unit(150);
	        leftZone.Items.Add(leftSlidingPane2);
	        LeftPane.Controls.Add(leftZone);
	        RadSlidingZone rightZone = new RadSlidingZone();
	        rightZone.ID = "RightZone";
	        rightZone.SlideDirection = Telerik.Web.UI.SplitterSlideDirection.Left;
	        rightZone.Width = LeftPane.Width;
	        RadSlidingPane rightSlidingPane1 = new RadSlidingPane();
	        rightSlidingPane1.ID = "RightSlidingPane1";
	        rightSlidingPane1.Title = "Right1";
	        rightSlidingPane1.Width = new Unit(150);
	        rightZone.Items.Add(rightSlidingPane1);
	        RadSlidingPane rightSlidingPane2 = new RadSlidingPane();
	        rightSlidingPane2.ID = "RightSlidingPane2";
	        rightSlidingPane2.Title = "Right2";
	        rightSlidingPane2.Width = new Unit(150);
	        rightZone.Items.Add(rightSlidingPane2);
	        RightPane.Controls.Add(rightZone);
	    } 
				
````



````VB
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        Dim leftZone As New RadSlidingZone()
	        leftZone.ID = "LeftZone"
	        leftZone.Width = LeftPane.Width
	        Dim leftSlidingPane1 As New RadSlidingPane()
	        leftSlidingPane1.ID = "LeftSlidingPane1"
	        leftSlidingPane1.Title = "Left1"
	        leftSlidingPane1.Width = New Unit(150)
	        leftZone.Items.Add(leftSlidingPane1)
	        Dim leftSlidingPane2 As New RadSlidingPane()
	        leftSlidingPane2.ID = "LeftSlidingPane2"
	        leftSlidingPane2.Title = "Left2"
	        leftSlidingPane2.Width = New Unit(150)
	        leftZone.Items.Add(leftSlidingPane2)
	        LeftPane.Controls.Add(leftZone)
	        Dim rightZone As New RadSlidingZone()
	        rightZone.ID = "RightZone"
	        rightZone.SlideDirection = Telerik.Web.UI.SplitterSlideDirection.Left
	        rightZone.Width = LeftPane.Width
	        Dim rightSlidingPane1 As New RadSlidingPane()
	        rightSlidingPane1.ID = "RightSlidingPane1"
	        rightSlidingPane1.Title = "Right1"
	        rightSlidingPane1.Width = New Unit(150)
	        rightZone.Items.Add(rightSlidingPane1)
	        Dim rightSlidingPane2 As New RadSlidingPane()
	        rightSlidingPane2.ID = "RightSlidingPane2"
	        rightSlidingPane2.Title = "Right2"
	        rightSlidingPane2.Width = New Unit(150)
	        rightZone.Items.Add(rightSlidingPane2)
	        RightPane.Controls.Add(rightZone)
	    End Sub
````


>end

# See Also

 * [Declaring Sliding Zones]({%slug splitter/sliding-zones/declaring-sliding-zones%})
