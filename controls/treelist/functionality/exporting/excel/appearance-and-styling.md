---
title: Appearance and Styling
page_title: Appearance and Styling | UI for ASP.NET AJAX Documentation
description: Appearance and Styling
slug: treelist/functionality/exporting/excel/appearance-and-styling
tags: appearance,and,styling
published: True
position: 0
---

# Appearance and Styling



The RadTreeList does not export any external styles. This means that your skins will not appear in the generated file. However, the control offers the following options for customizing the appearance in the exported

1. Styles set in the *Excel* category of the *ExportSettings*;

1. Styles set to the treelist.

The priority is the same as in the order above.

## Setting styles in the Excel category

The treelist offers the following built-in style descriptors for export to Excel:

* ItemStyle

* AlternatingItemStyle

* HeaderStyle

* ExpandCollapseCellStyle

The first three inherit the [TableItemStyle](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.tableitemstyle.aspx) and style the corresponding treelist rows. The *ExpandCollapseCellStyle* styles only the Expand/Collapse cells in the control. You should set either the expand/collapse text, or the expand/collapse images (not both).The path for the expand/collapse images should be relative, otherwise they will not be found and exported on the production server.

````ASPNET
	                <ExportSettings>
	                    <Excel>
	                        <ItemStyle BackColor="Green" ForeColor="DarkGreen" />
	                        <AlternatingItemStyle BackColor="WhiteSmoke" ForeColor="Black" />
	                        <HeaderStyle Font-Size="Large" />
	                        <ExpandCollapseCellStyle ExpandText="(+)" CollapseText="(-)" />
	                    </Excel>
	                </ExportSettings> 
````



## Setting styles declaratively to the treelist

Another option to export styled treelist is to specify the styles declaratively to the control:

````ASPNET
	        <telerik:RadTreeList runat="server" ID="RadTreeList1" DataSourceID="SqlDataSource1"
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


