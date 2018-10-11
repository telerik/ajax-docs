---
title: Client-side Selection
page_title: Client-side Selection | RadTreeList for ASP.NET AJAX Documentation
description: Client-side Selection
slug: treelist/functionality/selecting/client-side-selection
tags: client-side,selection
published: True
position: 0
---

# Client-side Selection


Telerik **RadTreeList** has built-in mechanism for items selection. You canselect items either on the client or on the server as per your requirements.

To enable the RadTreeList client-side selection you need to set the **ClientSettings.Selecting.AllowItemSelection** to true. This will allow you toselect an item on mouse click. As a result the **OnItemClick**,**OnItemSelecting** and **OnItemSelected** client-side eventsof the RadTreeList will be fired so you can perform further actions and handle the item selection in a custom manner.

You can also use the below settings to enable additional modes of the client-side selection:

* **ClientSettings.Selecting.AllowToggleSelection** - When set to **true** (the default value is false) enables you to deselect an item byclicking on one that is already selected.

* **ClientSettings.Selecting.UseSelectColumnOnly** - When set to **true** (the default value is false) prevents users from selecting items onmouse click and forces them to use the **TreeListSelectColumn** for that purpose.

With RadTreeList you might want to provide the ability for multi-item selection. This is done bysetting its **AllowMultiItemSelection** property to true (its default value is false).And to select a few items at a time, one can use the **[Ctrl]** and **[Shift]** keys as in Windows Explorer. Or, in case the AllowToggleSelection propertyis true, just click on the desired items to select them.

The below sample illustrates a simple usage of the above properties:

````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" ID="RadTreeList1" runat="server" AllowPaging="True" DataKeyNames="EmployeeID"
	DataSourceID="SqlDataSource1" ParentDataKeyNames="ReportsTo" AllowMultiItemSelection="True"
	AutoGenerateColumns="false">
	<Columns>
		<telerik:TreeListSelectColumn UniqueName="SelectColumn">
		</telerik:TreeListSelectColumn>
		<telerik:TreeListBoundColumn DataField="LastName" HeaderText="LastName" UniqueName="LastName">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="FirstName" HeaderText="FirstName" UniqueName="FirstName">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="TitleOfCourtesy" HeaderText="TitleOfCourtesy"
			UniqueName="TitleOfCourtesy">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="City" HeaderText="City" UniqueName="City">
		</telerik:TreeListBoundColumn>
	</Columns>
	<ClientSettings>
		<Selecting AllowItemSelection="true" AllowToggleSelection="true" />
	</ClientSettings>
</telerik:RadTreeList>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [Title], [TitleOfCourtesy], [City], [ReportsTo] FROM [Employees]">
</asp:SqlDataSource>
````



>tip Note that when client-side selection is enabled through the AllowItemSelection property, theTreeListSelectColumn selects the items on the client. If the AllowItemSelection property is false,server-side selection is performed.
>


For a live demo illustrating the client-side items selection functionality, follow [this link](http://demos.telerik.com/aspnet-ajax/treelist/examples/selecting/clientsideselection/defaultcs.aspx).

>tip When [recursive selection]({%slug treelist/functionality/selecting/recursive-selection%}) is enabled (`AllowRecursiveSelection="true"`), client selection is disabled and selection is done on the server with a .Rebind(). This can result in loss of user input because of the rebind operation, so you may want to implement the recursive selection on the client as shown in the following code library sample [Recursive selection on the client when paging is disabled](https://www.telerik.com/support/code-library/recursive-selection-on-the-client-when-paging-is-disabled).
