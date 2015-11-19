---
title: Telerik.Web.UI.Diagram.ShapeDefaults
page_title: Telerik.Web.UI.Diagram.ShapeDefaults
description: Telerik.Web.UI.Diagram.ShapeDefaults
---

# Telerik.Web.UI.Diagram.ShapeDefaults

Defines the shape options.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.Diagram.ShapeDefaults : IDefaultCheck

## Properties

###  ConnectorsCollection `DiagramShapeConnectorsCollection`

Defines the connectors the shape owns.You can easily define your own custom connectors or mix-match with the above defined custom connectors.Example - custom shape with custom connectorsThe following defines a custom shape with connectors adapted to the shape's outline. Note in particular the various helpful methods (right(), left(), top()) to define positions relative to the shape.

###  ContentSettings `Content`

Defines the shapes content settings.

###  Editable `Boolean`

Specifies editable properties for shapes

###  EditableSettings `Boolean`

Specifies editable properties for shapes

###  FillSettings `Fill`

Defines the fill options of the shape.

###  Height `Double`

Defines the height of the shape when added to the diagram.

###  HoverSettings `ShapeHover`

Defines the hover configuration.

###  MinHeight `Double`

Defines the minimum height the shape should have, i.e. it cannot be resized to a value smaller than the given one.

###  MinWidth `Double`

Defines the minimum width the shape should have, i.e. it cannot be resized to a value smaller than the given one.

###  Path `String`

The path option of a Shape is a description of a custom geometry. The format follows the standard SVG format (http://www.w3.org/TR/SVG/paths.html#PathData "SVG Path data.").

###  RotationSettings `ShapeRotation`

Defines the rotation of the shapes.

###  Selectable `Boolean`

Specifies Selectable properties for shapes

###  Source `String`

The source of the shape image. Applicable when the type is set to "image".

###  StrokeSettings `ShapeStroke`

Defines the stroke configuration.

###  Type `String`

Specifies the type of the Shape using any of the built-in shape type.

###  Visual `String`

A function returning a visual element to render for a given shape. The following primitives can be used to construct a composite visual:

###  Width `Double`

Defines the width of the shape when added to the diagram.

###  X `Double`

Defines the x-coordinate of the shape when added to the diagram.

###  Y `Double`

Defines the y-coordinate of the shape when added to the diagram.

