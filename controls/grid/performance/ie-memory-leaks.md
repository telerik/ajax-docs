---
title: IE Memory Leaks
page_title: IE Memory Leaks | UI for ASP.NET AJAX Documentation
description: IE Memory Leaks
slug: grid/performance/ie-memory-leaks
tags: ie,memory,leaks
published: True
position: 4
---

# IE Memory Leaks



## 

Generally, the problem with leaking is because of JavaScript closures and lambda functions. When Internet Explorer garbage collector cleans memory objects created using closures, lambda functions are ignored and they appear to be the reason for memory leaks.

Furthermore, we found also that every HTML element marked with "display:block" attribute leaks as well.

A possible optimization technique can be to check your code for eventual memory leaks and avoid them.

You can find some additional information about this problem at following links:

[ http://msdn.microsoft.com/library/default.asp?url=/library/en-us/ietechcol/dnwebgen/ie_leak_patterns.asp ]( http://msdn.microsoft.com/library/default.asp?url=/library/en-us/ietechcol/dnwebgen/ie_leak_patterns.asp )

[http://jibbering.com/faq/faq_notes/closures.html](http://jibbering.com/faq/faq_notes/closures.html)

Have in mind that the new version of the Internet Explorer (7.x) has superior browser engine and the memory leaks are reduced to a great extent.
