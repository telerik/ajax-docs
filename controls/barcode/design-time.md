---
title: Design Time
page_title: Design Time | RadBarcode for ASP.NET AJAX Documentation
description: Design Time
slug: barcode/design-time
tags: design,time
published: True
position: 1
---

# Design Time



The **RadBarcode** Smart Tag provides convenient access to the most common settings of the control.You can display the Smart Tag by right clicking on the **RadBarcode** in the design window, and choosing the"Show Smart Tag" option from its context menu.
![radbarcode-designtimetasks](images/radbarcode-designtimetasks.png)

The options which are exposed through the Smart Tag are:

## Text

Text that will be encoded with Barcode and rendered in the output file.
![radbarcode-designtime-text](images/radbarcode-designtime-text.png)

## Barcode type

Specifies the type of the standard used for encoding the text.
![radbarcode-designtime-type](images/radbarcode-designtime-type.png)

## Open Configuration Wizard

Open Configuration Wizard link displays **RadBarcode** wizard with General settings which lets youcustomize/configure the **RadBarcode** control.
![radbarcode-designtime-configurationwizard](images/radbarcode-designtime-configurationwizard.png)

## General Settings

The General settings tag lets you perform the following:

* **Type (Standart)** - Specifies the type of the standard used for encoding the text.

* **Output type** -Use for specifying the output type.

* **ShowText** -Specifies if the text will be shown under the barcode.

* **Show Text** -Specifies if the text will be shown under the barcode.

* **Show Checksum** -Specifies if the checksum should be written under the barcode.

* **Render Checksum** -Specifies if the checksum will be rendered in the barcode.

* **Text** -Text that will be encoded with Barcode and rendered in the output file.

* **Short Lines Length Percentage** -Specifies the ration between long and short lines in the	rendered barcode and adjust the Height and Width of the bars in percentage of the barcode's wrapper.	Expects value varies from 0.00 to 100.00 (90 by default).
![radbarcode-designtime-generalsettings](images/radbarcode-designtime-generalsettings.png)

## QR Code Settings

The QR Code settings tag lets you perform the following:

* **Mode** - There are four values available for this property - Alphanumeric, Numeric, Byte and Kanji.	Essentially, this determines the sets of acceptable symbols - numbers, characters, etc.

* **Error Correction Level** - There are four possible values to choose from - L(Low), M(Medium),	Q(Quartile), H(High). These values allow for 7%, 15%, 25% and 30% recovery of symbol code words. Additionally, choosing a	higher version of error	correction dedicates a larger portion of modules for error correction. Thus, given two QR codes	with the same sizes, the one with a lower error correction level would be able to accommodate more data.

* **Version** - This is an integer value, in the range from 1 to 40, representing the version which	one desires to use. Usually, higher-version QR codes are used do accommodate larger amounts of data.

* **Dot Size** - Use this to specify size of the barcode dots in pixels.	Use this to achieve sharp rendered QR Code. You can use this in combination with Width="" and Height="" and the QR will	be sized according to the number of its dots. If you set DotSize to zero, the QR symbol will be resized to fill up the	Width and Height.

* **ECI** - (Extended Channel Interpretations Encoding) property allows for additional data to be	applied to the FNC1 data. Please, keep in mind, that this is only applicable with FNC1Mode.FNC1SecondPosition.	Additionally, the acceptable data for this property is in the range {a-z}],{[A-Z} and {00-99}. Do not change the encoding	if you plan to decode your barcodes on smartphones. Some readers are working with the default encoding only.

* **FNC1** - This mode is used for messages containing data formatted either in accordance with the	UCC/EAN Application Identifiers standard or in accordance with a specific industry standard previously agreed with AIM	International.

* **ApplicationIndicator** - This property allows for additional data to be applied to the FNC1 data.	Please, keep in mind, that this is only applicable with FNC1Mode.FNC1SecondPosition. Additionally, the acceptable data for	this property is in the range {a-z}],{[A-Z} and {00-99}.
![radbarcode-designtime-codesettings](images/radbarcode-designtime-codesettings.png)

## Learning Center

Link navigate you directly to APS.NET help.

You can also search the Telerik web site for a given string.

You can navigate directly to the Telerik Support Center.
![radbarcode-designtime-help](images/radbarcode-designtime-help.png)
