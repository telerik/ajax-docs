---
title: Overview
page_title: Client-side Programming Overview - RadSplitButton
description: Check our Web Forms article about Overview.
slug: splitbutton/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadSplitButton** provides a flexible client-side API. You can easily interact with the button in the browser using the RadSplitButton client-side object. In addition to a variety of [client-side events]({%slug splitbutton/client-side-programming/events/overview%}), the [client-side object model]({%slug splitbutton/client-side-programming/splitbutton-object%}) lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadSplitButton client-side object

**RadSplitButton** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var button = $find("<%= RadSplitButton.ClientID %>");
````

Check out the [Get Client-side Reference to a Control Object]({%slug general-information/get-client-side-reference%}) article to find other options to reach the control object on the client-side.

## See Also

 * [SplitButton Object]({%slug splitbutton/client-side-programming/splitbutton-object%})
 
 * [Events Overview]({%slug splitbutton/client-side-programming/events/overview%})


