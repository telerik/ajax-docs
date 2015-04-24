---
title: Overview
page_title: Data Binding Overview | RadMenu for ASP.NET AJAX Documentation
description: Overview
slug: menu/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



__RadMenu__supports binding to various types of data sources:

* [OData]({%slug menu/data-binding/binding-to-odata%})

* [DataSet, DataTable, DataView]({%slug menu/data-binding/binding-to-datatable%})

* ASP 2.0 DataSource types including

* [Hierarchical DataSource components]({%slug menu/data-binding/binding-to-hierarchical-datasource%})

* [Table-based DataSource components]({%slug menu/data-binding/binding-to-table-based-datasource%})

* [ObjectDataSource]({%slug menu/data-binding/binding-to-object-based-data-sources%})

* [Any object that implements the IEnumerable interface]({%slug menu/data-binding/binding-to-object-based-data-sources%}).

To bind the menu to a data source, specify the data source as the value of the__DataSource__ property and call the __DataBind__ method. If you are using declarative data sources such as AccessDataSource or SiteMapDataSource, use the __DataSourceID__ property instead of the __DataSource__ property.

Usually, you also want to do one or more of the following:

1. Set __Text__, __Value__ or __NavigateUrl__ properties using:

1. __DataTextField__ - specifies the field of the data source that provides the __Text__ of the menu items. If this field does not contain string values, you can use the __DataTextFormatString__ property to ensure that field values are formatted the way you want.

1. __DataValueField__ - Specifies the field of the data source that provides the __Value__ of the menu items

1. __DataNavigateUrlField__ - Specifies the field of the data source that provides the __NavigateUrl__ of the menu items.

1. If the data source is not hierarchical, you can establish the hierarchy through an __ID__ to __ParentID__ relationship using:

1. __DataFieldID__ - The name of the field in the data source that acts as a key, uniquely identifying rows.

1. __DataFieldParentID__ - The name of the field in the data source that identifies the key field value of the parent item. The value of this field for root items should be __null__(table- or object-based data source) or the __default value__ of the corresponding value type used (object-based data source).

1. If the data source contains fields that map to other properties of menu items or to [custom attributes]({%slug menu/radmenu-items/custom-attributes%}), use the __[ItemDataBound event]({%slug menu/server-side-programming/itemdatabound%})__ to set those values:



````C#
	    protected void RadMenu1_ItemDataBound(object sender, Telerik.Web.UI.RadMenuEventArgs e) 
	    { 
	        e.Item.ToolTip = "Read more about " + (string)DataBinder.Eval(e.Item.DataItem, "Text");
	    }
````
````VB.NET
	    Protected Sub RadMenu1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadMenuEventArgs) Handles RadMenu1.ItemDataBound
	        e.Item.ToolTip = "Read more about " + _  CStr(DataBinder.Eval(e.Item.DataItem, "Text"))
	    End Sub
````


1. As an alternative to using the __ItemDataBound__ event handler, you can use [DataBindings]({%slug menu/data-binding/using-databindings%}) to declaratively map fields from the data source to properties of menu items. The __DataBindings__ collection also lets you map fields differently, based on the level of items.

## Hierarchical data

Typically, menus are hierarchical in structure. That is, they contain child menu items that are accessed through parent menu items. RadMenu reconstructs this hierarchy differently, depending on the type of data source:

1. For inherently hierarchical data sources, RadMenu will __automatically__ creates the menu item hierarchy. Such data sources include

* XmlDataSource

* SiteMapDataSource

1. For table-structured data sources, RadMenu uses the __ID__ to __ParentID__ relationship to establish a hierarchy. Such data sources include

* DataSet, DataTable, and DataView

* SqlDataSource

* AccessDataSource

1. For object-based data sources, RadMenu uses the __ID__ to __ParentID__ relationship to establish a hierarchy. Such data sources include

* ObjectDataSource

* LinqDataSource

* Any class that implements the __IEnumerable__ interface such as List, Array, ArrayList, etc.

## Appending Data Bound Items

__RadMenu__ exposes the __AppendDataBoundItems__ property __(False__ by default). If you bind the menu using the __DataBind__ method, all menu items are automatically cleared.

Setting __AppendDataBoundItems__ to __True__ preserves the items that are already present in the menu. This lets you bind __RadMenu__ to multiple data sources or use both unbound and bound modes.

## Binding depth

RadMenu exposes the __MaxDataBindDepth__ property. This property is used to determine the binding depth. If for example you want to bind only the first two levels of the menu, you should set this property to __2__. The default value of the __MaxDataBindDepth__ property is __-1__, which means that all items will be bound. Marking the menu instance with __MaxDataBindDepth="0"__ will NOT bind any items.

## Using Templates with Data-bound Items

You can use [templates]({%slug menu/templates/overview%}) with a data-bound menu. To bind template items to column values, use DataBinder.Eval expressions in the template's definition:

````ASPNET
	    <%# DataBinder.Eval(Container.DataItem,  "ColumnName") %>
````



Note that you use Container.DataItem to access the menu item when it is in a bound mode. The menu item must already be bound before template binding can work.

For live examples of data-binding __RadMenu__, see [Declarative Data Sources](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/DeclarativeDataSources/DefaultCS.aspx) and [Hierarchical Data Binding](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/HierarchicalBinding/DefaultCS.aspx).

# See Also

 * [Declaring Items Statically at Design Time]({%slug menu/radmenu-items/declaring-items-statically-at-design-time%})

 * [Loading Items from XML]({%slug menu/radmenu-items/loading-items-from-xml%})

 * [Web Service Binding]({%slug menu/data-binding/web-service-binding%})

 * [Working With Items at Server-side]({%slug menu/radmenu-items/working-with-items-at-server-side%})

 * [Working With Items at Client-side]({%slug menu/radmenu-items/working-with-items-at-client-side%})

 * [DataBinding expressions]({%slug menu/templates/databinding-expressions%})
