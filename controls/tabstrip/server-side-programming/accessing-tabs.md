---
title: Accessing Tabs
page_title: Accessing Tabs | UI for ASP.NET AJAX Documentation
description: Accessing Tabs
slug: tabstrip/server-side-programming/accessing-tabs
tags: accessing,tabs
published: True
position: 4
---

# Accessing Tabs



## 

__RadTabStrip__ has a number of useful methods for accessing the tabs in the tab strip. The following table lists these methods:




>caption  

| Method | Parameters | Return Value | Description |
| ------ | ------ | ------ | ------ |
|GetAllTabs|none|IList<RadTab>|Returns a list of all tabs in the tab strip, flattening out the tab strip hierarchy.|
|FindTabByText|string|RadTab|Returns the first tab in the tab strip whose __Text__ property matches the parameter.|
|FindTabByUrl|string|RadTab|Returns the first tab in the tab strip whose __NavigateUrl__ property matches the parameter.|
|FindTabByValue|string|RadTab|Returns the first tab in the tab strip whose __Value__ property matches the parameter.|

# See Also

 * [Working With Tabs at the Server]({%slug tabstrip/tabs/working-with-tabs-at-the-server%})

 * [RadTabCollection Object]({%slug tabstrip/client-side-programming/radtabcollection-object%})

 * [RadTabStrip Object]({%slug tabstrip/client-side-programming/radtabstrip-object%})
