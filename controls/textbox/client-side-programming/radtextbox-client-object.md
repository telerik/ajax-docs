---
title: RadTextBox Client Object
page_title: RadTextBox Client Object - RadTextBox
description: Learn about the RadTextBox client-side object and its API for managing text input dynamically.
slug: radtextbox/client-side-programming/radtextbox-client-object
tags: radtextbox,client,object
published: True
position: 1
---

# RadTextBox Client Object



The following tables lists the most important properties/methods of the **RadTextBox** client-side object:

Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_value()** |none|string|Returns the value of the text box.|
| **set_value()** |string|none|Sets the value of the text box.|
| **get_editValue()** |none|string|Gets the value of the text box as it is formatted when the text box has focus.|
| **get_displayValue()** |none|string|Gets the value of the text box as it is formatted when the text box does not have focus.|
| **get_textBoxValue()** |none|string|Gets the string that the user typed into the text box.|
| **get_caretPosition()** |none|integer|Returns the current position of the caret.|
| **set_caretPosition()** |integer|none|Sets the position of the caret.|
| **get_styles()** |none|InputStyles|Returns the InputStyles Client object, which can be used to change the appearance of the text box when it is first loaded.|
| **get_autoPostBack()** |none|boolean|Returns the value of the **AutoPostBack** property.|
| **set_autoPostBack()** |boolean|none|Enables or disables postbacks when the user changes the text in the text box.|
| **get_enabled()** |none|boolean|Returns **true** if the text box is enabled.|
| **get_showButton()** |none|boolean|Returns **true** if the text box has an associated image button.|
| **get_selectionOnFocus()** |none|Telerik.Web.UI.SelectionOnFocus|Returns the value of the SelectionOnFocus property. Possible values are Telerik.Web.UI.SelectionOnFocus.CaretToBeginning, Telerik.Web.UI.SelectionOnFocus.CaretToEnd, Telerik.Web.UI.SelectionOnFocus.None, and Telerik.Web.UI.SelectionOnFocus.SelectAll.|
| **set_selectionOnFocus()** |Telerik.Web.UI.SelectionOnFocus|none|Sets the SelectionOnFocus property.|
| **get_emptyMessage()** |none|string|Returns the message that appears when the text box value is an empty string.|
| **set_emptyMessage()** |string|none|Sets the message that appears when the text box value is an empty string.|
| **get_element()** |none|HTML element|Gets the DOM element for the input element that holds the edit value.|
| **get_wrapperElement()** |none|HTML element|Gets the DOM element for the wrapper element.|
| **get_visible()** |none|boolean|Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element.|
| **set_visible()** |boolean|none|Sets the input element as hidden on the client|
| **set_displayValue()** |string|none|Sets the value of the text box as it isformatted when the text box does not have focus.|

Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **selectAllText** |none|none|Selects all text in the text box.|
| **selectText** |integer, integer|none|Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range.|
| **enable** |none|none|Enables the text box.|
| **disable** |none|none|Disables the text box.|
| **focus** |none|none|Sets focus to the text box so that the user can edit its value.|
| **blur** |none|none|Removes focus from the text box, moving it to the next control in the tab order of the page.|
| **clear** |none|none|Sets the value of the text box to an empty string.|
| **isMultiLine** |none|boolean|Returns **true** if the text mode is MultiLine.|
| **isReadOnly** |none|boolean|Returns **true** of the text box is read-only.|
| **isEmpty** |none|boolean|Returns **true** if the value of the text box is an empty string.|


# Examples
Below you will find several samples, demonstrating some basic scenarios which can be achieved by using the RadTextBox Client-side API:


## Decorate RadTextBox HTML element
In this sample you will see how to change the background colour of the TextBox element, accessing it through the *get_element()* method:

````JavaScript
<script type="text/javascript">
        function decorate() {
            var textBoxEl = $find("RadTextBox1").get_element();
            textBoxEl.style.backgroundColor = "red"
        }
</script>
````
````ASP.NET
         <telerik:RadButton ID="RadButton1" runat="server" Text="Decorate" AutoPostBack="false" OnClientClicked="decorate"></telerik:RadButton>
        <telerik:RadTextBox ID="RadTextBox1" runat="server" RenderMode="Lightweight" Width="240px" AutoPostBack="true" Text="Initial Value">
        </telerik:RadTextBox>
````

## Show/Hide RadTextBox

This sample demonstrates how to change the visibility of a TextBox through the *set_visible()* method:

````JavaScript
<script type="text/javascript">
            function showHideTextbox() {
                var textBox = $find("RadTextBox1");
                textBox.set_visible(!textBox.get_visible());
            }
</script>
````
````ASP.NET
        <telerik:RadButton ID="RadButton1" runat="server" Text="Show/Hide" AutoPostBack="false" OnClientClicked="showHideTextbox"></telerik:RadButton>
        <telerik:RadTextBox ID="RadTextBox1" runat="server" RenderMode="Lightweight" Width="240px" AutoPostBack="true">
        </telerik:RadTextBox>
````


## Determine if RadTextBox is empty

Here you can see how to determine if a textbox is empty, implementing some kind of a custom validation with the help of the *isEmpty()* method:

````JavaScript
<script type="text/javascript">
            function determineIfEmpty(sender, eventArgs) {
                var emptyBox = $find('RadTextBox1');

                if (emptyBox.isEmpty()) {
                    alert('Please, enter a not empty value.');
                }
                else {
                    alert('Thank you!');
                }
            }
</script>
````
````ASP.NET
        <telerik:RadTextBox ID="RadTextBox1" runat="server" EmptyMessage="This box is empty." />
        <telerik:RadButton ID="RadButton1" runat="server" Text="Submit" AutoPostBack="false" OnClientClicked="determineIfEmpty"></telerik:RadButton>
````


# See Also

 * [RadTextBox Client-side Programming Overview]({%slug radtextbox/client-side-programming/overview%})
