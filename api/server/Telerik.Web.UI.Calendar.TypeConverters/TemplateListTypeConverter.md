---
title: Telerik.Web.UI.Calendar.TypeConverters.TemplateListTypeConverter
page_title: Telerik.Web.UI.Calendar.TypeConverters.TemplateListTypeConverter
description: Telerik.Web.UI.Calendar.TypeConverters.TemplateListTypeConverter
---

# Telerik.Web.UI.Calendar.TypeConverters.TemplateListTypeConverter

Custom Type convertor that gives enhanced selection abilities for the properties that
            refer to collections like CalendarDayCollection.

## Inheritance Hierarchy

* System.Object
* System.ComponentModel.TypeConverter
* Telerik.Web.UI.Calendar.TypeConverters.TemplateListTypeConverter

## Methods

###  GetStandardValues

Returns a collection of standard values for the data type this type
            converter is designed for when provided with a format context.

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An 
            that provides a format context that can be used to extract additional information
            about the environment from which this converter is invoked. This parameter or
            properties of this parameter can be null.

#### Returns

`System.ComponentModel.StandardValuesCollection` A 
            that holds a standard set of valid values, or null if the data type does not
            support a standard set of values.

###  GetStandardValuesExclusive

Returns whether the collection of standard values returned from 
            is an exclusive list of possible values, using the specified context.

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An 
            that provides a format context.

#### Returns

`System.Boolean` true if the 
            returned from 
            is an exhaustive list of possible values; false if other values are possible.

###  GetStandardValuesSupported

Returns whether this object supports a standard set of values that can
            be picked from a list, using the specified context.

#### Parameters

#### context `System.ComponentModel.ITypeDescriptorContext`

An 
            that provides a format context.

#### Returns

`System.Boolean` true if 
            should be called to find a common set of values the object supports; otherwise,
            false.

