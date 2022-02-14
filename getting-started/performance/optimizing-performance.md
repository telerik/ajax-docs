---
title: Optimizing Performance
page_title: Optimizing Performance
description: "Learn the tips and tricks for optimizing the performance of the Grid, HtmlChart, Editor, inputs, textboxes, and more Telerik UI for ASP.NET AJAX controls."
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/optimizing-performance
tags: optimizing,performance
published: True
position: 0
---

# Optimizing Performance

This article summarizes the most important resources and tips and tricks you can use to improve the performance of your project.

## Blog Posts

The **Optimization Tips** series in the Telerik blog includes the following blog posts:

* [Optimization Tips: Testing Page Performance](http://telerikwatch.com/2008/05/optimization-tips-testing-page.html)

* [Optimization Tips: The Rad Managers for ASP.NET AJAX](http://telerikwatch.com/2008/04/optimization-tipsthe-rad-managers-for.html)

* [Optimization Tips: Using RadAjaxManagerProxy Controls](http://telerikwatch.com/2008/05/optimization-tips-using.html)

* [Optimization Tips: Using HTTP Compression](http://telerikwatch.com/2008/05/optimization-tips-using-http.html)

* [Optimization Tips: Optimizing Custom Skins](https://blogs.telerik.com/ToddAnglin/Posts/08-06-24/Optimization_Tips_Optimizing_Custom_Skins.aspx)

## Tips and Tricks

By default, each Telerik control serves a set of files (JavaScript code and stylesheets) that are needed for proper client-side operation and rendering.

When loading a page with several controls on it, the number of these files can become very large, often resulting in a reduced page load time and increased traffic. The reason for this problem is that browsers make separate requests to the server for each of these resources.

Usually, this problem is overcome by disabling the automatic script and stylesheet serving the controls, combining them into a smaller set of files and manually registering the links to these files in the page.

This approach is not the best for a number of reasons:

* You must extract the files from the assembly for each control release.

* Files become too large to be maintainable or you have to write a script to merge the source files.

* The number of the merged files you need to maintain can become very large depending on the control sets you have on different pages.

Nevertheless, by using the [ScriptManager]({%slug scriptmanager/overview%}) and the [StyleSheetManager]({%slug stylesheetmanager/overview%}) controls, you can use dragging and dropping to achieve the combination of resources to a single request. You need to add a [ScriptManager]({%slug scriptmanager/overview%}) to your page instead of the default ScriptManager and the JavaScript files will get combined into a single file. Additionally, including the [StyleSheetManager]({%slug stylesheetmanager/overview%}) in the page makes the stylesheet requests combined into a single request. Both controls need an HttpHandler to be declared in the application configuration file to operate properly. To add the handler, use the **Smart Tags** of the controls.

The ScriptManager and the StyleSheetManager controls also enable you to download the resources the Telerik controls need from the Telerik CDN instead of using WebResource requests. To do that, set their `CdnSettings-TelerikCdn` property to `Enabled`. For more information, refer to the [CDN Overview]({%slug scriptmanager/cdn-support/overview%}) article. Using the CDN takes load off your server and improves resource caching.

Downloading from the CDN, however, will result in a request for each individual file (script, stylesheet, font, and so on). You can improve the CDN performance even further by instructing the controls to fetch a combined resource of all scripts and base stylesheets for all the controls in a single request by toggling the `Telerik.ScriptManager.TelerikCdn.CombinedResource` and `Telerik.StyleSheetManager.TelerikCdn.CombinedResource` [`appSettings` keys]({% slug general-information/web-config-settings-overview %}) to `enabled`. This configuration is exposed for an individual instance through the `CdnSettings-CombinedResource` property.

### Grid

The Grid provides various solutions to optimize its performance as described in the following articles:

* [Optimizing the Grid Performance]({%slug grid/performance/grid-performance-optimizations %})

* [Ajaxifying the Grid]({%slug grid/performance/ajaxifying-radgrid %})

* [Saving the Grid ViewState in Session]({%slug grid/performance/saving-the-grid-viewstate-in-session %})

* [Optimizing the Usage of the Grid ViewState]({%slug grid/performance/optimizing-viewstate-usage %})

* [Rebinding the Grid with `EnableViewState=false`]({%slug grid/performance/rebind-grid-with-enableviewstate-=-false %})

### Editor

The following articles provide information for optimizing the performance of the Editor:

* [Optimizing the Editor Performance]({%slug editor/performance/optimizations %})

* [Optimizing the Toolbar Loading]({%slug editor/performance/toolbar-loading-optimizations %})

### TreeView

For more information on optimizing the TreeView, refer to the article on [optimizing the TreeView performance]({%slug treeview/troubleshooting/optimizing-radtreeview-performance %}).

### Captcha

You can disable the Captcha audio to eliminate requests to the built-in audio handler. For more information, refer to the [Performance Optimization by Disabling Audio Handler]({%slug captcha/troubleshooting/optimize-application-performance-disable-audio%}) article.

### ComboBox

Performance might degrade with lots of items and lots of ComboBox instances on the page. For more information, refer to the [Optimizing the Combobox]({%slug combobox/troubleshooting/optimizing-the-combobox%}) article.

### Menu

For more information, refer to the [Optimizing RadMenu Performance]({%slug menu/performance/optimizing-radmenu-performance%}) article.

### TabStrip

For more information, refer to the [Optimizing RadTabStrip Performance]({%slug tabstrip/performance/optimizing-radtabstrip-performance%}) article.

### Pickers

Performance problems can be caused by using the pickers in list controls. For more information, refer to the following articles:

* [Optimizing the DatePicker Performance]({%slug datepicker/performance/optimizing-raddatepicker-performance%})

* [Optimizing the DateTimePicker Performance]({%slug datetimepicker/performance/optimizing-raddatetimepicker-performance%})

* [Optimizing the TimePicker Performance]({%slug timepicker/performance/optimizing-radtimepicker-performance%})

### Inputs and TextBoxes

Performance problems can be caused by using inputs and textboxes in templates of list controls. A better idea is to create an outside edit form similar to the one emonstrated in the [Client-side edit, update, delete and insert with Controls for ASP.NET AJAX, WebServices and LINQ](https://www.telerik.com/blogs/client-side-edit-update-delete-and-insert-with-radcontrols-for-asp-net-ajax-webservices-and-linq) article.

### ToolTip

The Tooltip and the TooltipManager are quite lightweight but you may still want to optimize them if many controls are rendered on the page. For more information, refer to the [Optimizing the ToolTip Performance]({%slug tooltip/performance/optimizing-radtooltip-performance%}) article.

### Scheduler

For more information, refer to the [Optimizing the Scheduler Performance]({%slug scheduler/performance/optimizing-radscheduler-performance%}) article.

### HtmlChart

For more information, refer to the [Optimizing the HtmlChart Performance]({%slug htmlchart/troubleshooting/performance-optimizations%}) article.

### AjaxPanel and AjaxManager

For more information, refer to the [Optimizing Performance Using the AjaxManager]({%slug ajaxmanager/performance/optimizing-performance-using-radajaxmanager%}) article.
