---
title: Telerik.Web.UI.GridFilterMenu
page_title: Telerik.Web.UI.GridFilterMenu
description: Telerik.Web.UI.GridFilterMenu
---

# Telerik.Web.UI.GridFilterMenu

Represents the filtering menu for Telerik RadGrid.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl
* Telerik.Web.UI.ControlItemContainer
* Telerik.Web.UI.HierarchicalControlItemContainer
* Telerik.Web.UI.RadMenu
* Telerik.Web.UI.RadContextMenu
* Telerik.Web.UI.GridContextMenu
* Telerik.Web.UI.GridFilterMenu

## Properties

###  Items `RadMenuItemCollection`

Gets the items.

###  Visible `Boolean`

Gets or sets a value that indicates whether a server control is rendered
            as UI on the page.

###  ClickToOpen `Boolean`

Gets or sets the ClickToOpen.

###  ID `String`

Gets or sets the programmatic identifier assigned to the server control.

###  EnableImageSprites `Boolean`

Gets or sets a value indicating whether item images should have sprite support.

###  Targets `ContextMenuTargetCollection`

Gets the collection containing the targets to which right-click
                RadContextMenu will attach.

#### Remarks
RadContextMenu can attach to four target types: ASP.NET control, element on the page,
            		document, set of client-side elements, specified by tagName.

###  OnClientShowing `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadContextMenu is to be displayed.

#### Remarks
If specified, the OnClientShowing client-side event handler is
                called before the context menu is shown on the client. Two parameters are passed to the
                handler:sender, the menu client object;eventArgs with two properties,
                          get_cancel()/set_cancel(cancel) and
            			  get_domEvent (a reference to the browser event).The OnClientShowing event can be cancelled. To do so,
                set the cancel property to false from the event handler (e.g.
                eventArgs.set_cancel(true);).

###  OnClientShown `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadContextMenu is displayed.

#### Remarks
If specified, the OnClientShown client-side event handler is
                called after the context menu is shown on the client. Two parameters are passed to the
                handler:sender, the menu client object;eventArgs with one property, get_domEvent
            			(a reference to the browser event).

###  OnClientHiding `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadContextMenu is to be hidden.

#### Remarks
If specified, the OnClientHiding client-side event handler is
                called before the context menu is hidden on the client. Two parameters are passed to the
                handler:sender, the menu client object;eventArgs with two properties,
                          get_cancel()/set_cancel(cancel) and
            			  get_domEvent (a reference to the browser event).The OnClientHiding event can be cancelled. To do so,
                set the cancel property to false from the event handler (e.g.
                eventArgs.set_cancel(true);).

###  OnClientHidden `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadContextMenu is hidden.

#### Remarks
If specified, the OnClientHidden client-side event handler is
                called after the context menu is hidden on the client. Two parameters are passed to the
                handler:sender, the menu client object;eventArgs with one property, get_domEvent
            			(a reference to the browser event).

###  Flow `ItemFlow`

###  EnableSelection `Boolean`

Gets or sets a value indicating if the currently selected item will be tracked and highlighted.

###  ClientChanges `IList`1`

Gets a list of all client-side changes (adding an item, removing an item, changing an item's property) which have occurred.

#### Remarks
You can use the ClientChanges property to respond to client-side modifications such as
            		adding a new itemremoving existing itemclearing the children of an item or the control itselfchanging a property of the item
            		The ClientChanges property is available in the first postback (ajax) request after the client-side modifications
            		have taken place. After this moment the property will return empty list.

###  Items `RadMenuItemCollection`

Gets a  object that contains the root items of the current RadMenu control.

#### Remarks
Use the Items property to access the root items of the RadMenu control. You can also use the Items property to
            	manage the root items - you can add, remove or modify items.

###  ItemTemplate `ITemplate`

Gets or sets the template for displaying the items in
            RadMenu.

###  ClientItemTemplate `ITemplate`

Gets or sets the template for displaying the items in
            RadMenu.

###  LoadingStatusTemplate `ITemplate`

Gets or sets the template displayed when child items are being loaded.

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when an item opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of RadMenu. You can specify the
                    Type and
                    the Duration of the expand animation.
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the collapse animation you can use the
                    CollapseAnimation property.

###  ExpandDelay `Int32`

Gets or sets a value indicating the timeout after which a menu item starts to
            open.

#### Remarks
Use the ExpandDelay property to delay item opening.
                    To customize the timeout prior to item closing use the
                    CollapseDelay property.

###  CollapseAnimation `AnimationSettings`

Gets the settings for the animation played when an item closes.

#### Remarks
Use the CollapseAnimation property to customize the expand
                    animation of RadMenu. You can specify the
                    Type,
                    Duration and the
                    items are collapsed.
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None. To customize the expand animation you can
                    use the ExpandAnimation property.

###  CollapseDelay `Int32`

Gets or sets a value indicating the timeout after which a menu item starts to
            close.

#### Remarks
Use the CollapseDelay property to delay item closing. To
                cause immediate item closing set this property to 0 (zero).
                    To customize the timeout prior to item closing use the
                    ExpandDelay property.

###  Flow `ItemFlow`

Gets or sets a value indicating the way top level items will flow.

#### Remarks
Use the Flow property to customize the way top level items are
            displayed. If set to Horizontal items are positioned one after
            another. Vertical causes the items to flow one below the other.

###  DefaultGroupSettings `RadMenuItemGroupSettings`

Specifies the default settings for child item behavior.

#### Remarks
You can customize the following settingsitem flowexpand directionhorizontal offset from the parent itemvertical offset from the parent itemwidthheight
                    For more information check
                    MenuItemGroupSettings.

###  EnableAutoScroll `Boolean`

Gets or sets a value indicating if an automatic scroll is applied if the groups are larger then the screen height.

###  EnableRootItemScroll `Boolean`

Gets or sets a value indicating if scroll is enabled for the root items.
            	Width must be set for horizontal root group, Height for vertical one.

###  EnableSelection `Boolean`

Gets or sets a value indicating if the currently selected item will be tracked and highlighted.

###  AutoScrollMinimumHeight `Int32`

The minimum available height that is needed to enable the auto-scroll.

#### Remarks
Enabling the auto-scroll when there is very little available space can
            lead to a situation where only the scroll arrows are visible.
            
            If the available space is lower than the specified value, the menu will
            attempt to screen boundary detection first (if enabled).

###  AutoScrollMinimumWidth `Int32`

The minimum available width that is needed to enable the auto-scroll.

#### Remarks
Enabling the auto-scroll when there is very little available space can
            		lead to a situation where only the scroll arrows are visible.
            	
            		If the available space is lower than the specified value, the menu will
            		attempt to screen boundary detection first (if enabled).

###  EnableScreenBoundaryDetection `Boolean`

Gets or sets a value indicating whether the screen boundary detection will be applied when menu items are expanded.

#### Remarks
By default RadMenu will check if there is enough space to open a menu item. If there isn't the expand direction of the 
            	item will be inverted - Left to Right, Bottom to Top and vice versa.

###  ClickToOpen `Boolean`

Gets or sets a value indicating whether root items should open on mouse
            click.

#### Remarks
Use the ClickToOpen property to customize the way root menu
            items are opened. By default menu items are opened on mouse hovering.

###  WebServiceSettings `NavigationControlWebServiceSettings`

Gets the settings for the web service used to populate items
            	ExpandMode set to
            	MenuItemExpandMode.WebService.

#### Remarks
Use the WebServiceSettings property to configure the web
            		service used to populate items on demand.
            		You must specify both Path and
                    Method
            		to fully describe the service.
                
            		You can use the LoadingStatusTemplate
            		property to create a loading template.
            	
            		In order to use the integrated support, the web service should have the following signature:
            		
            		
            		[ScriptService]
            		public class WebServiceName : WebService
            		{
            			[WebMethod]
            			public RadMenuItemData[] WebServiceMethodName(RadMenuItemData item, object context)
            			{
            				// We cannot use a dictionary as a parameter, because it is only supported by script services.
            				// The context object should be cast to a dictionary at runtime.
            				IDictionary<string, object> contextDictionary = (IDictionary<string, object>) context;
            				
            				//...
            			}
            		}

###  PersistLoadOnDemandItems `RadMenuItemCollection`

When set to true, the items populated through Load On Demand are persisted on the server.

###  EnableOverlay `Boolean`

Gets or sets a value indicating if an overlay should be rendered (only in Internet Explorer).

#### Remarks
The overlay is an iframe element that is used to hide select and other elements from overlapping the menu.

###  DataBindings `RadMenuItemBindingCollection`

Gets a collection of  objects that define the relationship 
            	between a data item and the menu item it is binding to.

###  MaxDataBindDepth `Int32`

Gets or sets the maximum number of levels to bind to the RadMenu control.

#### Remarks
When binding the RadMenu control to a data source, use the MaxDataBindDepth 
            	property to limit the number of levels to bind to the control. For example, setting this property to 2 binds only 
            	the root menu items and their immediate children. All remaining records in the data source are ignored.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a menu item is clicked.

###  SelectedItem `RadMenuItem`

Gets a RadMenuItem object that represents the selected item in the RadMenu
            control.

#### Remarks
The user can select a item by clicking on it.
            	Use the SelectedItem property to determine which node is
                selected in the RadMenu control.
                An item cannot be selected when it's configured to navigate to a given location.

###  SelectedValue `String`

Gets the Value of the selected item.

###  EnableRoundedCorners `Boolean`

Gets or sets a value indicating whether child items should have rounded corners.

###  EnableShadows `Boolean`

Gets or sets a value indicating whether child items should have shadows.

###  ShowToggleHandle `Boolean`

Gets or sets a value indicating  whether a toggle button is rendered when an item has children..

#### Remarks
By default RadMenu will not render toggle button for the item with children.

###  EnableTextHTMLEncoding `Boolean`

Gets or sets a value indicating whether the html encoding will be applied when the menu items are rendered.

#### Remarks
By default RadMenu will not apply a html encoding when the menu items are rendered.

###  EnableImageSprites `Boolean`

Gets or sets a value indicating whether item images should have sprite support.

###  EnableImagePreloading `Boolean`

Gets or sets a value indicating whether items images should be preloaded.

###  OnClientMouseOver `String`

Gets or sets a value indicating the client-side event handler that is called when
            the mouse moves over a menu item in the RadMenu control.

#### Remarks
If specified, the OnClientMouseOverclient-side event handler is called when the mouse moves over a
                menu item. Two parameters are passed to the handler:sender, the menu client object;eventArgs with two properties, get_item() (the
                    instance of the menu item) and get_domEvent (a reference to the browser event).This event cannot be cancelled.

###  OnClientMouseOut `String`

Gets or sets a value indicating the client-side event handler that is called when
            the mouse moves out of a menu item in the RadMenu control.

#### Remarks
If specified, the OnClientMouseOut client-side event handler
                is called when the mouse moves out of a menu item. Two parameters are passed to the
                handler:sender, the menu client object;eventArgs with two properties, get_item() (the
                    instance of the menu item) and get_domEvent (a reference to the browser event).This event cannot be cancelled.

###  OnClientItemFocus `String`

Gets or sets a value indicating the client-side event handler that is called when
            a menu item gets focus.

#### Remarks
If specified, the OnClientItemFocus client-side event
                handler is called when a menu item is selected using either the keyboard (the [TAB]
                or arrow keys) or by clicking it. Two parameters are passed to the handler:sender, the menu client object;eventArgs with two properties, get_item() (the
                    instance of the menu item) and get_domEvent (a reference to the browser event).This event cannot be cancelled.

###  OnClientItemBlur `String`

Gets or sets a value indicating the client-side event handler that is called
            after an item loses focus.

#### Remarks
If specified, the OnClientItemBlur client-side event handler
                is called when a menu item loses focus as a result of the user pressing a key or
                clicking elsewhere on the page. Two parameters are passed to the handler:sender, the menu client object;eventArgs with two properties, get_item() (the
                    instance of the menu item) and get_domEvent (a reference to the browser event).This event cannot be cancelled.

###  OnClientItemClicking `String`

Gets or sets a value indicating the client-side event handler that is called when
            a menu item is clicked.

#### Remarks
This event is similar to OnClientItemFocus but fires only on
                mouse click.If specified, the OnClientItemClicking client-side event
                handler is called before a menu item is clicked upon. Two parameters are passed to
                the handler:sender, the menu client object;eventArgs with three properties, get_item() (the
                    instance of the menu item), get_cancel()/set_cancel() - indicating
            		if the event should be cancelled and get_domEvent (a reference to the browser event).The OnClientItemClicking event can be cancelled. To do so,
                return False from the event handler.

###  OnClientItemClicked `String`

Gets or sets a value indicating the client-side event handler that is called
            after a menu item is clicked.

#### Remarks
This event is similar to OnClientItemFocus but fires only on
                mouse click.If specified, the OnClientItemClicked client-side event
                handler is called after a menu item is clicked upon. Two parameters are passed to
                the handler:sender, the menu client object;eventArgs with two properties, get_item() (the
                    instance of the menu item) and get_domEvent (a reference to the browser event).This event cannot be cancelled.

###  OnClientItemOpening `String`

Gets or sets a value indicating the client-side event handler that is called when
            a group of child items begin to open.

###  OnClientItemOpened `String`

Gets or sets a value indicating the client-side event handler that is called when
            a group of child items opens.

###  OnClientItemClosing `String`

Gets or sets a value indicating the client-side event handler that is called when
            a group of child items is closing.

#### Remarks
If specified, the OnClientItemClosing client-side event
                handler is called when a group of child items closes. Two parameters are passed to
                the handler:sender, the menu client object;eventArgs with three properties, get_item() (the
                    instance of the menu item), get_cancel()/set_cancel() - indicating
            		if the event should be cancelled and get_domEvent (a reference to the browser event).This event can be cancelled.

###  OnClientItemClosed `String`

Gets or sets a value indicating the client-side event handler that is called when
            a group of child items closes.

#### Remarks
If specified, the OnClientItemClosed client-side event
                handler is called when a group of child items closes. Two parameters are passed to
                the handler:sender, the menu client object;eventArgs with two properties, get_item() (the
                    instance of the menu item) and get_domEvent (a reference to the browser event).This event cannot be cancelled.

###  OnClientItemPopulating `String`

Gets or sets a value indicating the client-side event handler that is called when
            a menu item children are about to be populated (for example from web service).

#### Remarks
If specified, the OnClientItemPopulating client-side event
                handler is called when a menu item children are about to be populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with three properties:
            			get_item(), the instance of the menu item.get_context(), an user object that will be passed to the web service.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientItemPopulated `String`

Gets or sets a value indicating the client-side event handler that is called when
            a menu item children were just populated (for example from web service).

#### Remarks
If specified, the OnClientItemPopulated client-side event
                handler is called when a menu item children were just populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with one property:
            			get_item(), the instance of the menu item.This event cannot be cancelled.

###  OnClientMenuPopulating `String`

Gets or sets the on OnClientMenuPopulating javascript function called before the children of a menu item are populated..

###  OnClientMenuPopulated `String`

Gets or sets the OnClientMenuPopulated- the javascript function called before the children of a menu item are populated.

###  OnClientItemPopulationFailed `String`

Gets or sets a value indicating the client-side event handler that is called when
            the operation for populating the children of a menu item has failed.

#### Remarks
If specified, the OnClientItemPopulationFailed client-side event
                handler is called when the operation to populate the children of a menu item has failed.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with two properties:
            			get_item(), the instance of the menu item.set_cancel(), set to true to suppress the default action (alert message).This event can be cancelled.

###  OnClientTemplateDataBound `String`

Gets or sets the name of the JavaScript function called when the client template for an item is evaluated

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called
            after the RadMenu client-side object is initialized.

#### Remarks
If specified, the OnClienLoad client-side event handler is
                called after the menu is fully initialized on the client.A single parameter - the menu client object - is passed to the
                handler.This event cannot be cancelled.

###  ChildListElementCssClass `String`

Will be serialized to the client, so it can render
            the UL element with of the root group with the appropriate class.

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

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeTargets

#### Returns

`System.Void` 

###  ResolveControlTargetIds

#### Returns

`System.Void` 

###  LoadTargetsViewState

#### Returns

`System.Void` 

###  SaveTargetsViewState

#### Returns

`System.Object` 

###  TrackTargetsViewState

#### Returns

`System.Void` 

###  LoadContentFile

Populates the RadMenu control from external XML file.

#### Remarks
The newly added items will be appended after any existing ones.

#### Parameters

#### xmlFileName `System.String`

The name of the XML file.

#### Returns

`System.Void` 

###  GetAllItems

Gets a linear list of all items in the RadMenu
            control.

#### Remarks
Use the GetAllItems method to obtain a linear collection of all
            items regardless their place in the hierarchy.

#### Returns

`System.Collections.Generic.IList`1` An IList<RadMenuItem> containing all items (from all hierarchy
            levels).

###  FindItemByText

Searches the RadMenu control for the first
                RadMenuItem with a Text property equal to
                the specified value.

#### Remarks
The method returns the first item matching the search criteria. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### text `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadMenuItem` A RadMenuItem whose Text property is equal
                to the specified value.

###  FindItemByText

Searches the RadMenu control for the first
                RadMenuItem with a Text property equal to
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

`Telerik.Web.UI.RadMenuItem` A RadMenuItem whose Text property is equal
                to the specified value.

###  FindItemByValue

Searches the RadMenu control for the first
                RadMenuItem with a Value property equal
                to the specified value.

#### Remarks
The method returns the first item matching the search criteria. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadMenuItem` A RadMenuItem whose Value property is
                equal to the specified value.

###  FindItemByValue

Searches the RadMenu control for the first
                RadMenuItem with a Value property equal
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

`Telerik.Web.UI.RadMenuItem` A RadMenuItem whose Value property is
                equal to the specified value.

###  FindItemByUrl

Searches the RadMenu control for the first
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

`Telerik.Web.UI.RadMenuItem` A Item whose NavigateUrl
                property is equal to the specified value.

###  FindItem

Returns  the first RadMenuItem 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadMenuItem}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadMenuItem` 

###  ClearSelectedItem

This methods clears the selected item of the current RadMenu instance.
            Useful when you need to clear item selection after postback.

#### Returns

`System.Void` 

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

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

