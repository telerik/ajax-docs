---
title: HTML Output and CSS Styles
page_title: HTML Output and CSS Styles | RadPivotGrid for ASP.NET AJAX Documentation
description: HTML Output and CSS Styles
slug: pivotgrid/appearance-and-styling/html-output-and-css-styles
tags: html,output,and,css,styles
published: True
position: 0
---

# HTML Output and CSS Styles



RadPivotGrid is designed to display pivoted data in a table-based layout. This article will introduce you to the main pieces of the control HTML output and the CSS classes used to provide styling to them.

## HTML output

The following code snippet presents a simplified version of the RadPivotGrid HTML output. You could easily locate which piece represents which part of the control based on the CSS classes applied.

````HTML
<div class="RadPivotGrid RadPivotGrid_[SkinName]">
    <table class="rpgTable">
        <colgroup>
            <col />
            <col />
            <col />
            .......
        </colgroup>
        <tbody>
            <tr>
                <td colspan="" class="rpgDataZone">
                    <span class="rpgFieldItem">Data Zone 1</span> <span class="rpgFieldItem">Data Zone 2</span>
                    <span class="rpgFieldItem">Data Zone 3</span>
                </td>
                <td colspan="" class="rpgColumnsZone">
                    <span class="rpgFieldItem"><a href="#">Column 1</a><input type="submit" class="rpgSortAsc" /></span>
                    <span class="rpgFieldItem"><a href="#">Column 2</a><input type="submit" class="rpgSortDesc" /></span>
                    <span class="rpgFieldItem"><a href="#">Column 3</a><input type="submit" class="rpgSortAsc" /></span>
                </td>
            </tr>
            <tr>
                <td class="rpgRowsZone">
                    <span class="rpgFieldItem"><a href="#">Rows 1</a><input type="submit" class="rpgSortAsc" /></span>
                </td>
                <td class="rpgRowsZone">
                    <span class="rpgFieldItem"><a href="#">Rows 2</a><input type="submit" class="rpgSortAsc" /></span>
                </td>
                <td class="rpgRowsZone">
                    <span class="rpgFieldItem"><a href="#">Rows 3</a><input type="submit" class="rpgSortAsc" /></span>
                </td>
                <td class="rpgColumnHeaderZone">
                    <div class="rpgColumnHeaderDiv">
                        <table cellspacing="0" border="0" class="rpgTable">
                            <colgroup>
                                <col />
                                <col />
                                .......
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th colspan="" class="rpgColumnHeader" scope="col">
                                        <input type="submit" class="rpgCollapse" />Column Header 1-0
                                    </th>
                                    <th rowspan="" class="rpgColumnHeaderTotal" scope="col">
                                        Column Header 1-1
                                    </th>
                                    <th rowspan="" class="rpgColumnHeaderTotal" scope="col">
                                        Column Header 1-2
                                    </th>
                                </tr>
                                <tr>
                                    <th colspan="" class="rpgColumnHeader" scope="col">
                                        <input type="submit" class="rpgCollapse" />Column Header 2-0
                                    </th>
                                    <th rowspan="" class="rpgColumnHeaderTotal" scope="col">
                                        Column Header 2-1
                                    </th>
                                    <th rowspan="" class="rpgColumnHeaderTotal" scope="col">
                                        Column Header 2-2
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
                <td rowspan="" class="rpgVerticalScroll">
                    <div class="rpgVerticalScrollDiv" style="height: ; width: ; overflow-y: scroll; overflow-x: hidden;">
                        <div style="height: ; width: ;">
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="" class="rpgRowHeaderZone">
                    <div class="rpgRowHeaderZoneDiv">
                        <table class="rpgTable">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td rowspan="" class="rpgRowHeader">
                                        <input type="submit" class="rpgCollapse" />Row Header 1-0
                                    </td>
                                    <td rowspan="" class="rpgRowHeader">
                                        Row Header 1-1
                                    </td>
                                    <td class="rpgRowHeader">
                                        Row Header 1-2
                                    </td>
                                </tr>
                                <tr>
                                    <td rowspan="" class="rpgRowHeader">
                                        <input type="submit" class="rpgCollapse" />Row Header 1 - 0
                                    </td>
                                    <td rowspan="" class="rpgRowHeader">
                                        Row Header 1-1
                                    </td>
                                    <td class="rpgRowHeader">
                                        Row Header 1-2
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
                <td class="rpgContentZone">
                    <div class="rpgContentZoneDiv">
                        <table class="rpgTable">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                .... .... ....
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td class="rpgDataCell">
                                        Cell 1-1
                                    </td>
                                    <td class="rpgDataCell">
                                        Cell 1-2
                                    </td>
                                    <td class="rpgDataCell">
                                        Cell 1-3
                                    </td>
                                    <td class="rpgDataCell rpgColumnTotalDataCell">
                                        Cell 1-3
                                    </td>
                                    <td class="rpgDataCell">
                                        Cell 1-4
                                    </td>
                                </tr>
                                <tr>
                                    .... ....
                                </tr>
                                .... ....
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="rpgHorizontalScroll">
                    <div style="width: ; height: ; overflow-x: scroll; overflow-y: hidden;">
                        <div style="width: ; height: ;">
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
````



## CSS classes and their usage

Below you will find a list of all CSS classes used in RadPivotGrid along with the elements that they are applied on an a short description of their usage:

* **div.RadPivotGrid.RadPivotGrid_[SkinName]** - the control's wrapper, which holds the skin name. By default it is a block-level element with a border.

* **span.rpgFieldItem** - all items in zones and fields window are called PivotGridFieldItems and have the rpgFieldItem class. These field items are placed in the following zones:

* **td.rpgDataZone** - DataFields Zone – cell, that contains all data fields and aggregates. The PivotGrid calculates summaries against these fields.

* **td.rpgColumnsZone** - ColumnFields Zone - The pivot grid control represents column headers through these fields.

* **td.rpgRowsZone** - RowFields Zone - The pivot grid control represents column headers through these fields. All header fields are in a separate RowFields zone.

* **td.rpgColumnHeaderZone** - contains the column headers.

* **div.rpgColumnHeaderDiv** - contains the column headers. Used for scrolling the column header zone.

* **th.rpgColumnHeader** - all column header cells have this class assigned.

* **td.rpgRowHeaderZone** - contains the row headers.

* **div.rpgRowHeaderZoneDiv** - contains the row headers. Used for scrolling the column header zone.

* **td.rpgRowHeader** - all row header cells have this class assigned.

* **div.rpgContentZone** - contains the data cells.

* **div.rpgContentZoneDiv** - used for scrolling the content zone.

* **td.rpgDataCell** - all data cells have this class assigned.

* **table.rpgTable** - assigned to the tables which hold the column and row headers, and the data cells.

* **td.rpgColumnTotalDataCell** - all column total cells have this class assigned.

* **td.rpgRowTotalDataCell** - all row total cells have this class assigned.

* **td.rpgColumnGrandTotalDataCell** - grand total data cells are assigned this class.

* **tr.rpgPager** - a table row element that contains the pager item.

* **tr.rpgPagerTop** - a table row element that contains the top pager item.

* **tr.rpgPagerBottom** - a table row element that contains the bottom pager item.

* **td.rpgVerticalScroll** - contains the vertical scroll if it is turned on and is necessary.

* **td.rpgHorizontalScroll** - contains the vertical scroll, if it is necessary.
