---
title: ToggleListToggle
page_title: ToggleListToggle - RadRibbonBar
description: Check our Web Forms article about ToggleListToggle.
slug: ribbonbar/server-side-programming/events/togglelisttoggle
tags: togglelisttoggle
published: True
position: 9
---

# ToggleListToggle



## 

The server-side **ToggleListToggle** event occurs when a ToggleButton inside a ToggleList is toggled, causing a postback.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar type**.

1. An EventArgs object with the following properties:

	* **ToggleButton** - the ToggleButton that has been toggled.

	* **ToggleList** - the parent toggle list of the clicked toggle button.

	* **ToggleListButtons** - a collection of all toggle button in the parent toggle list.

	* **Group** - the parent group of the clicked toggle button.

	* **Index** - the index of the clicked toggle button in its containing toggle list.

The following example shows how to use the properties of the event arguments:



````C#
	
protected void RadRibbonBar1_ToggleListToggle(object sender, RibbonBarToggleListToggleEventArgs e)
{
    string message = string.Format("ToggleList's ToggleButton {0} was toggled.", e.ToggleButton.Text);
    string details = string.Format("Group: {0}, Index: {1}", e.Group.Text, e.Index);

    textBox1.Text = string.Format("{0} {1}", message, details);
}
	
````
````VB.NET
	
Protected Sub RadRibbonBar1_ToggleListToggle(ByVal sender As Object, ByVal e As RibbonBarToggleListToggleEventArgs)
	Dim message As String = String.Format("ToggleList's ToggleButton {0} was toggled.", e.ToggleButton.Text)
	Dim details As String = String.Format("Group: {0}, Index: {1}", e.Group.Text, e.Index)

	textBox1.Text = String.Format("{0} {1}", message, details)
End Sub
	
````


# See Also

 * [Online Demo](https://demos.telerik.com/aspnet-ajax/ribbonbar/examples/events/serverside/defaultcs.aspx)

 * [Server-side Events Overview]({%slug ribbonbar/server-side-programming/events/overview%})
