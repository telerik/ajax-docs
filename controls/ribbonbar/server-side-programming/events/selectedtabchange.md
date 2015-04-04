---
title: SelectedTabChange
page_title: SelectedTabChange | UI for ASP.NET AJAX Documentation
description: SelectedTabChange
slug: ribbonbar/server-side-programming/events/selectedtabchange
tags: selectedtabchange
published: True
position: 8
---

# SelectedTabChange



## 

The server-side __SelectedTabChange__ event occurs when non-selected tab is clicked, causing a postback.

The event handler function receives two arguments:

1. The __RadRibbonBar__ which has fired the event. This argument is of type object, but can be cast to the __RadRibbonBar type__.

1. An EventArgs object has the following properties:

* __Tab__ - the currently selected tab.

* __PreviouslySelectedTab__ - the previously selected tab.

The following example demonstrates how to use the SelectedTabChange event to determine the new and the previously selected tab.

>tabbedCode

````C#
	
	    protected void RadRibbonBar1_SelectedTabChange(object sender, RibbonBarSelectedTabChangeEventArgs e)
	    {
	        string message = string.Format("Tab {0} was selected.", e.Tab.Text);
	        string details = string.Format("Previosly selected tab was: {0}", e.PreviouslySelectedTab.Text);
	
	        textBox1.Text = string.Format("{0} {1}", message, details);
	    }
	
````
````VB.NET
	
		Protected Sub RadRibbonBar1_SelectedTabChange(ByVal sender As Object, ByVal e As RibbonBarSelectedTabChangeEventArgs)
			Dim message As String = String.Format("Tab {0} was selected.", e.Tab.Text)
			Dim details As String = String.Format("Previosly selected tab was: {0}", e.PreviouslySelectedTab.Text)
	
			textBox1.Text = String.Format("{0} {1}", message, details)
		End Sub
	
	
````
>end

# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/events/serverside/defaultcs.aspx)

 * [Overview]({%slug ribbonbar/server-side-programming/events/overview%})
