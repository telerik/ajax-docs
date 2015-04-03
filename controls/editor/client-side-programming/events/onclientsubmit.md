---
title: OnClientSubmit
page_title: OnClientSubmit | UI for ASP.NET AJAX Documentation
description: OnClientSubmit
slug: editor/client-side-programming/events/onclientsubmit
tags: onclientsubmit
published: True
position: 9
---

# OnClientSubmit



## 

This event is fired just before the content is filtered and encoded.

__Example__:

The code below demonstrates how to strip the Word formatting automatically on page submit using the OnClientSubmit event and FormatStripper command of RadEditor. The solution is useful for browsers that do not provide __onpaste__ event.

````ASPNET
	<script type="text/javascript">
	    function OnClientSubmit(editor)
	    {
	        var toSubmit = confirm("Are you sure, you want to strip the word formatting?");
	        if (toSubmit) editor.fire("FormatStripper", { value: "WORD" });
	    }
	</script>
	<telerik:RadEditor
	  Id="RadEditor1"
	  Runat="server"
	  OnClientSubmit="OnClientSubmit">
	</telerik:RadEditor>
	<asp:Button ID="Button1" runat="server" Text="Submit" /> 
````



Other possible values for the __FormatStripper__ command are __All, ALL_NO_BRAKES, CSS, SPAN, FONT, WORD_ALL__and __WORD_NO_FONTS__.
