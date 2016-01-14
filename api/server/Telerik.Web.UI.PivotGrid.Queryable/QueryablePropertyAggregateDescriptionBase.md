---
title: Telerik.Web.UI.PivotGrid.Queryable.QueryablePropertyAggregateDescriptionBase
page_title: Telerik.Web.UI.PivotGrid.Queryable.QueryablePropertyAggregateDescriptionBase
description: Telerik.Web.UI.PivotGrid.Queryable.QueryablePropertyAggregateDescriptionBase
---

# Telerik.Web.UI.PivotGrid.Queryable.QueryablePropertyAggregateDescriptionBase

Represents an abstraction of an aggregate descriptor, which aggregates by P:Telerik.Web.UI.PivotGrid.Queryable.QueryablePropertyAggregateDescriptionBase.PropertyName .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.Cloneable
* Telerik.Web.UI.PivotGrid.Core.SettingsNode : IEditable, INotifyPropertyChanged, IServiceProvider, ISupportInitialize
* Telerik.Web.UI.PivotGrid.Core.DescriptionBase : IDescriptionBase, INamed
* Telerik.Web.UI.PivotGrid.Core.AggregateDescriptionBase : IAggregateDescription
* Telerik.Web.UI.PivotGrid.Queryable.QueryableAggregateDescriptionBase
* Telerik.Web.UI.PivotGrid.Queryable.QueryableAggregateDescription
* Telerik.Web.UI.PivotGrid.Queryable.QueryablePropertyAggregateDescriptionBase

## Properties

###  AggregateFunction `QueryableAggregateFunction`

Gets or sets the aggregate function that will be used for summary calculation.

###  AggregateMethodName `String`

###  AggregateMethodName `String`

Gets the name of the aggregate method on the 
            that will be used for aggregation.

###  CustomName `String`

Gets or sets the custom name that will be used as display name.

###  DataType `Type`

Provides the data type of the aggregate description.

###  DisplayName `String`

Gets the display-friendly name.

###  DisplayValueAsKpi `Boolean`

###  ExtensionMethodsType `Type`

Gets the type of the extension methods that holds the extension methods for
            aggregation. For example  or .

###  FunctionName `String`

Gets or sets the name of the aggregate function, which appears as a property of the group record on which records the function works.

###  Parent `SettingsNode`

Gets the  this  is used in.

###  PropertyName `String`

Gets or sets a value identifying a property on the grouped items.

###  StringFormat `String`

###  StringFormatSelector `String`

###  SupportedAggregateFunctions `QueryableAggregateFunction`

Gets a list of suitable functions for the .

###  TotalFormat `TotalFormat`

Gets or sets the  used to format the generated aggregate values.

## Methods

###  AddSettingsChild

Set this  as parent of the  and becomes a target for the 's change notifications.

#### Parameters

#### child `Telerik.Web.UI.PivotGrid.Core.SettingsNode`

The nested .

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

###  Clone

Creates a new instance of the , making deep copies of the object's values.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Cloneable` A clone of the current object.

###  CloneCore

#### Returns

`System.Void` 

###  CloneCore

#### Returns

`System.Void` 

###  CloneCore

#### Returns

`System.Void` 

###  CloneCore

#### Returns

`System.Void` 

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

###  CreateAggregateExpression

#### Returns

`System.Linq.Expressions.Expression` 

###  CreateAggregateExpression

Creates the aggregate expression.

#### Parameters

#### enumerableExpression `System.Linq.Expressions.Expression`

The grouping expression.

#### aggregatedValueName `System.String`

TODO: finish this.

#### Returns

`System.Linq.Expressions.Expression` 

###  CreateAggregateValueExpression

#### Returns

`System.Linq.Expressions.Expression` 

###  CreateAggregateValueExpression

Creates the aggregate expression.

#### Parameters

#### itemExpression `System.Linq.Expressions.ParameterExpression`

TODO: finish this.

#### Returns

`System.Linq.Expressions.Expression` 

###  CreateInstanceCore

When implemented in a derived class, creates a new instance of the  derived class.

#### Remarks
Do not call this method directly (except when calling base in an implementation). This method is called internally by the  method whenever a new instance of the  is created.
            Notes to Inheritors.
            Every  derived class must implement this method. A typical implementation is to simply call the default constructor and return the result.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Cloneable` New instance for cloning.

###  EndInit

#### Returns

`System.Void` 

###  GenerateFunctionName

#### Returns

`System.String` 

###  GenerateFunctionName

Generates identification string for this function using .

#### Returns

`System.String` Function identification string.

###  GetDisplayName

#### Returns

`System.String` 

###  GetDisplayName

Gets the display-friendly name.

#### Returns

`System.String` A  name.

###  GetService

#### Returns

`System.Object` 

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

###  GetUniqueName

#### Returns

`System.String` 

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

###  OnPropertyChanged

Raises this object's  event.

#### Parameters

#### propertyName `System.String`

The property that has a new value.

#### Returns

`System.Void` 

###  OnSettingsChanged

Invoked when a SettingsChangedEventArgs reaches the .

#### Parameters

#### args `Telerik.Web.UI.PivotGrid.Core.SettingsChangedEventArgs`

The  that contains the event data.

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

###  Telerik.Web.UI.PivotGrid.Core.IDescriptionBase.Clone

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IDescriptionBase` 

