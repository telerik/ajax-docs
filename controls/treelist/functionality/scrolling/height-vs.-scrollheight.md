---
title: Height vs. ScrollHeight
page_title: Height vs. ScrollHeight | RadTreeList for ASP.NET AJAX Documentation
description: Height vs. ScrollHeight
slug: treelist/functionality/scrolling/height-vs.-scrollheight
tags: height,vs.,scrollheight
published: True
position: 1
---

# Height vs. ScrollHeight



## 

RadTreeList provides two properties for controlling its height declaratively or programmatically:

* *RadTreeListInstance*.**Height**

* *RadTreeListInstance*.ClientSettings.Scrolling.**ScrollHeight**

**Height** determines the height of the whole RadTreeList control, as it is applied to its outermost HTML element. **ScrollHeight** determines the height of the control's scrollable area when scrolling is enabled. Depending on whether static headers are enabled or not, the scrollable area includes different portions of the RadTreeList control:

* If static headers are enabled, the scrollable container includes only the data and footer items. The header and pager are "static" (not scrolled).

* If static headers are not enabled, the scrollable container includes everything.

>caution  **Height** and **ScrollHeight** should not be used at the same time. In this case ScrollHeight will be ignored.
>


Depending on whether Height or ScrollHeight is set, RadTreeList behaves differently:

* If **Height** is set, it is applied to the whole treelist and the control calculates the height of itsscrollable container on the client. The height of the scrollable container will depend on the height of the header, footer and pager which will be subtracted from the total RadTreeList height.

* If **ScrollHeight** is set, it is applied to the scrollable container directly and the RadTreeList controloccupies as much vertical space as it needs to accommodate the elements, which are outside the scrollable container. In other words,the total RadTreeList height will be larger than the ScrollHeight value.

>caution  **ScrollHeight** should not be set in percent.
>




>note Using **ScrollHeight** instead of **Height** will improve the RadTreeList client-side performance and prevent vertical flickering, which is inevitable in the case when the controlneeds to calculate and adjust its vertical layout on the client.
>

