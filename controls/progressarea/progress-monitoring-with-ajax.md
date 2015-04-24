---
title: Progress Monitoring With Ajax
page_title: Progress Monitoring With Ajax | RadProgressArea for ASP.NET AJAX Documentation
description: Progress Monitoring With Ajax
slug: progressarea/progress-monitoring-with-ajax
tags: progress,monitoring,with,ajax
published: True
position: 5
---

# Progress Monitoring With Ajax



## 

While uploads [cannot be done viaAjax](FAD82F72-C811-423F-9588-5F4D380E61AA), this is not true for **custom progress measurement**.There are several scenarios in monitoring custom progress via Ajax:

1) Having RadProgressManager and RadProgressArea updated by the**RadAjaxManager/RadAjaxPanel/UpdatePanel** - RadProgressManager andRadProgressArea will be **recreated** (the progress area will flicker)when the Ajax call has finished. Due to this refresh the progress measurement (the progress-Ajax calls)will stop automatically.

2) Having only operation-specific controls, but not RadProgressManager/RadProgressArea updated(e.g. a button and a label) - RadProgressArea will not flicker when the page update finishes.However, the progress-Ajax calls will continue and the time label of the progress area will continue counting.To stop this the **RadProgressContext.Current.OperationComplete** member should be set to **True**. The progress polling will stop automatically.



# See Also

 * [Custom Progress]({%slug progressarea/custom-progress%})

 * [Known Limitations]({%slug progressarea/known-limitations%})
