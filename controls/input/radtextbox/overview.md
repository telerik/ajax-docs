---
title: Overview
page_title: Overview | RadTextBox for ASP.NET AJAX Documentation
description: Overview
slug: input/radtextbox/overview
tags: overview
published: True
position: 0
---

# RadTextBox Overview



**RadTextBox** is a simple input control for letting the user enter text values. It shares the [common properties of all RadInput controls]({%slug input/server-side-programming/overview%}), including support for skins, styles for different states, empty message support, conditional postback on text change, flexible caret and button positioning, labels, and so on.

## Specifying the text mode

**RadTextBox** can be used in three different modes:

* **Single-line mode:** To use **RadTextBox** in single-line mode, set the **TextMode** property to "SingleLine". When **TextMode** is "SingleLine", the **MaxLength** property defines the number of characters the user can enter into the text box.
![Single-line TextBox](images/SingleLineTextBox.png)

* **Multi-line mode:** To use **RadTextBox** in multi-line mode, set the **TextMode** property to "MultiLine". When **TextMode** is "MultiLine", the **Rows** property specifies the number of rows the text box displays, and the **Columns** property specifies the number of characters in each row. The **Wrap** property determines whether the text value wraps when its width exceeds the value of the **Columns** property. The **Resize** property controls the resize mode. Possible options are "None", "Both", "Vertical", "Horizontal".
![MultiLine text box](images/MultiLineTextBox.png)

* **Password mode:** To use **RadTextBox** in password mode, set the **TextMode** property to "Password". When **TextMode** is "Password", the text box behaves like single-line mode, except that all characters in the text box's value are masked out.
![Password mode](images/PasswordMode.png)

## HTML5 input types

As of Q3 2011 **RadTextBox** provides support for the new HTML5 input types. To leverage this functionality you can use the **InputType** property of the control You can set to the following values for the mentioned property:

* **Text:** **RadTextBox** renders an input of type text and allows entering any type of string.

* **Number:** **RadTextBox** renders an input of type number and only numbers are recognized as valid entry.

* **Date:** **RadTextBox** renders an input of type date and lets the user enter only dates.

* **Time:** **RadTextBox** renders an input of type time and lets the user enter only time.

* **DateTime:** **RadTextBox** renders an input of type datetime and allows for specifying the time part of the DateTime object.

As of Q2 2013 **RadTextBox** extends the supprt provided for the new HTML5 input types. The newly added types are:

* **DateTimeLocal:** **RadTextBox** renders an input of type datetime and allows for specifying the time part of the DateTime object(no time zone).

* **Month:** **RadTextBox** renders an input of type month and lets the user enter month and year.

* **Week:** **RadTextBox** renders an input of type week and lets the user enter week and year.

* **Range:** **RadTextBox** renders an input of type range.The range type is used for input fields that should contain a value from a range of numbers.

* **Email:** **RadTextBox** renders an input of type email. This type is used for input fields that should contain an e-mail address.

* **Url:** **RadTextBox** renders an input of type Url.The url type is used for input fields that should contain a URL address.

* **Search:** The search type is used for search fields (a search field behaves like a regular text field).

* **Tel:** **RadTextBox** define a field for entering a telephone number.

* **Color:** **RadTextBox** renders input field that should contain a color.

>caution Note that not all browsers support HTML5 input types. Those which do not recognize the new input types currently behave as if the input is with type set to text. Also note thatBrowser support is still incomplete and some types may not be supported by all browser. You can see the browser support in the [official W3C page](http://www.w3schools.com/html/html5_form_input_types.asp).
>


>caution The InputType property is meaningful **only** in case of **SingleLine** (the default one) text mode for **RadTextBox** .
>Also note that input type “number” or “datetime” on **RadNumericTextBox** or **RadDateInput** are note available. This is not supported because the default browser features such as calendar pickers and validation will overlap with the custom features, client-side logic and events of our controls and nothing will work as expected!
>


* **HTML5 input types limitations:**


|  **Browser**  |  **Input Type**  |  **RadTextBox behavior**  |  **HTML input behavior**  |  **Reason**  |
| ------ | ------ | ------ | ------ | ------ |
|Chrome|Date|Deleting part of the date and then clicking outside of the textbox clears the whole date.|With standard HTML inputthe rest of the date is preserved.|The input element has an empty value in both cases. **RadTextBox** rests this value anew which clears the previous data. But the standard HTML input preserves the remaining digits although the value is empty.|
|Chrome|Date|The default browser validation is not fired on postback for the specific case described above.|The validation fires on postback.|Browser behavior: related to the above limitation.|
|Opera|Date|The styles for the textbox can affect the appearance of the default calendar control in Opera.|The default look is with bigger font size and bigger spin buttons.|Workaround: You can apply custom CSS to change the appearance of the control.|

## AutoComplete

**RadTextBox** supports the **[AutoComplete]({%slug input/radtextbox/autocomplete%})** feature of browsers such as Internet Explorer and Netscape. To use the **AutoComplete** feature, simply set the **AutoCompleteType** property to the category you want the browser to use for maintaining an **AutoComplete** list.

## Password Strength Checker

**RadTextBox** exposes the **[Password Strength Checker]({%slug input/radtextbox/password-strength-checker%})** feature which allows you to specify your custom criteria for password strength and visualize an indicator to inform the user how strong is the typed password according to this criteria.

## Text box value

**RadTextBox** uses the **Text** property to represent its value.

## Using RadTextBox with other controls

You can use **RadTextBox** with other controls to enhance its functionality.

* Unlike **RadMaskedTextBox**, **RadTextBox** imposes no limits on the text values that users can enter (other than the **MaxLength** property). You can, however, use **RadTextBox** with an ASP.NET **RegularExpressionValidator** to [limit the values that the user can enter]({%slug input/radtextbox/limiting-allowable-values%}).

* You can [use RadTextBox with the RadSpell control]({%slug input/radtextbox/spell-checking-radtextbox%}) to let users check the spelling of the text that they enter into the text box.

# See Also

 * [RadTextBox Client Object]({%slug input/client-side-programming/radtextbox-client-object%})
