---
title: Server-side Programming
page_title: Server-side Programming | UI for ASP.NET AJAX Documentation
description: Server-side Programming
slug: tooltip/server-side-programming
tags: server-side,programming
published: True
position: 9
---

# Server-side Programming



## Server Properties common for both RadToolTip / RadToolTip Manager


>caption  

| Name | Description |
| ------ | ------ |
| __Animation__ |Get/Set the animation effect of the tooltip (Inherited from RadToolTipBase )|
| __AnimationDuration__ |Sets/gets the duration of the slide animation in milliseconds. (Inherited from RadToolTipBase )|
| __AutoCloseDelay__ |Get/Set the delay after which the tooltip will hide if the mouse stands still over the target element. (Inherited from RadToolTipBase )|
| __ContentScrolling__ |Get/Set overflow of the tooltip's content area (Inherited from RadToolTipBase )|
| __EnableAjaxSkinRendering__ |Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests (Inherited from RadWebControl)|
| __EnableEmbeddedBaseStylesheet__ |Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not. (Inherited from RadWebControl)|
| __EnableEmbeddedScripts__ |Gets or sets the value, indicating whether to render script references to the embedded scripts or not. (Inherited from RadWebControl)|
| __EnableEmbeddedSkins__ |Gets or sets the value, indicating whether to render links to the embedded skins or not. (Inherited from RadWebControl)|
| __EnableShadow__ |Gets or sets a value indicating whether the RadToolTip should have shadow. (Inherited from RadToolTipBase ). True by default since Q1 2012.|
| __Height__ |Get/Set the Height of the tooltip (Inherited from RadToolTipBase )|
| __HideDelay__ |Get/Set delay in miliseconds for the tooltip to hide after the mouse leaves the target element. (Inherited from RadToolTipBase )|
| __HideEvent__ |Get/Set the client event at which the tooltip will be hidden (Inherited from RadToolTipBase )|
| __IgnoreAltAttribute__ |Get/Set the idicator whether the Alt specified for the target should be ignored or not (Inherited from RadToolTipBase )|
| __ManualClose__ | __OBSOLETE__ Get/Set whether the tooltip will need to be closed manually by the user using the [x] button, or will close automatically (Inherited from RadToolTipBase )|
| __ManualCloseButtonText__ |Get/Set the manual close button's tooltip text (the only string that may require localization)|
| __Modal__ |Gets or sets a value indicating whether a tooltip is modal or not. (Inherited from RadToolTipBase )|
| __MouseTrailing__ |Get/Set whether the tooltip will move to follow mouse movement or will stay fixed. (Inherited from RadToolTipBase )|
| __OffsetX__ |Get/Set the tooltip's horizontal offset from the target control. Works in coopearation with the Position property. (Inherited from RadToolTipBase )|
| __OffsetY__ |Get/Set the tooltip's vertical offset from the target control. Works in coopearation with the Position property. (Inherited from RadToolTipBase )|
| __Overlay__ |Gets or sets a value indicating whether the window will create an overlay element. (Inherited from RadToolTipBase )|
| __Position__ |Get/Set the top/left position of the tooltip relative to the target element (Inherited from RadToolTipBase )|
| __RelativeTo__ |Get/Set whether the tooltip should appear relative to the mouse or to the target element. Works in coopearation with the Position property. (Inherited from RadToolTipBase )|
| __RenderInPageRoot__ |Get/Set whether the tooltip should be added as a child of the root element or as a child of its direct parent. (Inherited from RadToolTipBase )|
| __ShowCallout__ |Get/Set whether the tooltip will hide when the mouse moves away from the target element, or when the mouse [enters] and moves out of the tooltip itself. (Inherited from RadToolTipBase )|
| __ShowDelay__ |Get/Set the time for which the user should hold the mouse over a target element for the tooltip to appear (Inherited from RadToolTipBase )|
| __ShowEvent__ |Get/Set the client event at which the tooltip will be made visible for a particular target control (Inherited from RadToolTipBase )|
| __Sticky__ | __OBSOLETE__ Get/Set whether the tooltip will hide when the mouse moves away from the target element, or when the mouse [enters] and moves out of the tooltip itself. (Inherited from RadToolTipBase )|
| __Text__ |Get/Set the Text that will appear in the tooltip (if it should be other than the content of the 'title' attribute of the target element (Inherited from RadToolTipBase )|
| __Title__ |Get/Set a title for the tooltip (Inherited from RadToolTipBase )|
| __VisibleOnPageLoad__ |Gets or sets a value indicating whether the tooltip will open automatically when its parent [aspx] page is loaded on the client. (Inherited from RadToolTipBase )|
| __Width__ |Get/Set the Width of the tooltip (Inherited from RadToolTipBase )|

## Server properties for setting client event handlers, common for both controls:


>caption  

| Name | Description |
| ------ | ------ |
| __OnClientBeforeShow__ |Gets or sets a value indicating the client-side event handler that is called before the RadToolTip shows|
| __OnClientShow__ |Gets or sets a value indicating the client-side event handler that is called the just after the RadToolTip is shown.|
| __OnClientBeforeHide__ |Gets or sets a value indicating the client-side event handler that is called before the RadToolTip hides.|
| __OnClientHide__ |Gets or sets a value indicating the client-side event handler that is called just after the RadToolTip is hidden|

## RadToolTip specific API

Server properties for RadToolTip only


>caption  

| Name | Description |
| ------ | ------ |
| __IsClientID__ |Get/Set whether the TargetControlID is server or client ID|
| __TargetControlID__ |Get/Set the target control property of the tooltip|

## Server methods for RadToolTip only


>caption  

| Name | Description |
| ------ | ------ |
| __Show__ |Shows the tooltip. NOTE - The event is actually available for the manager, too but do not documented it because it might cause unexpected behavior;|

## RadToolTipManager specific API

Server properties for RadToolTipManager only


>caption  

| Name | Description |
| ------ | ------ |
| __EnableDataCaching__ |Gets or sets a value indicating whether the content of loaded on demand tooltip should be cached after the first request. When caching is enabled only one request will be performed for each target, regardless of how many times the tooltip will be shown. By default a new request is performed each time the tooltip must be shown.|
| __WebServiceSettings__ |Gets the settings for the web service used to populate items.|

## Server properties for setting client event handlers for RadToolTipManager only:


>caption  

| Name | Description |
| ------ | ------ |
| __OnClientRequestStart__ |Gets or sets a value indicating the client-side event handler that is called when the <strong>RadToolTipManager</strong> when a call to a WebService is initiated or AJAX request is started.|
| __OnClientResponseEnd__ |Gets or sets a value indicating the client-side event handler that is called when the <strong>RadToolTipManager</strong> receives the server response from a WebService or AJAX request.|
| __OnClientResponseError__ |Gets or sets a value indicating the client-side event handler that is called when theLoad On Demand call to the WebService or the AJAX request is interrupted by an error.|
| __ToolTipZoneID__ |Gets or sets the id (ClientID if a runat=server is used) of a html element whose children will be tooltipified|
| __AutoTooltipify__ |Gets or sets a value whether the RadToolTipManager, when its TargetControls collection is empty will tooltipify automatically all elements on the page that have a 'title' attribute|
| __TargetControls__ |Gets a collection of TargetControl objects that allows for specifying the objects for which tooltips will be created on the client-side.|
| __UpdatePanel__ |Gets a reference to the UpdatePanel property of RadToolTipManager. The UpdatePanel allows for sending AJAX content to the client-side during the OnAjaxUpdate event|

## Server events for RadToolTipManager only


>caption  

| Name | Description |
| ------ | ------ |
| __OnAjaxUpdate__ |Allows for dynamic content to be set into the tooltip with an ajax request.The tooltip triggers the event when it is shown on the client.|
