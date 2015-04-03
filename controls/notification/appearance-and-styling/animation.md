---
title: Animation
page_title: Animation | UI for ASP.NET AJAX Documentation
description: Animation
slug: notification/appearance-and-styling/animation
tags: animation
published: True
position: 4
---

# Animation



## 

How the notification becomes visible on the screen can be controlled with the __Animation__ property. Possible values are:

* None

* Resize

* Fade

* Slide

* FlyIn

You can define how long the animation will take by setting the __AnimationDuration__ property. Its value is set in milliseconds. This property takes effect only if the __Animation__ property is set to a value, different than __None__ (which is the default). The default value of the __AnimationDuration__ property itself is 500 milliseconds.

For a live demonstration showing notifications with all possible combinations of values see[Configurator](http://demos.telerik.com/aspnet-ajax/notification/examples/configurator/defaultcs.aspx).

# See Also

 * [Control Appearance]({%slug notification/appearance-and-styling/control-appearance%})
