---
title: WAI-ARIA Support and Screen Readers
page_title: WAI-ARIA Support and Screen Readers | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support and Screen Readers
slug: controls/wai-aria-support-and-screen-readers
tags: wai-aria,support,and,screen,readers
published: True
position: 12
---

# WAI-ARIA Support and Screen Readers


[WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)](http://www.w3.org/WAI/PF/aria-practices/) is a World Wide Web Consortium specification. It explains how to increase the accessibility of the web pages	to help people with disabilities navigate the Internet.

WAI-ARIA represents a series of HTML attributes that screen readers can use.Attributes like `"role", "area-expanded", "area-haspopup"` and others provide	information to the readers and help people with disabilities interact with dynamic content on the page.

Some controls from the Telerik UI for ASP.NET AJAX suite have support for WAI-ARIA	and can, therefore, render such attributes that screen readers can interpret.	This help article lists the controls and shows the common way of enabling these attributes.

The following controls offer WAI-ARIA support:

* [Ajax]({%slug ajax/overview%})

* [Barcode](%slug barcode/overview%})

* [Calendar (DatePicker, TimePicker and MonthYearPicker)]({%slug calendar/overview%})

* [ComboBox]({%slug combobox/overview%})

* [DataPager]({%slug datapager/overview%})

* [DropDownList]({%slug dropdownlist/overview%})

* [Editor]({%slug editor/overview%})

* [Filter]({%slug filter/overview%})

* [Grid]({%slug grid/overview%})

* [Input]({%slug input/overview%})

* [Notification]({%slug notification/overview%})

* [PivotGrid]({%slug pivotgrid/overview%})

* [Tooltip]({%slug tooltip/overview%})

* [TreeList]({%slug treelist/overview%})

* [TreeView]({%slug treeview/overview%})

* [Window]({%slug window/overview%})

## 

To enable WAI-ARIA support, you need to set the **EnableAriaSupport** property of the control to **true**.

Note that the WAI-ARIA attributes are not part of the HTML specifications and a page whose markup contains them would not validate and the browser would enter quirks mode.To avoid this, the Telerik controls render the WAI-ARIA attributes with JavaScript.Thus, you need to examine the source code of the rendered page in the developer toolbar of the browser in order to see them because they will not be present in the markup sent from the server.

A screen reader commonly used with is **JAWS** ([JAWS official site](http://www.freedomscientific.com/products/fs/jaws-product-page.asp	)) and the Telerik controls are tested with it.

>note WAI-ARIA support for the *Window* and *Tooltip* controls can be expected to work with *JAWS* when the controls' *Lightweight[RenderMode]({%slug controls/render-modes%})* is used. With it, they render with semantic HTML elements.
>Both the *Window* and *Tooltip* controls render their popup elements with JavaScript. Thus, it is up to the screen reader software to	detect this change in the DOM and read them out.
>


# See Also

 * [W3C: WAI-ARIA Practices](http://www.w3.org/WAI/PF/aria-practices/)
