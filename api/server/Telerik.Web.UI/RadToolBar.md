---
title: Telerik.Web.UI.RadToolBar
page_title: Telerik.Web.UI.RadToolBar
description: Telerik.Web.UI.RadToolBar
---

# Telerik.Web.UI.RadToolBar

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl
* Telerik.Web.UI.ControlItemContainer
* Telerik.Web.UI.RadToolBar

## Properties

###  ClientChanges `IList`1`

Gets a list of all client-side changes (adding an item, removing an item, changing an item's property) which have occurred.

#### Remarks
You can use the ClientChanges property to respond to client-side modifications such as
            		adding a new itemremoving existing itemclearing the children of an item or the control itselfchanging a property of the item
            		The ClientChanges property is available in the first postback (ajax) request after the client-side modifications
            		have taken place. After this moment the property will return empty list.

###  Items `RadToolBarItemCollection`

Gets a collection of RadToolBarItem objects representing
            the individual items within the RadToolBar.

#### Remarks
Use the Items collection to programmatically control the items in the
            RadToolBar control.

###  Orientation `Orientation`

Gets or sets the direction in which to render the RadToolBar control.

#### Remarks
Use the Orientation property to specify the direction in which to render the RadToolBar
            control. The following table lists the available directions.
            	OrientationDescriptionOrientation.HorizontalThe RadToolBar control is rendered horizontally.Orientation.VerticalThe RadToolBar control is rendered vertically.

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when a dropdown opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of the RadToolBar dropdown items -
            		RadToolBarDropDown and
            		RadToolBarSplitButton. You can specify the
                    Type and
                    the Duration of the expand animation.
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the collapse animation you can use the
                    CollapseAnimation property.

###  CollapseAnimation `AnimationSettings`

Gets the settings for the animation played when a dropdown closes.

#### Remarks
Use the CollapseAnimation property to customize the collapse
                    animation of the RadToolBar dropdown items -
            		RadToolBarDropDown and
            		RadToolBarSplitButton. You can specify the
                    Type and
                    the Duration of the collapse animation.
                    To disable collapse animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the expand animation you can use the
                    ExpandAnimation property.

###  ValidationGroup `String`

Gets or sets the name of the validation group to which this validation
                control belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  PostBackUrl `Boolean`

Gets or sets the URL of the page to post to from the current page when a button item
                from the RadToolBar control is clicked.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when a button item within
            the RadToolBar control is clicked.

#### Remarks
By default, page validation is performed when a button item is clicked. Page
                validation determines whether the input controls associated with a validation
                control on the page all pass the validation rules specified by the validation
                control. You can specify or determine whether validation is performed on both the
                client and the server when a tab is clicked by using the CausesValidation
                property. To prevent validation from being performed, set the
                CausesValidation property to false.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether button items should postback when clicked.

#### Remarks
RadToolBar will postback provided one of the following conditions is met:
            	
            			The AutoPostBack property is set to true.
            		
            			The user has subscribed to the ButtonClick event.

###  EnableRoundedCorners `Boolean`

Gets or sets a value indicating whether child items should have rounded corners.

###  EnableShadows `Boolean`

Gets or sets a value indicating whether child items should have shadows.

###  EnableImageSprites `Boolean`

Gets or sets a value indicating whether item images should have sprite support.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Web
            server control on the client.

###  SingleClick `ToolBarSingleClick`

Gets or Sets SingleClick state

###  OnClientLoad `String`

Gets or sets the name of the javascript function called when the control is fully
            initialized on the client side.

#### Remarks
Use the OnClientLoad property to specify a JavaScript
                function that is executed after the control is initialized on the client side.
                A single parameter is passed to the handler, which is the
                client-side RadToolBar object.

###  OnClientButtonClicking `String`

Gets or sets a value indicating the client-side event handler that is called just
            prior to clicking a toolbar button item (RadToolBarButton or RadToolBarSplitButton).

#### Remarks
Use the OnClientButtonClicking property to specify a
                JavaScript function that will be executed prior to button item clicking - either by
                left-clicking it with the mouse or hitting enter after tabbing to that button. You can
                cancel that event (prevent button clicking) by seting the cancel property of the event argument to true.
            	Two parameters are passed to the handlersender (the client-side RadToolBar object)
                        eventArgs with three properties
                        item - the instance of the button item being clickedcancel - whether to cancel the eventdomEvent - the reference to the browser DOM event

###  OnClientButtonClicked `String`

Gets or sets a value indicating the client-side event handler that is called
                after clicking a button item (RadToolBarButton or RadToolBarSplitButton).

#### Remarks
Use the OnClientButtonClicked property to specify a JavaScript
                function that will be executed after a button is clicked - either by left-clicking it
                with the mouse or hitting enter after tabbing to that button item.Two parameters are passed to the handlersender (the client-side RadToolBar object)
                        eventArgs with two properties
                        item - the instance of the clicked buttondomEvent - the reference to the browser DOM event

###  OnClientDropDownOpening `String`

Gets or sets a value indicating the client-side event handler that is called just
            prior to opening a toolbar dropdown item (RadToolBarDropDown or RadToolBarSplitButton).

#### Remarks
Use the OnClientDropDownOpening property to specify a
                JavaScript function that will be executed prior to dropdown item opening - either by
                left-clicking it with the mouse or hitting the down arrow after tabbing to that item. You can
                cancel that event (prevent dropdown opening) by seting the cancel property of the event argument to true.
            	Two parameters are passed to the handlersender (the client-side RadToolBar object)
                        eventArgs with three properties
                        item - the instance of the dropdown item being openedcancel - whether to cancel the eventdomEvent - the reference to the browser DOM event (null if the event was initiated by
            		calling a client-side method such as dropDownItem.showDropDown();)

###  OnClientDropDownOpened `String`

Gets or sets a value indicating the client-side event handler that is called after a
            toolbar dropdown item (RadToolBarDropDown or RadToolBarSplitButton) is opened.

#### Remarks
Use the OnClientDropDownOpened property to specify a
                JavaScript function that will be executed  after a toolbar dropdown item
            	is opened - either by left-clicking it with the mouse or hitting the down arrow
            	after tabbing to that item.
            	Two parameters are passed to the handlersender (the client-side RadToolBar object)
                        eventArgs with two properties
                        item - the instance of the dropdown item which is openeddomEvent - the reference to the browser DOM event (null if the event was initiated by
            		calling a client-side method such as dropDownItem.showDropDown())

###  OnClientDropDownClosing `String`

Gets or sets a value indicating the client-side event handler that is called just
            prior to closing a toolbar dropdown item (RadToolBarDropDown or RadToolBarSplitButton).

#### Remarks
Use the OnClientDropDownClosing property to specify a
                JavaScript function that will be executed prior to dropdown item closing - either by
                left-clicking an open dropdown with the mouse, hitting the ESC key when the dropdown or
            	a button in it is focused, or clicking a non-checkable button in the dropdown. You can
                cancel that event (prevent dropdown closing) by seting the cancel property of the event argument to true.
            	Two parameters are passed to the handlersender (the client-side RadToolBar object)
                        eventArgs with three properties
                        item - the instance of the dropdown item being closedcancel - whether to cancel the eventdomEvent - the reference to the browser DOM event (null if the event was initiated by
            		calling a client-side method such as dropDownItem.hideDropDown())

###  OnClientDropDownClosed `String`

Gets or sets a value indicating the client-side event handler that is called after a
            toolbar dropdown item (RadToolBarDropDown or RadToolBarSplitButton) is closed.

#### Remarks
Use the OnClientDropDownClosed property to specify a
                JavaScript function that will be executed  after a toolbar dropdown item
            	is closed - either by left-clicking an open dropdown with the mouse, hitting
            	the ESC key when the dropdown or a button in it is focused, or clicking a
            	non-checkable button in the dropdown.
            Two parameters are passed to the handlersender (the client-side RadToolBar object)
                        eventArgs with two properties
                        item - the instance of the dropdown item which is closeddomEvent - the reference to the browser DOM event (null if the event was initiated by
            		calling a client-side method such as dropDownItem.hideDropDown())

###  OnClientContextMenu `String`

Gets or sets a value indicating the client-side event handler that is called
            before the browser context menu shows (after right-clicking an item).

#### Remarks
Use the OnClientContextMenu property to specify a JavaScript
                function that will be executed before the context menu shows after right clicking an
                item.Two parameters are passed to the handlersender (the client-side RadToolBar object)
                        eventArgs with two properties 
                        item - the instance of the selected toolbar itemdomEvent - the reference to the browser DOM event

###  OnClientMouseOver `String`

Gets or sets a value indicating the client-side event handler that is called when
            the mouse hovers an item in the RadToolBar control.

#### Remarks
Use the OnClientMouseOver property to specify a JavaScript
                function that is called when the user hovers an item with the mouse.Two parameters are passed to the handler:sender (the client-side RadToolBar object);
                        eventArgs with two properties 
                        item - the instance of the toolbar item that is being hovereddomEvent - the reference to the browser DOM event

###  OnClientMouseOut `String`

Gets or sets a value indicating the client-side event handler that is called when
            the mouse leaves an item in the RadToolBar control.

#### Remarks
Use the OnClientMouseOut property to specify a JavaScript
                function that is executed whenever the user moves the mouse
                away from a particular item in the RadToolBar control.Two parameters are passed to the handler:sender (the client-side RadToolBar object);
                        eventArgs with two properties:
            			item - the instance of the item which the mouse is moving
                            away from;domEvent - the reference to the browser DOM event

###  OnClientCheckedStateChanging `String`

Gets or sets a value indicating the client-side event handler that is called just
            prior to changing the state of a checkable RadToolBarButton.

#### Remarks
Use the OnClientCheckedStateChanging property to specify a
                JavaScript function that will be executed prior to button checked state changing - either by
                left-clicking a checkable button or pressing the ENTER key after tabbing to that button. You can
                cancel that event (prevent button checked state changing) by seting the cancel property of the
            	event argument to true.
            	Two parameters are passed to the handlersender (the client-side RadToolBar object)
                        eventArgs with three properties
                        item - the instance of the button which checked state is being changedcancel - whether to cancel the eventdomEvent - the reference to the browser DOM event (null if the event was initiated by
            		calling a client-side method such as button.toggle())

###  OnClientCheckedStateChanged `String`

Gets or sets a value indicating the client-side event handler that is called after a
            RadToolBarButton is checked.

#### Remarks
Use the OnClientCheckedStateChanged property to specify a
                JavaScript function that will be executed  after a toolbar dropdown button
            	is checked - either by left-clicking a checkable button or pressing the ENTER
            	key after tabbing to that button.
            	Two parameters are passed to the handlersender (the client-side RadToolBar object)
                        eventArgs with two properties
                        item - the instance of the button which is checkeddomEvent - the reference to the browser DOM event (null if the event was initiated by
            		calling a client-side method such as button.toggle())

###  ValidationGroup `String`

Gets or sets the name of the validation group to which this validation
                control belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a tab
                from the tabstrip is clicked.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when an item within
            the control is selected.

#### Remarks
By default, page validation is performed when an item is selected. Page
                validation determines whether the input controls associated with a validation
                control on the page all pass the validation rules specified by the validation
                control. You can specify or determine whether validation is performed on both the
                client and the server when an item is clicked by using the CausesValidation
                property. To prevent validation from being performed, set the
                CausesValidation property to false.

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

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

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
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DefaultCssClass `String`

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  LoadContentFile

Populates the RadToolBar control from external XML file.

#### Remarks
The newly added items will be appended after any existing ones.

#### Parameters

#### xmlFileName `System.String`

The name of the XML file.

#### Returns

`System.Void` 

###  GetAllItems

Gets a linear list of all toolbar items in the RadToolBar control.

#### Returns

`System.Collections.Generic.IList`1` An IList object containing 
            	all items in the current RadToolBar control.

###  GetGroupButtons

Gets a linear list of all toolbar buttons in the RadToolBar control,
            	which belong to the specified group

#### Parameters

#### group `System.String`

The name of the group to search for.

#### Returns

`System.Collections.Generic.IList`1` An IList object containing 
            	all the buttons in the current RadToolBar control, which belong to the specified group.

###  GetCheckedGroupButton

Gets the checked button which belongs to the specified group in the
            	RadToolBar control

#### Parameters

#### group `System.String`

The name of the group to search for.

#### Returns

`Telerik.Web.UI.RadToolBarButton` A RadToolBarButton object which
            	CheckOnClick and Checked properties are set to true.

###  FindItemByText

Searches the RadToolBar control for the first
                RadToolBarItem whose Text
            	property is equal to the specified value.

#### Parameters

#### text `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadToolBarItem` A RadToolBarItem whose Text
            	property is equal to the specified value. If an item is not found, null
            	(Nothing in Visual Basic) is returned.

###  FindItemByText

Searches the RadToolBar control for the first
                RadToolBarItem whose Text
            	property is equal to the specified value.

#### Parameters

#### text `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadToolBarItem` A RadToolBarItem whose Text
            	property is equal to the specified value. If an item is not found, null
            	(Nothing in Visual Basic) is returned.

###  FindItemByValue

Searches the RadToolBar control for the first
                RadToolBarButton or
            	RadToolBarSplitButton which
            	Value
            	property is equal to the specified value.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadToolBarItem` A RadToolBarButton or
            	RadToolBarSplitButton which
            	Value
            	property is equal to the specified value. If an item is not found, null
            	(Nothing in Visual Basic) is returned.

###  FindItemByValue

Searches the RadToolBar control for the first
                RadToolBarButton or
            	RadToolBarSplitButton which
            	Value
            	property is equal to the specified value.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadToolBarItem` A RadToolBarButton or
            	RadToolBarSplitButton which
            	Value
            	property is equal to the specified value. If an item is not found, null
            	(Nothing in Visual Basic) is returned.

###  FindChildByValue

Finds the child by value.

#### Parameters

#### value `System.String`

The value.

#### Returns

`Telerik.Web.UI.TControlItem` 

###  FindChildByValue

Finds the child by value.

#### Parameters

#### value `System.String`

The value.

#### ignoreCase `System.Boolean`

The ignore case.

#### Returns

`Telerik.Web.UI.TControlItem` 

###  FindItemByUrl

Searches the RadToolBar control for the first
                RadToolBarButton or
            	RadToolBarSplitButton which
            	NavigateUrl
            	property is equal to the specified value.

#### Parameters

#### url `System.String`

The url to search for.

#### Returns

`Telerik.Web.UI.RadToolBarItem` A RadToolBarButton or
            	RadToolBarSplitButton which
            	NavigateUrl
            	property is equal to the specified value. If an item is not found, null
            	(Nothing in Visual Basic) is returned.

###  FindButtonByCommandName

Searches the RadToolBar control for the first
                IRadToolBarButtonCommandName
            	property is equal to the specified value.

#### Parameters

#### commandName `System.String`

The commandName to search for.

#### Returns

`Telerik.Web.UI.IRadToolBarButton` A IRadToolBarButton which
            	CommandName
            	property is equal to the specified value. If an item is not found, null
            	(Nothing in Visual Basic) is returned.

###  FindItem

Returns  the first RadToolBarItem 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadToolBarItem}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadToolBarItem` 

###  AddProperty

Adds the property to the IScriptDescriptor, if it's value is different from the given default.

#### Parameters

#### descriptor `Telerik.Web.UI.IScriptDescriptor`

The descriptor to add the property to.

#### name `System.String`

The property name.

#### value `System.Object`

The current value of the property.

#### defaultValue `System.Object`

The default value.

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

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  DescribeProperty

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

