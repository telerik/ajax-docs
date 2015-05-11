---
title: Events
page_title: Server-side Events | RadSlider for ASP.NET AJAX Documentation
description: Events
slug: slider/server-side-programming/events
tags: events
published: True
position: 0
---

# Events

## OnValueChanged

The **RadSlider** control raises a server-side event, **ValueChanged** that fires when the user changes the **Value** with the mouse or mouse wheel. Set the **AutoPostBack** property **True** to raise the event right after the value is changed on the client. Retrieve the **Value** property within the **ValueChanged** event handler:

````C#	
protected void RadSlider1_ValueChanged(object sender, EventArgs e)
{
	Label1.Text = (sender as Telerik.Web.UI.RadSlider).Value.ToString();
} 
````
````VB	
Protected Sub RadSlider1_ValueChanged(ByVal sender As Object, ByVal e As EventArgs)
	Label1.Text = (TryCast(sender, Telerik.Web.UI.RadSlider)).Value.ToString()
End Sub	
````

## OnDataBound

The **OnDataBound** sever-side event of the **RadSlider** fires when all its items are loaded from a specified data source.	You can use this event when you are data binding the **RadSlider** and you want to execute logic that relies on already loaded items. The example below demonstrates setting the fourth item of a data-bound **RadSlider** as a selected item:

````C#
protected void OnDataBound(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		slider.SelectedValue = slider.Items[3].Value;
	}
}
````
````VB
Protected Sub OnDataBound(sender As Object, e As System.EventArgs) Handles slider.DataBound
	If Not IsPostBack Then
		slider.SelectedValue = slider.Items(3).Value
	End If
End Sub
````


## See Also

 * [Overview]({%slug slider/client-side-programming/overview%})

 * [Behavior]({%slug slider/getting-started/behavior%})
