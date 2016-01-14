---
title: Telerik.Web.UI.Gauge.LinearScale
page_title: Telerik.Web.UI.Gauge.LinearScale
description: Telerik.Web.UI.Gauge.LinearScale
---

# Telerik.Web.UI.Gauge.LinearScale

Represents the scale of a Linear Gauge.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.Gauge.ScaleBase
* Telerik.Web.UI.Gauge.LinearScale

## Properties

###  Labels `ScaleLabels`

Defines the settings of the Scale's Labels.

###  MajorTicks `Ticks`

Defines the settings of the Scale's Major ticks.

###  MajorUnit `Nullable`1`

Gets or sets the interval between the major divisions.

###  Max `Decimal`

Gets or sets the maximum value of the scale.

###  Min `Decimal`

Gets or sets the minimum value of the scale.

###  MinorTicks `Ticks`

Defines the settings of the Scale's Minor ticks.

###  MinorUnit `Decimal`

Gets or sets the interval between the minor divisions.

###  Mirror `Boolean`

Gets or sets a bool value that indicates whether the scale labels and ticks will be mirrored. 
            If the labels are normally on the left side of the scale, mirroring the scale will render them to the right.

###  Ranges `GaugeRangeCollection`

Defines a collection of gauge ranges.

###  Reverse `Boolean`

Gets or sets a bool value indicating whether the direction of the scale values will be reversed.
            
            RadialGauge: Values increase counter-clockwise.
            LinearGauge: Values increase from right to left (if the LinearGauge is horizontal), 
            and from top to bottom (if the LinearGauge is vertical).

###  Vertical `Boolean`

Gets or sets a bool value indicating whether the LinearGauge will be vertically or horizontally positioned.

