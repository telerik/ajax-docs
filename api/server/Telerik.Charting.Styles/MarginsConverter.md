---
title: Telerik.Charting.Styles.MarginsConverter
page_title: Telerik.Charting.Styles.MarginsConverter
description: Telerik.Charting.Styles.MarginsConverter
---

# Telerik.Charting.Styles.MarginsConverter

Provides a unified way of converting ChartMargins type values to other types, as well
            as for accessing standard values and sub properties.

## Inheritance Hierarchy

* System.Object
* System.ComponentModel.TypeConverter
* Telerik.Charting.Styles.MarginsConverter

## Methods

###  CanConvertFrom

Checks the possibility to convert from a different object type

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An System.ComponentModel.ITypeDescriptorContext that provides a format context.

#### sourceType `System.Type`

The type to convert from

#### Returns

`System.Boolean` True if conversion is possible

###  ConvertFrom

Converts the given object to the ChartMargins, using the specified
                context and culture information.

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An System.ComponentModel.ITypeDescriptorContext that provides a format context.

#### culture `System.Globalization.CultureInfo`

Current culture settings

#### value `System.Object`

The System.Object to convert.

#### Returns

`System.Object` An System.Object that represents the converted value.

###  ConvertTo

Converts the given value object to the specified type, using the specified
               context and culture information.

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An System.ComponentModel.ITypeDescriptorContext that provides a format context.

#### culture `System.Globalization.CultureInfo`

A System.Globalization.CultureInfo. If null is passed, the current culture
                is assumed.

#### value `System.Object`

The System.Object to convert.

#### destinationType `System.Type`

The System.Type to convert the value parameter to.

#### Returns

`System.Object` An System.Object that represents the converted value.

###  CreateInstance

Creates an instance of the type that this MarginsConverter
                is associated with, using the specified context, given a set of property
                values for the object.

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An System.ComponentModel.ITypeDescriptorContext that provides a format context.

#### propertyValues `System.Collections.IDictionary`

An System.Collections.IDictionary of new property values.

#### Returns

`System.Object` An System.Object representing the given System.Collections.IDictionary, or
                null if the object cannot be created.

###  GetCreateInstanceSupported

Returns whether changing a value on this object requires a call to System.ComponentModel.TypeConverter.CreateInstance(System.Collections.IDictionary)
             to create a new value, using the specified context.

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An System.ComponentModel.ITypeDescriptorContext that provides a format context.

#### Returns

`System.Boolean` true

###  GetPropertiesSupported

Returns whether this object supports properties, using the specified context.

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An System.ComponentModel.ITypeDescriptorContext that provides a format context.

#### Returns

`System.Boolean` true

###  GetProperties

Returns a collection of properties for the type of array specified by the
            value parameter, using the specified context and attributes.

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An System.ComponentModel.ITypeDescriptorContext that provides a format context.

#### value `System.Object`

An System.Object that specifies the type of array for which to get properties.

#### attributes `System.Attribute`

An array of type System.Attribute that is used as a filter.

#### Returns

`System.ComponentModel.PropertyDescriptorCollection` A System.ComponentModel.PropertyDescriptorCollection with the properties
             that are exposed for this data type, or null if there are no properties.

