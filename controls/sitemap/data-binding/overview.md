---
title: Overview
page_title: Data Binding Overview | RadSiteMap for ASP.NET AJAX Documentation
description: Overview
slug: sitemap/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



## 

**RadSiteMap** supports binding to various types of data sources:

* SiteMapDataSource

* Hierarchical DataSource components

To bind the **RadSiteMap** to a data source, specify the data source as the value of the**DataSource** property and call the **DataBind** method. If you are using declarative data sources such as SiteMapDataSource, use the **DataSourceID** property instead of the DataSource property.

Usually, you also want to do one or more of the following:

1. Set **Text** or **NavigateUrl** properties using:

* **DataTextField** - specifies the field of the data source that provides the Text of the nodes.

* **DataNavigateUrlField** - specifies the field of the data source that provides the **NavigateUrl** of the nodes.

2. If the data source is not hierarchical, you can establish the hierarchy through an **ID** to **ParentID** relationship using:

* **DataFieldID** - The name of the field in the data source that acts as a key, uniquely identifying rows. **DataFieldParentID** - The name of the field in the data source that identifies the key field value of the parent node. The value of this field for root nodes should be **null** (table- or object-based data source) or the default value of the corresponding value type used (object-based data source).

3. If the data source contains fields that map to other properties of the nodes or to custom attributes, use the [NodeDataBound]({%slug sitemap/server-side-programming/nodedatabound%}) event to set those values:





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

