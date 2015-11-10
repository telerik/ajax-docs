---
title: Overview
page_title: Client-side Programming Overview | RadImageButton for ASP.NET AJAX Documentation
description: Overview
slug: imagebutton/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadImageButton** provides a flexible client-side API. You can easily interact with the button in the browser using the **RadImageButton** client-side object. In addition to a variety of [client-side events]({%slug imagebutton/client-side-programming/events/overview%}), the [client-side object model]({%slug imagebutton/client-side-programming/imagebutton-object%}) lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadImageButton client-side object

**RadImageButton** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var button = $find("<%= RadImageButton1.ClientID %>");
````

````JavaScript
var button = $telerik.findimagebutton("<%= RadImageButton1.ClientID %>");
````

## See Also

 * [ImageButton Object]({%slug imagebutton/client-side-programming/imagebutton-object%})
 
 * [Events Overview]({%slug imagebutton/client-side-programming/events/overview%})
 
 * [OnClientClicking]({%slug imagebutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug imagebutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug imagebutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug imagebutton/client-side-programming/events/onclientmouseout%})



