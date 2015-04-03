---
title: Accessing Items
page_title: Accessing Items | UI for ASP.NET AJAX Documentation
description: Accessing Items
slug: panelbar/server-side-programming/accessing-items
tags: accessing,items
published: True
position: 4
---

# Accessing Items



## 

__RadPanelBar__ has a number of useful methods for accessing the items in the panel. The following table lists these methods:


>caption  

|  __Method__  |  __Parameters__  |  __Return Value__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|GetAllItems|none|IList<RadPanelBarItem>|Returns a list of all items in the panel, flattening out the panel hierarchy.|
|FindItemByText|string|RadPanelBarItem|Returns the first item in the panel whose __Text__ property matches the parameter.|
|FindItemByUrl|string|RadPanelBarItem|Returns the first item in the panel whose __NavigateUrl__ property matches the parameter.|
|FindItemByValue|string|RadPanelBarItem|Returns the first item in the panel whose __Value__ property matches the parameter.|

# See Also

 * [Working With Items at the Server]({%slug panelbar/radpanelbar-items/working-with-items-at-the-server%})
