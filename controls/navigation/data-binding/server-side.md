---
title: Server-side
page_title: Server-side | UI for ASP.NET AJAX Documentation
description: Server-side
slug: navigation/data-binding/server-side
tags: server-side
published: True
position: 0
---

# Server-side



## 

__RadNavigation__ supports binding to various types of data sources:

* DataSet, DataTable, DataView

* ASP 2.0 DataSource types including

* Hierarchical DataSource components

* Table-based DataSource components

* [ObjectDataSource]({%slug navigation/data-binding/binding-to-object-based-data-sources%})

* Any object that implements the IEnumerable interface.

To bind the Navigation to a data source, specify the data source as the value of the __DataSource__ property and call the __DataBind__ method.If you are using declarative data sources such as AccessDataSource or SiteMapDataSource, use the __DataSourceID__ property instead of the __DataSource__property.

Usually, you also want to do one or more of the following:

1. Set __Text__, __Value__ or __NavigateUrl__ properties using:

1. __DataTextField__ - specifies the field of the data source that provides the __Text__ of the navigation nodes.If this field does not contain string values, you can use the __DataTextFormatString__ property to ensure that field values are formatted the way you want.

1. __DataNavigateUrlField__ - Specifies the field of the data source that provides the __NavigateUrl__ of the navigation nodes.

1. If the data source is not hierarchical, you can establish the hierarchy through an __ID__ to __DataFieldParentID__ relationship using:

1. __DataFieldParentID__ - The name of the field in the data source that identifies the key field value of the parent node.The value of this field for root nodes should be __null__(table- or object-based data source) or the __default value__ of thecorresponding value type used (object-based data source).

>tabbedCode

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
>end

# See Also

 * [Binding to Object-Based Data Sources]({%slug navigation/data-binding/binding-to-object-based-data-sources%})
