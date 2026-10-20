---
title: Stop RadEditor from Stripping Onclick Attributes from Buttons/Images After Upgrade
description: Learn how to prevent RadEditor in UI for ASP.NET AJAX from stripping "onclick" attributes from buttons and images after upgrading to version 2026.2.708.
type: troubleshooting
page_title: Prevent RadEditor from Removing Onclick Attributes in UI for ASP.NET AJAX
meta_title: Prevent RadEditor from Removing Onclick Attributes in UI for ASP.NET AJAX
slug: prevent-radeditor-stripping-onclick-attributes
tags: editor, asp.net ajax, radeditor, content filters, stripdomeventattributes, stripjavascripturis
res_type: kb
ticketid: 1719840
---

## Environment
<table>
<tbody>
<tr>
<td> Product </td>
<td> UI for ASP.NET AJAX Editor </td>
</tr>
<tr>
<td> Version </td>
<td> 2026.2.708 </td>
</tr>
</tbody>
</table>

## Description

After upgrading to version 2026.2.708, the RadEditor in UI for ASP.NET AJAX removes the `onclick` attributes from buttons and images. This occurs even when attempting to disable certain content filters programmatically. For example, attributes like `onclick="Javascript:window.parent.VN_InitialSelection(); return false;"` are stripped, causing functionality to break.

## Cause

Starting with the 2025 Q4 release, the `StripDomEventAttributes` and `StripJavaScriptUris` filters are enabled by default as part of built-in XSS protection. 

- The `StripDomEventAttributes` filter removes event attributes like `onclick`.
- The `StripJavaScriptUris` filter removes attribute values starting with `javascript:`.

Even if one of these filters is disabled, the other may still remove the attribute.

## Solution

To retain `onclick` attributes in the RadEditor, follow these steps:

1. **Upgrade to the Latest Version**  
   Upgrade to version 2026.3.812 or later from the [Release History](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/telerik-ui-for-asp-net-ajax-2026-3-812-(2026-q3)). This version includes security and performance improvements.

2. **Disable the Required Filters**  
   Disable both `StripDomEventAttributes` and `StripJavaScriptUris` filters inline in the markup. Do not rely on programmatic calls like `DisableFilter` in code-behind, as they may execute too late. Use the following configuration:

   ```aspx
   <telerik:RadEditor ID="editText" runat="server"
       ContentFilters="RemoveScripts, FixUlBoldItalic, IECleanAnchors, MozEmStrong, ConvertFontToSpan, ConvertToXhtml, IndentHTMLContent, EncodeScripts, OptimizeSpans, ConvertCharactersToEntities, ConvertTags, StripCssExpressions, RemoveExtraBreaks">
   </telerik:RadEditor>
   ```

   This configuration removes the `StripDomEventAttributes` and `StripJavaScriptUris` filters while retaining the others.

3. **Avoid Re-Enabling Filters in Code-Behind**  
   Ensure no code-behind logic re-enables the filters. Avoid calls to `EnableFilter` or assignments to `ContentFilters` after the initial markup configuration.

4. **Validate Using the Demo**  
   Test your approach in the [Built-in Content Filters Demo](https://demos.telerik.com/aspnet-ajax/editor/examples/builtincontentfilters/defaultcs.aspx). Switch to HTML mode, paste your button markup, and clear the `StripDomEventAttributes` and `StripJavaScriptUris` checkboxes. Click "Update" to confirm the `onclick` attribute is preserved.

## See Also

- [RadEditor Built-In Content Filters Demo](https://demos.telerik.com/aspnet-ajax/editor/examples/builtincontentfilters/defaultcs.aspx)  
- [RadEditor Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)  
- [Telerik UI for ASP.NET AJAX Release History](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history)
