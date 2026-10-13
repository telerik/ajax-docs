```markdown
---
title: Configuring RadEditor for Word Formatting on Paste with Plain Text from Other Sources
description: Learn how to configure the RadEditor to retain Word formatting on paste while pasting plain text from other sources.
type: how-to
page_title: Retaining Word Formatting and Pasting Plain Text in RadEditor
meta_title: Retaining Word Formatting and Pasting Plain Text in RadEditor
slug: configure-radeditor-word-formatting-plain-text
tags: radeditor, ui-for-asp.net-ajax, paste-formatting, stripformattingoptions, word-cleaning
res_type: kb
ticketid: 1719650
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>
Editor for UI for ASP.NET AJAX
</td>
</tr>
<tr>
<td> Version </td>
<td> 2026.3.812 </td>
</tr>
</tbody>
</table>

## Description

I want to configure the [RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview) to retain Word formatting when pasting content from Microsoft Word, showing the cleaning dialog, while pasting plain text from all other sources. Additionally, I want to handle scenarios where the user cancels the cleaning dialog for Word content and apply plain text formatting in that case.

This knowledge base article also answers the following questions:
- How to detect and format pasted Word content in RadEditor?
- How to apply `StripFormattingOptions.All` for non-Word content in RadEditor?
- How to handle the "Cancel" action in RadEditor's Word cleaning popup?

## Solution

To achieve this behavior, configure the RadEditor to dynamically adjust the `StripFormattingOptions` based on the content source. Use JavaScript event handlers to detect Word content and manage the stripping options accordingly. Follow these steps:

1. Add the following configuration for the RadEditor:

```html
<telerik:RadEditor runat="server" ID="RadEditor1"
    StripFormattingOptions="None"
    OnClientLoad="OnClientLoad"
    OnClientPasteHtml="OnClientPasteHtml">
</telerik:RadEditor>
```

2. Use the script below to configure the behavior:

```javascript
<script>
    var SFO = Telerik.Web.UI.StripFormattingOptions;
    var wordPasteCancelled = false;
    var originalConfirm = null;

    function restoreConfirm() {
        if (originalConfirm) {
            window.confirm = originalConfirm;
            originalConfirm = null;
        }
    }

    function OnClientLoad(editor) {
        editor.get_document().addEventListener("paste", function (e) {
            var html = e.clipboardData && e.clipboardData.getData("text/html");
            var isWord = !!html && Telerik.Web.UI.Editor.Utils.isPastedFromWord(html);

            wordPasteCancelled = false;
            restoreConfirm();

            if (!isWord) {
                editor.set_stripFormattingOptions(SFO.All);
                return;
            }

            editor.set_stripFormattingOptions(SFO.None);

            // Capture the OK/Cancel choice of the built-in Word cleaning prompt
            originalConfirm = window.confirm;
            window.confirm = function () {
                var result = originalConfirm.apply(window, arguments);

                wordPasteCancelled = !result;
                restoreConfirm();

                return result;
            };
        }, true);
    }

    function OnClientPasteHtml(sender, args) {
        if (args.get_commandName() === "Paste") {
            restoreConfirm();
            sender.set_stripFormattingOptions(SFO.None);

            if (wordPasteCancelled) {
                // Apply plain text stripping
                args.set_value(Telerik.Web.UI.Editor.Utils.stripFormatting(args.get_value(), "ALL"));
                wordPasteCancelled = false;
            }
        }

        if (typeof saveInstantly === "function") {
            saveInstantly(sender, args);
        }
    }
</script>
```

### Explanation of the Script:
1. **Detect Word Content**: The `paste` event handler checks if the clipboard contains Word content using `Telerik.Web.UI.Editor.Utils.isPastedFromWord`.
2. **Switch Formatting Options**: Set `StripFormattingOptions` to `None` for Word content or `All` for other sources.
3. **Handle Cancel in Word Dialog**: Override the `window.confirm` function to detect when the user cancels the Word cleaning dialog and reset the content to plain text using the `Telerik.Web.UI.Editor.Utils.stripFormatting` method.

By implementing this solution, the RadEditor will retain Word formatting for Word content when the cleaning dialog is accepted and strip all formatting for other content or if the cleaning dialog is canceled.

## See Also

- [RadEditor Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [RadEditor StripFormattingOptions](https://www.telerik.com/products/aspnet-ajax/documentation/controls/editor/managing-content/pasting-content/clean-ms-word-formatting)
- [RadEditor Client-Side API](https://demos.telerik.com/aspnet-ajax/editor/examples/clientsideapi/defaultcs.aspx)
```
