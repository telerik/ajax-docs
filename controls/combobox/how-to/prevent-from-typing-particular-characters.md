---
title: Prevent from Typing Particular Characters
page_title: Prevent from Typing Particular Characters - RadComboBox
description: Check our Web Forms article about Prevent from Typing Particular Characters.
slug: combobox/how-to/prevent-from-typing-particular-characters
tags: prevent,from,typing,particular,characters
published: True
position: 5
---

# Prevent from Typing Particular Characters



## 

One of the limitations of the [OnClientKeyPressing]({%slug combobox/client-side-programming/events/onclientkeypressing%}) event is that it cannot be cancelled. This means that the user can type any letter in the input area of the RadComboBox (when **AllowCustomText** is set to *True*).

These examples will show you how to disallow the user to type any of the following letters in the input area of the combo: !@#$%^&*()][{}

Solution 1 leveraging the browser's addEventListener method to handle the keyDown event:

````ASPX
<telerik:RadComboBox
    ID="RadComboBox1"
    runat="server"
    AllowCustomText="true"
    OnClientLoad="OnClientLoad"
    >
</telerik:RadComboBox>
<script>
    function OnClientLoad(combo, args) {
        var input = combo.get_inputDomElement();
        input.addEventListener('keydown', onKeyDownHandler);
    }

    function onKeyDownHandler(e) {
        var code = e.keyCode || e.which;

        // Check for number keys with Shift (for symbols like !@#$%^&*())
        if (e.shiftKey && code >= 48 && code <= 57) {
            e.preventDefault();
        }
        // Check for [{}] keys
        if (code === 219 || code === 221) {
            e.preventDefault();
        }
    }
</script>
````

Solution 2 based on the OnClientKeyPressing client-event of RadCombobox:

````ASPX
<telerik:radcombobox 
    id="RadComboBox1" 
    runat="server" 
    onclientkeypressing="HandleKeyPress"
    AllowCustomText="true">
</telerik:radcombobox>

<script language="javascript" type="text/javascript">
    function HandleKeyPress(sender, eventArgs) {
        var domEvent = eventArgs.get_domEvent();
        var code = domEvent.keyCode || domEvent.which;

        // Check for number keys with Shift (for symbols like !@#$%^&*())
        if (domEvent.shiftKey && code >= 48 && code <= 57) {
            domEvent.preventDefault();
        }
        // Check for [{}] keys
        if (code === 219 || code === 221) {
            domEvent.preventDefault();
        }
    }
</script>
````


# See Also

 * [OnClientKeyPressing]({%slug combobox/client-side-programming/events/onclientkeypressing%})
