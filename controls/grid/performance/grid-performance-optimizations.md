---
title: Grid Performance Optimizations
page_title: Grid Performance Optimizations | UI for ASP.NET AJAX Documentation
description: Grid Performance Optimizations
slug: grid/performance/grid-performance-optimizations
tags: grid,performance,optimizations
published: True
position: 0
---

# Grid Performance Optimizations


When you present large number of records at once you will see delays in the grid operations execution. Actually, the problem lies in the browser	which cannot handle large amounts of HTML.	You can try this with a very large TreeView, Menu, PanelBar, etc. (with thousands of items),	or you can even try to select the contents of your page in the browser and you will see 100% CPU utilization for a certain period of time.

## Steps that could be followed in order to optimize the client performance:

1. Turning off all row-related features (row select, row click, etc.). With every client-side feature of RadGrid a script is transferred to the client.This script will be used to perform the required functionality. More scripts on the client-machine mean worse performance.

2. Unfortunately JavaScript and CSS implementations in IE are processed slower compared to Gecko-based and WebKit browsers.There are lots of ActiveX/COM objects, garbage collector does not work at full extent in most of the scenarios, there are some CSS bugs, etc.That is the reason we recommend to avoid using:

	* Non-optimized images in CSS.

	* 1px background images with **background-repeat: repeat-x**.

	_Note_: IE has a limit of 31 loaded stylesheets. This limit could be easily overcomed by referencing one stylesheet inside another.

3. You could use RadInputManager to increase the client-side performance.Using this technique you will significantly decrease the input editors loading time since plain MS TextBoxes will be created(instead of the corresponding RadInput controls) and the data entered by the end user will be automatically filtered by RadInputManager,based on the input manager settings. The performance benefit can be quite significant:

	* The same number of input controls will be loaded up to 10 times faster

	* The maximum number of input controls allowed on the page can be 10 times greater. You could check [this](http://demos.telerik.com/aspnet-ajax/input/examples/radinputmanager/dynamicinputfiltersettings/defaultcs.aspx?product=grid) online demo application for a sample code and performance overview.

4. Use built-in/custom paging or virtual scrolling/paging and present only fixed set of records at a time - here are online examples for it: [Basic paging]( http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/paging/defaultcs.aspx	), [Virtual scrolling and paging]( http://demos.telerik.com/aspnet-ajax/grid/examples/client/virtualscrollpaging/defaultcs.aspx	). In case you have more than **100** records in a flat grid, it is recommended to turn on the build-in paging/custom paging of the grid.This will not only optimize the grid loading time but also will enrich the user experience, thus giving him/her the flexibility to easily navigate throughthe grid records.When you have a hierarchical grid, the best approach is to limit the items presented in each level at once to **10-15** at most (through the **PageSize** property of the **GridTableView** object).

5. You could disable the ViewState of the control, this will reflect in less data transferred back and forth between the client and server. However, this optimization comes at cost of sacrificing some functionality. You could check the lists of the functions that are not supported when the ViewState is disabled in [this]({%slug grid/performance/optimizing-viewstate-usage%}) help topic. Demo application that describes this functinoality could be found [here](http://demos.telerik.com/aspnet-ajax/grid/examples/programming/viewstate/defaultcs.aspx)

6. When in need to allow the user to have Date input, you may consider using regular TextBox controls and the client-side API of RadDatePicker control. This approach optimizes the performance because the time needed for TextBox initialization is less than the time needed for RadDateInput initialization. [This](http://demos.telerik.com/aspnet-ajax/calendar/examples/datepicker/shareddatepicker/defaultcs.aspx?product=grid) is the demo application that illustrates this approach.

7. You could use [RadAjaxManager]({%slug ajaxmanager/overview%}) controls to Ajax-ify the Grid instance and thus to receive partial updates from the service only for the Grid instance, not the whole page.

8. Finally could use [RadCompression ]({%slug controls/radcompression%}) to compress the responce from the server in case of Ajax and service responses.

## Steps to optimize the server performance:

1. If you have hierarchical grid, use on demand loading (**HierarchyLoadMode.ServerOnDemand**) of detail tables with **DetailTableDataBind** child tables content generation. You can combine these settings with:

	* [single expand](http://www.telerik.com/help/aspnet-ajax/grid-single-expand-in-hierarchical-grid.html) for grid items at the same level

2. If your grid or several instances of the control reside in page view(s) of RadMultipage (connected to RadTabStrip), we recommend choosing **RenderSelectedPageOnly = true** for RadMultipage, set **AutoPostBack = true** for the tabstrip and ajaxify the tabstrip and the multipage via **RadAjaxManager**. Thus only the active page view will be loaded at a time and merly the grid object residing in that page view will be bound to data, thus reducing the loading and rendering time of the page.

3. You could use LinqDataSource for which the Grid control will perform aggregate calculations or executes sorting/filtering/paging operations by means of native LINQ expressions. This technique significantly reduce the time necessary to process these actions "behind the scenes" and allows you to handle millions of records within a few seconds. Example that illustrate this behavior could be found [here](http://demos.telerik.com/aspnet-ajax/grid/examples/performance/linq/defaultcs.aspx).

4. You could have client-side binding with caching enabled. Doing this will cause all the data to be stored on the client computer and thus to increasethe performance and the scalability of the server. When caching is enabled the internal operation performed by RadGrid will be done solely on the client without hitting the datasource. Sample application could be seen [here](http://demos.telerik.com/aspnet-ajax/grid/examples/client/caching/defaultcs.aspx).

5. Instead of providing the whole datasource to RadGrid and wait for it to page the data for you, you could do this manually by using the custom paging functionality that the control provides. In this case data will be loaded only for the current page. [This](http://demos.telerik.com/aspnet-ajax/grid/examples/programming/custompaging/defaultcs.aspx) is a demo application that implements custom paging for RadGrid.

6. You could bind the Grid with the data on the client computer. This could be done either [programmatically]( http://demos.telerik.com/aspnet-ajax/grid/examples/client/databinding/defaultcs.aspx	) or [declaratively]( http://demos.telerik.com/aspnet-ajax/grid/examples/client/declarativedatabinding/defaultcs.aspx	).

7. If you have Grouping functinality enabled you could set the groups to be load on the client computer. [This]( http://demos.telerik.com/aspnet-ajax/grid/examples/groupby/grouploadmodeclient/defaultcs.aspx	) is the demo applciation that illustrate this feature.

## See Also

 * [UI for ASP.NET AJAX Performance Optimization]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/optimizing-performance %})

 * [Top performance with Telerik controls for ASP.NET AJAX.](http://www.telerik.com/aspnet-ajax/tech-sheets/top-performance)
