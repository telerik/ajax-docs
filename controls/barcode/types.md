---
title: Types
page_title: Types | UI for ASP.NET AJAX Documentation
description: Types
slug: barcode/types
tags: types
published: True
position: 2
---

# Types





## Codabar

__Codabar__ is a discrete, self-checking symbology that may encode 16 different characters,plus an additional 4 start/stop characters.![barcode codabar](images/barcode_codabar.png)

## Code 11

__Code11__ is a barcode symbology which is discrete and is able to encode the numbers 0 through to 9, the dash symbol (-), and start/stop characters![barcode code 11](images/barcode_code11.png)

## Code 128

__Code128__ is a barcode symbology which encodes alphanumeric characters into a series of bars. It is of variable length, and accepts numbers, upper and lower case characters. It also includes an obligatory MOD 103 checksum.![barcode code 128](images/barcode_code128.png)

The Code128 is divided into three subsets A, B, and C. There are three separate start codes to indicate which subset will be used:

1. __Code128A__ supports the standard ASCII symbols, numbers, upper case letters, and control characters,such as tab and new-line.![barcode code 128A](images/barcode_code128A.png)

1. __Code128B__ supports standard ASCII symbols, numbers, upper and lower case letters.![barcode code 128B](images/barcode_code128B.png)

1. __Code128C__ supports numbers only.![barcode code 128C](images/barcode_code128C.png)

## Code 25 Interleaved

__Interleaved 2 of 5__ is a higher-density numeric symbology based upon the Standard 2 of 5 symbology.Interleaved 2 of 5 encodes any even number of numeric characters in the widths of the bars and spacesof the bar code.Unlike Standard 2 of 5, which only encodes information in the width of the bars,Interleaved 2of 5 encodes data in the width of both the bars and spaces. This allows Interleaved 2 of 5 to achieve a somewhat higher density.The symbology is called "interleaved" because the first numeric data is encodedin the first 5 bars while the second numeric data is encoded in the first 5 spaces that separate thefirst 5 bars.Thus the first 5 bars and spaces actually encode two characters. This is also why the bar codecan only encode an even number of data elements.![barcode code 25interleaved](images/barcode_code25interleaved.png)

## Code 25 Standard

__Stanadard 2 of 5__ is a low-density numeric symbology. The spaces in the barcode exist only toseparate the bars themselves. Additionally, a bar may either be wide or narrow, a wide bar generally being 3 times as wide as a narrow bar. The exact size of the spaces is not critical, but is generallythe same width as a narrow bar.![barcode code 25standard](images/barcode_code25standard.png)

## Code 39

__Code39__ is a barcode symbology which encodes alphanumeric characters into a series of bars. It is of variable length and accepts uppercase letters, as well as numbers.It includes an optionalMod 43 checksum. __Code39Extended__ is an exteded version of code 39, which includes a bigger character set. If there is a requirement to use the Code39 barcode with characters other than numbers and uppercase alphabets, then this is therecommended barcode.![barcode code 39](images/barcode_code39.png)

## Code 93

__Code93__ was designed to complement and improve upon Code 39. Code 93 is similar in that it,like Code 39, can represent the full ASCII character set by using combinations of 2 characters.It differs in that Code 93 is a continuous symbology and produces denser code. It also encodes 47characters compared to Code 39's 43 characters. __Code93Extended__ is an exteded version of code 93, which includes a bigger character set. Code93Extended can encode full 128 character ASCIIusing the four additional characters: ($) (%) (/) (+)![barcode code 93](images/barcode_code93.png)

## EAN 13

__EAN13__ is a barcode symbology which encodes numbers into a series of bars.It is of fixed length, of 13 digit (12 data and 1 check), and accepts numbers. First digit is always placed outside the symbol; additionally a right quiet zone indicator __(>)__ is used to indicate Quiet Zones that are necessary for barcode scanners to work properly. It includes a checksum.![barcode ean 13](images/barcode_ean13.png)

## EAN 8

__EAN8__ is a barcode symbology which encodes numbers into a series of bars. It is of fixed length, of 7 digits, and accepts numbers only. It includes a checksum.![barcode ean 8](images/barcode_ean8.png)

## MSI

__MSI__(also known as Modified Plessey) is a barcode symbology is a continuous, non-self-checking symbology.It is used primarily for inventory control, marking storage containers and shelves in warehouse environments. The length of this barcode type is variable.

The MSI barcode uses one of four possible schemes for calculating a check digit:

1. __MSImod10__(most common)![barcode msimod 10](images/barcode_msimod10.png)

1. __MSImod1010__![barcode msimod 1010](images/barcode_msimod1010.png)

1. __MSImod11__![barcode msimod 11](images/barcode_msimod11.png)

1. __MSImod1110__![barcode msimod 1110](images/barcode_msimod1110.png)

## Postnet

__Postnet__(Postal Numeric Encoding Technique) is a barcode symbology which encodes numbers into a series of bars. It is of variable lengthand accepts numbers only. It includes a checksum.![barcode postnet](images/barcode_postnet.png)

## UPC-A

__UPCA__ is a barcode symbology, which consists of 12 digits, one of which is a checksum. This barcode identifies the manufacturer and specific product, so point-of- sale cash register systems can automatically look up the price.![barcode upca](images/barcode_upca.png)

## UPC-E

__UPCE__ is a variation of the UPCA symbol that is used for number system 0. By suppressing zeroes, UPCE codes can be printedin a very small space and are used for labeling small items.![barcode upce](images/barcode_upce.png)

## UPC Supplement 2

A two digit UPC supplementary code. This barcode should only be used with magazines, newspapers and other such periodicals.![barcode upcsupplement 2](images/barcode_upcsupplement2.png)

## UPC Supplement 5

A five digit UPC supplementary code. This barcode is used on books to indicate a suggested retail price.![barcode upcsupplement 5](images/barcode_upcsupplement5.png)
