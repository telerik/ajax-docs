---
title: Automatic Data Operations
page_title: Automatic Data Operations | RadTreeList for ASP.NET AJAX Documentation
description: Automatic Data Operations
slug: treelist/data-editing/automatic-data-operations
tags: automatic,data,operations
published: True
position: 2
---

# Automatic Data Operations



**RadTreeList** provides an API for inserting new data, updating existing data and deleting data from the specified data source. You can use these features while writing very little code.

## Controlling the automatic data source operations

Once it is bound to a DataSource control that supports Insert, Update, and Delete operations, RadTreeList can take an advantage of the data source capabilities to perform the requiredoperations.The only requirement is binding the treelist to a declarative data source using the **DataSourceID** property of the control. Other than this, the functionality is automatically handled, without the need to write any custom code.

You also need to set the **DataKeyNames** and **ParentDataKeyNames** properties of the RadTreeList control so that the insert, update, and delete operations perform as expected.

## RadTreeList bound to SqlDataSource



````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1" DataSourceID="SqlDataSource1"
	AutoGenerateColumns="False" AllowPaging="True" PageSize="5" DataKeyNames="EmployeeID"
	ParentDataKeyNames="ReportsTo" AllowMultiItemEdit="False" Culture="(Default)"
	IsItemInserted="False">
	<Columns>
			<telerik:TreeListBoundColumn DataField="EmployeeID" HeaderText="EmployeeID" ReadOnly="true"
				UniqueName="EmployeeID">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="LastName" HeaderText="Last Name" UniqueName="LastName">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="FirstName" HeaderText="First Name" UniqueName="FirstName">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="ReportsTo" ReadOnly="true" HeaderText="ReportsTo"
				UniqueName="ReportsTo">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListEditCommandColumn UniqueName="EditCommandColumn">
			</telerik:TreeListEditCommandColumn>
		</Columns>
</telerik:RadTreeList>
<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [Title], [ReportsTo] FROM [Employees]"
	runat="server" InsertCommand="INSERT INTO [Employees] ([LastName], [FirstName], [Title], [ReportsTo]) VALUES (@LastName, @FirstName, @Title, @ReportsTo)"
	UpdateCommand="UPDATE [Employees] SET [LastName] = @LastName, [FirstName] = @FirstName, [Title] = @Title, [ReportsTo] = @ReportsTo WHERE [EmployeeID] = @EmployeeID">
	<InsertParameters>
		<asp:Parameter Name="LastName" Type="String" />
		<asp:Parameter Name="FirstName" Type="String" />
		<asp:Parameter Name="Title" Type="String" />
		<asp:Parameter Name="ReportsTo" Type="Int32" />
	</InsertParameters>
	<UpdateParameters>
		<asp:Parameter Name="LastName" Type="String" />
		<asp:Parameter Name="FirstName" Type="String" />
		<asp:Parameter Name="Title" Type="String" />
		<asp:Parameter Name="ReportsTo" Type="Int32" />
		<asp:Parameter Name="EmployeeID" Type="Int32" />
	</UpdateParameters>
</asp:SqlDataSource>
````


## RadTreeList bound to LinqDataSource



````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1" DataSourceID="LinqDataSource1"
	AllowPaging="true" PageSize="5" DataKeyNames="id" ParentDataKeyNames="parentId"
	AutoGenerateColumns="false">
	<Columns>
			<telerik:TreeListEditCommandColumn UniqueName="EditCommandColumn" ButtonType="ImageButton">
				<ItemStyle CssClass="MyImageButton" />
			</telerik:TreeListEditCommandColumn>
			<telerik:TreeListBoundColumn DataField="id" UniqueName="id" HeaderText="ID" ReadOnly="true" />
			<telerik:TreeListBoundColumn DataField="Text" UniqueName="Categories" HeaderText="Categories" />
			<telerik:TreeListBoundColumn DataField="parentid" UniqueName="parentid" HeaderText="Parent ID"
				ReadOnly="true" />
		</Columns>
</telerik:RadTreeList>
<asp:LinqDataSource runat="server" ID="LinqDataSource1" ContextTypeName="LinqToSql.TelerikSamplesDataContext"
	TableName="Links" EnableUpdate="true" EnableInsert="true">
</asp:LinqDataSource>
````


## 

The following MSDN articles describe how to configure some of the more common DataSource controls:

[AccessDataSource](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.accessdatasource.aspx)

[SqlDataSource](http://msdn2.microsoft.com/en-us/library/dz12d98w(vs.80).aspx)

[ObjectDataSource](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx)

[LinqDataSource](http://msdn2.microsoft.com/en-us/library/bb547113.aspx)

[EntityDataSource](http://msdn.microsoft.com/en-us/library/cc488502.aspx)
