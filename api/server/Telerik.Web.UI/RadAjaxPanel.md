---
title: Telerik.Web.UI.RadAjaxPanel
page_title: Telerik.Web.UI.RadAjaxPanel
description: Telerik.Web.UI.RadAjaxPanel
---

# Telerik.Web.UI.RadAjaxPanel

Telerik.Web.UI.RadAjaxPanel is one of the two major controls of the Telerik RadAjax suite. 
            The other one is Telerik.Web.UI.RadAjaxManager . 
            The Telerik.Web.UI.RadAjaxPanel control provides the easiest 
            way to AJAX-enable ASP.NET web control(s). To do this you simply need to place 
            the controls that you want ajaxified into Telerik.Web.UI.RadAjaxPanel and Telerik RadAjax takes 
            care of the rest. Best of all this happens transparently to the framework and the 
            controls that are being ajaxified.
            You can find information on the server API of RadAjaxPanel at https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxpanel/server-side-programming/properties Server-Side Programming.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadAjaxControl : IPostBackEventHandler
* Telerik.Web.UI.RadAjaxPanel : IScriptControl

## Properties

###  BackImageUrl `String`

This property specifies the image that should be displayed as background in the
            AjaxPanel. If left blank, no background image is applied.

###  ClientEvents `AjaxClientEvents`

Gets a reference to , which holds
            properties for setting the  client-side events.

###  ClientEvents `AjaxClientEvents`

Gets a reference to , which holds
                properties for setting the  client-side events

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  EnableAJAX `Boolean`

Gets or sets if the ajax is enabled. If disabled
            all ajaxified controls will cause postback.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableHistory `Boolean`

Enables browser back/forward buttons state (browser history).
            Please, review the RadAjax "Changes and backwards compatibility" - "Back and Forward buttons" article for more info.

###  EnablePageHeadUpdate `Boolean`

Gets or sets if the page html head tag will be 
            updated during the ajax request.

###  HorizontalAlign `HorizontalAlign`

This property specifies the horizontal alignment of the RadAjaxPanel
            contents.

###  IsAjaxRequest `Boolean`

Gets if the requst is ajax or full postback.

###  LoadingPanelID `String`

Gets or sets the ID of the RadAjaxLoadingPanel control that 
            will be displayed over the control during AJAX requests.

###  PostBackControls `String[]`

String array with filter strings. Ajax trigger control whose ID matches one of these values will perform a synchronous request.

###  RenderMode `UpdatePanelRenderMode`

Gets or sets the render mode of the the RadAjaxPanel. The default value is Block.

###  RequestQueueSize `Int32`

By design ASP.NET AJAX Framework cancels the ongoing ajax request if you try to initiate another one prior to receiving the response for the first request. 
            By setting the RequestQueueSize property to a value greater than zero, you are enabling the queuing mechanism of RadAjax 
            that will allow you to complete the ongoing request and then initiate the pending requests in the control queue.

#### Remarks
If the queue is full (queue size equals RequestQueueSize), an attempt for new ajax request will be discarded.

###  ResponseScripts `StringCollection`

Gets the response scripts which represent JavaScript code
            that will be passed to the client and executed.

###  RestoreOriginalRenderDelegate `Boolean`

RadAjax for ASP.NET has some limitations when running in medium trust. 
            To make it work you should change the base type of your pages that use radjax 
            from  to . However DNN module 
            controls Inherit from Entities.Modules.PortalModuleBase and thus you cannot 
            simply change the page's base class. For such cases you should use the new 
            property RestoreOriginalRenderDelegate. By default it is true, if you work in 
            DNN or medium trust, you should set that to false.

###  ShowLoadingPanelForPostBackControls `String[]`

Determines whether the loading panel will be shown during a regular postback. This will work only if the loading panel is attached to the ajax control. Default value is false (disabled).

###  UpdatePanelCssClass `String`

Set class attribute to UpdatePanel that will wrap the UpdatedControl

###  Wrap `Boolean`

This property specifies the layout of the AjaxPanel. When this is set to FALSE,
            the AjaxPanel contents will not be wrapped to a new line no matter how wide the control
            is.

## Methods

###  Alert

Displays an alert message at client-side.

#### Remarks
This is the easiest way to show a message, generated from the server, on the
            client in a message box.Note: Special characteres are not escaped.

#### Returns

`System.Void` None.

###  FocusControl

Sets focus to the specified web control after the AJAX Request is
            finished.

#### Returns

`System.Void` 

###  FocusControl

Sets focus to the specified web control after the AJAX Request is
            finished.

#### Returns

`System.Void` 

###  GetAjaxEventReference

Gets client side code which raises an AjaxRequest event in either AJAX Manager or
            AJAX Panel.

#### Returns

`System.String` 

###  Redirect

Redirects the page to another location.

#### Remarks
This method is usually used in the AJAX event handler instead of
            Response.Redirect(). It provides the only way to redirect to a page which does not
            contain any AJAX control at all.

#### Returns

`System.Void` None.

