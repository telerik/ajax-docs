---
title: Distinguish Edit or Insert Mode
page_title: Distinguish Edit or Insert Mode | UI for ASP.NET AJAX Documentation
description: Distinguish Edit or Insert Mode
slug: grid/data-editing/distinguish-edit-or-insert-mode
tags: distinguish,edit,or,insert,mode
published: True
position: 8
---

# Distinguish Edit or Insert Mode



## 

In various situations you may want to detect whether the user is currently editing grid item or performs an insert operation. This is useful if you would like to have different appearance for the edit form on item insertion than that on item editing (suitable for __WebUserControl__ or __FormTemplate__ custom edit form). For example, you may want to hide primary key field from the form or change __update__ button text to __insert__ on initial insert. These online example demonstrates the second functionality:

[http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultCS.aspx](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultCS.aspx)

[http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultVB.aspx](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultVB.aspx)

And the code extractions are:

````ASPNET
	        <asp:Button ID="btnUpdate" Text='<%# ((bool)DataBinder.Eval(Container, "OwnerTableView.IsItemInserted")) ? "Insert" : "Update" %>'
	        runat="server" CommandName='<%# ((bool)DataBinder.Eval(Container, "OwnerTableView.IsItemInserted")) ? "PerformInsert" : "Update" %>'>
````



````ASPNET
	       <asp:Button ID="Button1" Text='<%# IIf( DataBinder.Eval(Container, "OwnerTableView.IsItemInserted"), "Insert", "Update") %>'
	       runat="server" CommandName='<%# IIf( DataBinder.Eval(Container, "OwnerTableView.IsItemInserted"), "PerformInsert", "Update") %>'>
````



You can check the type of the editable item in the __ItemCreated/ItemDataBound__ handlers of the grid to verifywhether the item is in edit or insert mode. Then you can modify the edit form appearance(on __ItemCreated__) or edit form controls values (on __ItemDataBound__) if needed. Below are sample code snippets:

>tabbedCode

````C#
	private void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	{
	    if(e.Item is GridEditableItem && e.Item.IsInEditMode)
	    {
	        if (e.Item is GridEditFormInsertItem || e.Item is GridDataInsertItem)
	        {
	            // insert item
	        }
	        else
	        {
	            // edit item
	        }
	    }
	}
	
	private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
	{
	    if (e.Item is GridEditFormInsertItem || e.Item is GridDataInsertItem)
	    {
	        // insert item
	    }
	    else
	    {
	        // edit item
	    }
	}          
````
````VB.NET
	    Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
	        If TypeOf e.Item Is GridEditableItem And e.Item.IsInEditMode Then
	
	            If TypeOf e.Item Is GridEditFormInsertItem OrElse TypeOf e.Item Is GridDataInsertItem Then
	                ' insert item
	            Else
	                ' edit item
	            End If
	        End If
	    End Sub 'RadGrid1_ItemCreated
	
	    Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
	        If TypeOf e.Item Is GridEditableItem And e.Item.IsInEditMode Then
	
	            If TypeOf e.Item Is GridEditFormInsertItem OrElse TypeOf e.Item Is GridDataInsertItem Then
	                ' insert item
	            Else
	                ' edit item
	            End If
	        End If
	    End Sub 'RadGrid1_ItemDataBound
````
>end

For more information concerning the major differences between __ItemCreated__ and __ItemDataBound__ events please read [this article]({%slug grid/control-lifecycle/differences-between-itemcreated-and-itemdatabound-%}). You can also learn how to control the edit/insert/regular modes in the grid (to prevent unexpected results when both edit and insert form is opened) from [this topic]( http://www.telerik.com/help/aspnet-ajax/grid-switching-insert-add-modes.html ).
