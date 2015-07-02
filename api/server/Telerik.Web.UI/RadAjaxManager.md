---
title: Telerik.Web.UI.RadAjaxManager
page_title: Telerik.Web.UI.RadAjaxManager
description: Telerik.Web.UI.RadAjaxManager
---

# Telerik.Web.UI.RadAjaxManager

Telerik.Web.UI.RadAjaxManager is one of the two major controls of the Telerik RadAjax suite. 
            The other one is Telerik.Web.UI.RadAjaxPanel . Telerik.Web.UI.RadAjaxManager allows
            developers rapidly develop powerful and complex AJAX solutions.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadAjaxControl
* Telerik.Web.UI.RadAjaxManager

## Properties

###  UpdatePanelsRenderMode `UpdatePanelRenderMode`

Gets or sets the default RenderMode for the UpdatePanels.

###  UpdateInitiatorPanelsOnly `Boolean`

Gets or sets if only the ajax initiator UpdatedControls UpdatePanel parents will be updated.

###  DefaultLoadingPanelID `String`

Gets or sets the default loading panel for every ajax setting.

###  AjaxSettings `AjaxSettingsCollection`

Gets the ajax settings which sets the relationship 
            between ajaxified and updated controls.

###  TabIndex `Int16`

###  Enabled `Boolean`

###  AccessKey `String`

###  BackColor `Color`

###  BorderColor `Color`

###  CssClass `String`

###  BorderStyle `BorderStyle`

###  BorderWidth `Unit`

###  Font `FontInfo`

###  ForeColor `Color`

###  ToolTip `String`

###  Width `Unit`

###  Height `Unit`

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  RestoreOriginalRenderDelegate `Boolean`

RadAjax for ASP.NET has some limitations when running in medium trust. 
            To make it work you should change the base type of your pages that use radjax 
            from  to . However DNN module 
            controls Inherit from Entities.Modules.PortalModuleBase and thus you cannot 
            simply change the page's base class. For such cases you should use the new 
            property RestoreOriginalRenderDelegate. By default it is true, if you work in 
            DNN or medium trust, you should set that to false.

###  EnableAJAX `Boolean`

Gets or sets if the ajax is enabled. If disabled
            all ajaxified controls will cause postback.

###  EnableHistory `Boolean`

Enables browser back/forward buttons state (browser history).
            Please, review the RadAjax "Changes and backwards compatibility" - "Back and Forward buttons" article for more info.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  ResponseScripts `StringCollection`

Gets the response scripts which represent JavaScript code
            that will be passed to the client and executed.

###  ClientEvents `AjaxClientEvents`

Gets a reference to , which holds
                properties for setting the  client-side events

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  EnablePageHeadUpdate `Boolean`

Gets or sets if the page html head tag will be 
            updated during the ajax request.

###  RequestQueueSize `Int32`

By design ASP.NET AJAX Framework cancels the ongoing ajax request if you try to initiate another one prior to receiving the response for the first request. 
            By setting the RequestQueueSize property to a value greater than zero, you are enabling the queuing mechanism of RadAjax 
            that will allow you to complete the ongoing request and then initiate the pending requests in the control queue.

#### Remarks
If the queue is full (queue size equals RequestQueueSize), an attempt for new ajax request will be discarded.

###  IsAjaxRequest `Boolean`

Gets if the requst is ajax or full postback.

## Methods

###  GetCurrent

Gets the current  on the page.

#### Parameters

#### page `System.Web.UI.Page`

The current  on the page.

#### Returns

`Telerik.Web.UI.RadAjaxManager` 

###  GetScriptDescriptors

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetScriptReferences

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  RenderUserControl

#### Returns

`System.String` 

###  RenderUserControl

#### Returns

`System.String` 

###  RaisePostBackEvent

#### Returns

`System.Void` 

###  Redirect

Redirects the page to another location.

#### Remarks
This method is usually used in the AJAX event handler instead of
            Response.Redirect(). It provides the only way to redirect to a page which does not
            contain any AJAX control at all.

#### Returns

`System.Void` None.

###  Alert

Displays an alert message at client-side.

#### Remarks
This is the easiest way to show a message, generated from the server, on the
            client in a message box.Note: Special characteres are not escaped.

#### Returns

`System.Void` None.

###  GetAjaxEventReference

Gets client side code which raises an AjaxRequest event in either AJAX Manager or
            AJAX Panel.

#### Returns

`System.String` 

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

