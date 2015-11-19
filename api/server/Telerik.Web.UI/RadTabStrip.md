---
title: Telerik.Web.UI.RadTabStrip
page_title: Telerik.Web.UI.RadTabStrip
description: Telerik.Web.UI.RadTabStrip
---

# Telerik.Web.UI.RadTabStrip

#### Remarks
The RadTabStripcontrol is used to display a list of tabs in a Web Forms
                    page and is often used in combination with a
                    Telerik.Web.UI.RadMultiPage RadMultiPagecontrol for building tabbed
                    interfaces. The RadTabStripcontrol supports the following features:
                bullet Databinding that allows the control to be populated from various
                    datasourcesProgrammatic access to the RadTabStripobject model
                    which allows to dynamic creation of tabstrips, populate h tabs, set
                    properties.Customizable appearance through built-in or user-defined skins.TabsThe RadTabStripcontrol is made up of tree of tabs represented
                    by Telerik.Web.UI.RadTab RadTabobjects. Tabs at the top level (level 0) are
                    called root tabs. A tab that has a parent tab is called a child tab. All root
                    tabs are stored in the P:Telerik.Web.UI.RadTabStrip.Tabs Tabscollection. Child tabs are
                    stored in a parent tab's P:Telerik.Web.UI.RadTab.Tabs Tabscollection.
                Each tab has a P:Telerik.Web.UI.RadTab.Text Textand a P:Telerik.Web.UI.RadTab.Value Valueproperty. 
            		The value of the P:Telerik.Web.UI.RadTab.Text Textproperty is displayed in the RadTabStripcontrol, 
            		while the P:Telerik.Web.UI.RadTab.Value Valueproperty is used to store any additional data about the tab, 
            		such as data passed to the postback event associated with the tab. When clicked, a tab can
                    navigate to another Web page indicated by the P:Telerik.Web.UI.RadTab.NavigateUrl NavigateUrlproperty.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.ControlItemContainer : IControlItemContainer, INamingContainer, IXmlSerializable
* Telerik.Web.UI.HierarchicalControlItemContainer
* Telerik.Web.UI.RadTabStrip : IPostBackEventHandler, IRadTabContainer

## Properties

###  ClientChanges `IList`1`

Gets a list of all client-side changes (adding a tab, removing a tab, changing a tab's property) which have occurred.

#### Remarks
You can use the ClientChanges property to respond to client-side modifications such as
            		adding a new tabremoving existing tabclearing the children of a tab or the control itselfchanging a property of the tab
            		The ClientChanges property is available in the first postback (ajax) request after the client-side modifications
            		have taken place. After this moment the property will return empty list.

###  ScrollChildren `Boolean`

Gets or sets a value indicating whether the immediate children of the RadTabStrip control will be
            	scrollable.

###  ScrollButtonsPosition `TabStripScrollButtonsPosition`

The position of the scroll buttons with regards to the tab band.

#### Remarks
This property is applicable when the
                ScrollChildren property is set to
                true; otherwise it is ignored.

###  ScrollPosition `Int32`

Gets or sets the position of the scrollable band of tabs relative to the
            	beginning of the scrolling area.

#### Remarks
This property is applicable when the ScrollChildren property is set to
                true; otherwise it is ignored.

###  PerTabScrolling `Boolean`

Gets or sets a value indicating whether the tabstrip should scroll directly to
            	the next tab.

#### Remarks
By default tabs are scrolled smoothly. If you want the tabstrip to scroll directly
                to the next (or previous) tab set this property to true. This
                property is applicable when the ScrollChildren
                property is set to true; otherwise it is ignored.

###  SelectedIndex `Int32`

Gets or sets the index of the selected child tab.

#### Remarks
Use the SelectedIndex property to programmatically specify the selected
            	child tab in a IRadTabContainer (RadTabStrip or RadTab). 
            	To clear the selection set the SelectedIndex property to -1.

###  SelectedTab `RadTab`

Gets the selected child tab.

###  Tabs `RadTabCollection`

Gets a RadTabCollection object that contains the root tabs of the current RadTabStrip control.

#### Remarks
Use the Tabs property to access the child tabs of RadTabStrip. You can also use the Tabs property to
            	manage the root tabs. You can add, remove or modify tabs from the Tabs collection.

###  TabTemplate `ITemplate`

Gets or sets the template for displaying all tabs in the  control.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether tabs should postback when clicked.

#### Remarks
RadTabStrip will postback provided one of the following conditions is met:
            	
            			The AutoPostBack property is set to true.
            		
            			The user has subscribed to the TabClick event.

###  EnableDragToReorder `Boolean`

Gets or sets a value indicating whether reording with dragging should be enabled.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  DataBindings `RadTabBindingCollection`

Gets a collection of  objects that define the relationship 
            	between a data item and the tab it is binding to.

###  AppendDataBoundItems `Boolean`

Gets or sets a value that indicates whether child tabs are cleared before
                data binding.

#### Remarks
The AppendDataBoundTabs property allows you to add items to
                the RadTabStrp control before data binding occurs. After data binding, the items
                collection contains both the items from the data source and the previously added
                items.The value of this property is stored in view state.

###  MaxDataBindDepth `Int32`

Gets or sets the maximum number of levels to bind to the RadTabStrip control.

#### Remarks
When binding the RadTabStrip control to a data source, use the MaxDataBindDepth 
            	property to limit the number of levels to bind to the control. For example, setting this property to 2 binds only 
            	the root tabs and their immediate children. All remaining records in the data source are ignored.

###  DataTextField `String`

Gets or sets the field of the data source that provides the text content of the tabs.

#### Remarks
Use the DataTextField property to specify the field of the data source (in most cases the name of the database column) 
            	which provides values for the Text property of databound tabs. The DataTextField property is 
            	taken into account only during data binding.

###  DataValueField `String`

Gets or sets the field of the data source that provides the value of the tabs.

#### Remarks
Use the DataValueField property to specify the field of the data source (in most cases the name of the database column) 
            	which provides the values for the Value property of databound tabs. The DataValueField property is 
            	taken into account only during data binding. If the DataValueField property is not set the Value 
            	property of databound tabs will have its default value - empty string.

###  DataNavigateUrlField `String`

Gets or sets the field of the data source that provides the URL to which tabs navigate.

#### Remarks
Use the DataNavigateUrlField property to specify the field of the data source (in most cases the name of the database column) 
            	which provides the values for the NavigateUrl property of databound tabs. 
            	The DataNavigateUrlField property is taken into account only during data binding. If the DataNavigateUrlField property 
            	is not set the NavigateUrl property of databound tabs will have its default value - empty string.

###  DataFieldID `String`

Gets or sets the field from the data source which is the "child" column in the
            	"parent-child" relationship used to databind the RadTabStrip
            	control.

#### Remarks
RadTabStrip requires both DataFieldID and
            	DataFieldParentID properties to be set in order to be hierarchically databound.

###  DataFieldParentID `String`

Gets or sets the field from the data source which is the "parent" column in the
            	"parent-child" relationship used to databind the RadTabStrip
            	control.

#### Remarks
RadTabStrip requires both DataFieldID and
            		DataFieldParentID properties to be set in order to be hierarchically databound.
            	
            		The value of the column specified by DataFieldParentID must be null (Nothing) for root tabs. This is a requirement 
            		for databinding RadTabStrip.

###  DataTextFormatString `String`

Gets or sets the formatting string used to control how text to the tabstrip
            	control is displayed.

#### Remarks
Use the DataTextFormatString property to provide a custom display format for text of the tabs.
            		The data format string consists of two parts, separated by a colon, in the form { A: Bxx }. 
            		For example, the formatting string {0:F2} would display a fixed point number with two decimal places.
            	
            		The entire string must be enclosed in braces to indicate that it is a format string and not a literal string. 
            		Any text outside the braces is displayed as literal text.
            	
            		The value before the colon (A in the general example) specifies the parameter index in a zero-based list of parameters.
            		This value can only be set to 0.

###  InnermostSelectedTab `RadTab`

Gets the innermost selected tab in a hierarchical RadTabStrip control.

#### Remarks
In hierarchical tabstrips this property returns the innermost selected
                tab.

###  ValidationGroup `String`

Gets or sets the name of the validation group to which this validation
                control belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a tab
                from the tabstrip is clicked.

###  MultiPageID `String`

Gets or sets the ID of the RadMultiPage control that
                will be controlled by the current RadTabStrip control.

#### Remarks
You should use different value depending on the following conditions:
            	
            			Use the ID property of the RadMuitiPage control if the RadMultiPage control is in 
            			the same INamingContainer (user control, page, content page, master page) as the current RadTabStrip control.
            		
            			Use the UniqueID property of the RadMuitiPage control if the RadMultiPage 
            			control is in a different INamingContainer (user control, page, content page, master page) than 
            			the current RadTabStrip control.

###  MultiPage `RadMultiPage`

Gets the associated RadMultiPage control if the
                MultiPageID property is set.

###  ClickSelectedTab `RadTab`

Gets or sets a value indicating whether the tabstrip should postback when the user clicks the currently selected tab.

###  Orientation `TabStripOrientation`

Gets or sets a value indicating the orientation of child tabs within the
            	RadTabStrip control.

###  Align `TabStripAlign`

Gets or sets the alignment of the tabs in the RadTabStrip control.

###  ReorderTabsOnSelect `RadTabCollection`

Gets or sets a value indicating whether the row of the selected tab should move
            	to the bottom.

#### Remarks
Use the ReorderTabsOnSelect property to mimic the behavior of the
            	Windows tabstrip control.

###  ShowBaseLine `Boolean`

Shows or hides the image at the base of the first level of tabs.

###  EnableSubLevelStyles `Boolean`

Controls whether the subitems of the tabstrip will have different styles than the main items.

###  UnSelectChildren `Boolean`

Gets or sets a value determining whether child tabs are unselected when a parent
            	tab is unselected.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when a tab within
            the RadTabStrip control is selected.

#### Remarks
By default, page validation is performed when a tab is selected. Page
                validation determines whether the input controls associated with a validation
                control on the page all pass the validation rules specified by the validation
                control. You can specify or determine whether validation is performed on both the
                client and the server when a tab is clicked by using the CausesValidation
                property. To prevent validation from being performed, set the
                CausesValidation property to false.

###  KeyboardNavigationSettings `TabStripKeyboardNavigationSettings`

Used to customize the TabStrip keyboard navigation functionality.

###  OnClientTabSelected `String`

Gets or sets a value indicating the client-side event handler that is called
                after selecting a tab.

#### Remarks
Use the OnClientTabSelected property to specify a JavaScript
                function that will be executed after a tab is selected - either by left-clicking it
                with a mouse or hitting enter after tabbing to that tab.Two parameters are passed to the handlersender (the client-side RadTabStrip object)
                        eventArgs with one property 
                        tab - the instance of the selected tab

###  OnClientContextMenu `String`

Gets or sets a value indicating the client-side event handler that is called
            before the browser context menu shows (after right-clicking an item).

#### Remarks
Use the OnClientContextMenu property to specify a JavaScript
                function that will be executed before the context menu shows after right clicking a
                tab.Two parameters are passed to the handlersender (the client-side RadTabStrip object)
                        eventArgs with two properties 
                        tab - the instance of the selected tabdomEvent - the browser DOM event

###  OnClientDoubleClick `String`

Gets or sets a value indicating the client-side event handler that is called
            when the user double-clicks a tab.

#### Remarks
Use the OnClientDoubleClick property to specify a JavaScript
                function that will be executed when the user double-clicks a tab.
            Two parameters are passed to the handlersender (the client-side RadTabStrip object)
                        eventArgs with two properties 
                        tab - the instance of the selected tabdomEvent - the browser DOM event

###  OnClientReordering `String`

###  OnClientReordered `String`

###  OnClientTabDragStart `String`

###  OnClientTabSelecting `String`

Gets or sets a value indicating the client-side event handler that is called just
            prior to selecting a tab.

#### Remarks
Use the OnClientTabSelecting property to specify a
                JavaScript function that will be executed prior to tab selecting - either by
                left-clicking it with a mouse or hitting enter after tabbing to that tab. You can
                cancel that event (prevent tab selecting) by seting the cancel property of the event argument to true.
            	Two parameters are passed to the handlersender (the client-side RadTabStrip object)
                        eventArgs with one property 
                        tab - the instance of the selected tabcancel - whether to cancel the event

###  OnClientMouseOver `String`

Gets or sets a value indicating the client-side event handler that is called when
            the mouse hovers a tab in the RadTabStrip control.

#### Remarks
Use the OnClientMouseOver property to specify a JavaScript
                function that is called when the user hovers a tab with the mouse.Two parameters are passed to the handler:sender (the client-side RadTabStrip object);
                        eventArgs with two properties 
                        tab - the instance of the tab that is being hovereddomEvent - the instance of the browser event.

###  OnClientMouseOut `String`

Gets or sets a value indicating the client-side event handler that is called when
            the mouse leaves a tab in the RadTabStrip control.

#### Remarks
Use the OnClientMouseOut property to specify a JavaScript
                function that is executed whenever the user moves the mouse
                away from a particular tab in the RadTabStrip control.Two parameters are passed to the handler:sender (the client-side RadTabStrip
                    object);
                        eventArgs with two properties:tab - the instance of the tab we are moving
                            away from;domEvent - the instance of the browser
                            event.

###  OnClientTabUnSelected `String`

Gets or sets a value indicating the client-side event handler that is called
            after a tab is unselected (i.e. the user has selected another tab).

#### Remarks
Use the OnClientTabUnSelected property to specify a
                JavaScript function that is executed after a tab is
                unselected.Two parameters are passed to the handler:sender (the client-side RadTabStrip
                    object);
                        eventArgs with one property:tab - the instance of the tab which is
                            unselected;

###  OnClientLoad `String`

Gets or sets the name of the javascript function called when the control is fully
            initialized on the client side.

#### Remarks
Use the OnClientLoad property to specify a JavaScript
                function that is executed after the control is initialized on the client side.
                A single parameter is passed to the handler, which is the
                client-side RadTabStrip object.

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

Populates the RadTabStrip control from external XML file.

#### Remarks
The newly added items will be appended after any existing ones.

#### Parameters

#### xmlFileName `System.String`

The name of the XML file.

#### Returns

`System.Void` 

###  GetAllTabs

Gets a linear list of all tabs in the RadTabStrip control.

#### Returns

`System.Collections.Generic.IList`1` An IList object containing 
            	all tabs in the current RadTabStrip control.

###  FindTabByUrl

Searches the RadTabStrip control for the first
                RadTab whose NavigateUrl
                property is equal to the specified value.

#### Parameters

#### url `System.String`

The URL to search for.

#### Returns

`Telerik.Web.UI.RadTab` A RadTab whose NavigateUrl property is equal to the specifed 
            	value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindTabByValue

Searches the RadTabStrip control for the first
                RadTab whose Value property is equal
                to the specified value.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadTab` A RadTab whose Value property is equal to the specifed 
            	value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindTabByValue

Searches the RadTabStrip control for the first
                RadTab whose Value property is equal
                to the specified value.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadTab` A RadTab whose Value property is equal to the specifed 
            	value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindTabByText

Searches the RadTabStrip control for the first
                RadTab whose Text property is equal to
                the specified value.

#### Parameters

#### text `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadTab` A RadTab whose Text property is equal
                to the specified value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindTabByText

Searches the RadTabStrip control for the first
                RadTab whose Text property is equal to
                the specified value.

#### Parameters

#### text `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadTab` A RadTab whose Text property is equal
                to the specified value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindTab

Returns  the first RadTab 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadTab}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadTab` 

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

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

