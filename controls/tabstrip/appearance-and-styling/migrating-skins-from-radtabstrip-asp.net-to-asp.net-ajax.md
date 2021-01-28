---
title: Migrating Skins from RadTabStrip ASP.NET to ASP.NET AJAX
page_title: Migrating Skins from RadTabStrip ASP.NET to ASP.NET AJAX - RadTabStrip
description: Check our Web Forms article about Migrating Skins from RadTabStrip ASP.NET to ASP.NET AJAX.
slug: tabstrip/appearance-and-styling/migrating-skins-from-radtabstrip-asp.net-to-asp.net-ajax
tags: migrating,skins,from,radtabstrip,asp.net,to,asp.net,ajax
published: True
position: 0
---

# Migrating Skins from RadTabStrip ASP.NET to ASP.NET AJAX



RadTabStrip for ASP.NET AJAX has a similar rendering to its predecessor, RadTabStrip "Classic". Below is a table which shows the mapping between the CSS classes:


| RadTabStrip "Classic" selector | RadTabStrip for ASP.NET AJAX CSS class |
| ------ | ------ |
|tabstrip|RadTabStrip|
|ul|rtsUL|
|li|rtsLI|
|a|rtsLink|
|.selected|rtsSelected|
|wrap|rtsOut|
|innerWrap|rtsIn|
|levelwrap|rtsLevel|
|level1|rtsLevel1|
|first|rtsFirst|
|last|rtsLast|
|disabled|rtsDisabled|
|break|rtsBreak|
|leftArrow|rtsPrevArrow|
|rightArrow|rtsNextArrow|
|leftArrowDisabled|rtsPrevArrowDisabled|
|rightArrowDisabled|rtsNextArrowDisabled|

## Overlapping tabs

If your existing skin includes overlapping tabs, minor changes could be necessary (apart from changing the CSS classes) - the RadTabStrip for ASP.NET AJAX does not position its tabs relatively and thus a negative margin will not work as expected. The overlapping effect is achieved by using the two CSS classes of rtsBefore and rtsAfter, which are applied on the tabs that are next to the currently selected tab.
