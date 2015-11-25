---
title: Telerik.Web.UI.Calendar.DatePickerClientEvents
page_title: Telerik.Web.UI.Calendar.DatePickerClientEvents
description: Telerik.Web.UI.Calendar.DatePickerClientEvents
---

# Telerik.Web.UI.Calendar.DatePickerClientEvents

Summary description for DatePickerClientEvents.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.Calendar.DatePickerClientEvents

## Properties

###  OnDateSelected `String`

Gets or sets the name of the client-side event handler that is executed whenever
                the selected date of the datepicker is changed.

###  OnPopupOpening `String`

Gets or sets the name of the client-side event handler that is executed prior to
            opening the calendar popup and its synchronizing with the DateInput value.

#### Remarks
There can be some conditions you do want not to open the calendar popup on
                click of the popup button. Then you should cancel the event either by return
                false; or set its argument args.CancelOpen = true;
            <script type="text/javascript">function Opening(sender, args){    args.CancelOpen = true;    //or    return false;}</script><radCln:RadDatePicker ID="RadDatePicker1" runat="server">    <ClientEvents OnPopupOpening="Opening"/></radCln:RadDatePicker>
                Set the args.CancelSynchronize = true; to override the default
                DatePicker behavior of synchronizing the date in the DateInput and Calendar
                controls. This is useful for focusing the Calendar control on a date different from
                the DateInput one.
            <script type="text/javascript">function Opening(sender, args){    args.CancelCalendarSynchronize = true;    sender.Calendar.NavigateToDate([2006,12,19]);}</script><radCln:RadDatePicker ID="RadDatePicker1" runat="server" >    <ClientEvents OnPopupOpening="Opening"/></radCln:RadDatePicker>

###  OnPopupClosing `String`

Gets or sets the name of the client-side event handler that is executed prior to
            closing the calendar popup.

#### Remarks
There can be some conditions you do want not to close the calendar popup on
                click over it. Then you should cancel the event either by return false; or
                set its argument args.CancelClose = true;
            <script type="text/javascript">function Closing(sender, args){    args.CancelClose = true;    //or    return false;}</script><radCln:RadDatePicker ID="RadDatePicker1" runat="server">    <ClientEvents OnPopupClosing="Closing"/></radCln:RadDatePicker>

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

