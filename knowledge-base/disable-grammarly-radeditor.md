---
title: Disabling Grammarly in RadEditor for ASP.NET AJAX
description: Learn how to prevent Grammarly from interfering with RadEditor by disabling it using JavaScript and CSS.
type: troubleshooting
page_title: How to Disable Grammarly Extension in RadEditor for ASP.NET AJAX
slug: disable-grammarly-radeditor
tags: radeditor, asp.net ajax, grammarly, javascript, css
res_type: kb
ticketid: 1676891
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadEditor for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2024.4.1114</td>
</tr>
</tbody>
</table>

## Description
When using [RadEditor for ASP.NET AJAX](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview), Grammarly can introduce performance issues and unwanted HTML tags. To ensure smooth operation of RadEditor, disabling Grammarly within its content area is necessary.

## Cause
Grammarly interacts with content-editable elements, such as the content area of RadEditor, causing unwanted behavior and performance degradation.

## Solution

To prevent Grammarly from affecting RadEditor, follow these steps:

1. Disable Grammarly in the content area of RadEditor by setting specific attributes to `false`. Implement the JavaScript function `OnClientLoad` and assign it to the RadEditor's `OnClientLoad` property.

```javascript
<script>
    function OnClientLoad(editor, args) {
        const contentArea = editor.get_contentArea();
        contentArea.setAttribute('data-gramm', 'false');
        contentArea.setAttribute('data-gramm_editor', 'false');
        contentArea.setAttribute('data-enable-grammarly', 'false');
    }
</script>
<telerik:RadEditor OnClientLoad="OnClientLoad" runat="server" ID="RadEditor1"></telerik:RadEditor>
```

2. Use CSS to hide any Grammarly extensions that might still appear. Add the following CSS rules to your application:

```css
[contenteditable] ~ grammarly-extension,
input ~ grammarly-extension,
textarea ~ grammarly-extension {
    display: none !important;
}
```

This will ensure that Grammarly extensions are not visible, further reducing their impact on RadEditor.

### Additional Checks

- **Inspect HTML**: Use Developer Tools to ensure the attributes are correctly applied to the RadEditor's content area.
- **Content Area Mode**: Switch between `Iframe` and `Div` modes based on your application's requirements. Grammarly does not function in the `Iframe` mode.
- **JavaScript Errors**: Check for and resolve any JavaScript errors that might prevent the disabling script from executing.
- **Browser and Environment**: Test in various browsers and environments to rule out browser-specific issues.
- **Isolate the Issue**: Create a simple test page to determine if external factors are affecting RadEditor.

By implementing these steps, you can disable Grammarly in RadEditor, ensuring it operates without interference.

## See Also

- [RadEditor Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [Editable DIV Content Area Demo](https://demos.telerik.com/aspnet-ajax/editor/examples/contentareamodediv/defaultcs.aspx)
- [How to stop extensions/add-ons like Grammarly on contenteditable editors](https://stackoverflow.com/questions/37444906/how-to-stop-extensions-add-ons-like-grammarly-on-contenteditable-editors)
