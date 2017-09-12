---
title: SharePoint 2007 (MOSS) Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: sharepoint/2007/overview
tags: overview
published: True
position: 0
---

# SharePoint 2007 (MOSS) Overview



>important The last release of RadEditor for MOSS is 5.8.16 (Q2 2012) and therefore it is no longer supported. This is a direct result of the fact that	Microsoft are discontinuing MOSS and that .NET 2.0 is also not supported since 2011. More information on the matter is available [in this blog post](http://blogs.telerik.com/aspnet-ajax/posts/12-08-20/radeditor-for-moss-sharepoint-2007-discontinued-as-of-q2-2012.aspx).



With the release of **Windows SharePoint Services (WSS)** v3 and **Microsoft Office SharePoint Server 2007**, Microsoft has implemented significant architectural changes in the SharePoint platform, which simplify the task of customizing the user interface.

Most of these improvements are because of the **WSS v3**, unlike its predecessor, which is built on top of the .NET 3.0 Framework bringing the native capabilities of ASP.NET 2.0 directly to the SharePoint platform. One such ASP.NET 2.0 concept that is leveraged by WSS v3 is the **navigation provider model**.

## The Navigation Provider Model

The navigation provider model separates the navigation hierarchy (the data portion, also known as site-map data sources) from the rendering (the presentation portion, also known as navigation controls).

The role of the site-map data source is to abstract the navigation hierarchy from the underlying system (such as SharePoint) to make it transparent to the navigation control. This allows developers to easily snap ASP.NET 2.0 navigation provider model compatible controls into a SharePoint site by simply configuring them to receive the navigation hierarchy from the provided SharePoint site-map data sources.

This section demonstrates how to incorporate Telerik® UI for ASP.NET Ajax in a SharePoint 2007/2010 site. Using **RadMenu**, **RadPanelbar**, **RadSiteMap**, **RadTreeView** or **RadTabStrip** as navigation controls bound to SharePoint sitemaps is easy and codeless process. We also provide:

* Native SharePoint 2007 webpart for RadEditor

* Native SharePoint 2010 webparts for RadEditor and RadGrid for ASP.NET AJAX with stand-alone installer (which performs the necessary web.config assembly registrations and deployment actions).

Using other controls from the Telerik® UI for ASP.NET Ajax suite in SharePoint may require additional code (e.g. data-binding or other way of population with data).

## Prerequisites

Telerik® UI for ASP.NET Ajax leverage the client and server side platform provided by ASP.NET Ajax. Note that you need to install/configure ASP.NET Ajax 1.0 or 3.5 prior to deploying Telerik® UI for ASP.NET Ajax to your SharePoint 2007 site. SharePoint 2010 does not require separate install because it is shipped by default with the .NET 35 version of the ASP.NET Ajax framework.

## See Also

 * [Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 1.0]({%slug sharepoint/2007/extending-your-sharepoint-2007-site-with-microsoft-asp.net-ajax-1.0%})

 * [Deploying Telerik® UI for ASP.NET Ajax]({%slug sharepoint/2007/deploying-telerik-ui-for-asp.net-ajax%})

 * [Incorporating Telerik® UI for ASP.NET Ajax in SharePoint WebSites]({%slug sharepoint/2007/incorporating-telerik-ui-for-asp.net-ajax-in-sharepoint-websites%})

 * [Extending your SharePoint 2007 site with Microsoft ASP.NET AJAX 3.5]({%slug sharepoint/2007/extending-your-sharepoint-2007-site-with-microsoft-asp.net-ajax-3.5%})
