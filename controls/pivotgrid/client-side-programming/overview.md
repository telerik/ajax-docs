---
title: Overview
page_title: Client-side Programming Overview - RadPivotGrid
description: Check our Web Forms article about Overview.
slug: pivotgrid/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



This article introduces the RadPivotGrid client object with its properties, methods and events along with the client-side API of its child objects.

## RadPivotGrid client object

To get a reference of the RadPivotGrid client-side object, you can use one of the following approaches:

* Using the **$find(id)** method (shortcut for the findComponent() method) of the ASP.NET AJAX framework:

* Subscribing for the **OnPivotGridCreated** client-side event of the control. In its handler the sender argument references the **RadPivotGrid** client object:

## RadPivotGrid Properties

**RadPivotGrid** exposes the following client-side properties:


>caption  

| Property | Description |
| ------ | ------ |
| **get_uniqueID()** |Returns the UniqueID value of RadPivotGrid.|
| **get_clientSettings()** |Returns client-side objects which represent the RadPivotGrid client settings.|
| **get_rowHeaderTable()** |Returns an object of type **PivotGridRowHeaderTable** representing the table that holds the row headers.|
| **get_columnHeaderTable()** |Returns an object of type **PivotGridColumnHeaderTable** representing the table that holds the column headers.|
| **get_dataTable()** |Returns an object of type **PivotGridDataTable** representing the table that holds the data cells.|
| **get_hzScrollDiv()** |Returns the DIV element which holds the horizontal scrollbar of the control.|
| **get_verticalScrollDiv()** |Returns the DIV element which holds the vertical scrollbar of the control.|
| **get_scrollHeight()** |Returns a numeric value representing the scroll height of the RadPivotGrid control.|
| **get_columnGroupDescriptionsCount()** |Returns a number representing the count of the column group descriptions.|
| **get_fields()** |Returns a collection of **RadPivotGridField** objects representing all pivot grid fields in the control.|
| **get_fieldsWindow()** |Returns a reference to the RadWindow component which is created when **EnableZoneContextMenu** is set to **true** .|
| **get_zoneContextMenu()** |Returns a reference to the RadContextMenu component which is created when **EnableZoneContextMenu** is set to **true** .|
| **get_toolTipManager ()** |Returns an instance to the client-side object of the RadToolTipManager used to display pivot grid tooltip.|
| **get_enableToolTips()** |Returns a Boolean value indicating whether the toolTips are enabled or not.|

## RadPivotGrid Methods

**RadPivotGrid** provides the following client-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| **rebind()** |Method which will force rebind of the RadPivotGrid control and will refresh its state using internally the fireCommand() client-side method. The action will be performed on the server.|
| **hideField(uniqueName)** |A method which hides the field having the provided unique name.|
| **showField(uniqueName)** |A method which shows the field having the provided unique name.|
| **tryReorderField(fieldUniqueName, zoneType, zoneIndex)** |A method which accepts as arguments the unique name of the field you want to reorder,the type of the zone you want to move it to and the index you want to put it at. If the providedarguments are valid, it moves the field to the given zone at the specified index. The zone type is an enumeration of type **Telerik.Web.UI.PivotGridFieldZoneType** and has the following values: "Filter" (1), "Aggregate" (2), "Column" (4), "Row" (8).|
| **getFieldByUniqueName(uniqueName)** |Returns the PivotGridField object having the provided unique name.|
| **fireCommand(commandName, commandArgument)** |Method which triggers specific command for the pivot grid when executed. The method is called for the RadPivotGrid client instance. The method arguments are the command which will be processed and its corresponding arguments.|

## RadPivotGrid Events

**RadPivotGrid** provides the following client-side events:


>caption  

| Event | Description |
| ------ | ------ |
| **[OnCommand]({%slug pivotgrid/client-side-programming/events/oncommand%})** |This event will be raised when client command is executed in RadPivotGrid. The command can be canceled.|
| **[OnPivotGridCreating]({%slug pivotgrid/client-side-programming/events/onpivotgridcreating%})** |This event is fired when the RadPivotGrid client component is initializing.|
| **[OnPivotGridCreated]({%slug pivotgrid/client-side-programming/events/onpivotgridcreated%})** |This event is fired when the RadPivotGrid client component is initialized.|
| **[OnPivotGridDestroying]({%slug pivotgrid/client-side-programming/events/onpivotgriddestroying%})** |This event is fired when the RadPivotGrid client component is about to be disposed.|
| **[OnToolTipShow]({%slug pivotgrid/client-side-programming/events/ontooltipshow%})** |This event is raised immediately before a tooltip is shown on the client. Cannot be canceled.|

## PivotGridField Properties and Methods


>caption PivotGridField Properties

| Property | Description |
| ------ | ------ |
| **get_owner()** |A property which gets a reference to the owner RadPivotGrid object.|
| **get_uniqueName()** |A property which returns the unique name of the field.|
| **get_zoneIndex()** |A property which returns the zone index of the field.|
| **get_zoneType()** |Returns a numeric value which corresponds to a member of the Telerik.Web.UI.PivotGridFieldZoneType enumeration which has the following values: "Filter" (1), "Aggregate" (2), "Column" (4), "Row" (8).|
| **get_isHidden()** |A property which returns a boolean value indicating whether the field is hidden and placed in the fields window.|


>caption PivotGridField Methods

| Method | Description |
| ------ | ------ |
| **show()** |A method which hides the field it is called upon.|
| **hide()** |A method which hides the field it is called upon.|
| **tryReorder(zoneType, zoneIndex)** |A method which accepts as arguments the type of the zone you want to move the field toand the index you want to put it at. If the provided arguments are valid, it moves the field to thegiven zone at the specified index. The zone type is an enumeration of type **Telerik.Web.UI.PivotGridFieldZoneType** and has the following values: "Filter" (1), "Aggregate" (2), "Column" (4), "Row" (8).|
