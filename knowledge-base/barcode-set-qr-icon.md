---
title: How to apply a Custom Logo to the RadBarcode QR Code 
description: Learn how to add an icon to the RadBarcode QRCode type - Telerik UI for ASP.NET AJAX
type: troubleshooting
page_title: Add a small image to the QR code
slug: barcode-set-qr-icon
position: 
tags: 
ticketid: 
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadBarcode for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
If you are curious to learn how to position an icon in the center of the Telerik RadBarcode check out the solution below:

## Solution
To position an icon in the center of the Telerik RadBarcode for ASP.NET AJAX control, you need to overlay the icon on top of the barcode using CSS positioning. Here's a step-by-step guide to achieve this:

1. Position the icon right after or before the RadBarcode control inside a container (like a div):
````ASPX
<div class="barcode-container">
    <telerik:RadBarcode runat="server" ID="RadBarcode1" Type="QRCode" Text="https://demos.telerik.com/aspnet-ajax/barcode/examples/overview/defaultcs.aspx" Width="150" Height="150"></telerik:RadBarcode>
    <img src="https://demos.telerik.com/kendo-ui/content/shared/images/site/kendoka-cta.svg" class="centered-icon" />
</div>
````

1. CSS for Centering the Icon: Use absolute positioning to center the icon on top of the barcode. The .barcode-container will have relative positioning to act as a reference point for the absolute positioning of the icon:

````CSS
<style>
    .barcode-container {
        position: relative;
        width: 150px; /* Same as barcode width */
        height: 150px; /* Same as barcode height */
    }
    .centered-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px; /* Adjust as per your needs */
        height: 24px; /* Adjust as per your needs */
    }
</style>
````

> Ensure Icon Visibility: If your barcode type is dense (like QR codes), make sure your icon has a transparent background and is easily distinguishable from the barcode itself. Additionally, keep in mind that placing an icon over the barcode might make it unreadable if it covers too many data portions of the barcode. If you're planning to scan the barcode, always test its readability after applying the overlay.

    