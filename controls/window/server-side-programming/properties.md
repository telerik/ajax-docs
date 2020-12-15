---
title: Properties
page_title: Properties | RadWindow for ASP.NET AJAX Documentation
description: Properties
slug: window/server-side-programming/properties
tags: properties
published: True
position: 0
---

# Properties

For a detailed list with the server-side properties and methods of the control, see the [Server-Side API of the RadWindow class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadWindow).

## RadWindow and RadWindowManager common properties:

>caption RadWindow and RadWindowManager common properties

| Name | Description |
| ------ | ------ |
| **Animation** |Get/Set the animation effect of the RadWindow. Takes one of the members of the Telerik.Web.UI.WindowAnimation enumerator. The default value is None.|
| **AnimationDuration** |Gets/Sets the duration of the animation in milliseconds.|
| **AutoSize** |Gets or sets a value indicating whether the window will automatically resize itself according to its content page or not. (Inherited from RadWindowBase)|
| **AutoSizeBehaviors** |Get/Set the autosize behavior of the RadWindow. Takes a combination of the members of the Telerik.Web.UI.WindowAutoSizeBehaviors members separated by commas in the markup and with logical OR in the code-behind.|
| **Behavior** |Obsolete. Use **Behaviors** instead.|
| **Behaviors** |Gets or sets a value indicating the allowed behaviors of this RadWindow/RadWindowManager - if resizing, maximizing, minimizing, etc. is available. Each behavior is added to a comma separated list in the markup and with a logical OR statement in the code-behind. The property takes a combination of members of the the Telerik.Web.UI.WindowBehaviors enumerator.|
| **CenterIfModal** |Specifies whether a modal RadWindow is centered automatically or not. True by default. If set to false the Top and Left properties can take effect even for a modal RadWindow.|
| **ClientCallBackFunction** |This property is obsolete. Please use OnClientClose instead. For more information visit the [Using RadWindow as a Dialog]({%slug window/how-to/using-radwindow-as-a-dialog%}) topic. (Inherited from RadWindowBase) Gets or sets the client callback function that will be called when a window dialog is being closed.|
| **ClientID** |(Inherited from System.Web.UI.Control)|
| **Controls** |(Inherited from System.Web.UI.Control)|
| **ControlStyle** |(Inherited from System.Web.UI.WebControls.WebControl)|
| **ControlStyleCreated** |(Inherited from System.Web.UI.WebControls.WebControl)|
| **CssClass** |(Inherited from RadWebControl)|
| **DestroyOnClose** |Gets or sets a value indicating whether the window will be disposed and made inaccessible once it is closed. If property is set to true, the next time a window with this ID is requested, a new window with default settings is created and returned. **DestroyOnClose does not have effect with content templates** . (Inherited from RadWindowBase).|
| **EnableAjaxSkinRendering** |Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests (Inherited from RadWebControl)|
| **EnableAriaSupport** |When set to true enables support for WAI-ARIA|
| **Enabled** |(Inherited from RadWebControl)|
| **EnableEmbeddedBaseStylesheet** |Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not. (Inherited from RadWebControl)|
| **EnableEmbeddedScripts** |Gets or sets the value, indicating whether to render script references to the embedded scripts or not. (Inherited from RadWebControl)|
| **EnableEmbeddedSkins** |Gets or sets the value, indicating whether to render links to the embedded skins or not. (Inherited from RadWebControl)|
| **EnableShadow** |Gets or sets a value indicating whether the RadWindow should have a shadow.|
| **EnableTheming** |(Inherited from RadWebControl)|
| **EnableViewState** |(Inherited from System.Web.UI.Control)|
| **Height** |Get/Set the Height of the RadWindow in pixels.|
| **IconUrl** |Gets or sets the url of the icon in the upper left corner of the RadWindow titlebar. The dimensions of the image must be 16x16 pixels.|
| **ID** |(Inherited from System.Web.UI.Control)|
| **InitialBehavior** |Obsolete. Use **InitialBehaviors** instead. (Inherited from RadWindowBase)|
| **InitialBehaviors** |Gets or sets a value indicating the initial behavior of this object - most useful to specify an initially minimized, maximized or pinned window. (Inherited from RadWindowBase)|
| **IsSkinSet** |For internal use. (Inherited from RadWebControl)|
| **KeepInScreenBounds** |Gets or sets a value indicating whether the window will stay in the visible viewport of the browser window. (Inherited from RadWindowBase)|
| **Left** |Gets or sets the horizontal distance (in pixels) from the left edge of browser viewport, or from the top left corner of the OffsetElement (if set). It is not applicable for a Modal RadWindow, which is always centered.|
| **Localization** |Get or set the localization strings for the RadWindow via the inner properties.|
| **MaxHeight** |Get/Set the maximum Height of the RadWindow in pixels|
| **MaxWidth** |Get/Set the maximum Width of the RadWindow in pixels.|
| **MinHeight** |Get/Set the minimum Height of the RadWindow in pixels.|
| **MinWidth** |Get/Set the minimum Width of the RadWindow in pixels.|
| **MinimizeIconUrl** |Gets or sets the url of the minimized icon of the RadWindow. (Inherited from RadWindowBase)|
| **MinimizeZoneID** |Gets or sets the id (ClientID if a runat=server is used) of a html element where the windows will be "docked" when minimized. (Inherited from RadWindowBase)|
| **Modal** |Gets or sets a value indicating whether a dialog is modal or not. (Inherited from RadWindowBase)|
| **NamingContainer** |(Inherited from System.Web.UI.Control)|
| **OffsetElementID** |Gets or sets the id (ClientID if a runat=server is used) of a html element, whose left and top position will be used as 0,0 of the RadWindow object when it is first shown. (Inherited from RadWindowBase)|
| **OnClientActivate** |Gets or sets a value indicating the client-side event handler that is called when the **RadWindow** control becomes the active visible window. (Inherited from RadWindowBase)|
| **OnClientAutoSizeEnd** |Gets or sets the client-side script that executes when RadWindow AutoSize has finished|
| **OnClientBeforeClose** |Gets or sets a value indicating the client-side event handler that is called when the RadWindow is closing. (Inherited from RadWindowBase)|
| **OnClientBeforeShow** |Gets or sets a value indicating the client-side event handler that is called just before the RadWindow is shown.|
| **OnClientClose** |Gets or sets a value indicating the client-side event handler that is called when slide has ended. (Inherited from RadWindowBase)|
| **OnClientCommand** |Gets or sets the name of the client-side JavaScript function that executes when a RadWindow command (Restore, Minimize, Maximize, Pin On, Pin Off, Reload is raised.|
| **OnClientDragEnd** |Gets or sets the client-side script that executes when a RadWindow DragEnd event is raised (Inherited from RadWindowBase)|
| **OnClientDragStart** |Gets or sets the client-side script that executes when a RadWindow DragStart event is raised (Inherited from RadWindowBase)|
| **OnClientPageLoad** |Gets or sets a value indicating the client-side event handler that is called when the page inside the RadWindow object completes loading. (Inherited from RadWindowBase)|
| **OnClientResize** |(Inherited from RadWindowBase)|
| **OnClientResizeEnd** |Gets or sets the client-side script that executes when a RadWindow Resize event is raised (Inherited from RadWindowBase)|
| **OnClientResizeStart** |Gets or sets the client-side script that executes when a RadWindow ResizeStart event is raised (Inherited from RadWindowBase)|
| **OnClientShow** |Gets or sets a value indicating the client-side event handler that is called before the sliding is started. (Inherited from RadWindowBase)|
| **Opacity** |Gets or sets a value indicating what should be the opacity of the RadWindow. The value must be between 0 (transparent) and 100 (opaque). (Inherited from RadWindowBase)|
| **OpenerElementID** |Gets or sets the id (ClientID if a runat=server is used) of a html element that will open the RadWindow when clicked.|
| **Overlay** |Gets or sets a value indicating whether the window will create an overlay element. (Inherited from RadWindowBase)|
| **RegisterWithScriptManager** |Gets or sets the value, indicating whether to register with the ScriptManager control on the page. (Inherited from RadWebControl)|
| **ReloadOnShow** |Gets or sets a value indicating whether the page that is loaded in the window should be loaded every time from the server or will leave the browser default behavior. **ReloadOnShow does not have effect with content templates** . (Inherited from RadWindowBase)|
| **RestrictionZoneID** |Gets or sets the id (ClientID if a runat=server is used) of a html element in which the RadWindow will be able to move. This element must have explicit dimensions in pixels and they must be sufficient to contain the RadWindow.|
| **Shortcuts** |Gets the collection of shortcuts which are specified for the current RadWindow/RadWindowManager. Allows you to add shortcuts programmatically.|
| **ShowContentDuringLoad** |Gets or sets a value indicating whether the page that is loaded in the window should be shown during the loading process, or when it has finished loading. **ShowContenDuringLoad does not have effect with content templates** . (Inherited from RadWindowBase).|
| **ShowOnTopWhenMaximized** |Gets or sets a value indicating whether the maximized window should have the biggest z-index (Inherited from RadWindowBase)|
| **Skin** |Gets or sets the skin name for the control user interface. (Inherited from RadWebControl)|
| **SkinID** |(Inherited from RadWebControl)|
| **TabIndex** |(Inherited from RadWebControl)|
| **TemplateControl** |(Inherited from System.Web.UI.Control)|
| **TemplateSourceDirectory** |(Inherited from System.Web.UI.Control)|
| **Title** |Get/Set a title for the window (Inherited from RadWindowBase)|
| **Top** |Gets or sets the vertical distance (in pixels) from the top edge of browser viewport, or from the top left corner of the OffsetElement (if set). It is not applicable for a Modal RadWindow, which is always centered.|
| **UniqueID** |(Inherited from System.Web.UI.Control)|
| **Visible** |(Inherited from RadWebControl)|
| **VisibleOnPageLoad** |Gets or sets a value indicating whether the window will open automatically when its parent [aspx] page is loaded on the client. Used for showing RadWindow from server. (Inherited from RadWindowBase)|
| **VisibleStatusbar** |Gets or sets a value indicating whether the window has a visible status bar or not. (Inherited from RadWindowBase)|
| **VisibleTitlebar** |Gets or sets a value indicating whether the window has a titlebar visible. (Inherited from RadWindowBase)|
| **Width** |Get/Set the Width of the RadWindow in pixels.|

## RadWindow specific properties:

>caption RadWindow specific properties

| Name | Description |
| ------ | ------ |
| **NavigateUrl** |Specifies the URL that will originally be loaded in the RadWindow (can be changed on the client).|
| **ContentContainer** |Gets the control, where the ContentTemplate will be instantiated in. You can add controls programmatically here. If you add controls to the ContentContainer the NavigateUrl property will be ignored.|
| **ContentTemplate** |Gets or sets the System.Web.UI.ITemplate that contains the controls which will be placed in the control content area.You cannot set this property twice, or when you added controls to the ContentContainer. If you set ContentTemplate, the NavigateUrl property will be ignored.|

## RadWindowManager specific properties:

>caption RadWindowManager specific properties

| Name | Description |
| ------ | ------ |
| **AlertTemplate** |This property allows to specify the HTML for the alert popup, which will override the default alert template. More information on the subject can be found in the [Changing the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%}) topic.|
| **ConfirmTemplate** |This property allows to specify the HTML for the confirm popup, which will override the default confirm template. More information on the subject can be found in the [Changing the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%}) topic.|
| **PromptTemplate** |This property allows to specify the HTML for the prompt popup, which will override the default prompt template. More information on the subject can be found in the [Changing the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%}) topic.|
| **Windows** |Gets a collection of RadWindow objects|

## RadWindow and RadWindowManager common enumerations


| Name | Values |
| ------ | ------ |
| **Telerik.Web.UI.WindowAnimation** |**None**; **Resize**; **Fade**; **Slide**; **FlyIn**;|
| **Telerik.Web.UI.WindowAutoSizeBehaviors** | **Width**; **WidthProportional**; **Height**; **HeightProportional**;  **Default = WidthProportional Or HeightProportional**|
| **Telerik.Web.UI.WindowBehaviors** | **None**; **Resize**; **Minimize**; **Close**; **Pin**; **Maximize**; **Move**; **Reload**; **Default = (Minimize Or Maximize Or Close Or Pin Or Resize Or Move Or Reload)**|

## See Also

 * [How to Change the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%})

 * [Examples]({%slug window/server-side-programming/examples%})

 * [Using RadWindow as a Dialog]({%slug window/how-to/using-radwindow-as-a-dialog%})
