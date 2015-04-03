---
title: Declarative DataSource
page_title: Declarative DataSource | UI for ASP.NET AJAX Documentation
description: Declarative DataSource
slug: grid/data-binding/understanding-data-binding/server-side-binding/declarative-datasource
tags: declarative,datasource
published: True
position: 2
---

# Declarative DataSource



The simplest method of data-binding a __RadGrid__ control is to use declarative data sources. The following steps describe how to use declarative data binding with a __RadGrid__:

1. Create and configure the data source controls. __RadGrid__ can be bound to any ASP.NET data source control, including __SqlDataSource__, __AccessDataSource__, __ObjectDataSource__, __XmlDataSource__, __EntityDataSource__, __OpenAccessDataSource,____LinqDataSource__ and __ObjectContainerDataSource__.

1. At design time, Assign the __DataSourceID__ property of the RadGrid (and of any detail tables) to the desired data source control.

1. For hierarchical grids, set the __DataKeyNames__ property for any parent table views.

1. For hierarchical grids, set the __ParentTableRelation__ property to specify the linking fields between the parent and detail tables.

These steps are described in more detail below:

## Create and configure the DataSource controls

Before binding the __RadGrid__ control, you need to create a separate __DataSource__ control for each table in the grid (Master table and all detail tables). Thus, for example, if you have a three level hierarchy, you need three DataSource controls.

The data source controls for detail tables must use parameters to select only those records appropriate to a specific record of the parent table. The following example shows how this is done:

````ASPNET
	  <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers" runat="server">
	  </asp:SqlDataSource>
	  <asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
	    runat="server">
	    <SelectParameters>
	      <asp:SessionParameter Name="CustomerID" SessionField="CustomerID" Type="string" />
	    </SelectParameters>
	  </asp:SqlDataSource>
	  <asp:SqlDataSource ID="SqlDataSource3" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Order Details] where OrderID = @OrderID"
	    runat="server">
	    <SelectParameters>
	      <asp:SessionParameter Name="OrderID" SessionField="OrderID" Type="Int32" />
	    </SelectParameters>
	  </asp:SqlDataSource>
````



You can easily generate this declaration using the __Configure Data Source__ wizard. You can launch the wizard by choosing __Configure Data Source__ from the Smart Tag of the DataSource component:

![Configure DataSource](images/grd_DataSourceControls_Setup.png)

For a tutorial that walks you through using the wizard to configure __SqlDataSource__ controls for a hierarchical grid, see [Tutorial: Building a Hierarchical Grid]({%slug grid/getting-started/building-a-hierarchical-grid%}).

## Assign the DataSourceID property

Once you have set up the data source controls, you need to pair each __GridTableView__ with the appropriate data source control. You must first assign a data source for the top-level table in the grid. To do this, set the __DataSourceID__ property of the __RadGrid__ control. You can do this using the __RadGrid__[ Smart Tag]({%slug grid/design-time-/smarttag%}), or in the __RadGrid__ Properties pane:

![SetDataSource](images/grd_DataSourceControls_SetDataS.png)

>caution You must set the __DataSourceID__ property for the __RadGrid__ object so that it is automatically bound on page load.
>


Each __GridTableView__ (including the __MasterTableView__ and any table views in the __DetailTables__ collection of another table view) also has a property __DataSourceID__. When you set the __DataSourceID__ property of the __RadGrid__ control, the __DataSourceID__ property of the __MasterTableView__ is automatically set as well.

In a hierarchical grid, you must set the __DataSourceID__ property for each of the detail tables. You can do this using the [RadGrid Configuration Manager]({%slug grid/design-time-/setting-radgrid%}), or in the __RadGrid__ properties pane.

Use the following steps when binding detail tables with the __RadGrid__ properties pane:

1. Choose the detail table to which you want to assign datasource.

1. Next, click on the General tab and select the __DataSource__ dropdown control.

1. Click on the desired datasource and the detail table will bound to it at run time.

![Rad Grid grd datasourcecontrols setdetailpng](images/RadGrid_grd_datasourcecontrols_setdetailpng.png)

## Set the DataKeyNames property on parent tables

For any table that acts as a parent table in a hierarchical grid, you must set the __DataKeyNames__ property of the corresponding __GridTableView__ object to include any key fields that are used to link detail tables to the parent table. These are the fields in the parent table that supply values for the parameters in the detail data sources.

Below is the scheme of the sample Northwind database. For our sample grid, the first level (__MasterTableView__) displays the Customers table. The second level displays the Orders table. It is related to its parent through CustomerID field. The third level is Order Details table and it is related to the second level through OrderID field.

![Northwind database schema](images/grd_NorthwindDatabase.gif)

Thus, the __MasterTableView__ must include the __CustomerID__ field in its __DataKeyNames__ property, because this field is used to link the Orders table to the master table view. The detail for the Orders table must include the __OrderID__ field in its __DataKeyNames__ property, because this field is used to link the Order Details table to the Orders table. The Order Details table is not a parent table, so you do not need to set its __DataKeyNames__ property.

## Set the ParentTableRelation property for each Detail TableView

For each detail table, you need to indicate which fields in the __DataSource__ for the detail correspond to which fields from the __DataSource__ of the parent table. This is done using the __ParentTableRelation__ property of the detail's __GridTableView__ object.

Still in the General tab, navigate to the __Parent Table relations__ and set the appropriate fields for the master and detail key fields.

![Rad Grid grd datasourcecontrols setrelatpng](images/RadGrid_grd_datasourcecontrols_setrelatpng.png)

For each field that links the detail table to its parent, you must add a __GridRelationFields__ object to the __ParentTableRelation__ collection. Each __GridRelationFields__ object has two properties:

* __DataKeyField__: the name of a field in the __DataSource__ of the detail table that is used to link to the parent table. This is the field whose value must match a parameter on the DataSource control.

* __MasterKeyField__: the name of a field in the __DataSource__ of the parent table that is used to define the link. This field must exist in the parent table's __DataSource__ and be listed in the __DataKeyNames__ property of the parent table view. (It need not be displayed in a column of the parent table view, however).

## The resulting declaration

The following declaration is the result of following the steps listed above:

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1">
	    <MasterTableView DataKeyNames="CustomerID" DataSourceID="SqlDataSource1">
	      <DetailTables>
	        <telerik:GridTableView runat="server" DataKeyNames="OrderID" DataSourceID="SqlDataSource2">
	          <ParentTableRelation>
	            <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
	          </ParentTableRelation>
	          <DetailTables>
	            <telerik:GridTableView runat="server" DataSourceID="SqlDataSource3">
	              <ParentTableRelation>
	                <telerik:GridRelationFields DetailKeyField="OrderID" MasterKeyField="OrderID" />
	              </ParentTableRelation>
	            </telerik:GridTableView>
	          </DetailTables>
	        </telerik:GridTableView>
	      </DetailTables>
	    </MasterTableView></telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers" runat="server">
	  </asp:SqlDataSource>
	  <asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
	    runat="server">
	    <SelectParameters>
	      <asp:SessionParameter Name="CustomerID" SessionField="CustomerID" Type="string" />
	    </SelectParameters>
	  </asp:SqlDataSource>
	  <asp:SqlDataSource ID="SqlDataSource3" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Order Details] where OrderID = @OrderID"
	    runat="server">
	    <SelectParameters>
	      <asp:SessionParameter Name="OrderID" SessionField="OrderID" Type="Int32" />
	    </SelectParameters>
	  </asp:SqlDataSource>
````


