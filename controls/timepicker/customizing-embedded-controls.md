---
title: Customizing the Embedded Controls
page_title: Customizing the Embedded Controls | RadTimePicker for ASP.NET AJAX Documentation
description: Customizing the Embedded Controls
slug: timepicker/customizing-the-embedded-controls
tags: customizing,the,embedded,controls
published: True
position: 0
---

# Customizing the Embedded Controls



The **RadTimePicker** controls are composite objects, containing an embedded **RadDateInput** control (where the user can type values directly), a **TimePopupButton** (that displays or hides the popup control) and a **RadTimeView** control. All of these embedded controls can be customized, just as you can customize a standalone **RadDateInput** or **RadTimeView** control.
 
To customize the embedded controls, simply locate the property for the embedded control in the **Behavior** section of the properties pane for the **RadTimePicker** control, expand it, and set its properties accordingly. The following table lists the properties for accessing the embedded controls:


| Embedded control | Property to access embedded control |
| ------ | ------ |
|RadDateInput|DateInput|
|RadTimeView|TimeView|
|TimePopupButton|TimePopupButton|

Modifying a child control's settings allows for greater flexibility when configuring the look and feel of a **RadTimePicker** – you have complete control over the skins and styles of the embedded controls:

````ASPNET
<telerik:RadTimePicker
    ID="RadTimePicker1"
    runat="server">
    <DateInput Width="100%"></DateInput>
    <TimeView TimeFormat="h:mm"></TimeView>
    <TimePopupButton
        BorderColor="#D0E1F2"
        BorderStyle="Solid"
        BorderWidth="1px" />
</telerik:RadTimePicker>
````



# See Also

 * [RadTimePicker Structure]({%slug timepicker/getting-started/radtimepicker-structure%})

 * [Configuring the Embedded Time View]({%slug timepicker/configuring-the-embedded-time-view%})

 * [Using shared RadTimeView]({%slug timepicker/using-shared-radtimeview%})

 * [Formatting Values]({%slug timepicker/formatting-values%})

 * [ChildrenCreated]({%slug timepicker/server-side-programming/server-side-events/childrencreated%})
