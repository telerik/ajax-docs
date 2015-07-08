---
title: Skins
page_title: Skins | RadDataPager for ASP.NET AJAX Documentation
description: Skins
slug: datapager/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins



By default all controls in Telerik controls for ASP.NET.AJAX suite take a new polished look and feel which is consistent across the whole product line.

All resources (scripts, skins, etc.) are implemented as **Embedded WebResources** in ASP.NET 3.x/4.x for a very easy and convenient deployment. The only thing you now need to do is drag Telerik RadDataPager for ASP.NET AJAX from your toolbox onto your web page (no external files will be required) and Telerik RadDataPager will use its default skin.

Below is a set of some of the Telerik RadDataPager skins:
![RadDataPager Skins](images/datapager_skins.png)


## RadDataPager CSS classes

The HTML rendering and CSS classes of the RadDataPager fields are similar to those of the RadGrid pager item.


|  **CSS class**  |  **Description**  |
| ------ | ------ |
|RadDataPager|applied to the control's wrapper, does not depend on the skin name|
|RadDataPager_Skin|applied to the control's wrapper, depends on the skin name|
|rdpWrap|applied to a field wrapper|
|rdpNumPart|applied to the numeric RadDataPagerButtonField wrapper|
|rdpCurrentPage|applied to the current page number in the numeric RadDataPagerButtonField|
|rdpPagerButton|applied to buttons, e.g. the "Go to page" button|
|rdpPagerLabel|applied to labels|
|rdpPageFirst|applied to the "first page" button|
|rdpPagePrev|applied to the "previous page" button|
|rdpPageNext|applied to the "next page" button|
|rdpPageLast|applied to the "last page" button|
