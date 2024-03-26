---
title: Disabling ConvertFontToSpan Filter to avoid the span to font conversion in Design mode
description: Learn how to disable the ConvertFontToSpan filter in RadEditor for ASP.NET AJAX to avoid the conversion of <span> tags to <font> tags in Design mode.
type: how-to
page_title: Disabling ConvertFontToSpan Filter to prevent span to font conversion in Design mode
slug: editor-disabling-convertfonttospan-filter
tags: RadEditor, ASP.NET AJAX, ConvertFontToSpan filter, 
res_type: kb
---
## Environment

| Property | Value |
| --- | --- |
| Product | RadEditor for ASP.NET AJAX |
| Version | all |

## Description

When utilizing the `ConvertFontToSpan` filter in RadEditor for ASP.NET AJAX, the `<span>` tags in the HTML content are automatically converted to `<font>` tags in the Design mode of the control. This behavior is due to the built-in browser commands preferring the use of `<font>` tags over `<span>` tags. However, if you want to retain the `<span>` tags in the HTML section without any conversion you can disable the ConvertFontToSpan filter.

## Solution

To avoid the conversion of `<span>` tags to `<font>` tags in RadEditor for ASP.NET AJAX, you can disable the `ConvertFontToSpan` filter. Follow these steps:

1. In the code-behind file (e.g., `Page_Load` event), add the following code:

```csharp
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadEditor1.DisableFilter(EditorFilters.ConvertFontToSpan);
    }
}
```
```VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        RadEditor1.DisableFilter(EditorFilters.ConvertFontToSpan)
    End If
End Sub
```

2. Save the changes and test your code to verify that the `ConvertFontToSpan` filter is disabled and the `<span>` tags are preserved in the HTML section.

By disabling the `ConvertFontToSpan` filter, you can ensure that the `<span>` tags are not automatically converted to `<font>` tags in RadEditor for ASP.NET AJAX.

 
