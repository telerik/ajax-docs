---
title: Overview
page_title: Client-side Programming Overview | RadToggleButton for ASP.NET AJAX Documentation
description: Overview
slug: togglebutton/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadToggleButton** provides a flexible client-side API. You can easily interact with the button in the browser using the RadToggleButton client-side object. In addition to a variety of [client-side events]({%slug togglebutton/client-side-programming/events/overview%}), the [client-side object model]({%slug togglebutton/client-side-programming/togglebutton-object%}) lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadToggleButton client-side object

**RadToggleButton** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var toggleButton = $find("<%= RadToggleButton1.ClientID %>");
````

or

````JavaScript
var toggleButton = $telerik.findToggleButton("<%= RadToggleButton1.ClientID %>");
````

## See Also

 * [ToggleButton Object]({%slug togglebutton/client-side-programming/togglebutton-object%})
 
 * [Events Overview]({%slug togglebutton/client-side-programming/events/overview%})
 
 * [OnClientClicking]({%slug togglebutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug togglebutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug togglebutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug togglebutton/client-side-programming/events/onclientmouseout%})



