---
title: Telerik.Web.UI.TreeListHyperLinkColumn
page_title: Telerik.Web.UI.TreeListHyperLinkColumn
description: Telerik.Web.UI.TreeListHyperLinkColumn
---

# Telerik.Web.UI.TreeListHyperLinkColumn

Represents a Telerik.Web.UI.TreeListColumn extended to display a HyperLink 
            in each of its data cells.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.TreeListColumn
* Telerik.Web.UI.TreeListHyperLinkColumn

## Properties

###  DataNavigateUrlFields `String[]`

Gets or sets a string, representing a comma-separated enumeration of DataFields
            from the data source, which will form the url of the windwow/frame that the hyperlink
            will target.

###  DataNavigateUrlFormatString `String`

Gets or sets a string, specifying the FormatString of the DataNavigateURL.
            Essentially, the DataNavigateUrlFormatString property sets the formatting for the url
            string of the target window or frame.

###  DataTextField `String`

Gets or sets a string, representing the DataField name from the data source,
            which will be used to supply the text for the hyperlink in the column. This text can
            further be customized, by using the DataTextFormatString property.

###  DataTextFormatString `String`

Gets or sets a string, specifying the format string, which will be used to format
            the text of the hyperlink, rendered in the cells of the column.

###  NavigateUrl `String`

Gets or sets a string, specifying the url, to which to navigate, when a hyperlink
            within a column is pressed. This property will be honored only if the
            DataNavigateUrlFields are not set. If either
            DataNavigateUrlFields are set, they will override the
            NavigateUrl property.

###  Target `String`

Sets or gets a string, specifying the window or frame at which to target
                content. The possible values are:_blank - the target URL will open in a new window
                _self - the target URL will open in the same frame as it was clicked
                _parent - the target URL will open in the parent frameset
                _top - the target URL will open in the full body of the window

###  Text `String`

Gets or sets a string, specifying the text to be displayed by the hyperlinks in
            the column, when there is no DataTextField specified.

###  AllowSorting `Boolean`

Gets or sets a whether the column data can be sorted.

###  Owner `RadTreeList`

Gets a reference to the  object
            to which the column belongs

###  DesignMode `Boolean`

Indicates if the control is in design-mode.

###  ColumnType `String`

Returns a string which represents the type of the current column.

###  HeaderText `String`

Gets or sets the text which will appear in the header cell of the column.

###  HeaderTooltip `String`

Gets or sets the tooltip of the header cell.

###  FooterText `String`

Use the FooterText property to specify your own or determine the current
            text for the footer section of the column.

###  UniqueName `String`

Each column in Telerik RadTreeList has an UniqueName
            property (string). This property is assigned automatically by the designer (or the
            first time you want to access the columns if they are built dynamically).

###  HeaderStyle `TableItemStyle`

Style of the cell in the header item of the RadTreeList, corresponding to the column.

###  ItemStyle `TableItemStyle`

Style of the cell in the item of the RadTreeList, corresponding to the column.

###  Visible `Boolean`

Gets or sets a value indicating if the column and all corresponding cells would be rendered.

###  Sortable `Boolean`

Should override if sorting will be disabled

###  Resizable `Boolean`

Gets or sets a value indicating whether the column can be resized client-side.
            You can use this property, by setting it to false, to disable resizing for a particular
            column, while preserving this functionality for all the other columns.

###  Reorderable `Boolean`

Gets or sets a value indicating whether the column can be reordered client-side.

###  MinWidth `Unit`

Gets or sets minimum width of the column. Used when resizing.

###  MaxWidth `Unit`

Gets or sets maximum width of the column. Used when resizing.

###  Display `Boolean`

Gets or sets a value indicating whether the cells corresponding to a column would be rendered with a 'display:none' style attribute (end-user-not-visible).
            To completely prevent cells from rendering, set the  property to false, instead of the Display property.

###  OrderIndex `Int32`

Gets or sets the order index of column used when reordering the columns.

###  SortExpression `String`

The string representing a filed-name from the DataSource that should be used when grid sorts by this column.

## Methods

###  InitializeCell

Initializes one by one the cells which belong to the column. 
            These could be data, header and footer cells.

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

The cell which will be set up.

#### columnIndex `System.Int32`

The index of the column to which the cell belongs.

#### inItem `Telerik.Web.UI.TreeListItem`

The TreeListItem to which the cell will be added.

#### Returns

`System.Void` 

###  PrepareCell

Prepares the cell of the given item when the treelist is rendered.

#### Returns

`System.Void` 

###  CompareTo

#### Returns

`System.Int32` 

###  GetSortExpression

By default returns the SortExpression of the column. If the SortExpression is not set explicitly, it would be calculated, based on the
            DataField of the column.

#### Returns

`System.String` 

