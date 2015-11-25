---
title: Telerik.Web.UI.RadPanelBar
page_title: Telerik.Web.UI.RadPanelBar
description: Telerik.Web.UI.RadPanelBar
---

# Telerik.Web.UI.RadPanelBar

#### Remarks
The RadPanelBarcontrol is used to display a list of items in a Web Forms
                    page and is often used control for building  collapsible side-menu 
                    interfaces. The RadPanelBarcontrol supports the following features:
                bullet Databinding that allows the control to be populated from various
                    datasourcesProgrammatic access to the RadPanelBarobject model
                    which allows to dynamic creation of panelbars, populate items, set
                    properties.Customizable appearance through built-in or user-defined skins.ItemsThe RadPanelBarcontrol is made up of tree of items represented
                    by Telerik.Web.UI.RadPanelItem RadPanelItemobjects. Items at the first level (level 0) are
                    called root items. A items that has a parent item is called a child item. All root
                    items are stored in the P:Telerik.Web.UI.RadPanelBar.Items Itemscollection. Child items are
                    stored in a parent item's P:Telerik.Web.UI.RadPanelItem.Items Itemscollection.
                Each item has a P:Telerik.Web.UI.RadPanelItem.Text Textand a P:Telerik.Web.UI.RadPanelItem.Value Valueproperty. 
            		The value of the P:Telerik.Web.UI.RadPanelItem.Text Textproperty is displayed in the RadPanelBarcontrol, 
            		while the P:Telerik.Web.UI.RadPanelItem.Value Valueproperty is used to store any additional data about the item, 
            		such as data passed to the postback event associated with the item. When clicked, a item can
                    navigate to another Web page indicated by the P:Telerik.Web.UI.RadPanelItem.NavigateUrl NavigateUrlproperty.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.ControlItemContainer : IControlItemContainer, INamingContainer, IXmlSerializable
* Telerik.Web.UI.HierarchicalControlItemContainer
* Telerik.Web.UI.RadPanelBar : IPostBackEventHandler, IRadPanelItemContainer

## Properties

###  ClientChanges `IList`1`

Gets a list of all client-side changes (adding an item, removing an item, changing an item's property) which have occurred.

#### Remarks
You can use the ClientChanges property to respond to client-side modifications such as
            		adding a new itemremoving existing itemclearing the children of an item or the control itselfchanging a property of the item
            		The ClientChanges property is available in the first postback (ajax) request after the client-side modifications
            		have taken place. After this moment the property will return empty list.

###  Items `RadPanelItemCollection`

Gets a RadPanelItemCollection object that contains the root items of the current RadPanelBar control.

#### Remarks
Use the Items property to access the child items of RadPanelBar. You can also use the Items property to
            	manage the root items. You can add, remove or modify items from the Items collection.

###  SelectedItem `RadPanelItem`

Gets the selected panel item.

###  ItemTemplate `ITemplate`

Gets or sets the template for displaying the items in
            RadPanelBar.

###  ExpandMode `PanelBarExpandMode`

Gets of sets a value indicating the behavior of RadPanelbar when an item is
            expanded.

#### Remarks
Use the ExpandMode property to specify the way RadPanelbar
                should behave after an item is expanded. The available options are:MultipleExpandedItems (default) - More than one item can
                    be expanded at a time.SingleExpandedItem - Only one item can be expanded at a
                    time. Expanding another item collapses the previously expanded one.FullExpandedItem - Only one item can be expanded at a
                    time. The expanded area occupies the entire height of the RadPanelbar. The
                    Height property should be set in order
                    RadPanelbar to operate correctly in this mode.

###  AllowCollapseAllItems `RadPanelItemCollection`

Gets or sets a value indicating whether all items can be collapsed.
            This allows all the items to be collapsed even if the panelbar's ExpandMode is set to SingleExpandedItem or FullExpandedItem mode.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when an item
                from the panel is clicked.

###  DataBindings `RadPanelItemBindingCollection`

Gets the data bindings for panel items in the panelbar.

###  MaxDataBindDepth `Int32`

Gets or sets the maximum number of levels to bind to the RadPanelBar control.

#### Remarks
When binding the RadPanelBar control to a data source, use the MaxDataBindDepth 
            	property to limit the number of levels to bind to the control. For example, setting this property to 2 binds only 
            	the root panel items and their immediate children. All remaining records in the data source are ignored.

###  PersistStateInCookie `Boolean`

Gets or sets a value indicating whether the control would persists its state
            between pages (expanded and selected items).

#### Remarks
Use the PersistStateInCookie property to make
                RadPanelbar persist its state between pages. This feature requires
                browser cookies to be enabled. Also the ClientID and
                ID properties of the RadPanelbar control must be
                the same in all pages accessible via the control (and containing it).Page1.aspx:<radP:RadPanelbar ID="RadPanelbar1" > ...
                </radP:RadPanelbar>Page2.aspx<radP:RadPanelbar ID="RadPanelbar1" > ...
                </radP:RadPanelbar>

###  CookieName `String`

Specifies the name of the cookie which should be used when PersistStateInCookie is set to true.

#### Remarks
If this property is not set the ClientID property will be used as the name of the cookie.

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when an item opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of RadPanelBar. You can specify the
                    Type,
                    Duration and the
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the collapse animation you can use the
                    CollapseAnimation property.

###  ExpandDelay `Int32`

Gets or sets a value indicating the timeout after which a panel item starts to
            open.

#### Remarks
Use the ExpandDelay property to delay item opening.
                    To customize the timeout prior to item closing use the
                    CollapseDelay property.

###  CollapseAnimation `AnimationSettings`

Gets the settings for the animation played when an item closes.

#### Remarks
Use the CollapseAnimation property to customize the expand
                    animation of RadPanelBar. You can specify the
                    Type,
                    Duration and the
                    items are collapsed.
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None. To customize the expand animation you can
                    use the ExpandAnimation property.

###  CollapseDelay `Int32`

Gets or sets a value indicating the timeout after which a panel item starts to
            close.

#### Remarks
To customize the timeout prior to item closing use the
                    ExpandDelay property.

###  EnableItemTextHtmlEncoding `Boolean`

Gets or sets a value indicating whether RadPanelBar should HTML encode the text of its items.

###  OnClientContextMenu `String`

Gets or sets a value indicating the client-side event handler that is called
            before the browser context panel shows (after right-clicking an item).

#### Remarks
Use the OnClientContextMenu property to specify a JavaScript
                function that will be executed before the context menu shows after right clicking an
                item.Two parameters are passed to the handlersender (the client-side RadPanelbar object)
                        eventArgs with two properties 
                        Item - the instance of the selected itemEventObject - the browser DOM event

###  OnClientItemClicking `String`

Gets or sets a value indicating the client-side event handler that is called when
            a panel item is clicked.

#### Remarks
This event is similar to OnClientItemFocus but fires only on
                mouse click.If specified, the OnClientItemClicking client-side event
                handler is called before a panel item is clicked upon. Two parameters are passed to
                the handler:sender, the panelbar client object;eventArgs with one property, Item (the
                    instance of the panel item).The OnClientItemClicking event can be cancelled. To do so,
                return False from the event handler.

###  OnClientItemClicked `String`

Gets or sets a value indicating the client-side event handler that is called
            after a panel item is clicked.

#### Remarks
This event is similar to OnClientItemFocus but fires only on
                mouse click.If specified, the OnClientItemClicked client-side event
                handler is called after a panel item is clicked upon. Two parameters are passed to
                the handler:sender, the panelbar client object;eventArgs with one property, Item (the
                    instance of the panel item).This event cannot be cancelled.

###  OnClientItemFocus `String`

Gets or sets a value indicating the client-side event handler that is called when
            a panel item gets focus.

#### Remarks
If specified, the OnClientItemFocus client-side event
                handler is called when a panel item is selected using either the keyboard (the
                [TAB] or arrow keys) or by clicking it. Two parameters are passed to the
                handler:sender, the panelbar client object;eventArgs with one property, Item (the
                    instance of the panel item).This event cannot be cancelled.

###  OnClientItemBlur `String`

Gets or sets a value indicating the client-side event handler that is called
            after an item loses focus.

#### Remarks
If specified, the OnClientItemBlur client-side event handler
                is called when a panel item loses focus as a result of the user pressing a key or
                clicking elsewhere on the page. Two parameters are passed to the handler:sender, the panelbar client object;eventArgs with one property, Item (the
                    instance of the panel item).This event cannot be cancelled.

###  OnClientItemExpand `String`

Gets or sets a value indicating the client-side event handler that is called when
            a group of child items expands.

###  OnClientItemCollapse `String`

Gets or sets a value indicating the client-side event handler that is called when
            a group of child items collapses.

#### Remarks
If specified, the OnClientItemClose client-side event
                handler is called when a group of child items closes. Two parameters are passed to
                the handler:sender, the panelbar client object;eventArgs with one property, Item (the
                    instance of the panel item).This event cannot be cancelled.

###  OnClientItemAnimationEnd `String`

Gets or sets the name of the JavaScript function called when an item's expand/collapse animation finishes

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called
            after the RadPanelbar client-side object is initialized.

#### Remarks
If specified, the OnClienLoad client-side event handler is
                called after the panelbar is fully initialized on the client.A single parameter - the panelbar client object - is passed to the
                handler.This event cannot be cancelled.

###  OnClientMouseOver `String`

Gets or sets a value indicating the client-side event handler that is called when
            the mouse moves over a panel item in the RadPanelbar control.

#### Remarks
If specified, the
                OnClientMouseOverclient-side event handler is
                called when the mouse moves over a panel item. Two parameters are passed to
                the handler:sender, the panelbar client object;eventArgs with one property, Item (the
                    instance of the panel item).This event cannot be cancelled.

###  OnClientMouseOut `String`

Gets or sets a value indicating the client-side event handler that is called when
            the mouse moves out of a panel item in the RadPanelbar control.

#### Remarks
If specified, the OnClientMouseOut client-side event handler
                is called when the mouse moves out of a panel item. Two parameters are passed to
                the handler:sender, the panelbar client object;eventArgs with one property, Item (the
                    instance of the panel item).This event cannot be cancelled.

###  DataSource `Object`

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

Populates the RadPanelBar control from external XML file.

#### Remarks
The newly added items will be appended after any existing ones.

#### Parameters

#### xmlFileName `System.String`

The name of the XML file.

#### Returns

`System.Void` 

###  FindItemByText

Searches the RadPanelbar control for the first
                RadPanelItem with a Text property equal to
                the specified value.

#### Remarks
The method returns the first item matching the search criteria. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### text `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadPanelItem` A RadPanelItem whose Text property is equal
                to the specified value.

###  FindItemByText

Searches the RadPanelbar control for the first
                RadPanelItem with a Text property equal to
                the specified value.

#### Remarks
The method returns the first item matching the search criteria. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### text `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadPanelItem` A RadPanelItem whose Text property is equal
                to the specified value.

###  FindItemByValue

Searches the RadPanelbar control for the first
                RadPanelItem with a Value property equal
                to the specified value.

#### Remarks
The method returns the first item matching the search criteria. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadPanelItem` A RadPanelItem whose Value property is
                equal to the specified value.

###  FindItemByValue

Searches the RadPanelbar control for the first
                RadPanelItem with a Value property equal
                to the specified value.

#### Remarks
The method returns the first item matching the search criteria. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadPanelItem` A RadPanelItem whose Value property is
                equal to the specified value.

###  FindItemByUrl

Searches the RadPanelbar control for the first
                Item with a NavigateUrl
                property equal to the specified value.

#### Remarks
The method returns the first Item matching the search criteria. If no Item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### url `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadPanelItem` A RadPanelItem whose NavigateUrl
                property is equal to the specified value.

###  FindItem

Returns  the first RadPanelItem 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadPanelItem}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadPanelItem` 

###  GetAllItems

Gets a linear list of all items in the RadPanelBar
            control.

#### Remarks
Use the GetAllItems method to obtain a linear collection of all
            items regardless their place in the hierarchy.

#### Returns

`System.Collections.Generic.IList`1` An IList<RadPanelBarItem> containing all items (from all hierarchy
            levels).

###  ClearSelectedItems

This methods clears the selected items of the current RadPanelBar instance. Useful when you need to clear item selection after postback.

#### Returns

`System.Void` 

###  CollapseAllItems

This methods collapses all expanded panel items

#### Returns

`System.Void` 

###  OnItemClick

Raises the ItemClick event.

#### Parameters

#### e `Telerik.Web.UI.RadPanelBarEventArgs`

#### Returns

`System.Void` 

###  OnItemDataBound

Raises the ItemDataBound event.

#### Parameters

#### e `Telerik.Web.UI.RadPanelBarEventArgs`

#### Returns

`System.Void` 

###  OnItemCreated

Raises the ItematCreated event.

#### Parameters

#### e `Telerik.Web.UI.RadPanelBarEventArgs`

#### Returns

`System.Void` 

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

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

