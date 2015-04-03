---
title: Events
page_title: Events | UI for ASP.NET AJAX Documentation
description: Events
slug: slider/server-side-programming/events
tags: events
published: True
position: 0
---

# Events



## OnValueChanged

The __RadSlider__ control raises a server-side event, __ValueChanged__ that fires when the user changes the __Value__ with the mouse or mouse wheel. Set the __AutoPostBack__ property __True__ to raise the event right after the value is changed on the client. Retrieve the __Value__ property within the __ValueChanged__ event handler:

>tabbedCode

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


>end

## OnDataBound

The __OnDataBound__ sever-side event of the __RadSlider__ fires when all its items are loaded from a specified data source.	You can use this event when you are data binding the __RadSlider__ and you want to execute logic that relies on already loaded items.	The example below demonstrates setting the fouth item of a data-bound __RadSlider__ as a selected item:

>tabbedCode

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


>end

# See Also

 * [Overview]({%slug slider/client-side-programming/overview%})

 * [Behavior]({%slug slider/getting-started/behavior%})
