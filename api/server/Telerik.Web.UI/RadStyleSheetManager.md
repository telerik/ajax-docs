---
title: Telerik.Web.UI.RadStyleSheetManager
page_title: Telerik.Web.UI.RadStyleSheetManager
description: Telerik.Web.UI.RadStyleSheetManager
---

# Telerik.Web.UI.RadStyleSheetManager

A control allowing the ability to combine multiple embedded stylesheet references
            into a larger one as a way to reduce the number of files the client must download

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadStyleSheetManager

## Properties

###  CdnSettings `StyleSheetCdnSettings`

Gets the CDN settings.

###  EnableHandlerDetection `Boolean`

Gets or sets a value indicating if RadStyleSheetManager should check the Telerik.Web.UI.WebResource
            	handler existence in the application configuration file.

#### Remarks
When EnableHandlerDetection set to true, RadStyleSheetManager automatically checks if the
            	HttpHandler it uses is registered to the application configuration file and throws
            	an exception if the HttpHandler registration missing. Set this property to false
            	if your scenario uses a file to output the combined skins, or when running in Medium trust.

###  EnableSelectorLimitCheck `Boolean`

Specifies whether or not to check the selectors' count in the stylesheet when the request is in IE8. The browser limit is 4095 selectors per stylesheet.

#### Remarks
If the count exceeds the number of 4095 the stylesheet is not loaded.

###  EnableStyleSheetCombine `Boolean`

Specifies whether or not multiple embedded stylesheet references should be combined into a single file

#### Remarks
When EnableStyleSheetCombine set to true, the stylesheet references of the controls
            	on the page are combined to a single file, so that only one <link>
            	tag is output to the page HTML

###  HttpHandlerUrl `String`

Specifies the URL of the HTTPHandler that combines and serves the stylesheets.

#### Remarks
The HTTPHandler should either be registered in the application configuration
            		file, or a file with the specified name should exist at the location, which
            		HttpHandlerUrl points to.
            	
            		If a file is to serve the files, it should inherit the class Telerik.Web.UI.WebResource

###  OutputCompression `OutputCompression`

Specifies whether or not the combined output will be compressed.

#### Remarks
In some cases the browsers do not recognize compressed streams (e.g. if IE 6 lacks
            	an update installed). In some cases the Telerik.Web.UI.WebResource handler
            	cannot determine if to compress the stream. Set this property
            	to Disabled
            	if you encounter that problem.The OutputCompression property works only when
            	EnableStyleSheetCombine is set to true.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  SplitStyleSheetsFolder `StyleSheetReferenceCollection`

Specifies where the split CSS should be placed in case the request is under IE9 or IE8

###  StyleSheets `StyleSheetReferenceCollection`

Gets the style sheets.

###  StyleSheetsForSplitting `StyleSheetReferenceCollection`

Gets the style sheets for splitting under IE8,9.

## Methods

###  AddCompactedRadControlStyleSheets

This method puts all RadControls style sheets in the following order
            in the StyleSheets collection of RadStyleSheeManager: 
            1) first are all style sheets from the Telerik.Web.UI assembly;
            2) second are all style sheets from the Telerik.Web.UI.Skins assembly;
            
            The style sheets were divided when registered through the RegisterSkinnableControl method.

#### Returns

`System.Void` 

###  GetCurrent

Gets the current.

#### Parameters

#### page `System.Web.UI.Page`

The page.

#### Returns

`Telerik.Web.UI.RadStyleSheetManager` 

###  RegisterSkinnableControl

Registers the skinnable control.

#### Parameters

#### control `Telerik.Web.ISkinnableControl`

The control.

#### Returns

`System.Void` 

