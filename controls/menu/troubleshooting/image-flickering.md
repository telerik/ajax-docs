---
title: Image flickering
page_title: Image flickering - RadMenu
description: Check our Web Forms article about Image flickering.
slug: menu/troubleshooting/image-flickering
tags: image,flickering
published: False
position: 0
---

# Image flickering



## 

In most cases, the reason for the flicker is that browser cache is disabled (Tools->Internet Options->Temporary Internet Files->Settings->Checks for new versions ->every visit to the page). The browser requests the background image every time, rather than only once (on page load). The request to the server and the response take some time, hence the flicker effect. If you use a skin which does not utilize background images, you will see that this effect disappears.Note that this problem is particularly visible in Internet Explorer 6. The image flicker should not appear in other browsers such as FireFox and Internet Explorer 7.

The following blog posts suggest workarounds (configuring your web server):

[http://weblogs.asp.net/scottgu/archive/2006/05/29/Eliminating-CSS-Image-Flicker-with-IE6.aspx](http://weblogs.asp.net/scottgu/archive/2006/05/29/Eliminating-CSS-Image-Flicker-with-IE6.aspx)

[http://www.aspnetresources.com/blog/cache_control_extensions.aspx](http://www.aspnetresources.com/blog/cache_control_extensions.aspx)

>caution In addition, please note that the internal VS2005 development server (Cassini) does not use cache and if you run your application through it you will always have the flicker on your pages.
>

