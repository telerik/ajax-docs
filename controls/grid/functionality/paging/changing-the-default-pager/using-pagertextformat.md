---
title: Using PagerTextFormat
page_title: Using PagerTextFormat | UI for ASP.NET AJAX Documentation
description: Using PagerTextFormat
slug: grid/functionality/paging/changing-the-default-pager/using-pagertextformat
tags: using,pagertextformat
published: True
position: 2
---

# Using PagerTextFormat



## 

You can set the format of the text that appears in the __Pager__ using the __PagerTextFormat__ property. The value of this property is an __ASP.NET__ formatting string.

Here is the format that should be used when __Mode__ is "__NextPrev__":


>caption  

| Change page: {4}|Page {0} of {1}, items {2} to {3} of {5} |
| ------ |

The rest of the grid pagers ("__NumericPages__", "__NextPrevAndNumeric__", "__Advanced__", "__NextPrevNumericAndAdvanced__" and "__Slider__") use a slightly different format:


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

>note The ' __{4}__ ' parameter is mandatory when setting the property. __'Page {0} of {1}, items {2} to {3} of {5}__ ' represents the text message displayed on the right side of the pager item. Setting this part of the property is optional.
>


The following screen shots show how the pager looks for each of the different pager modes before and after __PagerTextFormat__ is set:

````ASPNET
	  <PagerStyle Mode="NextPrev" />
````



![Next/Prev Pager Mode](images/RadGrid_PagerMode_NextPrev.jpg)

````ASPNET
	  <PagerStyle Mode="NextPrev" PagerTextFormat="Navigate pages {4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Next/Prev/Text Pager Mode](images/RadGrid_PagerMode_NextPrev_PagerText.jpg)

````ASPNET
	  <PagerStyle Mode="NextPrevAndNumeric" />
````



![Next/Prev/Numeric Pager Mode](images/RadGrid_PagerMode_NextPrevAndNumeric.jpg)

````ASPNET
	  <PagerStyle Mode="NextPrevAndNumeric" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Next/Prev/Numeric/Text Pager Mode](images/RadGrid_PagerMode_NextPrevAndNumericPagerText.jpg)

````ASPNET
	  <PagerStyle Mode="NextPrevNumericAndAdvanced" />
````



![Next/Prev/Numeric/Advanced Pager Mode](images/RadGrid_PagerMode_NextPrevAndNumericAndAdvanced.jpg)

````ASPNET
	  <PagerStyle Mode="NextPrevNumericAndAdvanced" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Next/Prev/Numeric/Advanced/Text Pager Mode](images/RadGrid_PagerMode_NextPrevAndNumericAndAdvanced_PagerText.jpg)

````ASPNET
	  <PagerStyle Mode="Advanced" />
````



![Advanced Pager Mode](images/RadGrid_PagerMode_Advanced.jpg)

````ASPNET
	  <PagerStyle Mode="Advanced" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Advance Pager Mode with Text](images/RadGrid_PagerMode_Advanced_PagerText.jpg)

````ASPNET
	  <PagerStyle Mode="NumericPages" />
	  .
````



![Numeric Pages](images/RadGrid_PagerMode_NumericPages.jpg)

````ASPNET
	  <PagerStyle Mode="NumericPages" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
````



![Numeric Page/Text Pager Mode](images/RadGrid_PagerMode_NumericPages_PagerText.jpg)

````ASPNET
	  <PagerStyle Mode="Slider" />
````



![Slider Pager Mode](images/RadGrid_PagerMode_Slider.jpg)

````ASPNET
	  <PagerStyle Mode="Slider" PagerTextFormat="{4} Page {0} from {1}, rows {2} to {3} from {5}" />
	  ....
	  <ClientSettings>
	       <ClientMessages PagerTooltipFormatString="Slider pages {0} from {1}" />
	  </ClientSettings>
````



![Slider/Text Pager Mode](images/RadGrid_PagerMode_Slider_PagerText.jpg)

>note In order to change the text on the right side of the __RadSlider__ you should set the __ClientMessages.PagerTooltipFormatString__  ** property.
>

