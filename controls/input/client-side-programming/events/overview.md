---
title: Events Overview
page_title: Overview | RadInput for ASP.NET AJAX Documentation
description: Overview
slug: input/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## 

The **RadInput** controls support a number of client-side events that let you respond to user actions without a postback. The following table lists the various client events, and which controls they apply to:


>caption  

|  **Event**  |  **Applies to**  |  **Description**  |
| ------ | ------ | ------ |
|[OnValueChanging]({%slug input/client-side-programming/events/onvaluechanging%})| **RadTextBox** , **RadNumericTextBox** , and **RadDateInput** |Occurs when the control loses focus after the user has changed its value, before the new value is assigned.|
|[OnValueChanged]({%slug input/client-side-programming/events/onvaluechanged%})|all **RadInput** controls|Occurs after a new value has been assigned when the control loses focus.|
|[OnFocus]({%slug input/client-side-programming/events/onfocus%})|all **RadInput** controls|Occurs when the control gets focus, if it is not ReadOnly.|
|[OnBlur]({%slug input/client-side-programming/events/onblur%})|all **RadInput** controls|Occurs when the control loses focus, if it is not ReadOnly.|
|[OnButtonClick]({%slug input/client-side-programming/events/onbuttonclick%})|all **RadInput** controls|Occurs when the user clicks on the button that is associated with the input control.|
|[OnKeyPress]({%slug input/client-side-programming/events/onkeypress%})|all **RadInput** controls.|Occurs when the user presses a key to enter a value.|
|[OnDisable]({%slug input/client-side-programming/events/ondisable%})|all **RadInput** controls|Occurs when the control is disabled.|
|[OnEnable]({%slug input/client-side-programming/events/onenable%})|all **RadInput** controls|Occurs when the control is enabled.|
|[OnError]({%slug input/client-side-programming/events/onerror%})| **RadNumericTextBox** , **RadMaskedTextBox** , and **RadDateInput** |Occurs when the user enters an invalid value.|
|[OnLoad]({%slug input/client-side-programming/events/onload%})|all **RadInput** controls|Occurs when the control is loaded on the client.|
|[OnMouseOver]({%slug input/client-side-programming/events/onmouseover%})|all **RadInput** controls|Occurs when the mouse enters the input area.|
|[OnMouseOut]({%slug input/client-side-programming/events/onmouseout%})|all **RadInput** controls|Occurs when the mouse leaves the input area.|
|[OnMoveDown]({%slug input/client-side-programming/events/onmovedown%})| **RadMaskedTextBox** |Occurs when the user decreases the value of an enumeration or numeric range mask part.|
|[OnMoveUp]({%slug input/client-side-programming/events/onmoveup%})| **RadMaskedTextBox** |Occurs when the user increases the value of an enumeration or numeric range mask part.|
|[OnEnumerationChanged]({%slug input/client-side-programming/events/onenumerationchanged%})| **RadMaskedTextBox** |Occurs when the value of an enumeration part of a mask is set.|
|[OnClientPasswordStrengthCalculating]({%slug input/client-side-programming/events/onclientpasswordstrengthcalculating%})| **RadTextBox and RadInputManager** with a TextBoxSetting|Occurs when using the password strength check feature and changing the text, before the indicator is updated.|

>note On **RadDateInput** , there is another client event property, **OnClientDateChanged** , which maps directly onto the **OnValueChanged** property.
>


To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the corresponding property.

````ASPNET
	    <script type="text/javascript">
	        function OnMaskError(sender, args)
	        {
	            var message = "Invalid character - " + args.get_newValue();
	            alert(message);
	        }
	    </script>
	    <telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" PromptChar="_" Mask="(###) ###-#####"
	        Skin="Web20">
	        <ClientEvents OnError="OnMaskError" />
	    </telerik:RadMaskedTextBox>
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
	        function onClickHandler1()
	        {
	            alert("First handler called");
	        }
	        function onClickHandler2()
	        {
	            alert("Second handler called");
	        }
	        function pageLoad()
	        {
	            var inputControl = $find('<%=RadInput1.ClientID%>');
	            inputControl.add_buttonClick(OnClickHandler1);
	            inputControl.add_buttonClick(OnClickHandler2);
	        }
	
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	
	
	        function removeOnClick2()
	        {
	            var inputControl = $find('<%=RadInput1.ClientID%>');
	            inputControl.remove_buttonClick(OnClickHandler2);
	        }
	
````



Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondence between client-side and server-side names:


>caption  

|  **Server-Side Name**  |  **Client-SideName**  |  **Methods to add and Remove**  |
| ------ | ------ | ------ |
|OnValueChanging|valueChanging|add_valueChanging, remove_valueChanging|
|OnValueChanged|valueChanged|add_valueChanged, remove_valueChanged|
|OnFocus|focus|add_focus, remove_focus|
|OnBlur|blur|add_blur, remove_blur|
|OnButtonClick|buttonClick|add_buttonClick, remove_buttonClick|
|OnKeyPress|keyPress|add_keyPress, remove_keyPress|
|OnDisable|disable|add_disable, remove_disable|
|OnEnable|enable|add_enable, remove_enable|
|OnError|error|add_error, remove_error|
|OnLoad|load|add_load, remove_load|
|OnMouseOver|mouseOver|add_mouseOver, remove_mouseOver|
|OnMouseOut|mouseOut|add_mouseOut, remove_mouseOut|
|OnMoveDown|moveDown|add_moveDown, remove_moveDown|
|OnMoveUp|moveUp|add_moveUp, remove_moveUp|
|OnEnumerationChanged|enumerationChanged|add_enumerataionChanged, remove_enumerationChanged|

# See Also

 * [TextChanged Event]({%slug input/server-side-programming/textchanged-event%})
