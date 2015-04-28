---
title: Overview
page_title: Edit Mode Overview | RadTreeList for ASP.NET AJAX Documentation
description: Overview
slug: treelist/data-editing/edit-mode/overview
tags: overview
published: True
position: 0
---

# Edit Mode Overview



RadTreeList supports the below edit modes:

* **[InPlace](http://www.telerik.com/help/aspnet-ajax/treelist-edit-modes.html#Section1_self)**

* **[EditForms](http://www.telerik.com/help/aspnet-ajax/treelist-edit-modes.html#Section2_self)**

* **[PopUp](http://www.telerik.com/help/aspnet-ajax/treelist-edit-modes.html#Section3_self)**

The default edit mode of RadTreeList is **EditForms**. To specify which edit mode will your control, you can set its **EditMode** property to one of the above values.

## InPlace edit mode

To display the treelist in-place edit form, you need to set the **EditMode** property of your RadTreeList control to **InPlace**. When an item goes in edit mode, the edit form will be displayed instead of the regular treelist item.

````ASPNET
<telerik:RadTreeList ID="RadTreeList1" runat="server" EditMode="InPlace" 
	DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo" DataSourceID="SqlDataSource1">            
</telerik:RadTreeList>
````

![RadTreeList InPlace EditMode](images/treelist_inplace-edit-mode.png)

>note Note that in-place edit mode is supported only for auto-generated edit forms.
>


When **InPlace** editing is applied, in the ItemCreated/ItemDataBound you can access the edit/insert form as below:



````C#
protected void RadTreeList1_ItemCreated(object sender, TreeListItemCreatedEventArgs e)
{
	if (e.Item is TreeListDataItem)
	{
		//item is in regular mode
	}
	if (e.Item is TreeListEditableItem && (e.Item as TreeListEditableItem).IsInEditMode)
	{
		//item is in edit mode
	}
	if (e.Item is TreeListDataInsertItem)
	{
		//item is in insert mode
	}
}
````
````VB.NET
Protected Sub RadTreeList1_ItemCreated(ByVal sender As Object, ByVal e As TreeListItemCreatedEventArgs)
	If TypeOf e.Item Is TreeListDataItem Then
		'item is in regular mode
	End If
	If TypeOf e.Item Is TreeListEditableItem AndAlso CType(e.Item, TreeListEditableItem).IsInEditMode Then
		'item is in edit mode
	End If
	If TypeOf e.Item Is TreeListDataInsertItem Then
		'item is in insert mode
	End If
End Sub
````


## EditForms edit mode

To display the treelist in-forms edit form, you need to set the **EditMode** property of your RadTreeList control to **EditForms**. When an item goes in edit mode, the edit form will be displaed just below the edited item.

````ASPNET
<telerik:RadTreeList ID="RadTreeList2" runat="server" EditMode="EditForms" 
	DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo" DataSourceID="SqlDataSource1">            
</telerik:RadTreeList>
````

![RadTreeList EditForms Edit Mode](images/treelist_editforms-edit-mode.png)

When the RadTreeList edit mode is EditForms, you can access the edited item and the edit/insert form on ItemCreated/ItemDataBound as below:



````C#
protected void RadTreeList2_ItemCreated(object sender, TreeListItemCreatedEventArgs e)
{
	if (e.Item is TreeListDataItem)
	{
		//item is in regular mode
	}
	if (e.Item is TreeListEditFormItem)
	{
		//item is in edit mode
	}
	if (e.Item is TreeListEditFormInsertItem)
	{
		//item is in insert mode
	}
}
````
````VB.NET
Protected Sub RadTreeList2_ItemCreated(ByVal sender As Object, ByVal e As TreeListItemCreatedEventArgs)
	If TypeOf e.Item Is TreeListDataItem Then
		'item is in regular mode
	End If
	If TypeOf e.Item Is TreeListEditFormItem Then
		'item is in edit mode
	End If
	If TypeOf e.Item Is TreeListEditFormInsertItem Then
		'item is in insert mode
	End If
End Sub
````


## PopUp edit mode

To display the treelist pop-up edit form, you need to set the **EditMode** property of your RadTreeList control to **PopUp**. When an item goes into edit mode, the edit form will be displayed in front of the treelist and the edited item style will change respectively.

````ASPNET
<telerik:RadTreeList ID="RadTreeList3" runat="server" EditMode="PopUp" 
	DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo" DataSourceID="SqlDataSource1">            
</telerik:RadTreeList>
````

![RadTreeList PopUp Edit Mode](images/treelist_popup-edit-mode.png)

When the RadTreeList edit mode is PopUp, you can access the edited item and the edit/insert form on ItemCreated/ItemDataBound as below:



````C#
protected void RadTreeList3_ItemCreated(object sender, TreeListItemCreatedEventArgs e)
{
	if (e.Item is TreeListDataItem)
	{
		//item is in regular mode
	}
	if (e.Item is TreeListEditFormItem)
	{
		//item is in edit mode
	}
	if (e.Item is TreeListEditFormInsertItem)
	{
		//item is in insert mode
	}
}
````
````VB.NET
Protected Sub RadTreeList3_ItemCreated(ByVal sender As Object, ByVal e As TreeListItemCreatedEventArgs)
	If TypeOf e.Item Is TreeListDataItem Then
		'item is in regular mode
	End If
	If TypeOf e.Item Is TreeListEditFormItem Then
		'item is in edit mode
	End If
	If TypeOf e.Item Is TreeListEditFormInsertItem Then
		'item is in insert mode
	End If
End Sub
````


>note If you want to hide the the duplicate caption text that shows in the popup edit form, you can set the **EditFormSettings.PopUpSettings.ShowCaptionInEditForm** property of the treelist control to **false** .
>


# See Also

 * [EditForm Types]({%slug treelist/data-editing/edit-mode/editform-types%})

 * [NET 2.0 Automatic CRUD operations demo](http://demos.telerik.com/aspnet-ajax/treeList/examples/dataediting/net2automaticdataediting/defaultcs.aspx)

 * [NET 3.5 Automatic CRUD operations demo](http://demos.telerik.com/aspnet-ajax/treeList/examples/dataediting/net35automaticdataediting/defaultcs.aspx)

 * [Form Template/User Control edit form](http://demos.telerik.com/aspnet-ajax-beta/treeList/examples/dataediting/formtemplateusercontrol/defaultcs.aspx)
