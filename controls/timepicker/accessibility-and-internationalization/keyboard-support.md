---
title: Keyboard Support
page_title: Keyboard Support | RadTimePicker for ASP.NET AJAX Documentation
description: Keyboard Support
slug: timepicker/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 4
---

# Keyboard Support


The **RadTimePicker** controls provides support for navigation using the tab or arrow keys:


* **Tab key Navigation** - Once focus is on the **RadTimePicker** control, the TAB key and SHIFT+TAB key combination move through the parts of the control. The first time the user presses the TAB key, focus moves to the time input area, where the user can type a time value. Pressing the TAB key second time moves focus to the time popup button. Pressing the ENTER key when focus is on the time popup button causes the time view popup to show. Once the time view popup is showing, the TAB key navigates through the time values it displays and pressing the ENTER key selects a time value. 

>note
To control the tab order of the **RadTimePicker** set the **TabIndex** of the **DateInput**, **TimePopupButton**, and **TimeView** as demonstrated below.
>


````ASPNET
<telerik:RadTimePicker runat="server" ID="RadTimePicker1">
   <DateInput TabIndex="1" />
   <TimePopupButton TabIndex="2" />
   <TimeView TabIndex="3"/>
</telerik:RadTimePicker>
````

* **Arrow key Navigation** - Users can navigate within the input area of a **RadTimePicker** control using the arrow keys:

    * The left and right arrow keys move the cursor one position to the left or right. When the shift key is pressed at the same time, the left and right arrow keys extend or contract the current selection on position to the left or right.

    * The up and down arrow keys increase or decrease the value of the date part or time part that contains the cursor when the **DateInput.IncrementSettings.InterceptArrowKeys** property is **true**. The **DateInput.IncrementSettings.Step** property specifies the number of months, days, years, hours, minutes or seconds by which the value changes.

>note
Arrow Key Navigation is not supported inside the **TimeView** popup. Only Tab-navigation is supported here.
>

