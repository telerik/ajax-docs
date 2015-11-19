---
title: Telerik.Web.UI.Appointment
page_title: Telerik.Web.UI.Appointment
description: Telerik.Web.UI.Appointment
---

# Telerik.Web.UI.Appointment

A scheduled event in RadScheduler with Start and End time, Subject as well other optional additional informatioin such as resources or custom attributes.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.Appointment : ICloneable, ICustomTypeDescriptor, IDisposable, ISerializable

## Properties

###  AppointmentControls `IList`1`

Gets the appointment controls.

###  ClientID `String`

Gets the client ID.

###  DomElements `IList`1`

Gets the DOM elements.

###  Attributes `AttributeCollection`

Gets the attributes.

###  Resources `ResourceCollection`

Gets or sets the resources.

###  Reminders `ReminderCollection`

A collection of all reminders associated with the appointment

###  CssClass `String`

Gets or sets the CSS class.

###  BackColor `Color`

Gets or sets the color of the back.

###  BorderColor `Color`

Gets or sets the color of the border.

###  BorderWidth `Unit`

Gets or sets the width of the border.

###  BorderStyle `BorderStyle`

Gets or sets the border style.

###  Font `FontInfo`

Gets the font.

###  ForeColor `Color`

Gets or sets the ForeColor.

###  ID `Object`

Gets or sets the ID.

###  Visible `Boolean`

Gets or sets the visible.

###  Start `DateTime`

Gets or sets the start.

###  StartLocal `DateTime`

Gets or sets the UTC start.

###  End `DateTime`

Gets or sets the end.

###  EndLocal `DateTime`

Gets or sets the UTC end.

###  Duration `TimeSpan`

The appointment duration.

#### Remarks
The duration can be zero.

###  Subject `String`

The Appointment subject.

###  TimeZoneID `Object`

The Appointment time zone

###  Description `String`

The Appointment description.

###  ToolTip `String`

Gets or sets the tool tip.

###  RecurrenceRule `String`

Gets or sets the recurrence rule.

###  RecurrenceParentID `Object`

Gets or sets the recurrence parent ID.

###  RecurrenceState `RecurrenceState`

Gets or sets the state of the recurrence.

###  Owner `RadScheduler`

Gets or sets the owner.

###  ContextMenuID `Object`

Gets or sets the context menu ID.

###  AllowEdit `Boolean`

Gets or sets a value indicating whether the editing of this appointment is allowed.

###  AllowDelete `Boolean`

Gets or sets a value indicating whether the deleting of this appointment is allowed.

###  DataItem `Object`

Gets or sets the data item represented by the
            Appointment object in the
            RadScheduler control.

#### Remarks
This property is available only during data binding.

## Methods

###  Clone

Creates a new Appointment object that is a clone of the current instance.

#### Returns

`Telerik.Web.UI.Appointment` A new Appointment object that is a clone of the current instance.

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

