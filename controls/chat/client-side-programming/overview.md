---
title: Overview
page_title: Overview | RadChat for ASP.NET AJAX Documentation
description: Client-side Programming Overview
slug: chat/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

The **RadChat** control is built on top of the [Kendo UI Chat](http://demos.telerik.com/kendo-ui/chat/index). This allows you to interact with the chat entirely on the client-side.

## Getting the RadChat Client-side Object

**RadChat** creates a client-side object, which can be referred via the **ClientID** of the control and the **$find** function. Then, you can access the actual object that exposes the API of the Kendo UI chat through the **get_kendoWidget** method of **RadChat**'s client-side object as shown in **Example 1**.

When you have referenced the Kendo UI chat, you can utilize the [full capabilities of its API](http://docs.telerik.com/kendo-ui/api/javascript/ui/chat). 

>caption  Example 1: Get a reference to the underlying Kendo UI Chat widget.
````JavaScript
var radchat = $find("<%= RadChat1.ClientID %>");
var kendochat = radchat.get_kendoWidget();
````

# See Also

 * [Kendo UI Chat API](http://docs.telerik.com/kendo-ui/api/javascript/ui/chat)

 * [RadChat Client-side Object]({%slug chat/client-side-programming/objects/radchat%})

 * [Client-side events Overview]({%slug chat/client-side-programming/events%})

