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

## Download the Controls

The easiest way to get the controls to your development machineis to use the [Telerik Control Panel](https://www.telerik.com/download-trial-file/v2/control-panel) or to download the [automated MSI installer]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) from [Your telerik.com account](https://www.telerik.com/account/product-download?product=RCAJAX).

The following article can help you choose the installation type that is most suitable for your needs and preferences: [Which File Do I Need to Install]({%slug installation/which-file-do-i-need-to-install%}).

If you are not a customer, you can [download a free trial](https://www.telerik.com/download-trial-file/v2-b/ui-for-asp.net-ajax) and the same options will apply to you as well.

## Add the Controls to Your Project

The easiest way to get the Telerik UI for ASP.NET AJAX controls in your project is to:

1. Install the [Telerik AJAX Visual Studio Extensions](https://marketplace.visualstudio.com/items?itemName=TelerikInc.TelerikASPNETAJAXVSExtensions). You can easily do this in Visual Studio by searching the Online Marketplace for "telerik asp.net ajax".

2. Reference them in your project:

    * If you already have a WebForms project, run the [Convert Project Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/convert-project%}).
    * If you do not have a project, run the [Create Project Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard%})


If you prefer full control over your project, you can copy the Telerik assemblies to the `~/bin` and add references to them through the Visual Studio interface. In this case you should also [update the web.config]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig). The controls come packaged in [several assemblies]({%slug introduction/installation/included-assemblies%}) and to get started, you only need `Telerik.Web.UI.dll`, `Telerik.Web.UI.Skins.dll` and `Telerik.Web.Design.dll`.

## Add a Control to a Page

The final step is to actually use a control on a page and run it in the browser:

1. Add a **ScriptManager** control on top of the page in which you are going to add a Telerik control. This is required by any MS AJAX-based control.

    **ASPX**

        <form id="form1" runat="server">
            <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
            </telerik:RadScriptManager>

1. Make sure the Telerik namespace is registered with the project:

    * To register the namespace on all pages and user controls, add the following to your `web.config`:

        **web.config**

              <system.web>
                <pages>
                    <controls>
                        <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
                    </controls>
                </pages> 


    * If you want them available on the current page only, add the following directive just below the `<%@ Page %>` directive:

        **ASPX**

            <%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %> 


1. Add a Telerik control to the page, for example, a [RadEditor](https://demos.telerik.com/aspnet-ajax/editor/examples/overview/defaultcs.aspx):

    **ASPX**

        <form id="form1" runat="server">
            <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
            </telerik:RadScriptManager>
            <telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight"></telerik:RadEditor>

    >tip You can also drag a control from the **Toolbox**. If you do not see the controls in the toolbox, examine the Adding the [Telerik Controls to the Visual Studio Toolbox](%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox%) article.

1. Run the page in the browser by pressing `F5`.

## Next Steps

Now that you have the Telerik UI for ASP.NET AJAX controls running in your project, you may want to explore their features, customize their behavior or change their appearance. Below you can find guidance on some common tasks:

* [Explore control features](#explore-control-features)
* [Customize control behavior](#customize-control-behavior)
* [Change control appearance](#change-control-appearance)

### Explore Control Features

To get a quick overview of what each control offers, the fastest approach is to go to out [Live Demos](http://demos.telerik.com/aspnet-ajax).

You can then download the demo site as a VS project and play around with the demos in the comfort of your IDE.

The provides a section for each control that also contains help articles on distinct features and API references.

### Customize Control Behavior

We try to create built-in features for the most common use cases, and the rich API the controls provide lets you customize their behavior further.

You can explore the available properties, events and inner tags through the VS intellisense to get a quick glimpse of their concepts and availability.

Each control also has a section in its documentation that is dedicated to listing properties and events with details on what they do and how they are used. The folders are invariably called `Server-side Programming` and `Client-side Programming`.

### Change Control Appearance

The UI for ASP.NET AJAX controls use Skins to change their appearance. We provide over 20 built-in skins that can fit in the majority of web application designs.

In case you need to tweak them, you can either create a few CSS overrides that will implement the small change you seek, or create an entire custom skin that matches your requirements.

## See Also

TBD