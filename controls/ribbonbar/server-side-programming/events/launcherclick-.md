---
title: LauncherClick 
page_title: LauncherClick  | RadRibbonBar for ASP.NET AJAX Documentation
description: LauncherClick 
slug: ribbonbar/server-side-programming/events/launcherclick-
tags: launcherclick,
published: True
position: 5
---

# LauncherClick 



## 

The server-side **LauncherClick** event occurs when a group launcher is clicked, causing a postback.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar type**.

1. An EventArgs object with **Group** property providing access to the group of the clicked launcher.

The following example demonstrates how to use the LauncherClick event to determine the group of the clicked launcher.



````C#
	
protected void RadRibbonBar1_LauncherClick(object sender, RibbonBarLauncherClickEventArgs e)
{
    string message = string.Format("Launcher of group {0} was clicked.", e.Group.Text);

    textBox1.Text = message;
}
	
````
````VB.NET
	
Protected Sub RadRibbonBar1_LauncherClick(ByVal sender As Object, ByVal e As RibbonBarLauncherClickEventArgs)
	Dim message As String = String.Format("Launcher of group {0} was clicked.", e.Group.Text)

	textBox1.Text = message
End Sub
		
````


# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/events/serverside/defaultcs.aspx)

 * [Server-side Events Overview]({%slug ribbonbar/server-side-programming/events/overview%})
