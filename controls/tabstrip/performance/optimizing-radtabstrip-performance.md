---
title: Optimizing RadTabStrip Performance
page_title: Optimizing RadTabStrip Performance - RadTabStrip
description: Check our Web Forms article about Optimizing RadTabStrip Performance.
slug: tabstrip/performance/optimizing-radtabstrip-performance
tags: performance,optimizing
published: True
position: 0
---

# Optimizing RadTabStrip Performance

Having lots of page views (inside RadMultiPage) can slow down switching between tabs. Also it generates lots of HTML (because of the controls contained in the pageviews). To tackle this problem we have an [online example](https://demos.telerik.com/aspnet-ajax/TabStrip/Examples/ApplicationScenarios/LoadOnDemand/DefaultCS.aspx) demonstrating how to load pageviews on demand via AJAX. The multipage also has a property “RenderSelectedPageOnly” which does exactly what it says. In this case switching to a new page view requires postback. **RadAjaxManager & RadAjaxPanel** performance problems can be caused by large updating areas with lots of HTML (especially tables), JavaScript files, JavaScript components and CSS. More info: [Optimizing client-side performance]({%slug ajaxmanager/performance/optimizing-performance-using-radajaxmanager%})

