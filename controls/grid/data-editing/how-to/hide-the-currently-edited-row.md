---
title: Hide the Currently Edited Row
page_title: Hide the Currently Edited Row | UI for ASP.NET AJAX Documentation
description: Hide the Currently Edited Row
slug: grid/data-editing/how-to/hide-the-currently-edited-row
tags: hide,the,currently,edited,row
published: True
position: 6
---

# Hide the Currently Edited Row



## 

When you use __EditForms__ edit mode you may prefer to hide the currently edited row (which by default is displayed above the edit form) and merely show that edit form. You can undertake this task by following the instructions below:

1. Subscribe to the __PreRender__ event of your grid instance

1. Traverse the grid items and find the one that is currently in edit mode

1. Set its __Visible__ property to __false__

>tabbedCode

````C#
	    protected void RadGrid1_PreRender(object sender, System.EventArgs e)
	    {
	        foreach (GridItem item in RadGrid1.MasterTableView.Items)
	        {
	            if (item is GridDataItem && item.Edit)
	            {
	                item.Visible = false;
	            }
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As System.EventArgs)
	        Dim item As GridItem
	        For Each item In RadGrid1.MasterTableView.Items
	            If TypeOf item Is GridDataItem And item.Edit Then
	                item.Visible = False
	            End If
	        Next item
	    End Sub
````
>end
