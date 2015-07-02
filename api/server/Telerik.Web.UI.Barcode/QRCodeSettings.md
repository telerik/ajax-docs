---
title: Telerik.Web.UI.Barcode.QRCodeSettings
page_title: Telerik.Web.UI.Barcode.QRCodeSettings
description: Telerik.Web.UI.Barcode.QRCodeSettings
---

# Telerik.Web.UI.Barcode.QRCodeSettings

Holds collection of settings for the QRCode mode of RadBarcode control

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.Barcode.QRCodeSettings

## Properties

###  DotSize `Int32`

Use this to specify size of the barcode dots in pixels.
            Use this to achieve sharp rendered QR Code.  
            You can use this in combination with Width=”” and Higth=”” and the QR will be sized according to the number of its dots. 
            If you set DotSize to zero, the QR symbol will be resized to fill up the Width and Height. 
            Set DotSize = -1, if you want dots size to be auto calculated for the QR to fit into given width and hight

###  AutoIncreaseVersion `Boolean`

Set to true to increase the Version automatically in order to encode longer text, if you are not sure what version to set. 
            By default is set to true.

###  Mode `CodeMode`

There are four values available for this property - Alphanumeric, Numeric, Byte and Kanji. 
            Essentially, this determines the sets of acceptable symbols - numbers, characters, etc.

###  Version `Int32`

This is an integer value, in the range from 1 to 40, representing the version which one desires to use. 
            If set to 0, the version will be auto calculated depending on the lenght of the text.
            Usually, higher-version QR codes are used do accommodate larger amounts of data.

###  ErrorCorrectionLevel `ErrorCorrectionLevel`

There are four possible values to choose from - L(Low), M(Medium), Q(Quartile), H(High). 
            These values allow for 7%, 15%, 25% and 30% recovery of symbol code words. 
            Additionally, choosing a higher version of error correction dedicates a larger portion of modules for error correction. 
            Thus, given two QR codes with the same sizes, the one with a lower error correction level would be able to accommodate more data.

###  ECI `ECIMode`

(Extended Channel Interpretations Encoding) property allows for additional data to be applied to the FNC1 data. 
            Please, keep in mind, that this is only applicable with FNC1Mode.FNC1SecondPosition. 
            Additionally, the acceptable data for this property is in the range {a-z}],{[A-Z} and {00-99}. 
            Do not change the encoding if you plan to decode your barcodes on smart phones. 
            Some readers are working with the default encoding only.

###  FNC1 `FNC1Mode`

This mode is used for messages containing data formatted either in accordance with the UCC/EAN Application Identifiers standard,
            or in accordance with a specific industry standard previously agreed with AIM International.

###  ApplicationIndicator `String`

This property allows for additional data to be applied to the FNC1 data. 
            Please, keep in mind, that this is only applicable with FNC1Mode.FNC1SecondPosition. 
            Additionally, the acceptable data for this property is in the range {a-z}],{[A-Z} and {00-99}.

