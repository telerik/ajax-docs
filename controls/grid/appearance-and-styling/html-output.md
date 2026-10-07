---
title: HTML Output
page_title: HTML Output - RadGrid
description: Learn how RadGrid renders HTML for rows, columns, paging, grouping, hierarchy, and other grid features.
slug: grid/appearance-and-styling/html-output
tags: html,output
published: True
position: 1
---

# HTML Output



The following example shows the HTML output of a simple **RadGrid** control without client features. Some HTML attributes are omitted for brevity.

> caption Example: HTML output of a simple RadGrid

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



* `div.RadGrid.RadGrid_` - the control's wrapper, which holds the skin name. It is normally a block-level element with a border, so setting the control width to 100% is unnecessary and can cause content overflow by the left and right border widths.

* `table.rgMasterTable` - the control's data container with columns and rows based on the data source or control configuration. It contains `<thead>`, `<tbody>`, and `<colgroup>` elements. If the **MasterTableView.TableLayout** property is set to `Fixed`, the table also gets the `rgClipCells` CSS class, which clips content that does not fit in a cell.

* `th.rgHeader` - a column header cell. Table headers are left-aligned by default in **RadGrid**.

* `tr.rgRow` and `tr.rgAltRow` - the normal and alternating data rows. If you set **ClientSettings.EnableAlternatingRows** to `false`, all data rows use the `rgRow` CSS class.

The following sections describe the HTML output when additional **RadGrid** features are enabled.

When **sorting** is enabled, the header text is enclosed inside an **\<a\>** element and the sorting indicators appears as **\<input type="button" /\>** elements after it. Also, the header and data cells from the sorted column receive a **rgSorted** CSS class (unless you have set ClientSettings.EnableSkinSortStyles="false").

When **filtering** is enabled, a filtering row (`tr.rgFilterRow`) appears below the header row. The filter row contains filtering controls and buttons represented by `input.rgFilter` elements.

When **paging** is enabled, a pager row (`tr.rgPager`) appears below the other rows or above the header row when **PagerStyle.Position** is configured accordingly. Depending on **PagerStyle.Mode**, the pager can contain different controls, such as styled link buttons, push buttons, **RadNumericTextBox**, **RadComboBox**, **RadSlider**, and labels. The controls are wrapped in `<div>` elements with the `rgWrap` class and a second class that identifies the wrapper type, such as `rgNumPart`, `rgInfoPart`, `rgArrPart1`, and `rgArrPart2`. To change the pager layout, override the skin or use a pager template.

When the **command item row** is enabled, it is rendered as a `tr.rgCommandRow` element with a `td.rgCommandCell` child. The cell contains a `table.rgCommandTable` with buttons such as `input.rgAdd`, `input.rgRefresh`, `input.rgExpXLS`, `input.rgExpPDF`, `input.rgExpCSV`, and `input.rgExpDOC`.

When **grouping** is enabled, a group panel (`table.rgGroupPanel`) is rendered inside the outer `div.RadGrid` wrapper. Each group expression creates a `th.rgGroupItem` element that contains the column header text and an `input.rgSortAsc` or `input.rgSortDesc` element. Each group in the data area starts with a `tr.rgGroupHeader` row, and cells in the **GroupSplitterColumn** use the `rgGroupCol` CSS class.

When **hierarchy** is used, each nested table view is a `table.rgDetailTable` element. It can have its own pager and command rows. Each detail table is indented, and the parent table view has a **GridExpandColumn**. The cells in this column use the `rgExpandCol` CSS class, and the expand/collapse buttons use the `rgExpand` or `rgCollapse` CSS class.

## Notes on RadGrid Skinning

* The MasterTableView and all DetailTables should have a **border-collapse:separate** CSS style applied (included in the base stylesheet), otherwise rendering bugs in Internet Explorer 6 are triggered when using grouping or hierarchy with client-side expand/collapse. Because of this style, the table cells cannot have borders on all sides, because they will appear too thick. As a result, only left and bottom borders are used in the control's embedded skins.

* The \<col\> elements cannot be used for easier styling of columns, because this is not a cross-browser approach. They also can't be referenced on the server.

* Table row elements cannot have borders and paddings. Set these only to table cells.

* We recommend using background styles for table rows only. If you set such styles to table cells, you will not be able to see any background styles applied to table rows, no matter the CSS specificity. You will also not be able to customize rows with ItemStyle-BackColor.

* Column widths cannot be controlled via CSS when static headers are used. Normally they should not be controlled via CSS in any case.

* Hyperlinks (\<a\> elements) do not inherit **color** and **text-decoration** styles from parent elements, so you can't define such styles for them via properties, because they are applied to the table rows or cells. You should use CSS rules to target \<a\> elements directly.

* The sum of the left (or right) padding and left border width of each header cell should match the sum of left (or right) padding and left border width of all cells that belong to the same column - normal row cells, alternating row cells, group header cells, footer cells, edit row cells. Otherwise misalignment will occur in Internet Explorer when using static headers.

* If you define BackColor for data items by using ItemStyle or AlternatingItemStyle, or override the RadGrid embedded skin styles for those row types, you will also override the appearance of hover and selected row states. So if you need to preserve the original skin styles for these row states, you need to redefine the styles again.

## See Also

* [RadGrid Skins]({%slug grid/appearance-and-styling/skins%})
* [Modifying Existing Skins]({%slug grid/appearance-and-styling/modifying-existing-skins%})
