---
title: Add custom date mask to the DateInput 
description: Learn how to add custom date mask to the DateInput
type: how-to
page_title: Add custom date mask to the DateInput. | DatePicker
slug: datepicker-add-custom-date-mask-to-the-dateinput
tags: telerik, asp, net, ajax, datepicker, datepicker mask, mask, date format
ticketid: 1637046
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tr>
        <td>Product</td>
        <td>Telerik WebForms DatePicker for ASP.NET AJAX</td>
    </tr>
</table>

### Result 

How the **DatePicker** looks like with the ***EmptyMessage*** property: 

![How the DatePicker looks like initially](images/datepicker-big-mask1.png "How the DatePicker looks like initially")

When the user attempts to add a date via the numerical date value, it will look like this: 

![How it looks like when a date is typed](images/datepicker-big-mask2.png "How it looks like when a date is typed")

In the end, after the input loses focus, the format is applied: 

![End result](images/datepicker-big-mask3.png "End result")

## Desciption

By default, the DateInput of the **RadDatePicker** control doesn't include this type of masking capability.
To fix that, we need to add a custom date mask to the DateInput, so users know the date format.

## Solution

To achieve the masking functionality, you can use the ***EmptyMessage*** and ***DateFormat*** properties of the **RadDatePicker**:  

````ASPX
<telerik:RadDatePicker ID="RadDatePicker1" runat="server" Width="300px">
    <DateInput runat="server" DateFormat="MM/dd/yyyy" EmptyMessage="__/__/____">
    </DateInput>
</telerik:RadDatePicker> 
````



  