---
title: AJAX updates
page_title: AJAX updates | RadSplitter for ASP.NET AJAX Documentation
description: AJAX updates
slug: splitter/how-to/ajax-updates
tags: ajax,updates
published: True
position: 0
---

# AJAX updates



## 

**RadSlidingPane**, **RadPane,** and **RadSplitBar** controls can not be updated directly with an **Ajax Manager** control.

When you want to update the content of a **RadPane** (or **RadSlidingPane**) control, just add an **asp:Panel** control (or any other container control that runs on the server) inside the pane and update the panel instead the **RadPane** (or **RadSlidingPane**).

When you want to change the **RadSlidingPane**, **RadPane** or **RadSplitBar** properties, you can do it with the [client-side API]({%slug splitter/client-side-programming/overview%}) or you can update the whole **Splitter** or **RadSlidingZone** with the **Ajax Manager** control or with an **Ajax Panel** control.

# See Also

 * [Structure]({%slug splitter/getting-started/structure%})
