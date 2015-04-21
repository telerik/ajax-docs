---
title: Spell Checking RadTextBox
page_title: Spell Checking RadTextBox | UI for ASP.NET AJAX Documentation
description: Spell Checking RadTextBox
slug: input/radtextbox/spell-checking-radtextbox
tags: spell,checking,radtextbox
published: True
position: 3
---

# Spell Checking RadTextBox



## 

You can use the **RadSpell** control with **RadTextBox** to let users check the **Text** of the control for spelling errors.

To link the **RadTextBox** control to the **RadSpell** control, simply set the **RadSpell** control's **ControlToCheck** property to the ID of the **RadTextBox**:

````ASPNET
<telerik:RadSpell
	ID="RadSpell1"
	runat="server"
	ButtonType="PushButton"
	ControlToCheck="RadTextBox1"
	SpellCheckProvider="PhoneticProvider"
	SupportedLanguages="en-US,English"   
	OnClientDialogClosed="SpellCheckDone" />
````



Then, assign the **OnClientDialogClosing** client-side event of the **RadSpell** control to a JavaScript function that updates the text of the **RadTextBox** control:

````JavaScript
function SpellCheckDone()
{
	var radTextBox1 = $find("<%= RadTextBox1.ClientID %>");
	radTextBox1.updateDisplayValue();
}
````



The Javascript function is needed for the following reason: the RadTextBox control (and the other RadInput textboxes as well) consists of two textboxes - one is visible and holds the visible value, which is sometimes formatted in a certain way. The other, invisible, textbox holds the control's real value. RadSpell actually spellchecks the invisible textbox and that's why the visible textbox needs to be "refreshed" afterwards.

# See Also

 * [Limiting Allowable Values]({%slug input/radtextbox/limiting-allowable-values%})
