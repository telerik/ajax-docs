---
title: Overview
page_title: Client-side Programming Overview - RadCheckBoxList
description: Check our Web Forms article about Overview.
slug: checkboxlist/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadCheckBoxList** provides a flexible client-side API. You can easily interact with the checkbox in the browser using the RadCheckBoxList client-side object. In addition to a variety of [client-side events]({%slug checkboxlist/client-side-programming/events/overview%}), the [client-side object model]({%slug checkboxlist/client-side-programming/checkboxlist-object%}) lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadCheckBoxList client-side object

**RadCheckBoxList** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var checkBoxList = $find("<%= RadCheckBoxList1.ClientID %>");
````

or

````JavaScript
var checkBoxList = $telerik.findCheckBoxList("<%= RadCheckBoxList1.ClientID %>");
````

## See Also

 * [CheckBoxList Object]({%slug checkboxlist/client-side-programming/checkboxlist-object%})
 
 * [Events Overview]({%slug checkboxlist/client-side-programming/events/overview%})

