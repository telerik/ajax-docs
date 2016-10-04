---
title: Attributes Object
page_title: Attributes Object | RadToolBar for ASP.NET AJAX Documentation
description: Attributes Object
slug: toolbar/client-side-programming/attributes-object
tags: attributes,object
published: True
position: 4
---

# Attributes Object



## 

The **Attributes** object is returned by the **get_attributes()** method of the [RadToolBar]({%slug toolbar/client-side-programming/radtoolbar-object%}) or [RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%}) client object. The following table lists its methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_count** |none|integer|Returns the number of custom attributes in the collection.|
| **getAttribute** |string|string|Returns the value of the custom attribute with the specified name|
| **removeAttribute** |string|none|Removes the attribute with the specified name from the collection.|
| **setAttribute** |string, string|none|Sets the attribute named by the first parameter to the value specified by the second parameter.|
