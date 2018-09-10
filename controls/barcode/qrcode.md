---
title: QRCode
page_title: QRCode | RadBarcode for ASP.NET AJAX Documentation
description: QRCode
slug: barcode/qrcode
tags: qrcode
published: True
position: 5
---

# QRCode


To make the Barcode render **QRCode** you need to set its Type to **"QRCode"**.

## QRCodeSettings collection

You can specify the following properties:

* **ErrorCorrectionLevel** - There are four possible values to choose	from - L(Low), M(Medium), Q(Quartile), H(High). These values allow for 7%, 15%,	25% and 30% recovery of symbol code words. Additionally, choosing a higher version	of error correction dedicates a larger portion of modules for error correction.	Thus, given two QR codes with the same sizes, the one with a lower error correction	level would be able to accommodate more data.

* **ApplicationIndicator**- This property allows for additional data	to be applied to the FNC1 data. Please, keep in mind, that this is only applicable	with FNC1Mode.FNC1SecondPosition. Additionally, the acceptable data for this property	is in the range {a-z}],{[A-Z} and {00-99}.

* **FNC1** - This mode is used for messages containing data formatted	either in accordance with the UCC/EAN Application Identifiers standard or in accordance	with a specific industry standard previously agreed with AIM International.

* **Mode** - There are four values available for this property - Alphanumeric,	Numeric, Byte and Kanji. Essentially, this determines the sets of acceptable symbols	- numbers, characters, etc.

* **ECI** - (Extended Channel Interpretations Encoding) property allows	for additional data to be applied to the FNC1 data. Please, keep in mind, that this	is only applicable with FNC1Mode.FNC1SecondPosition. Additionally, the acceptable	data for this property is in the range {a-z}],{[A-Z} and {00-99}. Do not change	the encoding if you plan to decode your barcodes on smartphones. Some readers are	working with the default encoding only.

* **Version** - This is an integer value, in the range from 1 to 40,	representing the version which one desires to use. Usually, higher-version QR codes	are used do accommodate larger amounts of data. The default value is 7.

* **AutoIncreaseVersion** - Set to true to increase the Version automatically in order to encode longer text, if you are not sure what version to set. By default is set to true.

* **DotSize** - Use this to specify size of the barcode dots in pixels.

## How to Control the Size of the QR Code

The size of the QR code is determined by the `QRCodeSettings.DotSize` and `QRCodeSettings.Version` properties. 

The size coming from the `QRCodeSettings` will take precedence over the values set to the `Width` and `Height` properties of the main control tag.

Each integer increases the total size of the rendered image with a factor determined by the `Version` value. For example, with `Version="5"`, the factor is `45px`. Note that the function is not linear. If you want to determine exact sizes, the easiest way to see the exact size is to inspect the rendered PNG with the browser dev toolbar after running a given set of options.

For example, at `Version="5"`, `DotSize="1"` will result in a `45px` square, and a `DotSize="5"` will result in a `225px` square.

If you set `DotSize="0"` the image will be rendered as if `DotSize="1"` (that is, a `45px` square at `Version="5"`), and the `<img>` element will get `height: 100%; width: 100%` CSS rules, so that it can stretch according to the `Width` and `Height` properties of the main tag.

When the image stretches because of `DotSize="0"`, it may get blurry. To always get a clear image, you can render it as a vector image, instead of the default raster image, by setting `OutputType="SVG_VML"`.

# See Also

 * [Barcode QRCode online example](http://demos.telerik.com/aspnet-ajax/barcode/examples/qrcode/defaultcs.aspx)
