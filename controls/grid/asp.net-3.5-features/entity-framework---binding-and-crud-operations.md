---
title: Entity Framework - Binding and CRUD Operations
page_title: Entity Framework Binding and CRUD - RadGrid
description: Learn how to bind RadGrid to Entity Framework data and enable automatic insert, update, and delete operations in ASP.NET AJAX.
slug: grid/asp.net-3.5-features/entity-framework---binding-and-crud-operations
components: ["grid"]
tags: entity,framework,-,binding,and,crud,operations
published: True
position: 1
---

# Entity Framework - Binding and CRUD Operations

Starting with ASP.NET 3.5, the ADO.NET Entity Framework provides a way to supply data and structure a data access layer (DAL) for ASP.NET websites and web application projects.

The ADO.NET Entity Framework is designed to support data-centric applications and services, and provides a platform for programming against data that raises the level of abstraction from the logical relational level to the conceptual level. By enabling developers to work with data at a greater level of abstraction, the Entity Framework supports code that is independent of any particular data storage engine or relational schema. For more information, see [Introducing the Entity Framework](https://msdn.microsoft.com/en-us/library/bb399567.aspx).

The Entity Framework supports an [Entity Data Model](https://msdn.microsoft.com/en-us/library/bb387122.aspx) (EDM) for defining data at both the storage and conceptual level and a mapping between the two. It also enables developers to program directly against the data types defined at the conceptual level as common language runtime (CLR) objects. The Entity Framework provides tools to generate an EDM and the related CLR objects based on an existing database. This reduces much of the data access code that used to be required to create object-based data application and services, and makes it faster to create object-oriented data applications and services from an existing database.

The following MSDN tutorial includes step-by-step instructions for using the ADO.NET Entity Framework:

[Entity Framework getting started tutorial](https://msdn.microsoft.com/en-us/library/bb386876.aspx)

## Binding RadGrid to Entity Framework

RadGrid for ASP.NET AJAX provides a declarative way to bind to `EntityDataSource`, similar to other ASP.NET data source controls, as shown in the [Entity Framework data binding demo](https://demos.telerik.com/aspnet-ajax/grid/examples/automaticoperations/efdatabinding/defaultcs.aspx). The example supports automatic data editing, paging, and sorting. Configure the `EntityDataSource` properties to enable these operations.

To enable automatic editing at the data source level, set `AllowAutomaticUpdates`, `AllowAutomaticInserts`, and `AllowAutomaticDeletes` to `true` on the grid. Set the corresponding `EnableUpdate`, `EnableInsert`, and `EnableDelete` properties of the `EntityDataSource` to `true`.

## Configuring Automatic CRUD Operations

The following code snippets show the example configuration:

> caption Example: Binding RadGrid to Entity Framework with automatic CRUD operations

````ASP.NET
<%@ register assembly="System.Web.Entity, Version=3.5.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"
  namespace="System.Web.UI.WebControls" tagprefix="asp" %>
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
  <AjaxSettings>
    <telerik:AjaxSetting AjaxControlID="RadGrid1">
      <UpdatedControls>
        <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
      </UpdatedControls>
    </telerik:AjaxSetting>
  </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" DataSourceID="EntityDataSourceCustomers"
  GridLines="None" AllowPaging="True" AllowAutomaticUpdates="True" AllowAutomaticInserts="True"
  AllowSorting="true" Width="750px" OnItemCreated="RadGrid1_ItemCreated">
  <PagerStyle Mode="NextPrevAndNumeric" />
  <MasterTableView DataSourceID="EntityDataSourceCustomers" AutoGenerateColumns="False"
    DataKeyNames="CustomerID" CommandItemDisplay="Top">
    <Columns>
      <telerik:GridEditCommandColumn ButtonType="ImageButton" UniqueName="EditCommandColumn">
      </telerik:GridEditCommandColumn>
      <telerik:GridBoundColumn DataField="CustomerID" HeaderText="CustomerID" SortExpression="CustomerID"
        UniqueName="CustomerID" Visible="false" MaxLength="5">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn DataField="ContactName" HeaderText="ContactName" SortExpression="ContactName"
        UniqueName="ContactName">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn DataField="CompanyName" HeaderText="CompanyName" SortExpression="CompanyName"
        UniqueName="CompanyName">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn DataField="ContactTitle" HeaderText="ContactTitle" SortExpression="ContactTitle"
        UniqueName="ContactTitle">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn DataField="Phone" HeaderText="Phone" SortExpression="Phone"
        UniqueName="Phone">
      </telerik:GridBoundColumn>
    </Columns>
    <EditFormSettings>
      <EditColumn ButtonType="ImageButton" />
    </EditFormSettings>
  </MasterTableView>
</telerik:RadGrid>
<asp:EntityDataSource ID="EntityDataSourceCustomers" runat="server" ConnectionString="name=NorthwindEntities"
  DefaultContainerName="NorthwindEntities" EntitySetName="Customers" OrderBy="it.[ContactName]"
  EntityTypeFilter="Customers" EnableUpdate="True" EnableDelete="True" EnableInsert="True">
</asp:EntityDataSource>
````
````C#
protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        if (!e.Item.OwnerTableView.IsItemInserted)
        {
            GridEditableItem item = e.Item as GridEditableItem;
            GridEditManager manager = item.EditManager;
            GridTextBoxColumnEditor editor = manager.GetColumnEditor("CustomerID") as GridTextBoxColumnEditor;
            editor.TextBoxControl.Enabled = false;
          }
        }
      }
````
````VB.NET
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
    If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
        If Not e.Item.OwnerTableView.IsItemInserted Then
            Dim item As GridEditableItem = TryCast(e.Item, GridEditableItem)
            Dim manager As GridEditManager = item.EditManager
            Dim editor As GridTextBoxColumnEditor = TryCast(manager.GetColumnEditor("CustomerID"), GridTextBoxColumnEditor)
            editor.TextBoxControl.Enabled = False
        End If
    End If
End Sub
````

## See Also

- [Manual LINQ to SQL CRUD operations]({%slug grid/asp.net-3.5-features/linq-to-sql---binding-and-manual-crud-operations%})
- [Automatic LINQ to SQL CRUD operations]({%slug grid/asp.net-3.5-features/linq-to-sql---binding-and-automatic-crud-operations%})
- [Client binding to WCF and ADO.NET data services]({%slug grid/asp.net-3.5-features/client-binding-to-wcf-web-service-and-ado.net-data-service%})



