---
title: Specifications
page_title: Specifications - RadBarcode
description: Check our Web Forms article about Specifications.
slug: barcode/specifications
tags: specifications
published: True
position: 4
---

# Specifications

This help topic describes the specific characteristics of the barcodes per type.

## 

| Barcode type | Character set | Length | Check digits |
| ------ | ------ | ------ | ------ |
|Code 128|ASCII (128 characters)|variable|Mod 103|
|Code 39|[A-Z]; [0-9]; [ - . $ / + % ]|variable (avg. up to 20 chars)|optional (Mod. 43)|
|EAN-13|numeric [0..9]|13 digits|1 check digit|
|EAN-8|numeric [0..9]|8 digits|1 check digit|
|Postnet|numeric [0..9]|variable|1 check digit|
|UPC-A|numeric [0..9]|12 digits|1 check digit|
|UPC-E|numeric [0..9]|7 digits|1 check digit|

>note Be sure to take the check digit into consideration as it decreases the total number of usable digits for your data. For example, if you need 8 digits for your data; you can't use EAN-8 because 8 total digits, minus one check digit, leaves only 7 usable digits.
