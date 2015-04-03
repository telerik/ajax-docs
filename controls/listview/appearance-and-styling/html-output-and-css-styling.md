---
title: HTML Output and CSS Styling
page_title: HTML Output and CSS Styling | UI for ASP.NET AJAX Documentation
description: HTML Output and CSS Styling
slug: listview/appearance-and-styling/html-output-and-css-styling
tags: html,output,and,css,styling
published: True
position: 1
---

# HTML Output and CSS Styling



RadListView is a renderless component and provides complete control over its appearance. However, it also comes with a set of ready-to-use most commonly used layouts - grid, unordered list, ordered list, flow, single row and tiles. These layouts depend on predefined HTML output and CSS styling. You can still modify the HTML output of these layouts after selecting one of them in Visual Studio design mode, so that the HTML output is generated in source mode.

## Grid

The Grid layout presents the RadListView data in a <table>. Each table column corresponds to a datafield. Each datafield name is displayed in a header cell (<th>). Each data item is represented by a table row (<tr>).

````XML
	    <div class="RadListView RadListView_Forest">
	        <table cellspacing="0" style="width: 100%;">
	            <thead>
	                <tr class="rlvHeader">
	                    <th>
	                        ProductID
	                    </th>
	                    <th>
	                        ProductName
	                    </th>
	                </tr>
	            </thead>
	            <tbody>
	                <tr class="rlvI">
	                    <td>
	                        ...item content...
	                    </td>
	                    <td>
	                        ...item content...
	                    </td>
	                </tr>
	                <tr class="rlvA">
	                    <td>
	                        ...item content...
	                    </td>
	                    <td>
	                        ...item content...
	                    </td>
	                </tr>
	            </tbody>
	        </table>
	    </div>
````



## Floated Tiles

The Floated Tiles layout present the RadListView data in boxes (tiles), which arrange automatically, depending on the available horizontal space. Note that since the tiles (<div> elements) are floated with a CSS style, they should have explicit width and height, otherwise they will resize according to their content and the resulting layout may not look good - the tiles will have different sizes and will not be aligned. The same width, height, margin and padding styles can be defined for all tiles in Visual Studio design time when choosing the layout.

````XML
	    <div class="RadListView RadListViewFloated RadListView_Forest">
	        <div class="rlvFloated rlvAutoScroll">
	            <div style="height: 120px; width: 120px; margin: 5px; padding-left: 15px;" class="rlvI">
	                ...item content...
	            </div>
	            <div style="height: 120px; width: 120px; margin: 5px; padding-left: 15px;" class="rlvA">
	                ...item content...
	            </div>
	        </div>
	    </div>
````



## Flow

The Flow layout presents the RadListView data in blocks one below the other. Each block is represented by a <div> element.

````XML
	    <div class="RadListView RadListView_Forest">
	        <div class="rlvI">
	            ...item content...
	        </div>
	        <div class="rlvA">
	            ...item content...
	        </div>
	    </div>
````



## Single Row

The Single Row layout presents the RadListView data in a table with only one row, regardless of the number of items. Each item is represented by a table cell (<td>).

````XML
	    <div class="RadListView RadListView_Forest">
	        <table cellspacing="0">
	            <tbody>
	                <tr>
	                    <td class="rlvI">
	                        ...item content...
	                    </td>
	                    <td class="rlvA">
	                        ...item content...
	                    </td>
	                </tr>
	            </tbody>
	        </table>
	    </div>
````



## Unordered List or Ordered List

The Unordered and Ordered List layouts present the RadListView data in the respective HTML elements - <ul> or <ol>. Each data item is represented by a list item - <li>.

````XML
	    <div class="RadListView RadListView_Forest">
	        <ul>
	            <li class="rlvI">...item content... </li>
	            <li class="rlvA">...item content... </li>
	        </ul>
	    </div>
````



## RadListView CSS classes

Regardless of the chosen predefined layout, the RadListView CSS classes are reused on different elements.


| CSS class | Applied on HTML element | Description |
| ------ | ------ | ------ |
|RadListView|div|control's wrapper|
|RadListView_SkinName|div|control's wrapper|
|rlvI|tr, div, td, li (depending on the layout)|item container|
|rlvA|tr, div, td, li (...)|alternating item|
|rlvISel|tr, div, td, li|selected item|
|rlvIEdit|tr, div, td, li|edit item|
|rlvIInsert|tr, div, td, li|insert item|
|rlvIEmpty|tr, div, td, li|empty item|
|rlvHeader|tr|header row (Grid layout)|
|RadListViewFloated|div|control's wrapper (Floated Tiles layout)|
|rlvFloated|div|tiles' wrapper, child of the control's wrapper (Floated Tiles layout). Its purpose is to clear the CSS floats of the items|
|rlvAutoScroll|div|tiles' wrapper, child of the control's wrapper (Floated Tiles layout). When set, the floated items will generate scrollbars if their contents does not fit|
|rlvNoScroll|div|tiles' wrapper, child of the control's wrapper (Floated Tiles layout). When set, the floated items will clip content if it does not fit|
|rlvEmpty|div|control's wrapper when no data. Do not confuse with rlvIEmpty|
|rlvInput|input (type="text")|edit textbox - the default edit control|
|rlvBAdd|input (type="button")|ADD button|
|rlvBUpdate|input (type="button")|UPDATE button|
|rlvBCancel|input (type="button")|CANCEL button|
|rlvBSel|input (type="button")|SELECT button|
|rlvBDel|input (type="button")|DELETE button|
|rlvBEdit|input (type="button")|EDIT button|
|rlvBDrag|input (type="button")|DRAG button|
