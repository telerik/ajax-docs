---
title: Setting Default Table Styles in RadEditor
description: Learn how to set default styles for tables in RadEditor, ensuring styles are applied in both design and HTML modes.
type: how-to
page_title: How to Set Default Table Styles in RadEditor for ASP.NET AJAX
slug: editor-default-table-styles
tags: radeditor, asp.net ajax, default, table, style, border
res_type: kb
ticketid: 196292
---

| Product | RadEditor for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description

When working with tables in RadEditor, it's necessary to ensure that tables have consistent styling across all modes, including design and HTML. Specifically, adding a border of `1px solid black` to tables and ensuring this style persists when the content is saved and retrieved from a database. This KB article also answers the following questions:
- What is the best method to apply default table styles in RadEditor?
- How can I modify table HTML before insertion in RadEditor to include default styles?

## Solution

To achieve consistent table styling in RadEditor, including when tables are inserted via the InsertTable dialog or TableWizard, use the `OnClientPasteHtml` event. This event allows modification of the HTML content before it's inserted into the editor. Here's how to implement this solution:

1. Add the `OnClientPasteHtml` event to the RadEditor declaration in your ASPX page.
2. Use JavaScript to modify the table HTML, adding the desired styles to the table and its cells.

### Implementation Example

```html
<script>
function OnClientPasteHtml(sender, args) { 
    var commandName = args.get_commandName(); 
    var value = args.get_value(); // Content to be inserted via the InsertTable dialog 

    if ("InsertTable" == commandName || "TableWizard" == commandName) { 
        var div = document.createElement("DIV"); 

        div.innerHTML = value; 
        // Sets the border around the table 
        var table = div.firstChild; 
        table.style.border = "1px solid black"; 
        table.style.width = "100%"; 
        table.style.borderCollapse = "collapse"; 
        // Sets the border around the cells 
        var vTD = div.getElementsByTagName("TD"); 
        for (var j = 0; j < vTD.length; j++) { 
            var oTd = vTD[j]; 
            oTd.style.border = "1px solid black"; 
        } 

        args.set_value(div.innerHTML); 
    } 
}
</script>
```

Add the event to the RadEditor definition:

```aspx
<telerik:RadEditor ID="RadEditor1" runat="server" OnClientPasteHtml="OnClientPasteHtml" />
```

This JavaScript function checks if the action is to insert a table or use the TableWizard. It then modifies the incoming HTML to add the specified border styles to the table and its cells. This ensures that regardless of how the table is inserted into RadEditor, it will have the desired default styling.

## Notes

- Ensure the `OnClientPasteHtml` function is correctly hooked to the RadEditor instance.
- The styles applied are just examples; customize them as needed for your specific requirements.

## See Also

- [RadEditor OnClientPasteHtml Event](http://demos.telerik.com/aspnet-ajax/editor/examples/onclientpastehtml/defaultcs.aspx)
- [RadEditor Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
