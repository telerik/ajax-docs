---
title: Overview
page_title: Client-side Programming Overview | RadRadioButtonList for ASP.NET AJAX Documentation
description: Overview
slug: radiobuttonlist/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadRadioButtonList** provides a flexible client-side API. You can easily interact with the checkbox in the browser using the RadRadioButtonList client-side object. In addition to a variety of [client-side events]({%slug checkbox/client-side-programming/events/overview%}), the [client-side object model]({%slug checkbox/client-side-programming/checkbox-object%}) lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadRadioButtonList client-side object

**RadRadioButtonList** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var checkBox = $find("<%= RadRadioButtonList1.ClientID %>");
````

or

````JavaScript
var checkBox = $telerik.findCheckBox("<%= RadRadioButtonList1.ClientID %>");
````

## See Also

 * [CheckBox Object]({%slug checkbox/client-side-programming/checkbox-object%})
 
 * [Events Overview]({%slug checkbox/client-side-programming/events/overview%})
 
 * [OnClientClicking]({%slug checkbox/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug checkbox/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug checkbox/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug checkbox/client-side-programming/events/onclientmouseout%})



