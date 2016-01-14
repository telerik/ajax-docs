---
title: Telerik.Web.UI.PivotGrid.Core.ViewModelBase
page_title: Telerik.Web.UI.PivotGrid.Core.ViewModelBase
description: Telerik.Web.UI.PivotGrid.Core.ViewModelBase
---

# Telerik.Web.UI.PivotGrid.Core.ViewModelBase

Base class for all ViewModel classes.
            It provides support for property change notifications and has a DisplayName property.
            This class is abstract.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.ViewModelBase : IDisposable, INotifyPropertyChanged

## Methods

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

###  Dispose

Releases unmanaged and - optionally - managed resources.

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources.
            false to release only unmanaged resources.

#### Returns

`System.Void` 

###  OnPropertyChanged

Raises this object's  event.

#### Parameters

#### propertyName `System.String`

The property that has a new value.

#### Returns

`System.Void` 

###  VerifyPropertyName

Warns the developer if this object does not have
            a public property with the specified name. This 
            method does not exist in a Release build.

#### Returns

`System.Void` 

