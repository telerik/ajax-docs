---
title: Telerik.Web.UI.Gauge.RadialScale
page_title: Telerik.Web.UI.Gauge.RadialScale
description: Telerik.Web.UI.Gauge.RadialScale
---

# Telerik.Web.UI.Gauge.RadialScale

Represents the scale of a Radial Gauge.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.Gauge.ScaleBase
* Telerik.Web.UI.Gauge.RadialScale

## Properties

###  EndAngle `Int32`

Gets or sets the end angle of the RadialGauge.
            The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinate system).

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

###  Ranges `GaugeRangeCollection`

Defines a collection of gauge ranges.

###  Reverse `Boolean`

Gets or sets a bool value indicating whether the direction of the scale values will be reversed.
            
            RadialGauge: Values increase counter-clockwise.
            LinearGauge: Values increase from right to left (if the LinearGauge is horizontal), 
            and from top to bottom (if the LinearGauge is vertical).

###  StartAngle `Int32`

Gets or sets the start angle of the RadialGauge.
            The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinate system).

