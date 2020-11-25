---
title: Telerik.Web.UI.RadAjaxManager
page_title: Telerik.Web.UI.RadAjaxManager
description: Telerik.Web.UI.RadAjaxManager
---

# Telerik.Web.UI.RadAjaxManager

Telerik.Web.UI.RadAjaxManager is one of the two major controls of the Telerik RadAjax suite. 
            The other one is Telerik.Web.UI.RadAjaxPanel . Telerik.Web.UI.RadAjaxManager allows
            developers rapidly develop powerful and complex AJAX solutions.
            You can find information on the server API of RadAjaxManager at the Server-Side Programming Overview article here: https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/server-side-programming/properties .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadAjaxControl : IPostBackEventHandler
* Telerik.Web.UI.RadAjaxManager : IScriptControl

## Properties

###  AjaxSettings `AjaxSettingsCollection`

Gets the ajax settings which sets the relationship 
            between ajaxified and updated controls.

###  BorderColor `Color`

###  ClientEvents `AjaxClientEvents`

Gets a reference to , which holds
                properties for setting the  client-side events

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  DefaultLoadingPanelID `String`

Gets or sets the default loading panel for every ajax setting.

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

###  IsAjaxRequest `Boolean`

Gets if the requst is ajax or full postback.

###  PostBackControls `String[]`

String array with filter strings. Ajax trigger control whose ID matches one of these values will perform a synchronous request.

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

###  UpdateInitiatorPanelsOnly `Boolean`

Gets or sets if only the ajax initiator UpdatedControls UpdatePanel parents will be updated.

###  UpdatePanelsRenderMode `UpdatePanelRenderMode`

Gets or sets the default RenderMode for the UpdatePanels.

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

###  GetCurrent

Gets the current  on the page.

#### Parameters

#### page `System.Web.UI.Page`

The current  on the page.

#### Returns

`Telerik.Web.UI.RadAjaxManager` 

###  Redirect

Redirects the page to another location.

#### Remarks
This method is usually used in the AJAX event handler instead of
            Response.Redirect(). It provides the only way to redirect to a page which does not
            contain any AJAX control at all.

#### Returns

`System.Void` None.

