---
title: Telerik.Web.UI.Diagram.Grid
page_title: Telerik.Web.UI.Diagram.Grid
description: Telerik.Web.UI.Diagram.Grid
---

# Telerik.Web.UI.Diagram.Grid

Each layout algorithm has a different set of parameters customizing the layout but they also all have a common collection of parameters which relate to the way 'pieces' of a diagram are organized. A diagram can have in general disconnected pieces, known as components, which can be organized in a way independent of the way a component on its own is arranged. In the picture above, this is one diagram consisting of four components.When you apply a certain layout an analysis will first split the diagram in components, arrange each component individually and thereafter organize the components in a grid. The common parameters referred above deal with this grid layout, they define the width, margin and padding of the (invisible) grid used to organize the components.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.Diagram.Grid

## Properties

###  ComponentSpacingX `Double`

Defines the horizontal spacing between each component. The default is 50.

###  ComponentSpacingY `Double`

Defines the vertical spacing between each component. The default is 50.

###  OffsetX `Double`

Defines the left offset of the grid layout. The default is 50.

###  OffsetY `Double`

Defines the top offset of the grid layout. The default is 50.

###  Width `Double`

Defines the width of the grid. The bigger this parameter the more components will be organized in an horizontal row. How many components really depends on your diagram and they type of layout applied to each component. The default is set to 800.

