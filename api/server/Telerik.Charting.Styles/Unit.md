---
title: Telerik.Charting.Styles.Unit
page_title: Telerik.Charting.Styles.Unit
description: Telerik.Charting.Styles.Unit
---

# Telerik.Charting.Styles.Unit

Represents a length measurement.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.Styles.Unit

## Properties

###  IsEmpty `Boolean`

Gets whether Unit is empty

###  PixelValue `Single`

The unit length in Pixels

###  Type `UnitType`

Gets or sets the unit type of the Unit.

###  Value `Single`

Gets or sets the length of the Unit.

## Methods

###  op_Inequality

Compares two Unit objects to determine whether they are not equal.

#### Parameters

#### left `Telerik.Charting.Styles.Unit`

The Unit on the left side of the operator.

#### right `Telerik.Charting.Styles.Unit`

The Unit on the right side of the operator.

#### Returns

`System.Boolean` true if the Unit objects are not equal; otherwise, false.

###  op_Equality

Compares two Unit objects to determine whether they are equal.

#### Parameters

#### left `Telerik.Charting.Styles.Unit`

The Unit on the left side of the operator.

#### right `Telerik.Charting.Styles.Unit`

The Unit on the right side of the operator.

#### Returns

`System.Boolean` true if both Unit objects are equal; otherwise, false.

###  op_Implicit

Implicitly creates a Unit of type Pixel from the specified float.

#### Parameters

#### n `System.Single`

A float that represents the length of the Unit.

#### Returns

`Telerik.Charting.Styles.Unit` A Unit of type Pixel that represents the specified by the n parameter.

###  Parse

Converts the specified string to a Unit.

#### Parameters

#### s `System.String`

The string to convert.

#### Returns

`Telerik.Charting.Styles.Unit` A Unit that represents the specified string.

###  Pixel

Creates a Unit of type Pixel from the specified 32-bit signed integer.

#### Parameters

#### n `System.Single`

A 32-bit signed integer that represents the length of the Unit.

#### Returns

`Telerik.Charting.Styles.Unit` A Unit of type Pixel that represents the length specified by the n parameter.

###  Percentage

Creates a Unit of type Percentage from the specified double-precision floating-point number.

#### Parameters

#### n `System.Double`

A double-precision floating-point number that represents the length of the Unit

#### Returns

`Telerik.Charting.Styles.Unit` A Unit of type Percentage that represents the length specified by the double-precision floating-point number.

###  GetStringFromType

Gets the string representation of the Unit type

#### Parameters

#### type `Telerik.Charting.Styles.UnitType`

Unit type value to get string of

#### Returns

`System.String` System.String with unit type value

###  GetTypeFromString

Gets the UnitType by its string representation

#### Parameters

#### value `System.String`

Unit type string

#### Returns

`Telerik.Charting.Styles.UnitType` UnitType

###  GetHashCode

Returns a hash code for this Unit.

#### Returns

`System.Int32` Hash code

###  Equals

Compares this Unit with the specified object.

#### Parameters

#### obj `System.Object`

The specified object for comparison.

#### Returns

`System.Boolean` true if the Unit that this method is called from is equal to the specified object; otherwise, false.

###  CalculatePixelValue

Gets the pixels equivalent of the Unit.Value

#### Parameters

#### from `System.Single`

The parent elements dimension to get the percents of

#### Returns

`System.Void` 

###  CalculatePixelValue

Gets the pixels equivalent of the Unit.Value

#### Returns

`System.Void` 

###  Clone

Creates a Unit clone

#### Returns

`Telerik.Charting.Styles.Unit` New Unit class instance

###  ToString

Base ToString override

#### Returns

`System.String` String representation of the Unit instance

###  ToString

Base ToString override

#### Parameters

#### culture `System.Globalization.CultureInfo`

CultureInfo

#### Returns

`System.String` String representation of the Unit instance

