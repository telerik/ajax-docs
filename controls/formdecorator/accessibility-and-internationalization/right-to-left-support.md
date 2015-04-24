---
title: Right-to-left Support
page_title: Right-to-left Support | RadFormDecorator for ASP.NET AJAX Documentation
description: Right-to-left Support
slug: formdecorator/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-left Support



## 

The **RadFormDecorator** fully supports right-to-left (RTL) language locales. It is applied not only to the<body> element, but to any wrapping element as well.You only need to add the **dir=rtl attribute to the element or to the <body> tag**, or use the respective CSS property, i.e **direction: rtl;**.

````ASPNET
	    .formRow
	    {
	        float: left;
	        border-right: solid 1px #cbcbcb;
	        height: 200px;
	    }
````



````ASPNET
	    <telerik:RadFormDecorator id="FormDecorator1" runat="server" DecoratedControls="all"
	            Skin="Default" DecorationZoneID="Rtl1">
	        </telerik:RadFormDecorator>
	        <div dir="rtl" id="Rtl1">
	            <div class="formRow" style="padding-right: 21px;">
	                <h4>Gender:</h4>
	                <asp:RadioButtonList ID="RadioButtonList1" runat="server">
	                    <asp:ListItem Text="Male" Selected="True" />
	                    <asp:ListItem Text="Female" />
	                </asp:RadioButtonList>
	            </div>
	       </div>
````

![radformdecorator-rtl-screenshot](images/radformdecorator-rtl-screenshot.png)

# See Also

 * [See this live in an online demo](http://demos.telerik.com/aspnet-ajax/formdecorator/examples/righttoleftsupport/defaultcs.aspx)
