---
title: Overview
page_title: Client-side Programming Overview - RadRadioButtonList
description: Check our Web Forms article about Overview.
slug: radiobuttonlist/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadRadioButtonList** provides a flexible client-side API. You can easily interact with the checkbox in the browser using the RadRadioButtonList client-side object. In addition to a variety of [client-side events]({%slug radiobuttonlist/client-side-programming/events/overview%}), the [client-side object model]({%slug radiobuttonlist/client-side-programming/radiobuttonlist-object%}) lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadRadioButtonList client-side object

**RadRadioButtonList** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var radioButtonList = $find("<%= RadRadioButtonList1.ClientID %>");
````

or

````JavaScript
var radioButtonList = $telerik.findRadioButtonList("<%= RadRadioButtonList1.ClientID %>");
````


## Setting selected item client-side

See **Example 6** in the [Select Item]({%slug radiobuttonlist/functionality/select-item%}#select-item-client-side) article.

## Getting selected item client-side

See **Example 7** in the [Select Item]({%slug radiobuttonlist/functionality/select-item%}#get-selected-item-client-side) article.


## See Also

 * [RadioButtonList Object]({%slug radiobuttonlist/client-side-programming/radiobuttonlist-object%})
 
 * [Events Overview]({%slug radiobuttonlist/client-side-programming/events/overview%})

