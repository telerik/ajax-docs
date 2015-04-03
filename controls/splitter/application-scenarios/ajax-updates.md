---
title: AJAX updates
page_title: AJAX updates | UI for ASP.NET AJAX Documentation
description: AJAX updates
slug: splitter/application-scenarios/ajax-updates
tags: ajax,updates
published: True
position: 0
---

# AJAX updates



## 

__RadSlidingPane__, __RadPane,__ and __RadSplitBar__ controls can not be updated directly with an __Ajax Manager__ control.

When you want to update the content of a __RadPane__ (or __RadSlidingPane__) control, just add an __asp:Panel__ control (or any other container control that runs on the server) inside the pane and update the panel instead the __RadPane__ (or __RadSlidingPane__).

When you want to change the __RadSlidingPane__, __RadPane__ or __RadSplitBar__ properties, you can do it with the [client-side API]({%slug splitter/client-side-programming/overview%}) or you can update the whole __Splitter__ or __RadSlidingZone__ with the __Ajax Manager__ control or with an __Ajax Panel__ control.

# See Also

 * [Structure]({%slug splitter/getting-started/structure%})
