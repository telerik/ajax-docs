---
title: Telerik.Web.UI.YearlyRecurrenceRule
page_title: Telerik.Web.UI.YearlyRecurrenceRule
description: Telerik.Web.UI.YearlyRecurrenceRule
---

# Telerik.Web.UI.YearlyRecurrenceRule

Occurrences of this rule repeat on a yearly basis.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RecurrenceRule : IEquatable`1, ISerializable
* Telerik.Web.UI.YearlyRecurrenceRule

## Properties

###  DayOfMonth `Int32`

Gets the day of month on which the event recurs.

###  DayOrdinal `Int32`

Gets the day ordinal modifier. See  for additional information.

###  DaysOfWeekMask `RecurrenceDay`

Gets the bit mask that specifies the week days on which the event
            recurs.

#### Remarks
For additional information on how to create masks see the
                 documentation.

###  Exceptions `IList`1`

Gets or sets a list of the exception dates associated with this recurrence rule.

#### Remarks
Any date placed in the list will be considered a recurrence exception, i.e. an
            occurrence will not be generated for that date. The dates must be in universal
            time.

###  HasExceptions `IList`1`

Gets a value indicating whether this recurrence rule has associated
            exceptions.

###  HasOccurrences `IEnumerable`1`

Gets a value indicating whether this recurrence rule yields any
            occurrences.

###  Interval `Int32`

Gets the interval (in years) between the occurrences.

###  MaximumCandidates `Int32`

Gets or sets the maximum candidates limit.

#### Remarks
This limit is used to prevent lockups when evaluating infinite rules without using SetEffectiveRange.
            The default value should not be changed under normal conditions.

###  Month `RecurrenceMonth`

Gets the month in which the event recurs.

###  Occurrences `IEnumerable`1`

Gets the evaluated occurrence times of this recurrence rule.

#### Remarks
Occurrence times are in UTC.

###  Pattern `RecurrencePattern`

Gets the  associated with this recurrence rule.

###  Range `RecurrenceRange`

Gets the  associated with this recurrence rule.

#### Remarks
By calling  the range of the generated
                occurrences can be narrowed.

## Methods

###  ClearEffectiveRange

Clears the effective range set by calling .

#### Remarks
If no effective range was set, calling this method has no effect.

#### Returns

`System.Void` 

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

###  Equals

Overloaded. Overridden. Returns a value indicating whether this instance is equal
                to a specified  object.

#### Parameters

#### other `Telerik.Web.UI.RecurrenceRule`

An  object to compare with this instance.

#### Returns

`System.Boolean` true if value equals the value of this instance;
            otherwise, false.

###  FromPatternAndRange

Creates a recurrence rule with the specified pattern and range.

#### Parameters

#### pattern `Telerik.Web.UI.RecurrencePattern`

The recurrence pattern.

#### range `Telerik.Web.UI.RecurrenceRange`

The recurrence range.

#### Returns

`Telerik.Web.UI.RecurrenceRule` The constructed recurrence rule.

###  GetHashCode

Overriden. Returns the hash code for this instance.

#### Returns

`System.Int32` The hash code for this instance.

###  GetObjectData

Populates a SerializationInfo with the data needed to serialize this
            object.

#### Parameters

#### info `System.Runtime.Serialization.SerializationInfo`

The  to populate with data.

#### context `System.Runtime.Serialization.StreamingContext`

The destination (see ) for this serialization.

#### Returns

`System.Void` 

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

###  SetEffectiveRange

Specifies the effective range for evaluating occurrences.

#### Remarks
The range is inclusive. To clear the effective range call
                .

#### Parameters

#### start `System.DateTime`

The starting date of the effective range.

#### end `System.DateTime`

The ending date of the effective range.

#### Returns

`System.Void` 

###  ToString

Converts the recurrence rule to it's equivalent string representation.

#### Remarks
The string representation is based on the iCalendar data format (RFC
            2445).

#### Returns

`System.String` The string representation of this recurrence rule.

###  TryParse

Creates a recurrence rule instance from it's string representation.

#### Parameters

#### input `System.String`

The string representation to parse.

#### rrule `Telerik.Web.UI.RecurrenceRule@`

When this method returns, contains the recurrence rule instance, if the
            conversion succeeded, or null if the conversion failed. The conversion fails if the
            value parameter is a null reference (Nothing in Visual Basic)
            or represents invalid recurrence rule.

#### Returns

`System.Boolean` True if input was converted successfully, false otherwise.

###  TryParse

Creates a recurrence rule instance from it's string representation.

#### Remarks
See the TryParse overload for more information and examples.

#### Parameters

#### input `System.String`

The string to parse.

#### Returns

`System.Boolean` RecurrenceRule if the parsing succeeded or null (Nothing in Visual Basic) if the parsing failed.

###  TryParse

Creates a recurrence rule instance from it's string representation, taking into account TimeZone offset.

#### Remarks
See the TryParse overload for more information and examples.

#### Parameters

#### input `System.String`

The string to parse.

#### timeZoneId `System.String`

The TimeZoneID.

#### Returns

`System.Boolean` RecurrenceRule if the parsing succeeded or null (Nothing in Visual Basic) if the parsing failed.

