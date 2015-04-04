---
title: Accessing Controls
page_title: Accessing Controls | UI for ASP.NET AJAX Documentation
description: Accessing Controls
slug: listview/templates/accessing-controls
tags: accessing,controls
published: True
position: 2
---

# Accessing Controls



## Accessing controls in the LayoutTemplate

To get reference to a control in RadListView LayoutTemplate you can use its FindControl(controlId) method.

>tabbedCode

````C#
	    protected void RadListView1_PreRender(object sender, EventArgs e)
	    {
	        Label lbl = RadListView1.FindControl("Label1") as Label;
	    }
````
````VB.NET
	    Protected Sub RadListView1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
	        Dim lbl As Label = TryCast(RadListView1.FindControl("Label1"), Label)
	    End Sub
````
>end

## Accessing controls in the ItemTemplate

To access a control in RadListView item you can handle the ItemCreated event as shown below:

>tabbedCode

````C#
	    protected void RadListView1_ItemCreated(object sender, RadListViewItemEventArgs e)
	    {
	        if (e.Item is RadListViewDataItem)
	        {
	            Label label = e.Item.FindControl("Label1") as Label;
	        }
	    }
````
````VB.NET
	    Protected Sub RadListView1_ItemCreated(ByVal sender As Object, ByVal e As RadListViewItemEventArgs)
	        If TypeOf e.Item Is RadListViewDataItem Then
	            Dim label As Label = TryCast(e.Item.FindControl("Label1"), Label)
	        End If
	    End Sub
````
>end

## Accessing controls in the EditItemTemplate/InsertItemTemplate

If the RadListView item is in edit mode you can get reference to the respective RadListViewEditableItem instance and call the FindControl(controlId) method for it.

>tabbedCode

````C#
	    protected void RadListView1_ItemCreated(object sender, RadListViewItemEventArgs e)
	    {
	        if (e.Item is RadListViewEditableItem && e.Item.IsInEditMode)
	        {
	            TextBox myControl = e.Item.FindControl("TextBox1") as TextBox;
	        }
	    }
````
````VB.NET
	    Protected Sub RadListView1_ItemCreated(ByVal sender As Object, ByVal e As RadListViewItemEventArgs)
	        If TypeOf e.Item Is RadListViewEditableItem AndAlso e.Item.IsInEditMode Then
	            Dim myControl As TextBox = TryCast(e.Item.FindControl("TextBox1"), TextBox)
	        End If
	    End Sub
````
>end

If the RadListView item is in insert mode you can reference the control the same way as in edit mode.

>tabbedCode

````C#
	
	    protected void RadListView1_ItemCreated(object sender, RadListViewItemEventArgs e)
	    {
	        if (e.Item is RadListViewInsertItem && e.Item.IsInEditMode)
	        {
	            TextBox myControl = e.Item.FindControl("TextBox1") as TextBox;
	        }
	    }
````
````VB.NET
	    Protected Sub RadListView1_ItemCreated(ByVal sender As Object, ByVal e As RadListViewItemEventArgs)
	        If TypeOf e.Item Is RadListViewInsertItem AndAlso e.Item.IsInEditMode Then
	            Dim myControl As TextBox = TryCast(e.Item.FindControl("TextBox1"), TextBox)
	        End If
	    End Sub
````
>end
