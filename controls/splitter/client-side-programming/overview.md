---
title: Overview
page_title: Client-side Programming Overview | RadSplitter for ASP.NET AJAX Documentation
description: Overview
slug: splitter/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



**RadSplitter** provides a flexible client-side API. You can easily interact with the splitter in the browser using the splitter client-side object.

## Getting the RadSplitter client-side object

**RadSplitter** creates a client-side object with the **ClientID** of the splitter. You can obtain a reference using the **$find()** method, as shown in the following JavaScript code:

````JavaScript
	
	        var splitter = $find("<%= RadSplitter1.ClientID %>");
	
````



>caution The <%= ... %> codeblock must be placed inside the BODY element of the page.
>


## Getting the instance of a particular RadPane

Once you get the client-side object of **RadSplitter**, you can use the **getPaneById()** method to get the instance of a particular pane:

````JavaScript
	
	        var splitter = $find("<%= RadSplitter1.ClientID %>"); 
	        var pane = splitter.getPaneById(paneID);
	
````



## Getting the instance of a particular RadSlidingZone

**RadSlidingZone** creates a client-side object with the **ClientID** of the sliding zone. You can obtain the reference using the following JavaScript code:

````JavaScript
	
	        var slidingZone = $find("<%= RadSlidingZone1.ClientID %>");
	
````



## Getting the instance of a particular RadSlidingPane

Once you get the client-side object of **RadSlidingZone**, you can use the **getPaneById()** method to get the instance of a particular sliding pane:

````JavaScript
	
	        var slidingZone = $find("<%= RadSlidingZone1.ClientID %>"); 
	        var slidingPane = slidingZone.getPaneById(paneID);
	
````



## Calling a client-side method

When you get the instance of a particular control, you can call its client-side methods to perform various tasks. The following example shows how to collapse a **RadPane** control:

````JavaScript
	
	        function CollapsePane(paneId)
	        {
	            var splitter = $find("<%= RadSplitter1.ClientID %>");
	            var pane = splitter.getPaneById(paneId);
	            if (pane)
	            {
	                pane.collapse();
	            }
	            else
	            {
	                alert("Pane with ID '" + paneId + "' not found.");
	            } 
	        }
	
````



# See Also

 * [RadSplitter Object]({%slug splitter/client-side-programming/radsplitter-object%})

 * [RadPane Object]({%slug splitter/client-side-programming/radpane-object%})

 * [RadSplitBar Object]({%slug splitter/client-side-programming/radsplitbar-object%})

 * [RadSlidingZone Object]({%slug splitter/client-side-programming/radslidingzone-object%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [Overview]({%slug splitter/client-side-programming/events/overview%})
