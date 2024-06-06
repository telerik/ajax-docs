---
title: Adding Line Breaks to RadBinaryImage Tooltip
description: Learn how to insert line breaks in the tooltips of RadBinaryImage for different tooltip types in ASP.NET AJAX.
type: how-to
page_title: How to Insert Line Breaks in RadBinaryImage Tooltips in ASP.NET AJAX
slug: binaryimage-tooltip-line-breaks
tags: radbinaryimage, tooltip, line break, asp.net ajax
res_type: kb
ticketid: 1653789
---

## Environment

| Product | Version |
| --- | --- |
| RadBinaryImage for ASP.NET AJAX | all |

## Description

When attempting to add line breaks to the tooltip of a [RadBinaryImage](https://docs.telerik.com/devtools/aspnet-ajax/controls/binaryimage/overview), directly using HTML tags like `<br/>` does not render as expected. Instead, these tags are treated as plain text. This KB article demonstrates how to properly insert line breaks in the tooltip text of RadBinaryImage, catering to both regular browser tooltips and RadToolTip-based tooltips.

This KB article also answers the following questions:
- How to show multiline tooltips for RadBinaryImage?
- How to use newline characters in RadBinaryImage tooltips?
- How to display HTML in RadBinaryImage tooltips?

## Solution

### For Regular Browser Tooltip

To display a line break in a regular browser tooltip for RadBinaryImage, use the newline character `\n`. Implement this by setting the `ToolTip` property in your code-behind:

```csharp
protected void Page_Load(object sender, EventArgs e)
{
    // Assume RadBinaryImage1 is your RadBinaryImage control
    RadBinaryImage1.ToolTip = "First line\nSecond line";
}
```

### For RadToolTip-based Tooltip

When using RadToolTip to enhance the tooltip functionality of RadBinaryImage, HTML tags are supported, including `<br/>` for line breaks. This approach allows for more complex tooltip content, including multiline text.

```csharp
protected void Page_Load(object sender, EventArgs e)
{
    // Assume RadBinaryImage1 is your RadBinaryImage control and it uses RadToolTip
    RadBinaryImage1.ToolTip = "First line<br/>Second line";
}
```

Ensure that the RadToolTip control is properly configured to target the RadBinaryImage control.

## Notes

- The newline character `\n` is effective only for regular browser tooltips.
- For tooltips powered by RadToolTip, use HTML tags like `<br/>` to format the tooltip content, including adding line breaks.

## See Also

- [RadBinaryImage Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/binaryimage/overview)
- [RadToolTip Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/tooltip/overview)
 
