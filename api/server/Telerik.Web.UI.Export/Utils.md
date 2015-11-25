---
title: Telerik.Web.UI.Export.Utils
page_title: Telerik.Web.UI.Export.Utils
description: Telerik.Web.UI.Export.Utils
---

# Telerik.Web.UI.Export.Utils

Static class containing Export-related utilities

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Export.Utils

## Methods

###  IsValidExcelCellIndex

Checks if the provided Excel-style index is valid

#### Parameters

#### index `System.String`

Excel-style string index

#### Returns

`System.Boolean` True if valid, false if not.

###  ConvertExcelCellIndexToPoint

Converts a given Excel-style string index to Point value

#### Parameters

#### index `System.String`

Index string

#### Returns

`System.Drawing.Point` Point value

###  ConvertExcelColumnIndexToInt

Converts a given column index (Excel-style) to integer

#### Parameters

#### col `System.String`

Column index (Excel-style)

#### Returns

`System.Int32` Integer column index

###  ConvertPointToExcelCellIndex

Converts a Point value to Excel-style cell index

#### Parameters

#### point `System.Drawing.Point`

Cell index (Point)

#### Returns

`System.String` Excel-style cell index

###  ReverseString

Reverses a string

#### Parameters

#### str `System.String`

String to be reversed

#### Returns

`System.String` Reversed string

###  ConvertVerticalAlign

BIFF: Convert from VerticalAlign to VerticalAlignment enumerations

#### Returns

`Telerik.Web.UI.ExcelBiff.VerticalAlignment` 

###  ConvertHorizontalAlign

BIFF: Convert from HorizontalAlign to HorizontalAlignment enumerations

#### Returns

`Telerik.Web.UI.ExcelBiff.HorizontalAlignment` 

###  ConvertBorderStyle

Converts the ASP.NET BorderStyle enumeration values to Excel BorderStyle enumeration values

#### Parameters

#### borderStyle `System.Web.UI.WebControls.BorderStyle`

#### Returns

`Telerik.Web.UI.ExcelBiff.BorderStyle` 

###  GetCellRange

Returns a list of cells that correspond to a given range

#### Parameters

#### startPoint `System.Drawing.Point`

Start cell index

#### endPoint `System.Drawing.Point`

End cell index

#### Returns

`System.Collections.Generic.List`1` List of cells

###  GetPointsPerUnit

Returns the points (pt) per given Unit value

#### Returns

`System.Double` 

###  GetInchesPerUnit

Returns the inches (in) per given Unit value

#### Returns

`System.Double` 

###  GetPixelsPerUnit

Returns the pixels (px) per given Unit value

#### Returns

`System.Double` 

###  GetExcelCharactersPerUnit

Converts the given Unit value to "Excel Characters" unit value

#### Parameters

#### unit `System.Web.UI.WebControls.Unit`

Input value

#### defaultFont `System.Drawing.Font`

Default font used to calculate the Excel character width value

#### Returns

`System.Double` Value converted in "Excel Characters"

###  SanitizeCellText

Remove the recurring whitespaces; Remove the CR/LF chars, if any; Replace the HTML newline characters with CR/LFs; 
            To put it simply, CR/LF has no meaning in HTML context so only line break characters should be taken into consideration. 
            On the other hand, the HTML line break char is meaningless in the context of the BIFF file. This is to maintain the 
            compatiblity and pertain the expected behavaior.

#### Parameters

#### cellText `System.String`

#### Returns

`System.String` 

###  ConvertToGuid

Converts a string value to Guid

#### Returns

`System.Guid` Parsed Guid value. If parsing fails for some reason, the ConvertToGuid method will return Guid.Empty

###  ConvertToTimeSpan

Converts an object value to TimeSpan

#### Returns

`System.TimeSpan` Parsed TimeSpan value. If parsing fails for some reason, the ConvertToTimeSpan method will return TimeSpan.Zero

###  FontSizeToPoints

Converts strongly typed relative FontSize unit to points (double)

#### Parameters

#### fs `System.Web.UI.WebControls.FontSize`

FontSize value

#### Returns

`System.Double` Size in points

