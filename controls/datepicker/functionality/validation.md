---
title: Validation
page_title: Validation | RadDatePicker for ASP.NET AJAX Documentation
description: Validation
slug: datepicker/functionality/validation
tags: web,pages,validation
published: True
position: 5
---

# Validation



The **RadDatePicker** control can work seamlessly with standard ASP.NET validation controls. Nevertheless, the validation controls such as **RangeValidator** and **CompareValidator** are using a culture-neutral format when comparing the date. For this purpose, we parse the entered date in such culture which format is represented as follow **"yyyy-MM-dd-hh-mm-ss"** and saving it in **RadInputValidationValue** client property. When using **RangeValidator** you need to set its **MaximumValue** and **MinimumValue** in such format in order to work correctly. You have to use this format also when using a custom validator. The code snippet below demonstrates how to configure **RangeValidator**.

````ASPNET
<telerik:RadDateInput RenderMode="Lightweight" ID="RadDateInput1" runat="server" DateFormat="d" MinDate="01/01/1990"
	MaxDate="01/01/3000">
</telerik:RadDateInput>
<asp:RangeValidator ID="DateInputRangeValidator" runat="server" ControlToValidate="RadDateInput1"
	ErrorMessage="Choose a date between 5th of January 20015 and 1st of September 20015"
	Display="Dynamic" MaximumValue="20015-09-01-00-00-00" MinimumValue="20015-01-05-00-00-00">
</asp:RangeValidator>
````

The following example shows a sample period selection page.The user has to enter two dates, the second one being after the first. It uses two **RequiredFieldValidator** instances to ensure the date pickers are not left empty. A **CompareValidator** ensures that the second date is greater than the first one.

````ASPNET
<table bgcolor="#cccccc">
    <tr>
        <td>Start:</td>
        <td>
            <telerik:RadDatePicker RenderMode="Lightweight" ID="StartDate" MinDate="2008/1/1" runat="server" >
            </telerik:RadDatePicker>
            <asp:RequiredFieldValidator runat="server" ID="validator1"
            ControlToValidate="StartDate"
            ErrorMessage="enter a starting date!">
            </asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <td>End:</td>
        <td>
            <telerik:RadDatePicker RenderMode="Lightweight" ID="EndDate" MinDate="2008/1/1" runat="server" >
            </telerik:RadDatePicker>
            <asp:RequiredFieldValidator runat="server" ID="validator2"
            ControlToValidate="EndDate"
            ErrorMessage="enter an ending date!">
            </asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr>
        <td></td>
        <td>
            <asp:CompareValidator ID="dateCompareValidator" runat="server"
            ControlToValidate="EndDate"
            ControlToCompare="StartDate"
            Operator="GreaterThan"
            Type="Date"
            ErrorMessage="The end date must be after the start one.">
            </asp:CompareValidator>
        </td>
    </tr>
    <tr>
        <td colspan=2>
            <asp:Button runat="server" Text="Submit" ID="Button1" />
        </td>
    </tr>
</table>	
````



>tip 
You need to set the **Type** property of the **CompareValidator** to "Date" in order to work with a **RadDatePicker**. When working with **RadTimePicker** or **RadDateTimePicker** control, the property must be set to "String".
>


For a live example of using validators with a **RadDatePicker** control, see [Date Picker Validation](http://demos.telerik.com/aspnet-ajax/Calendar/Examples/DatePicker/Validation/DefaultCS.aspx).
