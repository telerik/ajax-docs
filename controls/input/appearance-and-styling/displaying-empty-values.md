---
title: Displaying Empty Values
page_title: Displaying Empty Values | UI for ASP.NET AJAX Documentation
description: Displaying Empty Values
slug: input/appearance-and-styling/displaying-empty-values
tags: displaying,empty,values
published: True
position: 8
---

# Displaying Empty Values



## 

By default, all of the **RadInput** controls except **RadMaskedTextBox** display a blank input area when the value has not been set:
![Empty Input control](images/EmptyInputControl.png)

**RadMaskedTextBox** displays its prompt character for each position the user should fill and any literal characters from the mask:
![Empty RadMaskedTextBox](images/EmptyMaskedTextBox.png)

You can change this default appearance when the input control does not have focus to display any string you like. Set the string you want to display as the value of the **EmptyMessage** property. When the input control does not have focus, it displays the string you have set:
![Empty message](images/EmptyMessage.png)

Once you have set the **EmptyMessage** property to a non-empty string, you can use the **EmptyMessageStyle** property to change the display properties of the input control when the empty message is showing:
![Empty message style](images/EmptyMessageStyle.png)

## Understanding the DisplayText Property

As of Q2 2012, you could set **DisplayText** property which allows you to set the display value on the Server to a different value than the actual one. This property is similar to the empty message, but shown even if the input is not empty. The text willbe cleared once the user changes the input value. Let's take for example the following RadNumericTextBox:

````ASPNET
 <telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" Value="12345" DisplayText="Click to see the value" 
 EmptyMessage="The value is now reset"></telerik:RadNumericTextBox>
````



In the example above, the user will initially see "Click to see the value". When they click in the input, they will see the current **Value** ( in this case 12345 ). In case they modify the value and get out of focus, the RadNumericTextBox will display the newly entered value. However, if all of the text happens to be deleted, the **EmptyMessage** will bedisplayed instead.

The **DisplayText** property can be used if you do server-side validation and you want to inform the user that their value is not valid after the PostBack.

## Useful Tips

The following specifications will be helpful when operating with RadInput display properties:

* The empty message does not need to be a valid value for the input control. For example, you can use a string of text as the **EmptyMessage** property of a **RadNumericTextBox**, **RadDateInput**,or **RadMaskedTextBox** control.

* **RadMaskedTextBox** does not display the value of its **EmptyMessage** property unless the **HideOnBlur** property is set to **True**.

* **RadTextBox** is unable to show a readable **EmptyMessage** or **DisplayText** when its **TextMode** is set to **Password** mode. Instead, the regarding message is displayed with bullets.In this case you could use a **Label** as an alternative for EmptyMessage:
[How to Use an EmptyMessage with Password RadTextBoxes](http://www.telerik.com/community/code-library/aspnet-ajax/input/how-to-use-an-emptymessage-with-password-radtextboxes.aspx)
[Set EmptyMessage for TextBox in Password Mode ](http://www.telerik.com/community/code-library/aspnet-ajax/input/set-emptymessage-for-textbox-in-password-mode.aspx)
