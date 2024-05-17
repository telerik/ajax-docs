---
title: Integrating RadMultiSelect with Telerik HTML5 ReportViewer in ASP.NET AJAX
description: Learn how to successfully integrate RadMultiSelect with Telerik HTML5 ReportViewer on the same ASP.NET AJAX page without script conflicts.
type: how-to
page_title: How to Use RadMultiSelect and HTML5 ReportViewer Together in ASP.NET AJAX
slug: multiselect-how-to-integrate-radmultiselect-with-html5-reportviewer
tags: radmultiselect, html5, reportviewer, asp.net ajax, jquery, kendo ui, scriptmanager, stylesheets
res_type: kb
category: knowledge-base
ticketid: 1651933
---

## Environment

| Product | Version |
| --- | --- |
| RadMultiSelect for ASP.NET AJAX | all |
| Telerik Reporting | 16.2.22.1109+ |

## Description

I am experiencing issues when trying to use the RadMultiSelect control and Telerik HTML5 ReportViewer on the same ASPX page. The page either does not render correctly or encounters script conflicts.

This KB article also answers the following questions:
- How can I fix script conflicts between RadMultiSelect and HTML5 ReportViewer?
- What steps should I take to use an external jQuery to resolve script issues in ASP.NET AJAX?
- How can I match the Kendo UI theme with my site's design when using RadMultiSelect and HTML5 ReportViewer?

## Solution
Both Telerik Reporting and RadMultiSelect are referencing and leveraging internally Kendo UI and when used on the same page this causes troubles with the referenced jQuery scripts.

The scenario is similar to the one discussed in the [RadHtmlChart Integration With KendoUI Widgets article](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/how-to/radhtmlchart-integration-with-kendoui-widgets) and the solution is to configure and use an external jQuery with RadScriptManager.

1. **External jQuery Configuration**: Configure the RadScriptManager to use an external jQuery version that is compatible with both Telerik Reporting and RadMultiSelect. This prevents script conflicts.

    ```html
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
        <Scripts>
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
        </Scripts>
    </telerik:RadScriptManager>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2024.1.319/js/kendo.all.min.js"></script>
    ```

2. **Kendo UI Theme Specification**: Choose a Kendo UI theme that matches your site's design. Customize the Kendo-specific stylesheets accordingly. For Bootstrap themes, use the `kendo.bootstrap.min.css` stylesheet.

    ```html
    <link href="https://kendo.cdn.telerik.com/2022.3.913/styles/kendo.common.min.css" rel="stylesheet" id="commonCss" />
    <link href="https://kendo.cdn.telerik.com/2022.3.913/styles/kendo.bootstrap.min.css" rel="stylesheet" id="skinCss" />
    ```

3. **Use RadMultiSelect with Suitable Skin**: Apply the Bootstrap skin to RadMultiSelect to ensure consistent styling with the Kendo UI theme.

    ```html
    <telerik:RadMultiSelect Skin="Bootstrap" ID="RadMultiSelect1" runat="server" ...>
    ```

By following these steps, you can successfully integrate the RadMultiSelect control with the HTML5 ReportViewer, resolve script conflicts, and ensure consistent styling across your ASP.NET AJAX page.

## Notes
- You need to adjust the jQuery and Kendo UI versions based on your project requirements and compatibility.

## See Also

- [RadMultiSelect Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/overview)
- [Telerik Reporting Documentation](https://docs.telerik.com/reporting/overview)
- [Kendo UI Themes Overview](https://docs.telerik.com/kendo-ui/styles-and-layout/less-themes/overview)
- [License Code FAQ for Kendo UI](https://docs.telerik.com/kendo-ui/intro/installation/license-code-faq)
 
