---
title: Controls Collection Cannot Be Modified because of Code Blocks Error Occurs
page_title: Controls Collection Cannot Be Modified because of Code Blocks Error Occurs
description: "When working with Telerik UI for ASP.NET AJAX, I get a controls collection cannot be modified because the control contains code blocks error message."
slug: cannot-modify-control-collection-because-of-code-clocks
tags: telerik, asp, net, ajax, troubleshooting, controls, collection, cannot, be, modified, because, the, control, contains, code, blocks, error
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

When working with Telerik UI for ASP.NET AJAX, I get an error that the controls collection cannot be modified because the control contains code blocks.

## Error Message

`The Controls collection cannot be modified because the control contains code blocks`

## Cause

The possible cause for this issues is that the code block is inside the `head` tag, for example:

````ASP.NET
<head id="Head1" runat="server">
  <script type="text/javascript">
  var grid = $find('<%= RadGrid1.ClientID %>');
  ...
  </script>
</head>
<body>
...
</body>
````

## Solution

To solve this issue, move the code block (`<% ... %>`) outside the `head` tag:

````ASP.NET
<head id="Head2" runat="server">
<telerik:RadCodeBlock id="RadCodeBlock1" runat="server">
   <script type="text/javascript">
       var grid = $find('<%= RadGrid1.ClientID %>');
       ...
   </script>
</telerik:RadCodeBlock>
</head>
<body>
...
</body>
or
<head id="Head3" runat="server">
</head>
<body>
   <telerik:RadCodeBlock id="RadCodeBlock1" runat="server">
   <script type="text/javascript">
       var grid = $find('<%= RadGrid1.ClientID %>');
       ...
   </script>
   </telerik:RadCodeBlock>
</body>   
````



## Error Message, This configuration section cannot be used at this path

**Problem**:

HTTP Error 500.19

Config error This configuration section cannot be used at this path. This happens when the section is locked at a parent level. Locking is either by default (overrideModeDefault="Deny"), or set explicitly by a location tag with overrideMode="Deny" or the legacy allowOverride="false".

**Suggested Solution**:

Check out our dedicated KB article about this error - [HTTP Error 500.19 Config error: This configuration section cannot be used at this path]({%slug common-http-error-500-19-this-configuration-section-cannot-be-used-at-this-path%})

## Telerik control stylesheet is not registered after an AJAX request (inside MS UpdatePanel) when the control is not initially visible on the page

**Problem**:

**Telerik control stylesheet is not registered after an AJAX request (inside MS UpdatePanel) when the control is not initially visible on the page**

**Suggested Solution**:

If the control is initially invisible and is shown after an ASP.NET AJAX update, you should manually register all the required CSS files in the head tag of your page. Otherwise, the control will not be displayed correctly. The easiest way to do this is through a LINK element:

````HTML
<link href="<my_path_to_stylesheet>" rel="stylesheet" runat="server" >
````



Alternatively, replace the MS UpdatePanel with **RadAjaxPanel** or ajaxify the control via **RadAjaxManager**. Thus the stylesheet should be applied properly after an AJAX request even if the **Telerik control** is initially invisible.

## Using the Telerik controls with RadScriptManager on your login page throws an error

**Problem**:

**Using the Telerik controls with RadScriptManager on your login page throws one of the following errors:**

* **ASP.NET Ajax client-side framework failed to load**

* **'Sys' is undefined**

* **"Telerik.Web.UI" is undefined**

**Cause**:

As the website denies access to all pages to unauthorized users, access to the **Telerik.Web.UI.WebResource.axd** handler is unauthorized. This causes the handler to serve the content of the login page instead of the combined scripts, hence the error.

**Suggested Solution**:

Add a **`<location>`** section to the application configuration file to allow access to **Telerik.Web.UI.WebResource.axd** to all users, like:

````XML
<configuration>
...
<location path="Telerik.Web.UI.WebResource.axd">
   <system.web>
     <authorization>
       <allow users="*"/>
     </authorization>
   </system.web>
 </location>
...
</configuration>
````

**Cause**:

If a website was migrated from an older version of ASP.NET to the latest there might be a *preCondition* attribute added to the Telerik.Web.UI.WebResource.axd handler declaration stating that the runtime version is 2.0

```
 preCondition="integratedMode,runtimeVersionv2.0"
```

**Suggested Solution**:

Remove *runtimeVersionv2.0* from the handler declaration.

## Design-Time error on a page using Telerik controls

**Problem**:

**Design-Time error on a page using Telerik controls:**

**Error Creating Control - Telerik control 'Property' cannot be initialized. Details: Unable to cast object of type 'Type' to type 'Type'**.

**Cause**:

If the **Telerik.Web.UI.dll** assembly is updated while a page using **Telerik controls** is in Design-time, Visual Studio creates two different versions of the assembly; hence two different versions of the same **Telerik controls** are available.

**Suggested Solution**:

Restart Visual Studio.

**Problem**:

When you drag a **Telerik control** from the Toolbox to the design surface, you get this error message:

**Error creating control. Unable to cast object of type 'Telerik.Web.UI.Radxxx' to type 'Telerik.Web.UI.ControlItemContainer"**

**Suggested Solution**:

Please check the following links for different solution options:

* [Error rendering control (Unable to cast object of TypeA to TypeA)](https://www.telerik.com/forums/error-rendering-control-unable-to-cast-object-of-typea-to-typea-75309ca98a0e)
* [Menu problem: "Error creating control" at design time](https://www.telerik.com/forums/menu-problem-39-error-creating-control-39-at-design-time)
* [Clearing Cache](https://www.telerik.com/forums/ajax-2009-q2-release-giving-me-gray-hair)
* [Visual Studio: "Error Creating Control"](https://www.telerik.com/blogs/visual-studio-ldquo-error-creating-control-rdquo) blog post


**Problem**:

**Design-time error on a page using Telerik controls after upgrading to Q1 2009**

* **Error creating control - ControlName**

* **Failed to create designer "Telerik.Web.UI.ControlName..."**

**Cause**:

Visual Studio 2008 has a problem with loading GAC-ed design-time assemblies of control libraries deployed in the Bin folder of a web site.

**Suggested Solutions** (select one of these):

1. Install SP1 of Visual Studio 2008.

1. Bin-deploy the design-time assembly

	* Add a reference to Telerik.Web.Design.dll to your web site or application

	* Remove Telerik.Web.Design.dll from the GAC

	* Restart Visual Studio

1. GAC-deploy the control library assembly

	* Add Telerik.Web.UI.dll in the GAC

	* Remove Telerik.Web.UI.dll from your bin folder

	* Restart Visual Studio

1. Copy **Telerik.Web.UI.dll** to **C:\Program Files\Microsoft Visual Studio 9.0\Common7\IDE\PublicAssemblies** and restart Visual Studio.



You can find more issues and solutions steps in the [Design-time Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%}) help article.

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
