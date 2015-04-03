---
title: Attributes Object
page_title: Attributes Object | UI for ASP.NET AJAX Documentation
description: Attributes Object
slug: toolbar/client-side-programming/attributes-object
tags: attributes,object
published: True
position: 5
---

# Attributes Object



## 

The __Attributes__ object is returned by the __get_attributes()__ method of the [RadToolBar]({%slug toolbar/client-side-programming/radtoolbar-object%}) or [RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%}) client object. The following table lists its methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_count__ |none|integer|Returns the number of custom attributes in the collection.|
| __getAttribute__ |string|string|Returns the value of the custom attribute with the specified name|
| __removeAttribute__ |string|none|Removes the attribute with the specified name from the collection.|
| __setAttribute__ |string, string|none|Sets the attribute named by the first parameter to the value specified by the second parameter.|
