---
title: Telerik.Web.UI.TreeListImageColumn
page_title: Telerik.Web.UI.TreeListImageColumn
description: Telerik.Web.UI.TreeListImageColumn
---

# Telerik.Web.UI.TreeListImageColumn

Represents a Telerik.Web.UI.TreeListColumn extended to display an Image 
            in each of its data cells.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.TreeListColumn
* Telerik.Web.UI.TreeListImageColumn

## Properties

###  DataType `Type`

Gets or sets (see the Remarks) the type of the data from the DataField as it
                was set in the DataSource.

#### Remarks
The DataType property supports the following base .NET Framework data
                types:BooleanByteCharDateTimeDecimalDoubleInt16Int32Int64SByteSingleStringTimeSpanUInt16UInt32UInt64

###  DataImageUrlFields `String[]`

Gets or sets a string, representing a comma-separated enumeration of DataFields
            from the data source, which will form the url of the image which will be shown.

###  DataImageUrlFormatString `String`

Gets or sets a string, specifying the FormatString of the DataNavigateURL.
            Essentially, the DataNavigateUrlFormatString property sets the formatting for the url
            string of the image.

###  ImageUrl `String`

Gets or sets a string, specifying the url, from which the image should be
            retrieved. This property will be honored only if the DataImageUrlFields are
            not set. If either DataImageUrlFields are set, they will override the
            ImageUrl property.

###  AllowSorting `Boolean`

Gets or sets a whether the column data can be sorted.

###  AlternateText `String`

Gets or sets a string, specifying the text which will be shown as alternate
            text to the image

###  ImageAlign `ImageAlign`

Gets or sets a value from the ImageAlign enumeration representing the alignment of 
            the rendered image in relation to the text.

###  ImageWidth `Unit`

Gets or sets the width of the image

###  ImageHeight `Unit`

Gets or sets the height of the image

###  DataAlternateTextField `String`

Gets or sets a string, representing the DataField name from the data source,
            which will be used to supply the alternateText for the image in the column. This text can
            further be customized, by using the DataTextFormatString property.

###  DataAlternateTextFormatString `String`

Gets or sets a string, specifying the format string, which will be used to format
            the alternate text of the image, rendered in the cells of the column.

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

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

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

