---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: pivotgrid/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



This article introduces the RadPivotGrid client object with its properties, methods and events along with the client-side API of its child objects.

## RadPivotGrid client object

To get a reference of the RadPivotGrid client-side object, you can use one of the following approaches:

* Using the __$find(id)__ method (shortcut for the findComponent() method) of the ASP.NET AJAX framework:

* Subscribing for the __OnPivotGridCreated__ client-side event of the control. In its handler the sender argument references the __RadPivotGrid__ client object:

## RadPivotGrid Properties

__RadPivotGrid__ exposes the following client-side properties:


>caption  

| Property | Description |
| ------ | ------ |
| __get_uniqueID()__ |Returns the UniqueID value of RadPivotGrid.|
| __get_clientSettings()__ |Returns client-side objects which represent the RadPivotGrid client settings.|
| __get_rowHeaderTable()__ |Returns an object of type __PivotGridRowHeaderTable__ representing the table that holds the row headers.|
| __get_columnHeaderTable()__ |Returns an object of type __PivotGridColumnHeaderTable__ representing the table that holds the column headers.|
| __get_dataTable()__ |Returns an object of type __PivotGridDataTable__ representing the table that holds the data cells.|
| __get_hzScrollDiv()__ |Returns the DIV element which holds the horizontal scrollbar of the control.|
| __get_verticalScrollDiv()__ |Returns the DIV element which holds the vertical scrollbar of the control.|
| __get_scrollHeight()__ |Returns a numeric value representing the scroll height of the RadPivotGrid control.|
| __get_columnGroupDescriptionsCount()__ |Returns a number representing the count of the column group descriptions.|
| __get_fields()__ |Returns a collection of __RadPivotGridField__ objects representing all pivot grid fields in the control.|
| __get_fieldsWindow()__ |Returns a reference to the RadWindow component which is created when __EnableZoneContextMenu__ is set to __true__ .|
| __get_zoneContextMenu()__ |Returns a reference to the RadContextMenu component which is created when __EnableZoneContextMenu__ is set to __true__ .|
| __get_toolTipManager ()__ |Returns an instance to the client-side object of the RadToolTipManager used to display pivot grid tooltip.|
| __get_enableToolTips()__ |Returns a Boolean value indicating whether the toolTips are enabled or not.|

## RadPivotGrid Methods

__RadPivotGrid__ provides the following client-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| __rebind()__ |Method which will force rebind of the RadPivotGrid control and will refresh its state using internally the fireCommand() client-side method. The action will be performed on the server.|
| __hideField(uniqueName)__ |A method which hides the field having the provided unique name.|
| __showField(uniqueName)__ |A method which shows the field having the provided unique name.|
| __tryReorderField(fieldUniqueName, zoneType, zoneIndex)__ |A method which accepts as arguments the unique name of the field you want to reorder,the type of the zone you want to move it to and the index you want to put it at. If the providedarguments are valid, it moves the field to the given zone at the specified index. The zone type is an enumeration of type __Telerik.Web.UI.PivotGridFieldZoneType__ and has the following values: "Filter" (1), "Aggregate" (2), "Column" (4), "Row" (8).|
| __getFieldByUniqueName(uniqueName)__ |Returns the PivotGridField object having the provided unique name.|
| __fireCommand(commandName, commandArgument)__ |Method which triggers specific command for the pivot grid when executed. The method is called for the RadPivotGrid client instance. The method arguments are the command which will be processed and its corresponding arguments.|

## RadPivotGrid Events

__RadPivotGrid__ provides the following client-side events:


>caption  

| Event | Description |
| ------ | ------ |
| __[OnCommand]({%slug pivotgrid/client-side-programming/events/oncommand%})__ |This event will be raised when client command is executed in RadPivotGrid. The command can be canceled.|
| __[OnPivotGridCreating]({%slug pivotgrid/client-side-programming/events/onpivotgridcreating%})__ |This event is fired when the RadPivotGrid client component is initializing.|
| __[OnPivotGridCreated]({%slug pivotgrid/client-side-programming/events/onpivotgridcreated%})__ |This event is fired when the RadPivotGrid client component is initialized.|
| __[OnPivotGridDestroying]({%slug pivotgrid/client-side-programming/events/onpivotgriddestroying%})__ |This event is fired when the RadPivotGrid client component is about to be disposed.|
| __[OnToolTipShow]({%slug pivotgrid/client-side-programming/events/ontooltipshow%})__ |This event is raised immediately before a tooltip is shown on the client. Cannot be canceled.|

## PivotGridField Properties and Methods


>caption PivotGridField Properties

| Property | Description |
| ------ | ------ |
| __get_owner()__ |A property which gets a reference to the owner RadPivotGrid object.|
| __get_uniqueName()__ |A property which returns the unique name of the field.|
| __get_zoneIndex()__ |A property which returns the zone index of the field.|
| __get_zoneType()__ |Returns a numeric value which corresponds to a member of the Telerik.Web.UI.PivotGridFieldZoneType enumeration which has the following values: "Filter" (1), "Aggregate" (2), "Column" (4), "Row" (8).|
| __get_isHidden()__ |A property which returns a boolean value indicating whether the field is hidden and placed in the fields window.|


>caption PivotGridField Methods

| Method | Description |
| ------ | ------ |
| __show()__ |A method which hides the field it is called upon.|
| __hide()__ |A method which hides the field it is called upon.|
| __tryReorder(zoneType, zoneIndex)__ |A method which accepts as arguments the type of the zone you want to move the field toand the index you want to put it at. If the provided arguments are valid, it moves the field to thegiven zone at the specified index. The zone type is an enumeration of type __Telerik.Web.UI.PivotGridFieldZoneType__ and has the following values: "Filter" (1), "Aggregate" (2), "Column" (4), "Row" (8).|
