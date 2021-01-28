---
title: Client-side grouping with RadClientDataSource
page_title: Client-side grouping with RadClientDataSource - RadGrid
description: Check our Web Forms article about Client-side grouping with RadClientDataSource.
slug: grid/functionality/grouping/client-side-grouping-with-radclientdatasource
tags: client-side,grouping,with,radclientdatasource
published: True
position: 5
---

# Client-side grouping with RadClientDataSource



**RadGrid** supports client-side grouping when it is data-bound to **RadClientDataSource** control.This functionality provides great user experience by handling adding, removing and rearranging of groups entirely on client-side, without performing a postback to the server.

When client-side grouping is used, you can use the same approaches, as with server-side grouping, for setting predefined groups or	allowing the user to drag and drop columns to the **GroupPanel**.

**Example**: The following example demonstrates how to enable client-side grouping functionality when a **RadGrid** is bound to **RadClientDataSource** control:

````ASP.NET
<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
	<DataSource>
		<WebServiceDataSourceSettings ServiceType="OData">
			<Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers" DataType="JSON" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>
        
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" ClientDataSourceID="RadClientDataSource1" runat="server" AllowMultiRowSelection="true"
	AllowSorting="True" AllowPaging="True" PageSize="12" ShowGroupPanel="True" AutoGenerateColumns="false" AllowFilteringByColumn="true">
	<GroupingSettings ShowUnGroupButton="true"></GroupingSettings>
	<MasterTableView GroupLoadMode="Client" TableLayout="Fixed" EnableGroupsExpandAll="true">
		<GroupByExpressions>
			<telerik:GridGroupByExpression>
				<SelectFields>
					<telerik:GridGroupByField FieldAlias="Country" FieldName="Country"></telerik:GridGroupByField>
				</SelectFields>
				<GroupByFields>
					<telerik:GridGroupByField FieldName="Country"></telerik:GridGroupByField>
				</GroupByFields>
			</telerik:GridGroupByExpression>
		</GroupByExpressions>
		<Columns>
			<telerik:GridBoundColumn DataField="Country" HeaderText="Country"></telerik:GridBoundColumn>
			<telerik:GridBoundColumn DataField="ContactTitle" HeaderText="Contact Title"></telerik:GridBoundColumn>
			<telerik:GridBoundColumn DataField="ContactName" HeaderText="Contact Name"></telerik:GridBoundColumn>
		</Columns>
	</MasterTableView>
	<GroupingSettings ShowUnGroupButton="true" />
	<ClientSettings AllowDragToGroup="true">
		<Selecting AllowRowSelect="true" />
	</ClientSettings>
</telerik:RadGrid>
````



The above example could be tested online in the following demo: [Grid - Grouping Client-Side with RadClientDataSource](https://demos.telerik.com/aspnet-ajax/Grid/Examples/functionality/grouping/clientdatasource-grouping/defaultcs.aspx)
