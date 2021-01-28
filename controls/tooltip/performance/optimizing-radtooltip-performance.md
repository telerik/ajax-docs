---
title: Optimizing RadToolTip Performance
page_title: Optimizing RadToolTip Performance - RadToolTip
description: Check our Web Forms article about Optimizing RadToolTip Performance.
slug: tooltip/performance/optimizing-radtooltip-performance
tags: performance,optimizing
published: True
position: 0
---

# Optimizing RadToolTip Performance

**RadTooltip** and **RadTooltipManager** are quite lightweight and generally there are no problems with performance. However, in templated scenarios the number of tooltip controls on the page can easily go out of hand. We have seen scenarios involving 1000+ tooltips on a single page. Since each of them needs to be initialized on client page load, the system takes a lot of time to do it, especially If `<compilation debug=true>`. In such scenarios there is a better approach to the tooltips – and that is using a couple of lines of client-side code that will create a tooltip only when the user needs to see it. The following demo demonstrates this approach: [ToolTip - Dynamic Tooltip Creation](https://demos.telerik.com/aspnet-ajax/ToolTip/Examples/RadToolTipManagerClientAPI/DefaultCS.aspx)



 
