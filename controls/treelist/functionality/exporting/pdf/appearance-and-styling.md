---
title: Appearance and Styling
page_title: Appearance and Styling | RadTreeList for ASP.NET AJAX Documentation
description: Appearance and Styling
slug: treelist/functionality/exporting/pdf/appearance-and-styling
tags: appearance,and,styling
published: True
position: 1
---

# Appearance and Styling



The RadTreeList does not export any external styles. This means that your skins will not appear in the generated file. However, the control offers the following options for customizing the appearance in the exported file:

1. Styles set in the code-behind;

1. Styles set in the *Pdf* category of the *ExportSettings*;

1. Styles set to the treelist.

The priority is the same as in the order above.

## Setting styles in the code-behind

Different approaches for setting styles in the code-behind could be used depending whether the *RadTreeList* will be rebound before export (when *IgnorePaging* is set to *true* or when you rebind manually). The following code can be used in the both cases:



````C#
bool isExport = false;
protected void Button1_Click(object sender, EventArgs e)
{
	isExport = true;
	RadTreeList1.ExportToPdf();
}

protected void RadTreeList1_ItemCreated(object sender, TreeListItemCreatedEventArgs e)
{
	if (e.Item is TreeListDataItem && isExport)
		e.Item.Style["background-color"] = "#888888";
}
````
````VB.NET
Private isExport As Boolean = False
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	isExport = True
	RadTreeList1.ExportToPdf()
End Sub

Protected Sub RadTreeList1_ItemCreated(ByVal sender As Object, ByVal e As TreeListItemCreatedEventArgs)
	If TypeOf e.Item Is TreeListDataItem AndAlso isExport Then
		e.Item.Style("background-color") = "#888888"
	End If
End Sub
````


When *Rebind* will be invoked, you can apply the styles directly:



````C#
protected void Button1_Click(object sender, EventArgs e)
{
	foreach (TreeListDataItem item in RadTreeList1.Items)
		item.Style["background-color"] = "#888888";
	RadTreeList1.ExportToPdf();
}
````
````VB.NET
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	For Each item As TreeListDataItem In RadTreeList1.Items
		item.Style("background-color") = "#888888"
	Next
	RadTreeList1.ExportToPdf()
End Sub
````


## Setting styles in the Pdf category

The treelist offers the following built-in style descriptors for export to PDF:

* ItemStyle

* AlternatingItemStyle

* HeaderStyle

* ExpandCollapseCellStyle

The first three inherit the [TableItemStyle](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.tableitemstyle.aspx) and style the corresponding treelist rows. The *ExpandCollapseCellStyle* styles only the Expand/Collapse cells in the control. You should set either the expand/collapse text, or the expand/collapse images (not both).The path for the expand/collapse images should be relative, otherwise they will not be found and exported on the production server.

````ASPNET
<ExportSettings>
	<Pdf>
		<ItemStyle BackColor="Green" ForeColor="DarkGreen" />
		<AlternatingItemStyle BackColor="WhiteSmoke" ForeColor="Black" />
		<HeaderStyle Font-Size="Large" />
		<ExpandCollapseCellStyle ExpandText="(+)" CollapseText="(-)" />
	</Pdf>
</ExportSettings> 
````



## Setting styles declaratively to the treelist

Another option to export styled treelist is to specify the styles declaratively to the control:

````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1" DataSourceID="SqlDataSource1"
	AllowPaging="true" PageSize="5" DataKeyNames="id" ParentDataKeyNames="parentId"
	AutoGenerateColumns="false">
	<HeaderStyle ForeColor="BlueViolet" />
	<AlternatingItemStyle Font-Size="Small" />
	<Columns>
		<telerik:TreeListBoundColumn DataField="id" UniqueName="id" HeaderText="ID" ReadOnly="true" />
		<telerik:TreeListBoundColumn DataField="Text" UniqueName="Text" HeaderText="Name">
			<ItemStyle Font-Italic="true" />
			<HeaderStyle BackColor="BlanchedAlmond" />
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="parentid" UniqueName="parentid" HeaderText="Parent ID"
			ReadOnly="true" />
	</Columns>
</telerik:RadTreeList>        
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	SelectCommand="SELECT * FROM [Links]"></asp:SqlDataSource>
````


