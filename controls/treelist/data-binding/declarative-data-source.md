---
title: Declarative Data Source
page_title: Declarative Data Source | UI for ASP.NET AJAX Documentation
description: Declarative Data Source
slug: treelist/data-binding/declarative-data-source
tags: declarative,data,source
published: True
position: 1
---

# Declarative Data Source



## 

RadTreeList can be bound to the following ASP 2.x DataSource control types:

* SqlDataSource

* ObjectDataSource

* XmlDataSource

* AccessDataSource

All you need to do is set the DataSourceID property of the TreeList to the ID of the Data Sourcecontrol. Then you can use ASP.NET binding expressions (Eval or Bind) for the fields that will bevisualized in the control.

From Q2 2013 RadTreeList could be bound to the SiteMapDataSource. When binding to SiteMapDataSource controlyou can avoid setting the DataKeyNames and the ParentDataKeyNames because they are resolved internally dueto the nature of this datasource type.

Refer to the code snippet in the next paragraph:

````ASPNET
	    <telerik:RadTreeList runat="server" ID="TreeList1" DataSourceID="SqlDataSource1"
	        AutoGenerateColumns="false" AllowPaging="true" PageSize="3" DataKeyNames="EmployeeID"
	        ParentDataKeyNames="ReportsTo">
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
	    <telerik:RadTreeList runat="server" ID="TreeList2" AllowPaging="true" DataSourceID="XmlDataSource1"
	        PageSize="5" DataKeyNames="categoryID" ParentDataKeyNames="parentCategoryID"
	        AutoGenerateColumns="false">
	        <Columns>
	            <telerik:TreeListBoundColumn DataField="title" UniqueName="Title" HeaderText="Title">
	            </telerik:TreeListBoundColumn>
	        </Columns>
	    </telerik:RadTreeList>
	    <telerik:RadTreeList runat="server" ID="RadTreeList3" DataSourceID="ObjectDataSource1"
	        AllowPaging="true" PageSize="5" DataKeyNames="ID" ParentDataKeyNames="ParentID"
	        AutoGenerateColumns="false">
	        <Columns>
	            <telerik:TreeListBoundColumn DataField="Text" UniqueName="Text" HeaderText="Text">
	            </telerik:TreeListBoundColumn>
	        </Columns>
	    </telerik:RadTreeList>
	    <telerik:RadTreeList ID="RadTreeList4" runat="server" DataSourceID="SiteMapDataSource1" AutoGenerateColumns="false">
	        <Columns>
	            <telerik:TreeListBoundColumn DataField="Description" HeaderText="Description" UniqueName="Description" ></telerik:TreeListBoundColumn>
	            <telerik:TreeListBoundColumn DataField="Key" HeaderText="Key" UniqueName="Key"></telerik:TreeListBoundColumn>
	            <telerik:TreeListBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title"></telerik:TreeListBoundColumn>
	        </Columns>
	    </telerik:RadTreeList>
	    <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        ProviderName="System.Data.SqlClient" SelectCommand="SELECT EmployeeID, LastName, FirstName, Title, ReportsTo FROM Employees"
	        runat="server"></asp:SqlDataSource>
	    <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="TreeList.xml"></asp:XmlDataSource>
	    <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="GetSiteData"
	        TypeName="Telerik.Web.Examples.SiteDataItem"></asp:ObjectDataSource>
	    <asp:SiteMapDataSource ID="SiteMapDataSource1" runat="server" />
````


