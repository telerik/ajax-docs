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

In this article we will go ahead and summarize the most important performance info we already have in our documentation resources. Optimization Tips series in the blogs:

* [Optimization Tips: Testing Page Performance](http://telerikwatch.com/2008/05/optimization-tips-testing-page.html)

* [Optimization Tips:The Rad Managers for ASP.NET AJAX](http://telerikwatch.com/2008/04/optimization-tipsthe-rad-managers-for.html)

* [Optimization Tips: Using RadAjaxManagerProxy Controls](http://telerikwatch.com/2008/05/optimization-tips-using.html)

* [Optimization Tips: Using HTTP Compression](http://telerikwatch.com/2008/05/optimization-tips-using-http.html)

* [Optimization Tips: Optimizing Custom Skins](http://blogs.telerik.com/ToddAnglin/Posts/08-06-24/Optimization_Tips_Optimizing_Custom_Skins.aspx)

By default each Telerik control serves a set of files (javascript code and stylesheets) needed for proper client-side operation and look.

When loading a page with several controls on it, the number of these files can become very large, often resulting in a reduced page load time and increased traffic. The reason for this problem is that browsers make separate requests to the server for each of these resources.

Usually this problem is overcome by disabling the automatic script and stylesheet serving the controls, combining them into a smaller set of files and manually registering the links to these files in the page.

This approach is not the best for a number of reasons:

* you must extract the files from the assembly for each control release: 

* files become too large to be maintainable (or you have to write a script to merge the source files)

* the number of the merged files you need to maintain can become very large depending on the control sets you have on different pages;

Nevertheless, by using [RadScriptManager]({%slug scriptmanager/overview%}) and [RadStyleSheetManager]({%slug stylesheetmanager/overview%}) controls, Telerik UI for ASP.NET AJAX suite gives developers the advantage of a simple drag-and-drop to achieve the combination of resources to a single request. All you need is to add a [RadScriptManager]({%slug scriptmanager/overview%}) to your page instead of the default ScriptManager and the javascript files will get combined into a single file. Putting an additional control – [RadStyleSheetManager]({%slug stylesheetmanager/overview%}) to the page makes the stylesheet requests combined into a single request. Both controls need an HttpHandler to be declared in the application's configuration file to operate properly. The handler can easily added using the Smart Tags of the controls.

The RadScriptManager and RadStyleSheetManager controls also let you download the resources the Telerik controls need from our CDN instead of using WebResource requests. To do that, set their `CdnSettings-TelerikCdn` property to `Enabled`. You can read more on the subject in the [CDN Overview]({%slug scriptmanager/cdn-support/overview%}) help article. Using the CDN takes load off your server and improves resource caching.

Downloading from the CDN, however, will result in a request for each individual file (script, stylesheet, font, etc.). You can improve the CDN performance even further by instructing the controls to fetch a combined resource of all scripts/base stylesheets for all the controls in a single request by toggling the `Telerik.ScriptManager.TelerikCdn.CombinedResource` and `Telerik.StyleSheetManager.TelerikCdn.CombinedResource` [appSettings keys]({% slug general-information/web-config-settings-overview %}) to `enabled`. This configuration is exposed for an individual instance via the `CdnSettings-CombinedResource` property.

## RadGrid

**RadGrid** control provide a different solutions to optimize its performance. You can find more information in the help articles from the following list:

* [Grid Performance Optimizations]({%slug grid/performance/grid-performance-optimizations %})

* [Ajaxifying RadGrid]({%slug grid/performance/ajaxifying-radgrid %})

* [Saving the grid ViewState in Session]({%slug grid/performance/saving-the-grid-viewstate-in-session %})

* [Optimizing ViewState usage]({%slug grid/performance/optimizing-viewstate-usage %})

* [Rebind Grid with EnableViewState = false]({%slug grid/performance/rebind-grid-with-enableviewstate-=-false %})

## RadEditor

Below you can find a list of performance optimization help articles for RadEditor control:

* [Optimizations]({%slug editor/performance/optimizations %})

* [Toolbar Loading Optimizations]({%slug editor/performance/toolbar-loading-optimizations %})

## RadTreeView

You can read more information about optimization RadTreeView performance in [Optimizing RadTreeView Performance]({%slug treeview/troubleshooting/optimizing-radtreeview-performance %}) help article.

## RadComboBox

Performance might degrade with lots of items and lots of combobox instances on the page. [Optimizing the Combobox]({%slug combobox/troubleshooting/optimizing-the-combobox%}) help article gives some hints how to achieve better performance.
	
## RadMenu

It supports [web service load on demand](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/WebService/DefaultCS.aspx) and lazy initialization (transparent for the user). RadMenu can seamlessly work with disabled ViewState.

## RadTabStrip

Having lots of page views (inside RadMultiPage) can slow down switching between tabs. Also it generates lots of HTML (because of the controls contained in the pageviews). To tackle this problem we have an [online example](http://demos.telerik.com/aspnet-ajax/TabStrip/Examples/ApplicationScenarios/LoadOnDemand/DefaultCS.aspx) demonstrating how to load pageviews on demand via AJAX. The multipage also has a property “RenderSelectedPageOnly” which does exactly what it says. In this case switching to a new page view requires postback. **RadAjaxManager & RadAjaxPanel** performance problems can be caused by large updating areas with lots of HTML (especially tables), JavaScript files, JavaScript components and CSS. More info: [Optimizing client-side performance]({%slug ajax/performance/optimizing-performance-using-radajaxmanager%})

## RadDatePicker, RadDateTimePicker and RadTimePicker

Performance problems can be caused by using the picker in list controls. An example how to optimize this can be found here:

[Maximum performance with minimum output using Telerik RadDatePicker client-side API](http://www.telerik.com/blogs/maximum-performance-with-minimum-output-using-telerik-raddatepicker-client-side-api)

Also having many date pickers or time pickers on a page can render a lot of HTML and impact performance negatively. You can handle such scenarios by using a shared RadCalendar or RadTimeView. You can find more information and examples on the matter in [Using shared RadCalendar/RadTimeView]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/using-shared-radcalendar-and-radtimeview%}).

**RadDateInput, RadNumericInput, RadMaskedTextBox and RadTextBox**

Performance problems can be caused by using these controls in templates of list controls. A better idea is to create an outside edit form similar to this example:

[Client-side edit, update, delete and insert with RadControls for ASP.NET AJAX, WebServices and LINQ](http://www.telerik.com/blogs/client-side-edit-update-delete-and-insert-with-radcontrols-for-asp-net-ajax-webservices-and-linq)

## RadToolTip

**RadTooltip** and **RadTooltipManager** are quite lightweight and generally there are no problems with performance. However, in templated scenarios the number of tooltip controls on the page can easily go out of hand. We have seen scenarios involving 1000+ tooltips on a single page. Since each of them needs to be initialized on client page load, the system takes a lot of time to do it, especially If `<compilation debug=true>`. In such scenarios there is a better approach to the tooltips – and that is using a couple of lines of client-side code that will create a tooltip only when the user needs to see it. The following demo demonstrates this approach: [ToolTip - Dynamic Tooltip Creation](http://demos.telerik.com/aspnet-ajax/ToolTip/Examples/RadToolTipManagerClientAPI/DefaultCS.aspx)

## RadSplitter

A brand new mechanism for updating RadSplitter's child controls was introduced that is many times faster than the old one which traversed every single HTML element to test whether it is a Telerik control.

## RadScheduler

* Data-binding: We recommend that customers bind RadScheduler only with appointments that are visible in the currently selected view. This makes performance a non-issue, as the views are limited to a few thousand appointments at maximum.

* ViewState size: RadScheduler can work entirely without ViewState, if necessary. Customers pay the usual penalty of having to bind the data on each page load.

* JavaScript size: The script files are split into several groups that are loaded on demand. Currently the initially loaded script files weight in at 70kB (minified) with 35kB of on-demand scripts.

* JavaScript $create clause size: Depends on number of appointments. Only visible appointments are sent to the client.

* JavaScript initialization time: Currently very fast, but can be improved further if the appointment objects are created only when needed.

* Number of requests: On-demand loading of scripts generates a few additional requests. Other than that, the number is rather low, as skins contain very little number of images. Using RadScriptManager and RadStyleSheetManager reduces the number even further.

## RadHtmlChart

The **RadHtmlChart** renders SVG in modern browsers and VML in older browsers that do not support SVG (i.e., IE8 and below), that are essentially forms of an XML document. This means that the chart's image will be created by numerous elements (i.e., XML nodes) and rendering them may take some time for the browser. In scenarios where the chart has many components like series items, x/y axes labels, major and/or minor grid lines (i.e., path and text elements for the rendering) and the animation is enabled (it is enabled by default), the overall rendering time may be increased because the browser will have to draw too many elements and animate them.

The performance also greatly depends on the performance of the machine and the browser. Slower browsers like IE7 and IE8, especially when used on slower machines, may not meet all your needs. This can be aggravated by the presence of many charts on the page and the page's load time will increase proportionately.

The way to improve the rendering speed of the chart is to remove the most numerous elements that can slow down the browser. There are several things you could do in order to speed up the **RadHtmlChart**'s client-side rendering:

* Disable the chart's animation by setting the **Transitions** property to **false**. By doing so, the browser will not have to animate the thousands of XML nodes in the chart image.

* Hide the MinorGridLines and/or MajorGridLines of the X and/or Y axes by setting the **[YAxis/XAxis].[MinorGridLines/MajorGridLines].Visible** property to **false**.

* Hide the series' labels by setting the **[Series Object].LabelsAppearance.Visible** property to **false**. When there are thousand of items the labels would be hardly readable and are likely to only create visual clutter.

* Hide the X and/or Y axes' labels by setting the **[YAxis/XAxis].LabelsAppearance.Visible** property to **false**. You can also set a higher value for the axes labels step through the **[YAxis/XAxis].LabelsAppearance.Step** property.

You can see an example of an optimized chart configuration in [RadHtmlChart Performance Optimizations]({%slug htmlchart/troubleshooting/performance-optimizations%}) help article.

## RadAjaxPanel and RadAjaxManager

By using AJAX controls you can increase the performance significantly since only the controls that need to be updated will be affected? Here is a few performance tips that you can try.

* Include several controls in a single AJAX request. That means, if you have two **Lable** controls in one container and both of them need to be updated, it will be better to update the container instead both Labels separately. 

* If you do not load CSS-rich controls in AJAX requests you can turn off **RadAjax's** head update by setting the **EnablePageHeadUpdate** property to **false** .

* More detailed information is available in [Optimizing Performance Using RadAjaxManager]({%slug ajax/performance/optimizing-performance-using-radajaxmanager %})
