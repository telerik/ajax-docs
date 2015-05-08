---
title: How to Use Css Conditional Comments with Ajax
page_title: How to Use Css Conditional Comments with Ajax | RadAjax for ASP.NET AJAX Documentation
description: How to Use Css Conditional Comments with Ajax
slug: ajax/how-to/how-to-use-css-conditional-comments-with-ajax
tags: how,to,use,css,conditional,comments,with,ajax
published: True
position: 9
---

# How to Use CSS Conditional Comments with Ajax



## 

With the release of Internet Explorer 7 (IE 7),developers should create separate style sheets for different browsers, at least for a moderately complex visual design or layout. Note that in Internet Explorer 10 and later versions conditional comments are obsolete.One of the approaches is to use conditional comments. The advantages of that are:

* Only browsers that need (or take advantage) of the style sheets will download them.

* The base style sheets (should) be completely standards based, serving as the foundation.

* No validation issues for browser-specific code such as IE’s expressions, or untested CSS 3 rules, as the code will be executed only if browsers supporting it

This article explains how to take advantage of the CSS conditional comments and still be able to use RadAjax controls.

The **RadAjaxManager** looks for link or style tags and adds them to the page on AJAX request. It skips the conditional comments and therefore all styles are loaded after AJAX request, no matter which browser or version it is. Unfortunately, we have not found a feasible way to check for those and we cannot easily fix this problem. However, there are two workarounds that, depending on the scenario,may work for you:

* Set the **EnablePageHeadUpdate** property of the AJAXcontrol to **false** - this way it will not update the Head tag. However, if you load controls dynamically with AJAX, their stylesheets will not be applied. This is fixable as well - you just need to manually add the style sheet declarations for the controls on the page.

* Move the conditional comments out of the Head tag. This way they will not be updated by the **RadAjaxManager** but will still be applied depending on the browser used. This workaround is even valid xhtml1.1 as the HTML comments are skipped by theHTML validator:

````ASP.NET
<body>
	<!--[if lte IE 6]>     <link rel="stylesheet" type="text/css" href="ie6.css" />    <![endif]-->
<form id="form1" runat="server">
````



## See Also

 * [Wikipedia: Conditional Comments](http://en.wikipedia.org/wiki/Conditional_comment)
