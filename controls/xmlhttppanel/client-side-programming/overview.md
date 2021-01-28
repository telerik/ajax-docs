---
title: Overview
page_title: Client-side Programming Overview - RadXmlHttpPanel
description: Check our Web Forms article about Overview.
slug: xmlhttppanel/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview


 

To get a reference to the **RadXmlHttpPanel** control, use the ASP.NET AJAX's native **$find()** method:

````JavaScript
var panel = $find("<%=RadXmlHttpPanel.ClientID %>");
````



Note, that this object is available in the **Sys.Application.Load event** at the earliest.

Once you have the client-side object of the control, you can use its [client-side API]({%slug xmlhttppanel/client-side-programming/xmlhttppanel-object%}).

The control offers a number of [client-side events]({%slug xmlhttppanel/client-side-programming/events/overview%}) to let the developer apply the logic needed by the current project.

# See Also

 * [XmlHttpPanel Object]({%slug xmlhttppanel/client-side-programming/xmlhttppanel-object%})

 * [Overview]({%slug xmlhttppanel/client-side-programming/events/overview%})
