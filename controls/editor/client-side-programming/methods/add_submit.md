---
title: add_submit
page_title: add_submit | RadEditor for ASP.NET AJAX Documentation
description: add_submit
slug: editor/client-side-programming/methods/add_submit
tags: add_submit
published: True
position: 19
---

# add_submit

Performs submit operation - sends all content to the server.

`function add_submit()`

Here is an example on how to submit the content and strip its MS Word formatting:



````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor, args)
	{
		editor.add_submit(function ()
		{
			editor.fire("SelectAll");
			editor.fire("FormatStripper", { value: "WORD" });
			alert(editor.get_html());
		});
	}
</script>
<telerik:RadEditor runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1">
	<Content>
					
		<p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></p>        
		<p class=MsoNormal><b style="mso-bidi-font-weight: normal"><span style="FONT-SIZE: 10pt; BACKGROUND: red; COLOR: #ff9900; mso-bidi-font-family: Arial; mso-highlight: red">Sampe MS Word content</span></b><b style="mso-bidi-font-weight: normal"><span style="FONT-SIZE: 10pt; COLOR: #ff9900; mso-bidi-font-family: Arial"><?xml:namespace prefix = o ns = "urn:schemas-microsoft-com:office:office" /><o:p></o:p></span></b></p></span></span>    
				
	</Content>
</telerik:RadEditor>
<asp:Button ID="Button1" runat="server" Text="Submit" />
````




