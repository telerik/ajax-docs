---
title: ButtonToggle
page_title: ButtonToggle | UI for ASP.NET AJAX Documentation
description: ButtonToggle
slug: ribbonbar/server-side-programming/events/buttontoggle
tags: buttontoggle
published: True
position: 4
---

# ButtonToggle



## 

The server-side __ButtonToggle__ event occurs when a toggle button is toggled, causing a postback.

The event handler function receives two arguments:

1. The __RadRibbonBar__ which has fired the event. This argument is of type object, but can be cast to the __RadRibbonBar type__.

1. An EventArgs object with the following properties:

* __Button__ - the toggle button that has been toggled.

* __Group__ - the group of the clicked toggle button parent's group.

* __Index__ - the index of the clicked button in its containing group.

The following example shows how to use the properties of the event arguments:

>tabbedCode

````C#
	
	    protected void RadRibbonBar1_ButtonToggle(object sender, RibbonBarButtonToggleEventArgs e)
	    {
	        string message = string.Format("ToggleButton {0} was toggled.", e.Button.Text);
	        string details = string.Format("Group: {0}, Index: {1}", e.Group.Text, e.Index);
	
	        textBox1.Text = string.Format("{0} {1}", message, details);
	    }
	
````
````VB.NET
	
		Protected Sub RadRibbonBar1_ButtonToggle(ByVal sender As Object, ByVal e As RibbonBarButtonToggleEventArgs)
			Dim message As String = String.Format("ToggleButton {0} was toggled.", e.Button.Text)
			Dim details As String = String.Format("Group: {0}, Index: {1}", e.Group.Text, e.Index)
	
			textBox1.Text = String.Format("{0} {1}", message, details)
		End Sub
	
	
````
>end

# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/events/serverside/defaultcs.aspx)

 * [Overview]({%slug ribbonbar/server-side-programming/events/overview%})
