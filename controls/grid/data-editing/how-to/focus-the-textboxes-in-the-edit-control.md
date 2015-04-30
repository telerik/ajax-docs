---
title: Focus the Textboxes in the Edit Control
page_title: Focus the Textboxes in the Edit Control | RadGrid for ASP.NET AJAX Documentation
description: Focus the Textboxes in the Edit Control
slug: grid/data-editing/how-to/focus-the-textboxes-in-the-edit-control
tags: focus,the,textboxes,in,the,edit,control
published: True
position: 10
---

# Focus the Textboxes in the Edit Control



## 

When using either a UserControl or Edit forms to update or insert data in Telerik RadGrid, you may need to set the focus on one of the textboxes, contained in the edit form.You need to attach to the **ItemCreated** event, and get a reference to the user control, and the textbox within it. The particular approach demonstrated here adds a literal control to Telerik RadGrid, containing **JavaScript** code. This JavaScript code locates the textbox, by its **clientID**, and both sets the focus on it, and selects it, to provide a better visual representation of the present editing context.

The code below demonstrates the details:



````C#
	    protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item is GridEditFormItem && e.Item.IsInEditMode)
	        {
	            UserControl MyUserControl = e.Item.FindControl(GridEditFormItem.EditFormUserControlID) as UserControl;
	            string script = String.Format("$get('{0}').focus(); $get('{0}').select();", MyUserControl.FindControl("TextBox7").ClientID);
	            ScriptManager.RegisterStartupScript(Page, typeof(Page), "myscript", script, true);
	        }
	    }
````
````VB
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
	        If TypeOf e.Item Is GridEditFormItem And e.Item.IsInEditMode Then
	            Dim script As String = [String].Format("$get('{0}').focus(); $get('{0}').select();", MyUserControl.FindControl("TextBox7").ClientID)
	            ScriptManager.RegisterStartupScript(Page, GetType(Page), "myscript", script, True)
	        End If
	    End Sub
````


An alternative approach can be to attach to the **ItemDataBound** event handler. In the event handler, we can check if the item is of type **GridEditableItem**, and whether it is in edit mode. If these two conditions are satisfied, we can get a reference to the textbox for a particular item and set the focus for its.This is demonstrated in the code sample below:



````C#
	    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridEditableItem && e.Item.IsInEditMode)
	        {
	            GridEditableItem form = (GridEditableItem)e.Item;
	            TextBox dataField = (TextBox)form["ColumnUniqueName "].Controls[0];
	            dataField.Focus();
	        }
	    }
````
````VB
	    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
	        If TypeOf e.Item Is GridEditableItem And e.Item.IsInEditMode Then
	            Dim form As GridEditableItem = CType(e.Item, GridEditableItem)
	            Dim dataField As TextBox = CType(form("ColumnUniqueName").Controls(0), TextBox)
	            dataField.Focus()
	        End If
	    End Sub
````

