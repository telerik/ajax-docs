---
title: Overview
page_title: Client-side Programming Overview - RadPushButton
description: Check our Web Forms article about Overview.
slug: pushbutton/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadPushButton** provides a flexible client-side API. You can easily interact with the button in the browser using the RadPushButton client-side object. In addition to a variety of [client-side events]({%slug pushbutton/client-side-programming/events/overview%}), the [client-side object model]({%slug pushbutton/client-side-programming/pushbutton-object%}) lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadPushButton client-side object

**RadPushButton** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var button = $find("<%= RadPushButton1.ClientID %>");
````

````JavaScript
var button = $telerik.findpushbutton("<%= RadPushButton1.ClientID %>");
````

## See Also

 * [PushButton Object]({%slug pushbutton/client-side-programming/pushbutton-object%})
 
 * [Events Overview]({%slug pushbutton/client-side-programming/events/overview%})
 
 * [OnClientClicking]({%slug pushbutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug pushbutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug pushbutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug pushbutton/client-side-programming/events/onclientmouseout%})



