---
title: Incorporating Telerik UI for ASP.NET AJAX in SharePoint WebSites
page_title: Incorporating Telerik UI for ASP.NET AJAX in SharePoint WebSites | UI for ASP.NET AJAX Documentation
description: Incorporating Telerik UI for ASP.NET AJAX in SharePoint WebSites
slug: sharepoint/2007/incorporating-telerik-ui-for-asp.net-ajax-in-sharepoint-websites
tags: incorporating,telerik,ui,for,asp.net,ajax,in,sharepoint,websites
published: True
position: 4
---

# Incorporating Telerik UI for ASP.NET AJAX in SharePoint WebSites



## 

Once all steps from the previous articles have been performed, you can easily integrate Telerik UI for ASP.NET Ajax in your SharePoint site.

The following steps outline how to swap the default SharePoint navigation with __RadMenu__:

1. Launch Office SharePoint designer and open the desired SharePoint site

1. Within the Folder List tool window expand the tree until the master pages folder is visible. A typical location is __http://server_name/_catalogs/masterpage__
>caption 

![](images/moss2.gif)

1. Open the master page currently used by your site (e.g. default.master). If prompted to check out the file select “Yes”.

1. Now you need to register the Telerik.Web.UI assembly in the master page. Do so by adding the following directive just above the __<html>__ tag:

````XML
	    <%@ register tagprefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI, Version=x.x.x.x, Culture=neutral, PublicKeyToken=121fae78165ba3d4" %>
````



>note Note that the version of the assembly is specified in the Assembly attribute. If deploying a different version of Telerik UI for ASP.NET Ajax, ensure that the version number is correct here.
>


1. Since RadMenu is ASP.NET Ajax control, it requires a ScriptManager control to be present on the page. Add the following markup just after the beginning of the __<form>__ tag:

````ASPNET
	    <asp:ScriptManager runat="server" ID="ScriptManager1" />
````

Alternatively, you can use [RadScriptManager](2EF524B5-D6BE-47BE-9960-01EF7B786F85) ([how to register its handler]({%slug sharepoint/2007/deploying-telerik-ui-for-asp.net-ajax%})).

1. Find the <SharePoint:AspMenu ID=”TopNavigationMenu”> tag and delete it.

1. Add the following code where the SharePoint menu tag was:

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" runat="server" DataSourceID="topSiteMap" Skin="Office2007" />
````



1. Verify that the __DataSourceID__ property of RadMenu is set to the same value as the __ID__ property of the desired SiteMapDataSource control.

1. Save your master page file and check it in. If you check your page in the browser you should see that RadMenu has replaced the default SharePoint menu.
>caption 

![](images/moss3.gif)

1. You can use __RadTreeView__, __RadPanelBar__ or __RadTabStrip__ by simply replacing the “__RadMenu__” tag e.g.:

````ASPNET
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" DataSourceID="topSiteMap" />
````



>note If you intend to integrate RadAjaxManager inside your SharePoint webpart, review the information from[ this help article](3DA1B20D-35C1-4170-8027-93F19AB0A068).
>

