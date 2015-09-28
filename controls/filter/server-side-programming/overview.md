---
title: Overview
page_title: RadFilter Server-Side Programming Overview | RadFilter for ASP.NET AJAX Documentation
description: Overview
slug: filter/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-Side Programming Overview



Following are tables of the most important properties and events you should be aware of when working with RadFilter.

## Properties


>caption  

|  **Property**  |  **Description**  |
| ------ | ------ |
| **AddExpressionToolTip** |Gets or sets the Add expression button tooltip.|
| **AddGroupToolTip** |Gets or sets the Add group button tooltip.|
| **ApplyButtonText** |Gets or sets the text of the Apply button.|
| **BetweenDelimeterText** |Gets or sets the text that will be visible when Between/NotBetween filter expression is constructed.|
| **DataSourceControlID** |Gets or sets ID of the IDataSource control filtered by the RadFilter. The data source control should support filtering itself.|
| **ExpressionPreviewPosition** |Gets or sets the position of expression preview item. The possible options are Top, Bottom and None.|
| **ExpressionPreviewProvider** |Gets or sets the provider used for building the expression in preview item. Default provider is RadFilterExpressionPreviewProvider.|
| **FilterContainerID** |Gets or sets the ID of the IRadFilterableContainer control filtered by the RadFilter. Presently, the RadListView and the RadGrid controls implement this interface.|
| **LocalizationPath** |Gets or sets a value indicating where RadFilter will look for its .resx localization file. By default this file should be in the App_GlobalResources folder. However, if you cannot put the resource file in the default location or .resx files compilation is disabled for some reason (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.|
| **RootGroup** |Root group for all expressions in RadFilter control. This group cannot be removed.|
| **RootGroupItem** |Root group item for all expressions in RadFilter control.|
| **ShowApplyButton** |Gets or sets a value indicating whether the Apply button should be visible.|
| **ShowLineImages** |Gets or sets a value indicating whether the line images connecting the different list items should be displayed or not.|
| **ApplyButton** |Gets the apply button which fires the ApplyExpressions and generates a filter query.|
| **ContextMenu** |Gets the RadFilterContextMenu used for all menus in the RadFilter control.|
| **ShowAddGroupExpressionButton** |Gets or sets a value determining if the AddGroupExpressionButton placed in the RadFilterGroupExpressionItem will be visible.|
| **SharedCalendarMinDate** |Gets or sets the RangeMinDate property of the RadCalendar which is shared for all controls in the current RadFilter instance.|
| **SharedCalendarMaxDate** |Gets or sets the RangeMaxDate property of the RadCalendar which is shared for all controls in the current RadFilter instance.|
| **DefaultFieldEditorFieldName** |The FieldName property of the default field editor that will be initialized when AddExpressionButton is pressed.|
| **DefaultGroupOperation** |The default GroupOperation that will be set when a new RadFilterGroupExpressionItem is created.|
| **SharedCalendar** |Gets the RadCalendar instance that will be used for all pickers in the current RadFilter instance.|
| **OperationMode** |Gets or sets the operation mode of the RadFilter control.|
| **UseBetweenValidation** |Enables or disables the validation when between filter expression is used. Validation should work for numeric field editors (all types - int, double, etc) and date field editors. For the latter case, only the DatePicker and DateTimePicker types are supported. TimePicker and None would not be validated.|

## Methods


>caption  

|  **Name**  |  **Description**  |
| ------ | ------ |
| **FireApplyCommand** |Triggers the ApplyExpressions command.|
| **LoadSettings** |Loads the provided state in the control.|
| **RecreateControl** |Forces the RadFilter control to recreate its structure.|
| **SaveSettings** |Serializes the control state to Base64 encoded string.|
| **GetAllExpressionItems** |Loops through all expression items in the RadFilter expression items tree by performing recursion and returns them in a collection.|
| **GetSingleExpressionItems** |Loops through all expression items in the RadFilter expression items tree by performing recursion and returns them in a collection containing only the RadFilterSingleExpressionItem objects.|
| **GetSingleExpressionItems(string fieldName)** |Loops through all expression items in the RadFilter expression items tree by performing recursion and returns them in a collection containing only the RadFilterSingleExpressionItem objects which are created from the RadFilterDataFieldEditor with the specified FieldName.|
| **GetGroupExpressionItems** |Loops through all expression items in the RadFilter expression items tree by performing recursion and returns them in a collection containing only the RadFilterGroupExpressionItem objects.|

## Events


>caption  

|  **Event**  |  **Description**  |
| ------ | ------ |
| **ApplyExpressions** |Raised when the ApplyExpressions command is fired.|
| **FieldEditorCreated** |Raised when a field editor is created when RadFilter is used integrated with IRadFilterableContainer/IDataSource.|
| **FieldEditorCreating** |Raised when a custom field editor is about to be created. This is the proper place for its properties to be set.|
| **ItemCommand** |Raised when a when a command is issued by the control - for example when the end user adds a new filter group.|
| **ExpressionItemCreated** |Event raised when a new RadFilterExpressionItem is created. The event could be used to manipulate the controls inside each of the items.|
