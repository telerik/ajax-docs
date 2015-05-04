---
title: NodeDataBound
page_title: NodeDataBound | RadSiteMap for ASP.NET AJAX Documentation
description: NodeDataBound
slug: sitemap/server-side-programming/nodedatabound
tags: nodedatabound
published: True
position: 0
---

# NodeDataBound

## 

The **NodeDataBound** fires for every Node that is bound to data. Use the **RadSiteMapNodeEventArgs** to access the properties of the bound Node. Use the Node's **DataItem** property to access the underlying object or data row being bound to.

Binding to a **database**:

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


Binding to **SiteMapDataSource**:

````C#
protected void RadSiteMap1_NodeDataBound(object sender, Telerik.Web.UI.RadSiteMapNodeEventArgs e)
{ 
    SiteMapNode sitemapNode = e.Node.DataItem as SiteMapNode; 
    e.Node.ToolTip = sitemapNode.Title + " - " + sitemapNode.Url; 
}
````
````VB.NET
Protected Sub RadSiteMap1_NodeDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadSiteMapNodeEventArgs)
    Dim sitemapNode As SiteMapNode = TryCast(e.Node.DataItem, SiteMapNode)
    e.Node.ToolTip = sitemapNode.Title + " - " + sitemapNode.Url
End Sub
````

