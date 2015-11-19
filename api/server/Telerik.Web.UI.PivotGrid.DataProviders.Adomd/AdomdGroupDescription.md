---
title: Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdGroupDescription
page_title: Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdGroupDescription
description: Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdGroupDescription
---

# Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdGroupDescription

Used to specify grouping parameters for Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdDataProvider .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.Cloneable
* Telerik.Web.UI.PivotGrid.Core.SettingsNode : IEditable, INotifyPropertyChanged, IServiceProvider, ISupportInitialize
* Telerik.Web.UI.PivotGrid.Core.DescriptionBase : IDescriptionBase, INamed
* Telerik.Web.UI.PivotGrid.Core.GroupDescriptionBase : IGroupDescription
* Telerik.Web.UI.PivotGrid.Core.GroupDescription
* Telerik.Web.UI.PivotGrid.Core.Olap.OlapGroupDescriptionBase
* Telerik.Web.UI.PivotGrid.Core.Olap.OlapGroupDescription
* Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdGroupDescription

## Properties

###  Levels `Collection`1`

Gets or sets the levels collection of this instance. Setting this property will create a clone of the provided  value. The setter is implemented to support deserialization.

###  MemberName `String`

Gets or sets the dimension unique name used for grouping.

###  ShowGroupsWithNoData `Boolean`

Gets or sets value that indicates whether well known groups should be created even if there are no items for them.
            Grouping by days may require groups for the empty days in the current month.Grouping by persons may require groups all persons even if they do not contain any items within the current context.

###  GroupFilter `GroupFilter`

Gets a  implementation for this instance that would be used to filter the groups.

###  GroupComparer `GroupComparer`

###  SortOrder `SortOrder`

###  DisplayName `String`

Gets the display-friendly name.

###  CustomName `String`

Gets or sets the custom name that will be used as display name.

###  Parent `SettingsNode`

Gets the  this  is used in.

## Methods

###  CreateInstanceCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Cloneable` 

###  CloneCore

#### Returns

`System.Void` 

###  GetDisplayName

#### Returns

`System.String` 

###  GetAllNames

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  CloneCore

#### Returns

`System.Void` 

###  GetUniqueName

#### Returns

`System.String` 

###  GetAllNames

Returns all possible group keys for this instance.

#### Parameters

#### uniqueNames `System.Collections.Generic.IEnumerable{System.Object}`

Enumeration of all unique group keys that were discovered after grouping.

#### parentGroupNames `System.Collections.Generic.IEnumerable{System.Object}`

Enumeration of all parent groups.

#### Returns

`System.Collections.Generic.IEnumerable`1` Returns all possible group keys for this instance.

###  CloneCore

#### Returns

`System.Void` 

###  CloneCore

#### Returns

`System.Void` 

###  CloneCore

#### Returns

`System.Void` 

###  GetDisplayName

Gets the display-friendly name.

#### Returns

`System.String` A  name.

###  Telerik.Web.UI.PivotGrid.Core.IDescriptionBase.Clone

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IDescriptionBase` 

###  GetUniqueName

#### Returns

`System.String` 

###  NotifyServicesChanged

Raises the  event.

#### Returns

`System.Void` 

###  NotifySettingsChanged

Will recursively notify all  for a settings change.

#### Parameters

#### args `Telerik.Web.UI.PivotGrid.Core.SettingsChangedEventArgs`

that contain information about the change.

#### Returns

`System.Void` 

###  OnSettingsChanged

Invoked when a SettingsChangedEventArgs reaches the .

#### Parameters

#### args `Telerik.Web.UI.PivotGrid.Core.SettingsChangedEventArgs`

The  that contains the event data.

#### Returns

`System.Void` 

###  BeginEdit

Enters the  in a new editing scope. Use when applying multiple changes.
            If child  are changed, notifications will be accumulated in this .
            
            using(settingsNode.BeginEdit())
            {
                // Apply multiple changes here.
            }

#### Returns

`System.IDisposable` An edit scope token that you must  when you are done with the editing.

###  BeginInit

#### Returns

`System.Void` 

###  EndInit

#### Returns

`System.Void` 

###  GetService

#### Returns

`System.Object` 

###  OnPropertyChanged

Raises this object's  event.

#### Parameters

#### propertyName `System.String`

The property that has a new value.

#### Returns

`System.Void` 

###  RemoveSettingsChild

Unsets the parent initiated with .
            This  will no longer receive change notifications from the .

#### Parameters

#### child `Telerik.Web.UI.PivotGrid.Core.SettingsNode`

The nested .

#### Returns

`System.Void` 

###  AddSettingsChild

Set this  as parent of the  and becomes a target for the 's change notifications.

#### Parameters

#### child `Telerik.Web.UI.PivotGrid.Core.SettingsNode`

The nested .

#### Returns

`System.Void` 

###  GetServiceOverride

Provides services available by this SettingsNode.
            Other services may be available in its s.
            The default implementation returns this  if the desired service type is assignable from the type of this.
            The  implementation of  would query the service on the local node and if not available would query up the  nodes.

#### Parameters

#### serviceType `System.Type`

The type of the requested service.

#### Returns

`System.Object` A service instance if available, null otherwise.

###  OnEnteredEditScope

Override to provide custom behavior for derived classes when editing begins.
             is already in edit mode and changes within the method body will be accumulated and released upon exit.

#### Returns

`System.Void` 

###  OnExitingEditScope

Override to provide custom behavior for derived classes when finishing editing.
             is still in edit mode and changes within the method body will be accumulated and released upon exit.

#### Returns

`System.Void` 

###  Clone

Creates a new instance of the , making deep copies of the object's values.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Cloneable` A clone of the current object.

###  CreateInstanceCore

When implemented in a derived class, creates a new instance of the  derived class.

#### Remarks
Do not call this method directly (except when calling base in an implementation). This method is called internally by the  method whenever a new instance of the  is created.
            Notes to Inheritors.
            Every  derived class must implement this method. A typical implementation is to simply call the default constructor and return the result.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Cloneable` New instance for cloning.

###  CloneCore

Makes the instance a clone (deep copy) of the specified .

#### Remarks
Notes to Inheritors
            If you derive from , you may need to override this method to copy all properties.
            It is essential that all implementations call the base implementation of this method (if you don't call base you should manually copy all needed properties including base properties).

#### Parameters

#### source `Telerik.Web.UI.PivotGrid.Core.Cloneable`

The object to clone.

#### Returns

`System.Void` 

###  CloneOrDefault

If source is null - returns default().
            If source is not null makes a copy of type .
            If the copy is from a different type throws appropriate exception.

#### Parameters

#### source ```0`

The source that is about to be copied.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.T` Clone of  of type . If source is null - default().

