---
title: Overview
page_title: Rotator Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: rotator/overview
tags: overview
published: True
position: 0
---

# Rotator Overview

**Telerik RadRotator for ASP.NET AJAX** is a flexible UI component for content rotation and personalization. The control is completely rewritten (compared to RadRotator for ASP.NET) and offers many improvements in data binding and control's handling.

##

RadRotator for ASP.NET AJAX is completely customizable in terms of appearance and offers numerous configuration options like:

* **ScrollDirection** - specifies possible directions for scrolling rotator frames. This property can take as value any combination of the Up, Down, Left and Right values.

* **[RotatorType]({%slug rotator/functionality/radrotator-types%})** - specifies the type of rotator [how the rotator will render and what options the user will have for interacting with it on the client]. Possible values for this property are: AutomaticAdvance, Buttons, FromCode.

* **ScrollDuration** - specifies the speed in milliseconds for scrolling rotator frames.

* **WrapFrames** - when set to true, this property configures the RadRotator to start scrolling the rotator frames from the beginning, once the rotator shows the last frame.

**Telerik RadTicker for ASP.NET AJAX** is a control that displays text by outputting only a single character of the text per given interval, thus simulating a "typewriter" effect on the screen. A Ticker may consist of multiple RadTickerItems. When the end of the current item is reached, the ticker continues on the next line.

![RadTicker for ASP.NET AJAX](images/rotator-ticker_overview.png)

**Note**: RadTicker supports plain text only. You cannot insert images or HTML markup in the ticker.

# See Also

 * [Changes and Backward Compatibility]({%slug rotator/changes-and-backward-compatibility%})

 * [Binding RadTicker]({%slug rotator/data-binding/binding-radticker%})
