---
title: Telerik.Web.UI.RadNotification
page_title: Telerik.Web.UI.RadNotification
description: Telerik.Web.UI.RadNotification
---

# Telerik.Web.UI.RadNotification

Telerik Notification control

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadNotification : INamingContainer

## Properties

###  SupportsRenderingMode `Boolean`

###  TagKey `HtmlTextWriterTag`

###  CssClassFormatString `String`

###  ContentTemplate `ITemplate`

Gets or sets the System.Web.UI.ITemplate that contains the controls which will be 
            placed in the control content area.

#### Remarks
You cannot set this property twice, or when you added controls to the ContentContainer. If you set
            ContentTemplate,  and  properties will be ignored.

###  NotificationMenu `RadNotificationContextMenu`

Gets the context title menu.

###  ContentContainer `SingleTemplateContainer`

Gets the control, where the ContentTemplate will be instantiated in. Controls can be added programmatically here.

#### Remarks
You can use this property to programmatically add controls to the content area. If you add controls
            to the ContentContainer the Text and ContentIcon properties will be ignored.

###  WebMethodName `String`

Gets or sets the web method name in the web service used to populate content.

###  WebMethodPath `String`

Gets or sets the path to the web service used to populate content.

###  WcfRequestMethod `XmlHttpPanelWcfRequestMethod`

Gets or sets the request method for WCF Service used to populate content GET, POST, PUT, DELETE.

###  WcfServicePath `String`

Gets or sets a string value that indicates the virtual path of the WCF Service used to populate content.

###  WcfServiceMethod `String`

Gets or sets a string value that indicates the WCF Service method used to populate content.

###  LoadContentOn `NotificationLoad`

Gets or sets when the content should be loaded.

#### Remarks
Works together with  and 
            properties to control how and when new content will be loaded.

###  AudioHandlerUrl `String`

Specifies the URL of the HTTPHandler that serves the notification sound

#### Remarks
The HTTPHandler should either be registered in the application configuration
            		file, or a file with the specified name should exist at the location, which
            		AudioHandlerUrl points to.
            	
            		If a file is to serve the files, it should inherit the class Telerik.Web.UI.WebResource

###  ShowInterval `Int32`

Gets or sets when the interval after which the notification will automatically show (in milliseconds).

#### Remarks
Use together with  and 
            properties to control how and when new content will be loaded.
            
            The counter is reset when the notification shows, not when it hides. In order to make sure there is a certain interval between the hiding and subsequent showing
            the value of the  must also be taken into account
            (considering  is set to false to ensure that user activity will not interfere with this logic).

###  UpdateInterval `Int32`

Gets or sets when the interval (in milliseconds) after which the notification will automatically update the content.

#### Remarks
Use together with  and 
            properties to control how and when new content will be loaded.

###  AutoCloseDelay `Int32`

Get/Set the delay after which the notification will hide if not explicitly closed.

#### Remarks
Setting the  property to true causes this timer to pause when the mouse is over the control.

###  VisibleTitlebar `Boolean`

Gets or sets a value indicating whether the notification has a visible titlebar.

###  TitleIcon `String`

Gets or sets the title icon (built-in or URL for a custom one).

#### Remarks
The size of this icon is 16x16 pixels. The list of built-in icons is as follows:
            infodeletedenyeditokwarningnoneThe built-in icons are not available when a custom skin is used for the control, because they are parts of the built-in skins.

###  ContentIcon `String`

Gets or sets the content icon (built-in or URL for a custom one).

#### Remarks
The size of this icon is 32x32 pixels. The list of built-in icons is as follows:
            infodeletedenyeditokwarningnoneThe built-in icons are not available when a custom skin is used for the control, because they are parts of the built-in skins. Also, if the 
            ContentTemplate is used this icon will not be shown.

###  ShowSound `String`

Gets or sets the sound to be played on show (built-in or URL for a custom one).

#### Remarks
infowarningok

###  ShowCloseButton `Boolean`

Gets or sets whether the close [X] button should be visible

###  CloseButtonToolTip `String`

Gets or sets the content of the close button tooltip

###  ShowTitleMenu `Boolean`

Gets or sets whether the icon for the title menu should be visible

###  TitleMenuToolTip `String`

Gets or sets  the content of the the tooltip for the title menu button

###  Position `NotificationPosition`

Get/Set the top and left position of the notification relative to the browser

###  Animation `NotificationAnimation`

Get/Set the animation effect of the notification

###  AnimationDuration `NotificationAnimation`

Sets/gets the duration of the animation in milliseconds. 500 by default.

###  OffsetX `Int32`

Get/Set the notification's horizontal offset. Works in cooperation with the  property.

###  OffsetY `Int32`

Get/Set the notification's vertical offset. Works in cooperation with the  property.

###  VisibleOnPageLoad `Boolean`

Gets or sets a value indicating whether the notification will open automatically when its parent [aspx] page is loaded on the client.

###  Overlay `Boolean`

Gets or sets a value indicating whether the notification will create an overlay element.

#### Remarks
The overlay is used to allow the popup to be displayed above heavy-weight objects like PDFs, Flash and Silverlight.

###  Pinned `Boolean`

Gets or sets a value indicating whether the notification is pinned (when true it does not scroll with the page).

###  Width `Unit`

Get/Set the Width of the notification in pixels

###  Height `Unit`

Get/Set the Height of the notification in pixels

###  Text `String`

Get/Set the Text that will appear in the notification (if there is no ContentTemplate used).

#### Remarks
The control can display a proper HTML string as well. This is an easy way to add simple styling via a simple property.

###  Title `String`

Get/Set the Text that will appear in the titlebar of the notification.

###  Value `String`

Get/Set the an optional Value to pass.

#### Remarks
Can be used to pass arbitrary information especially in Load-on-demand scenarios. For example to the webservice, or from the CallbackUpdate method.

###  KeepOnMouseOver `Boolean`

Gets or sets a value indicating whether the notification should stay on the screen when hovered (autoclose is delayed until the mouse goes outside the popup).

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  Enabled `Boolean`

Gets or sets a value indicating whether the notification is enabled

###  EnableRoundedCorners `Boolean`

Gets or sets a value indicating whether the notification should have rounded corners

#### Remarks
The effect is achieved via CSS3 and is not available for older browsers (e.g. Internet Explorer 8, FireFox3).

###  EnableShadow `Boolean`

Gets or sets a value indicating whether the notification should have shadow

#### Remarks
The effect is achieved via CSS3 and is not available for older browsers (e.g. Internet Explorer 8, FireFox3).

###  ContentScrolling `NotificationScrolling`

Get/Set overflow of the notification's content area

###  Opacity `Int32`

Gets or sets a value indicating what should be the opacity of the notification. The value must be between 0 (transparent) and 100 (opaque).

###  OnClientShowing `String`

Gets or sets a value indicating the name of the client-side event handler that is called before
            the RadNotification shows.

#### Remarks
If specified, the OnClientShowingclient-side event handler is called before the RadNotification
                is shown. Two parameters are passed to the handler:sender, the RadNotification object.args.This event can be cancelled.

###  OnClientShown `String`

Gets or sets a value indicating the name of the client-side event handler that is called 
            just after the RadNotification is shown.

#### Remarks
If specified, the OnClientShownclient-side event handler is called after the notification is shown
             Two parameters are passed to the handler:sender, the RadNotification object.args.This event cannot be cancelled.

###  OnClientHiding `String`

Gets or sets a value indicating the name of the client-side event handler that is called when
            the RadNotification is to be hidden.

#### Remarks
If specified, the OnClientHiding client-side event handler is
                called before the notification is hidden on the client. Two parameters are passed to the
                handler:sender, the notification client object;eventArgsThe OnClientHiding event can be cancelled. To do so,
                set the cancel property to false from the event handler (e.g.
                eventArgs.set_cancel(true);).

###  OnClientHidden `String`

Gets or sets a value indicating the name of the client-side event handler that is called when
            the RadNotification is hidden.

#### Remarks
If specified, the OnClientHidden client-side event handler is
                called after the notification is hidden on the client. Two parameters are passed to the
                handler:sender, the notification client object;eventArgs

###  OnClientUpdating `String`

Gets or sets a value indicating the name of the client-side event handler that is called when
            the content of RadNotification  is to be updated.

#### Remarks
If specified, the OnClientUpdating client-side event handler is
                called before the content of the notification is updated. Two parameters are passed to the
                handler:sender, the notification client object;eventArgsThe OnClientUpdating event can be cancelled. To do so,
                set the cancel property to false from the event handler (e.g.
                eventArgs.set_cancel(true);).Cancelling it will prevent the new content from being populated in the notification, but will not prevent the request for the new data.

###  OnClientUpdated `String`

Gets or sets a value indicating the name of the client-side event handler that is called when
            the content of RadNotification is updated.

#### Remarks
If specified, the OnClientUpdated client-side event handler is
                called after the content of the notification is updated. Two parameters are passed to the
                handler:sender, the notification client object;eventArgs

###  OnClientUpdateError `String`

Gets or sets a value indicating the name of the client-side event handler that is called when
            the call to the WebService or the callback is interrupted by an error.

#### Remarks
The server error is received as a browser alert() box. It can be avoided by calling the set_cancelErrorAlert(true) method of the event arguments object (the second parameter the event handler receives).

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

###  OnInit

#### Returns

`System.Void` 

###  OnLoad

#### Returns

`System.Void` 

###  GetScriptReferences

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  DescribeComponent

#### Returns

`System.Void` 

###  CreateChildControls

#### Returns

`System.Void` 

###  XmlPanelServiceRequest

#### Returns

`System.Void` 

###  CreateControlRenderer

#### Returns

`Telerik.Web.UI.IRenderer` 

###  CreateControlStyle

#### Returns

`System.Web.UI.WebControls.Style` 

###  RenderContents

#### Returns

`System.Void` 

###  RenderSimpleContent

#### Returns

`System.Void` 

###  GetAudioUrl

#### Returns

`System.String` 

###  GetIconUrl

#### Returns

`System.String` 

###  GetResolvedIconUrl

#### Returns

`System.String` 

###  ControlPreRender

#### Returns

`System.Void` 

###  Show

Shows the notification when the page is loaded on the client.

#### Remarks
It does not require that the control is updated after a partial postback in order to work.

#### Returns

`System.Void` 

###  Show

Shows the notification when the page is loaded on the client with the new text that is provided as an argument.

#### Remarks
It does not require that the control is updated after a partial postback in order to work.
            This text will not be persisted in the ViewState or after postbacks

#### Parameters

#### text `System.String`

The new text that will be shown in the notification. Can be an HTML string.

#### Returns

`System.Void` 

###  OnCallbackUpdate

The prototype of the event handler for the callback update load-on-demand mechanism. Prepares the event arguments.

#### Parameters

#### e `Telerik.Web.UI.RadNotificationEventArgs`

The argument received by the handler is of type .

#### Returns

`System.Void` 

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

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

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

