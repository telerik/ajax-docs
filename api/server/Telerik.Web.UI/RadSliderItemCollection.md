---
title: Telerik.Web.UI.RadSliderItemCollection
page_title: Telerik.Web.UI.RadSliderItemCollection
description: Telerik.Web.UI.RadSliderItemCollection
---

# Telerik.Web.UI.RadSliderItemCollection

A collection of Telerik.Web.UI.RadSliderItem RadSliderItemobjects in a
                Telerik.Web.UI.RadSlider RadSlidercontrol.

#### Remarks
The RadSliderItemCollectionclass represents a collection of
                RadSliderItemobjects.
            	bullet Use the P:Telerik.Web.UI.RadSliderItemCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single RadSliderItem from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of slider items in the collection.
                    Use the M:Telerik.Web.UI.RadSliderItemCollection.Add(Telerik.Web.UI.RadSliderItem) Addmethod to add items in the collection.
                    Use the M:Telerik.Web.UI.RadSliderItemCollection.Remove(Telerik.Web.UI.RadSliderItem) Removemethod to remove items from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadSliderItemCollection

## Properties

###  Item `RadSliderItem`

Gets the RadSliderItem object at the specified index in 
            	the current RadSliderItemCollection.

## Methods

###  Add

Appends the specified RadSliderItem object to the end of the current RadSliderItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadSliderItem`

The RadSliderItem to append to the end of the current RadSliderItemCollection.

#### Returns

`System.Void` 

###  FindItemByText

Finds the first RadSliderItem with Text that
            matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### Returns

`Telerik.Web.UI.RadSliderItem` The first RadSliderItem that matches the
            specified text value.

###  FindItemByValue

Finds the first RadSliderItem with Value that
            matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadSliderItem` The first RadSliderItem that matches the
            specified value.

###  FindItemByAttribute

Searches the items in the collection for a RadSliderItem which contains the specified attribute and attribute value.

#### Parameters

#### attributeName `System.String`

The name of the target attribute.

#### attributeValue `System.String`

The value of the target attribute

#### Returns

`Telerik.Web.UI.RadSliderItem` The RadSliderItem that matches the specified arguments. Null (Nothing) is returned if no node is found.

###  Contains

Determines whether the specified RadSliderItem object is in the current 
            	RadSliderItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadSliderItem`

The RadSliderItem object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified RadSliderItem object; 
            	otherwise, false.

###  AddRange

Appends the specified array of RadSliderItem objects to the end of the 
            current RadSliderItemCollection.

#### Parameters

#### items `System.Collections.Generic.IEnumerable{Telerik.Web.UI.RadSliderItem}`

The array of RadSliderItem to append to the end of the current 
            RadSliderItemCollection.

#### Returns

`System.Void` 

###  IndexOf

Determines the index of the specified RadSliderItem object in the collection.

#### Parameters

#### item `Telerik.Web.UI.RadSliderItem`

The RadSliderItem to locate.

#### Returns

`System.Int32` The zero-based index of item within the current RadSliderItemCollection, 
            	if found; otherwise, -1.

###  Insert

Inserts the specified RadSliderItem object in the current 
            RadSliderItemCollection at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the RadSliderItem.

#### item `Telerik.Web.UI.RadSliderItem`

The RadSliderItem to insert.

#### Returns

`System.Void` 

###  Remove

Removes the specified RadSliderItem object from the current
            	RadSliderItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadSliderItem`

The RadSliderItem object to remove.

#### Returns

`System.Void` 

###  Remove

Removes the specified RadSliderItem object from the current
            	RadSliderItemCollection.

#### Parameters

#### index `System.Int32`

The zero-based index of the index to remove.

#### Returns

`System.Void` 

