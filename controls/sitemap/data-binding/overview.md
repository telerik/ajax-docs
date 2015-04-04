---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: sitemap/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



## 

__RadSiteMap__ supports binding to various types of data sources:

* SiteMapDataSource

* Hierarchical DataSource components

To bind the __RadSiteMap__ to a data source, specify the data source as the value of the__DataSource__ property and call the __DataBind__ method. If you are using declarative data sources such as SiteMapDataSource, use the __DataSourceID__ property instead of the DataSource property.

Usually, you also want to do one or more of the following:

1. Set __Text__ or __NavigateUrl__ properties using:

* __DataTextField__ - specifies the field of the data source that provides the Text of the nodes.

* __DataNavigateUrlField__ - specifies the field of the data source that provides the __NavigateUrl__ of the nodes.

2. If the data source is not hierarchical, you can establish the hierarchy through an __ID__ to __ParentID__ relationship using:

* __DataFieldID__ - The name of the field in the data source that acts as a key, uniquely identifying rows. __DataFieldParentID__ - The name of the field in the data source that identifies the key field value of the parent node. The value of this field for root nodes should be __null__ (table- or object-based data source) or the default value of the corresponding value type used (object-based data source).

3. If the data source contains fields that map to other properties of the nodes or to custom attributes, use the [NodeDataBound]({%slug sitemap/server-side-programming/nodedatabound%}) event to set those values:



>tabbedCode

````C#
	    protected void RadSiteMap1_NodeDataBound(object sender, RadSiteMapNodeEventArgs e) 
	    { 
	        DataRowView nodeData = e.Node.DataItem as DataRowView; 
	        e.Node.ToolTip = nodeData["tooltipColumn"].ToString(); 
	    }
````
````VB.NET
	    Protected Sub RadSiteMap1_NodeDataBound(ByVal sender As Object, ByVal e As RadSiteMapNodeEventArgs)
	        Dim nodeData As DataRowView = TryCast(e.Node.DataItem, DataRowView)
	        e.Node.ToolTip = nodeData("tooltipColumn").ToString()
	    End Sub
````
>end
