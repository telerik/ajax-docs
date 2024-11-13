---
title: RadMultiSelect Issues with RadFormDecorator in ASP.NET AJAX
description: Explore troubleshooting steps for AutoClose behavior not working and filtering issues when RadMultiSelect is used with RadFormDecorator in ASP.NET AJAX.
type: troubleshooting
page_title: Troubleshooting RadMultiSelect and RadFormDecorator Compatibility in ASP.NET AJAX
slug: multiselect-issues-with-formdecorator
tags: radmultiselect, radformdecorator, autoclose, filtering, aspnet-ajax
res_type: kb
ticketid: 1670201
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadMultiSelect for ASP.NET AJAX, <br /> RadFormDecorator for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When using [RadMultiSelect](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/overview) alongside RadFormDecorator in ASP.NET AJAX, specific issues arise that affect the functionality of RadMultiSelect. Notably, the `AutoClose` property does not behave as expected, and there are complications with filtering and selection persistence. Moreover, the `EnforceMinLength` property behavior might seem unintuitive under certain conditions.

The RadFormDecorator modifies the appearance and behavior of standard form elements to ensure visual consistency across browsers. However, when decorating elements that involve complex interactions, such as RadMultiSelect, unexpected behaviors can occur due to the intricate interaction between the decorated elements and the custom controls.

## Solution

### AutoClose and Selection Issues

To address the issues with `AutoClose` behavior not working as expected and the failure to persist selections during filtering, follow these steps:

Remove RadFormDecorator or configure it to exclude select elements from decoration. To exclude select elements, set the `DecoratedControls` property of RadFormDecorator accordingly:

````ASP.NET
<telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" DecoratedControls="AllControls" Exclude="select" />
````

This approach prevents RadFormDecorator from interfering with the functionality of RadMultiSelect while still allowing other form elements to be styled uniformly.

Regarding the `EnforceMinLength` behavior:

- This behavior is under review for potential adjustments or improvements in documentation to clarify its intended functionality.
- As a temporary measure, consider providing users with instructions or hints on the UI about the minimum required characters for filtering to aid in usability.

### Acknowledgement

We acknowledge the inconvenience caused by these issues and are working towards improving the documentation and functionality concerning the compatibility of RadMultiSelect with RadFormDecorator. Your feedback is invaluable for enhancing the product and assisting other developers in circumventing similar challenges.

## See Also

- [RadMultiSelect Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/overview)
- [RadFormDecorator Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/formdecorator/overview)
