---
title: Displaying Empty Values
page_title: Displaying Empty Values | RadTextBox for ASP.NET AJAX Documentation
description: Displaying Empty Values
slug: radtextbox/appearance-and-styling/displaying-empty-values
tags: displaying,empty,values
published: True
position: 8
---

# Displaying Empty Values



## 

By default, all of the **RadTextBox** control displays a blank input area when the value has not been set:
![Empty Input control](images/EmptyInputControl.png)

You can change this default appearance when the input control does not have focus to display any string you like. Set the string you want to display as the value of the **EmptyMessage** property. When the input control does not have focus, it displays the string you have set:
![Empty message](images/EmptyMessage.png)

Once you have set the **EmptyMessage** property to a non-empty string, you can use the **EmptyMessageStyle** property to change the display properties of the input control when the empty message is showing:
![Empty message style](images/EmptyMessageStyle.png)

## Understanding the DisplayText Property


The **DisplayText** property can be used if you do server-side validation and you want to inform the user that their value is not valid after the PostBack.

## Useful Tips

The following specifications will be helpful when operating with RadInput display properties:

* The empty message does not need to be a valid value for the input control. For example, you can use a string of text as the **EmptyMessage** property of a **RadNumericTextBox**, **RadDateInput**,or **RadMaskedTextBox** control.

* **RadTextBox** is unable to show a readable **EmptyMessage** or **DisplayText** when its **TextMode** is set to **Password** mode. Instead, the regarding message is displayed with bullets.In this case you could use a **Label** as an alternative for EmptyMessage:
[How to Use an EmptyMessage with Password RadTextBoxes](http://www.telerik.com/community/code-library/aspnet-ajax/input/how-to-use-an-emptymessage-with-password-radtextboxes.aspx)
[Set EmptyMessage for TextBox in Password Mode ](http://www.telerik.com/community/code-library/aspnet-ajax/input/set-emptymessage-for-textbox-in-password-mode.aspx)
