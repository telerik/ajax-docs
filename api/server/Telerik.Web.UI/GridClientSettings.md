---
title: Telerik.Web.UI.GridClientSettings
page_title: Telerik.Web.UI.GridClientSettings
description: Telerik.Web.UI.GridClientSettings
---

# Telerik.Web.UI.GridClientSettings

The class containing properties associated with the client-side functionlities of Telerik.Web.UI.RadGrid .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridClientSettings

## Properties

###  DataBinding `GridClientDataBinding`

Gets a reference to  class providing properties
                related to client-side data-binding settings.

###  Selecting `GridSelecting`

Gets a reference to  class providing properties
                related to client-side selection features.

###  ClientEvents `GridClientEvents`

Gets a reference to  class.

###  ClientMessages `GridClientMessages`

Gets a reference to  class, holding properties
                that can be used for localizing Telerik RadGrid.

###  KeyboardNavigationSettings `GridKeyboardNavigationSettings`

Gets a reference to  class, holding properties
                related to RadGrid keyboard navigation.

###  ActiveRowIndex `String`

Gets or sets the index of the  active row.

###  Scrolling `GridScrolling`

Gets a reference to , which holds various
                properties for setting the Telerik RadGrid scrolling features.

###  Virtualization `GridVirtualization`

Gets a reference to the  which holds various
            properties for controling the Telerik RadGrid virtualization features.

###  Resizing `GridResizing`

Gets a reference to , which holds properties related
                to Telerik RadGrid resizing features.

###  EnableRowHoverStyle `Boolean`

Gets or sets if a style is applied when a mouse is over a row.

###  EnableAlternatingItems `Boolean`

Determines whether the alternating items will render with a different CSS class.

###  AllowRowsDragDrop `Boolean`

Gets or sets the value determining if the rows could be dragged and dropped.

###  EnablePostBackOnRowClick `Boolean`

Gets or sets the value dermeming if a row click will trigger a postback.

###  AllowKeyboardNavigation `Boolean`

Gets or sets a value indicating whether the keyboard navigation will be enabled
            in Telerik RadGrid.

#### Remarks
Arrowkey Navigation - allows end-users to navigate around
                    the menu structure using the arrow keys.select grid items pressing the [SPACE] keyedit rows hitting the [ENTER] key

###  AllowDragToGroup `Boolean`

Gets or sets a value indicating whether you will be able to drag column headers to
                 and let the grid automatically form
                 and group its data.

###  AllowColumnsReorder `Boolean`

Gets or sets a value indicating whether you will be able to reorder columns by
            using drag&drop. By default it is false.

###  AllowAutoScrollOnDragDrop `Boolean`

Gets or sets a value indicating whether MasterTableView will be automatically scrolled when an item is dragged.

###  ReorderColumnsOnClient `Boolean`

Gets or sets a value indicating whether columns will be reordered on the client.
                This property is meaningful when used in conjunction with
                 set to true.

#### Remarks
False by default, which means that each time you try to reorder columns a
                postback will be performed.Note that in case this property is true the order changes will be persisted
                on the server only after postback.

###  ColumnsReorderMethod `GridColumnsReorderMethod`

Gets or sets the columns reorder method determining behavior when reordering method.

###  AllowRowHide `Boolean`

Gets or sets a value which determines if the RadGrid rows could be hidden.

###  AllowColumnHide `Boolean`

Gets or sets the property determining if the  columns could be hidden.

###  AllowExpandCollapse `Boolean`

Gets or sets a value indicating whether the expand/collapse functionality for
                hierarchical structures in grid will be enabled.The AllowExpandCollapse property of RadGrid is meaningful with client
                hierarchy load mode only and determine
                whether the end user will be able to expand/collapse grid items. This property do
                not control the visibility of the corresponding expand/collapse column.

#### Remarks
This property should be set to true, when working in
            HierarchyLoadMode.Client.

###  AllowGroupExpandCollapse `Boolean`

Gets or sets a value indicating whether the expand/collapse functionality for
                grouped data in grid will be enabled.The AllowGroupExpandCollapse property of RadGrid is meaningful with client
                group load mode only and determine whether the end user will be able to
                expand/collapse grid items. This property do not control the visibility of the
                corresponding expand/collapse column.

###  PostBackReferences `GridPostBackReferences`

###  PostBackFunction `String`

###  Animation `GridAnimationSettings`

Gets a reference to  class providing properties
                related to client-side grid animations.

###  FirstDataRowClientRowIndex `Int32`

###  ShouldCreateRows `Boolean`

Gets if the  client-side row objects will be created.

## Methods

###  IsSet

Checks if a client settings property value was changed and differs from its
            default.

#### Remarks
This method is for Telerik RadGrid internal usage.

#### Returns

`System.Boolean` 

