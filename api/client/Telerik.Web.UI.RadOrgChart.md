---
title: Telerik.Web.UI.RadOrgChart
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadOrgChart
slug: Telerik.Web.UI.RadOrgChart
---

# Telerik.Web.UI.RadOrgChart : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadOrgChart]({%slug Telerik.Web.UI.RadOrgChart%})*


## Methods

### drillDownOnNode

DrillDown on particular Node by hierarchical index(e.g. "1:1:0").

#### Parameters

##### hierarchicalIndex `Element`

The hierarchical index of the node 

#### Returns

`None` 

### get_allowGroupItemDragging

Returns whether user is allowed to drag and drop group items.

#### Parameters

#### Returns

`Boolean` 

### get_element

Gets the root DOM element of the RadOrgChart

#### Parameters

#### Returns

`Element` 

### get_nodeListElement

Gets the UL element of the RadOrgChart

#### Parameters

#### Returns

`Object` 

### get_nodes

Gets a collection with all nodes

#### Parameters

#### Returns

`Object` 


## Events

### nodePopulating 

The nodePopulating client-side event handler is called when the RadOrgChart is about to request the child nodes of the expanded node. 
The event is raised only for a client-side data binding and can be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadOrgChart`

The instance of the RadOrgChart raised the event.

##### eventArgs `Telerik.Web.UI.RadOrgChartNodePopulatingArguments`

The event arguments.

### groupPopulated

The groupPopulated client-side event handler is called when the RadOrgChart has received the group items within a node from the Web Service. 
The event is raised only for a client-side data binding and cannot be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadOrgChart`

The instance of the RadOrgChart raised the event.

##### eventArgs `Telerik.Web.UI.RadOrgChartGroupPopulatedArguments`

The event arguments.

### groupPopulating

The groupPopulating client-side event handler is called when the RadOrgChart is about to request the group items within a node. 
The event is raised only for a client-side data binding and can be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadOrgChart`

The instance of the RadOrgChart raised the event.

##### eventArgs `Telerik.Web.UI.RadOrgChartGroupPopulatingArguments`

The event arguments.

### groupPopulationFailed

The groupPopulationFailed client-side event handler is called when a request to the Web Service has failed. The event is raised only for a client-side data binding.

#### Event Data

##### sender `Telerik.Web.UI.RadOrgChart`

The instance of the RadOrgChart raised the event.

##### eventArgs `Telerik.Web.UI.RadOrgChartGroupPopulationFailedArguments`

The event arguments.
### nodePopulated

The nodePopulated client-side event handler is called when the RadOrgChart has received from the Web Service the child nodes of the expanded node. 
The event is raised only for a client-side data binding and cannot be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadOrgChart`

The instance of the RadOrgChart raised the event.

##### eventArgs `Telerik.Web.UI.RadOrgChartNodePopulatedArguments`

The event arguments.

### nodePopulationFailed

The nodePopulationFailed client-side event handler is called when a request to the Web Service has failed. 
The event is raised only for a client-side data binding.

#### Event Data

##### sender `Telerik.Web.UI.RadOrgChart`

The instance of the RadOrgChart raised the event.

##### eventArgs `Telerik.Web.UI.RadOrgChartNodePopulationFailedArguments`

The event arguments.


