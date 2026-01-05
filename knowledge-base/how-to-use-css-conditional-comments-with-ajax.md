---
title: Use Conditional CSS Comments with Ajax
page_title: Use Conditional CSS Comments with Ajax
description: "Learn how to use conditional CSS comments with Ajax."
slug: ajaxmanager/how-to/how-to-use-css-conditional-comments-with-ajax
previous_url: ajax/how-to/how-to-use-css-conditional-comments-with-ajax, controls/ajaxmanager/how-to/how-to-use-css-conditional-comments-with-ajax
tags: telerik, asp, net, ajax, manager, how, to, use, conditional, css
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

How can I use conditional CSS comments with Telerik UI for ASP.NET AJAX? 

## Solution

> In Internet Explorer version 10 and later conditional comments are obsolete.

With the release of Internet Explorer 7 (IE 7), more complex visual designs or layouts require developers to create separate stylesheets for different browsers. 

To create such stylesheets, you can use conditional comments with the following advantages:

* Only browsers that need or use the stylesheets will download them.

* The base stylesheets are completely standards based, serving as the foundation.

* No validation issues, such as IE expressions or untested CSS 3 rules, for browser-specific code occur as the code will be executed only if browsers supporting it

The AjaxManager looks for link or style tags and adds them to the page on AJAX request. It skips the conditional comments and, therefore, all styles are loaded after an AJAX request, no matter which browser or version it is. To work around this issue and depending on your scenario, use either of the following approaches:

* Set the `EnablePageHeadUpdate` property of the control to `false`. As a result, it will not update the `Head` tag. However, if you load controls dynamically with AJAX, their stylesheets will not be applied. To fix this issue, manually add the stylesheet declarations for the controls on the page.

* Move the conditional comments out of the `Head` tag. As a result, they will not be updated by the AjaxManager but will still be applied depending on the used browser. This workaround is also valid for XHTML 1.1 as the HTML comments are skipped by the HTML validator:

````ASP.NET
<body>
	<!--[if lte IE 6]>     <link rel="stylesheet" type="text/css" href="ie6.css" />    <![endif]-->
<form id="form1" runat="server">
````



## See Also

 * [Wikipedia: Conditional Comments](https://en.wikipedia.org/wiki/Conditional_comment)
