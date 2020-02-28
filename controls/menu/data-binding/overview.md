---
title: Data Binding Overview
page_title: Overview | RadMenu for ASP.NET AJAX Documentation
description: Overview
slug: menu/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview


**RadMenu** supports binding to various types of data sources:

* [OData]({%slug menu/data-binding/binding-to-odata%})

* [DataSet, DataTable, DataView]({%slug menu/data-binding/binding-to-datatable%})

* ASP 2.0 DataSource types including

* [Hierarchical DataSource components]({%slug menu/data-binding/binding-to-hierarchical-datasource%})

* [Table-based DataSource components]({%slug menu/data-binding/binding-to-table-based-datasource%})

* [ObjectDataSource]({%slug menu/data-binding/binding-to-object-based-data-sources%})

* [Any object that implements the IEnumerable interface]({%slug menu/data-binding/binding-to-object-based-data-sources%}).

To bind the menu to a data source, specify the data source as the value of the **DataSource** property and call the **DataBind** method. If you are using declarative data sources such as AccessDataSource or SiteMapDataSource, use the **DataSourceID** property instead of the **DataSource** property.

Usually, you also want to do one or more of the following:

1. Set **Text**, **Value** or **NavigateUrl** properties using:

1. **DataTextField** - specifies the field of the data source that provides the **Text** of the menu items. If this field does not contain string values, you can use the **DataTextFormatString** property to ensure that field values are formatted the way you want.

1. **DataValueField** - Specifies the field of the data source that provides the **Value** of the menu items

1. **DataNavigateUrlField** - Specifies the field of the data source that provides the **NavigateUrl** of the menu items.

1. If the data source is not hierarchical, you can establish the hierarchy through an **ID** to **ParentID** relationship using:

1. **DataFieldID** - The name of the field in the data source that acts as a key, uniquely identifying rows.

1. **DataFieldParentID** - The name of the field in the data source that identifies the key field value of the parent item. The value of this field for root items should be **null**(table- or object-based data source) or the **default value** of the corresponding value type used (object-based data source).

1. If the data source contains fields that map to other properties of menu items or to [custom attributes]({%slug menu/radmenu-items/custom-attributes%}), use the **[ItemDataBound event]({%slug menu/server-side-programming/itemdatabound%})** to set those values:

	**C#**
	
		protected void RadMenu1_ItemDataBound(object sender, Telerik.Web.UI.RadMenuEventArgs e) 
		{ 
			e.Item.ToolTip = "Read more about " + (string)DataBinder.Eval(e.Item.DataItem, "Text");
		}
		
	**VB.NET**
	
		Protected Sub RadMenu1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadMenuEventArgs) Handles RadMenu1.ItemDataBound
			e.Item.ToolTip = "Read more about " + _  CStr(DataBinder.Eval(e.Item.DataItem, "Text"))
		End Sub


1. As an alternative to using the **ItemDataBound** event handler, you can use [DataBindings]({%slug menu/data-binding/using-databindings%}) to declaratively map fields from the data source to properties of menu items. The **DataBindings** collection also lets you map fields differently, based on the level of items.

## Hierarchical data

Typically, menus are hierarchical in structure. That is, they contain child menu items that are accessed through parent menu items. RadMenu reconstructs this hierarchy differently, depending on the type of data source:

1. For inherently hierarchical data sources, RadMenu will **automatically** creates the menu item hierarchy. Such data sources include

* XmlDataSource

* SiteMapDataSource

1. For table-structured data sources, RadMenu uses the **ID** to **ParentID** relationship to establish a hierarchy. Such data sources include

* DataSet, DataTable, and DataView

* SqlDataSource

* AccessDataSource

1. For object-based data sources, RadMenu uses the **ID** to **ParentID** relationship to establish a hierarchy. Such data sources include

* ObjectDataSource

* LinqDataSource

* Any class that implements the **IEnumerable** interface such as List, Array, ArrayList, etc.

## Appending Data Bound Items

**RadMenu** exposes the **AppendDataBoundItems** property **(False** by default). If you bind the menu using the **DataBind** method, all menu items are automatically cleared.

Setting **AppendDataBoundItems** to **True** preserves the items that are already present in the menu. This lets you bind **RadMenu** to multiple data sources or use both unbound and bound modes.

## Binding depth

RadMenu exposes the **MaxDataBindDepth** property. This property is used to determine the binding depth. If for example you want to bind only the first two levels of the menu, you should set this property to **2**. The default value of the **MaxDataBindDepth** property is **-1**, which means that all items will be bound. Marking the menu instance with **MaxDataBindDepth="0"** will NOT bind any items.

## Using Templates with Data-bound Items

You can use [templates]({%slug menu/templates/overview%}) with a data-bound menu. To bind template items to column values, use DataBinder.Eval expressions in the template's definition:

````ASP.NET
<%# DataBinder.Eval(Container.DataItem,  "ColumnName") %>
````


Note that you use Container.DataItem to access the menu item when it is in a bound mode. The menu item must already be bound before template binding can work.

For live examples of data-binding **RadMenu**, see [Declarative Data Sources](https://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/DeclarativeDataSources/DefaultCS.aspx) and [Hierarchical Data Binding](https://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/HierarchicalBinding/DefaultCS.aspx).

# See Also

 * [Declaring Items Statically at Design Time]({%slug menu/radmenu-items/declaring-items-statically-at-design-time%})

 * [Loading Items from XML]({%slug menu/radmenu-items/loading-items-from-xml%})

 * [Web Service Binding]({%slug menu/data-binding/web-service-binding%})

 * [Working With Items at Server-side]({%slug menu/radmenu-items/working-with-items-at-server-side%})

 * [Working With Items at Client-side]({%slug menu/radmenu-items/working-with-items-at-client-side%})

 * [DataBinding expressions]({%slug menu/templates/databinding-expressions%})
