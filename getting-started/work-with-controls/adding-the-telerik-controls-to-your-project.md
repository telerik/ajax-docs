---
title: Adding the Controls to Your Project
page_title: Adding the Controls to Your Project
description: "Add Telerik UI for ASP.NET AJAX controls to an existing Web Forms project."
slug: getting-started/adding-the-telerik-controls-to-your-project
previous_url: getting-started/adding-the-telerik-controls-to-your-project, general-information/adding-the-telerik-controls-to-your-project
tags: adding, the, telerik, controls, to, your, web, forms, project
published: True
position: 1
---

# Adding the Controls to Your Project

This article provides details and lists additional information on adding the Telerik UI for ASP.NET AJAX controls to an existing ASP.NET web application or website, and also focuses on the way to provision the needed prerequisites.

For the step-by-step guides on getting up and running with the suite, refer to the following articles:

* [First Steps with MSI]({% slug introduction/installation/installing-the-telerik-controls-from-msi-file%})
* [First Steps with ZIP]({% slug introduction/installation/installing-the-telerik-controls-from-zip-file %})
* [First Steps with NuGet]({% slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package %})

## Prerequisites

Before adding a control to your project, verify that the server, development machine, and the web application or website meet the following requirements:

1. Install ASP.NET AJAX, which comes with <a href="https://www.microsoft.com/net/download/dotnet-framework-runtime" target="_blank">.NET 4.5+ installations</a>.

1. If your web application is not using ASP.NET AJAX, configure it to do so. For detailed instructions, refer to the <a href="https://docs.microsoft.com/en-us/aspnet/web-forms/videos/aspnet-ajax/how-do-i-add-aspnet-ajax-features-to-an-existing-web-application" target="_blank">Adding ASP.NET AJAX Features to an Existing Web Application</a> and <a href="https://visualstudiomagazine.com/articles/2022/05/16/vs2022-web-forms-tip.aspx">How to Do Web Forms in VS 2022 (Even Though Microsoft Recommends Blazor/.NET 6)</a> articles.

1. Add the needed HTTP handlers in the `web.config` file as described in the [web.config settings overview]({%slug general-information/web-config-settings-overview%}) article.

1. Add the needed assemblies and the required references to the solution. You can find the `Telerik.Web.UI.dll` file and the other assemblies in the `Telerik_UI_for_ASP.NET_AJAX_20xx_x_xxx_Dev_hotfix.zip` file that you can download from your [Telerik account](https://www.telerik.com/account/product-download?product=RCAJAX).

    You can also automate the previous two steps by using the [Convert to Telerik Web Application]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/convert-project %}) option in the [Telerik Visual Studio Extensions]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/overview %}).

1. Add a ScriptManager control at the top of the page where you intend to add a control.

		<asp:ScriptManager ID="ScriptManager1" runat="server" />				

	If the page is a content page or a user control, you can add the ScriptManager to the master or main page. For more information, refer to the <a href="https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.scriptmanager?view=netframework-4.8" target="_blank">Microsoft dedicated article</a>.

    Alternatively, you can use the [ScriptManager]({% slug scriptmanager/overview %}), which extends the standard ScriptManager control and adds more features.

## Adding Controls to WebForms

To add a Telerik control to an ASP.NET WebForm, either [drag the Telerik control from the toolbox](#dragging-the-control-from-the-toolbox) or [manually add the control to the form](#adding-the-control-manually).

### Dragging the Control from the Toolbox

To add a Telerik control, drag it from the Visual Studio .NET Toolbox in the Design mode. Visual Studio will automatically copy the `Telerik.Web.UI.dll` to the `bin` folder of your web application and will create the respective references.

If the Telerik controls aren't in the toolbox, refer to the [Adding the Telerik Controls to the Visual Studio Toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%}) article.

### Adding the Control Manually

You can manually add any control to the page by using the following instructions:

1. Copy the `Telerik.Web.UI.dll` assembly from the `binXX` folder of the [Telerik UI for ASP.NET AJAX installation]({%slug installation/which-file-do-i-need-to-install%}) to the `bin` folder of your web application (where `XX` specifies the version of the .NET framework supported by the assembly), and reference it. For more information about the assemblies in the installation packages, refer to the [Included Assemblies]({%slug introduction/installation/included-assemblies%}) article.

1. Open your `aspx` or `ascx` file and add the Telerik UI for ASP.NET AJAX `Register` directive at the top so that Visual Studio recognizes the Telerik control tags:

	````ASP.NET

		<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
	````

	If multiple pages in your application will use Telerik controls, add the following lines to the `web.config` file so you don't need to add the `Register` directive to every page or user control.

	````XML

		<pages>
		 <controls>
		   <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
		 </controls>
		</pages>   
	````

1. In the body of the Web Form, add the tags of the desired Telerik controls. Always place the Telerik AJAX controls after the ScriptManager declaration and inside the `<form>` tag. Also, make sure that the [`RenderMode` property]({%slug controls/render-modes%}) of the controls is set to `Lightweight`.

	````ASP.NET
		<form id="form1" runat="server">
			<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
			<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" Text="Some Text" runat="server" />
			<telerik:RadPushButton RenderMode="Lightweight" ID="RadButton1" runat="server" Text="Submit"></telerik:RadPushButton>
		</form>
	````

## Configuring the Controls

After you've added the needed controls, you can configure them by using the following approaches:

* Use the built-in properties from the markup or the code-behind.

* Use the inner tags of the control.

* Use the configuration wizard in the Visual Studio Designer.

For more information about the properties and features of each individual control, refer to their documentation and demos, and also use the IntelliSense in Visual Studio.

## See Also

* [First Steps with MSI]({% slug introduction/installation/installing-the-telerik-controls-from-msi-file%})
* [First Steps with ZIP]({% slug introduction/installation/installing-the-telerik-controls-from-zip-file %})
* [First Steps with NuGet]({% slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package %})
* [Setting the web.config File]({%slug general-information/web-config-settings-overview%})
* [Included Assemblies]({%slug introduction/installation/included-assemblies%})
* [Adding the Telerik Controls to the Visual Studio Toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%})
* [Visual Studio Extensions Overview]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/overview%})
* [Getting Started with Telerik UI for ASP.NET AJAX (Video Tutorials)](https://learn.telerik.com/learn/course/external/view/elearning/5/telerik-ui-for-aspnet-ajax)
