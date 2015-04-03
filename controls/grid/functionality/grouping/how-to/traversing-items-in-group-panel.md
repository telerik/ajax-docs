---
title: Traversing Items in Group Panel
page_title: Traversing Items in Group Panel | UI for ASP.NET AJAX Documentation
description: Traversing Items in Group Panel
slug: grid/functionality/grouping/how-to/traversing-items-in-group-panel
tags: traversing,items,in,group,panel
published: True
position: 4
---

# Traversing Items in Group Panel



## 

You can iterate through the items placed in the group panel of a grid and modify their settings. This can be done quite easily using the __PreRender__ event of the grid. The items in the group panel can be accessed using the __RadGrid.GroupPanel.GroupPanelItems__ collection.

The following example illustrates how this is done. It changes the __ImageUrl__ for the sorting image button of each group panel item and set its __CausesValidation__ property to __false__ (to avoid validation on click):

>tabbedCode

````C#
	
	    protected void RadGrid1_PreRender(object sender, System.EventArgs e)
	    {
	        foreach (TableCell cell in RadGrid1.GroupPanel.GroupPanelItems)
	        {
	            foreach (Control ctrl in cell.Controls)
	            {
	                if (ctrl is ImageButton)
	                {
	                    ImageButton button = ctrl as ImageButton;
	                    button.ImageUrl = "<my_img_url>";
	                    button.CausesValidation = false;
	                }
	            }
	        }
	    }
	
````



````VB.NET
	    Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As System.EventArgs)
	        Dim cell As TableCell
	        For Each cell In RadGrid1.GroupPanel.GroupPanelItems
	            Dim ctrl As Control
	            For Each ctrl In cell.Controls
	                If (TypeOf ctrl Is ImageButton) Then
	                    Dim button As ImageButton = CType(ctrl, ImageButton)
	                    button.ImageUrl = "<my_img_url>"
	                    button.CausesValidation = False
	                End If
	            Next ctrl
	        Next cell
	    End Sub
````


>end
