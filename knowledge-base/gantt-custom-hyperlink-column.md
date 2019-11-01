---
title: Create Hyperlink column in RadGantt
description: 
type: how-to
page_title: Add hyperlink column in RadGantt | Telerik UI for ASP.NET AJAX
slug: gantt-custom-hyperlink-column
position: 
tags: 
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadGantt for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

At the time of writing, RadGantt does not support column templates. Nevertheless, the cells of the treelist view can be accessed via the data-uid property of the row as explained in [Customize style and content of treelist column in RadGantt]({%slug gantt-access-and-customize-treelist-cells%}) KB article.

The same setup is used as the referenced article, the only change is in the `OnClientDataBound` event handler.


## Solution

````JavaScript
<script>
    function getColumnIndexByColumnField(gantt, field) {
        var cols = gantt.columns();
        for (var i = 0; i < cols.length; i++) {
            var col = cols[i];
            // for title seach, use col.title
            if (col.field == field) {
                return i;
            }
        }
        return -1;
    }
    function OnClientDataBound(sender, args) {
        var tasks = sender.get_allTasks();

        tasks.forEach(function (task, index) {
            var taskuid = tasks[0]._uid;

            var $row = $telerik.$(sender.get_element()).find("tr[data-uid=" + taskuid + "]");
            var $cell = $row.find(">td").eq(getColumnIndexByColumnField(sender, "title"));

            // set styles for the "title" cell
            // https://api.jquery.com/css/#css-properties
            $cell.css({
                "color": "white",
                "background-color": "greenyellow"
            });
            
            // make it a hyperlink
            var title = task.get_title();
            var url = "/default.aspx?q="+task.get_id();
            // the <span> containing the text
            var $span = $cell.find("span").last();

            // http://stackoverflow.com/questions/5215316/convert-a-spans-text-into-a-hyperlink
            $span.replaceWith(function () {
                // custom logic for creating the link URL
                return '<a href="' + url + '" target="_blank">' + title + '</a>';
            });
        })
    }
</script>
````

## See Also

* [Customize style and content of treelist column in RadGantt]({%slug gantt-access-and-customize-treelist-cells%})

 