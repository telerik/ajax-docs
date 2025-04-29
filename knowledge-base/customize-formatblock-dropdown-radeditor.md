---
title: Changing Texts in the FormatBlock Dropdown Header of RadEditor for ASP.NET AJAX
description: Learn how to customize the texts displayed in the FormatBlock dropdown header of RadEditor for ASP.NET AJAX.
type: how-to
page_title: Customize FormatBlock Dropdown Display Text in RadEditor for ASP.NET AJAX
slug: customize-formatblock-dropdown-radeditor
tags: radeditor, asp.net ajax, formatblock, dropdown, customization
res_type: kb
ticketid: 1686021
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
<td>2025.1.218</td>
</tr>
</tbody>
</table>

## Description

I want to change the texts displayed in the FormatBlock dropdown of RadEditor for ASP.NET AJAX. By default, the dropdown shows values such as "Normal," "Heading 1," "Heading 2," and "Heading 3." I need these values to be displayed as "Normale," "H1," "H2," and "H3" instead.

This knowledge base article also answers the following questions:
- How to modify FormatBlock display values in RadEditor for ASP.NET AJAX?
- How to replace default text in RadEditor dropdowns?
- How to customize FormatBlock display values in RadEditor?

## Solution

To achieve the desired customization, follow these steps:

### 1. Configure RadEditor

Use the following markup to define the `Paragraphs` and `EditorDropDown` for the FormatBlock tool.

```html
<telerik:RadEditor ID="Radeditor1" runat="server" Skin="WebBlue" OnClientSelectionChange="OnClientSelectionChange">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorDropDown name="FormatBlock"/>
        </telerik:EditorToolGroup>
    </Tools>
    <Paragraphs>
        <telerik:EditorParagraph Title="Normale" Tag="<P>" />
        <telerik:EditorParagraph Title="H1" Tag="<H1>" />
        <telerik:EditorParagraph Title="H2" Tag="<H2>" />
        <telerik:EditorParagraph Title="H3" Tag="<H3>" />
    </Paragraphs>
</telerik:RadEditor>
```

### 2. Apply JavaScript Customization

Include the following JavaScript code to handle the `OnClientSelectionChange` event. This code replaces the default dropdown values with the desired ones.

```javascript
<script type="text/javascript">
    function OnClientSelectionChange(editor, args) {
        var tool = editor.getToolByName("FormatBlock");
        if (tool) {
            setTimeout(function () {
                var value = tool.get_value();
                switch (value) {
                    case "Normal":
                        value = value.replace("Normal", "Normale");
                        break;
                    case "Heading 1":
                        value = value.replace("Heading 1", "H1");
                        break;
                    case "Heading 2":
                        value = value.replace("Heading 2", "H2");
                        break;
                    case "Heading 3":
                        value = value.replace("Heading 3", "H3");
                        break;
                    case "Heading 4":
                        value = value.replace("Heading 4", "H4");
                        break;
                }
                tool.set_value(value);
            }, 0);
        }
    }
</script>
```

### Explanation

- The `OnClientSelectionChange` event is triggered whenever a selection is made in the FormatBlock dropdown.
- The `getToolByName` function retrieves the FormatBlock tool.
- The `setTimeout` ensures the changes are applied after the dropdown value is updated.
- A switch statement replaces the default dropdown values with the customized ones.

## See Also

- [RadEditor Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/knowledge-base/editor-show-pixel-value-in-real-font-size-dropdown)
- [Change Pixel to Point Size in RadEditor Forum Discussion](https://www.telerik.com/forums/change-pixel-to-point-size-in-radeditor?#3083512)
