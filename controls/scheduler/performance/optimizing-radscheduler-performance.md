---
title: Optimizing RadScheduler Performance
page_title: Optimizing RadScheduler Performance | RadScheduler for ASP.NET AJAX Documentation
description: Optimizing RadScheduler Performance
slug: scheduler/performance/optimizing-radscheduler-performance
tags: performance,optimizing
published: True
position: 0
---

# Optimizing RadScheduler Performance

Here are some tips you can follow to optimize the **RadScheduler** control:

* Data-binding: We recommend that customers bind RadScheduler only with appointments that are visible in the currently selected view. This makes performance a non-issue, as the views are limited to a few thousand appointments at maximum.

* ViewState size: RadScheduler can work entirely without ViewState, if necessary. Customers pay the usual penalty of having to bind the data on each page load.

* JavaScript size: The script files are split into several groups that are loaded on demand. Currently the initially loaded script files weight in at 70kB (minified) with 35kB of on-demand scripts.

* JavaScript $create clause size: Depends on number of appointments. Only visible appointments are sent to the client.

* JavaScript initialization time: Currently very fast, but can be improved further if the appointment objects are created only when needed.

* Number of requests: On-demand loading of scripts generates a few additional requests. Other than that, the number is rather low, as skins contain very little number of images. Using RadScriptManager and RadStyleSheetManager reduces the number even further.

* Number of recurring appointments: Recurring appointments are stored as a single appointment with a recurrence rule. RadScheduler parses this rule and generates Appointment instances to render and show the end user. When the recurrence rule is endless or recurs on very short intervals, this may lead to many appointments being created in memory. RadScheduler allows you to add a limit—setting its `MaximumRecurrenceCandidates` property defines how many days can have an occurrence. The default is 3000. This feature does not apply to client-side binding.



 