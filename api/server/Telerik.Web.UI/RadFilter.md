---
title: Telerik.Web.UI.RadFilter
page_title: Telerik.Web.UI.RadFilter
description: Telerik.Web.UI.RadFilter
---

# Telerik.Web.UI.RadFilter

Represents a component that builds filter expressions, with various types of syntax, based on user input

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadFilter : INamingContainer, IPostBackEventHandler

## Properties

###  AddExpressionToolTip `String`

Get / set Add expression button tooltip.

###  AddGroupToolTip `String`

Get / set Add group button tooltip.

###  AllowFilterOnBlur `Boolean`

Get / set whether RadFilter should postback when value in editor change.

###  ApplyButton `Button`

Gets the apply  which fires the ApplyExpressions and generates a filter query.

###  ApplyButtonText `Button`

Get / set Apply button text

###  BetweenDelimeterText `String`

Get / set the text that will be visible when Between/NotBetween filter expression.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientSettings `RadFilterClientSettings`

Gets a reference to the 
             object that allows
            you to set the properties of the client-side behavior and
            appearance in a Telerik  control.

###  ContainerLocator `RadFilterableContainerLocator`

Gets a reference to the filterable container

###  ContextMenu `RadFilterContextMenu`

Gets the  used for all menus in the  control.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets a CultureInfo value representing the current culture of the control.

###  DataSourceControl `IDataSource`

Read only property. Holds reference to IDataSource control.

###  DataSourceControlID `String`

Get/set ID of the IDataSource control

###  DefaultFieldEditorFieldName `String`

The FieldName property of the defaultly created editor that will be initialized when AddExpressionButton is pressed.

###  DefaultGroupOperation `RadFilterGroupOperation`

The default GroupOperation that will be set when a new  is created.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  ExpressionPreviewPosition `RadFilterExpressionPreviewPosition`

Get/Set the position of expression preview item.

###  ExpressionPreviewProvider `RadFilterQueryProvider`

Get/Set provider used for building the expression in preview item. Default provider is RadFilterExpressionPreviewProvider.

###  FieldEditors `RadFilterDataFieldEditorCollection`

A collection of type RadFilterDataFieldEditorCollection containing all RadFilterDataFieldEditor instances 
            contained in the RadFilter

###  FilterContainer `IRadFilterableContainer`

Read only property. Holds reference to control that implements IRadFilterableContainer.

###  FilterContainerID `String`

Get/set ID of the IRadFilterableContainer control

###  FilterExpressions `String`

For use with RadPersistenceFramework

###  IsSkinSet `String`

For internal use.

###  Localization `FilterStrings`

Gets a value of type FilterStrings representing the localization strings which will be used in RadFilter

###  LocalizationPath `FilterStrings`

Gets or sets a value indicating where RadFilter will look for its .resx localization file.
            By default this file should be in the App_GlobalResources folder. However, if you cannot put
            the resource file in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the filter localization file from any location in the 
            web application.

###  OperationMode `RadFilterOperationMode`

Gets or sets the operation mode of the  control
            which determines if some of the operations in the control
            will be executed on the client or performed on the server.
            Server: Every operation performs a postback.
            ServerAndClient: Only Adding field expressions and changing field expression name causes postback.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RemoveToolTip `String`

Get / set Remove button tooltip.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RootGroup `RadFilterGroupExpression`

Root group for all expressions in RadFilter control. 
            This group cannot be removed.

###  RootGroupItem `RadFilterGroupExpression`

Root group item for all expressions in RadFilter control.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  SettingsFormatter `RadFilterSettingsFormatter`

Gets or sets a value from the RadFilterSettingsFormatter enumeration representing the type of 
            formatter used to serialize the filter settings

###  SharedCalendar `RadCalendar`

Gets the  instance that will be used for all 
            pickers in the current  instance.

###  SharedCalendarMaxDate `RadCalendar`

Gets or sets the RangeMinDate property of the  which is shared for all
            controls in the current  instance.

###  SharedCalendarMinDate `RadCalendar`

Gets or sets the RangeMinDate property of the  which is shared for all
            controls in the current  instance.

###  ShowAddGroupExpressionButton `Boolean`

Gets or sets a value determining if the AddGroupExpressionButton placed in the
             will be visible.

###  ShowApplyButton `Button`

Indicates whether the Apply button should be visible.

###  ShowLineImages `Boolean`

Gets a value indicating whether the dotted lines indenting the nodes should be
            displayed or not.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  UseAccessibleApplyButton `Button`

When set to true changes the rendering of the Apply button in order to pass accessibility validation.

###  UseBetweenValidation `Boolean`

When this property is enabled, the control will use client-side validation to ensure whether the value of the second input control is greater than the one in the first control and vice versa. Default value is false.

## Methods

###  AddChildExpression

Add child expression for item.

#### Parameters

#### groupItem `Telerik.Web.UI.RadFilterGroupExpressionItem`

The item that will be the parent for the new item.

#### isGroup `System.Boolean`

Indicates whether the new child item should be group item or not.

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ApplyExpressionsToContainer

Apply all filter expressions to IRadFilterableContainer.

#### Parameters

#### shouldBind `System.Boolean`

true if IRadFilterableContainer must be re-bind, otherwise false

#### Returns

`System.Void` 

###  ApplyFilterExpressonsOnDataSource

Applies the resolved filter expression on the DataSourceControl assigned using DataSourceControlID property

#### Returns

`System.Void` 

###  AttachToContainer

Listen IRadFilterableContainer for fields descriptors.

#### Returns

`System.Void` 

###  ChangeExpressionFieldName

Change field name for item

#### Parameters

#### item `Telerik.Web.UI.RadFilterSingleExpressionItem`

item which FieldName will be changed

#### fieldName `System.String`

new FieldName value

#### Returns

`System.Void` 

###  ChangeFilterFunction

Change current filter function for the item.

#### Parameters

#### item `Telerik.Web.UI.RadFilterSingleExpressionItem`

item which filter function will be changed

#### function `Telerik.Web.UI.RadFilterFunction`

new filter function value

#### shouldRecreate `System.Boolean`

Indicates whether to recrete the control

#### Returns

`System.Void` 

###  ChangeGroupOperator

Change current group operator.

#### Parameters

#### groupItem `Telerik.Web.UI.RadFilterGroupExpressionItem`

group that current operator must be changed

#### groupOperation `Telerik.Web.UI.RadFilterGroupOperation`

new group operation value

#### shouldRecreate `System.Boolean`

Indicates whether to recrete the control

#### Returns

`System.Void` 

###  ContainerFieldDescriptorsReady

This method is called when IRadFilterableContainer fires OnFieldDescriptorsReady event

#### Parameters

#### sender `System.Object`

instance of IRadFilterableContainer control

#### e `Telerik.Web.UI.RadFilterFildDesciptorsEventArgs`

arguments that has description of IRadFilterableContainer filtering capabilities

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  CreateControlHierarchy

Build controls hierarchy.

#### Returns

`System.Void` 

###  DescribeDataFields

#### Returns

`System.Collections.Generic.List`1` 

###  EnsureItemsCreated

This method is called when RootGroupItem is accessed and it is not created yet.
            Force creation of all RadFilterExpressionItems.

#### Returns

`System.Void` 

###  FetchExpressionsValues

Loop through all IRadFilterValueExpression's  and assing their value from RadFilterSingleExpressionItem editors.

#### Parameters

#### group `Telerik.Web.UI.RadFilterGroupExpressionItem`

RadFilterGroupExpressionItem to start from

#### Returns

`System.Void` 

###  FireApplyCommand

Triggers ApplyExpressions command.

#### Returns

`System.Void` 

###  GetAllExpressionItems

Loops through all expression items in the  expression items tree
            by performing recursion and returns them in a collection.

#### Returns

`System.Collections.Generic.List`1` Loops through all expression items in the  expression items tree
            by performing recursion and returns them in a collection.

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetGroupExpressionItems

Loops through all expression items in the  expression items tree
            by performing recursion and returns them in a collection containing only the  objects.

#### Returns

`System.Collections.Generic.List`1` Loops through all expression items in the  expression items tree
            by performing recursion and returns them in a collection containing only the  objects.

###  GetSingleExpressionItems

Loops through all expression items in the  expression items tree
            by performing recursion and returns them in a collection containing only the  objects.

#### Returns

`System.Collections.Generic.List`1` Loops through all expression items in the  expression items tree
            by performing recursion and returns them in a collection containing only the  objects.

###  GetSingleExpressionItems

Loops through all expression items in the  expression items tree
            by performing recursion and returns them in a collection containing only the 
             objects which are created from the 
            with the specified FieldName.

#### Returns

`System.Collections.Generic.List`1` Loops through all expression items in the  expression items tree
            by performing recursion and returns them in a collection containing only the 
             objects which are created from the 
            with the specified FieldName.

###  HandleApplyCommand

Handles Apply command

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  LoadSettings

Loads the provided state in the control.

#### Parameters

#### state `System.String`

Base64 encoded string representing saved control state

#### Returns

`System.Void` 

###  OnApplyExpressions

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadFilterApplyExpressionsEventArgs`

#### Returns

`System.Void` 

###  OnFieldEditorCreated

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadFilterFieldEditorCreatedEventArgs`

#### Returns

`System.Void` 

###  OnFieldEditorCreating

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadFilterFieldEditorCreatingEventArgs`

#### Returns

`System.Void` 

###  OnItemCommand

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadFilterCommandEventArgs`

#### Returns

`System.Void` 

###  RaisePostBackEvent

Notifies the RadFilter control that it should handle an incoming postback event.

#### Parameters

#### eventArgument `System.String`

A string representing the passed event argument

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  RecreateControl

Force RadFilter control to recreate its structure.

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RemoveFilterExpression

Removes filter expression from its parent.

#### Parameters

#### item `Telerik.Web.UI.RadFilterSingleExpressionItem`

filter expression to be removed

#### shouldRecreate `System.Boolean`

Indicates whether to recrete the control

#### Returns

`System.Void` 

###  RemoveGroupFilterExpression

Removes group filter expression from its parent. 
            If it is root group item removes all its child items.

#### Parameters

#### groupItem `Telerik.Web.UI.RadFilterGroupExpressionItem`

group filter expression to be removed

#### shouldRecreate `System.Boolean`

Indicates whether to recrete the control

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  SaveSettings

Serialize the control state to Base64 encoded string.

#### Returns

`System.String` returns serialized state in Base64 format

