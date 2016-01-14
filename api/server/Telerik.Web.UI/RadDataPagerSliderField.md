---
title: Telerik.Web.UI.RadDataPagerSliderField
page_title: Telerik.Web.UI.RadDataPagerSliderField
description: Telerik.Web.UI.RadDataPagerSliderField
---

# Telerik.Web.UI.RadDataPagerSliderField

Slider field which provides interface for
            changing the page size with a Telerik.Web.UI.RadSlider control.
            Telerik.Web.UI.RadSlider

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadDataPagerField
* Telerik.Web.UI.RadDataPagerSliderField

## Properties

###  HiddenLg `Boolean`

Hidden attribute - Large

###  HiddenMd `Boolean`

Hidden attribute - Medium

###  HiddenSm `Boolean`

Hidden attribute - Small

###  HiddenXl `Boolean`

Hidden attribute - Extra Large

###  HiddenXs `Boolean`

Hidden attribute - Extra Small

###  HorizontalPosition `PagerFieldHorizontalPosition`

Gets or sets the positioning of the pager field with regard to its CSS float style.

###  HorizontalPositionLg `PagerFieldHorizontalPosition`

Horizontal Position attribute - Large

###  HorizontalPositionMd `PagerFieldHorizontalPosition`

Horizontal Position attribute - Medium

###  HorizontalPositionSm `PagerFieldHorizontalPosition`

Horizontal Position attribute - Small

###  HorizontalPositionXl `PagerFieldHorizontalPosition`

Horizontal Position attribute - Extra Large

###  HorizontalPositionXs `PagerFieldHorizontalPosition`

Horizontal Position attribute - Extra Small

###  LabelTextFormat `String`

Get or set the format of the label text. Default value is "Page {0} of {1}"

###  Owner `RadDataPager`

Returns RadDataPager control that owns current pager field. 
            This property is set by DataPagerFieldCollection and is read only.

###  PagerType `String`

Gets the string representation of the type-name of this instance. The value is
            used by RadDataPager to determine the type of the pager field persisted into the ViewState, when
            recreating the pager after postback. This property is read only.

###  SliderDecreaseText `String`

Get or set RadSlider DecreaseText property.

###  SliderDragText `String`

Get or set RadSlider DragText property.

###  SliderIncreaseText `String`

Get or set RadSlider IncreaseText property.

###  SliderOrientation `Orientation`

Get or set RadSlider orientation.

###  Visible `Boolean`

Gets or sets value that indicates whether RadDataPagerField is rendered.

## Methods

###  InitializeFieldControls

#### Returns

`System.Void` 

###  InitializeFieldControls

After calling this method DataPagerField controls will be created and added to Controls colleciton
            of the passed DataPagerFieldItem

#### Parameters

#### inItem `Telerik.Web.UI.RadDataPagerFieldItem`

DataPagerFieldItem item where controls will be instanciated

#### Returns

`System.Void` 

###  SEOPagingLinkBuilder

Builds navigation url if SEO paging is enabled.

#### Parameters

#### argument `System.String`

Argument that the link must be build for.

#### Returns

`System.String` Returns string representation of navigation url.

###  ToString

Returns a  that represents the 
            current .

#### Returns

`System.String` A  that represents the current .

