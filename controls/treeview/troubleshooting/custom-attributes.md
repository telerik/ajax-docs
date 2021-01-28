---
title: Custom Attributes
page_title: Custom Attributes - RadTreeView
description: Check our Web Forms article about Custom Attributes.
slug: treeview/troubleshooting/custom-attributes
tags: custom,attributes
published: True
position: 12
---

# Custom Attributes



## 

**PROBLEM**

The **get_attributes().getAttribute(attributeName)** method does not work.



**DESCRIPTION**

By design all custom attributes which are **valid html attributes** (such as "type", "onclick" etc) are rendered as **html attributes** and are not serialized in the attributes collection. You can still access them on the server-side though. If you need to access them on the client-side you can use this code:

````JavaScript
var myValidHtmlCustomAttribute = node.get_textElement().getAttribute('type');
````





**RECOMMENDATION**

Avoid using names of custom attributes which are valid html attributes. These include:

"accesskey",

"align",

"class",

"dir",

"disabled",

"id",

"href",

"hreflang",

"lang",

"language",

"rel",

"rev",

"style",

"tabindex",

"target",

"title",

"type",

"urn",

"onactivate",

"onafterupdate",

"onbeforeactivate",

"onbeforecopy",

"onbeforecut",

"onbeforedeactivate",

"onbeforeeditfocus",

"onbeforepaste",

"onbeforeupdate",

"onblur",

"onclick",

"oncontextmenu",

"oncontrolselect",

"oncopy",

"oncut",

"ondblclick",

"ondeactivate",

"ondrag",

"ondragend",

"ondragenter",

"ondragleave",

"ondragover",

"ondragstart",

"ondrop",

"onerrorupdate",

"onfilterchange",

"onfocus",

"onfocusin",

"onfocusout",

"onhelp",

"onkeydown",

"onkeypress",

"onkeyup",

"onlayoutcomplete",

"onlosecapture",

"onmousedown",

"onmouseenter",

"onmouseleave",

"onmousemove",

"onmouseout",

"onmouseover",

"onmouseup",

"onmousewheel",

"onmove",

"onmoveend",

"onmovestart",

"onpaste",

"onpropertychange",

"onreadystatechange",

"onresize",

"onresizeend",

"onresizestart",

"onscroll",

"onselectstart",

"ontimeerror",

"*_designerregion*"

# See Also

 * [Custom Attributes Overview]({%slug treeview/custom-attributes/custom-attributes-overview%})
