---
title: Setting a Control to Check
page_title: Setting a Control to Check - RadSpell
description: Check our Web Forms article about Setting a Control to Check.
slug: spell/how-to/setting-a-control-to-check
tags: setting,a,control,to,check
published: True
position: 0
---

# Setting a Control to Check

**RadSpell** can be configured to check any server or client-side editable element by setting the **ControlToCheck** property to the ID of the respective element. By default every instance of RadSpell can check only one control. However, you can configure RadSpell to check multiple controls at once.

## Checking a Single Control

The easiest way set a control to check is by setting the **ControlToCheck** property directly in the RadSpell tag:

````ASP.NET
<asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
<telerik:RadSpell RenderMode="Lightweight" ID="RadSpell1" runat="server" ControlToCheck="TextBox1"/> 
````

## Checking Multiple Controls at Once

Using the client-side API of the control you can setup a text source for checking multiple controls at one time:

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<div>
	<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
	<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
	<telerik:RadSpell
		ID="RadSpell1"
		runat="server"
		ButtonType="PushButton"
		ControlToCheck="TextBox1"
		FragmentIgnoreOptions="All"
		SpellCheckProvider="PhoneticProvider"
		SupportedLanguages="en-US,English"
		WordIgnoreOptions="RepeatedWords">
	</telerik:RadSpell>
   
	<input type="button" onclick="startSpell();" value="Check all" class="button" />
````

````JavaScript
<script type="text/javascript">

	function MultipleTextSource(sources) {
		this.sources = sources;

		this.get_text = function () {
			var texts = [];
			for (var i = 0; i < this.sources.length; i++) {
				texts[texts.length] = this.sources[i].get_text();
			}
			return texts.join("<controlSeparator><br/></controlSeparator>");
		}

		this.set_text = function (text) {
			var texts = text.split("<controlSeparator><br/></controlSeparator>");
			for (var i = 0; i < this.sources.length; i++) {
				this.sources[i].set_text(texts[i]);
			}
		}
	}

	function startSpell() {
		var sources =
		[
		new Telerik.Web.UI.Spell.HtmlElementTextSource($get('TextBox1')),
		new Telerik.Web.UI.Spell.HtmlElementTextSource($get('TextBox2'))
		];

		var spell = $find('<%= RadSpell1.ClientID %>');
		spell.set_textSource(new MultipleTextSource(sources));
		spell.startSpellCheck();
	}

</script>
</div>
````


