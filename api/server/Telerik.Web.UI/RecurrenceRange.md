---
title: Telerik.Web.UI.RecurrenceRange
page_title: Telerik.Web.UI.RecurrenceRange
description: Telerik.Web.UI.RecurrenceRange
---

# Telerik.Web.UI.RecurrenceRange

Specifies the time frame for which given Telerik.Web.UI.RecurrenceRule is
                    active. It consists of the start time of the event, it's duration and optional
                    limits.

#### Remarks
Limits for both occurrence count and end date can be specified via the
                    P:Telerik.Web.UI.RecurrenceRange.MaxOccurrences and P:Telerik.Web.UI.RecurrenceRange.RecursUntil properties.
                Start and EventDuration properties refer to the recurring event's start and
                    duration. In the context of Telerik.Web.UI.RadScheduler they are usually
                    derived from P:Telerik.Web.UI.Appointment.Start and P:Telerik.Web.UI.Appointment.End .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RecurrenceRange : IEquatable`1

## Properties

###  EventDuration `TimeSpan`

The duration of the recurring event.

###  MaxOccurrences `Int32`

Optional limit for the number of occurrences. Defaults to no limit
            (Int32.MaxInt).

###  RecursUntil `DateTime`

Optional end date for the recurring appointment. Defaults to no end date
            (DateTime.MaxValue).

###  Start `DateTime`

The start of the recurring event.

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

###  Equals

Overloaded. Overridden. Returns a value indicating whether this instance is equal
                to a specified  object.

#### Parameters

#### other `Telerik.Web.UI.RecurrenceRange`

An  object to compare with this instance.

#### Returns

`System.Boolean` true if value equals the value of this instance;
            otherwise, false.

###  GetHashCode

Overriden. Returns the hash code for this instance.

#### Returns

`System.Int32` 

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

