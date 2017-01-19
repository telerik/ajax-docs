---
title: Telerik.Web.UI.Diagram.ConnectionDefaults
page_title: Telerik.Web.UI.Diagram.ConnectionDefaults
description: Telerik.Web.UI.Diagram.ConnectionDefaults
---

# Telerik.Web.UI.Diagram.ConnectionDefaults

Defines the defaults of the connections. Whenever a connection is created, the specified connectionDefaults will be used and merged with the (optional) configuration passed through the connection creation method.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.Diagram.ConnectionDefaults : IDefaultCheck

## Properties

###  ContentSettings `ConnectionContent`

Defines the label displayed on the connection path.

###  Editable `Boolean`

Enable editing for connections by default.

###  EditableSettings `Boolean`

Defines the editable configuration by default.

###  EndCap `ConnectionEndCap`

The end cap (arrow, head or decoration) of the connection.

###  EndCapSettings `ConnectionEndCap`

The connection end cap configuration or type name.

###  FromConnector `String`

Specifies the name of the source shape connector that should be used by default.

###  HoverSettings `ConnectionHover`

Defines the hover configuration.

###  Selectable `Boolean`

Specifies if the connection can be selected.

###  SelectionSettings `Selection`

Defines the connection selection configuration.

###  StartCap `ConnectionStartCap`

The start cap (arrow, head or decoration) of the connection.

###  StartCapSettings `ConnectionStartCap`

The connection start cap configuration or type name.

###  StrokeSettings `ConnectionStroke`

Defines the stroke configuration.

###  ToConnector `String`

Specifies the name of the target shape connector that should be used by default.

###  Type `ConnectionType`

The type of the connection that defines the way it routes.

