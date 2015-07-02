---
title: Telerik.Web.UI.RadRibbonBar
page_title: Telerik.Web.UI.RadRibbonBar
description: Telerik.Web.UI.RadRibbonBar
---

# Telerik.Web.UI.RadRibbonBar

RadRibbonBar control allows you to easily organize the navigation of your application in a simple, structured way.

#### Remarks
RadRibbonBar mimics the UI of the RibbonBar used in Microsoft Office 2007, thus providing your end-users with a familiar way to navigate around your application.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl
* Telerik.Web.UI.RadRibbonBar

## Properties

###  Tabs `RibbonBarTabCollection`

Gets a RibbonBarTabCollection object that contains the tabs of the RibbonBar.

#### Remarks
Use the Tabs property to access the tabs of RadRibbonBar. You can also use the Tabs property to
            	manage the tabs. You can add, remove or modify tabs from the Tabs collection.

###  ImageRenderingMode `RibbonBarImageRenderingMode`

Gets or sets the rendering mode of all RibbonBarClickableItems images.

###  KeyboardNavigationSettings `RibbonBarKeyboardNavigationSettings`

Used to customize the RibbonBar keyboard navigation functionality

###  SelectedTabIndex `Int32`

Gets or sets the index of the selected tab.

#### Remarks
Use the SelectedTabIndex property to programmatically specify the selected
            		tab in RadRibbonBar.

###  EnableMinimizing `Boolean`

Gets or sets whether maximizing/minimizing of the RibbonBar should be enabled.

###  Minimized `Boolean`

Gets or sets whether the RibbonBar should be minimized.

###  EnableAutoArrange `Boolean`

Enables automatic arrange of items within a group.

###  ApplicationMenu `RibbonBarApplicationMenu`

Gets a RibbonBarApplicationMenu object (if one is set).

#### Remarks
Use the RibbonBarApplicationMenu property to assign/retrieve an ApplicationMenu to/from RadRibbonBar.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called
            after the client object of RadRibbonBar is initialized.

#### Remarks
Use the OnClientLoad property to specify a
                JavaScript function that is executed after
                the client object of RadRibbonBar is initialized.A single parameter is passed to the handler, which is the
                client-side RadRibbonBar object.

###  OnClientSelectedTabChanging `String`

Gets or sets a value indicating the client-side event handler that is called
            after a non-selected tab is clicked. The event serves as a point for conditional
            cancel of the selecting of new tab.

#### Remarks
Use the OnClientSelectedTabChanging property to specify a
                JavaScript function that is executed after a non-selected tab
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 3 properties:get_tab() - the instance of the tab which is
                            just clicked;get_previouslySelectedTab() - the instance of the tab
            				which still is the selected tab (it's cancelable event);get_domEvent().

###  OnClientSelectedTabChanged `String`

Gets or sets a value indicating the client-side event handler that is called
            after a non-selected tab is clicked. The event is passed the point for conditional
            cancel of the selecting of new tab (ClientSelectedTabChanging).

#### Remarks
Use the OnClientSelectedTabChanged property to specify a
                JavaScript function that is executed after a non-selected tab
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 3 properties:get_tab() - the instance of the tab which is
                            the new selected tab;get_previouslySelectedTab() - the instance of the tab
            				which was previously selected;get_domEvent().

###  OnClientButtonClicking `String`

Gets or sets a value indicating the client-side event handler that is called
            after a button is clicked. The event serves as a point for conditional
            cancel of the button clicking.

#### Remarks
Use the OnClientButtonClicking property to specify a
                JavaScript function that is executed after a button
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_button() - the instance of the button which is
                            clicked;get_domEvent().

###  OnClientButtonClicked `String`

Gets or sets a value indicating the client-side event handler that is called
            after a button is clicked. The event is passed the point for conditional
            cancel of the button clicking.

#### Remarks
Use the OnClientButtonClicked property to specify a
                JavaScript function that is executed after a button
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_button() - the instance of the button which is
                            clicked;get_domEvent().

###  OnClientSplitButtonClicking `String`

Gets or sets a value indicating the client-side event handler that is called
            after a button inside split button is clicked. The event serves as a point for conditional
            cancel of the button clicking.

#### Remarks
Use the OnClientSplitButtonClicking property to specify a
                JavaScript function that is executed after a button inside of a split button
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_button() - the instance of the button which is
                            clicked;get_domEvent().

###  OnClientSplitButtonClicked `String`

Gets or sets a value indicating the client-side event handler that is called
            after a button inside of a split button is clicked. The event is passed the point for conditional
            cancel of the button clicking.

#### Remarks
Use the OnClientSplitButtonClicked property to specify a
                JavaScript function that is executed after a button inside of a split button
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_button() - the instance of the button which is
                            clicked;get_domEvent().

###  OnClientMenuItemClicking `String`

Gets or sets a value indicating the client-side event handler that is called
            after a menu item is clicked. The event serves as a point for conditional
            cancel of the menu item clicking.

#### Remarks
Use the OnClientMenuItemClicking property to specify a
                JavaScript function that is executed after a menu item
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_item() - the instance of the menu item which is
                            clicked;get_domEvent().

###  OnClientMenuItemClicked `String`

Gets or sets a value indicating the client-side event handler that is called
            after a menu item is clicked. The event is passed the point for conditional
            cancel of the menu item clicking.

#### Remarks
Use the OnClientMenuItemClicked property to specify a
                JavaScript function that is executed after a menu item
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_item() - the instance of the menu item which is
                            clicked;get_domEvent().

###  OnClientLauncherClicking `String`

Gets or sets a value indicating the client-side event handler that is called
            after the group launcher is clicked. The event serves as a point for conditional
            cancel of the group launcher clicking.

#### Remarks
Use the OnClientLauncherClicking property to specify a
                JavaScript function that is executed after a group launcher
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_group() - the instance of the group which launcher is
                            clicked;get_domEvent().

###  OnClientLauncherClicked `String`

Gets or sets a value indicating the client-side event handler that is called
            after the group launcher is clicked. The event is passed the point for conditional
            cancel of the group launcher clicking.

#### Remarks
Use the OnClientLauncherClicked property to specify a
                JavaScript function that is executed after a group launcher
                is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_group() - the instance of the group which launcher is
                            clicked;get_domEvent().

###  OnClientButtonToggling `String`

Gets or sets a value indicating the client-side event handler that is called
            after a toggle button is clicked. The event serves as a point for conditional
            cancel of the button's toggling.

#### Remarks
Use the OnClientButtonToggling property to specify a
                JavaScript function that is executed after a toggle button is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_button() - the instance of the toggle button which is
                            clicked;get_domEvent().

###  OnClientButtonToggled `String`

Gets or sets a value indicating the client-side event handler that is called
            after a toggle button is clicked. The event is passed the point for conditional
            cancel of the button's toggling.

#### Remarks
Use the OnClientButtonToggled property to specify a
                JavaScript function that is executed after a toggle button is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_button() - the instance of the toggle button which is
                            clicked;get_domEvent().

###  OnClientToggleListToggling `String`

Gets or sets a value indicating the client-side event handler that is called
            after a toggle button inside of ToggleList is clicked. The event serves as a point for conditional
            cancel of the toggle list's toggle-state change.

#### Remarks
Use the OnClientToggleListToggling property to specify a
                JavaScript function that is executed after a toggle button inside of a ToggleList is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_button() - the instance of the toggle button which is
                            clicked;get_domEvent().

###  OnClientToggleListToggled `String`

Gets or sets a value indicating the client-side event handler that is called
            after a toggle button inside of ToggleList is clicked. The event is passed the point for conditional
            cancel of the toggle list's toggle-state change.

#### Remarks
Use the OnClientToggleListToggled property to specify a
                JavaScript function that is executed after a toggle button inside of a ToggleList is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 2 properties:get_button() - the instance of the toggle button which is
                            clicked;get_domEvent().

###  OnClientApplicationMenuItemClicking `RibbonBarApplicationMenu`

Gets or sets a value indicating the client-side event handler that is called
            after an item inside of an ApplicationMenu is clicked. The event serves as a point for conditional
            cancel of the item's clicking.

#### Remarks
Use the OnClientApplicationMenuItemClicking property to specify a
                JavaScript function that is executed after an item inside of na ApplicationMenu is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 3 properties:get_applicationMenu() - the instance of the application menu;get_item() - the instance of the clicked application menu item;get_domEvent().

###  OnClientApplicationMenuItemClicked `RibbonBarApplicationMenu`

Gets or sets a value indicating the client-side event handler that is called
            after an item inside of an ApplicationMenu is clicked. The event is passed the point for conditional
            cancel of the item's clicking.

#### Remarks
Use the OnClientApplicationMenuItemClicked property to specify a
                JavaScript function that is executed after an item inside of na ApplicationMenu is clicked.Two parameters are passed to the handler:sender (the client-side RadRibbonBar
                    object);
                        eventArgs with 3 properties:get_applicationMenu() - the instance of the application menu;get_item() - the instance of the clicked application menu item;get_domEvent().

###  OnClientMinimizing `String`

Gets or sets a value indicating the client-side event handler that is called
            when the RibbonBar is about to be minimized.The event serves as a point for conditional
            cancel of the RibbonBar's minimizing.

###  OnClientMinimized `Boolean`

Gets or sets a value indicating the client-side event handler that is called
            when the RibbonBar is minimized. The event is passed the point for conditional
            cancel of the RibbonBar's minimizing.

###  OnClientMaximizing `String`

Gets or sets a value indicating the client-side event handler that is called
            when the RibbonBar is about to be maximized.The event serves as a point for conditional
            cancel of the RibbonBar's maximizing.

###  OnClientMaximized `String`

Gets or sets a value indicating the client-side event handler that is called
            when the RibbonBar is maximized. The event is passed the point for conditional
            cancel of the RibbonBar's maximizing.

###  OnClientComboBoxSelectedIndexChanging `String`

Gets or sets a value indicating the client-side event handler that is called
            when an item inside the RibbonBarComboBox is about to be selected.The event serves as a point for conditional
            cancel of the item's selecting.

###  OnClientComboBoxSelectedIndexChanged `String`

Gets or sets a value indicating the client-side event handler that is called
            when an item inside the RibbonBarComboBox is selected. The event is passed the point for conditional
            cancel of the item's selecting.

###  OnClientComboBoxTextChanged `String`

Gets or sets a value indicating the client-side event handler that is called
            when an text inside the RibbonBarComboBox is changed.

###  OnClientDropDownSelectedIndexChanging `String`

Gets or sets a value indicating the client-side event handler that is called
            when an item inside the RibbonBarDropDown is about to be selected.The event serves as a point for conditional
            cancel of the item's selecting.

###  OnClientDropDownSelectedIndexChanged `String`

Gets or sets a value indicating the client-side event handler that is called
            when an item inside the RibbonBarDropDown is selected. The event is passed the point for conditional
            cancel of the item's selecting.

###  OnClientNumericTextBoxValueChanging `String`

Gets or sets a value indicating the client-side event handler that is called
            when the value inside the RibbonBarNumericTextBox is about to be changed. The event serves as a point for conditional
            cancel of the value's changing.

###  OnClientNumericTextBoxValueChanged `String`

Gets or sets a value indicating the client-side event handler that is called
            when the value inside the RibbonBarNumericTextBox is changed. The event is passed the point for conditional
            cancel of the value's changing.

###  OnClientColorPickerColorChanging `String`

Gets or sets a value indicating the client-side event handler that is called
            when the selected color of the RibbonBarColorPicker is about to be changed. The event serves as a point for conditional
            cancel of the selected color's changing.

###  OnClientColorPickerColorChanged `String`

Gets or sets a value indicating the client-side event handler that is called
            when the selected color of the RibbonBarColorPicker is changed. The event is passed the point for conditional
            cancel of the selected color's changing.

###  OnClientGalleryCommandPreview `String`

Gets or sets a value indicating the client-side event handler that is called
            when a gallery item is focused.

###  OnClientGalleryCommandPreviewEnd `String`

Gets or sets a value indicating the client-side event handler that is called
            when a gallery item loses focus.

###  OnClientGalleryCommand `String`

Gets or sets a value indicating the client-side event handler that is called
            when a gallery item is clicked.

###  EnableQuickAccessToolbar `Boolean`

Gets or sets a value indicating whether the Quick Access Toolbar is enabled. False by default.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  ClientStateFieldID `String`

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  GetContextualTabsToRender

The tabs to render are:
                * In an Active contextual tab group;
                * In an Inactive contextual tab group only if the RenderInactiveContextualTabGroups is set to true;
                * Their Visible property is set to true;

#### Returns

`System.Collections.Generic.List`1` 

###  GetContextualTabGroupsToRender

The contextual tab groups to render are:
                * In a Visible tab in an Active contextual tab group;
                * In a Visible tab in an Inactive contextual tab group only if the RenderInactiveContextualTabGroups is set to true;
                * Their Visible property is set to true;

#### Returns

`System.Collections.Generic.List`1` 

###  OnSelectedTabChange

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarSelectedTabChangeEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnButtonClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarButtonClickEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnSplitButtonClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarSplitButtonClickEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnMenuItemClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarMenuItemClickEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnLauncherClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarLauncherClickEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnButtonToggle

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarButtonToggleEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnToggleListToggle

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarToggleListToggleEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnApplicationMenuItemClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarApplicationMenuItemClickEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnComboBoxSelectedIndexChanged

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarComboBoxSelectedIndexChangedEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnComboBoxTextChanged

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarComboBoxTextChangedEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnDropDownSelectedIndexChanged

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarDropDownSelectedIndexChangedEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnNumericTextBoxValueChanged

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarNumericTextBoxValueChangedEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnColorPickerColorChanged

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarColorPickerColorChangedEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnGalleryCommand

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RibbonBarGalleryCommandEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnCommand

Raises the  event.

#### Parameters

#### e `System.Object`

The  instance containing the event data.

#### sender `System.Web.UI.WebControls.CommandEventArgs`

The  instance that triggered the event.

#### Returns

`System.Void` 

###  LoadPostData

Loads the posted content of the list control, if it is different from the last posting.

#### Parameters

#### postDataKey `System.String`

The key identifier for the control, used to index the postCollection.

#### postCollection `System.Collections.Specialized.NameValueCollection`

A  that contains value information indexed by control identifiers.

#### Returns

`System.Boolean` true if the posted content is different from the last posting; otherwise, false.

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  FindTabByValue

Searches the RadRibbonBar control for the first
                RibbonBarTab which Value
                property is equal to the specified value.

#### Parameters

#### value `System.String`

The Value to search for.

#### Returns

`Telerik.Web.UI.RibbonBarTab` A RibbonBarTab whose Value property is equal to the specifed 
            	value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindGroupByValue

Searches the RadRibbonBar control for the first
                RibbonBarGroup which Value
                property is equal to the specified value.

#### Parameters

#### value `System.String`

The Value to search for.

#### Returns

`Telerik.Web.UI.RibbonBarGroup` A RibbonBarGroup whose Value property is equal to the specifed 
            	value. If a group is not found, null (Nothing in Visual Basic) is returned.

###  FindButtonByValue

Searches the RadRibbonBar control for the first
                RibbonBarButton which Value
                property is equal to the specified value.

#### Parameters

#### value `System.String`

The Value to search for.

#### Returns

`Telerik.Web.UI.RibbonBarButton` A RibbonBarButton whose Value property is equal to the specifed 
            	value. If a button is not found, null (Nothing in Visual Basic) is returned.

###  FindToggleButtonByValue

Searches the RadRibbonBar control for the first
                RibbonBarToggleButton which Value
                property is equal to the specified value.

#### Parameters

#### value `System.String`

The Value to search for.

#### Returns

`Telerik.Web.UI.RibbonBarToggleButton` A RibbonBarToggleButton whose Value property is equal to the specified 
            	value. If a button is not found, null (Nothing in Visual Basic) is returned.

###  FindMenuItemByValue

Searches the RadRibbonBar control for the first
                RibbonBarMenuItem which Value
                property is equal to the specified value.

#### Parameters

#### value `System.String`

The Value to search for.

#### Returns

`Telerik.Web.UI.RibbonBarMenuItem` A RibbonBarMenuItem whose Value property is equal to the specifed 
            	value. If a menu item is not found, null (Nothing in Visual Basic) is returned.

###  LoadContentFile

Populates the control from the specified XML file.

#### Parameters

#### xmlFileName `System.String`

The name of the XML file.

#### Returns

`System.Void` 

###  LoadXml

Loads the control from an XML string.

#### Remarks
Use the LoadXml method to populate the control from an XML string. You can use it along the GetXml
            	method to implement caching.

#### Parameters

#### xml `System.String`

The string representing the XML from which the control will be populated.

#### Returns

`System.Void` 

###  GetXml

Gets an XML string representing the state of the control. All child items and their properties are serialized in this
            	string.

#### Remarks
Use the GetXml method to get the XML state of the control. You can cache it and then restore it using
            	the LoadXml method.

#### Returns

`System.String` A String representing the state of the control - child items, properties etc.

###  AddAttributesToRender

#### Returns

`System.Void` 

###  OnPreRender

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderEndTag

#### Returns

`System.Void` 

###  Render

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeIDReferenceProperty

#### Returns

`System.Void` 

###  DescribeEvent

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

