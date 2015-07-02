---
title: Telerik.Web.UI.RadBarcode
page_title: Telerik.Web.UI.RadBarcode
description: Telerik.Web.UI.RadBarcode
---

# Telerik.Web.UI.RadBarcode

RadBarcode control. Control for rendering Barcode or QR text into an Image or SVG

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadBarcode

## Properties

###  QRCodeSettings `QRCodeSettings`

Specify additional settings when using Type="QRCode"

###  AlternateText `String`

Specify the alternate text for the img tag of RadBarcode

###  LineWidth `Int32`

"Specify width of lines in pixels when OutputType is EmbeddedPNG"

###  Type `BarcodeType`

Specify the barcode standard that should be used

###  Text `String`

Specify the text that will be encoded as barcode

###  Width `Unit`

Specify the width of the rendered barcode

###  Height `Unit`

Specify the height of the rendered barcode

###  ShortLinesLengthPercentage `Single`

Get or set the length ration between shorter and longer lines in the barcode

###  VerticalTextPositionPercentage `String`

Get or set the Y position of the barcode text in percents. By default is 100%. 
            If bottom of the text is cut off by the border of the barcode, 
            than set this property to lower value like 90, or 80, depending on the font size.

###  RenderChecksum `Boolean`

Get or set whenever to include checksum into the rendered barcode

###  ShowText `String`

Get or set whenever to show human readable text under the barcode

###  ShowChecksum `Boolean`

Get or set whenever to include the checksum after the text under the barcode

###  OutputType `BarcodeType`

Change the output type of RadBacrode. 
            Use SVG_VML to render SVG (or VML for older browsers) element inside the HTML.
            Use EmbeddedPNG to render img tag with Data URI for src.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

## Methods

###  GetImage

Gets rendered Barcode as Image

#### Returns

`System.Drawing.Image` 

###  RenderBeginTag

Renders the begin tag of RadBarcode control into HtmlTextWriter

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

#### Returns

`System.Void` 

###  GetScriptDescriptors

Gets a collection of script descriptors that represent ECMAScript (JavaScript)
            client components.

#### Returns

`System.Collections.Generic.IEnumerable`1` An  collection of 
            objects.

###  GetScriptReferences

Gets a collection of  objects
            that define script resources that the control requires.

#### Returns

`System.Collections.Generic.IEnumerable`1` An  collection of 
            objects.

