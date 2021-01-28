---
title: RadMenu Goes Behind Flash Object
page_title: RadMenu Goes Behind Flash Object - RadMenu
description: Check our Web Forms article about RadMenu Goes Behind Flash Object.
slug: menu/troubleshooting/radmenu-goes-behind-flash-object
tags: radmenu,goes,behind,flash,object
published: True
position: 1
---

# RadMenu Goes Behind Flash Object

## 

**Q:** Why does my RadMenu goes behind flash objects in Firefox browser?

**A:** Set the **W-MODE** attribute of the Flash to **opaque** (preferably) or **transparent**.

To the Embed tag, add the following attribute:

````ASP.NET
<embed ... wmode="opaque" ...>			
````

Here is a couple of articles for additional information on Flash and W-MODE options:

[Flash, DHTML Menus and Accessibility](http://www.communitymx.com/content/article.cfm?cid=e5141)

[WHAT IS W-MODE?](http://mediakit.go.com/support/whatis_wmode.html)
