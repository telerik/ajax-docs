---
title: HTML Output
page_title: HTML Output | RadGrid for ASP.NET AJAX Documentation
description: HTML Output
slug: grid/appearance-and-styling/html-output
tags: html,output
published: True
position: 1
---

# HTML Output



The HTML output of a simple RadGrid control without any client features is the following:

(some HTML attributes have been removed for simplicity)

````ASP.NET
<div class="RadGrid RadGrid_Default">
<table class="rgMasterTable">
  <colgroup>
    <col>
    <col>
  </colgroup>
  <thead>
    <tr>
      <th class="rgHeader">
        Column1
      </th>
      <th class="rgHeader">
        Column2
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="rgRow">
      <td>
        Column1 Row1
      </td>
      <td>
        Column2 Row1
      </td>
    </tr>
    <tr class="rgAltRow">
      <td>
        Column1 Row2
      </td>
      <td>
        Column2 Row2
      </td>
    </tr>
  </tbody>
</table>
<input type="hidden" name="RadGrid1_ClientState" id="RadGrid1_ClientState" autocomplete="off"></div>
````



* **div.RadGrid.RadGrid**_ - the control's wrapper, which holds the skin name. Normally it is a block-level element with a border, so setting 100% width to the control is both unnecessary and causes content overflow by amount of the left and right border widths.

* **table.rgMasterTable** - the control's data container with a number of columns and rows, according to the datasource or control configuration. It contains a \<thead\> element with the header row, a \<tbody\> element with the data rows and a \<colgroup\> element with \<cols\> which may define column widths and visibility. If the MasterTableView's **TableLayout** is set to "Fixed", the table gets one more CSS class - **rgClipCells**, which causes the non-fitting cell content to be clipped, otherwise it would overflow to the next column.

* **th.rgHeader** - a column header cell. Note that by default table headers are centered, but in RadGrid they are left aligned. You can override this.

* **tr.rgRow** and **tr.rgAltRow** - the two most common types of data rows - the normal and alternating row. If you set **EnableAlternatingRows="false"** in ClientSettings, all data rows will have a rgRow CSS class.

**RadGrid** HTML output with some features are enabled:

When **sorting** is enabled, the header text is enclosed inside an **\<a\>** element and the sorting indicators appears as **\<input type="button" /\>** elements after it. Also, the header and data cells from the sorted column receive a **rgSorted** CSS class (unless you have set ClientSettings.EnableSkinSortStyles="false").

When **filtering**is enabled, a filtering row (**tr.rgFilterRow**) appears below the header row. The filter row contains filtering controls (textboxes, date pickers, etc) and filtering buttons which are input.rgFilter elements (styled push buttons).

When **paging** is enabled, a pager row (**tr.rgPager**) appears below all other rows (or above the header row if PagerStyle.Position is set accordingly). Depending on the PagerStyle.Mode property, the pager can contain different controls - styled LinkButtons, PushButtons, RadNumericTextbox, RadComboBox, RadSlider and labels. All these are wrapped in several \<div\>s with a **rgWrap** CSS class and a second CSS class which identifies the wrapper type - e.g. **rgNumPart** is for the numeric LinkButtons, **rgInfoPart** is for the pager label, **rgArrPart1** is for the First and Previous buttons, while **rgArrPart2** is for the Next and Last buttons. These \<div\>s are floated, so you cannot control the overall layout of the pager by using the PagerStyle.HorizontalAlign property. A possible alternative option is to override the skin and float the \<div\>s to the opposite direction, or use a pager template.

When the **command item row** is enabled, it is rendered as a **tr.rgCommandRow** element with a single child node - **td.rgCommandCell**, which in turn contains a **table.rgCommandTable** with two table cells. One cell contains the Add New Record button (**input.rgAdd**) and the other contains the Refresh button (**input.rgRefresh**) and the export buttons (**input.rgExpXLS**, **input.rgExpPDF**, **input.rgExpCSV**, **input.rgExpDOC**).

When **grouping** is enabled, a group panel (**table.rgGroupPanel**) is rendered as the top-most element inside the outer wrapper div.RadGrid. For each group expression, a **th.rgGroupItem** element is placed inside the group panel. The group item contains the column header text and an **input.rgSortAsc** or **input.rgSortDesc** element (depending on the group sort order). Each group in the RadGrid data area starts with a group header row (tr.rgGroupHeader). The table cells that belong to the GroupSplitterColumn (which holds the group expand/collapse buttons), have a **rgGroupCol** CSS class.

When **hierarchy** is used, each nested tableview is a **table.rgDetailTable** element. It can have its own pager and command rows. Each detail table is "indented" and the parent tableview has a GridExpandColumn. The cells from this column have a **rgExpandCol** CSS class and the expand/collapse buttons have **rgExpand / rgCollapse** CSS class.

## Notes on RadGrid skinning

* The MasterTableView and all DetailTables should have a **border-collapse:separate** CSS style applied (included in the base stylesheet), otherwise rendering bugs in Internet Explorer 6 are triggered when using grouping or hierarchy with client-side expand/collapse. Because of this style, the table cells cannot have borders on all sides, because they will appear too thick. As a result, only left and bottom borders are used in the control's embedded skins.

* The \<col\> elements cannot be used for easier styling of columns, because this is not a cross-browser approach. They also can't be referenced on the server.

* Table row elements cannot have borders and paddings. Set these only to table cells.

* We recommend using background styles for table rows only. If you set such styles to table cells, you will not be able to see any background styles applied to table rows, no matter the CSS specificity. You will also not be able to customize rows with ItemStyle-BackColor.

* Column widths cannot be controlled via CSS when static headers are used. Normally they should not be controlled via CSS in any case.

* Hyperlinks (\<a\> elements) do not inherit **color** and **text-decoration** styles from parent elements, so you can't define such styles for them via properties, because they are applied to the table rows or cells. You should use CSS rules to target \<a\> elements directly.

* The sum of the left (or right) padding and left border width of each header cell should match the sum of left (or right) padding and left border width of all cells that belong to the same column - normal row cells, alternating row cells, group header cells, footer cells, edit row cells. Otherwise misalignment will occur in Internet Explorer when using static headers.

* If you define BackColor for data items by using ItemStyle or AlternatingItemStyle, or override the RadGrid embedded skin styles for those row types, you will also override the appearance of hover and selected row states. So if you need to preserve the original skin styles for these row states, you need to redefine the styles again.  [The following code library shows how to do this.](https://www.telerik.com/community/code-library/aspnet-ajax/grid/how-to-preserve-the-original-radgrid-selected-hover-row-background-when-using-itemstyle-backcolor.aspx)
