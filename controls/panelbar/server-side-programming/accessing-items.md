---
title: Accessing Items
page_title: Accessing Items | RadPanelBar for ASP.NET AJAX Documentation
description: Accessing Items
slug: panelbar/server-side-programming/accessing-items
tags: accessing,items
published: True
position: 4
---

# Accessing Items



## 

**RadPanelBar** has a number of useful methods for accessing the items in the panel. The following table lists these methods:


>caption  

|  **Method**  |  **Parameters**  |  **Return Value**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|GetAllItems|none|IList`<RadPanelBarItem>`|Returns a list of all items in the panel, flattening out the panel hierarchy.|
|FindItemByText|string|RadPanelBarItem|Returns the first item in the panel whose **Text** property matches the parameter.|
|FindItemByUrl|string|RadPanelBarItem|Returns the first item in the panel whose **NavigateUrl** property matches the parameter.|
|FindItemByValue|string|RadPanelBarItem|Returns the first item in the panel whose **Value** property matches the parameter.|

# See Also

 * [Working With Items at the Server]({%slug panelbar/radpanelbar-items/working-with-items-at-the-server%})
