---
title: Telerik.Web.UI.RadScriptManager
page_title: Telerik.Web.UI.RadScriptManager
description: Telerik.Web.UI.RadScriptManager
---

# Telerik.Web.UI.RadScriptManager

RadScriptManager.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.ScriptManager
* Telerik.Web.UI.RadScriptManager

## Properties

###  AssemblyWhiteList `AssemblyWhiteListCollection`

Gets the Assembly White List

###  CacheSettings `CacheSettings`

Gets the cache settings.

###  CdnSettings `CdnSettings`

Gets the CDN settings.

###  EnableEmbeddedjQuery `Boolean`

Specifies whether the embedded jQuery library is output with RadControls' scripts.

#### Remarks
If the embedded jQuery is disabled, you must manually load a version of jQuery on the page and ensure that 
            RadControls are compatible with it. If this property is set to false and no compatible jQuery library is used,
            the page will throw JavaScript exceptions.

###  EnableHandlerDetection `Boolean`

Gets or sets a value indicating if RadScriptManager should check the Telerik.Web.UI.WebResource
            	handler existence in the application configuration file.

#### Remarks
When EnableHandlerDetection set to true, RadScriptManager automatically checks if the
            	HttpHandler it uses is registered to the application configuration file and throws
            	an exception if the HttpHandler registration missing. Set this property to false
            	if your scenario uses a file to output the combined scripts, or when running in Medium trust.

###  EnableScriptCombine `Boolean`

Specifies whether or not multiple script references should be combined into a single file

#### Remarks
When EnableScriptCombine set to true, the script references of the controls
            	on the page are combined to a single file, so that only one <script>
            	tag is output to the page HTML

###  Groups `List`1`

Gets the groups.

###  HttpHandlerUrl `String`

Specifies the URL of the HTTPHandler that combines and serves the scripts.

#### Remarks
The HTTPHandler should either be registered in the application configuration
            		file, or a file with the specified name should exist at the location, which
            		HttpHandlerUrl points to.
            	
            		If a file is to serve the files, it should inherit the class Telerik.Web.UI.WebResource

###  OutputCompositeScriptLast `Boolean`

Specifies whether the CompositeScript (if defined) should render last or
            on its default place when script combining is enabled.

#### Remarks
When combining is disabled the CompositeScript renders directly after the
            	MS ASP.NET AJAX Framework scripts and before all third-party scripts (including RadControls').
            	
            	If RadScriptManager 3.5 is used in an ASP.NET 4.0 site/application and the
            	AjaxFrameworkMode property is either 'Disabled' or 'Eplicit' you could set the property
            	to true or upgrade to RadScriptManager 4.0, so that the RadControls scripts are combined in one file instead of in two.

###  OutputCompression `OutputCompression`

Specifies whether or not the combined output will be compressed.

#### Remarks
In some cases the browsers do not recognize compressed streams (e.g. if IE 6 lacks
            	an update installed). In some cases the Telerik.Web.UI.WebResource handler
            	cannot determine if to compress the stream. Set this property
            	to Disabled
            	if you encounter that problem.The OutputCompression property works only when
            	EnableScriptCombine is set to true.

## Methods

###  IsEncodingInAcceptList

Determines whether [is encoding in accept list] [the specified accept encoding header].

#### Parameters

#### acceptEncodingHeader `System.String`

The accept encoding header.

#### expectedEncoding `System.String`

The expected encoding.

#### Returns

`System.Boolean` 

