---
title: How to set height to 100% when using ContentUrl in PageView
page_title: How to set height to 100% when using ContentUrl in PageView | UI for ASP.NET AJAX Documentation
description: How to set height to 100% when using ContentUrl in PageView
slug: tabstrip/troubleshooting/how-to-set-height-to-100%-when-using-contenturl-in-pageview
tags: how,to,set,height,to,100%,when,using,contenturl,in,pageview
published: True
position: 0
---

# How to set height to 100% when using ContentUrl in PageView



## Problem

Can not set width to 100% when using RadPageView of a RadMultiPage control when having *ContentUrl* property set to another aspx page (ex: * ContentUrl="Default2.aspx"***). The contents are chopped vertically, and are only visible by scrolling up/down. Setting a height of "100%" on either the RadTab or RadPageView has no effect. The only way we have been able to override that is by setting the RadPageView height in pixels.

>note Please note that width to 100% can be set only when the ContentUrl redirects to another aspx page and not to a url. When *ContentUrl* is set to a website in another domain (like google.com) the mentioned approach may not be used due to[cross site scripting](http://en.wikipedia.org/wiki/Cross-site_scripting).
>


## Solution

Add the following javascript to the below definition of the RadTabStrip control:

>note Note that the following JavaScript needs to be put in the page whose content needs to be loaded (in the particular case this would be the __Default2.aspx__ page). If you have Telerik controls on the page but __$telerik__ is still undefined make sure that the script provided is placed after the script manager declaration.
>


````ASPNET
		<telerik:radtabstrip id="RadTabStrip1" runat="server" selectedindex="0" multipageid="RadMultipage1"> 
	                <Tabs>
	                    <telerik:RadTab Text="Tab1" PageViewID=" RadMultipage1">
	                    </telerik:RadTab>
	                    <telerik:RadTab Text="Tab2">
	                    </telerik:RadTab>
	                    <telerik:RadTab Text="Tab3">
	                    </telerik:RadTab>
	                </Tabs>
	            </telerik:radtabstrip>
		<telerik:radmultipage id="RadMultipage1" runat="server" selectedindex="0"> 
	                <telerik:RadPageView runat="server" ID="RadPageView1" ContentUrl="Default2.aspx" /> 
	            </telerik:radmultipage>
````



````JavaScript
		<script type="text/javascript">
	        
	        function resize() {
	            var height = getDocHeight();
	            var elements = window.top.document.getElementsByTagName("div");    
	            
	            for (var i = 0; i < elements.length; i++) {
	                var containerPageViewID = "RadPageView1";
	            
	                if (elements[i].id.indexOf(containerPageViewID) > -1) {
	                    elements[i].style.height = height + "px";
	                    break;
	                }
	            }
	        }
	        
	        if (window.addEventListener)
	            window.addEventListener("load", resize, false);
	        else if (window.attachEvent)
	            window.attachEvent("onload", resize);
	        else window.onload = resize;
	        
	        function getDocHeight() {
	            var D = document;
	            return  Math.max(
	                Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
	                Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
	                Math.max(D.body.clientHeight, D.documentElement.clientHeight)
	            );
	        }
	    
	    </script>
````


