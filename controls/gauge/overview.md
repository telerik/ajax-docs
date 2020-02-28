---
title: Overview
page_title: RadGauge Overview | RadGauge for ASP.NET AJAX Documentation
description: Overview
slug: gauge/overview
tags: overview
published: True
position: 0
---

# Gauge Overview

The **RadGauge** is a control powered by the Kendo UI Data Visualization Gauge widgets that is designed to show where the value lies according to a certain range. It was added to the suite in **Q3 2012** and its main features are:

* **Pure client-side rendering** - JavaScript is used to create the image through [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) or [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language) for older browsers like IE8 and IE7. This means that the server does not need to do anything but serialize the data, instead of creating an entire jpg or png image.

* **Different gauge types**

* [Linear]({%slug gauge/gauge-types/linear%})

* [Radial]({%slug gauge/gauge-types/radial%})

* **Animation** - when the control is being rendered it will animate until the value is shown.

* **Intuitive markup structure** - Inner tags provide hierarchical configuration of each element and the gauge types are added as separate controls (**RadLinearGauge** and **RadRadialGauge**) to make clear which is the one you need.
