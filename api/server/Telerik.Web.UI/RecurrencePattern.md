---
title: Telerik.Web.UI.RecurrencePattern
page_title: Telerik.Web.UI.RecurrencePattern
description: Telerik.Web.UI.RecurrencePattern
---

# Telerik.Web.UI.RecurrencePattern

Specifies the pattern that Telerik.Web.UI.RecurrenceRule uses to evaluate the
                recurrence dates set.

#### Remarks
The properties of the Telerik.Web.UI.RecurrencePattern class work together
                    to define a complete pattern definition to be used by the
                    Telerik.Web.UI.RecurrenceRule engine.
                You should not need to work with it directly as specialized
                    Telerik.Web.UI.RecurrenceRule classes are provided for the supported modes
                    of recurrence. They take care of constructing appropriate
                    Telerik.Web.UI.RecurrencePattern objects.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RecurrencePattern : IEquatable`1

## Properties

###  Frequency `RecurrenceFrequency`

Gets or sets the frequency of recurrence.

#### Remarks
The default value is .

###  Interval `Int32`

Gets or sets the interval of recurrence.

#### Remarks
The default value is 1.

###  DaysOfWeekMask `RecurrenceDay`

Gets or sets the bit mask that specifies the week days on which the event
            recurs.

#### Remarks
For additional information on how to create masks see the
                 documentation.

###  DayOfMonth `Int32`

Gets or sets the day month on which the event recurs.

###  DayOrdinal `Int32`

#### Remarks
This property is meaningful only when  is
                    set to  or
                     and 
                    is not set.
                In such scenario it selects the n-th occurrence within the set of events
                specified by the rule. Valid values are from -31 to +31, 0 is ignored.For example with RecurrenceFrequency set to Monthly and DaysOfWeekMask set to
                Monday DayOfMonth is interpreted in the following way:1: Selects the first monday of the month.3: Selects the third monday of the month.-1: Selects the last monday of the month.
                    For detailed examples see the documentation of the
                     class.

###  Month `RecurrenceMonth`

Gets or sets the month on which the event recurs.

###  FirstDayOfWeek `DayOfWeek`

Gets or sets the day on which the week starts.

## Methods

###  Equals

Overloaded. Overridden. Returns a value indicating whether this instance is equal
            to a specified object.

#### Parameters

#### obj `System.Object`

An object to compare with this instance.

#### Returns

`System.Boolean` true if value is an instance of
                 and equals the value of this instance;
                otherwise, false.

###  GetHashCode

Overriden. Returns the hash code for this instance.

#### Returns

`System.Int32` The hash code for this instance.

###  Equals

Overloaded. Overridden. Returns a value indicating whether this instance is equal
                to a specified  object.

#### Parameters

#### other `Telerik.Web.UI.RecurrencePattern`

An  object to compare with this instance.

#### Returns

`System.Boolean` true if value equals the value of this instance;
            otherwise, false.

###  op_Equality

Determines whether two specified  objects have the
                same value.

#### Returns

`System.Boolean` 

###  op_Inequality

Determines whether two specified  objects have
                different values.

#### Returns

`System.Boolean` 

