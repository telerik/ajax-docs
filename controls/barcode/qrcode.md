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

* **Version** - This is an integer value, in the range from 1 to 40,	representing the version which one desires to use. Usually, higher-version QR codes	are used do accommodate larger amounts of data.

* **DotSize** - Use this to specify size of the barcode dots in pixels.	Use this to achieve sharp rendered QR Code. You can use this in combination with	**Width=""** and **Higth=""** and the QR will be sized according to the number of its dots. If you set DotSizeto zero, the QR symbol will be resized to fill up the Width and Height.

# See Also

 * [Barcode QRCode online example](http://demos.telerik.com/aspnet-ajax/barcode/examples/qrcode/defaultcs.aspx)
