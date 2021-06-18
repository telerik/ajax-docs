---
title: Adding the Telerik Controls to Your Project
page_title: Adding the Telerik Controls to Your Project
description: Learn how to add the Telerik Controls to an existing Web Forms Project.
slug: getting-started/adding-the-telerik-controls-to-your-project
previous_url: general-information/adding-the-telerik-controls-to-your-project
tags: adding,the,telerik,controls,to,your,project
published: True
position: 2
---

# Adding the Telerik Controls to Your Project

This article describes how to add the Telerik® UI for ASP.NET AJAX controls to an existing ASP.NET web application or website and lists the required prerequisites.

If you are looking for a complete step-by-step guide on creating a new web application with Telerik controls, see the [First Steps]({%slug getting-started/first-steps%}) article.

## Prerequisites

Before adding a Telerik control to your project, verify that the server, development machine, and the web application or website satisfy the following requirements:

1. Make sure you have installed ASP.NET AJAX, which comes with <a href="https://www.microsoft.com/net/download/dotnet-framework-runtime" target="_blank">.NET 3.5+ installations</a>.

1. If your web application is not using ASP.NET AJAX, configure it to do so. For detailed instructions, see <a href="https://docs.microsoft.com/en-us/aspnet/web-forms/videos/aspnet-ajax/how-do-i-add-aspnet-ajax-features-to-an-existing-web-application" target="_blank">Adding ASP.NET AJAX Features to an Existing Web Application</a>.

1. Add the needed HTTP handlers in `web.config` as described in the [web.config Settings Overview]({%slug general-information/web-config-settings-overview%}) article.

    >tip To configure your project by adding the needed assemblies, the required references, and `web.config` settings to the solution, you can use the [Convert to Telerik Web Application](https://docs.telerik.com/devtools/aspnet-ajax/general-information/integration-with-visual-studio/visual-studio-extensions/convert-project) option in the [Telerik Visual Studio Extensions](https://docs.telerik.com/devtools/aspnet-ajax/general-information/integration-with-visual-studio/visual-studio-extensions/overview). Alternatively, you can log into [Your Telerik.com account](https://www.telerik.com/account/product-download?product=RCAJAX) and obtain the `Telerik.Web.UI.dll` and other desired assemblies from the Telerik_UI_for_ASP.NET_AJAX_20xx_x_xxx_Dev_hotfix.zip file.

1. Add a **ScriptManager** control at the top of the page in which you are going to add a Telerik control.
	
		<asp:ScriptManager ID="ScriptManager1" runat="server" />				

	>tip If the page is a content page or user control, you can add the ScriptManager to the master or main page. For more details about ScriptManager, see [Microsoft's dedicated article](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.scriptmanager?view=netframework-4.8).

    Alternatively, you can use [RadScriptManager](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/overview), which extends the standard ScriptManager control and adds more features to it.

## Adding Telerik Controls to a WebForm

To add a Telerik control to an ASP.NET WebForm, you can use either of the following approaches:

### Dragging a Telerik Control from the Toolbox

The easiest way to add a Telerik Control is by dragging it from the Visual Studio .NET Toolbox in Design mode. Visual Studio will automatically copy the `Telerik.Web.UI.dll` to the `bin` folder of your web application and will create the respective references.

If the Telerik controls aren't in the toolbox, see [Adding the Telerik Controls to the Visual Studio Toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%}).

### Manually Adding a Telerik Control to the Form

You can add any Telerik Control manually to the page by following the instructions below:

1. Copy the `Telerik.Web.UI.dll` assembly from the `binXX` folder of the [Telerik® UI for ASP.NET AJAX installation]({%slug installation/which-file-do-i-need-to-install%}) to the `bin` folder of your web application (where `XX` specifies the version of the .NET framework supported by the assembly), and then reference it. To learn more about the assemblies in the various Telerik UI installation packages, see [Included Assemblies]({%slug introduction/installation/included-assemblies%}).

1. Open your `aspx` or `ascx` file and add the Telerik® UI for ASP.NET AJAX `Register` directive at the top so that Visual Studio recognizes the Telerik control tags:

	````ASP.NET

		<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %> 
	````

	>tip If multiple pages in your application will use Telerik controls, add the following lines to the `web.config` file so you don't need to add the `Register` directive to every page or user control.

	````XML

		<pages>
		 <controls>
		   <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
		 </controls>
		</pages>   
	````

1. In the body of the Web Form, add the tags of the desired Telerik controls:

	````ASP.NET
		<form id="form1" runat="server">
			<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" Text="Some Text" runat="server" /> 
			<telerik:RadPushButton RenderMode="Lightweight" ID="RadButton1" runat="server" Text="Submit"></telerik:RadPushButton>
		</form>
	````

>Always place the Telerik AJAX controls after the ScriptManager declaration and inside the `<form>` tag. Make sure that the [RenderMode property]({%slug controls/render-modes%}) of the controls is set to Lightweight.

## Configuring Controls

After you've added the needed controls, you can configure them by using the following approaches:

* Use the built-in properties from the markup or the code-behind.

* Use the inner tags of the control.

* Use the configuration wizard in the Visual Studio Designer.

You can read more about the individual controls' properties and features in their respective sections in the documentation, demos, and by using the IntelliSense in Visual Studio.

### See Also

 * [First Steps with UI for ASP.NET AJAX](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/first-steps)

 * [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})

 * [Included Assemblies]({%slug introduction/installation/included-assemblies%})

 * [Adding the Telerik Controls to the Visual Studio Toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%})

 * [Visual Studio Extensions Overview]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/overview%})
