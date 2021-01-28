---
title: Binding to Table-Based DataSource Components
page_title: Binding to Table-Based DataSource Components - RadSiteMap
description: Check our Web Forms article about Binding to Table-Based DataSource Components.
slug: sitemap/data-binding/binding-to-table-based-datasource-components
tags: binding,to,table-based,datasource,components
published: True
position: 2
---

# Binding to Table-Based DataSource Components

## 

Table-based **DataSource** components, such as **SqlDataSource** and **AccessDataSource** can be used to bind the **RadSiteMap** declaratively at design time. You can use the *ID-ParentID* relation to establish a hierarchy among the sitemap nodes.

To bind to a table-based DataSource component:

1. Drag the **DataSource** component from the toolbox onto the same page as your **RadSiteMap** component.

1. Configure the **DataSource** component to connect to the data.

1. Set the **DataSourceID** property of your **RadSiteMap** to the **ID** of the **DataSource** component you added in step 1.

1. Set the **DataTextField** and **DataNavigateUrlField** properties to indicate the columns of the database table that supply values for the **Text** and **NavigateUrl** properties of sitemap nodes.

1. Establish the sitemap hierarchy by setting the **DataFieldID** property to the key field for records, and the **DataFieldParentID** property to the field that gives the key field value of the parent node.

>note The **ParentID** of the root items must be **null** (N **othing** ). If for some reason the data source comes without null values for the ParentID column, use a query that returns the expected value (null). For example:
>SELECT ID, Text, IF(ParentID = 0, NULL, ParentID) FROM tblDat
>

1. Bind any additional properties of the menu items using the [NodeDataBound]({%slug sitemap/server-side-programming/nodedatabound%}) event


````C#
protected void RadSiteMap1_NodeDataBound(object sender, RadSiteMapNodeEventArgs e)
{ 
    DataRowView nodeData = e.Node.DataItem as DataRowView; 
    e.Node.ToolTip = nodeData["tooltip"].ToString(); 
}
````
````VB.NET
Protected Sub RadSiteMap1_NodeDataBound(ByVal sender As Object, ByVal e As RadSiteMapNodeEventArgs)
    Dim nodeData As DataRowView = TryCast(e.Node.DataItem, DataRowView)
    e.Node.ToolTip = nodeData("tooltip").ToString()
End Sub
````


The resulting declaration looks something like the following:

````ASPNET
<telerik:RadSiteMap runat="server" ID="RadSiteMap1" DataSourceID="SqlDataSource1"
    DataFieldID="id" DataFieldParentID="parentID" DataTextField="Targetname" DataNavigatUrlField="target"
    OnNodeDataBound="RadSiteMap1_NodeDataBound">
</telerik:RadSiteMap>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="Persist Security Info=False;Integrated Security=true;Initial Catalog=MyDB;server=(local)"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT id, Targetname, target, tooltip, parentId from SiteMapTable" />
````




