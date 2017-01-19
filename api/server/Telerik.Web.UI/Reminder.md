---
title: Telerik.Web.UI.Reminder
page_title: Telerik.Web.UI.Reminder
description: Telerik.Web.UI.Reminder
---

# Telerik.Web.UI.Reminder

This Class defines the Reminder object.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.Reminder : ICloneable

## Properties

###  Attributes `AttributeCollection`

Gets the collection of arbitrary attributes that do not correspond to properties on the reminder.

###  ID `String`

Gets or sets the ID.

###  Trigger `TimeSpan`

Gets or sets the trigger.

## Methods

###  Clone

Creates a new Reminder object that is a clone of the current instance.

#### Returns

`Telerik.Web.UI.Reminder` A new Reminder object that is a clone of the current instance.

###  ToString

Returns a  that represents the current
            .

#### Returns

`System.String` A  that represents the current .

###  TryParse

Creates a list of reminders from their string representation.

#### Parameters

#### input `System.String`

The string to parse.

#### Returns

`System.Collections.Generic.IList`1` List of reminders if the parsing succeeded or null (Nothing in Visual Basic) if the parsing failed.

###  TryParse

Creates a list of reminders from their string representation.

#### Parameters

#### input `System.String`

The string to parse.

#### parsedReminders `System.Collections.Generic.IList{Telerik.Web.UI.Reminder}@`

Output parameter that contains the list of reminders if the
            parsing succeeded or null (Nothing in Visual Basic) if the parsing failed.

#### Returns

`System.Collections.Generic.IList`1` True if input was parsed successfully, false otherwise.

