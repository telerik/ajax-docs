---
title: Using PagerTextFormat
page_title: Using PagerTextFormat | RadGrid for ASP.NET AJAX Documentation
description: Using PagerTextFormat
slug: grid/functionality/paging/changing-the-default-pager/using-pagertextformat
tags: using,pagertextformat
published: True
position: 2
---

# Using PagerTextFormat



## 

You can set the format of the text that appears in the **Pager** using the **PagerTextFormat** property. The value of this property is an **ASP.NET** formatting string.

Here is the format that should be used when **Mode** is "**NextPrev**":


>caption  

| Change page: {4}|Page {0} of {1}, items {2} to {3} of {5} |
| ------ |

The rest of the grid pagers ("**NumericPages**", "**NextPrevAndNumeric**", "**Advanced**", "**NextPrevNumericAndAdvanced**" and "**Slider**") use a slightly different format:


>caption  

| {4}|Page {0} of {1}, items {2} to {3} of {5} |
| ------ |

No matter which pager you choose, the meaning of the different parameters is as follows:

* {0} is used to display current page number.

* {1} is total number of pages.

* {2} is the number of the first item (record) in the current page.

* {3} is the number of the last item (record) in the current page.

* {4} indicates where the set of controls for the corresponding pager type (positioned on the left) appear.

* {5} is the total number of items (records) in the data source.

>note The ' **{4}** ' parameter is mandatory when setting the property. **'Page {0} of {1}, items {2} to {3} of {5}** ' represents the text message displayed on the right side of the pager item. Setting this part of the property is optional.
>


The following screen shots show how the pager looks for each of the different pager modes before and after **PagerTextFormat** is set:

````ASP.NET
<PagerStyle Mode="NextPrev" />
````



![Next/Prev Pager Mode](images/RadGrid_PagerMode_NextPrev.jpg)

````ASP.NET
<PagerStyle Mode="NextPrev" PagerTextFormat="Navigate pages {4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Next/Prev/Text Pager Mode](images/RadGrid_PagerMode_NextPrev_PagerText.jpg)

````ASP.NET
	  <PagerStyle Mode="NextPrevAndNumeric" />
````



![Next/Prev/Numeric Pager Mode](images/RadGrid_PagerMode_NextPrevAndNumeric.jpg)

````ASP.NET
<PagerStyle Mode="NextPrevAndNumeric" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Next/Prev/Numeric/Text Pager Mode](images/RadGrid_PagerMode_NextPrevAndNumericPagerText.jpg)

````ASP.NET
<PagerStyle Mode="NextPrevNumericAndAdvanced" />
````



![Next/Prev/Numeric/Advanced Pager Mode](images/RadGrid_PagerMode_NextPrevAndNumericAndAdvanced.jpg)

````ASP.NET
	  <PagerStyle Mode="NextPrevNumericAndAdvanced" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Next/Prev/Numeric/Advanced/Text Pager Mode](images/RadGrid_PagerMode_NextPrevAndNumericAndAdvanced_PagerText.jpg)

````ASP.NET
<PagerStyle Mode="Advanced" />
````



![Advanced Pager Mode](images/RadGrid_PagerMode_Advanced.jpg)

````ASP.NET
<PagerStyle Mode="Advanced" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Advance Pager Mode with Text](images/RadGrid_PagerMode_Advanced_PagerText.jpg)

````ASP.NET
<PagerStyle Mode="NumericPages" />
````



![Numeric Pages](images/RadGrid_PagerMode_NumericPages.jpg)

````ASP.NET
<PagerStyle Mode="NumericPages" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Numeric Page/Text Pager Mode](images/RadGrid_PagerMode_NumericPages_PagerText.jpg)

````ASP.NET
<PagerStyle Mode="Slider" />
````



![Slider Pager Mode](images/RadGrid_PagerMode_Slider.jpg)

````ASP.NET
<PagerStyle Mode="Slider" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
....
<ClientSettings>
     <ClientMessages PagerTooltipFormatString="Slider pages {0} from {1}" />
</ClientSettings>
````



![Slider/Text Pager Mode](images/RadGrid_PagerMode_Slider_PagerText.jpg)

>note In order to change the text on the right side of the **RadSlider** you should set the **ClientMessages.PagerTooltipFormatString** property.
>

