---
title: Extract Values of Selected Cells
page_title: Extract Values of Selected Cells - RadGrid
description: Extract Values of Selected Cells
slug: grid/functionality/selecting/selecting-cells/extract-values-of-selected-cells
tags: extract,values,selected,cells
published: True
position: 4
---

# Extract Values of Selected Cells

Extracting the values can be done programmatically using both JavaScript and BackEnd code.

# Client-Side

JavaScript example of finding the Selected Cells (TD elements) by a CSS style, then looping through each to access the InnerText or InnerHtml of the Cell. Whether there is only text or html inside the Cell depends on how the Grid is configured and whether Template Columns are used.

````JavaScript
function GetSelectedCellValues(sender, args) {
    // Get reference to RadGrid
    var grid = $find('<%= RadGrid1.ClientID %>');
    // Get reference to MasterTable
    var masterTable = grid.get_masterTableView();
    // Find all Selected Cells using jQuery
    var $selectedCells = $telerik.$(masterTable.get_element()).find("> tbody > tr > td." + grid._cellSelection.selectable.options.styles.SELECTED);
    // Loop through the cells collection
    $selectedCells.each(function () {
        var cell = this;

        // Get the Inner Text
        var cellText = cell.innerText;
        // Get the Inner Value
        var cellHtml = cell.innerHtml;
    })
}
````

# Server-Side

Example of Looping through all rows and cells to find out the selected Cells. Once found, you can access the Cell's value through its Text property.

````C#
protected void ButtonExtractValues_Click(object sender, EventArgs e)
{
    foreach (GridDataItem dataItem in RadGrid1.MasterTableView.Items)
    {
        foreach (GridTableCell cell in dataItem.Cells)
        {
            if (cell.Selected)
            {
                // Access the Cell value
                var cellValue = cell.Text;

                // OPTIONAL
                // Get the GridColumn Instance that belong to the cell,
                // in case if you needed any info about it.
                var column = cell.Column;
            }
        }
    }
}
````

 
