---
title: Creating Splitter Programatically
page_title: Creating Splitter Programatically | RadSplitter for ASP.NET AJAX Documentation
description: Creating Splitter Programatically
slug: splitter/server-side-programming/creating-splitter-programatically
tags: creating,splitter,programatically
published: True
position: 0
---

# Creating Splitter Programatically



You can define the structure of **RadSplitter** dynamically in server-side code. To do this, you need to create **RadPane** and **RadSplitBar** objects and add them to the **Items** collection of their parent **RadSplitter**.

>caution The **Items** collection does not persist in the ViewState if you create the splitter controls in the code-behind. You need to recreate them on **every** postback!
>


## Example

The example below demonstrates how to create new **RadSplitter** object, populate its **Items** collection and add it to the page form. It also shows how to add a dynamically created label in the **Controls** collection of a **RadPane** control:



````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadSplitter splitter = new RadSplitter();
	        splitter.ID = "RadSplitter1";
	        splitter.Width = new Unit("300px");
	        splitter.Height = new Unit("400px");
	        splitter.Orientation = Telerik.Web.UI.Orientation.Horizontal;
	        RadPane topPane = new RadPane();
	        topPane.ID = "TopPane";
	        Label topLabel = new Label();
	        topLabel.ID = "TopLabel";
	        topLabel.Text = "Top pane";
	        topPane.Controls.Add(topLabel);
	        splitter.Items.Add(topPane);
	        RadSplitBar splitBar1 = new RadSplitBar();
	        splitBar1.ID = "SplitBar1";
	        splitter.Items.Add(splitBar1);
	        RadPane middlePane = new RadPane();
	        middlePane.ID = "MiddlePane";
	        middlePane.Controls.Add(new LiteralControl("Middle pane"));
	        splitter.Items.Add(middlePane);
	        RadSplitBar splitBar2 = new RadSplitBar();
	        splitBar2.ID = "SplitBar2";
	        splitter.Items.Add(splitBar2);
	        RadPane bottomPane = new RadPane();
	        bottomPane.ID = "BottomPane";
	        bottomPane.Controls.Add(new LiteralControl("Bottom pane"));
	        splitter.Items.Add(bottomPane);
	        form1.Controls.Add(splitter);
	    }
	
````
````VB
	
	    Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        Dim splitter As New RadSplitter()
	        splitter.ID = "RadSplitter1"
	        splitter.Width = New Unit("300px")
	        splitter.Height = New Unit("400px")
	        splitter.Orientation = Telerik.Web.UI.Orientation.Horizontal
	        Dim topPane As New RadPane()
	        topPane.ID = "TopPane"
	        Dim topLabel As New Label()
	        topLabel.ID = "TopLabel"
	        topLabel.Text = "Top pane"
	        topPane.Controls.Add(topLabel)
	        splitter.Items.Add(topPane)
	        Dim splitBar1 As New RadSplitBar()
	        splitBar1.ID = "SplitBar1"
	        splitter.Items.Add(splitBar1)
	        Dim middlePane As New RadPane()
	        middlePane.ID = "MiddlePane"
	        middlePane.Controls.Add(New LiteralControl("Middle pane"))
	        splitter.Items.Add(middlePane)
	        Dim splitBar2 As New RadSplitBar()
	        splitBar2.ID = "SplitBar2"
	        splitter.Items.Add(splitBar2)
	        Dim bottomPane As New RadPane()
	        bottomPane.ID = "BottomPane"
	        bottomPane.Controls.Add(New LiteralControl("Bottom pane"))
	        splitter.Items.Add(bottomPane)
	        form1.Controls.Add(splitter)
	    End Sub
	
````


# See Also

 * [Creating SlidingZone Programmatically]({%slug splitter/server-side-programming/creating-slidingzone-programmatically%})

 * [Declaring Splitter]({%slug splitter/layout/declaring-splitter%})

 * [Nesting Splitters]({%slug splitter/layout/nesting-splitters%})

 * [Fixed Layout]({%slug splitter/layout/fixed-layout%})
