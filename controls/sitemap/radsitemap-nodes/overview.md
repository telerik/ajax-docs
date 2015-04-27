---
title: Overview
page_title: RadSiteMap Nodes Overview | RadSiteMap for ASP.NET AJAX Documentation
description: Overview
slug: sitemap/radsitemap-nodes/overview
tags: overview
published: True
position: 0
---

# RadSiteMap Nodes Overview



__RadSiteMap__ is made up of nodes. They are of type __RadSiteMapNode__.

You can easily add/edit/delete nodes inline, in design-time or in code behind. In addition, you can bind the RadSiteMap to a datasource.

## The important properties of RadSiteMapNode

* __Text__ - the string that the user sees for the node

* __NavigateUrl__ - the URL to redirect to.

* __Target__ - the target window or frame in which to display the Web page content associated with the current node. The Web page is specified by __NavigateUrl__ property.

* __ImageUrl__ - the image that will be displayed on the left of the node's Text

* __ToolTip__ - the text of the tooltip that appears when the user hovers the mouse over the node. Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted node.

* __Level__ - An integer representing the level of the node. Root nodes are level 0 (zero).

* __Attributes__ - in addition to the built-in properties, you can add your own custom attributes to RadSiteMapNodes to expand their functionality

* __ParentNode__ - the parent RadSiteMapNode. If the node is a root level node - its parent is null / Nothing

* __SiteMap__ - the RadSiteMap object which the node belongs to.

* __Nodes__ - collection of the child nodes of the current node

## The methods of RadSiteMapNode

* __Remove()__ - removes the node from the Nodes collection


