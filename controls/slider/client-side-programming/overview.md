---
title: Overview
page_title: Client-side Programming Overview - RadSlider
description: Check our Web Forms article about Overview.
slug: slider/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

RadSlider provides a flexible client-side API that allows you to interact with the slider on the client.

## Getting the RadSlider client-side object

**RadSlider ClientID**

````JavaScript
var slider = $find("<%= RadSlider1.ClientID %>");
````

## Client-Side Properties

All the public properties that are defined on the server are available on the client-side object. You can get/set a property value on the client using the following notation: `radSlider1.get_[PROPERTY_NAME];radSlider1.set_[PROPERTY_NAME];`

For example to get/set the Value property using the client-side object:

````JavaScript
var slider = $find('<%= RadSlider1.ClientID %>');
slider.set_value(30);
var sliderValue = slider.get_value();
````


## See Also

 * [Events]({%slug slider/server-side-programming/events%})

 * [RadSlider Object]({%slug slider/client-side-programming/radslider-object%})

 * [Overview]({%slug slider/client-side-programming/events/overview%})

 * [OnClientLoad]({%slug slider/client-side-programming/events/onclientload%})

 * [OnClientSlide]({%slug slider/client-side-programming/events/onclientslide%})

 * [OnClientSlideEnd]({%slug slider/client-side-programming/events/onclientslideend%})

 * [OnClientSlideStart]({%slug slider/client-side-programming/events/onclientslidestart%})

 * [OnClientValueChanged]({%slug slider/client-side-programming/events/onclientvaluechanged%})
