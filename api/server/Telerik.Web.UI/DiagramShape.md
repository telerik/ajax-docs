---
title: Telerik.Web.UI.DiagramShape
page_title: Telerik.Web.UI.DiagramShape
description: Telerik.Web.UI.DiagramShape
---

# Telerik.Web.UI.DiagramShape

Defines the shape options.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.DiagramShape

## Properties

###  Id `String`

The unique identifier for a Shape.

###  Editable `Boolean`

Specifies editable properties for shapes

###  EditableSettings `Boolean`

Specifies editable properties for shapes

###  Selectable `Boolean`

Toggles the selection on shapes

###  Path `String`

The path option of a Shape is a description of a custom geometry. The format follows the standard SVG format (http://www.w3.org/TR/SVG/paths.html#PathData "SVG Path data.").

###  StrokeSettings `ShapeStroke`

Defines the stroke configuration.

###  Type `String`

Specifies the type of the Shape using any of the built-in shape type.

###  X `Double`

Defines the x-coordinate of the shape when added to the diagram.

###  Y `Double`

Defines the y-coordinate of the shape when added to the diagram.

###  MinWidth `Double`

Defines the minimum width the shape should have, i.e. it cannot be resized to a value smaller than the given one.

###  MinHeight `Double`

Defines the minimum height the shape should have, i.e. it cannot be resized to a value smaller than the given one.

###  Width `Double`

Defines the width of the shape when added to the diagram.

###  Height `Double`

Defines the height of the shape when added to the diagram.

###  FillSettings `Fill`

Defines the fill options of the shape.

###  HoverSettings `ShapeHover`

Defines the hover configuration.

###  ConnectorsCollection `DiagramShapeConnectorsCollection`

Defines the connectors the shape owns.

###  RotationSettings `ShapeRotation`

Defines the rotation applied to the shape.

###  ContentSettings `ShapeContent`

Defines the shapes content settings.

###  Visual `String`

A function returning a visual element to render for this shape.

###  Source `String`

