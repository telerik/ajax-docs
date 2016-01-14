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

###  AllowDelete `Boolean`

Gets or sets a value indicating whether the deleting of this appointment is allowed.

###  AllowEdit `Boolean`

Gets or sets a value indicating whether the editing of this appointment is allowed.

###  AppointmentControls `IList`1`

Gets the appointment controls.

###  Attributes `AttributeCollection`

Gets the attributes.

###  BackColor `Color`

Gets or sets the color of the back.

###  BorderColor `Color`

Gets or sets the color of the border.

###  BorderStyle `BorderStyle`

Gets or sets the border style.

###  BorderWidth `Unit`

Gets or sets the width of the border.

###  ClientID `String`

Gets the client ID.

###  ContextMenuID `Object`

Gets or sets the context menu ID.

###  CssClass `String`

Gets or sets the CSS class.

###  DataItem `Object`

Gets or sets the data item represented by the
            Appointment object in the
            RadScheduler control.

#### Remarks
This property is available only during data binding.

###  Description `String`

The Appointment description.

###  DomElements `IList`1`

Gets the DOM elements.

###  Duration `TimeSpan`

The appointment duration.

#### Remarks
The duration can be zero.

###  End `DateTime`

Gets or sets the end.

###  EndLocal `DateTime`

Gets or sets the UTC end.

###  Font `FontInfo`

Gets the font.

###  ForeColor `Color`

Gets or sets the ForeColor.

###  ID `Object`

Gets or sets the ID.

###  Owner `RadScheduler`

Gets or sets the owner.

###  RecurrenceParentID `Object`

Gets or sets the recurrence parent ID.

###  RecurrenceRule `String`

Gets or sets the recurrence rule.

###  RecurrenceState `RecurrenceState`

Gets or sets the state of the recurrence.

###  Reminders `ReminderCollection`

A collection of all reminders associated with the appointment

###  Resources `ResourceCollection`

Gets or sets the resources.

###  Start `DateTime`

Gets or sets the start.

###  StartLocal `DateTime`

Gets or sets the UTC start.

###  Subject `String`

The Appointment subject.

###  TimeZoneID `Object`

The Appointment time zone

###  ToolTip `String`

Gets or sets the tool tip.

###  Visible `Boolean`

Gets or sets the visible.

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

