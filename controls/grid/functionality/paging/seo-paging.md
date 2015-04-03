---
title: SEO Paging
page_title: SEO Paging | UI for ASP.NET AJAX Documentation
description: SEO Paging
slug: grid/functionality/paging/seo-paging
tags: seo,paging
published: True
position: 2
---

# SEO Paging



A typical problem with most data grids is that search engine crawlers index only the first page of data, ignoring the data grid pager. As a workaround, developers usually remove the paging feature when they detect a crawler in order to feed the whole data as a single page. This, however, does not work in most cases because search engines are developed to index a limited amount of data per page.

To overcome those issues, __RadGrid__ provides SEO (Search-Engine Optimized) paging. When it detects a Web crawler, __RadGrid__ renders the page number in the pager in such way that crawlers mandatorily follow through all grid pages. As a result, the whole data is indexed page by page.

When a result is found by the search engine and the user clicks on the provided link, the browser navigates directly to the particular grid page. This intelligent mechanism is possible because when in SEO mode __RadGrid__ passes the page in the URL as shown below:

__http://www.mySite.com/Default.aspx?RadGrid1ChangePage=6&RadGrid2ChangePage=8__

This mechanism works even if the Web page contains multiple grids. For example, the above URL will open RadGrid1 on page 6 and RadGrid2 on page 8.

## Properties affecting SEO paging

SEO paging is used automatically when the grid detects a Web crawler. In addition, you can use the __PagerStyle.EnableSEOPaging__ property to cause the grid to use this style of paging at all times. When you set __EnableSEOPaging__ to __True__, the grid always handles paging using query strings. When it is __False__, the grid does not use SEO paging unless it detects a crawler.

In addition, you can specify the query string key for the grid that is used as part of the page query string by setting the __PagerStyle.SEOPagingQueryStringKey__ property. This is useful when the grid resides in several containers and its id becomes too long and not very readable.

For a live example demonstrating SEO paging, see [SEO-friendly paging](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/SEOPaging/DefaultCS.aspx).

## Support for URL Routing in ASP.NET 4.0

ASP.NET 4.0 introduces an easy approach to setup [URL Routing](http://msdn.microsoft.com/en-us/library/cc668201.aspx). With Routing, URLs no longer have to map to physical files. Thus, applications can use friendlier URLs that describe a logical structure, instead of the physical file structure of the application.

As of version 2010.Q2, RadGrid now supports URL Routing in ASP.NET 4.0 applications. Instead of reading query strings, RadGrid can use [URL parameters](http://msdn.microsoft.com/en-us/library/cc668201.aspx#adding_routes_to_a_web_forms_application) that specify the page index.


|  __Example__  |  |
| ------ | ------ |
|Non-routed URL:|http://myapplication.com/mygridpage.aspx?RadGrid1ChangePage=5|
|Routed URL:|http://myapplication.com/mygrid/5|

To enable routing support for the SEO pager, RadGrid introduces 3 new properties in __RadGrid.PagerStyle__:

* __UseRouting__ - notifies RadGrid that routing is enabled for the ASP.NET application.

* __SEORouteName__ - specifies the name of the current route that is used. If the value is empty, the first route with matching route data is used.

* __SEOPageIndexRouteParameterName__ - specifies the URL parameter that is used to get the page index from the URL. Empty value indicates the __SEOPagingQueryStringKey__ value will be used.

To use URL routing with RadGrid, your application must specify a route to the .aspx page and that route should define a URL parameter specifying the grid page:

````XML
	    <%@  application language="C#" %>
	    <%@ import namespace="System.Web.Routing" %>
	    <script runat="server">
	
	        void Application_Start(object sender, EventArgs e)
	        {
	            RegisterRoutes(RouteTable.Routes);
	        }
	
	        private void RegisterRoutes(RouteCollection routes)
	        {
	            routes.MapPageRoute(
	                "RadGridSEOPaging",
	                "mygrid/{grid1page}",
	                "~/Default.aspx",
	                true,
	                new RouteValueDictionary { { "grid1page", "1" } });
	        }
	    </script>
````



Once routing is enabled in your application, you can configure RadGrid to use the URL parameter in the specified route:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" PageSize="5">
	        <PagerStyle EnableSEOPaging="True" UseRouting="true" SEORouteName="RadGridSEOPaging"
	            SEOPageIndexRouteParameterName="grid1page"></PagerStyle>
	    </telerik:RadGrid>
````



>note When routing is enabled, two parameters appear in the URL - page index as a first parameter and page size as a second parameter. If only one parameter is used, this parameter is parsed as a page index and page size gets default value - 10 items per page.
>


For more information on URL Routing support for RadGrid and a runnable demo, please refer to the [RadGrid for ASP.NET AJAX SEO Paging and Routing in ASP.NET 4.0 blog post in Telerik Blogs](http://blogs.telerik.com/aspnet-ajax/posts/10-06-23/radgrid-for-asp-net-ajax-seo-paging-with-routing-in-asp-net-4-0.aspx).
