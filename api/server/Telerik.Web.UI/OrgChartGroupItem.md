---
title: Telerik.Web.UI.OrgChartGroupItem
page_title: Telerik.Web.UI.OrgChartGroupItem
description: Telerik.Web.UI.OrgChartGroupItem
---

# Telerik.Web.UI.OrgChartGroupItem

Represents an Telerik.Web.UI.OrgChartGroupItem OrgChartGroupItemin the Telerik.Web.UI.RadOrgChart RadOrgChartcontrol.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.OrgChartGroupItem : IDisposable, IOrgChartRendererContainer, IXmlSerializable

## Properties

###  CssClass `String`

Gets or sets the CSS class of the GroupItem.

#### Remarks
The set CSS class is rendered additionally to the GroupItem.

###  DataItem `Object`

Gets or sets data source DataItem during data binding.

###  ID `String`

Gets the value of the data field ID of the currently bound GroupItem.

#### Remarks
The value is set in Group-Enabled binding.

###  ImageAltText `String`

Gets or sets the item image's alternative text.

###  ImageUrl `String`

Gets or sets the item's image URL.

#### Remarks
If the property is not set a default image will be rendered.

###  Node `OrgChartNode`

Gets or sets the OrgChartNode to which the item belongs.

###  OrgChart `RadOrgChart`

Gets or sets the OrgChart to which the item belongs.

###  RenderedFields `OrgChartRenderedFieldCollection`

Gets OrgChartRenderedFieldCollection for OrgChartGroupItem.

###  Renderer `OrgChartGroupItemRendererBase`

Gets the Renderer for OrgChartGroupItem.

###  Template `ITemplate`

Gets or sets the Template for OrgChartGroupItem.

#### Remarks
When a template is set, it is applied only for the current item.

###  Text `String`

Gets or sets item's text.

#### Remarks
The set text will be rendered on the item.

## Methods

###  FindControl

Although OrgChartGroupItem is not a Control inheritor, it provides a method to search controls in its renderer (OrgChartGroupItemRendererBase).

#### Parameters

#### id `System.String`

The id of the searched control

#### Returns

`System.Web.UI.Control` Control instance or null

###  SyncRenderedProperties

Synchronize Renderer's properties during OnPreRender stage.

#### Returns

`System.Void` 

