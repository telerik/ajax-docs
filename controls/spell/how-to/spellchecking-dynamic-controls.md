---
title: Spellchecking Dynamic Controls
page_title: Spellchecking Dynamic Controls | RadSpell for ASP.NET AJAX Documentation
description: Spellchecking Dynamic Controls
slug: spell/how-to/spellchecking-dynamic-controls
tags: spellchecking,dynamic,controls
published: True
position: 3
---

# Spellchecking Dynamic Controls

## Scenario

How to add RadSpell dynamically to the page and/or how to spellcheck dynamic controls.

## Solution

To spellcheck dynamic controls:

* Create dynamic instances of both RadSpell and the control you wish to spellcheck.

* Add both controls to a placeholder control inside your ASPX / ASCX template.

>tip You need to set the **ControlToCheck** property **after** you add both controls to the Controls collection of their parent!

````ASP.NET
<form id="form2" runat="server">
   <asp:ScriptManager ID="Scriptmanager1" runat="server">
   </asp:ScriptManager>
   <asp:PlaceHolder runat="server" ID="PlaceHolder1" />
</form> 
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
	TextBox textArea = new TextBox();
	textArea.ID = "TextBox1";
	PlaceHolder1.Controls.Add(textArea);
	RadSpell spellChecker = new RadSpell();
	spellChecker.ID = "RadSpell1";
	PlaceHolder1.Controls.Add(spellChecker);
	spellChecker.ControlToCheck = textArea.ClientID;
} 
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	Dim textArea As New TextBox()
	textArea.ID = "TextBox1"
	PlaceHolder1.Controls.Add(textArea)
	Dim spellChecker As New RadSpell()
	spellChecker.ID = "RadSpell1"
	PlaceHolder1.Controls.Add(spellChecker)
	spellChecker.ControlToCheck = textArea.ClientID
End Sub
````

