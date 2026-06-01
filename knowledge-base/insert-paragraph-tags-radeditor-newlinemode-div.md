---
title: Customizing InsertParagraph Command to Insert Paragraph Tags in RadEditor with NewLineMode Set to DIV  
description: Learn how to customize the InsertParagraph command in RadEditor when NewLineMode is set to DIV to ensure it inserts <p> tags instead of <div> tags.  
type: how-to  
page_title: How to Insert Paragraph Tags in RadEditor NewLineMode DIV  
meta_title: Insert Paragraph Tags in RadEditor with NewLineMode Set to DIV  
slug: insert-paragraph-tags-radeditor-newlinemode-div  
tags: editor, ui-for-aspnet-ajax, insertparagraph, newline, customization  
res_type: kb  
ticketid: 1377072
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> Editor for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

When using the [RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview) with `NewLineMode` set to `DIV`, the `InsertParagraph` tool inserts `<div>` tags instead of `<p>` tags. This behavior doesn't align with the need to insert a proper `<p>` tag in specific scenarios while maintaining the `NewLineMode` behavior as `DIV`.

This knowledge base article also answers the following questions:
- How to insert `<p>` tags in RadEditor with `NewLineMode` set to DIV?
- How to customize the InsertParagraph command in RadEditor?
- How to avoid creating `<div>` tags when inserting a paragraph in RadEditor?

## Solution

To ensure the `InsertParagraph` command inserts `<p>` tags while keeping `NewLineMode` set to `DIV`, customize the `InsertParagraph` command using the `OnClientCommandExecuting` event. Follow these steps:

1. Add the following JavaScript code to customize the `InsertParagraph` command:

```javascript
function OnClientCommandExecuting(editor, args) {
    if ("InsertParagraph" === args.get_commandName()) {
        editor.pasteHtml('<p><span id="_reSelectionMarker"></span></p>');

        var marker = editor.findContent("#_reSelectionMarker").get(0); // Get the marker
        var range = editor.getDomRange();
        range.selectNodeContents(marker); // Select the marker's contents
        range.collapse(false); // Collapse to the end
        range.select(); // Make the range visible
        marker.parentNode.removeChild(marker); // Remove the marker
        args.set_cancel(true); // Prevent the default InsertParagraph behavior
    }
}
```

2. Attach the `OnClientCommandExecuting` event to the RadEditor instance:

```html
<telerik:RadEditor runat="server" ID="RadEditor1" NewLineMode="DIV" OnClientCommandExecuting="OnClientCommandExecuting">
    <Content>
        <div>Sample content</div>
    </Content>
</telerik:RadEditor>
```

This code overrides the default `InsertParagraph` command to insert a `<p>` tag and ensures that the cursor is correctly positioned after the inserted paragraph.

## See Also

- [RadEditor Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [RadEditor Client-Side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/overview)
- [RadEditor New Line Options](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/functionality/new-line-options)  
- [Forum Thread on NewLine Formatting Issue](https://www.telerik.com/forums/newline-formatting-issue)  
