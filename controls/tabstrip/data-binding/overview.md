---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: tabstrip/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



__RadTabStrip__ supports binding to various types of data sources:

* [DataSet, DataTable, DataView]({%slug tabstrip/data-binding/binding-to-datatable%})

* ASP 2.0 DataSource types including

* [Hierarchical DataSource components]({%slug tabstrip/data-binding/binding-to-hierarchical-datasource-components%})

* [Table-based DataSource components]({%slug tabstrip/data-binding/binding-to-table-based-datasource-components%})

* [ObjectDataSource]({%slug tabstrip/data-binding/binding-to-object-based-data-sources%})

* [Any object that implements the IEnumerable interface]({%slug tabstrip/data-binding/binding-to-object-based-data-sources%}).

To bind the tab strip to a data source, specify the data source as the value of the__DataSource__ property and call the __DataBind__ method. If you are using declarative data sources such as __AccessDataSource__ or __SiteMapDataSource__, use the __DataSourceID__ property instead of the __DataSource__ property.

Usually, you also want to do one or more of the following:

1. Set __Text__, __Value__ or __NavigateUrl__ properties using:

1. __DataTextField__ - specifies the field of the data source that provides the __Text__ of the tabs. If this field does not contain string values, you can use the __DataTextFormatString__ property to ensure that field values are formatted the way you want

1. __DataValueField__ - Specifies the field of the data source that provides the __Value__ of the tabs

1. __DataNavigateUrlField__ - Specifies the field of the data source that provides the __NavigateUrl__ of the tabs

1. If the data source is not hierarchical, you can establish the hierarchy through an __ID__ to __ParentID__ relationship using:

1. __DataFieldID__ - The name of the field in the data source that acts as a key, uniquely identifying rows.

1. __DataFieldParentID__ - The name of the field in the data source that identifies the key field value of the parent tab. The value of this field for root items should be __null__(table- or object-based data source) or the __default value__ of the corresponding value type used (object-based data source).

1. If the data source contains fields that map to other properties of tabs or to [custom attributes]({%slug tabstrip/tabs/custom-attributes%}), use the __[TabDataBound]({%slug tabstrip/server-side-programming/tabdatabound%})__ event to set those values:

>tabbedCode

````C#
	void RadTabStrip1_TabDataBound(object sender, RadTabStripEventArgs e)
	{
	   e.Tab.ToolTip = "Read more about" + (string)DataBinder.Eval(e.Tab.DataItem, "Text");
	  
	} 
				
````
````VB.NET
	Private Sub RadTabStrip1_TabDataBound(ByVal sender As Object, ByVal e As RadTabStripEventArgs)
	    e.Tab.ToolTip = "Read more about" + DirectCast(DataBinder.Eval(e.Tab.DataItem, "Text"), String)
	End Sub 
				
````
>end

1. As an alternative to using the __TabDataBound__ event handler, you can use [DataBindings]({%slug tabstrip/data-binding/using-databindings%}) to declaratively map fields from the data source to properties of the tabs. The __DataBindings__ collection also lets you map fields differently, based on the level of tabs.

## Hierarchical data

Tab strips can be hierarchical in structure. That is, they contain child tabs that are accessed through parent tabs. RadTabStrip reconstructs this hierarchy differently, depending on the type of data source:

1. For inherently hierarchical data sources, RadTabStrip will __automatically__ create the tab hierarchy. Such data sources include

* XmlDataSource

* SiteMapDataSource

1. For table-structured data sources, RadTabStrip uses the __ID__ to __ParentID__ relationship to establish a hierarchy. Such data sources include

* DataSet, DataTable, and DataView

* SqlDataSource

* AccessDataSource

1. For object-based data sources, RadTabStrip uses the __ID__ to __ParentID__ relationship to establish a hierarchy. Such data sources include

* ObjectDataSource

* LinqDataSource

* Any class that implements the __IEnumerable__ interface such as List, Array, ArrayList, etc.

## Appending Data Bound Items

__RadTabStrip__ exposes the __AppendDataBoundItems__ property __(False__ by default). If you bind the tab strip using the __DataBind__ method, all tabs are automatically cleared.

Setting __AppendDataBoundItems__ to __True__ preserves the tabs that are already present in the tab strip. This lets you bind __RadTabStrip__ to multiple data sources or use both unbound and bound modes.

## Binding depth

RadTabStrip exposes the __MaxDataBindDepth__ property. This property is used to determine the binding depth. If for example you want to bind only the first two levels of the tab strip, you should set this property to __2__. The default value of the __MaxDataBindDepth__ property is __-1__, which means that all tabs will be bound. Marking the tab strip instance with __MaxDataBindDepth="0"__ will NOT bind any tabs.

## Using Templates with Data-bound Items

You can use [templates]({%slug tabstrip/templates/overview%}) with a data-bound tab strip. To bind template tabs to column values, use DataBinder.Eval expressions in the template's definition:

````ASPNET
	     
		<%# DataBinder.Eval(Container.DataItem, "ColumnName") %>
				
````



Note that you use __Container.DataItem__ to access the tab when it is in a bound mode. The tab must already be bound before template binding can work.

For live examples of data-binding __RadTabStrip__, see [Declarative Data Sources](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/DeclarativeDataSources/DefaultCS.aspx) and [Hierarchical Data Binding](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/HierarchicalBinding/DefaultCS.aspx).

# See Also

 * [Binding to Object-Based Data Sources]({%slug tabstrip/data-binding/binding-to-object-based-data-sources%})

 * [Binding to DataTable]({%slug tabstrip/data-binding/binding-to-datatable%})

 * [Binding to Table-Based DataSource Components]({%slug tabstrip/data-binding/binding-to-table-based-datasource-components%})

 * [Binding to Hierarchical DataSource Components]({%slug tabstrip/data-binding/binding-to-hierarchical-datasource-components%})

 * [Using DataBindings]({%slug tabstrip/data-binding/using-databindings%})
