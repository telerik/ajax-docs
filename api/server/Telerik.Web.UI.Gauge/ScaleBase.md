---
title: Telerik.Web.UI.Gauge.ScaleBase
page_title: Telerik.Web.UI.Gauge.ScaleBase
description: Telerik.Web.UI.Gauge.ScaleBase
---

# Telerik.Web.UI.Gauge.ScaleBase

The base class that should be inherited for implementing Gauge scale.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.Gauge.ScaleBase

## Properties

###  Labels `ScaleLabels`

Defines the settings of the Scale's Labels.

###  MinorTicks `Ticks`

Defines the settings of the Scale's Minor ticks.

###  MajorTicks `Ticks`

Defines the settings of the Scale's Major ticks.

###  Ranges `GaugeRangeCollection`

Defines a collection of gauge ranges.

###  Min `Decimal`

Gets or sets the minimum value of the scale.

###  Max `Decimal`

Gets or sets the maximum value of the scale.

###  MinorUnit `Decimal`

Gets or sets the interval between the minor divisions.

###  MajorUnit `Nullable`1`

Gets or sets the interval between the major divisions.

###  Reverse `Boolean`

Gets or sets a bool value indicating whether the direction of the scale values will be reversed.
            
            RadialGauge: Values increase counter-clockwise.
            LinearGauge: Values increase from right to left (if the LinearGauge is horizontal), 
            and from top to bottom (if the LinearGauge is vertical).

## Methods

###  LoadViewState

#### Returns

`System.Void` 

###  SaveViewState

#### Returns

`System.Object` 

###  TrackViewState

#### Returns

`System.Void` 

