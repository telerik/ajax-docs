---
title: Default Images
page_title: Default Images | RadOrgChart for ASP.NET AJAX Documentation
description: Default Images
slug: orgchart/appearance-and-styling/default-images
tags: default,images
published: True
position: 1
---

# Default Images



RadOrgChart has default profile image for GroupItems, which appears in case,	there isn't an ImageUrl set for the GroupItem, but can easily be changed or even disabled.

## How to change the default image?

In case you would like to use a different default image(for example special image applied to all GroupItems), you can change it by setting the **DefaultImageUrl** property of RadOrgChart.

Here is an example:

````ASPNET
<telerik:RadOrgChart runat="server" ID="RadOrgChart1" DefaultImageUrl="/newDefaultImage.png">
</telerik:RadOrgChart>
````



## Is there a limitation in terms of sizes for DefaultImageUrl?

The images for GroupItems are limited to **48x48 pixels**.This means that even **setting ImageUrl on a GroupItem should follow the same standard**.

## How to disable the default image?

If you don't need a default image to appear, you can disable it by setting the **DisableDefaultImage** property of RadOrgChart.

Here is an example:

````ASPNET
<telerik:RadOrgChart runat="server" ID="RadOrgChart1" DisableDefaultImage="true">
</telerik:RadOrgChart>
````


