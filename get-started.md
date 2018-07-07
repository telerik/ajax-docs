---
title: Get Started
page_title: Get Started with UI for ASP.NET AJAX | UI for ASP.NET AJAX Documentation
description: Get Started with UI for ASP.NET AJAX
slug: introduction/get-started
tags: get,started
published: True
position: 1
---

# Get Started with UI for ASP.NET AJAX

This article explains how to get the Telerik UI for ASP.NET AJAX controls in your project and start using them quickly. The process consists of the following steps:

1. [Download the Controls](#download-the-controls)
1. [Add the Controls to Your Project](#add-the-controls-to-your-project)
1. [Add a Control to a Page](#add-a-control-to-a-page)

Once you have your first simple control up and running, take a look at the [next steps](#next-steps) section to start exploring the control functionality in more detail.

## Download the Controls

The easiest way to get the controls to your development machine is to use the [Telerik Control Panel](https://www.telerik.com/download-trial-file/v2/control-panel) or to download the [automated MSI installer]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) from [Your telerik.com account](https://www.telerik.com/account/product-download?product=RCAJAX).

The following article can help you choose the installation type that is most suitable for your needs and preferences: [Which File Do I Need to Install]({%slug installation/which-file-do-i-need-to-install%}).

If you are not a customer, you can [download a free, fully functional trial](https://www.telerik.com/download-trial-file/v2-b/ui-for-asp.net-ajax) and the same options will apply to you as well.

## Add the Controls to Your Project

The easiest way to get the Telerik UI for ASP.NET AJAX controls in your project is to:

1. Install the [Telerik AJAX Visual Studio Extensions](https://marketplace.visualstudio.com/items?itemName=TelerikInc.TelerikASPNETAJAXVSExtensions). You can easily do this in Visual Studio by searching the Online Marketplace for "telerik asp.net ajax".

1. Reference the controls in your project:

    * If you already have a WebForms project, run the [Convert Project Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/convert-project%}).
    * If you do not have a project, run the [Create Project Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard%}).


If you prefer full manual control over your project, you can **copy** the T**elerik assemblies** to the `~/bin` and **add references** to them through the Visual Studio interface. In this case you should also [update the web.config]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig). The controls come packaged in [several assemblies]({%slug introduction/installation/included-assemblies%}) and to get started, you only need `Telerik.Web.UI.dll`, `Telerik.Web.UI.Skins.dll` and `Telerik.Web.Design.dll`.

## Add a Control to a Page

The final step is to actually use a control on a page and run it in the browser:

1. **Add** a **ScriptManager** control on top of the page in which you are going to add a Telerik control. This is required by any MS AJAX-based control.

    **ASPX**

        <form id="form1" runat="server">
            <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
            </telerik:RadScriptManager>

1. **Register the Telerik namespace** with the project:

    * To **register** the namespace **on all pages** and user controls, add the following to your `web.config`:

        **web.config**

              <system.web>
                <pages>
                    <controls>
                        <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
                    </controls>
                </pages> 


    * If you want the controls available **on the current page only**, add the following Register directive just below the `<%@ Page %>` directive:

        **ASPX**

            <%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %> 


1. **Add a Telerik control** to the page, for example, a [RadEditor](https://demos.telerik.com/aspnet-ajax/editor/examples/overview/defaultcs.aspx):

    **ASPX**

        <form id="form1" runat="server">
            <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
            </telerik:RadScriptManager>
            <telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight"></telerik:RadEditor>

    * You can also **drag** a control **from** the **Toolbox**. If you do not see the controls in the toolbox, examine the Adding the [Telerik Controls to the Visual Studio Toolbox]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%}) article.

1. **Run the page** in the browser by pressing `F5`.

## Next Steps

Now that you have the Telerik UI for ASP.NET AJAX controls running in your project, you may want to explore their features, customize their behavior or change their appearance. Below you can find guidance on getting started with such tasks:

* [Explore control features](#explore-control-features)
* [Customize control behavior](#customize-control-behavior)
* [Change control appearance](#change-control-appearance)

### Explore Control Features

To get a quick overview of what each control offers, the fastest approach is to go to our [Live Demos](http://demos.telerik.com/aspnet-ajax).

You can **download the demo site** from your telerik.com account as a VS project and play around with the demos in the comfort of your IDE. The ` Telerik_UI_for_ASP.NET_AJAX_<version>_Demos_Dev.msi` and `Telerik_UI_for_ASP.NET_AJAX_<version>_Dev.zip` files contain the demo site. If your license is a trial one, you will see `...Trial.msi` and `...Trial.zip` respectively.

You can **explore** the available properties, events and inner tags of any control through the VS **intellisense** to get a quick glimpse of their concepts and availability. In addition to that, the **documentation** provides a section for each control that contains help articles **on distinct features and API reference**.

Last, but not least, some most common tasks and configuration options are available in the control's **Smart Tag in Design Mode**. You will also find **design-time wizards** and **links** that can be useful when you are getting started with a feature, or even for advanced users who want to save time with setting up collections, data sources or properties.

### Customize Control Behavior

We try to create built-in features for the most common use cases, and the rich API the controls provide lets you customize their behavior further.

If you do not immediately see a feature you need, **take a look at the control properties and events** and it is likely that something will stand out as relevant. **Searching online** for your question is likely to provide you with **demos**, **documentation** or **forum** threads that treat similar questions and can **jump-start your development**.

Each control also has a section in its documentation that is dedicated to listing properties and events with details on what they do and how they are used. The folders are invariably called **`Server-side Programming`** and **`Client-side Programming`** in the table of contents on the left hand side.
This is the first place to look at when you need to **implement additional logic** around the control's functionality as it provides **API reference and event handling information**.

**Complex controls** often use other Telerik controls internally, and so **customizing** their behavior usually **boils down to accessing the child controls and using their properties and events** as if they were not nested. Thus, looking for child control references is a shortcut to customizing complex controls.  They can be exposed as properties, and often times using `.FindControl()` will let you access them.

When you need to get work done **in the browser**, you will need a **reference to the client-side object** of the control. This is a bit peculiar in MS AJAX, and the [Get Client-side Reference to a Control Object]({%slug general-information/get-client-side-reference%}) help article explains how to do that.

### Change Control Appearance

The UI for ASP.NET AJAX controls use [Skins]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}) to change their appearance. We provide over 20 built-in skins that can fit in the majority of web application designs.

The easiest way to [set a skin]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/overview%}#using-a-skin) is to use the **Design-time Skin dropdown in the Smart Tag** of the control. You can show the Smart Tag in Source Mode by pressing `Ctrl+.`.

In case you need to tweak the control appearance, there are two distinct approaches:

* You can [create a few CSS overrides]({%slug https://docs.telerik.com/devtools/aspnet-ajax/general-information/controlling-visual-appearance/modifying-built-in-skins%}) that will implement the small change you seek.

* Or, you can [create a custom skin]({%slug theme-builder/create-and-download%}) that matches your requirements.

In either case, you may find helpful the [Improve Your Debugging Skills with Chrome DevTools](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools) blog post.

If you experience issues with the control appearance, start by examining the [Different appearance or behavior in Internet Explorer on local and production servers](https://www.telerik.com/support/kb/aspnet-ajax/details/different-appearance-in-internet-explorer-on-local-and-production-servers) KB article.

### More Learning Resources

Below you can find more detailed information on everything discussed above. This includes alternative solutions, next steps and more advanced functionality.
You don't need all of this immediately, but you can use this list as a starting point for future reference.


Installation
* [Which File Do I Need to Install?]({%slug installation/which-file-do-i-need-to-install%})
* [Included Assemblies]({%slug introduction/installation/included-assemblies%})
* [Adding the Telerik Controls to Your Project]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/adding-the-telerik-controls-to-your-project%})
* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})
* [Telerik Visual Studio Extensions]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/overview%})

Appearance
* [Controlling Visual Appearance Overview]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/overview%})
* [How Skins Work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%})
* [Skin Registration]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%})
* [Modifying Built-in Skins]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/modifying-built-in-skins%})
* [Creating a Custom Skin]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/creating-a-custom-skin%})
* [RadSkinManager]({%slug controls/radskinmanager%})

Troubleshooting
* [Installation Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/installation-troubleshooting%})
* [General Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting%})
* [Web Resources Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%})
* [Design-time Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%})
* [ToolBox Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/toolbox-troubleshooting%})
* [Skins Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/skins-troubleshooting%})
* [jQuery Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/jquery-troubleshooting%})
* [Content Security Policy]({%slug general-information/content-security-policy%})
* [Bad Appearance](https://www.telerik.com/support/kb/aspnet-ajax/details/different-appearance-in-internet-explorer-on-local-and-production-servers)

General functionality
* [CDN for Telerik Scripts]({%slug scriptmanager/cdn-support/overview%})
* [CDN for Telerik Skins]({%slug stylesheetmanager/cdn-support/overview%})
* [Render Modes]({%slug controls/render-modes%})
* [Get Client-side Reference to a Control Object]({%slug general-information/get-client-side-reference%})
* [How to bind the Grid properly on the Server-Side](https://www.telerik.com/support/kb/aspnet-ajax/grid/details/how-to-bind-radgrid-properly-on-server-side)

Responsive design
* [Mobile Support and Responsiveness]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/mobile-support-and-responsiveness%})
* [Telerik Static Client Library]({%slug controls/telerik-static-client-library%})
* [Browser Detection Client-side API]({%slug mobile-support/helper-tools/browser-detection-api%})
* [Browser Detection Server-side API]({%slug controls/raddevicedetectionframework%})

Deployment
* [Deploying a Telerik-enabled WebApplication]({%slug introduction/deployment/deploying-a-telerik-enabled-webapplication%})
* [Using the Global Assembly Cache]({%slug introduction/deployment/using-the-global-assembly-cache%})
* [Protecting the Telerik ASP.NET AJAX Assemblies]({%slug introduction/deployment/protecting-the-telerik-asp.net-ajax-assembly%})

Tech sheets
* [Browser Support](https://www.telerik.com/aspnet-ajax/tech-sheets/browser-support)
* [Accessibility Support](https://www.telerik.com/aspnet-ajax/tech-sheets/accessibility-support)
* [Localization and RTL Support](https://www.telerik.com/aspnet-ajax/tech-sheets/localization-and-right-to-left-support)

