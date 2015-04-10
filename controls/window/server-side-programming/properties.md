---
title: Properties
page_title: Properties | UI for ASP.NET AJAX Documentation
description: Properties
slug: window/server-side-programming/properties
tags: properties
published: True
position: 0
---

# Properties



## RadWindow and RadWindowManager common properties:






>caption RadWindow and RadWindowManager common properties

| Name | Description |
| ------ | ------ |
| __Animation__ |Get/Set the animation effect of the RadWindow. Takes one of the members of the Telerik.Web.UI.WindowAnimation enumerator. The default value is None.|
| __AnimationDuration__ |Gets/Sets the duration of the animation in milliseconds.|
| __AutoSize__ |Gets or sets a value indicating whether the window will automatically resize itself according to its content page or not. (Inherited from RadWindowBase)|
| __AutoSizeBehaviors__ |Get/Set the autosize behavior of the RadWindow. Takes a combination of the members of the Telerik.Web.UI.WindowAutoSizeBehaviors members separated by commas in the markup and with logical OR in the code-behind.|
| __Behavior__ |Obsolete. Use __Behaviors__ instead.|
| __Behaviors__ |Gets or sets a value indicating the allowed behaviors of this RadWindow/RadWindowManager - if resizing, maximizing, minimizing, etc. is available. Each behavior is added to a comma separated list in the markup and with a logical OR statement in the code-behind. The property takes a combination of members of the the Telerik.Web.UI.WindowBehaviors enumerator.|
| __CenterIfModal__ |Specifies whether a modal RadWindow is centered automatically or not. True by default. If set to false the Top and Left properties can take effect even for a modal RadWindow.|
| __ClientCallBackFunction__ |This property is obsolete. Please use OnClientClose instead. For more information visit the[Using RadWindow as a Dialog]({%slug window/how-to/using-radwindow-as-a-dialog%})topic. (Inherited from RadWindowBase)Gets or sets the client callback function that will be called when a window dialog is being closed.|
| __ClientID__ |(Inherited from System.Web.UI.Control)|
| __Controls__ |(Inherited from System.Web.UI.Control)|
| __ControlStyle__ |(Inherited from System.Web.UI.WebControls.WebControl)|
| __ControlStyleCreated__ |(Inherited from System.Web.UI.WebControls.WebControl)|
| __CssClass__ |(Inherited from RadWebControl)|
| __DestroyOnClose__ |Gets or sets a value indicating whether the window will be disposed and made inaccessible once it is closed. If property is set to true, the next time a window with this ID is requested, a new window with default settings is created and returned. __DestroyOnClose does not have effect with content templates__ . (Inherited from RadWindowBase).|
| __EnableAjaxSkinRendering__ |Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests (Inherited from RadWebControl)|
| __EnableAriaSupport__ |When set to true enables support for WAI-ARIA|
| __Enabled__ |(Inherited from RadWebControl)|
| __EnableEmbeddedBaseStylesheet__ |Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not. (Inherited from RadWebControl)|
| __EnableEmbeddedScripts__ |Gets or sets the value, indicating whether to render script references to the embedded scripts or not. (Inherited from RadWebControl)|
| __EnableEmbeddedSkins__ |Gets or sets the value, indicating whether to render links to the embedded skins or not. (Inherited from RadWebControl)|
| __EnableShadow__ |Gets or sets a value indicating whether the RadWindow should have a shadow.|
| __EnableTheming__ |(Inherited from RadWebControl)|
| __EnableViewState__ |(Inherited from System.Web.UI.Control)|
| __Height__ |Get/Set the Height of the RadWindow in pixels.|
| __IconUrl__ |Gets or sets the url of the icon in the upper left corner of the RadWindow titlebar. The dimensions of the image must be 16x16 pixels.|
| __ID__ |(Inherited from System.Web.UI.Control)|
| __InitialBehavior__ |Obsolete. Use __InitialBehaviors__ instead. (Inherited from RadWindowBase)|
| __InitialBehaviors__ |Gets or sets a value indicating the initial behavior of this object - most useful to specify an initially minimized, maximized or pinned window. (Inherited from RadWindowBase)|
| __IsSkinSet__ |For internal use. (Inherited from RadWebControl)|
| __KeepInScreenBounds__ |Gets or sets a value indicating whether the window will stay in the visible viewport of the browser window. (Inherited from RadWindowBase)|
| __Left__ |Gets or sets the horizontal distance (in pixels) from the left edge of browser viewport, or from the top left corner of the OffsetElement (if set). It is not applicable for a Modal RadWindow, which is always centered.|
| __Localization__ |Get or set the localization strings for the RadWindow via the inner properties.|
| __MaxHeight__ |Get/Set the maximum Height of the RadWindow in pixels|
| __MaxWidth__ |Get/Set the maximum Width of the RadWindow in pixels.|
| __MinHeight__ |Get/Set the minimum Height of the RadWindow in pixels.|
| __MinWidth__ |Get/Set the minimum Width of the RadWindow in pixels.|
| __MinimizeIconUrl__ |Gets or sets the url of the minimized icon of the RadWindow. (Inherited from RadWindowBase)|
| __MinimizeZoneID__ |Gets or sets the id (ClientID if a runat=server is used) of a html element where the windows will be "docked" when minimized. (Inherited from RadWindowBase)|
| __Modal__ |Gets or sets a value indicating whether a dialog is modal or not. (Inherited from RadWindowBase)|
| __NamingContainer__ |(Inherited from System.Web.UI.Control)|
| __OffsetElementID__ |Gets or sets the id (ClientID if a runat=server is used) of a html element, whose left and top position will be used as 0,0 of the RadWindow object when it is first shown. (Inherited from RadWindowBase)|
| __OnClientActivate__ |Gets or sets a value indicating the client-side event handler that is called when the __RadWindow__ control becomes the active visible window. (Inherited from RadWindowBase)|
| __OnClientAutoSizeEnd__ |Gets or sets the client-side script that executes when RadWindow AutoSize has finished|
| __OnClientBeforeClose__ |Gets or sets a value indicating the client-side event handler that is called when the RadWindow is closing. (Inherited from RadWindowBase)|
| __OnClientBeforeShow__ |Gets or sets a value indicating the client-side event handler that is called just before the RadWindow is shown.|
| __OnClientClose__ |Gets or sets a value indicating the client-side event handler that is called when slide has ended. (Inherited from RadWindowBase)|
| __OnClientCommand__ |Gets or sets the name of the client-side JavaScript function that executes when a RadWindow command (Restore, Minimize, Maximize, Pin On, Pin Off, Reload is raised.|
| __OnClientDragEnd__ |Gets or sets the client-side script that executes when a RadWindow DragEnd event is raised (Inherited from RadWindowBase)|
| __OnClientDragStart__ |Gets or sets the client-side script that executes when a RadWindow DragStart event is raised (Inherited from RadWindowBase)|
| __OnClientPageLoad__ |Gets or sets a value indicating the client-side event handler that is called when the page inside the RadWindow object completes loading. (Inherited from RadWindowBase)|
| __OnClientResize__ |(Inherited from RadWindowBase)|
| __OnClientResizeEnd__ |Gets or sets the client-side script that executes when a RadWindow Resize event is raised (Inherited from RadWindowBase)|
| __OnClientResizeStart__ |Gets or sets the client-side script that executes when a RadWindow ResizeStart event is raised (Inherited from RadWindowBase)|
| __OnClientShow__ |Gets or sets a value indicating the client-side event handler that is called before the sliding is started. (Inherited from RadWindowBase)|
| __Opacity__ |Gets or sets a value indicating what should be the opacity of the RadWindow. The value must be between 0 (transparent) and 100 (opaque). (Inherited from RadWindowBase)|
| __OpenerElementID__ |Gets or sets the id (ClientID if a runat=server is used) of a html element that will open the RadWindow when clicked.|
| __Overlay__ |Gets or sets a value indicating whether the window will create an overlay element. (Inherited from RadWindowBase)|
| __RegisterWithScriptManager__ |Gets or sets the value, indicating whether to register with the ScriptManager control on the page. (Inherited from RadWebControl)|
| __ReloadOnShow__ |Gets or sets a value indicating whether the page that is loaded in the window should be loaded every time from the server or will leave the browser default behavior. __ReloadOnShow does not have effect with content templates__ . (Inherited from RadWindowBase)|
| __RestrictionZoneID__ |Gets or sets the id (ClientID if a runat=server is used) of a html element in which the RadWindow will be able to move. This element must have explicit dimensions in pixels and they must be sufficient to contain the RadWindow.|
| __Shortcuts__ |Gets the collection of shortcuts which are specified for the current RadWindow/RadWindowManager. Allows you to add shortcuts programmatically.|
| __ShowContentDuringLoad__ |Gets or sets a value indicating whether the page that is loaded in the window should be shown during the loading process, or when it has finished loading. __ShowContenDuringLoad does not have effect with content templates__ . (Inherited from RadWindowBase).|
| __ShowOnTopWhenMaximized__ |Gets or sets a value indicating whether the maximized window should have the biggest z-index (Inherited from RadWindowBase)|
| __Skin__ |Gets or sets the skin name for the control user interface. (Inherited from RadWebControl)|
| __SkinID__ |(Inherited from RadWebControl)|
| __TabIndex__ |(Inherited from RadWebControl)|
| __TemplateControl__ |(Inherited from System.Web.UI.Control)|
| __TemplateSourceDirectory__ |(Inherited from System.Web.UI.Control)|
| __Title__ |Get/Set a title for the window (Inherited from RadWindowBase)|
| __Top__ |Gets or sets the vertical distance (in pixels) from the top edge of browser viewport, or from the top left corner of the OffsetElement (if set).. It is not applicable for a Modal RadWindow, which is always centered.|
| __UniqueID__ |(Inherited from System.Web.UI.Control)|
| __Visible__ |(Inherited from RadWebControl)|
| __VisibleOnPageLoad__ |Gets or sets a value indicating whether the window will open automatically when its parent [aspx] page is loaded on the client. Used for showing RadWindow from server. (Inherited from RadWindowBase)|
| __VisibleStatusbar__ |Gets or sets a value indicating whether the window has a visible status bar or not. (Inherited from RadWindowBase)|
| __VisibleTitlebar__ |Gets or sets a value indicating whether the window has a titlebar visible. (Inherited from RadWindowBase)|
| __Width__ |Get/Set the Width of the RadWindow in pixels.|



## RadWindow specific properties:


>caption RadWindow specific properties

| Name | Description |
| ------ | ------ |
| __NavigateUrl__ |Specifies the URL that will originally be loaded in the RadWindow (can be changed on the client).|
| __ContentContainer__ |Gets the control, where the ContentTemplate will be instantiated in. You can add controls programmatically here. If you add controls to the ContentContainer the NavigateUrl property will be ignored.|
| __ContentTemplate__ |Gets or sets the System.Web.UI.ITemplate that contains the controls which will be placed in the control content area.You cannot set this property twice, or when you added controls to the ContentContainer. If you set ContentTemplate, the NavigateUrl property will be ignored.|







## RadWindowManager specific properties:


>caption RadWindowManager specific properties

| Name | Description |
| ------ | ------ |
| __AlertTemplate__ |This property allows to specify the HTML for the alert popup, which will override the default alert template. More information on the subject can be found in the[Changing the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%})topic.|
| __ConfirmTemplate__ |This property allows to specify the HTML for the confirm popup, which will override the default confirm template. More information on the subject can be found in the[Changing the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%})topic.|
| __PromptTemplate__ |This property allows to specify the HTML for the prompt popup, which will override the default prompt template. More information on the subject can be found in the[Changing the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%})topic.|
| __Windows__ |Gets a collection of RadWindow objects|



## RadWindow and RadWindowManager common enumerations


| Name | Values |
| ------ | ------ |
| __Telerik.Web.UI.WindowAnimation__ |

* None

* Resize

* Fade

* Slide

* FlyIn|
| __Telerik.Web.UI.WindowAutoSizeBehaviors__ |

* Width

* WidthProportional

* Height

* HeightProportional

* Default = WidthProportional | HeightProportional|
| __Telerik.Web.UI.WindowBehaviors__ |

* None

* Resize

* Minimize

* Close

* Pin

* Maximize

* Move

* Reload

* Default = (Minimize | Maximize | Close | Pin | Resize | Move | Reload)|

# See Also

 * [How to Change the Dialog Templates]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%})

 * [Examples]({%slug window/server-side-programming/examples%})

 * [Using RadWindow as a Dialog]({%slug window/how-to/using-radwindow-as-a-dialog%})
