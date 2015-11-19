---
title: Telerik.Web.UI.RadRatingItem
page_title: Telerik.Web.UI.RadRatingItem
description: Telerik.Web.UI.RadRatingItem
---

# Telerik.Web.UI.RadRatingItem

RadRatingItem class.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadRatingItem

## Properties

###  Value `Decimal`

Gets or sets the value of the rating item.

###  Index `Int32`

Gets the index of the rating item in the Items collection of the rating control.

###  ToolTip `String`

Gets or sets the tooltip of the rating item.

###  CssClass `String`

Gets or sets the CSS class of the rating item.

###  ImageUrl `String`

Gets or sets the path to an image to display for the item.

#### Remarks
Use the ImageUrl property to specify the image for the item. If the ImageUrl
            property is set to empty string, the item will render the image, defined in the Skin
            of the rating control. Use "~" (tilde) when referring to images within the current ASP.NET application.

###  HoveredImageUrl `String`

Gets or sets the path to an image to display for the item when it is hovered.

#### Remarks
Use the HoveredImageUrl property to specify the image for the item when it is hovered. If
            the HoveredImageUrl property is set to empty string, the item will display the HoveredSelectedImageUrl
            image. Use "~" (tilde) when referring to images within the current ASP.NET application.

###  SelectedImageUrl `String`

Gets or sets the path to an image to display for the item when it is selected.

#### Remarks
Use the SelectedImageUrl property to specify the image for the item when it is selected. If
            the SelectedImageUrl property is set to empty string, the item will display the ImageUrl 
            image. Use "~" (tilde) when referring to images within the current ASP.NET application.

###  HoveredSelectedImageUrl `String`

Gets or sets the path to an image to display for the selected item when it is hovered.

#### Remarks
Use the HoveredSelectedImageUrl property to specify the image for the selected item when it is hovered. If
            the HoveredSelectedImageUrl property is set to empty string, the item will display the SelectedImageUrl 
            image. Use "~" (tilde) when referring to images within the current ASP.NET application.

