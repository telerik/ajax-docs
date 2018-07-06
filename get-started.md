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

- [Get Started with UI for ASP.NET AJAX](#get-started-with-ui-for-aspnet-ajax)
    - [Download the Controls](#download-the-controls)
    - [Add the Controls to Your Project](#add-the-controls-to-your-project)
    - [Add a Control to a Page](#add-a-control-to-a-page)
    - [Next Steps](#next-steps)
    - [See Also](#see-also)

## Download the Controls

The easiest way to get the controls to your development machineis to use the [Telerik Control Panel](https://www.telerik.com/download-trial-file/v2/control-panel) or to download the [automated MSI installer]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) from [Your telerik.com account](https://www.telerik.com/account/product-download?product=RCAJAX).

The following article can help you choose the installation type that is most suitable for your needs and preferences: [Which File Do I Need to Install]({%slug installation/which-file-do-i-need-to-install%}).

If you are not a customer, you can [download a free trial](https://www.telerik.com/download-trial-file/v2-b/ui-for-asp.net-ajax) and the same options will apply to you as well.

## Add the Controls to Your Project

The easiest way to get the Telerik UI for ASP.NET AJAX controls in your project is to:

1. Install the [Telerik AJAX Visual Studio Extensions](https://marketplace.visualstudio.com/items?itemName=TelerikInc.TelerikASPNETAJAXVSExtensions). You can easily do this in Visual Studio by searching the Online Marketplace for "telerik asp.net ajax".

1. Reference them in your project:

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

Now that you have the Telerik UI for ASP.NET AJAX controls running in your project, you may want to explore their features, customize their behavior or change their appearance. The [TBD ARTICLE NAME]() will show you how to do that.

## See Also

TBD