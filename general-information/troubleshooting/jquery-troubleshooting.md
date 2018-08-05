---
title: jQuery Troubleshooting
page_title: jQuery Troubleshooting | UI for ASP.NET AJAX Documentation
description: jQuery Troubleshooting
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/jquery-troubleshooting
tags: jquery,troubleshooting
published: True
position: 6
---

# jQuery Troubleshooting



This article treats the most common issues related to the jQuery library that is embedded in the Telerik® UI for ASP.NET AJAX suite.

The article contains the following sections:

* [Unobtrusive Validation Basics](#unobtrusive-validation-basics)—this section explains what unobtrusive validation is and what it needs to work.

* [How To Use Unobtrusive Validation In .NET 4.5 Web Forms Site / Web Forms Application With RadScriptManager](#how-to-use-unobtrusive-validation-in-net-45-web-forms-site--web-forms-application-with-radscriptmanager)—this section explains how to use unobtrusive validation in a web site that is created with the .NET 4.5 **Web Forms Site** or **Web Forms Application** template of Visual Studio and uses **RadScriptManager**.

* [How To Use Unobtrusive Validation In .NET 4.5 Telerik Web Site / Telerik Web Application](#how-to-use-unobtrusive-validation-in-net-45-telerik-web-site--telerik-web-application)—this section explains how to use unobtrusive validation in a web site that is created with the .NET 4.5 **Telerik Web Site** or **Telerik Web Application** template of Visual Studio.

* [How To Use Unobtrusive Validation In .NET 4.5 Telerik Web Site / Telerik Web Application That Has jQuery Registered In RadScriptManager](#how-to-use-unobtrusive-validation-in-net-45-telerik-web-site--telerik-web-application-that-has-jquery-registered-in-radscriptmanager) — this section explains how touse unobtrusive validation in a web site that is created with the .NET 4.5 **Telerik Web Site** or **Telerik Web Application** template of Visual Studio and has jQuery registered with the RadScriptManager via a **ScriptReference** with **Name** property set to **jquery**.

* [0x800a139e - JavaScript runtime error: SyntaxError](#0x800a139e---javascript-runtime-error-syntaxerror)—this section treats a jQuery runtime error in Visual Stutio output window when the project is started in debug mode in Internet Explorer.

>tip Most of the issues treated in this article stem from the Unobtrusive Validation mode. You can **avoid jQuery and validation problems** with a single line in the web.config that will **disable the Unobtrusive Valudation**.
>
>    **web.config**
>
>        <appSettings>
>            <add key="ValidationSettings:UnobtrusiveValidationMode" value="None"/>
>

## Unobtrusive Validation Basics

**Unobtrusive validation** is a type of validation that makes use of the data - HTML5 attributes and jQuery for validation purposes. It is enabled by default for all .NET 4.5 projects and it requires a jQuery library that is registered with the ScriptManager as **jquery**. You can easily add this registration by installing the [AspNet.ScriptManager.jQuery NuGet package](https://www.nuget.org/packages/AspNet.ScriptManager.jQuery/).

In addition, when there is a ScriptManager control on the page, you need to instruct it to register jQuery before the two core script files that provide the unobtrusive validation (WebForms.js and WebUIValidation.js). You can find information about this requirement in the [Unobtrusive validation breaks with a Script Manager on the page](https://connect.microsoft.com/VisualStudio/feedback/details/748064/unobtrusive-validation-breaks-with-a-script-manager-on-the-page) Microsoft Connect feedback item.

The unobtrusive validation is automatically configured when you create a web site via the **.NET 4.5 Web Forms Site** template of Visual Studio. If you use it with a RadScriptManager or in a Telerik web site or web application template, however, there are a few common scenarios that require additional modifications. You can find detailed information about them in the sections below.

## How To Use Unobtrusive Validation In .NET 4.5 Web Forms Site / Web Forms Application With RadScriptManager

When you create a **.NET 4.5 Web Forms Site**, it comes with a jQuery library that is already registered with the ScriptManager as **jquery**. The unobtrusive validation will work as long as the standard asp:ScriptManager control is used.

The Telerik controls bring their own specific version of jQuery and the RadScriptManager control registers that version as **jquery**, after removing all registrations with the same name.

As a result, when you replace the asp:ScriptManager with a RadScriptManager, the initial **jquery** registration will be removed and the unobtrusive validation will not find it.

The solution in this case is to ensure that only one version of jQuery is used in the web site and that you register it so that the unobtrusive validation can locate it.The following steps describe how to achieve it:

1. Set the **EnableEmbeddedjQuery** property of RadScriptManager to **false** to disable the jQuery that is embedded in Telerik.Web.UI thus preventing the removal of the **jquery** registration that comes with the web site project.

1. Open **TOOLS**> **Library Package Manager** > **Package Manager Console** and run the following command to uninstal land unregister the version of jQuery that is provided with the Visual Studio template: *`PM> Uninstall-Package AspNet.ScriptManager.jQuery -Version x.x.x`* (x.x.x is the version of jQuery that comes installed with the web site).

1. In the Package Manager Console run the following command to install and register the version of jQuery that is specific for your current version of the Telerik controls (you can check it in the [Using jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}) help article): *PM> Install-Package AspNet.ScriptManager.jQuery -Version x.x.x* (x.x.x is the version of jQuery that comes with the Telerik controls).

	>note You can install another version than the one included in the Telerik controls, but this is not tested and we cannot guarantee full compatibility.



You now have only one version of jQuery that is used throughout your web site and by the Telerik controls, so there should be no conflicts and the unobtrusive validation should work as expected.

## How To Use Unobtrusive Validation In .NET 4.5 Telerik Web Site / Telerik Web Application

When you create **.NET 4.5 Telerik Web Site**, the default web form has a RadScriptManager. This means that the version of jQuery that goes with the Telerik controls is registered with the ScriptManager as **jquery**, so you need to specify the order in which jQuery and the validation scripts are registered.The validation scripts of the unobtrusive validation (WebForms.js and WebUIValidation.js) are not available in this case, so you also need to install them on the site.

You can follow the steps below to setup the unobtrusive validation:

1. Open **TOOLS > Library Package Manager > Package Manager Console** and run the following command to install the Microsoft Ajax optimization bundlefor Web Forms with ScriptManager:

	*`PM> Install-Package Microsoft.AspNet.ScriptManager.WebForms -Version x.x.x`* (you can check the current version of this NuGet package [in its download page](https://www.nuget.org/packages/Microsoft.AspNet.ScriptManager.WebForms)).This will install the script files WebForms.js and WebUIValidation.js on the web site.

1. Configure RadScriptManager as shown in **Example 1** to specify that jQuery is registered before the validation scripts.

**Example 1**: Registering the validation scripts in the correct order.

````ASP.NET
<telerik:RadScriptManager runat="server" ID="RadScriptManager1"> 
    <Scripts> 
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" /> 
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" /> 
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" /> 
        <asp:ScriptReference Name="WebForms.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebForms.js" /> 
        <asp:ScriptReference Name="WebUIValidation.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebUIValidation.js" /> 
    </Scripts> 
</telerik:RadScriptManager>
````

## How To Use Unobtrusive Validation In .NET 4.5 Telerik Web Site / Telerik Web Application That Has jQuery Registered In RadScriptManager

Even if you created a web site with the **.NET 4.5 Telerik Web Site** Visual Studio template, you can still have an additional jQuery version that is registered withRadScriptManager as **jquery**. This can happen, for example, if you installed the AspNet.ScriptManager.jQuery NuGet package. This puts you in situation similar to the one that is described in the [How To Use Unobtrusive Validation In .NET 4.5 Web Forms Site / Web Forms Application With RadScriptManager](#how-to-use-unobtrusive-validation-in-net-45-web-forms-site--web-forms-application-with-radscriptmanager) section, because you have two registered versions of jQuery - one with the Telerik controls and one with the NuGet package.

The solution is also similar because you need to leave only one version of jQuery on the web site, however in this case the order for registering the scripts in RadScriptManager is not defined by the Visual Studio template so you need to configure it manually.

You can use the following steps to configure the unobtrusive validation when you have a custom version of jQuery in the Telerik web site:

1. Set the **EnableEmbeddedjQuery** property of RadScriptManager to **false** to disable the jQuery that is embedded in Telerik.Web.UI thus preventing the removal of the **jquery** registration that comes with the web site project.

1. Open **TOOLS**> **Library Package Manager** > **Package Manager Console** and run the following command to uninstall and unregister the version of jQuery that comes with the web site: *`PM> Uninstall-Package AspNet.ScriptManager.jQuery -Version x.x.x`* (x.x.x is the version of jQuery that comes installed with the web site).

1. In the Package Manager Console run the following command to install and register the version of jQuery that is specific for your current version of the Telerik controls (you can check it in the [Using jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}) help article): *`PM> Install-Package AspNet.ScriptManager.jQuery -Version x.x.x`* (x.x.x is the version of jQuery that comes with the Telerik controls).

	>note You can install another version than the one included in the Telerik controls, but this is not tested and we cannot guarantee full compatibility.


1. Run the following command in the Package Manager Console to install the Microsoft Ajax optimization bundlefor Web Forms with ScriptManager:*PM> Install-Package Microsoft.AspNet.ScriptManager.WebForms -Version x.x.x* (you can check the current version of this NuGet package [in its download page](https://www.nuget.org/packages/Microsoft.AspNet.ScriptManager.WebForms)).This will install the script files WebForms.js and WebUIValidation.js on the web site.

1. Configure RadScriptManager as shown in **Example 2** to specify that jQuery is registered before the validation scripts.

You now have only one version of jQuery that is used throughout your web site and by the Telerik controls, so there should be no conflicts and the unobtrusive validation should work as expected.

**Example 2**: Registering the validation scripts in the correct order in RadScriptManager with disabled embedded jQuery.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
    <Scripts>
        <asp:ScriptReference Name="jquery" />
        <asp:ScriptReference Name="WebForms.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebForms.js" />
        <asp:ScriptReference Name="WebUIValidation.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebUIValidation.js" />
    </Scripts>
</telerik:RadScriptManager>
````

## 0x800a139e - JavaScript runtime error: SyntaxError

When you run a Telerik UI project in debug mode under Internet Explorer, the Visual Studio output window may throw the following JavaScript errors:

`Exception was thrown at line 1577, column 10673 in http://localhost:55082/TWS/Telerik.Web.UI.WebResource.axd?_TSM_HiddenField_=RadScriptManager1_TSM&compress=1&_TSM_CombinedScripts_=;;System.Web.Extensions,+Version=4.0.0.0,+Culture=neutral,+PublicKeyToken=31bf3856ad364e35:en-US:0f2ae90c-87fb-4f74-9210-4b167170d85e:ea597d4b:b25378d2;Telerik.Web.UI,+Version=2016.3.1027.40,+Culture=neutral,+PublicKeyToken=121fae78165ba3d4:en-US:a5034868-8cfd-4375-ba8c-d3e7543c32f7:16e4e7cd:f7645509:24ee1bba:4cd1fec6:77613e24:71188da4:f0c58c30:9b7cc2d2:ec7335e:d944e0f6:c442ac3f:8d1fecce:69667591:6b6b9ee5:595e7652`
`0x800a139e - JavaScript runtime error: SyntaxError`

The issue is not directly related to the UI for ASP.NET AJAX controls and can be reproduced on a simple page with no Telerik controls that contains a reference to jQuery. For example:

>caption **Example 3**: Visual Studio output window shows JavaScript errors when a project that references jQuery is run in debug mode under Internet Explorer.

````ASP.NET
<form id="form1" runat="server">
    <asp:ScriptManager ID="Scriptmanager1" runat="server">
        <Scripts>
            <asp:ScriptReference Path="~/Scripts/jquery-1.9.1.js" />
        </Scripts>
    </asp:ScriptManager>
</form>
````

`Exception was thrown at line 4224, column 4 in http://localhost:60537/WebSite1/Scripts/jquery-1.9.1.js`
`0x800a139e - JavaScript runtime error: SyntaxError`

This is a runtime error from a caught exception that doesn't affect the production environment. More information on the matter is available in this bug report [https://bugs.jquery.com/ticket/14123](https://bugs.jquery.com/ticket/14123)
