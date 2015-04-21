---
title: WAI-ARIA Support and Screen Readers
page_title: WAI-ARIA Support and Screen Readers | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support and Screen Readers
slug: controls/wai-aria-support-and-screen-readers
tags: wai-aria,support,and,screen,readers
published: True
position: 108
---

# WAI-ARIA Support and Screen Readers



[WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)](http://www.w3.org/WAI/PF/aria-practices/) is a World Wide Web Consortium specification. It explains how to increase the accessibility of the web pages	to help people with disabilities navigate the Internet.

WAI-ARIA represents a series of HTML attributes that screen readers can use.Attributes like `"role", "area-expanded", "area-haspopup"` and others provide	information to the readers and help people with disabilities interact with dynamic content on the page.

Some controls from the Telerik UI for ASP.NET AJAX suite have support for WAI-ARIA	and can, therefore, render such attributes that screen readers can interpret.	This help article lists the controls and shows the common way of enabling these attributes.

The following controls offer WAI-ARIA support:

* [Ajax](bb812736-0cee-4b80-b9db-de247a800935)

* [Barcode](fa6e68e4-200a-41f8-8885-6a49c27a067a)

* [Calendar (DatePicker, TimePicker and MonthYearPicker)](2b62e120-e964-4735-8c91-1d2a1e16a932)

* [ComboBox](d98832e6-ce1f-4b49-8333-6bae098f10fc)

* [DataPager](6feeb3a0-fe99-418c-83c3-149015d011c9)

* [DropDownList]()

* [Editor](a329b275-1f61-471e-97f4-f18429528aef)

* [Filter](7f3cbf11-b438-4788-9ef1-ec5c5237808c)

* [Grid](c81df0bc-6b7b-4cbb-9e46-19b519befe4e)

* [Input](ef11ca77-806b-49f8-9121-577ffb3d2a76)

* [Notification](13c0d134-6655-45d6-8622-0071de67a95f)

* [PivotGrid](9e167baf-9215-4b83-8591-36a41cd8a30b)

* [Tooltip](59c013ae-25a3-4fa0-bd60-c5aefd7f3e2a)

* [TreeList](81ad2dee-cd40-4be8-9ff5-1dc20b6062a4)

* [TreeView](841e4647-0f56-44f1-a6eb-b3647ad6d433)

* [Window](d84d0f18-b139-416f-8689-815718f765e4)

## 

To enable WAI-ARIA support, you need to set the __EnableAriaSupport__property of the control to __true__.

Note that the WAI-ARIA attributes are not part of the HTML specifications and a pagewhose markup contains them would not validate and the browser would enter quirks mode.To avoid this, the Telerik controls render the WAI-ARIA attributes with JavaScript.Thus, you need to examine the source code of the rendered page in the developer toolbarof the browser in order to see them because they will not be present in the markup sent from the server.

A screen reader commonly used with is __JAWS__ ([JAWS official site](http://www.freedomscientific.com/products/fs/jaws-product-page.asp	)) and the Telerik controls are tested with it.

>note WAI-ARIA support for the *Window* and *Tooltip* controls can be expected to work with *JAWS* when the controls' *Lightweight[RenderMode]({%slug controls/render-modes%})* is used. With it, they render with semantic HTML elements.
>Both the *Window* and *Tooltip* controls render their popup elements with JavaScript. Thus, it is up to the screen reader software to	detect this change in the DOM and read them out.
>


# See Also

 * [W3C: WAI-ARIA Practices](http://www.w3.org/WAI/PF/aria-practices/)
