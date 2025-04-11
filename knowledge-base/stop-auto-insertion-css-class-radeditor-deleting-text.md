---
title: How to Stop Auto Insertion of CSS Class in RadEditor when Deleting Text
description: This article provides a solution to stop the auto insertion of a CSS class in RadEditor when deleting text.
type: how-to
page_title: Stop Auto Insertion of Inline CSS Class in RadEditor when Deleting Text
slug: stop-auto-insertion-css-class-radeditor-deleting-text
tags: radeditor, inlineedit mode, newline mode, css class, deleting text
res_type: kb
---

## Environment

| Property | Value |
| --- | --- |
| Product | RadEditor for ASP.NET AJAX |
| Version | 2023.2.606 |

## Description

When using RadEditor with newline mode set to "P" (Paragraph), deleting text can cause an additional CSS class to be inserted into the paragraph. This is a known bug in the Chromium browser.

## Solution

To stop the auto insertion of the CSS class, you can add the following onkeyup code to your RadEditor:

````ASPX
<script>
function OnClientLoadEditor(sender, args) {
    var $ = $telerik.$;
    sender.attachEventHandler('onkeyup', function (e) {

        if (e.keyCode === 8 || e.keyCode === 46) {

            var range = sender.get_document().getSelection().getRangeAt(0);
            var endContainer = range.endContainer;
            var nodeNextSibling = endContainer.nextSibling;

            if (endContainer.parentNode.tagName.toLowerCase() === "span") {
                $(range.endContainer.parentNode).replaceWith($(endContainer));
            }

            else if (nodeNextSibling.tagName.toLowerCase() === "span") {
                $(nodeNextSibling).replaceWith($(nodeNextSibling).contents());
            }
        }
    });
}
</script>
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoadEditor">
    <Content>
        <p>test</p><p>test</p>			
    </Content>
</telerik:RadEditor>
````

This code attaches an onkeyup event handler to the RadEditor. When the backspace or delete key is pressed, it checks if the current selection is within a `<span>` element. If it is, the `<span>` element is replaced with its contents. This effectively removes the additional CSS class inserted by the browser when deleting text.

## See Also

- [Style is inserted in text when deleting paragraph tag](slug://editor-style-is-inserted-in-text-when-deleting-paragraph-tag)
- [Radeditor add extra elements when use backspace key](https://www.telerik.com/forums/radeditor-add-extra-elements-when-use-backspace-key)

   
