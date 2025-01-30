---
title: Hiding Percentage Values in Resource List of RadGantt for ASP.NET AJAX
description: Learn how to remove the percentage values from the resource list in RadGantt for ASP.NET AJAX using a client-side script.
type: how-to
page_title: How to Remove Percentage Values from Resource List in RadGantt
slug: gantt-hide-percentage-values-radgantt-resource-list
tags: radgantt, asp.net ajax, resource list, javascript
res_type: kb
ticketid: 1676341
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGantt for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2024.4.1114</td>
</tr>
</tbody>
</table>

## Description

In scenarios where you want to display only the names of resources in the RadGantt control without the accompanying percentage values, you might find the default format (e.g., Charlie [100%]) not suitable for your needs. This article provides a solution to remove the percentage values from the resource list, showing only the resource names.

This knowledge base article also answers the following questions:
- How can I customize the resource list display in RadGantt for ASP.NET AJAX?
- Is it possible to exclude percentage values from RadGantt's resource list?
- What client-side approach can be used to modify the RadGantt resource list format?

## Solution

To achieve the removal of percentage values from the resource list in RadGantt for ASP.NET AJAX, use the following client-side JavaScript code. This script should be added to your page where the RadGantt control is used. It utilizes the `OnClientLoad` event of the RadGantt control to modify the display of resource names after the control is fully rendered.

````aspx
        <script>
            function OnClientLoad(sender, args) {
                document.querySelectorAll('table.k-selectable td[role="gridcell"]:nth-child(2)').forEach(cell => {
                    cell.textContent = cell.textContent.replace(/\s?\[\d+\s?%\]/g, ''); // Remove percentage part
                });
            }
</script>
        <telerik:RadGantt RenderMode="Lightweight" runat="server" ID="RadGantt1" OnClientLoad="OnClientLoad" ...
````

- Ensure the RadGantt control includes the `OnClientLoad="OnClientLoad"` attribute to trigger the JavaScript function after the control is loaded.
- This JavaScript function searches for all cells (`<td>`) in the second column of the resource list, which contain the resource names and percentage values. It then uses a regular expression to remove the percentage part.
- After applying this script, only the resource names will be displayed in the resource list of the RadGantt control, omitting the percentage values.

## See Also

- [RadGantt Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/gantt/overview)
- [RadGantt Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/gantt/client-side-programming/events/onclientload)
- [JavaScript Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
