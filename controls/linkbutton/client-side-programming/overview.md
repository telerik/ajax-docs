---
title: Overview
page_title: Client-side Programming Overview - RadLinkButton
description: Check our Web Forms article about Overview.
slug: linkbutton/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadLinkButton** provides a flexible client-side API. You can easily interact with the button in the browser using the RadLinkButton client-side object and take advantage of the full set of [client-side events]({%slug linkbutton/client-side-programming/events/overview%}).

## Getting the RadLinkButton Client-side object

**RadLinkButton** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var button = $find("<%= RadLinkButton1.ClientID %>");
````

````JavaScript
var button = $telerik.findLinkButton("<%= RadLinkButton1.ClientID %>");
````

# See Also

 * [RadLinkButton Object]({%slug linkbutton/client-side-programming/linkbutton-object%})
 * [Events Overview]({%slug linkbutton/client-side-programming/events/overview%})
 * [OnClientClicking]({%slug linkbutton/client-side-programming/events/onclientclicking%})
 * [OnClientClicked]({%slug linkbutton/client-side-programming/events/onclientclicked%})
 * [OnClientMouseOver]({%slug linkbutton/client-side-programming/events/onclientmouseover%})
 * [OnClientMouseOut]({%slug linkbutton/client-side-programming/events/onclientmouseout%})





