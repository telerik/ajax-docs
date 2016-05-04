---
title: Telerik.Web.UI.RadDock
page_title: Telerik.Web.UI.RadDock
description: Telerik.Web.UI.RadDock
---

# Telerik.Web.UI.RadDock

RadDock is a control, which enables the developers to move, dock, 
            expand/collapse any DHTML/ASP.NET content

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadDock : INamingContainer, IPostBackEventHandler

## Properties

###  AllowedZones `String[]`

Specifies the UniqueNames of the RadDockZone controls, where
            the RadDock control will be allowed to dock.

###  AutoPostBack `Boolean`

Gets or sets a value, indicating whether the control will initiate postback
            when it is docked/undocked or its position changes. The default value is false.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  Closed `Boolean`

Gets or sets a value, indicating whether the control is closed (style="display:none;").

#### Remarks
When the value of this property is true, the control will be hidden, but its HTML will 
            be rendered on the page. The default value is false.

###  CloseText `String`

Gets or sets the tooltip of the CloseCommand when the corresponding 
            property was not explicitly set on the command object.

###  Collapsed `Boolean`

Gets or sets a value, indicating whether the control is collapsed.

#### Remarks
When the value of this property is true, the content area of the control 
            will not be visible. The default value is false.

###  CollapseText `String`

Gets or sets the tooltip of the ExpandCollapseCommand when the dock
            is not collapsed and the corresponding property was not explicitly set 
            on the command object.

###  Commands `DockCommandCollection`

Gets a collection of DockCommand objects representing the individual commands within the control titlebar.

#### Remarks
Use the Commands collection to programmatically control the commands buttons within the control titlebar.

###  CommandsAutoPostBack `Boolean`

Gets or sets a value, indicating whether the control will initiate postback
            when its command items are clicked. The default value is false.

###  ContentContainer `Panel`

Gets the control, where the ContentTemplate will be instantiated in.

#### Remarks
You can use this property to programmatically add controls to the content area. If you add controls
            to the ContentContainer the Text property will be ignored.

###  ContentTemplate `ITemplate`

Gets or sets the System.Web.UI.ITemplate that contains the controls which will be 
            placed in the control content area.

#### Remarks
You cannot set this property twice, or when you added controls to the ContentContainer. If you set
            ContentTemplate the Text property will be ignored.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DefaultCommands `DockCommandCollection`

Gets or sets the value, defining the commands which will appear
            in the RadDock titlebar when the commands collection is not modified. The default value is Close and ExpandCollapse.

###  DockHandle `DockHandle`

Gets or sets the value, defining the behavior of the control titlebar and grips.
            The default value is TitleBar.

###  DockMode `DockMode`

Gets or sets a value, indicating whether the control could be left undocked.

###  DockZoneID `String`

Gets the ClientID of the RadDockZone, in which the control is docked. When the control is undocked, 
            this property returns string.Empty.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAnimation `Boolean`

Gets or sets a value, indicating whether the control will have animation.

#### Remarks
When the value of this property is true, the RadDock will be moved, expanded, collapsed,
            showed and hid with animations. The default value is false.

###  EnableDrag `Boolean`

Gets or sets a value, indicating whether the control could be dragged.

#### Remarks
When the value of this property is true, the control could be dragged with the mouse.
            The default value is true.

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

###  EnableRoundedCorners `Boolean`

Gets or sets a value, indicating whether the control will be with rounded corners.

#### Remarks
When the value of this property is true, the control will have rounded corners. The default value is false.

###  ExpandedHeight `Unit`

Gets or sets the expanded height of the RadDock control.

###  ExpandText `String`

Gets or sets the tooltip of the ExpandCollapseCommand when the dock
            is collapsed and the corresponding property was not explicitly set 
            on the command object.

###  ForbiddenZones `String[]`

Specifies the UniqueNames of the RadDockZone controls, where
            the RadDock control will NOT be allowed to dock.

###  Height `Unit`

Gets or sets the height of the RadDock control.

###  Index `Int32`

Gets the position of the RadDock control in its parent zone. If undocked returns -1.

###  IsSkinSet `String`

For internal use.

###  Left `Unit`

Gets or sets the horizontal position of the RadDock control in pixels. This 
            property is ignored when the RadDock control is docked into a RadDockZone. The default value is "0px".

###  OnClientCommand `String`

Gets or sets the client-side script that executes when a RadDock Command event is raised.

###  OnClientDockPositionChanged `String`

Gets or sets the client-side script that executes when the RadDock control changes its position.

###  OnClientDockPositionChanging `String`

Gets or sets the client-side script that executes when the RadDock control is dropped onto a zone
            before it changes its position.

###  OnClientDrag `String`

Gets or sets the client-side script that executes when a RadDock Drag event is raised.

###  OnClientDragEnd `String`

Gets or sets the client-side script that executes when a RadDock DragEnd event is raised.

###  OnClientDragStart `String`

Gets or sets the client-side script that executes when a RadDock DragStart event is raised.

###  OnClientInitialize `String`

Gets or sets the client-side script that executes after the RadDock client-side obect is initialized.

###  OnClientLoad `String`

Gets or sets the client-side script that executes after the RadDock client-side object is loaded.

###  OnClientResizeEnd `String`

Gets or sets the client-side script that executes when a RadDock ResizeEnd event is raised.

###  OnClientResizeStart `String`

Gets or sets the client-side script that executes when a RadDock ResizeStart event is raised.

###  Pinned `Boolean`

Gets or sets a value, indicating whether the control is pinned.

#### Remarks
When the value of this property is true, the control will retain its position
            if the page scrolled. The default value is false.

###  PinText `String`

Gets or sets the tooltip of the PinUnpinCommand when the dock
            is not pinned and the corresponding property was not explicitly set 
            on the command object.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  Resizable `Boolean`

Gets or sets a value, indicating whether the control is resizable.

#### Remarks
When the value of this property is true, the control will be resizable. The default value is false.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Tag `String`

Gets or sets the additional data, which could be saved in the DockState.
            The default value is an empty string.

###  Text `String`

Gets or sets the text which will appear in the control content area. If the ContentTemplate
            or the ContentContainer contain any controls, the value of this property is ignored. The default value is an empty string.

###  Title `String`

Gets or sets the text which will appear in the control titlebar area. If the TitlebarTemplate
            or the TitlebarContainer contain any controls, the value of this property is ignored. The default value is an empty string.

###  TitlebarContainer `String`

Gets the control, in which the TitlebarTemplate will be instantiated.

#### Remarks
You can use this property to programmatically add controls to the titlebar. If you add controls
            to the TitlebarContainer the Title property will be ignored.

###  TitlebarTemplate `String`

Gets or sets the System.Web.UI.ITemplate that contains the controls which will be 
            placed in the control titlebar.

#### Remarks
You cannot set this property twice, or when you added controls to the TitlebarContainer. If you set
            TitlebarTemplate the Title property will be ignored.

###  Top `Unit`

Gets or sets the vertical position of the RadDock control in pixels. This 
            property is ignored when the RadDock control is docked into a RadDockZone.
            The default value is "0px".

###  UniqueName `String`

Gets or sets the unique name of the control, which allows the parent RadDockLayout to
            automatically manage its position. If this property is not set, the control ID will be
            used instead. RadDockLayout will throw an exception if it finds two RadDock controls with
            the same UniqueName.

###  UnpinText `String`

Gets or sets the tooltip of the PinUnpinCommand when the dock
            is pinned and the corresponding property was not explicitly set 
            on the command object.

###  Width `Unit`

Gets or sets the width of the RadDock control. The default value is "300px".

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ApplyState

Applies the data from the supplied DockState object.

#### Parameters

#### state `Telerik.Web.UI.DockState`

A DockState object, containing data about the state, which should
            be applied on the RadDock control.

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  Dock

Docks the RadDock control in the zone with ClientID equal to dockZoneID.

#### Remarks
The RadDock control should be placed into a RadDockLayout in order this 
            method to work. It is not necessary for the layout to be a direct parent of the 
            RadDock control.

#### Parameters

#### dockZoneID `System.String`

The ClientID of the RadDockZone control, where
            the control should be docked.

#### Returns

`System.Void` 

###  Dock

Docks the RadDock control in the specified RadDockZone.

#### Parameters

#### dockZone `Telerik.Web.UI.RadDockZone`

The RadDockZone control in which the control should be docked.

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetState

Returns a DockState object, containing data about the current state
            of the RadDock control.

#### Returns

`Telerik.Web.UI.DockState` A DockState object, containing data about the current state
            of the RadDock control. This object could be passed to ApplyState()
            method.

###  GetUniqueName

Returns the unique name for the dock, based on the UniqueName and
            the ID properties.

#### Returns

`System.String` A string, containing the UniqueName property of the dock, or its 
            ID, if the UniqueName property is not set.

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

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

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

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  Undock

Removes the RadDock control from its parent RadDockZone.

#### Returns

`System.Void` 

