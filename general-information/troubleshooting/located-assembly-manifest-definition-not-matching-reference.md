---
title: Located Assembly Manifest Definition Does Not Match the Assembly Reference Error
page_title: Located Assembly Manifest Definition Does Not Match the Assembly Reference Error
description: "When working with Telerik UI for ASP.NET AJAX, design-time errors occur on a page that uses Telerik controls."
slug: located-assembly-manifest-definition-not-matching-reference
tags: telerik, asp, net, ajax, troubleshooting, located, assembly, manifest, definition, not, matching, assembly, reference 
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When working with Telerik UI for ASP.NET AJAX or dragging a Telerik control from the Toolbox to the design surface, design-time errors occur on a page that uses Telerik controls.

## Causes


## Error Messages


## Solutions




## System.IO.FileLoadException: Could not load file or assembly 'Telerik.Web.UI, Version=xxxx.x.xxx.xx, Culture=neutral, PublicKeyToken=xxxxxxxxxxxxxxxx' or one of its dependencies. The located assembly's manifest definition does not match the assembly reference. (Exception from HRESULT: 0x80131040)

**Problem**:

**System.IO.FileLoadException: Could not load file or assembly 'Telerik.Web.UI, Version=xxxx.x.xxx.xx, Culture=neutral, PublicKeyToken=xxxxxxxxxxxxxxxx' or one of its dependencies. The located assembly's manifest definition does not match the assembly reference. (Exception from HRESULT: 0x80131040)**

**Cause and Solution**:

Please check [this help article](https://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#could-not-load-file-or-assembly-telerikwebui-after-upgrade) for detailed information on what is causing this error and how to handle it.

## Telerik controls do not work if a Compression Module is used in the project/web site

**Problem**:

**Telerik controls do not work if a Compression Module is used in the project/web site.**

**Cause**:

Double compression of web resources: Web resources requested by the **Telerik controls** are compressed twice: once by the Script/RadScript/RadStyleSheet- Manager and once by the Compression Module.

**Suggested Solution**:

Skip compression for the requested resource in the Compression Module. If the **OutputCompression** property of RadScriptManager/RadStyleSheetManager is set to **Disabled**, you can configure the Compression Module to compress **Telerik.Web.UI.WebResource.axd**.




|  **Control**  |  **Requested Resources**  |
| ------ | ------ |
|ScriptManager|WebResource.axd, ScriptResource.axd|
|RadScriptManager|Telerik.Web.UI.WebResource.axd|
|RadStyleSheetManager|Telerik.Web.UI.WebResource.axd|

## Security Exception

**Problem**:

**Security Exception**

**Description:** The application attempted to perform an operation not allowed by the security policy. To grant this application the required permission, please contact your system administrator or change the application's trust level in the configuration file.

**Exception Details:** *System.Security.SecurityException:Request for the permission of type 'System.Web.AspNetHostingPermission,...*

**Cause**:

Microsoft changed the default setting of the **Load User Profile** setting of the application pools in Windows 7 and Windows 2008 (previously the setting was **True**, in IIS7.5 it is **False**).

**Suggested Solution**:

Open the **Advanced Settings** of the Application Pool and set the **Load User Profile** property to **True**.

## Setting ClientIDMode property to Static breaks the Telerik controls functionality

**Problem**:

**Setting ClientIDMode property to Static breaks the Telerik controls functionality**

**Suggested Solution**:

Please note that using **ClientIDMode=Static** mode **for Telerik AJAX controls is not supported**. You should use **AutoID** mode for the Telerik controls on the page especially when they are performing AJAX requests. Microsoft recommends using **ClientIDMode="Static"** only for static controls. The Telerik controls, on the other hand, are controls with complex hierarchies of child controls and templates so setting their ClientID mode to static will break their functionality.

## Telerik controls are incompatible with Ajax Control Toolkit

The AJAX Toolkit Team announced that standard script manager can no longer be used with their controls:

*“- You must use the ToolkitScriptManager instead of the ScriptManager with the Ajax Control Toolkit.”*

[http://ajaxcontroltoolkit.codeplex.com/releases/view/112805](http://ajaxcontroltoolkit.codeplex.com/releases/view/112805)

Since the **RadScriptManager** is based on the standard asp:ScriptManager, this change makes it not compatible, too. Therefore, to use both of the Telerik UI and AJAX Toolkit control bundles simultaneously within the same project, you have to use the **ToolkitScriptManager**.

Upon using the toolkit manager, you can come across an error when using an UpdatePanel. We’ve found out that this is due to the **ToolkitScriptManager** having a bug with script combining. The bug is fixed one day after the release:

[http://ajaxcontroltoolkit.codeplex.com/workitem/27517](http://ajaxcontroltoolkit.codeplex.com/workitem/27517)

[http://ajaxcontroltoolkit.codeplex.com/releases/view/116091](http://ajaxcontroltoolkit.codeplex.com/releases/view/116091)

The problem can be reproduced in release mode when scripts are combined and after an AJAX request. The temporary workaround is to set the **CombineScripts** property in the **ToolkitScriptManager** tag to **false**. The issue is not reproducible into debug mode, because the script combining logic works only in release mode.

You can find additional information about the Telerik controls and AJAX Control Toolkit history in the following article:

[RadScriptManager Troubleshooting]({%slug scriptmanager/troubleshooting/overview%})

## Telerik controls integration with Kendo UI widgets

There are certain Telerik UI for ASP.NET AJAX controls which are ASP.NET WebForms server-side wrappers of Kendo UI widgets. These controls already load jQuery and Kendo UI widget specific JavaScript files, so you must ensure there aren't any script conflicts by using the same jQuery and Kendo UI versions for both suites. More information is available in the [RadHtmlChart Integration With KendoUI Widgets]({%slug htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets%}) help article.

Here is a list of those controls:

* RadChat
* RadClientDataSource
* RadClientExportManager
* RadDiagram
* RadGantt
* RadGauge
* RadHtmlChart
* RadMap
* RadMultiColumnComboBox
* RadSpreadsheet
* RadTreeMap

# Unobtrusive Validation Basics

**Unobtrusive validation** is a type of validation that makes use of the data - HTML5 attributes and jQuery for validation purposes. It is enabled by default for all .NET 4.5 projects and it requires a jQuery library that is registered with the ScriptManager as **jquery**. You can easily add this registration by installing the [AspNet.ScriptManager.jQuery NuGet package](https://www.nuget.org/packages/AspNet.ScriptManager.jQuery/).

In addition, when there is a ScriptManager control on the page, you need to instruct it to register jQuery before the two core script files that provide the unobtrusive validation (WebForms.js and WebUIValidation.js). You can find information about this requirement in the [Unobtrusive validation breaks with a Script Manager on the page](https://connect.microsoft.com/VisualStudio/feedback/details/748064/unobtrusive-validation-breaks-with-a-script-manager-on-the-page) Microsoft Connect feedback item.

The unobtrusive validation is automatically configured when you create a web site via the **.NET 4.5 Web Forms Site** template of Visual Studio. If you use it with a RadScriptManager or in a Telerik web site or web application template, however, there are a few common scenarios that require additional modifications. You can find detailed information about them in [jQuery Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/jquery-troubleshooting%}) help article.

### See Also

 * [Design-time Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%})

 * [Web Resources Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%})

 * [ToolBox Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/toolbox-troubleshooting%})

 * [Skins Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/skins-troubleshooting%})
