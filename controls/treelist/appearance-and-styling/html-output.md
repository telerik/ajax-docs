---
title: HTML Output
page_title: HTML Output | RadTreeList for ASP.NET AJAX Documentation
description: HTML Output
slug: treelist/appearance-and-styling/html-output
tags: html,output
published: True
position: 1
---

# HTML Output



RadTreeList is designed to display tabular data in a table-based layout. The HTML output of the control looks like this:

````XML
	    <div class="RadTreeList RadTreeList_Default">
	        <table class="rtlTable rtlHVBorders rtlHBorders rtlVBorders rtlLines" cellspacing="0">
	            <colgroup>
	                <col style="width: 23px;" />
	                <col style="width: 23px;" />
	                <col />
	                <col />
	                <col />
	            </colgroup>
	            <thead>
	                <tr class="rtlHeader">
	                    <th colspan="3" class="rtlCF">
	                        Column 1
	                    </th>
	                    <th>
	                        Column 2
	                    </th>
	                    <th class="rtlCL">
	                        Column 3
	                    </th>
	                </tr>
	            </thead>
	            <tbody>
	                <tr class="rtlR">
	                    <td class="rtlL rtlL1">
	                        <input class="rtlCollapse" type="button" value=" " />
	                    </td>
	                    <td colspan="2" class="rtlCF">
	                        Cell 1-1
	                    </td>
	                    <td>
	                        Cell 1-2
	                    </td>
	                    <td class="rtlCL">
	                        Cell 1-3
	                    </td>
	                </tr>
	                <tr class="rtlA">
	                    <td class="rtlL rtlL0">
	                        &nbsp;
	                    </td>
	                    <td class="rtlL rtlL2">
	                        &nbsp;
	                    </td>
	                    <td class="rtlCF">
	                        Cell 1-1-1
	                    </td>
	                    <td>
	                        Cell 1-1-2
	                    </td>
	                    <td class="rtlCL">
	                        Cell 1-1-3
	                    </td>
	                </tr>
	                <tr class="rtlR rtlRSel">
	                    <td class="rtlL rtlL0">
	                        &nbsp;
	                    </td>
	                    <td class="rtlL rtlL3">
	                        <input class="rtlCollapse" type="button" value=" " />
	                    </td>
	                    <td class="rtlCF">
	                        Cell 1-2-1
	                    </td>
	                    <td>
	                        Cell 1-2-2
	                    </td>
	                    <td class="rtlCL">
	                        Cell 1-2-3
	                    </td>
	                </tr>
	                <tr class="rtlA rtlRL rtlROut rtlRBtm">
	                    <td class="rtlL rtlL3">
	                        <input class="rtlExpand" type="button" value=" " />
	                    </td>
	                    <td colspan="2" class="rtlCF">
	                        Cell 2-1
	                    </td>
	                    <td>
	                        Cell 2-2
	                    </td>
	                    <td class="rtlCL">
	                        Cell 2-3
	                    </td>
	                </tr>
	            </tbody>
	        </table>
	    </div>
````



* **div.RadTreeList.RadTreelist_SkinName** - the control's wrapper, which holds the skin name. By default it is a block-level element with a border, so setting 100% width to the control is both unnecessary and causes content overflow by amount of the left and right border widths. If the **ShowOuterBorders** property is set to "false", then a **RadTreeListNoBorder** CSS class is appended as well.

* **table.rtlTable** - the control's data container with a number of columns and rows, according to the datasource or control configuration. It contains a <thead> element with the header row, a <tbody> element with the data rows and a <colgroup> element with <cols> which may define column widths. Depending on the values of the control's **GridLines**and **ShowTreeLines**properties, the <table> element may receive also the following CSS classes: **rtlHBorders**(GridLines="Horizontal" or "Both"), **rtlVBorders**(GridLines="Vertical" or "Both"), **rtlHVBorders**(GridLines="Both") and **rtlLines**(ShowTreeLines="true"). The <table> element always renders a cellspacing="0" attribute. The expand/collapse columns are always 23px wide.

* **tr.rtlHeader** - the header row. If sorting is enabled, the header cells contain <a> elements instead of plain text nodes. The sort indicators are represented by **input.rtlSortAsc** and **input.rtlSortDesc** elements/classes

* data row CSS classes (all start with "rtlR", except the rtlA class):

* **tr.rtlR** - odd (normal) rows

* **tr.rtlA** - even (alternating) rows

* **tr.rtlRSel** - selected rows

* **tr.rtlROut** - applied to the first row following a row from a lower (nested) level of hierarchy

* **tr.rtlRL** - applied to the last row from a given level of hierarchy, when a next row exists and is from an outer level

* **tr.rtlRBtm** - applied to the last row (on the current page) of the control

* data cell CSS classes (all start with "rtlC")

* **td.rtlCF** - the first data cell in a row

* **td.rtlCL** - the last data cell in a row. If there is a single column, its cells have both CSS classes

* CSS classes related to treelines and expand/collapse behavior

* **td.rtlL**- applied to all cells, which are not data cells (i.e. the ones that contain treelines, expand/collapse buttons, or neither of these)

* **td.rtlL0**- applied to cells, which contain a single vertical treeline connecting two rows at the same level, with the upper row currently being expanded

* **td.rtlL1** - applied to the first cell from the first row from the first page, when it is expanded

* **td.rtlL2** - applied to cells which contain a T-shaped treeline (i.e. there are same-level rows above and below the current row)

* **td.rtlL3**- applied to cells which contain an L-shaped treeline (these cells belong to the last rows at a given level)

* **input.rtlExpand** - applied to the expand buttons, which are <input type="button" /> elements

* **input.rtlCollapse** - applied to the collapse buttons, which are <input type="button" /> elements

If paging is enabled, the pager controls are placed inside a **tr.rtlPager** element.

In RTL mode the RadTreeList wrapper has a couple of additional CSS classes, namely - **RadTreeListRTL** and **RadTreeListRTL_SkinName**.

## Notes on RadTreeList Skinning

* The control's <table> element should have a **border-collapse:separate**and **table-layout:fixed**CSS styles applied. These are located in the base stylesheet.

* The control's base stylesheet contains all border-width and border-style CSS styles that are needed. You can only specify border-color in your custom skin.

* RadTreeList skins use the RadGrid sprite image for the header, row and pager styles. If you will be creating a custom RadTreeList skin, based on an existing skin, make sure you also take the RadGrid sprite image and place it in a location accessible by the RadTreeList CSS file.
