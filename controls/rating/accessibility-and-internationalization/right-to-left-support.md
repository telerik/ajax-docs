---
title: Right-to-left Support
page_title: Right-to-left Support | UI for ASP.NET AJAX Documentation
description: Right-to-left Support
slug: rating/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-left Support



## 

The __RadRating__ fully supports right-to-left (RTL) language locales. In order to turn on the RTL support you should set its __IsDirectionReversed__ property to __true__ as well as __dir=rtl to the html or body__ elements or to its direct parent.

````ASPNET
	    <div dir="rtl">
	        <telerik:RadRating ID="RadRating" runat="server" ItemCount="7" IsDirectionReversed="true">
	        </telerik:RadRating>
	    </div>
````

![radrating-rtl-screenshot](images/radrating-rtl-screenshot.png)

# See Also

 * [See this live in an online demo](http://demos.telerik.com/aspnet-ajax/rating/examples/righttoleft/defaultcs.aspx)
