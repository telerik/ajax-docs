---
title: Programming Overview
page_title: Server-side Overview | RadPivotGrid for ASP.NET AJAX Documentation
description: Overview
slug: pivotgrid/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



This article will introduce you to the control-specific properties, methods and events of the RadPivotGrid and its main components.

* **RadPivotGrid Class Members**

* [RadPivotGrid Properties](#radpivotgrid-properties)

* [RadPivotGrid Collections](#radpivotgrid-collections)

* [RadPivotGrid Methods](#radpivotgrid-methods)

* [RadPivotGrid Events](#radpivotgrid-events)

* [PivotGridField Properties](#pivotgridfield-properties)

* [PivotGridDataCell Properties](#pivotgriddatacell-properties)

## RadPivotGrid Class Members

### RadPivotGrid Properties

The specific properties of the RadPivotGrid are listed below along with a short description on their meaning and purpose.


>caption  

| Property | Description |
| ------ | ------ |
| **AllowFieldsReordering** |Gets or sets a value indicating whether dragging fields between zones and to the fields window is allowed.|
| **AllowPaging** |Gets or sets a value indicating whether automatic paging is enabled.|
| **AllowSorting** |Gets or sets a value indicating whether the built-in sorting is enabled.|
| **ClientSettings** |A group of properties for controlling the client-side behavior of the grid. They are listed in the table below.|
| **ColumnGrandTotalCellStyle** |A group of properties for customizing the look of the cells that show the columns grand total results.|
| **ColumnGrandTotalFormatString** |Specifies the format string used for the columns grand total results.|
| **ColumnGroupsDefaultExpanded** |Gets or sets the default expand state of all column groups which will be applied on initial load.|
| **ColumnHeaderCellStyle** |A group of properties for customizing the look of the column header cells.|
| **ColumnHeaderZoneText** |Gets or sets the column zone text when there are no items added to the column header zone.|
| **ColumnTableLayout** |Gets or sets the table-layout of the table displaying the column and data cells.|
| **ColumnTotalCellStyle** |A group of properties for customizing the look of the cells that show the columns grand total results.|
| **DataCellStyle** |A group of properties for customizing the look of the cells that display the aggregate values.|
| **DataHeaderZoneText** |Gets or sets the data zone text when there are no items added to the data header zone.|
| **EnableToolTips** |Gets or sets a value indicating whether the Tooltips functionality of the control is enabled.|
| **EnableZoneContextMenu** |Gets or sets a value indicating whether the context menu for reordering zones is enabled.|
| **EmptyValue** |Gets or sets the values that will be displayed in the data cells with empty aggregate values.|
| **ErrorValue** |Gets or sets the values that will be displayed in the data cells when there is an error during aggregation of values.|
| **FieldsWindow** |Returns a reference to the RadWindow control which is created when EnableZoneContextMenu is set to true.|
| **LocalizationPath** |Gets or sets a value indicating where RadPivotGrid will look for its .resx localization file.|
| **PagerStyle** |Gets a reference to the PivotGridPagerStyle object that allows you to set the appearance of the page item in a RadPivotGrid control.|
| **PageSize** |Gets or sets an integer value indicating the number of items that a single page in RadPivotGrid will display.|
| **RowGrandTotalCellStyle** |A group of properties for customizing the look of the cells that show the rows grand total results.|
| **RowGrandTotalFormatString** |Specifies the format string used for the rows grand total results.|
| **RowGroupsDefaultExpanded** |Gets or sets the default expand state of all row groups which will be applied on initial load.|
| **RowHeaderCellStyle** |A group of properties for customizing the look of the row header cells.|
| **RowHeaderZoneText** |Gets or sets the header zone text when there are no items added to the row header zone.|
| **RowTableLayout** |Gets or sets the table-layout of the table displaying the row cells.|
| **RowTotalCellStyle** |A group of properties for customizing the look of the cells that show the rows total results.|
| **ShowColumnHeaderZone** |Gets or sets a value indicating if the Column Header Zone will be shown in the current RadPivotGrid.|
| **ShowDataHeaderZone** |Gets or sets a value indicating if the Data Header Zone will be shown in the current RadPivotGrid.|
| **ShowRowHeaderZone** |Gets or sets a value indicating if the Row Header Zone will be shown in the current RadPivotGrid.|
| **ToolTipManager** |Gets a reference to the RadTooltipManager instance used by RadPivotGrid to show tooltips.|
| **ZoneContextMenu** |Returns a reference to the RadContextMenu control which is created when EnableZoneContextMenu is set to true.|

### ClientSettings

The RadPivotGrid ClientSettings class contains the following properties used to customize the client-side behavior of the control:


>caption  

|  Name  | Description |
| ------ | ------ |
| **ClientMessages-DragToReorder** |Gets or sets the tooltip which will be shown when over a field and AllowDraggingBettweenZones is enabled.|
| **Scrolling-AllowVerticalScroll** |Gets or sets whether the pivot grid will have vertical scroll bar.|
| **Scrolling-SaveScrollPosition** |Gets or sets whether the control's scroll position will be preserved upon post back.|
| **Scrolling-ScrollHeight** |Gets or sets the height of the scrollable area in RadPivotGrid.|

### RadPivotGrid Collections

RadPivotGrid has the following collections:


>caption  

|  Name  | Description |
| ------ | ------ |
| **CollapsedColumnIndexes** |Gets a collection containing the indexes of the collapsed columns.|
| **CollapsedRowIndexes** |Gets a collection containing the indexes of the collapsed rows.|
| **Fields** |Collection containing the current PivotGrid PivotGridField objects. The PivotGridField class members are listed later in this article.|
| **Items** |A collection of all PivotGridDataItems.|
| **SortExpressions** |A collection of the SortExpressions currently applied to the RadPivotGrid.|

### RadPivotGrid Methods

The RadPivotGrid exposes the following methods:


>caption  

|  Name  | Description |
| ------ | ------ |
| **GetItems(params PivotGridItemType[] types)** |Returns a collection of all PivotGridItem objects in the current RadPivotGrid that are of the specified item type(s).|
| **GetRowZones()** |Returns a collection of all PivotGridRowZone objects in the current RadPivotGrid.|
| **GetZoneByType(PivotGridZoneType zoneType)** |Returns the zone of the specified type. For rows, where the number of zones could vary, only the first zone is returned. Use GetRowZones() to get a collection of all PivotGridRowZones.|
| **Rebind()** |Triggers an explicit rebind of the control.|
| **TryReorderField(PivotGridField field, PivotGridFieldZoneType zoneType, int zoneIndex) / TryReorderField(string fieldUniqueName, PivotGridFieldZoneType zoneType, int zoneIndex)** |Takes as argument either the field unique name or the field object and reorders the field based on the zoneType and zoneIndex specified. Returns a boolean value indicating whether the reorder was successful.|


>caption  

|  Name  |  Parameters  |  Return type  | Description |
| ------ | ------ | ------ | ------ |
| **Sort** |(string fieldUniqueName, PivotGridSortOrder sortOrder, bool suppressRebind = false)|void|Changes the sort order of the specified field. fieldUniqueName: The UniqueName value of the field for which the sort order will be changed. sortOrder: The new sort order.|
| **Sort** |(PivotGridField field, bool suppressRebind = false)|void|Changes the sort order of the specified field. Field: The field for which the sort order will be changed.|
| **Sort** |(PivotGridField field, PivotGridSortOrder sortOrder, bool suppressRebind = false)|void|Changes the sort order of the specified field. Field: The field for which the sort order will be changed. sortOrder: The new sort order.|
| **Sort** |(string expression, bool suppressRebind = false)|void|Executes the sort expressions which should contain the field UniqueName which will be sorted and optionally include the sort order - ASC (Ascending) or DESC (Descending).|

Example



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.Sort(RadPivotGrid1.Fields["Quantity"], true);
    RadPivotGrid1.Sort("Color DESC", true);

    PivotGridSortExpression expression = new PivotGridSortExpression();
    expression.FieldName = "Cost";
    expression.SortOrder = PivotGridSortOrder.Descending;
    RadPivotGrid1.Sort(expression);
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.Sort(RadPivotGrid1.Fields("Quantity"), True)
    RadPivotGrid1.Sort("Color DESC", True)

    Dim expression As New PivotGridSortExpression()
    expression.FieldName = "Cost"
    expression.SortOrder = PivotGridSortOrder.Descending
    RadPivotGrid1.Sort(expression)
End Sub
````



>caption  

|  Name  |  Parameters  |  Return type  | Description |
| ------ | ------ | ------ | ------ |
| **ExpandAllColumnGroups** |(bool suppressRebind = false)|void|Expands all column groups.|
| **ExpandAllColumnGroups** |(int level, bool suppressRebind = false)|void|Expands all column groups at a certain level.|
| **ExpandAllRowGroups** |(bool suppressRebind = false)|void|Expands all rows groups.|
| **ExpandAllRowGroups** |(int level, bool suppressRebind = false)|void|Expands all column groups at a certain level.|
| **ExpandAllFieldGroups** |(PivotGridRowField field, bool suppressRebind = false)|void|Expands all row groups which are at the level of the specified field.|
| **ExpandAllFieldGroups** |(PivotGridColumnField field, bool suppressRebind = false)|void|Expands all column groups which are at the level of the specified field.|

Example:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.ExpandAllRowGroups(true);
    RadPivotGrid1.ExpandAllColumnGroups(1, true);
    RadPivotGrid1.ExpandAllFieldGroups(RadPivotGrid1.Fields["Cost"] as PivotGridColumnField);
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.ExpandAllRowGroups(True)
    RadPivotGrid1.ExpandAllColumnGroups(1, True)
    RadPivotGrid1.ExpandAllFieldGroups(TryCast(RadPivotGrid1.Fields("Cost"), PivotGridColumnField))
End Sub
````



>caption  

|  Name  |  Parameters  |  Return type  | Description |
| ------ | ------ | ------ | ------ |
| **CollapseAllColumnGroups** |(bool suppressRebind = false)|void|Collapses all column groups.|
| **CollapseAllColumnGroups** |(int level, bool suppressRebind = false)|void|Collapses all column groups at a certain level.|
| **CollapseAllRowGroups** |(bool suppressRebind = false)|void|Collapses all row groups.|
| **CollapseAllRowGroups** |(int level, bool suppressRebind = false)|void|Collapses all row groups at a certain level.|
| **CollapseAllFieldGroups** |(PivotGridRowField field, bool suppressRebind = false)|void|Collapses all row groups which are at the level of the specified field.|
| **CollapseAllFieldGroups** |(PivotGridColumnField field, bool suppressRebind = false)|void|Collapses all column groups which are at the level of the specified field.|

Example:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.CollapseAllColumnGroups(true);
    RadPivotGrid1.CollapseAllRowGroups(1, true);
    RadPivotGrid1.ExpandAllFieldGroups(RadPivotGrid1.Fields["Quantity"] as PivotGridRowField);
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.CollapseAllColumnGroups(True)
    RadPivotGrid1.CollapseAllRowGroups(1, True)
    RadPivotGrid1.ExpandAllFieldGroups(TryCast(RadPivotGrid1.Fields("Quantity"), PivotGridRowField))
End Sub
````



>caption  

|  Name  |  Parameters  |  Return type  | Description |
| ------ | ------ | ------ | ------ |
| **ClearAllFilters** |None|void|Clears all previously applied filter expressions.|
| **ClearFilter** |(string fieldUniqueName)|void|Clears all filter expressions associated with a field.|

Example 1:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.ClearAllFilters();
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.ClearAllFilters()
End Sub
````


Example 2:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.ClearFilter(RadPivotGrid1.Fields["Cost"]);
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.ClearFilter(RadPivotGrid1.Fields("Cost"))
End Sub
````



>caption  

|  Name  |  Parameters  |  Return type  | Description |
| ------ | ------ | ------ | ------ |
| **FilterByLabel** |(PivotGridFilterFunction filterFunction, PivotGridField field, string filterValue, bool suppressRebind = false)|void|Filters by the text value of the field. Label filters control which groups for a given field will remain in the pivot data view after grouping has been performed. If, for example, you have your data grouped by a Country field and you need only those Country groups of items that relate to Bulgaria you should apply an Equals label filter to the Country field with the respective string filter value of “Bulgaria”.|
| **FilterByLabel** |(PivotGridFilterFunction filterFunction, PivotGridField field, string filterValue, string betweenFilterValue, bool suppressRebind = false)|void|Filters by the text value of the field. Label filters control which groups for a given field will remain in the pivot data view after grouping has been performed.|

Example 1:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.FilterByLabel(PivotGridFilterFunction.Contains, RadPivotGrid1.Fields["Cost"], "filter value");
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.FilterByLabel(PivotGridFilterFunction.Contains, RadPivotGrid1.Fields("Cost"), "filter value")
End Sub
````


Example 2:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.FilterByLabel(PivotGridFilterFunction.IsNotBetween, RadPivotGrid1.Fields["Cost"], "filter value", "beetween filter value");
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.FilterByLabel(PivotGridFilterFunction.IsNotBetween, RadPivotGrid1.Fields("Cost"), "filter value", "beetween filter value")
End Sub
````



>caption  

|  Name  |  Parameters  |  Return type  | Description |
| ------ | ------ | ------ | ------ |
| **FilterByValue** |(PivotGridFilterFunction filterFunction, PivotGridField field, PivotGridAggregateField aggregateField, string filterValue, bool suppressRebind = false)|void|Filters by the values of the field. Value filters, for their part, allow filtering operations to be performed on the aggregate results. Again, the filtering is applied after the grouping of the data. Here is another example: Suppose you have grouped your data by Country, aggregated it by Sum of Cost and need only those Country groups of items which cumulative cost falls within a certain range. Then you should apply a Between value filter on the Country field with the corresponding filter values.|
| **FilterByValue** |(PivotGridFilterFunction filterFunction, PivotGridField field, PivotGridAggregateField aggregateField, string filterValue, string betweenFilterValue, bool suppressRebind = false)|void|Filters by the values of the field. Value filters, for their part, allow filtering operations to be performed on the aggregate results. Again, the filtering is applied after the grouping of the data.|

Example 1:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.FilterByValue(PivotGridFilterFunction.BeginsWith,
        RadPivotGrid1.Fields["Line"],
        RadPivotGrid1.Fields["Total"] as PivotGridAggregateField,
        "filter value");
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.FilterByValue(PivotGridFilterFunction.BeginsWith, RadPivotGrid1.Fields("Line"), TryCast(RadPivotGrid1.Fields("Total"), PivotGridAggregateField), "filter value")
End Sub
````


Example 2:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.FilterByValue(PivotGridFilterFunction.IsBetween,
        RadPivotGrid1.Fields["Line"],
        RadPivotGrid1.Fields["Total"] as PivotGridAggregateField,
        "filter value",
        "between filter value");
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.FilterByValue(PivotGridFilterFunction.IsBetween, RadPivotGrid1.Fields("Line"), TryCast(RadPivotGrid1.Fields("Total"), PivotGridAggregateField), "filter value", "between filter value")
End Sub
````



>caption  

|  Name  |  Parameters  |  Return type  | Description |
| ------ | ------ | ------ | ------ |
| **FilterTop** |(PivotGridField field, PivotGridAggregateField aggregateField, PivotGridAggregateType aggregateType, double value, bool suppressRebind = false)|void|When a Top/Bottom value filter is applied to a given field with the Items mode, it will select the top/bottom groups for that field sorted by the chosen aggregate field and the count of which is given by the filter value. For example, a Top operator with and Items filter value of 10 on the Sum of Cost aggregate field will return the 10 groups (of the field filtered on) which Sum of Cost is greatest. The Percent mode will return the top/bottom groups which cumulative aggregate values (just to remind: the aggregate field being set as part of the filter condition) add to the specified percent of the grand total for that field. The Sum mode, in a similar fashion, gets the top/bottom groups which cumulative aggregate values add to the sum specified by the filter value.|
| **FilterBottom** |(PivotGridField field, PivotGridAggregateField aggregateField, PivotGridAggregateType aggregateType, double value, bool suppressRebind = false)|void|When a Top/Bottom value filter is applied to a given field with the Items mode, it will select the top/bottom groups for that field sorted by the chosen aggregate field and the count of which is given by the filter value. For example, a Top operator with and Items filter value of 10 on the Sum of Cost aggregate field will return the 10 groups (of the field filtered on) which Sum of Cost is greatest. The Percent mode will return the top/bottom groups which cumulative aggregate values (just to remind: the aggregate field being set as part of the filter condition) add to the specified percent of the grand total for that field. The Sum mode, in a similar fashion, gets the top/bottom groups which cumulative aggregate values add to the sum specified by the filter value.|

Example 1:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.FilterTop(RadPivotGrid1.Fields["Cost"],
        RadPivotGrid1.Fields["Total"] as PivotGridAggregateField,
        PivotGridAggregateType.Items,
        10);
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.FilterByValue(PivotGridFilterFunction.IsBetween, RadPivotGrid1.Fields("Line"), TryCast(RadPivotGrid1.Fields("Total"), PivotGridAggregateField), "filter value", "between filter value")
End Sub
````


Example 2:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.FilterBottom(RadPivotGrid1.Fields["Cost"],
        RadPivotGrid1.Fields["Total"] as PivotGridAggregateField,
        PivotGridAggregateType.Items,
        10);
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.FilterBottom(RadPivotGrid1.Fields("Cost"), TryCast(RadPivotGrid1.Fields("Total"), PivotGridAggregateField), PivotGridAggregateType.Items, 10)
End Sub
````



>caption  

|  Name  |  Parameters  |  Return type  | Description |
| ------ | ------ | ------ | ------ |
| **SetFilterIncludes** |(string fieldUniqueName, IEnumerable<object> values, bool suppressRebind = false)|void|Set the values which will be included in the results of the RadPivotGrid.|
| **SetFilterExcludes** |(string fieldUniqueName, IEnumerable <object> values, bool suppressRebind = false)|void|Sets the values which will be excluded in the results of the RadPivotGrid.|

Example 1:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.SetFilterIncludes("Color", new object[] { "White", "Black" });
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.FilterBottom(RadPivotGrid1.Fields("Cost"), TryCast(RadPivotGrid1.Fields("Total"), PivotGridAggregateField), PivotGridAggregateType.Items, 10)
End Sub
````


Example 2:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    RadPivotGrid1.SetFilterExcludes("Color", new object[] { "White", "Black" });
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    RadPivotGrid1.SetFilterExcludes("Color", New Object() {"White", "Black"})
End Sub
````



>caption  

|  Name  |  Parameters  |  Return type  | Description |
| ------ | ------ | ------ | ------ |
| **TryReorderField** |(PivotGridField field, PivotGridFieldZoneType zoneType, int zoneIndex)|bool|Tries to reorder the specified field with new ZoneType and/or new ZoneIndex.|
| **TryReorderField** |(string fieldUniqueName, PivotGridFieldZoneType zoneType, int zoneIndex)|bool|Tries to reorder the specified field with new ZoneType and/or new ZoneIndex.|

Example:



````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    if (RadPivotGrid1.TryReorderField("Cost", PivotGridFieldZoneType.Column, 1))
    {
        //successful reorder
        //your code logic here
    }
    if (RadPivotGrid1.TryReorderField(RadPivotGrid1.Fields["Cost"], PivotGridFieldZoneType.Row, 1))
    {
        //successful reorder
        //your code logic here
    }
}
````
````VB.NET
Protected Overrides Sub OnPreRender(e As EventArgs)
    MyBase.OnPreRender(e)
    'successful reorder
    'your code logic here
    If RadPivotGrid1.TryReorderField("Cost", PivotGridFieldZoneType.Column, 1) Then
    End If
    'successful reorder
    'your code logic here
    If RadPivotGrid1.TryReorderField(RadPivotGrid1.Fields("Cost"), PivotGridFieldZoneType.Row, 1) Then
    End If
End Sub
````


### RadPivotGrid Events

Below you will find a list of the events specific to the RadPivotGrid control:


>caption  

|  Name  | Description |
| ------ | ------ |
| **AddingFieldToZone** |Fires before a field is inserted into zone. You can handle the event to replace or modify the instance, or certain properties of the field that is about to be created and added to the fields collection.|
| **CellCreated** |Fires when a cell is created.|
| **CellDataBound** |Fires when a cell is bound to data.|
| **GetDescriptionsDataCompleted** |Usable when RadPivotGrid is bound to an OLAP source. You can refer to[RadPivotGrid OLAP Support]({%slug pivotgrid/data-binding/radpivotgrid-olap-support%})article for a sample code.|
| **ItemCommand** |Fires when a button is clicked in a RadPivotGrid control. You can see a list of all built-in command names below.|
| **ItemCreated** |Fires when an item in RadPivotGrid is created.|
| **NeedDataSource** |Fires when the grid is about to be bound and the data source must be assigned (when the current DataSource is null/Nothing).|
| **PageIndexChanged** |Fires when a paging action has been performed, like navigating to the next or previous page.|
| **PageSizeChanged** |Fires when PageSize property value has been changed.|
| **PrepareDescriptionForField** |Usable when RadPivotGrid is bound to an OLAP source. See[Basic Sorting]({%slug pivotgrid/functionality/sorting%})for a sample.|
| **Sorting** |Fires when a column is being sorted.|

### CommandNames in RadPivotGrid

In the below table you can see a list of all command names in RadPivotGrid and the action they are associated to.


>caption  

|  Name  | Description |
| ------ | ------ |
| **ChangePageSizeCommandName** |Represents the ChangePageSize command name. Fires RadPivotGrid.PageSizeChanged event.|
| **DeselectCommandName** |Represents the Deselect command name. Fires RadPivotGrid.ItemCommand event. Deselects the item it was triggered for.|
| **DeselectAllCommandName** |Represents the DeselectAll command name. Fires RadPivotGrid.ItemCommand event. Deselects all visible items.|
| **ExpandCollapseCommandName** |Represents the ExpandCollapse command name. Fires RadPivotGrid.ItemCommand event. Changes the expanded state of the column or row header group.|
| **FieldReorderCommandName** |Represents the FieldReorder command name. Fires RadPivotGrid.ItemCommand event. Reorders the field to a given zone and index.|
| **PageCommandName** |Represents the Page command name. Fires the RadPivotGrid.PageIndexChanged event.|
| **RebindPivotGridCommandName** |Represents the Rebind command name. Forces RadPivotGrid.Rebind() method execution.|
| **SelectCommandName** |Represents the Select command name. Fires RadPivotGrid.ItemCommand event. Selects the item it was triggered for.|
| **SelectAllCommandName** |Represents the SelectAll command name. Fires RadPivotGrid.ItemCommand event. Selects all visible items.|
| **ShowHideFieldCommandName** |Represents the ShowHideField command name. Fires RadPivotGrid.ItemCommand event. Changes the hidden state of the field it was triggered for.|
| **SortCommandName** |Represents the Sort command name. Fires RadPivotGrid.Sorting event.|

## PivotGridField Properties

Here follows a list of the properties and methods of the PivotGridField class and of the specific classes that inherit it: **PivotGridColumnField**, PivotGridRowField and **PivotGridAggregateField**.


>caption Common Properties

|  Name  | Description |
| ------ | ------ |
| **Caption** |Gets or sets the field's display text.|
| **CellStyle** |A group of properties for customizing the field's style.|
| **DataField** |Gets or sets the field name from the specified data source.|
| **DataFormatString** |Specifies the format string used for the field.|
| **IsHidden** |Returns true if the field is hidden and placed in the fields window.|
| **Owner** |Gets a reference to the RadPivotGrid object that contains the field.|
| **RenderingControl** |Returns a composite control representing the rendered control representation of the field. Depending on the features enabled, the number and type of contained controls varies.|
| **SortOrder** |Gets an instance of the PivotGridSortOrder enum. Available option are **Ascending** , **Descending** , **None** .|
| **TotalFormatString** |Specifies the format string used for the total of the field.|
| **UniqueName** |Gets or sets the unique name of the field.|
| **ZoneIndex** |Gets or sets the order indexes for fields displayed within the same zone.|
| **ZoneType** |Gets the type of the zone in which the field resides.|


>caption PivotGridAggregateField Properties

|  Name  | Description |
| ------ | ------ |
| **Aggregate** |Specifies the aggregate function used for aggregating the values that the totals will display. Possible values are: **Average, Count, Max, Min, Product, StdDevP, Sum, Var, VarP.** |

## PivotGridDataCell Properties


>caption PivotGridDataCell Properties

|  Name  | Description |
| ------ | ------ |
| **RowIndex** |Determines in which row in the **Data Header Area** the cell will be rendered|
| **ColumnIndex** |Determines in which column in the **Data Header Area** the cell will be rendered|
