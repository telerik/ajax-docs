---
title: Server-Side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
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

|  __Property__  |  __Description__  |
| ------ | ------ |
| __AddExpressionToolTip__ |Gets or sets the Add expression button tooltip.|
| __AddGroupToolTip__ |Gets or sets the Add group button tooltip.|
| __ApplyButtonText__ |Gets or sets the text of the Apply button.|
| __BetweenDelimeterText__ |Gets or sets the text that will be visible when Between/NotBetween filter expression is constructed.|
| __DataSourceControlID__ |Gets or sets ID of the IDataSource control filtered by the RadFilter. The data source control should support filtering itself.|
| __ExpressionPreviewPosition__ |Gets or sets the position of expression preview item. The possible options are Top, Bottom and None.|
| __ExpressionPreviewProvider__ |Gets or sets the provider used for building the expression in preview item. Default provider is RadFilterExpressionPreviewProvider.|
| __FilterContainerID__ |Gets or sets the ID of the IRadFilterableContainer control filtered by the RadFilter. Presently, the RadListView and the RadGrid controls implement this interface.|
| __LocalizationPath__ |Gets or sets a value indicating where RadFilter will look for its .resx localization file. By default this file should be in the App_GlobalResources folder. However, if you cannot put the resource file in the default location or .resx files compilation is disabled for some reason (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.|
| __RootGroup__ |Root group for all expressions in RadFilter control. This group cannot be removed.|
| __RootGroupItem__ |Root group item for all expressions in RadFilter control.|
| __ShowApplyButton__ |Gets or sets a value indicating whether the Apply button should be visible.|
| __ShowLineImages__ |Gets or sets a value indicating whether the line images connecting the different list items should be displayed or not.|
| __ApplyButton__ |Gets the apply button which fires the ApplyExpressions and generates a filter query.|
| __ContextMenu__ |Gets the RadFilterContextMenu used for all menus in the RadFilter control.|
| __ShowAddGroupExpressionButton__ |Gets or sets a value determining if the AddGroupExpressionButton placed in the RadFilterGroupExpressionItem will be visible.|
| __SharedCalendarMinDate__ |Gets or sets the RangeMinDate property of the RadCalendar which is shared for all controls in the current RadFilter instance.|
| __SharedCalendarMaxDate__ |Gets or sets the RangeMaxDate property of the RadCalendar which is shared for all controls in the current RadFilter instance.|
| __DefaultFieldEditorFieldName__ |The FieldName property of the default field editor that will be initialized when AddExpressionButton is pressed.|
| __DefaultGroupOperation__ |The default GroupOperation that will be set when a new RadFilterGroupExpressionItem is created.|
| __SharedCalendar__ |Gets the RadCalendar instance that will be used for all pickers in the current RadFilter instance.|
| __OperationMode__ |Gets or sets the operation mode of the RadFilter control.|

## Methods


>caption  

|  __Name__  |  __Description__  |
| ------ | ------ |
| __FireApplyCommand__ |Triggers the ApplyExpressions command.|
| __LoadSettings__ |Loads the provided state in the control.|
| __RecreateControl__ |Forces the RadFilter control to recreate its structure.|
| __SaveSettings__ |Serializes the control state to Base64 encoded string.|
| __GetAllExpressionItems__ |Loops through all expression items in the RadFilter expression items tree by performing recursion and returns them in a collection.|
| __GetSingleExpressionItems__ |Loops through all expression items in the RadFilter expression items tree by performing recursion and returns them in a collection containing only the RadFilterSingleExpressionItem objects.|
| __GetSingleExpressionItems(string fieldName)__ |Loops through all expression items in the RadFilter expression items tree by performing recursion and returns them in a collection containing only the RadFilterSingleExpressionItem objects which are created from the RadFilterDataFieldEditor with the specified FieldName.|
| __GetGroupExpressionItems__ |Loops through all expression items in the RadFilter expression items tree by performing recursion and returns them in a collection containing only the RadFilterGroupExpressionItem objects.|

## Events


>caption  

|  __Event__  |  __Description__  |
| ------ | ------ |
| __ApplyExpressions__ |Raised when the ApplyExpressions command is fired.|
| __FieldEditorCreated__ |Raised when a field editor is created when RadFilter is used integrated with IRadFilterableContainer/IDataSource.|
| __FieldEditorCreating__ |Raised when a custom field editor is about to be created. This is the proper place for its properties to be set.|
| __ItemCommand__ |Raised when a when a command is issued by the control - for example when the end user adds a new filter group.|
| __ExpressionItemCreated__ |Event raised when a new RadFilterExpressionItem is created. The event could be used to manipulate the controls inside each of the items.|
