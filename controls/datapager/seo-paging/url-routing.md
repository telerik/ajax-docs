---
title: URL Routing
page_title: URL Routing | UI for ASP.NET AJAX Documentation
description: URL Routing
slug: datapager/seo-paging/url-routing
tags: url,routing
published: True
position: 1
---

# URL Routing



## 

URL Routing with ASP.NET 4.0 has never been easier. While it was first a luxury of ASP.NET MVC, WebForms applications got routing support with .NET 3.5 SP1. With version 4.0 of the framework, setting up URL routing is now a piece of cake. For those of you who have never heard of it: URL Routing enables your application to use URLs that do not directly map to physical files, but can instead represent a user-friendlier, more descriptive, logical structure. It is not URL rewriting and not URL mapping, where these effectively restore the original physical URL of the page down the request pipe.

As of Q2 2010 version of Telerik controls for ASP.NET AJAX, RadDataPager SEO paging now supports URL Routing. Setting it up is all a matter of giving values to a couple of properties in the RadDataPager:

Effectively, RadDataPager requires that you indicate routing is used for your application (by setting AllowRouting). It then needs to know:

1. The name of the route that leads to the target .aspx page containing the datapager - specified in RadDataPager by the __RouteName__ property.

1. The name of the URL parameter that specifies the current page index - specified in RadDataPager by the __RoutePageIndexParameterName__ property.

In the following example a route is defined in Global.asax file that leads to DataPagerRouting.aspx. The route defines a single URL parameter with a default value of 1. This parameter will be used to specify the current page index in RadDataPager. To take advantage of this route setup the RadDataPager is configured to use this route. The route name and the name of the URL parameter that specifies the page index are set.



````ASPNET
	    <telerik:RadDataPager runat="server" ID="Pager" PagedControlID="RadListView1" AllowSEOPaging="true"
	        AllowRouting="true" RouteName="SeoRouting" RoutePageIndexParameterName="pager">
	        <Fields>
	            <telerik:RadDataPagerButtonField FieldType="Numeric" PageButtonCount="5" />
	        </Fields>
	    </telerik:RadDataPager>
````
````C#
	    private void RegisterRoutes(System.Web.Routing.RouteCollection routes)
	    {
	        routes.MapPageRoute("SeoRouting", "seopage/{pager}", "~/DataPagerRouting.aspx", true, new System.Web.Routing.RouteValueDictionary{ { "pager", "1" } });
	    }			
````
````VB.NET
	     
	
	    Private Sub RegisterRoutes(ByVal routes As System.Web.Routing.RouteCollection)
	        Dim routeValueDictionary As New System.Web.Routing.RouteValueDictionary()
	        routeValueDictionary.Add("pager", "1")
	        routes.MapPageRoute("SeoRouting", "seopage/{pager}", "~/DataPagerRouting.aspx", True, routeValueDictionary)
	    End Sub
	
````


## Page Size Support

Until Q2 2013, the RadDataPager SEO functionality has been saving the solely current page index in the URL.Although on a first glance this may seem enough, it is not. In a real life scenario the page size can be modified by theusers and this will render the SEO links invalid. This is why from Q2 2013, following the RadGrid behavior, we decided tointroduce support for page size in the SEO URL links. No breaking changes are made thus the existing applications that use this functionality will continue to behave as expected.

Normally, a routed URL link looks like this:

>tip http://demo/WS1/page/2_5
>


Similar to the SEO paging, the syntax is __PageIndex_PageSize__. Again, if no page size is set a default value of 10 is assumed. When using routing, there is no need of DataPagerID parameter as the order of the controls in the URL is defined in the page route in the Global.asax file.

For more details about ASP.NET Routing, please check the following links:

[http://msdn.microsoft.com/en-us/library/cc668201.aspx](http://msdn.microsoft.com/en-us/library/cc668201.aspx)

[http://weblogs.asp.net/scottgu/archive/2009/10/13/scottgu.aspx](http://weblogs.asp.net/scottgu/archive/2009/10/13/url-routing-with-asp-net-4-web-forms-vs-2010-and-net-4-0-series.aspx)
