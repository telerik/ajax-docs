---
title: Entity Framework - Binding and CRUD Operations
page_title: Entity Framework - Binding and CRUD Operations | UI for ASP.NET AJAX Documentation
description: Entity Framework - Binding and CRUD Operations
slug: grid/asp.net-3.5-features/entity-framework---binding-and-crud-operations
tags: entity,framework,-,binding,and,crud,operations
published: True
position: 1
---

# Entity Framework - Binding and CRUD Operations



## 

The ASP.NET 3.5 framework introduces the ADO.NET Entity Framework which exposes a brand new way to supply data and structure a data access layer (DAL) to your ASP.NET web sites/web application projects.

The ADO.NET Entity Framework is designed to support data-centric applications and services, and provides a platform for programming against data that raises the level of abstraction from the logical relational level to the conceptual level. By enabling developers to work with data at a greater level of abstraction, the Entity Framework supports code that is independent of any particular data storage engine or relational schema. For more information, see [Introducing the Entity Framework](http://msdn.microsoft.com/en-us/library/bb399567.aspx).

The Entity Framework supports an [Entity Data Model](http://msdn.microsoft.com/en-us/library/bb387122.aspx) (EDM) for defining data at both the storage and conceptual level and a mapping between the two. It also enables developers to program directly against the data types defined at the conceptual level as common language runtime (CLR) objects. The Entity Framework provides tools to generate an EDM and the related CLR objects based on an existing database. This reduces much of the data access code that used to be required to create object-based data application and services, and makes it faster to create object-oriented data applications and services from an existing database.

Below is an MSDN tutorial which include step by step directions how to use the ADO.NET Entity Framework:

[ Entity Framework getting started tutorial ](http://msdn.microsoft.com/en-us/library/bb386876.aspx)

RadGrid for ASP.NET AJAX exposes declarative way to binding itself to EntityDataSource (similar to other ASP.NET 2.x/3.x data source controls) which is presented in the [following online demo](http://demos.telerik.com/aspnet-ajax/grid/examples/automaticoperations/efdatabinding/defaultcs.aspx)of the product. Additionally, the grid from the example supports automatic data editing operations as well as paging and sorting. The main points are to configure the EntityDatraSource properties accordingly.

To enable automatic editing at data source level, set the *AllowAutomaticUpdates/AllowAutomaticInserts/AllowAutomaticDeletes* properties of the grid instance and the corresponding *EnableUpdate/EnableInsert/EnableDelete* properties of the EntityDataSource to true.

Here are the code snippets from the example referenced in the previous paragraph:

````ASPNET
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
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="EntityDataSourceCustomers"
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
	                editor.TextBoxControl.Enabled = false;            }
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

