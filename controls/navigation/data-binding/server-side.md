---
title: Server-side
page_title: Server-side - RadNavigation
description: Check our Web Forms article about Server-side.
slug: navigation/data-binding/server-side
tags: server-side
published: True
position: 0
---

# Server-side

## 

**RadNavigation** supports binding to various types of data sources:

* DataSet, DataTable, DataView

* ASP 2.0 DataSource types including

* Hierarchical DataSource components

* Table-based DataSource components

* [ObjectDataSource]({%slug navigation/data-binding/binding-to-object-based-data-sources%})

* Any object that implements the IEnumerable interface.

To bind the Navigation to a data source, specify the data source as the value of the **DataSource** property and call the **DataBind** method.If you are using declarative data sources such as AccessDataSource or SiteMapDataSource, use the **DataSourceID** property instead of the **DataSource** property.

Usually, you also want to do one or more of the following:

1. Set **Text** or **NavigateUrl** properties using:

1. **DataTextField** - specifies the field of the data source that provides the **Text** of the navigation nodes.If this field does not contain string values, you can use the **DataTextFormatString** property to ensure that field values are formatted the way you want.

1. **DataNavigateUrlField** - Specifies the field of the data source that provides the **NavigateUrl** of the navigation nodes.

1. If the data source is not hierarchical, you can establish the hierarchy through an **ID** to **DataFieldParentID** relationship using:

1. **DataFieldParentID** - The name of the field in the data source that identifies the key field value of the parent node.The value of this field for root nodes should be **null**(table- or object-based data source) or the **default value** of thecorresponding value type used (object-based data source).


````C#
protected void RadNavigation1_NodeDataBound(object sender, NavigationNodeEventArguments e)
{
	e.Node.ToolTip = "Read more about " + (string)DataBinder.Eval(e.Node.DataItem, "Text");
	if (e.Node.Text == "Home")
	{
		e.Node.Selected = true;
	}
}
````
````VB.NET
Protected Sub RadNavigation1_NodeDataBound(sender As Object, e As NavigationNodeEventArguments)
	e.Node.ToolTip = Convert.ToString("Read more about ") & DirectCast(DataBinder.Eval(e.Node.DataItem, "Text"), String)
	If e.Node.Text = "Home" Then
		e.Node.Selected = True
	End If
End Sub
````

# See Also

 * [Binding to Object-Based Data Sources]({%slug navigation/data-binding/binding-to-object-based-data-sources%})
