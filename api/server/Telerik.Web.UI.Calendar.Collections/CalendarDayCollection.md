---
title: Telerik.Web.UI.Calendar.Collections.CalendarDayCollection
page_title: Telerik.Web.UI.Calendar.Collections.CalendarDayCollection
description: Telerik.Web.UI.Calendar.Collections.CalendarDayCollection
---

# Telerik.Web.UI.Calendar.Collections.CalendarDayCollection

Summary description for CalendarDayCollection.

## Inheritance Hierarchy

* System.Object
* System.Collections.CollectionBase
* Telerik.Web.UI.Calendar.Collections.CalendarDayCollection

## Properties

###  Item `RadCalendarDay`

Returns a RadCalendarDay object depending on the passed index.
            Only integer and string indexes are valid.

###  ParentCalendar `RadCalendar`

Gets or sets the parent  controls.

## Methods

###  Add

Adds a RadCalendarDay object to the collection of CalendarDays.

#### Parameters

#### inputItem `Telerik.Web.UI.RadCalendarDay`

The RadCalendarDay object to add to the collection.

#### Returns

`System.Int32` 

###  IndexOf

Returns a zero based index of a RadCalendarDay object depending on the passed index.

#### Parameters

#### inputItem `System.Object`

The zero-based index, RadCalendarDay object or the date represented by  the searched RadCalendarDay object.

#### Returns

`System.Int32` A zero based index of the RadCalendarDay object in the collection, or -1 if the RadCalendarDay object is not found.

###  Insert

Adds a RadCalendarDay object in the collection at the specified index.

#### Parameters

#### insertIndex `System.Int32`

The index after which the RadCalendarDay object is inserted.

#### inputItem `Telerik.Web.UI.RadCalendarDay`

The RadCalendarDay object to insert.

#### Returns

`System.Void` 

###  Remove

Deletes a RadCalendarDay object from the collection.

#### Parameters

#### inputItem `Telerik.Web.UI.RadCalendarDay`

The RadCalendarDay object to remove.

#### Returns

`System.Void` 

###  RemoveAt

Deletes the RadCalendarDay object from the collection at the specified index.

#### Parameters

#### index `System.Int32`

The index in collection at which the RadCalendarDay object will be deleted.

#### Returns

`System.Void` 

###  Clear

Removes all RadCalendarDay objects in the collection of CalendarDays.

#### Returns

`System.Void` 

###  Contains

Checks whether a specific RadCalendarDay object is in the collection of CalendarDays.

#### Parameters

#### inputItem `Telerik.Web.UI.RadCalendarDay`

The RadCalendarDay object to search.

#### Returns

`System.Boolean` True if the RadCalendarDay is found, false otherwise.

###  CopyTo

Copies all  elements of the  Array to the specified 
            one-dimensional  starting at the specified destination index. The 
            index is specified as a 32-bit integer.

#### Parameters

#### inputArray `Telerik.Web.UI.RadCalendarDay`

The one-dimensional  that is the destination 
            of the elements copied from the current .

#### startCopyIndex `System.Int32`

A 32-bit integer that represents the index in array at which copying begins.

#### Returns

`System.Void` 

###  CopyTo

Copies all  elements of the  Array to the specified 
            one-dimensional .

#### Parameters

#### inputArray `Telerik.Web.UI.RadCalendarDay`

The one-dimensional  that is the destination 
            of the elements copied from the current .

#### Returns

`System.Void` 

###  CloneInner

Clones the inner .

#### Returns

`System.Collections.ArrayList` 

###  Clone

Clones  instance.

#### Returns

`Telerik.Web.UI.Calendar.Collections.CalendarDayCollection` 

###  Reverse

Reverses the order of the elements in the entire collection.

#### Remarks
Please refer to  for details.

#### Returns

`System.Void` 

###  ToArray

Copies the elements of CalendarDayCollection to a new
             of  elements.

#### Remarks
Please refer to  for details.

#### Returns

`Telerik.Web.UI.RadCalendarDay[]` A one-dimensional  of 
            elements containing copies of the elements of the .

###  RemoveRange

Removes a range of elements from the .

#### Parameters

#### startIndex `System.Int32`

The zero-based starting index of the range of elements to remove.

#### itemCount `System.Int32`

The number of elements to remove.

#### Returns

`System.Void` 

###  AddRange

Adds the  templates of the specified
            collection to the end of the .

#### Parameters

#### inputItems `Telerik.Web.UI.RadCalendarDay`

The  templates.

#### Returns

`System.Void` 

###  Sort

Sorts the elements in the entire 
            using the  implementation of each element.

#### Remarks
Please refer to  for details.

#### Returns

`System.Void` 

###  Sort

Sorts the elements in the entire 
            using the specified  interface.

#### Remarks
Please refer to  for details.

#### Parameters

#### itemComparer `System.Collections.IComparer`

The  implementation to use when comparing elements.-or-A null reference to use the  implementation 
            of each element.

#### Returns

`System.Void` 

###  Sort

Sorts the elements in the specified range 
            using the specified  interface.

#### Remarks
Please refer to  for details.

#### Parameters

#### startIndex `System.Int32`

The zero-based starting index of the range
            of elements to sort.

#### itemCount `System.Int32`

The number of elements to sort.

#### itemComparer `System.Collections.IComparer`

The  implementation to use when comparing elements.-or-A null reference to use the  implementation 
            of each element.

#### Returns

`System.Void` 

