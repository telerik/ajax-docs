---
title: Telerik.Web.UI.Map.Bubble
page_title: Telerik.Web.UI.Map.Bubble
description: Telerik.Web.UI.Map.Bubble
---

# Telerik.Web.UI.Map.Bubble

The default configuration for bubble layers.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.Map.Bubble

## Properties

###  Attribution `String`

The attribution for all bubble layers.

###  Opacity `Double`

The the opacity of all bubble layers.

###  MaxSize `Double`

The maximum symbol size for bubble layer symbols.

###  MinSize `Double`

The minimum symbol size for bubble layer symbols.

###  StyleSettings `Style`

The default style for bubble layer symbols.

###  Symbol `String`

The default symbol for bubble layers. Possible values:
            	* square
            	* circle
            The function must accept an object with the following fields:
            	* center - The symbol center on the current layer.
            	* size - The symbol size. * style - The symbol style.
            	* dataItem - The dataItem used to create the symbol.
            	* location - The location of the data point.The function return value must be a kendo.dataviz.drawing.Shape.

