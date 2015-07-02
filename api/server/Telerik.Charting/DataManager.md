---
title: Telerik.Charting.DataManager
page_title: Telerik.Charting.DataManager
description: Telerik.Charting.DataManager
---

# Telerik.Charting.DataManager

Acquires and manipulates data from databases or other sources. 
            Populates the SeriesCollection of the chart control.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.DataManager

## Properties

###  UseAutoBind `Boolean`

Sets the necessary using or not the automatic data binding at the design time

###  IsChartSupportsXAxisDataBinding `Boolean`

Returns true if possible to use the automatic X Axis data binding

###  IsSeriesSupportsXValues `Boolean`

Does the chart series support the X Values

###  IsSeriesSupportsY2Values `Boolean`

Does the chart series support the Y2 Values

###  IsSeriesSupportsX2Values `Boolean`

Does the chart series support the X2 Values

###  IsSeriesSupportsX2Y2Values `Boolean`

Does the chart series support the X2 and Y2 Values

###  IsSeriesSupportsY3Values `Boolean`

Does the chart series support the Y3 Values

###  IsSeriesSupportsY4Values `Boolean`

Does the chart series support the Y4 Values

###  CurrentSeriesType `ChartSeriesType`

Type of the currently processed series

###  CurrentDataHelper `ICommonDataHelper`

Active DataHelper

###  ParentChart `Chart`

Parent Chart object's reference

###  DataSource `Object`

Chart Data Source object

###  DataMember `String`

Gets or sets the name of the list of data that the data-bound control binds to, in cases where the data source contains more than one distinct list of data items.

###  IsDataBindCalled `Boolean`

Returns true if DataBind method has been called

###  LabelsColumn `String`

The data source column used as chart labels source

###  ValuesXColumn `String`

The data source column used as series items X coordinate

###  ValuesYColumns `String[]`

The data source columns array used as series items Y coordinate source

#### Remarks
This array could be used to set the Gantt chart data source columns. 
            The columns should be added in the following order: X, Y, X2, Y2

###  UseSeriesGrouping `Boolean`

Enables or disables the series grouping feature

#### Remarks
Default value is True

## Methods

###  GetColumnIndex

General column's index detection method

#### Parameters

#### column `System.String`

Column index or name

#### columnType `Telerik.Charting.DataManager.ColumnType`

Data source column type accordingly to ColumnType enumeration

#### Returns

`System.Int32` Column index in a data source

###  FindPossibleColumnIndex

Returns possible column index in data source

#### Parameters

#### groupColumn `System.Int32`

DataGroupColumn index if present or -1 if not

#### type `Telerik.Charting.DataManager.ColumnType`

Data source column type accordingly to ColumnType enumeration

#### Returns

`System.Int32` Column index or -1 if impossible to find column

###  GetGroupsColumn

Gets the groups column index from data source

#### Remarks
When the groups column has not been set it will be found automatically

#### Parameters

#### groupsColumn `System.String`

DataGroupColumn index if present or -1 if not

#### Returns

`System.Int32` Groups column index or -1 if data grouping disabled

###  GetLabelsColumn

Gets the labels column index in data source

#### Remarks
When the labels column has not been set it will be found automatically

#### Parameters

#### labelsColumn `System.String`

DataLabelsColumn index if present or -1 if not

#### Returns

`System.Int32` Series labels column index

###  GetValuesColumn

Gets the series X, Y, X2, Y2, Y3, Y4 values columns

#### Remarks
When the series X, X2 or Y2 values column has not been set it will be found automatically

#### Parameters

#### groupsColumn `System.Int32`

DataGroupColumn index if present or -1 if not

#### column `System.String`

Column name

#### columnType `Telerik.Charting.DataManager.ColumnType`

Data source column type accordingly to ColumnType enumeration

#### auto `System.Boolean`

Should automatic column search be used or not

#### Returns

`System.Int32` Column with numeric values. It can be used as X, Y, X2, Y2, Y3, Y4 values source. 
            If impossible to find a column or data helper is NULL it returns -1

###  GetValuesYColumns

Gets the series Y values columns array

#### Remarks
When the series Y values column has not been set it will be found automatically

#### Parameters

#### valuesYColumns `System.String`

Y values columns array. Can contain as column names as indexes

#### auto `System.Boolean`

Should auto mode be applied

#### Returns

`System.Int32[]` Y values columns indexes array

###  GetAxisLabelsColumn

Gets the axis labels column index

#### Parameters

#### axisLabelsColumn `System.String`

Axis labels column index or name

#### Returns

`System.Int32` Column index

###  GetItemName

Returns either chart series name or series item name

#### Parameters

#### groupColumn `System.Int32`

DataGroupColumn index

#### isGroupColumnNumeric `System.Boolean`

True if group column contains numeric values only

#### labelsColumn `System.Int32`

Series Labels column index

#### valuesYColumns `System.Int32`

Y Values columns array

#### row `System.Int32`

Data item's row index in a data source

#### column `System.Int32`

Data item's column index in a data source

#### itemType `Telerik.Charting.DataManager.ItemType`

Item type Series or SeriesItem

#### Returns

`System.String` Chart item name for an auto created Series or SeriesItem

###  DataBindXAxes

Data bind X Axis labels

#### Parameters

#### groupColumn `System.Int32`

DataGroupColumn index if present or -1 in other case

#### Returns

`System.Void` 

###  ItemsEqual

Compares two series items

#### Parameters

#### item1 `Telerik.Charting.ChartSeriesItem`

Item to compare

#### item2 `Telerik.Charting.ChartSeriesItem`

Item to compare

#### Returns

`System.Boolean` True if items represent the same data and have same names

###  DataBindSeries

Populates existing chart series collection with data.

#### Returns

`System.Int32` 

###  DataBindAuto

Automatically populates chart series collection with data.

#### Returns

`System.Int32` 

###  CreateSeries

Returns new chart series

#### Parameters

#### groupColumn `System.Int32`

DataGroupColumn index or -1 if grouping is not used

#### isGroupColumnNumeric `System.Boolean`

True if group column contains numeric values only

#### row `System.Int32`

Data item's row index in a data source

#### column `System.Int32`

Data item's column index in a data source

#### vColumns `Telerik.Charting.DataManager.ValuesColumns`

Values columns array

#### Returns

`Telerik.Charting.ChartSeries` New ChartSeries instance

###  CreateSeriesItem

Creates new Chart Series item from data source

#### Parameters

#### row `System.Int32`

Data item's row index in a data source

#### column `System.Int32`

Data item's column index in a data source

#### groupColumn `System.Int32`

DataGroupColumn index or -1 if grouping is not used

#### labelsColumn `System.Int32`

Series items labels column

#### vColumns `Telerik.Charting.DataManager.ValuesColumns`

Values columns array

#### useLabels `System.Boolean`

Assign name and label for a series item or not

#### Returns

`Telerik.Charting.ChartSeriesItem` New ChartSeriesItem instance with data from a data source

###  GetDataItem

Returns a Data item from a data source

#### Parameters

#### row `System.Int32`

Data item's row index in a data source

#### Returns

`System.Object` Data item row or null in other cases

###  ValidateDataSource

Validates data source object passed

#### Remarks
The data source should implement the IEnumerable interface

#### Parameters

#### dataSource `System.Object`

Data Source

#### Returns

`System.Void` 

###  OnItemDataBound

Calls an ItemDataBound event

#### Parameters

#### chartSeries `Telerik.Charting.ChartSeries`

Series

#### chartSeriesItem `Telerik.Charting.ChartSeriesItem`

Series item

#### dataItem `System.Object`

Data Source

#### Returns

`System.Void` 

###  DataBind

Forces the data to be refreshed

#### Returns

`System.Void` 

###  ClearDataSource

Clears the Data Source used

#### Returns

`System.Void` 

###  CopyFrom

Copies settings from another data manager

#### Parameters

#### manager `Telerik.Charting.DataManager`

Source DataManager to copy settings from

#### Returns

`System.Void` 

