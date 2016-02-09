---
title: Strip HTML on Paste
page_title: Strip HTML on Paste | RadEditor for ASP.NET AJAX Documentation
description: This is a custom solution for stripping some HTML when pasting in RadEditor
slug: editor/how-to/strip-html-on-paste
tags: custom, solution, paste, strip, HTML, editor, content area
published: True
position: 7 
---

# Strip HTML on Paste

Here you can see how you can implement a custom solution to strip desired HTML tags or portions of the content that is going to be pasted in **RadEditor**. 

In order to implement that custom solution you will need to handle the [OnClientPasteHtml event]({%slug editor/client-side-programming/events/onclientpastehtml%}). Where your custom stripping logic should be processed if the command that raised the event is the **Paste** one. For the example here, we chose to show how to strip `<strong>`, `<em>` and `<span>` tags.

>caption Example 1: Example of a custom stripping logic that is processed during paste event of RadEditor.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientPasteHtml="OnClientPasteHtml" />

<script>
    function OnClientPasteHtml(editor, args) {
        var commandName = args.get_commandName();

        // Paste command is the one that handles plain paste, e.g., when Ctrl+V is used.
        if (commandName === "Paste") {
            var htmlToBePasted = args.get_value(); // Get the value to be pasted
            
            // Use Regex to strip the desired HTML content
            htmlToBePasted = htmlToBePasted.replace(/<(\/)*(strong|em|span)[^>]*>/gi, "");

            // Set the processed content to the arguments.
            args.set_value(htmlToBePasted);
        }
    }
</script>
````

## See Also

* [OnClientPasteHtml event]({%slug editor/client-side-programming/events/onclientpastehtml%})