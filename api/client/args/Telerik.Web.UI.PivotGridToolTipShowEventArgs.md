---
title: Telerik.Web.UI.PivotGridToolTipShowEventArgs
page_title: Client-side API Reference
description: Telerik.Web.UI.PivotGridToolTipShowEventArgs
slug: Telerik.Web.UI.PivotGridToolTipShowEventArgs
---

# Telerik.Web.UI.PivotGridToolTipShowEventArgs : Sys.EventArgs 

## Inheritance Hierarchy

* Sys.EventArgs
* *[Telerik.Web.UI.PivotGridToolTipShowEventArgs]({%slug Telerik.Web.UI.PivotGridToolTipShowEventArgs%})*


## Methods

### get_columnsData

Returns the path of the column ancestors for the current cell of the tooltip if available, otherwise undefined. For example: "Column: 1996 - Quarter 3 - Sum of TotalPrice".

#### Parameters

#### Returns

`String` 

### get_dataValue

Returns the row of the toolTip that shows the data value. For row and column header cells which do not have a value the method returns the dataField in the brackets.

#### Parameters

#### Returns

`String` 

### get_originalText

Returns the internal text generated from the server, which will be used to create the different rows of data shown in the toolTip. 
The text is semicolon separated, for example: Sum of TotalPrice;Value: $21,080.00;Row: Beverages - Cote de Blaye;Column: 1996 - Quarter 3 - Sum of TotalPrice.

#### Parameters

#### Returns

`String` 

### get_rowsData

Returns the path of the row ancestors for the current cell of the tooltip if available, otherwise undefined. For example: "Row: Beverages - Cote de Blaye".

#### Parameters

#### Returns

`String` 

### get_toolTip

Returns the client-side object of the toolTip that will be shown.

#### Parameters

#### Returns

`Telerik.Web.UI.RadToolTip` 

