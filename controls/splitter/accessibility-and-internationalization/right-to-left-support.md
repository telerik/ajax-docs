---
title: Right-to-left Support
page_title: Right-to-left Support | UI for ASP.NET AJAX Documentation
description: Right-to-left Support
slug: splitter/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-left Support



## 

The __RadSplitter__ fully supports right-to-left (RTL) language locales.In order to turn on the RTL support for the __RadSlidingPane__ you need to set a CSS class for it forces the __text-align__ property of the content to __right__ in order to override the default setting from the table cell. You also need to place the __RadSplitter__ in a container with __dir=rtl__ or the __direction:rtl__ CSS property.

````ASPNET
	     
	    .rtlClass
	    {
	        text-align:right;
	    }
				
````



````ASPNET
	     <telerik:RadSplitter runat="server" ID="RadSplitter1">
	            <telerik:RadPane runat="server" ID="RadPane1">
	                <telerik:RadSlidingZone Width="22px" ID="RadSlidingZone1" runat="server">
	                    <telerik:RadSlidingPane runat="server" ID="RadSlidingPane1" Title="Sliding pane 1" CssClass="rtlClass">
	                        The content from the Sliding pane takes the new direction
	                    </telerik:RadSlidingPane>
	                </telerik:RadSlidingZone>
	            </telerik:RadPane>
	            <telerik:RadPane runat="server" ID="RadPane2">
	                The sliding direction is changed and the content in the second pane also inherits the rtl direction
	            </telerik:RadPane>
	        </telerik:RadSplitter>
				
````

![radsplitter-rtl-screenshot](images/radsplitter-rtl-screenshot.png)

# See Also

 * [See this live in an online demo](http://demos.telerik.com/aspnet-ajax/tagcloud/examples/righttoleft/defaultcs.aspx)
