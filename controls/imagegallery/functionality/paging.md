---
title: Paging
page_title: Paging | RadImageGallery for ASP.NET AJAX Documentation
description: Paging
slug: imagegallery/functionality/paging
tags: paging
published: True
position: 3
---

# Paging


RadImageGallery has built-in paging mechanism that you can use to optimise performance. When paging is enabled only the images for the current page are loaded. That can make a considerable difference especially when working with a lot of images.

In order to enable paging you need to set the **AllowPaging** property for the control to **true**. Furthermore, you can specify the page size via the **PageSize** property.


````ASP.NET
<telerik:RadImageGallery runat="server" ID="RadImageGallery1" ImagesFolderPath="~/Images" Width="600px" 
    AllowPaging="true" PageSize="5">
</telerik:RadImageGallery>
````


The following image is showing the result of the code snippet above:

![](images/image-gallery-paging1.jpg)


