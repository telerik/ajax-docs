---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: panelbar/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



__RadPanelBar__supports binding to various types of data sources:

* [DataSet, DataTable, DataView]({%slug panelbar/data-binding/binding-to-datatable%})

* ASP 2.0 DataSource types including

* [Hierarchical DataSource components]({%slug panelbar/data-binding/binding-to-hierarchical-datasource%})

* [Table-based DataSource components]({%slug panelbar/data-binding/binding-to-table-based-datasource%})

* [ObjectDataSource]({%slug panelbar/data-binding/binding-to-object-based-datasources%})

* [Any object that implements the IEnumerable interface]({%slug panelbar/data-binding/binding-to-object-based-datasources%}).

To bind the panel to a data source, specify the data source as the value of the __DataSource__ property and call the __DataBind__ method. If you are using declarative data sources such as AccessDataSource or SiteMapDataSource, use the __DataSourceID__ property instead of the __DataSource__ property.

Usually, you also want to do one or more of the following:

1. Set __Text__, __Value__ or __NavigateUrl__ properties using:

1. __DataTextField__ - specifies the field of the data source that provides the __Text__ of the panel items. If this field does not contain string values, you can use the __DataTextFormatString__ property to ensure that field values are formatted the way you want.

1. __DataValueField__ - Specifies the field of the data source that provides the __Value__ of the panel items

1. __DataNavigateUrlField__ - Specifies the field of the data source that provides the __NavigateUrl__ of the panel items.

1. If the data source is not hierarchical, you can establish the hierarchy through an __ID__ to __ParentID__ relationship using:

1. __DataFieldID__ - The name of the field in the data source that acts as a key, uniquely identifying rows.

1. __DataFieldParentID__ - The name of the field in the data source that identifies the key field value of the parent item. The value of this field for root items should be __null__(table- or object-based data source) or the __default value__ of the corresponding value type used (object-based data source).

1. If the data source contains fields that map to other properties of panel items or to [custom attributes]({%slug panelbar/radpanelbar-items/custom-attributes%}), use the [ItemDataBound event]({%slug panelbar/server-side-programming/itemdatabound%}) to set those values:

1. As an alternative to using the __ItemDataBound__ event handler, you can use [DataBindings]({%slug panelbar/data-binding/using-databindings%}) to declaratively map fields from the data source to properties of panel items. The __DataBindings__ collection also lets you map fields differently, based on the level of items.



>tabbedCode

````C#
	
	    protected void RadPanelBar1_ItemDataBound(object sender, RadPanelBarEventArgs e) 
	    { 
	        e.Item.ToolTip = "Read more about " + (string)DataBinder.Eval(e.Item.DataItem, "Text"); 
	    }
	
````
````VB.NET
	
	    Protected Sub RadPanelBar1_ItemDataBound(ByVal sender As Object, ByVal e As RadPanelBarEventArgs)
	
	        e.Item.ToolTip = "Read more about " + DirectCast(DataBinder.Eval(e.Item.DataItem, "Text"), String)
	
	    End Sub
	
````
>end

## Hierarchical data

Typically, panels are hierarchical in structure. That is, they contain child panel items that are accessed through parent panel items. __RadPanelBar__ reconstructs this hierarchy differently, depending on the type of data source:

1. For inherently hierarchical data sources, __RadPanelBar__ will __automatically__ create the panel item hierarchy. Such data sources include

* XmlDataSource

* SiteMapDataSource

1. For table-structured data sources, __RadPanelBar__ uses the __ID__ to __ParentID__ relationship to establish a hierarchy. Such data sources include

* DataSet, DataTable, and DataView

* SqlDataSource

* AccessDataSource

1. For object-based data sources, __RadPanelBar__ uses the __ID__ to __ParentID__ relationship to establish a hierarchy. Such data sources include

* ObjectDataSource

* LinqDataSource

* Any class that implements the __IEnumerable__ interface such as List, Array, ArrayList, etc.

## Appending Data Bound Items

__RadPanelBar__ exposes the __AppendDataBoundItems__ property __(False__ by default). If you bind the panel using the __DataBind__ method, all panel items are automatically cleared.

Setting __AppendDataBoundItems__ to __True__ preserves the items that are already present in the panel. This lets you bind __RadPanelBar__ to multiple data sources or use both unbound and bound modes.

## Binding depth

__RadPanelBar__exposes the __MaxDataBindDepth__ property. This property is used to determine the binding depth. If for example you want to bind only the first two levels of the panel bar, you should set this property to __2__. The default value of the __MaxDataBindDepth__ property is __-1__, which means that all items will be bound. Marking the panel bar instance with __MaxDataBindDepth="0"__ will NOT bind any items.

## Using Templates with Data-bound Items

You can use [templates]({%slug panelbar/templates/overview%}) with a data-bound panel. To bind template items to column values, use DataBinder.Eval expressions in the template's definition:

````C#
	    <%# DataBinder.Eval(Container.DataItem, "ColumnName") %>
````



Note that you use Container.DataItem to access the panel item when it is in a bound mode. The panel item must already be bound before template binding can work.

# See Also

 * [Declaring Items Statically at Designtime]({%slug panelbar/radpanelbar-items/declaring-items-statically-at-designtime%})

 * [Loading Items from XML]({%slug panelbar/radpanelbar-items/loading-items-from-xml%})

 * [Working With Items at the Server]({%slug panelbar/radpanelbar-items/working-with-items-at-the-server%})

 * [Working With Items at the Client]({%slug panelbar/radpanelbar-items/working-with-items-at-the-client%})

 * [DataBinding Expressions]({%slug panelbar/templates/databinding-expressions%})
