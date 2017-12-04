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

Nevertheless, by using [RadScriptManager]({%slug scriptmanager/overview%}) and [RadStyleSheetManager]({%slug stylesheetmanager/overview%}) controls, Telerik® UI for ASP.NET AJAX suite gives developers the advantage of a simple drag-and-drop to achieve the combination of resources to a single request. All you need is to add a [RadScriptManager]({%slug scriptmanager/overview%}) to your page instead of the default ScriptManager and the javascript files will get combined into a single file. Putting an additional control – [RadStyleSheetManager]({%slug stylesheetmanager/overview%}) to the page makes the stylesheet requests combined into a single request. Both controls need an HttpHandler to be declared in the application's configuration file to operate properly. The handler can easily added using the Smart Tags of the controls.

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

## RadCaptcha

You can disable **RadCaptcha** audio to eliminate requests to the built-in audio handler. You can find out how in the [Performance Optimization by Disabling Audio Handler]({%slug captcha/troubleshooting/optimize-application-performance-disable-audio%})


## RadComboBox

Performance might degrade with lots of items and lots of combobox instances on the page. [Optimizing the Combobox]({%slug combobox/troubleshooting/optimizing-the-combobox%}) help article gives some hints how to achieve better performance.
	
## RadMenu

[Optimizing RadMenu Performance]({%slug menu/performance/optimizing-radmenu-performance%}) help article elaborates more on increasing the control performance.

## RadTabStrip

You can find more information regarding performance optimization in [Optimizing RadTabStrip Performance]({%slug tabstrip/performance/optimizing-radtabstrip-performance%}) help article.

## RadDatePicker, RadDateTimePicker and RadTimePicker

Performance problems can be caused by using the picker in list controls. You can check out the following articles which elaborate more on performance optimization.

* [Optimizing RadDatePicker Performance]({%slug datepicker/performance/optimizing-raddatepicker-performance%})

* [Optimizing RadDateTimePicker Performance]({%slug datetimepicker/performance/optimizing-raddatetimepicker-performance%})

* [Optimizing RadTimePicker Performance]({%slug timepicker/performance/optimizing-radtimepicker-performance%})

## RadDateInput, RadNumericInput, RadMaskedTextBox and RadTextBox

Performance problems can be caused by using these controls in templates of list controls. A better idea is to create an outside edit form similar to this example:

[Client-side edit, update, delete and insert with RadControls for ASP.NET AJAX, WebServices and LINQ](http://www.telerik.com/blogs/client-side-edit-update-delete-and-insert-with-radcontrols-for-asp-net-ajax-webservices-and-linq)

## RadToolTip

**RadTooltip** and **RadTooltipManager** are quite lightweight but you can still optimize them if many controls are rendered on the page. You can find more infromation in [Optimizing RadToolTip Performance]({%slug tooltip/performance/optimizing-radtooltip-performance%}) help article.

## RadScheduler

You can check out the [Optimizing RadScheduler Performance]({%slug scheduler/performance/optimizing-radscheduler-performance%}) help article for some tips to optimize the control performance.

## RadHtmlChart

You can find a details information about optimizing **RadHtmlChart** control in [Performance Optimizations]({%slug htmlchart/troubleshooting/performance-optimizations%}) help article.

## RadAjaxPanel and RadAjaxManager

More detailed information is available in [Optimizing Performance Using RadAjaxManager]({%slug ajaxmanager/performance/optimizing-performance-using-radajaxmanager%})
