---
title: Overview
page_title: Data Binding Overview | RadPanelBar for ASP.NET AJAX Documentation
description: Overview
slug: panelbar/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



**RadPanelBar** supports binding to various types of data sources:

* [DataSet, DataTable, DataView]({%slug panelbar/data-binding/binding-to-datatable%})

* ASP 2.0 DataSource types including

	* [Hierarchical DataSource components]({%slug panelbar/data-binding/binding-to-hierarchical-datasource%})

	* [Table-based DataSource components]({%slug panelbar/data-binding/binding-to-table-based-datasource%})

	* [ObjectDataSource]({%slug panelbar/data-binding/binding-to-object-based-datasources%})

* [Any object that implements the IEnumerable interface]({%slug panelbar/data-binding/binding-to-object-based-datasources%}).

To bind the panel to a data source, specify the data source as the value of the **DataSource** property and call the **DataBind** method. If you are using declarative data sources such as AccessDataSource or SiteMapDataSource, use the **DataSourceID** property instead of the **DataSource** property.

Usually, you also want to do one or more of the following:

1. Set **Text**, **Value** or **NavigateUrl** properties using:

1. **DataTextField** - specifies the field of the data source that provides the **Text** of the panel items. If this field does not contain string values, you can use the **DataTextFormatString** property to ensure that field values are formatted the way you want.

1. **DataValueField** - Specifies the field of the data source that provides the **Value** of the panel items

1. **DataNavigateUrlField** - Specifies the field of the data source that provides the **NavigateUrl** of the panel items.

1. If the data source is not hierarchical, you can establish the hierarchy through an **ID** to **ParentID** relationship using:

1. **DataFieldID** - The name of the field in the data source that acts as a key, uniquely identifying rows.

1. **DataFieldParentID** - The name of the field in the data source that identifies the key field value of the parent item. The value of this field for root items should be **null**(table- or object-based data source) or the **default value** of the corresponding value type used (object-based data source).

1. If the data source contains fields that map to other properties of panel items or to [custom attributes]({%slug panelbar/radpanelbar-items/custom-attributes%}), use the [ItemDataBound event]({%slug panelbar/server-side-programming/itemdatabound%}) to set those values:

1. As an alternative to using the **ItemDataBound** event handler, you can use [DataBindings]({%slug panelbar/data-binding/using-databindings%}) to declaratively map fields from the data source to properties of panel items. The **DataBindings** collection also lets you map fields differently, based on the level of items.





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


## Hierarchical data

Typically, panels are hierarchical in structure. That is, they contain child panel items that are accessed through parent panel items. **RadPanelBar** reconstructs this hierarchy differently, depending on the type of data source:

1. For inherently hierarchical data sources, **RadPanelBar** will **automatically** create the panel item hierarchy. Such data sources include
	* XmlDataSource
	* SiteMapDataSource

2. For table-structured data sources, **RadPanelBar** uses the **ID** to **ParentID** relationship to establish a hierarchy. Such data sources include
	* DataSet, DataTable, and DataView
	* SqlDataSource
	* AccessDataSource

3. For object-based data sources, **RadPanelBar** uses the **ID** to **ParentID** relationship to establish a hierarchy. Such data sources include
	* ObjectDataSource
	* LinqDataSource
	* Any class that implements the **IEnumerable** interface such as List, Array, ArrayList, etc.

## Appending Data Bound Items

**RadPanelBar** exposes the **AppendDataBoundItems** property **(False** by default). If you bind the panel using the **DataBind** method, all panel items are automatically cleared.

Setting **AppendDataBoundItems** to **True** preserves the items that are already present in the panel. This lets you bind **RadPanelBar** to multiple data sources or use both unbound and bound modes.

## Binding depth

**RadPanelBar** exposes the **MaxDataBindDepth** property. This property is used to determine the binding depth. If for example you want to bind only the first two levels of the panel bar, you should set this property to **2**. The default value of the **MaxDataBindDepth** property is **-1**, which means that all items will be bound. Marking the panel bar instance with **MaxDataBindDepth="0"** will NOT bind any items.

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
