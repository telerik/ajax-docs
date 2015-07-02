---
title: Telerik.Web.UI.ListBoxButtonSettings
page_title: Telerik.Web.UI.ListBoxButtonSettings
description: Telerik.Web.UI.ListBoxButtonSettings
---

# Telerik.Web.UI.ListBoxButtonSettings

Represents the settings of the buttons in a Telerik.Web.UI.RadListBox controls.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.ListBoxButtonSettings

## Properties

###  AreaWidth `Unit`

Gets or sets the width of the button area.

#### Remarks
The AreaWidth property is taken into consideration only if the  property is set to  or 
            . If not the button area is as wide as the listbox control.

###  AreaHeight `Unit`

Gets or sets the height of the button area.

#### Remarks
The AreaWidth property is taken into consideration only if the  property is set to  or 
            . If not the button area is as tall as the listbox control.

###  Position `ListBoxButtonPosition`

Gets or sets the position of the buttons.

###  RenderButtonText `Boolean`

When set to true enables render text on buttons functionality

###  HorizontalAlign `ListBoxHorizontalAlign`

Gets or sets the horizontal align of the buttons within the button area.

#### Remarks
The HorizontalAlign property is taken into consideration only if the  property is set to  or 
            .

###  VerticalAlign `ListBoxVerticalAlign`

Gets or sets the vertical align of the buttons in the within the button area.

#### Remarks
The VerticalAlign property is taken into consideration only if the  property is set to  or 
            .

###  ShowDelete `Boolean`

Gets or sets a value indicating whether to display the "delete" button.

#### Remarks
RadListBox displays the "delete" button when the  and 
            	properties are both set to true.

###  ShowReorder `Boolean`

Gets or sets a value indicating whether to display the "reorder" buttons.

#### Remarks
RadListBox displays the "reorder" buttons when the  and 
            	properties are both set to true.

###  ShowTransfer `Boolean`

Gets or sets a value indicating whether to display the "transfer" buttons.

#### Remarks
RadListBox displays the "transfer" buttons when the  and 
            	properties are both set to true.

###  ShowTransferAll `Boolean`

Gets or sets a value indicating whether to display the "transfer all" buttons.

#### Remarks
RadListBox displays the "transfer all" buttons when the  and 
            	properties are both set to true.

###  ReorderButtons `ListBoxReorderButtons`

Gets or sets a value that specifies which reorder buttons should be rendered.

#### Remarks
A value that specifies which reorder buttons should be rendered. Members might be
            combined using bitwise operators allowing for custom configurations.

###  TransferButtons `ListBoxTransferButtons`

Gets or sets a value that specifies which transfer buttons should be rendered.

#### Remarks
A value that specifies which transfer buttons should be rendered. Members might be
            combined using bitwise operators allowing for custom configurations.

