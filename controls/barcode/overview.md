---
title: Barcode Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: barcode/overview
tags: overview
published: True
position: 0
---

# Barcode Overview



The __RadBarcode__ control can be used for automatic Barcode generation directly from a numeric or character data. It supports several standards that can be used when creating the image.

List with __standard barcode types__ is shown in the screenshot below:![barcode overview](images/barcode_overview.png)

## Properties

After a barcode is added on the page, it is necessary to adjust the basic properties of the barcode,and to specify its type, text and appearance.

* __Type__ - Specifies the type of the standard used for encoding the text.

* __Text__ -Text that will be encoded with Barcode and rendered in SVG file.

* __Width__ - Use for specifying the width of the SVG file and the HTML Span element in which it is wrapped.

* __Height__ - Use for specifying the height of the SVG file and the HTML Span element in which it is wrapped.

* __RenderChecksum__ - Specifies if the checksum will be rendered in the barcode.

* __ShowChecksum__ - Specifies if the checksum should be written under the barcode.

* __ShowText__ - Specifies if the text will be shown under the barcode.

* __ShortLinesLengthPercentage__ - Specifies the ration between long and short lines in the rendered barcode and adjust the Height and Width of the bars in percentage of the barcode's wrapper. Expects value varies from 0.00 to 100.00 (90 by default).

>note If the value in the __Text__ property is invalid for the selected type, the Barcode will not be visible.
>


# See Also
