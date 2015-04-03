---
title: Paging
page_title: Paging | UI for ASP.NET AJAX Documentation
description: Paging
slug: treelist/functionality/paging
tags: paging
published: True
position: 0
---

# Paging



__RadTreeList__ supports paging functionality which allows the users to view thedata, separated in chunks. This is helpful in cases where the control is bound to a large collection ofdata which would be impractical or even impossible to display on a single page. Depending on thedevelopers' preferences, the appearance of the pager may vary from a simple page-number buttons to amore sophisticated slider control.

To enable this functionality in __RadTreeList__, you should set the__AllowPaging__ property to true.

````ASPNET
	    <telerik:RadTreeList ID="RadTreeList1" runat="server" AllowPaging="true" />
````



__RadTreeList__ exposes the __PageSizeControlType__ property in its __PagerStyle__ property collection which is an enum of type __PagerDropDownControlType__.It has three values available with __RadComboBox__ being the default one:

* __None__

* __RadComboBox__

* __RadDropDownList__

As it name implies, the property specifies what type of page size drop down control will be rendered.The property provides an easy way to switch off the page size combo or replace it with its light weight counterpart __RadDropDownList__.

## Pager API

The following methods and properties are exposed in the __RadTreeList__'sserver-side Pager API:


| Property | Description |
| ------ | ------ |
| __PageSize__ |Determines the maximum items displayed on a single page.|
| __PagerStyle-FirstPageToolTip__ |The text that is displayed when hovering the FirstPage button|
| __PagerStyle-NextPageToolTip__ |The text that is displayed when hovering the NextPage button|
| __PagerStyle-PrevPageToolTip__ |The text that is displayed when hovering the PrevPage button|
| __PagerStyle-LastPageToolTip__ |The text that is displayed when hovering the LastPage button|
| __PageButtonCount__ |The number of numeric buttons in the pager|
| __Position__ |Determines the position of the Pager in RadTreeList:

* Top

* Bottom

* TopAndBottom|
| __Mode__ |This property sets the appearance of the Pager. The available modes are:

* NextPrev

* NumericPages

* NextPrevAndNumeric

* NextPrevNumericAndAdvanced

* Advanced

* Slider|![RadTreeList Pager](images/treelist_pager.jpg)
