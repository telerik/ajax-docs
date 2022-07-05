---
title: JavaScript console error Telerik is not defined
description: Found out different reasons to get Telerik is not defined JavaScript error in your browser console - Telerik UI for ASP.NET AJAX
type: troubleshooting
page_title: JavaScript console error Telerik is not defined
slug: common-error-telerik-is-undefined
position: 
tags: 
ticketid: 1567201
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Found out the different reasons to get Telerik is not defined JavaScript error in your browser console

## Error Message
* Telerik is undefined
* Uncaught ReferenceError: Telerik is not defined
* Microsoft JScript runtime error: 'Telerik' is undefined
* Uncaught ReferenceError: $telerik is not defined

## Solution

To fix the above errors try the following tips:

* Set CombineScripts="false" in the ASP.NET script manager
* Disable the debugging in the web.config

	````XML
<compilation debug="false" targetFramework="4.8">
````

* Disable the UnobtrusiveValidationMode in the web.config file

	````XML
<appSettings>
	<add key="ValidationSettings:UnobtrusiveValidationMode" value="None"/>
	...
````

* Remove the targetFramework attribute from the httpRuntime section of the web.config
	````XML
<httpRuntime requestLengthDiskThreshold="512" useFullyQualifiedRedirectUrl="true" executionTimeout="110" requestValidationMode="2.0"  maxRequestLength="102400" />
````

* The error could be due to the login/authentication mechanisms that block resources and you need to add a <location> element to allow access to the Telerik handlers explicitly. You can find an example here: [Use Telerik Controls with ScriptManager on Login Page Throws an Error]({%slug using-controls-with-scriptmanager-login-page-error %}):

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

* Enable or Disable the Telerik ScriptManager CDN

	```XML
  <add key="Telerik.ScriptManager.TelerikCdn" value="Enabled" />
```

## See Also
* [Use Telerik Controls with ScriptManager on Login Page Throws an Error]({%slug using-controls-with-scriptmanager-login-page-error %})
* [`'Telerik' is undefined` When Running a Website in the Integrated Mode on IIS 7 and Later]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting %})
* [`'Sys' is undefined` Microsoft JavaScript Runtime Error]({% slug sys-is-undefined-ms-js-runtime-error %})
* [Error "Telerik is undefined"](https://stackoverflow.com/questions/11929178/error-telerik-is-undefined)
* [Uncaught Error : Telerik is not defined](https://www.telerik.com/forums/uncaught-error-telerik-is-not-defined)
* [Uncaught ReferenceError: $telerik is not defined](https://www.telerik.com/forums/uncaught-referenceerror-$telerik-is-not-defined)
* [Telerik is not defined error on page load](https://community.progress.com/s/article/telerik-is-not-defined-error-on-page-load)
* [Known Issues]({%slug links-troubleshooting-kb-resources%})

     