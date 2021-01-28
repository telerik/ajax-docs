---
title: Detail Template
page_title: Detail Template - RadTreeList
description: Check our Web Forms article about Detail Template.
slug: treelist/appearance-and-styling/detail-template
tags: detail,template
published: True
position: 2
---

# Detail Template



## 

Through its **DetailTemplate** RadTreeList gives you the freedom to createand design one extra row for each treelist item. This additional detail row allows data-binding thecontrols within it to the data fields of its parent. Thus, based on your custom preferences you canmodel the look and feel of the detail item in a non-table-dependant format while at the same timefilling it with content related to the parent row.

In order to take the advantage of this feature, you need to place your custom controls and HTMLinto the RadTreeList **DetailTemplate** definition. There you can use bindingexpressions, like Eval and Bind, for the parent fields that will be visualized in the table row rendered.

As the detail item is part of each treelist item, it is visible when its parent item is alsovisible, and cannot be expanded/collapsed separately. Additionally, if paging is enabled for theRadTreeList control, on the current page will be displayed as many treelist items as the page size isplus their detail items.

The following sample illustrates one possible usage of the detail item feature of RadTreeList:

````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1" DataSourceID="SqlDataSource1"
	AutoGenerateColumns="false" AllowPaging="true" PageSize="5" DataKeyNames="EmployeeID"
	ParentDataKeyNames="ReportsTo">
	<DetailTemplate>
		<table>
			<tr>
				<td>
					<img src='<%# Page.ResolveUrl("~/TreeList/Examples/Appearance/DetailItemTemplate/Img/") + Eval("EmployeeID") + ".jpg" %>'
						alt='<%# Eval("FirstName") + " " + Eval("LastName") %>' />
				</td>
				<td>
					<asp:Label ID="lblNotes" runat="server" Text='<%# Eval("Notes") %>'></asp:Label>
				</td>
			</tr>
		</table>
	</DetailTemplate>
	<Columns>
		<telerik:TreeListBoundColumn DataField="EmployeeID" HeaderText="EmployeeID" UniqueName="EmployeeID">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="LastName" HeaderText="Last Name" UniqueName="LastName">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="FirstName" HeaderText="First Name" UniqueName="FirstName">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="ReportsTo" HeaderText="ReportsTo" UniqueName="ReportsTo">
		</telerik:TreeListBoundColumn>
	</Columns>
</telerik:RadTreeList>
<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	ProviderName="System.Data.SqlClient" runat="server" SelectCommand="SELECT EmployeeID, LastName, FirstName, Title, ReportsTo, Notes FROM Employees">
</asp:SqlDataSource>
````



For a live example, check [this](https://demos.telerik.com/aspnet-ajax/treelist/examples/appearance/detailitemtemplate/defaultcs.aspx) online demo.
