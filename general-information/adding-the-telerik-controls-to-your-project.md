---
title: Adding the Telerik Controls to Your Project
page_title: Adding the Telerik Controls to Your Project | UI for ASP.NET AJAX Documentation
description: Adding the Telerik Controls to Your Project
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/adding-the-telerik-controls-to-your-project
tags: adding,the,telerik,controls,to,your,project
published: True
position: 1
---

# Adding the Telerik Controls to Your Project


Adding the Telerik® UI for ASP.NET AJAX controls to your application or WebForm is straightforward and this article explores the requirements and	the most common ways to do that.

This article contains the following sections:

* [Prerequisites](#prerequisites) — the main requirements the server,	development machine and current Web Application/Web Site must satisfy so you can use the Telerik controls.

* [Adding Telerik Controls to a WebForm](#adding-telerik-controls-to-a-webform) — explains how you can add and use the controls themselves on a form after the core requirements are satisfied.

## Prerequisites

To add Telerik® UI for ASP.NET AJAX to an existing ASP.NET web application you need to follow these steps:

1. Make sure you have installed ASP.NET AJAX, which comes as part of [.NET 3.5+ installations](https://www.microsoft.com/net/download/dotnet-framework-runtime). 

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [https://docs.microsoft.com/en-us/aspnet/web-forms/videos/aspnet-ajax/how-do-i-add-aspnet-ajax-features-to-an-existing-web-application](https://docs.microsoft.com/en-us/aspnet/web-forms/videos/aspnet-ajax/how-do-i-add-aspnet-ajax-features-to-an-existing-web-application).

1. Add the needed HTTP handlers in the web.config as described in the [web.config Settings Overview]({%slug general-information/web-config-settings-overview%}) article.

	>tip You can use the [Telerik Creation and Configuration Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard%}) to get the needed assemblies, their references and the web.config settings added to the solution.

1. Add a **ScriptManager** control on top of the page in which you are going to add any control.

	**ASP.NET**
	
		<asp:ScriptManager ID="ScriptManager1" runat="server" />				

	>tip If your page is a content page/user control you can add the ScriptManager control in your master/main page. For further details about the ScriptManager control you can check [http://www.asp.net/AJAX/Documentation/Live/overview/ScriptManagerOverview.aspx](http://www.asp.net/AJAX/Documentation/Live/overview/ScriptManagerOverview.aspx).

	>tip Alternatively, you can use a [RadScriptManager]({%slug scriptmanager/overview%}) which extends the standard ScriptManager	control and adds more features to it.

## Adding Telerik Controls to a WebForm

To add a Telerik control to an ASP.NET WebForm, you can use either of the following approaches:

### Drag a Telerik Control from the Toolbox

The easiest way to add a Telerik Control is by dragging its icon from the Visual Studio .NET Toolbox in Design mode. Visual Studio will automatically copy the **Telerik.Web.UI.dll** to the **bin** folder of your web-application and will create the respective references.

If you do not see the controls in the toolbox, examine the [Adding the Telerik Controls to the Visual Studio Toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%}) article.

### Add a Telerik Control Manually to the Form

You can add any Telerik Control manually to the page by following the instructions below.

* Copy the **Telerik.Web.UI.dll** from the **binXX** folder of the Telerik® UI for ASP.NET AJAX installation to the **bin** folder of your web application (where **XX** specifies the version of the .NET framework against which the assembly is built) and reference it. You can read more about the assemblies that come with your installation in the [Included Assemblies]({%slug introduction/installation/included-assemblies%}) article.

* Open your **aspx/ascx** file and add the Telerik® UI for ASP.NET AJAX Register directive at the top so that Visual Studio recognizes our control tags:

	**ASP.NET**

		<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %> 

	>tip If many pages in your application will use Telerik controls, you can add the following lines in your **web.config** file so you don't need to add the register directive in every page/user control.

	**XML**

		<pages>
		 <controls>
		   <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
		 </controls>
		</pages>   

* Write the product tags in the body of the WebForm. For example:

	**ASP.NET**

		<telerik:RadScheduler RenderMode="Lightweight" ID="RadScheduler1" runat="server" />

>tip AJAX-based controls like ours must be placed on the page after ScriptManager's declaration and inside the `<form>` tag.

### Configuring Controls

To configure a control, you can:

* Use the built-in properties from the markup or the code-behind.

* Use the inner tags of the control.

* Use the configuration wizard in the Visual Studio Designer.

You can read more about the individual controls' properties and features in their respective sections in the documentation, demos and by using the intellisense in Visual Studio.

### See Also

 * [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})

 * [Included Assemblies]({%slug introduction/installation/included-assemblies%})

 * [Adding the Telerik Controls to the Visual Studio Toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%})

 * [Visual Studio Extensions Overview]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/overview%})
