---
title: Telerik.Web.UI.MaskPartCollection
page_title: Telerik.Web.UI.MaskPartCollection
description: Telerik.Web.UI.MaskPartCollection
---

# Telerik.Web.UI.MaskPartCollection

Represents the collection of mask parts in a RadMaskedTextBox.

## Inheritance Hierarchy

* System.Object
* System.Collections.CollectionBase
* Telerik.Web.UI.MaskPartCollection : IStateManager

## Properties

###  Item `MaskPart`

Gets a MaskPart at the specified
                index in the collection.

###  Owner `RadMaskedTextBox`

Gets or sets the RadMaskedInputControl, which uses the
            collection.

###  OwnerMaskedTextBoxSetting `RadMaskedTextBox`

Gets or sets the MaskedTextBoxSetting, which uses the
            collection.

## Methods

###  Add

Appends the specified MaskPart to
                the end of the collection.

#### Parameters

#### part `Telerik.Web.UI.MaskPart`

The MaskPart to append to the
                collection.

#### Returns

`System.Void` 

###  Contains

Determines whether the collection contains the specified item

#### Parameters

#### part `Telerik.Web.UI.MaskPart`

The MaskPart to search for in the
                collection.

#### Returns

`System.Boolean` true if the collection contains the specified
                MaskPart; otherwise
                false.

###  IndexOf

Determines the index value that represents the position of the specified
                MaskPart in the collection.

#### Parameters

#### part `Telerik.Web.UI.MaskPart`

A MaskPart to search for in the
                collection.

#### Returns

`System.Int32` The zero-based index position of the specified
                MaskPart in the collection.

###  Insert

Inserts the specified MaskPart in
                the collection at the specified index location.

#### Parameters

#### index `System.Int32`

The location in the collection to insert the
                MaskPart.

#### part `Telerik.Web.UI.MaskPart`

The MaskPart to add to the
                collection.

#### Returns

`System.Void` 

###  Remove

Removes the specified MaskPart
                    from the collection.

#### Parameters

#### part `Telerik.Web.UI.MaskPart`

The MaskPart to remove from the
                collection.

#### Returns

`System.Void` 

