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

This help article shows how to strip HTML tags from content that is pasted in **RadEditor**.

In order to implement that you should:

1. Handle the [OnClientPasteHtml event]({%slug editor/client-side-programming/events/onclientpastehtml%}); 
2. Catch the **Paste** command to process and alter the content to be pasted.

>caption Example 1: Basic example for strippping `<strong>`, `<em>` and `<span>` tags on paste in **RadEditor**.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientPasteHtml="OnClientPasteHtml" />

<script>
    function OnClientPasteHtml(editor, args) {
        var commandName = args.get_commandName();

        // Paste command is the one that handles plain paste, e.g., when Ctrl+V is used.
        if (commandName === "Paste") {
            var htmlToBePasted = args.get_value(); // Get the value to be pasted
            
            // Use Regex to strip <strong>, <em> and <span> tags.
            htmlToBePasted = htmlToBePasted.replace(/<(\/)*(strong|em|span)[^>]*>/gi, "");

            // Set the processed content to the arguments.
            args.set_value(htmlToBePasted);
        }
    }
</script>
````

## See Also

* [OnClientPasteHtml event]({%slug editor/client-side-programming/events/onclientpastehtml%})
