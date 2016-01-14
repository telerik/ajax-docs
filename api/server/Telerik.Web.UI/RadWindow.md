---
title: Telerik.Web.UI.RadWindow
page_title: Telerik.Web.UI.RadWindow
description: Telerik.Web.UI.RadWindow
---

# Telerik.Web.UI.RadWindow

Telerik RadWindow

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadWindowBase
* Telerik.Web.UI.RadWindow : IMarkableStateManager, INamingContainer, IStateManager

## Properties

###  Animation `WindowAnimation`

Get/Set the animation effect of the RadWindow

###  AnimationDuration `WindowAnimation`

Gets/Sets the duration of the animation in milliseconds.

###  AriaSettings `WindowWaiAriaSettings`

Gets the object that controls the WAI-ARIA settings applied on the control's element.

###  AutoSize `Boolean`

Gets or sets a value indicating whether the window will automatically resize itself according to its content or not.

###  AutoSizeBehaviors `WindowBehaviors`

Get/Set the auto-size behavior of the RadWindow

###  Behavior `WindowBehaviors`

This property is obsolete. Please use Behaviors instead.

###  Behaviors `WindowBehaviors`

Gets or sets a value indicating the allowed behaviors of this RadWindow/RadWindowManager - if resizing, maximizing, minimizing, etc. is available.
            Each behavior is added to a comma separated list in the markup and with a logical OR statement in the code-behind.

###  CenterIfModal `Boolean`

Gets or sets a value indicating whether a modal RadWindow, should be centered automatically or not.

###  ClientCallBackFunction `String`

Gets or sets the client callback function that will be called when a window
            dialog is being closed.
            This property is obsolete. Please use OnclientClose instead. For more information
            visit http://www.telerik.com/help/aspnet-ajax/window-programming-using-radwindow-as-dialog.html

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ContentContainer `SingleTemplateContainer`

Gets the control, where the ContentTemplate will be instantiated in. You can add controls programmatically here.

#### Remarks
You can use this property to programmatically add controls to the content area.
            If you add controls to the ContentContainer the NavigateUrl property will be ignored.

###  ContentTemplate `ITemplate`

Gets or sets the System.Web.UI.ITemplate that contains the controls which will be 
            placed in the control content area.

#### Remarks
You cannot set this property twice, or when you added controls to the ContentContainer. If you set
            ContentTemplate the NavigateUrl property will be ignored.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DestroyOnClose `Boolean`

Gets or sets a value indicating whether the RadWindow will be disposed and made inaccessible once it is closed.
            If property is set to true, the next time a window with this ID is requested, a new window with default settings is created and returned.

#### Remarks
This applies to the client-side objects and markup only. The server-side Windows collection will not be affected for the RadWindowManager.

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

###  EnableShadow `Boolean`

Gets or sets a value indicating whether the RadWindow should have a shadow.

###  Height `Unit`

Get/Set the Height of the RadWindow in pixels.

###  IconUrl `String`

Gets or sets the url of the icon in the upper left corner of the
            RadWindow title bar.

###  InitialBehavior `WindowBehaviors`

This property is obsolete. Please use InitialBehaviors instead.

###  InitialBehaviors `WindowBehaviors`

Gets or sets a value indicating the initial behavior of the RadWindow - most useful to specify an initially minimized, maximized or pinned window.

#### Remarks
For more information see this help article:
            http://www.telerik.com/help/aspnet-ajax/window-behavior-initial-window-state.html

###  IsSkinSet `String`

For internal use.

###  KeepInScreenBounds `Boolean`

Gets or sets a value indicating whether the RadWindow will stay in the visible viewport of the browser window.

###  Left `Unit`

Gets or sets the horizontal distance (in pixels) from the left edge of browser viewport, or from the top left corner of the OffsetElement (if set).
            It is not applicable for a Modal RadWindow, which is always centered.

###  Localization `RadWindowLocalization`

Get or set the localization strings for the RadWindow via the inner properties.

###  MaxHeight `Unit`

Get/Set the maximum Height of the RadWindow in pixels

###  MaxWidth `Unit`

Get/Set the maximum Width of the RadWindow in pixels.

###  MinHeight `Unit`

Get/Set the minimum Height of the RadWindow in pixels.

###  MinimizeIconUrl `String`

Gets or sets the url of the minimized icon of the
            RadWindow.

###  MinimizeZoneID `String`

Gets or sets the id (ClientID if a runat=server is used) of a html element where
            the windows will be "docked" when minimized.

###  MinWidth `Unit`

Get/Set the minimum Width of the RadWindow in pixels.

###  Modal `Boolean`

Gets or sets a value indicating whether the RadWindow is modal or not.

###  NavigateUrl `String`

Specifies the URL that will originally be loaded in the
            RadWindow (can be changed on the client).

###  OffsetElementID `String`

Gets or sets the id (ClientID if a runat=server is used) of a html element, whose
            left and top position will be used as 0,0 of the RadWindow object when it is first
            shown.

###  OnClientActivate `String`

Gets or sets the name of the client-side JavaScript function that is called when
            the RadWindow control becomes the active visible window.

#### Remarks
If specified, the OnClientActivateclient-side event handler is called when the RadWindow
                control becomes the active visible window  Two parameters are passed to the handler:sender, the RadWindow object.args, an event arguments object.

###  OnClientAutoSizeEnd `Boolean`

Gets or sets the name of the client-side JavaScript function that executes when RadWindow AutoSize has finished.

###  OnClientBeforeClose `String`

Gets or sets the name of the client-side JavaScript function that is called 
            just before the RadWindow is closed. The event can be canceled.

#### Remarks
If specified, the OnClientClosingclient-side event handler that is called 
            just before the window is hidden. Two parameters are passed to the handler:sender, the RadWindow object.args.This event can be canceled.

###  OnClientBeforeShow `String`

Gets or sets the name of the client-side JavaScript function that is called
            just before the RadWindow is shown. The event can be canceled.

#### Remarks
If specified, the OnClientBeforeShowclient-side event handler that is called 
            just before the window is shown. Two parameters are passed to the handler:sender, the RadWindow object.args, an event arguments object.This event can be canceled.

###  OnClientClose `String`

Gets or sets the name of the client-side JavaScript function that is called when the RadWindow is closed.

#### Remarks
If specified, the OnClientCloseclient-side event handler that is called 
            after the window is hidden. Two parameters are passed to the handler:sender, the RadWindow object.args.This event cannot be canceled.

###  OnClientCommand `String`

Gets or sets the name of the client-side JavaScript function that executes when a RadWindow command (Restore, Minimize, Maximize, Pin On, Pin Off, Reload) is raised.

###  OnClientDragEnd `String`

Gets or sets the name of the client-side JavaScript function that executes when a RadWindow DragEnd event is raised.

###  OnClientDragStart `String`

Gets or sets the name of the client-side JavaScript function that executes when a RadWindow DragStart event is raised.

###  OnClientPageLoad `String`

Gets or sets the name of the client-side JavaScript function that is called 
            when the page inside the RadWindow object completes loading.

#### Remarks
If specified, the OnClientPageLoadclient-side event handler that is called 
            when the page inside the RadWindow object completes loading. Two parameters are passed to the handler:sender, the RadWindow object.args, an event arguments object.

###  OnClientResize `String`

This property is now obsolete. Please use the OnClientResizeEnd property instead.

###  OnClientResizeEnd `String`

Gets or sets the name of the client-side JavaScript function that executes when a RadWindow Resize event is raised.

###  OnClientResizeStart `String`

Gets or sets the name of the client-side JavaScript function that executes when a RadWindow ResizeStart event is raised.

###  OnClientShow `String`

Gets or sets the name of the client-side JavaScript function that is called when the RadWindow is shown.

#### Remarks
If specified, the OnClientShowclient-side event handler is called after the window is shown
             Two parameters are passed to the handler:sender, the RadWindow object.args, an event arguments object.This event cannot be canceled.

###  Opacity `Int32`

Gets or sets a value indicating what should the opacity of the RadWindow be. The value must be between 0 (transparent) and 100 (opaque).

###  OpenerElementID `String`

Gets or sets the id (ClientID if a runat=server is used) of a html element that will open the RadWindow when clicked.

###  Overlay `Boolean`

Gets or sets a value indicating whether the RadWindow will create an overlay element to ensure it will be displayed over a flash element.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  ReloadOnShow `Boolean`

Gets or sets a value indicating whether the page that is loaded in the RadWindow should be loaded every time from the server or 
            will leave the browser default behavior.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RestrictionZoneID `String`

Gets or sets the id (ClientID if a runat=server is used) of a html element in which
            the RadWindow will be able to move. This element must have explicit dimensions in pixels and they
            must be sufficient to contain the RadWindow.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  Shortcuts `WindowShortcutCollection`

Gets the collection of shortcuts which are specified for the current RadWindow/RadWindowManager.
            Allows you to add shortcuts programmatically.

###  ShowContentDuringLoad `Boolean`

Gets or sets a value indicating whether the page that is loaded
            in the window should be shown during the loading process, or when it has finished loading.

#### Remarks
Should be kept to true when loading files in the RadWindow (e.g. PDFs) because in this case the page life cycle is not the same and
            the loading sign may never be hidden.

###  ShowOnTopWhenMaximized `Boolean`

Gets or sets a value indicating whether the maximized window should have the biggest z-index

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  TabIndex `Int16`

Gets or sets the TabIndex of the RadWindow control.

###  Title `String`

Get/Set a title for the RadWindow

###  Top `Unit`

Gets or sets the vertical distance (in pixels) from the top edge of browser viewport, or from the top left corner of the OffsetElement (if set).
            It is not applicable for a Modal RadWindow, which is always centered.

###  VisibleOnPageLoad `Boolean`

Gets or sets a value indicating whether the RadWindow will open automatically when its parent [aspx] page is loaded on the client.

#### Remarks
Also applies for AJAX requests. For showing a RadWindow once from the server examine this help article:
            http://www.telerik.com/help/aspnet-ajax/radwindow-troubleshooting-opening-from-server.html

###  VisibleStatusbar `Boolean`

Gets or sets a value indicating whether the RadWindow has a visible status bar or
            not.

###  VisibleTitlebar `String`

Gets or sets a value indicating whether the RadWindow has a title bar visible.

###  Width `Unit`

Get/Set the Width of the RadWindow in pixels.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

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

