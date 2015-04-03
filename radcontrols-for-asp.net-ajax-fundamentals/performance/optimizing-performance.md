---
title: Optimizing Performance
page_title: Optimizing Performance | UI for ASP.NET AJAX Documentation
description: Optimizing Performance
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/optimizing-performance
tags: optimizing,performance
published: True
position: 0
---

# Optimizing Performance



## 

In this article we will go ahead and summarize the most important performance info we already have in our documentation resources. Optimization Tips series in the blogs:

[Optimization Tips: Testing Page Performance](http://telerikwatch.com/2008/05/optimization-tips-testing-page.html)

[Optimization Tips:The Rad Managers for ASP.NET AJAX](http://telerikwatch.com/2008/04/optimization-tipsthe-rad-managers-for.html)

[Optimization Tips: Using RadAjaxManagerProxy Controls](http://telerikwatch.com/2008/05/optimization-tips-using.html)

[Optimization Tips: Using HTTP Compression](http://telerikwatch.com/2008/05/optimization-tips-using-http.html)

[Optimization Tips: Optimizing Custom Skins](http://blogs.telerik.com/ToddAnglin/Posts/08-06-24/Optimization_Tips_Optimizing_Custom_Skins.aspx)



__RadGrid__

* server-side: The grid itself cannot cause server-side performance problems related to controls creations and/or render. There might be some possible problems with controls inside grid templates.

* data-binding: The .NET 2.0 version of the grid is optimized to handle up to 1 000 000 records without major performance problems. Server-side paging will increase performance dramatically.Example: [http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/CustomPaging/DefaultCS.aspx](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/CustomPaging/DefaultCS.aspx).NET 3.5 version can handle millions of records and will apply paging, sorting and filtering directly on the data-base server (LinqDataSource) codeless:[http://blogs.telerik.com/vladimirenchev/Posts/08-03-10/How_fast_is_your_ASP_NET_DataGrid.aspx?ReturnURL=%2fvladimirenchev%2fposts.aspx%3fYear%3d2008%26Month%3d3](http://blogs.telerik.com/vladimirenchev/Posts/08-03-10/How_fast_is_your_ASP_NET_DataGrid.aspx?ReturnURL=%2fvladimirenchev%2fposts.aspx%3fYear%3d2008%26Month%3d3)Client-side data-binding approach is also very fast + you will get pure JSON transfer between client and server:[http://blogs.telerik.com/VladimirEnchev/Posts/08-05-23/SQL_Server_sorting_paging_and_filtering_with_RadGrid_client-side_data-binding_to_WebService.aspx?ReturnURL=%2fVladimirEnchev%2fPosts.aspx](http://blogs.telerik.com/VladimirEnchev/Posts/08-05-23/SQL_Server_sorting_paging_and_filtering_with_RadGrid_client-side_data-binding_to_WebService.aspx?ReturnURL=%2fVladimirEnchev%2fPosts.aspx)

* ViewState size: Some of the grid operations can work with completely turned off ViewState.Example: [http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/ViewState/DefaultCS.aspx](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/ViewState/DefaultCS.aspx)In client-side data-binding scenarios you do not need the ViewState also:Example: [http://demos.telerik.com/aspnet-ajax/grid/examples/client/databinding/defaultcs.aspx](http://demos.telerik.com/aspnet-ajax/grid/examples/client/databinding/defaultcs.aspx)

* HTML output size: RadGrid output is the smallest on the market however may depend on selected grid features, number of items per page and templates.Example: [http://demos.telerik.com/aspnet-ajax/Grid/Examples/GeneralFeatures/Migration/DefaultCS.aspx](http://demos.telerik.com/aspnet-ajax/Grid/Examples/GeneralFeatures/Migration/DefaultCS.aspx)

* JavaScript file size: The entire grid script size is 174 Kb (combined and compressed using dojo)

* JavaScript $create clause size: Depends on selected features. Can be turned off along with all other resources:Example: [http://blogs.telerik.com/VladimirEnchev/Posts/08-07-15/Telerik_RadGrid_Section_508_Compliance.aspx?ReturnURL=%2fBlogs.aspx](http://blogs.telerik.com/VladimirEnchev/Posts/08-07-15/Telerik_RadGrid_Section_508_Compliance.aspx?ReturnURL=%2fBlogs.aspx)

* Number of requests: Most of the grid images come from the grid CSS sprite which minimizes number of requests to the server for resources. Can be minimized with RadScriptManager and RadStyleSheetManager.

* Other: [Client/server grid performance optimizations](C88A6C67-36FD-4860-ADA8-055CF70C91D3)





__RadEditor__

Some optimization features introduced in the ASP.NET AJAX version are:

* semantic rendering to reduce HTML markup

* certain editor scripts are loaded only if needed, reducing total script sent to client

* use of optimized code relying on the common Prometheus framework

* lazy initialization and loading for any client-side feature not immediately used.

Nonetheless, there are two scenarios where performance can degrade:

1. Having many editors on the page(10, 20 or even 30. More common in MOSS scenarios).RadEditor for ASP.NET AJAX initializes about 3-4 times faster than the Classic version on the client side.Nonetheless, having 30 instances of the editor is bound to cause a delay. However, this delay can be greatly reduced and brought to almost nothing– by setting a ToolProviderID (so that many editors share the same toolbar and no additional markup is sent on client), as well as set the ToolbarMode property – non default toolbars use lazy initialization and are initialized not when the page loads, but when an editor is first used (e.g. the user clicks in the content area). The following example demonstrates these two features:[http://demos.telerik.com/aspnet-ajax/Editor/Examples/ToolProvider/DefaultCS.](http://demos.telerik.com/aspnet-ajax/Editor/Examples/ToolProvider/DefaultCS.aspx)

1. Loading too much content into the editor (100K and more).This is done very rarely, but sometimes we get contacted about slow performance of the editor. Problem is not addressable – it is inherent. When having to deal with so much content, the browser eats lots of memory to provide for storing the editor states needed by the Undo/Redo, the Undo/Redo itself starts executing slowly due to the huge content.





__RadTreeView__

The biggest challenge here is to deliver acceptable performance when dealing with lots of nodes (hundreds and thousands). To do so RadTreeView supports:

* HTML markupRadTreeView renders the least amount of HTML needed to implement the features. However, the HTML size grows up dramatically when RadTreeView contains a few thousand of nodes.This issue cannot be easily tackled - even rendering a few thousand strings will generate lots of output. That’s where load on demand comes into play.

* Load on demandThe idea is simple - render that HTML only when needed. RadTreeView supports three different types of load on demand:

1. [Client-side (via ASP.NET Callbacks)](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Programming/ClientLoadOnDemandSql/DefaultCS.aspx)This is technique is easier for the developer to implement however may not be a top performer because the whole ViewState is submitted on every request.

1. [Server-side (regular postbacks which can be ajaxified)](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Programming/LoadOnDemandSql/DefaultCS.aspx)Worst performance. Mostly added for backwards compatibility. Full page update can be avoided by wrapping the treeview inside update panel.

1. [Web-services](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Programming/WebService/DefaultCS.aspx)Web services provide best performance because they completely skip the heavy page lifecycle and don’t require sending huge ViewState strings.All types of load on demand keep logging the nodes created on demand. This however introduces a delay after numerous loads on demand requests since the log grows bigger. This is required by customers who want the nodes created on demand do be persisted after postback (or those nodes need to fire server-side events - click, drag and drop etc). This means that after some time all load on demand schemes (without server-side) get slower. Fortunately, there is a property __PersistLoadOnDemandNodes__which controls this behavior.

* Initialization of the client objectRadTreeView supports on demand initialization of nodes which are not visible (their parent nodes are collapsed). This is transparent to the user. However, invoking the client-side API (e.g. get_allNodes()) can force full client-side initialization which is a time consuming operation in case of a few hundred nodes. Also logging client side changes which need to be reflected on the server (checking a node, selecting a node) from the client-side API can be slow with lots of nodes. 4. JSONRadTreeView (as well as most of our ASP.NET AJAX controls) renders some JavaScript code in JSON format required to initialize the nodes. At the time being the text of the node is not serialized in by default which saves lots of output. A QSF example demonstrating web-service load on demand with disabled viewstate will demonstrate the top performance achievable with RadTreeView.Also the[performance section of the help](C9F49BCB-8F85-4249-815F-1CFA6464FCE4) provides some further insights.





__RadComboBox__

Again performance might degrade with lots of items and lots of combobox instances. This is addressed by using load on demand.

1. HTML markupRadComboBox renders unordered list for its dropdown which is quite light. This is the least amount of html required to render the dropdown.

1. Load on demandRadComboBox supports two types of load on demand (with caching of items):

1. [Web-Service](http://demos.telerik.com/aspnet-ajax/ComboBox/Examples/Programming/WebServiceShowMoreResults/DefaultCS.aspx)

1. [Callbacks](http://demos.telerik.com/aspnet-ajax/ComboBox/Examples/PopulatingWithData/AutoCompleteSql/DefaultCS.aspx) (ASP.NET 2.0 Callbacks)





__RadMenu__

It supports [web service load on demand](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/WebService/DefaultCS.aspx) and lazy initialization (transparent for the user). RadMenu can seamlessly work with disabled ViewState.

__RadTabStrip__

Having lots of page views (inside RadMultiPage) can slow down switching between tabs. Also it generates lots of HTML (because of the controls contained in the pageviews). To tackle this problem we have an[online example](http://demos.telerik.com/aspnet-ajax/TabStrip/Examples/ApplicationScenarios/LoadOnDemand/DefaultCS.aspx) demonstrating how to load pageviews on demand via AJAX.The multipage also has a property “RenderSelectedPageOnly” which does exactly what it says. In this case switching to a new page view requires postback. __RadAjaxManager & RadAjaxPanel__Performance problems can be caused by large updating areas with lots of HTML (especially tables), JavaScript files, JavaScript components and CSS. More info:[Optimizing client-side performance](7956CE09-A038-4465-9FE6-602125EBB685)





__RadDatePicker, RadDateTimePicker and RadTimePicker__

Performance problems can be caused by using the picker in list controls. An example how to optimize this can be found here:

[http://blogs.telerik.com/VladimirEnchev/Posts/08-07-10/Maximum_performance_with_minimum_output_using_Telerik_RadDatePicker_client-side_API.aspx?ReturnURL=%2fVladimirEnchev%2fPosts.aspx](http://blogs.telerik.com/VladimirEnchev/Posts/08-07-10/Maximum_performance_with_minimum_output_using_Telerik_RadDatePicker_client-side_API.aspx?ReturnURL=%2fVladimirEnchev%2fPosts.aspx)



__RadDateInput, RadNumericInput, RadMaskedTextBox and RadTextBox__

Performance problems can be caused by using these controls in templates of list controls. A better idea is to create an outside edit form similar to this example:

[http://blogs.telerik.com/vladimirenchev/posts/08-05-27/client-side_edit_update_delete_and_insert_with_radcontrols_for_asp_net_ajax_webservices_and_linq.aspx?ReturnURL=%2fVladimirEnchev%2fPosts.aspx](http://blogs.telerik.com/vladimirenchev/posts/08-05-27/client-side_edit_update_delete_and_insert_with_radcontrols_for_asp_net_ajax_webservices_and_linq.aspx?ReturnURL=%2fVladimirEnchev%2fPosts.aspx)





__RadToolTip__

RadTooltip RadTooltipManager are quite lightweight and generally there are no problems with performance. However, in templated scenarios the number of tooltip controls on the page can easily go out of hand. We have seen scenarios involving 1000+ tooltips on a single page. Since each of them needs to be initialized on client page load, the system takes a lot of time to do it, especially If <compilation debug=true>. In such scenarios there is a better approach to the tooltips – and that is using a couple of lines of client-side code that will create a tooltip only when the user needs to see it. The following demo demonstrates this approach:[http://demos.telerik.com/aspnet-ajax/ToolTip/Examples/RadToolTipManagerClientAPI/DefaultCS.](http://demos.telerik.com/aspnet-ajax/ToolTip/Examples/RadToolTipManagerClientAPI/DefaultCS.aspx)aspx

__RadSplitter__

A brand new mechanism for updating RadSplitter's child controls was introduced that is many times faster than the old one which traversed every single HTML element to test whether it is a Telerik control.

__RadScheduler__

* Data-binding: We recommend that customers bind RadScheduler only with appointments that are visible in the currently selected view. This makes performance a non-issue, as the views are limited to a few thousand appointments at maximum.

* ViewState size: RadScheduler can work entirely without ViewState, if necessary. Customers pay the usual penalty of having to bind the data on each page load.

* JavaScript size: The script files are split into several groups that are loaded on demand. Currently the initially loaded script files weight in at 70kB (minified) with 35kB of on-demand scripts.

* JavaScript $create clause size: Depends on number of appointments. Only visible appointments are sent to the client.

* JavaScript initialization time: Currently very fast, but can be improved further if the appointment objects are created only when needed.

* Number of requests: On-demand loading of scripts generates a few additional requests. Other than that, the number is rather low, as skins contain very little number of images. Using RadScriptManager and RadStyleSheetManager reduces the number even further.

__RadHtmlChart__

The __RadHtmlChart__ renders SVG in modern browsers and VML in older browsers that do not support SVG (i.e., IE8 and below), that are essentially forms of an XML document. This means that the chart's image will be created by numerous elements (i.e., XML nodes) and rendering them may take some time for the browser. In scenarios where the chart has many components like series items, x/y axes labels, major and/or minor grid lines (i.e., path and text elements for the rendering) and the animation is enabled (it is enabled by default), the overall rendering time may be increased because the browser will have to draw too many elements and animate them.

The performance also greatly depends on the performance of the machine and the browser. Slower browsers like IE7 and IE8, especially when used on slower machines, may not meet all your needs. This can be aggravated by the presence of many charts on the page and the page's load time will increase proportionately.

The way to improve the rendering speed of the chart is to remove the most numerous elements that can slow down the browser. There are several things you could do in order to speed up the __RadHtmlChart__'s client-side rendering:

* Disable the chart's animation by setting the __Transitions__ property to __false__. By doing so, the browser will not have to animate the thousands of XML nodes in the chart image.

* Hide the MinorGridLines and/or MajorGridLines of the X and/or Y axes by setting the __[YAxis/XAxis].[MinorGridLines/MajorGridLines].Visible__ property to __false__.

* Hide the series' labels by setting the __[Series Object].LabelsAppearance.Visible__ property to __false__. When there are thousand of items the labels would be hardly readable and are likely to only create visual clutter.

* Hide the X and/or Y axes' labels by setting the __[YAxis/XAxis].LabelsAppearance.Visible__ property to __false__. You can also set a higher value for the axes labels step through the __[YAxis/XAxis].LabelsAppearance.Step__ property.

You can see an example of an optimized chart configuration in [RadHtmlChart Performance Optimizations](905e0bc7-6ae6-4b15-82c5-c07e42dcd0ab) help article.

__RadScriptManager and RadStyleSheetManager__

By default each Telerik control serves a set of files (javascript code and stylesheets) needed for proper client-side operation and look.

When loading a page with several controls on it, the number of these files can become very large, often resulting in a reduced page load time and increased traffic. The reason for this problem is that browsers make separate requests to the server for each of these resources.

Usually this problem is overcome by disabling the automatic script and stylesheet serving the controls, combining them into a smaller set of files and manually registering the links to these files in the page.

This approach is not the best for a number of reasons:- you must extract the files from the assembly for each control release;- files become too large to be maintainable (or you have to write a script to merge the source files);- the number of the merged files you need to maintain can become very large depending on the control sets you have on different pages;

With the newly added[RadScriptManager](2EF524B5-D6BE-47BE-9960-01EF7B786F85) and[RadStyleSheetManager](A2D2BFE9-F3FE-48F8-A3E6-5254D7491104) controls, Telerik UI for ASP.NET AJAX suite gives developers the advantage of a simple drag-and-drop to achieve the combination of resources to a single request. All you need is to add a [RadScriptManager](2EF524B5-D6BE-47BE-9960-01EF7B786F85) to your page instead of the default ScriptManager and the javascript files will get combined into a single file. Putting an additional control –[RadStyleSheetManager](A2D2BFE9-F3FE-48F8-A3E6-5254D7491104) to the page makes the stylesheet requests combined into a single request.Both controls need an HttpHandler to be declared in the application's configuration file to operate properly. The handler can easily added using the Smart Tags of the controls.
