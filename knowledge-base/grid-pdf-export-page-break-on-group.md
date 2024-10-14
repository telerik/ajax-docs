---
title: Add Page Breaks Between Groups in RadGrid PDF Export
description: Learn how to insert a page breaks in RadGrid to ensure each group starts on a new page.
type: how-to
page_title: Add Page Breaks Between Groups in RadGrid PDF Export
slug: grid-pdf-export-page-break-on-group
tags: radgrid, export, pdf, group, page-break, asp.net ajax
res_type: kb
ticketid: 1667087
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2024.3.805</td>
</tr>
</tbody>
</table>

## Description

When exporting a [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/exporting/overview) to PDF, it's required to start each group on a new page. To achieve this, a page break needs to be inserted after each group's end. This KB article also answers the following questions:
- How can I ensure each group in RadGrid starts on a new page when exporting to PDF?
- Is it possible to insert page breaks in RadGrid's PDF export based on the group change?
- How to customize RadGrid's PDF export to have each group on separate pages?

## Solution

To insert a page break on each group change when exporting RadGrid to PDF, follow these steps:

1. **Enable the Group Footer** in the `MasterTableView` by setting the `ShowGroupFooter` property to `true`.

    ````ASPX
    <MasterTableView ShowGroupFooter="true">
    ````

2. **Inject the Page Break into the Footer of Each Group**. In the `PreRender` event of RadGrid, iterate through the Group Footer items and add the page break into their cells.

    ````C#
    protected void RadGrid1_PreRender(object sender, EventArgs e)
    {
        // Get all GroupFooter items
        GridItem[] groupFooterItems = RadGrid1.MasterTableView.GetItems(GridItemType.GroupFooter);

        // Iterate through all except the last
        for (int i = 0; i < groupFooterItems.Length - 1; i++)
        {
            // Inject the page break into the first cell of the Group Footer
            groupFooterItems[i].Cells[0].Text = "<?hard-pagebreak ?>";
        }
    }
    ````

3. **Optional: Hide the Group Footer**. If you do not wish to display the Group Footer in the exported PDF, use CSS to target the Footer element and hide it.

    ````CSS
    <style>
        .RadGrid .rgMasterTable .rgFooter {
            display: none;
        }
    </style>
    ````

This setup ensures that each group in the RadGrid starts on a new page in the exported PDF by utilizing a hard page break at the end of each group.

## See Also

- [RadGrid Export to PDF Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/exporting/export-formats/export-to-pdf)
- [RadGrid Grouping Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/grouping/grouping)
- [Customizing RadGrid PDF Export](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/exporting/export-to-pdf/pdf-export-customization)
