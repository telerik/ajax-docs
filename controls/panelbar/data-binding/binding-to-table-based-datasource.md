---
title: Binding to Table-Based DataSource
page_title: Binding to Table-Based DataSource | UI for ASP.NET AJAX Documentation
description: Binding to Table-Based DataSource
slug: panelbar/data-binding/binding-to-table-based-datasource
tags: binding,to,table-based,datasource
published: True
position: 3
---

# Binding to Table-Based DataSource



## 

Table-based __DataSource__ components, such as __SqlDataSource__ and __AccessDataSource__ can be used to bind the panel declaratively at design time. As with [binding to a DataSet, DataTable, or DataView]({%slug panelbar/data-binding/binding-to-datatable%}), you can use the *ID-ParentID* relation to establish a hierarchy among the panel items.

>note The[Binding to a Data Source]({%slug panelbar/getting-started/binding-to-a-data-source%})tutorial gives step-by-step instructions for binding __RadPanelBar__ to an __AccessDataSource__ .
>


To bind to a table-based DataSource component:

1. Drag the __DataSource__ component from the toolbox onto the same page as your __RadPanelBar__ component.

1. Configure the __DataSource__ component to connect to the data.

1. Set the __DataSourceID__ property of your __RadPanelBar__ to the __ID__ of the __DataSource__ component you added in step 1.

1. Set the __DataTextField__, __DataValueField__, and __DataNavigateUrlField__ properties to indicate the columns of the database table that supply values for the __Text__, __Value__, and __NavigateUrl__ properties of panel items.

1. Establish the panel hierarchy by setting the __DataFieldID__ property to the key field for records, and the __DataFieldParentID__ property to the field that gives the key field value of the parent item.

>caution The __ParentID__ of the root items must be __null__ ( __nothing__ ). If for some reason the data source comes without null values for the ParentID column, use a query that returns the expected value (null). For example:
>SELECT ID, Text, IF(ParentID = 0, NULL, ParentID) FROM tblDat
>


1. Bind any additional properties of the panel items using the [ItemDataBound event]({%slug panelbar/server-side-programming/itemdatabound%}): 

>tabbedCode

````C#
	
	    protected void RadPanelBar1_ItemDataBound(object sender, Telerik.Web.UI.RadPanelBarEventArgs e) 
	    { 
	        e.Item.ToolTip = (string)DataBinder.Eval(e.Item.DataItem, "ToolTip"); 
	    }
	
````
````VB.NET
	
	    Protected Sub RadPanelBar1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadPanelBarEventArgs) Handles RadPanelBar1.ItemDataBound
	        e.Item.ToolTip = CStr(DataBinder.Eval(e.Item.DataItem, "ToolTip"))
	    End Sub
	
````
>end

The resulting declaration looks something like the following:

````ASPNET
	    <telerik:RadPanelBar
	      runat="server"
	      ID="RadPanelBar1"
	      DataSourceID="SqlDataSource1"
	      DataFieldID="id"
	      DataFieldParentID ="parentID"
	      DataTextField="Targetname"
	      DataNavigatUrlField ="target"
	      OnItemDataBound ="RadPanelBar1_ItemDataBound">
	</telerik:RadPanelBar>
	<asp:SqlDataSource
	      runat="server"
	      ID="SqlDataSource1"
	      ConnectionString ="Persist Security Info=False;Integrated Security=true;Initial Catalog=MyDB;server=(local)"
	      ProviderName="System.Data.SqlClient"
	      SelectCommand="SELECT id, Targetname, target, tooltip, parentId from panelTable" />
````



# See Also

 * [Overview]({%slug panelbar/data-binding/overview%})

 * [Using DataBindings]({%slug panelbar/data-binding/using-databindings%})

 * [Binding to Hierarchical DataSource]({%slug panelbar/data-binding/binding-to-hierarchical-datasource%})

 * [Binding to Object-Based DataSources]({%slug panelbar/data-binding/binding-to-object-based-datasources%})
