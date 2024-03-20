---
title: Customizing NewLineMode Behavior in RadEditor for ASP.NET AJAX
description: Learn how to customize the NewLineMode behavior in RadEditor for ASP.NET AJAX when the selection is in a div element.
type: how-to
page_title: Customizing NewLineMode Behavior in RadEditor for ASP.NET AJAX
slug: customizing-newlinemode-behavior-radeditor-ajax
tags: radeditor, asp.net ajax, newlinemode, customization
res_type: kb
---

## Environment
| Product      | RadEditor for ASP.NET AJAX |
|--------------|----------------------------|
| Version      | all      |

## Description
When using RadEditor's NewLineMode with the default value of "P", pressing Enter when the selection is in a div element creates a new div instead of a new paragraph. This behavior is undesirable and we want to customize it to create a new paragraph inside the div instead.

## Solution
To achieve the desired behavior, you can check programmatically whether the selection is in a div element and override the default EnterNewLine command to insert a paragraph. After that move the selection inside the paragraph using its unique marker:

```javascript
<script type="text/javascript">
    function OnClientCommandExecuting(sender, args) {
        if (args.get_commandName() === "EnterNewLine") {
            var editor = sender;
            var selection = editor.getSelection();
            var parentElement = selection.getParentElement();

            // Check if the selection's parent element is a DIV
            if (parentElement && parentElement.tagName.toLowerCase() === "div") {
                // Prevent the default Enter key behavior only if inside a DIV
                args.set_cancel(true);

                // Insert a paragraph with a uniquely identifiable span (marker) for cursor placement
                var uniqueMarker = '<p><span id="cursorPlaceholder">&#8203;</span></p>';
                editor.pasteHtml(uniqueMarker);

                setTimeout(function () {
                    var doc = editor.get_document();
                    var placeholder = doc.getElementById("cursorPlaceholder");
                    if (placeholder) {
                        if (editor.selectElement) {
                            editor.selectElement(placeholder);
                        }

                        // Remove or replace the placeholder to leave the cursor in place
                        placeholder.outerHTML = "&#8203;"; // Replaces the placeholder with a zero-width space
                    }
                }, 0); // Short delay to ensure DOM updates
            }
            // If not inside a DIV, the default behavior will occur automatically since args.set_cancel(true) is not called
        }
    }
</script>
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting"
    NewLineMode="P">
    <Content>
        <p>para</p>
        <div>longtext</div>
        <p>para</p>
    </Content>
</telerik:RadEditor>
```


This code solution overrides the default behavior of the Enter key when the NewLineMode is set to "P" and the selection's parent element is a div. Instead of creating a new div, it inserts a new paragraph inside the div. The code uses a unique marker span to maintain the cursor position during the insertion.

Please note that this solution requires JavaScript knowledge and may need to be adjusted based on your specific implementation.
 
