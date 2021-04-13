---
title: Overview
page_title: Client-side Programming Overview - RadSwitch
description: Check our Web Forms article about Overview.
slug: switch/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadSwitch** provides a flexible client-side API. You can easily interact with the switch in the browser using the RadSwitch client-side object. In addition to a variety of [client-side events]({%slug switch/client-side-programming/events/overview%}), the [client-side object model]({%slug switch/client-side-programming/switch-object%}) lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadSwitch client-side object

**RadSwitch** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var switchObj = $find("<%= RadSwitch1.ClientID %>");
````

or

````JavaScript
var switchObj = $telerik.findswitch("<%= RadSwitch1.ClientID %>");
````

## See Also

 * [Switch Object]({%slug switch/client-side-programming/switch-object%})
 
 * [Events Overview]({%slug switch/client-side-programming/events/overview%})
 
 * [OnClientClicking]({%slug switch/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug switch/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug switch/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug switch/client-side-programming/events/onclientmouseout%})



