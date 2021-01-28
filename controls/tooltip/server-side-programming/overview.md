---
title: Overview
page_title: Server-side Programming Overview - RadTooltip
description: Check our Web Forms article about Server-side Programming.
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
| **Animation** |Get/Set the animation effect of the tooltip (Inherited from RadToolTipBase )|
| **AnimationDuration** |Sets/gets the duration of the slide animation in milliseconds. (Inherited from RadToolTipBase )|
| **AutoCloseDelay** |Get/Set the delay after which the tooltip will hide if the mouse stands still over the target element. (Inherited from RadToolTipBase )|
| **ContentScrolling** |Get/Set overflow of the tooltip's content area (Inherited from RadToolTipBase )|
| **EnableAjaxSkinRendering** |Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests (Inherited from RadWebControl)|
| **EnableEmbeddedBaseStylesheet** |Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not. (Inherited from RadWebControl)|
| **EnableEmbeddedScripts** |Gets or sets the value, indicating whether to render script references to the embedded scripts or not. (Inherited from RadWebControl)|
| **EnableEmbeddedSkins** |Gets or sets the value, indicating whether to render links to the embedded skins or not. (Inherited from RadWebControl)|
| **EnableShadow** |Gets or sets a value indicating whether the RadToolTip should have shadow. (Inherited from RadToolTipBase ). True by default since Q1 2012.|
| **Height** |Get/Set the Height of the tooltip (Inherited from RadToolTipBase )|
| **HideDelay** |Get/Set delay in miliseconds for the tooltip to hide after the mouse leaves the target element. (Inherited from RadToolTipBase )|
| **HideEvent** |Get/Set the client event at which the tooltip will be hidden (Inherited from RadToolTipBase )|
| **IgnoreAltAttribute** |Get/Set the idicator whether the Alt specified for the target should be ignored or not (Inherited from RadToolTipBase )|
| **ManualClose** | **OBSOLETE** Get/Set whether the tooltip will need to be closed manually by the user using the [x] button, or will close automatically (Inherited from RadToolTipBase )|
| **ManualCloseButtonText** |Get/Set the manual close button's tooltip text (the only string that may require localization)|
| **Modal** |Gets or sets a value indicating whether a tooltip is modal or not. (Inherited from RadToolTipBase )|
| **MouseTrailing** |Get/Set whether the tooltip will move to follow mouse movement or will stay fixed. (Inherited from RadToolTipBase )|
| **OffsetX** |Get/Set the tooltip's horizontal offset from the target control. Works in coopearation with the Position property. (Inherited from RadToolTipBase )|
| **OffsetY** |Get/Set the tooltip's vertical offset from the target control. Works in coopearation with the Position property. (Inherited from RadToolTipBase )|
| **Overlay** |Gets or sets a value indicating whether the window will create an overlay element. (Inherited from RadToolTipBase )|
| **Position** |Get/Set the top/left position of the tooltip relative to the target element (Inherited from RadToolTipBase )|
| **RelativeTo** |Get/Set whether the tooltip should appear relative to the mouse or to the target element. Works in coopearation with the Position property. (Inherited from RadToolTipBase )|
| **RenderInPageRoot** |Get/Set whether the tooltip should be added as a child of the root element or as a child of its direct parent. (Inherited from RadToolTipBase )|
| **ShowCallout** |Get/Set whether the tooltip will hide when the mouse moves away from the target element, or when the mouse [enters] and moves out of the tooltip itself. (Inherited from RadToolTipBase )|
| **ShowDelay** |Get/Set the time for which the user should hold the mouse over a target element for the tooltip to appear (Inherited from RadToolTipBase )|
| **ShowEvent** |Get/Set the client event at which the tooltip will be made visible for a particular target control (Inherited from RadToolTipBase )|
| **Sticky** | **OBSOLETE** Get/Set whether the tooltip will hide when the mouse moves away from the target element, or when the mouse [enters] and moves out of the tooltip itself. (Inherited from RadToolTipBase )|
| **Text** |Get/Set the Text that will appear in the tooltip (if it should be other than the content of the 'title' attribute of the target element (Inherited from RadToolTipBase )|
| **Title** |Get/Set a title for the tooltip (Inherited from RadToolTipBase )|
| **VisibleOnPageLoad** |Gets or sets a value indicating whether the tooltip will open automatically when its parent [aspx] page is loaded on the client. (Inherited from RadToolTipBase )|
| **Width** |Get/Set the Width of the tooltip (Inherited from RadToolTipBase )|

## Server properties for setting client event handlers, common for both controls:


>caption  

| Name | Description |
| ------ | ------ |
| **OnClientBeforeShow** |Gets or sets a value indicating the client-side event handler that is called before the RadToolTip shows|
| **OnClientShow** |Gets or sets a value indicating the client-side event handler that is called the just after the RadToolTip is shown.|
| **OnClientBeforeHide** |Gets or sets a value indicating the client-side event handler that is called before the RadToolTip hides.|
| **OnClientHide** |Gets or sets a value indicating the client-side event handler that is called just after the RadToolTip is hidden|

## RadToolTip specific API

Server properties for RadToolTip only


>caption  

| Name | Description |
| ------ | ------ |
| **IsClientID** |Get/Set whether the TargetControlID is server or client ID|
| **TargetControlID** |Get/Set the target control property of the tooltip|

## Server methods for RadToolTip only


>caption  

| Name | Description |
| ------ | ------ |
| **Show** |Shows the tooltip. NOTE - The method is actually available for the manager due to the class inheritance, but it might cause unexpected behavior and should not be used.|

## RadToolTipManager specific API

Server properties for RadToolTipManager only


>caption  

| Name | Description |
| ------ | ------ |
| **EnableDataCaching** |Gets or sets a value indicating whether the content of loaded on demand tooltip should be cached after the first request. When caching is enabled only one request will be performed for each target, regardless of how many times the tooltip will be shown. By default a new request is performed each time the tooltip must be shown.|
| **WebServiceSettings** |Gets the settings for the web service used to populate items.|

## Server properties for setting client event handlers for RadToolTipManager only:


>caption  

| Name | Description |
| ------ | ------ |
| **OnClientRequestStart** |Gets or sets a value indicating the client-side event handler that is called when the <strong>RadToolTipManager</strong> when a call to a WebService is initiated or AJAX request is started.|
| **OnClientResponseEnd** |Gets or sets a value indicating the client-side event handler that is called when the <strong>RadToolTipManager</strong> receives the server response from a WebService or AJAX request.|
| **OnClientResponseError** |Gets or sets a value indicating the client-side event handler that is called when theLoad On Demand call to the WebService or the AJAX request is interrupted by an error.|
| **ToolTipZoneID** |Gets or sets the id (ClientID if a runat=server is used) of a html element whose children will be tooltipified|
| **AutoTooltipify** |Gets or sets a value whether the RadToolTipManager, when its TargetControls collection is empty will tooltipify automatically all elements on the page that have a 'title' attribute|
| **TargetControls** |Gets a collection of TargetControl objects that allows for specifying the objects for which tooltips will be created on the client-side.|
| **UpdatePanel** |Gets a reference to the UpdatePanel property of RadToolTipManager. The UpdatePanel allows for sending AJAX content to the client-side during the OnAjaxUpdate event|

## Server events for RadToolTipManager only


>caption  

| Name | Description |
| ------ | ------ |
| **OnAjaxUpdate** |Allows for dynamic content to be set into the tooltip with an ajax request.The tooltip triggers the event when it is shown on the client.|
