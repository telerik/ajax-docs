---
title: Resolving "Container element is empty" AODA error in RadGrid pagination
description: Learn how to fix the "Container element is empty" error flagged by Siteimprove for Telerik Grid with pagination enabled.
type: how-to
page_title: Fixing "Container element is empty" error in Telerik Grid pagination
meta_title: Fixing "Container element is empty" error in Telerik Grid pagination
slug: fixing-container-element-empty-error-radgrid-pagination
tags: grid, ui for asp.net ajax, accessibility, aoda, pager
res_type: kb
ticketid: 1717964
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>
Grid for UI for ASP.NET AJAX
</td>
</tr>
<tr>
<td> Version </td>
<td> All </td>
</tr>
</tbody>
</table>

## Description

When using the Telerik [Grid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) for UI for ASP.NET AJAX with pagination enabled, Siteimprove AODA checker may flag the "Container element is empty" error. This accessibility issue arises from the `<tfoot>` element having an implicit `role="rowgroup"`, which requires child elements with `role="row`. However, the RadGrid pager renders `<tr>` with `role="presentation"`, stripping its row semantics from the accessibility tree.

This knowledge base article also answers the following questions:
- How to fix the accessibility issue with Telerik RadGrid pagination?
- How to remove Siteimprove's "Container element is empty" warning in RadGrid?
- Why does RadGrid pager cause a WCAG 1.3.1 error?

## Solution

To fix the issue, modify the pager element's `role` attribute to ensure it satisfies accessibility requirements:

1. Add a `onGridCreated` client-side event handler to the RadGrid's `ClientSettings`.
2. Include the following JavaScript code to assign the correct `role` to the pager element:

````JavaScript
function onGridCreated(sender, args) {
    if (sender.get_enableAriaSupport()) {
        let footer = sender.get_element().querySelector("tfoot");
        footer.querySelector(".rgPager").setAttribute("role", "row");
    }
}
````

This code targets the pager element and changes its `role` attribute from `presentation` to `row`. Doing so resolves the "Container element is empty" warning flagged by Siteimprove.

