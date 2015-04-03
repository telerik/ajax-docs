---
title: Clean MS Word Formatting on Page Load and on Submit
page_title: Clean MS Word Formatting on Page Load and on Submit | UI for ASP.NET AJAX Documentation
description: Clean MS Word Formatting on Page Load and on Submit
slug: editor/managing-content/pasting-content/clean-ms-word-formatting-on-page-load-and-on-submit
tags: clean,ms,word,formatting,on,page,load,and,on,submit
published: True
position: 2
---

# Clean MS Word Formatting on Page Load and on Submit



To strip MS Word formatting from content at run-time you can use the RadEditor client-side fire() method to execute RadEditor commands.

## Stripping MS Word Formatting On Load

The example below demonstrates stripping out Word formatting when the RadEditor is first loaded:

````ASPNET
	    <script type="text/javascript">function OnClientLoad(editor, args){    
	        editor.fire("SelectAll");    
	        editor.fire("FormatStripper", {value : "WORD"}); //strips the MS Word formatting}
	    </script>
	    ...
	    <telerik:RadEditor runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1">
	        <Content>    
	            <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"></p>       
	            <p class=MsoNormal><b style="mso-bidi-font-weight: normal"><span style="FONT-SIZE: 10pt; BACKGROUND: red; COLOR: #ff9900; mso-bidi-font-family: Arial; mso-highlight: red">Sample MS Word content</span></b><b style="mso-bidi-font-weight: normal"><span style="FONT-SIZE: 10pt; COLOR: #ff9900; mso-bidi-font-family: Arial"><?xml:namespace prefix = o ns = "urn:schemas-microsoft-com:office:office" /><o:p></o:p></span></b></p>
	        </Content>
	    </telerik:RadEditor>
````



## Cleaning Word Formatting on Page Submission

To strip the MS Word formatting when submitting the content, hook up a client-side OnClientLoad event handler and define a function for the editor's add_submit() function. The example below selects all the text in the RadEditor, strips the Word formatting, then displays the HTML contents to an alert dialog.

````ASPNET
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
	            <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial"><span style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">  </p>       
	            <p class=MsoNormal><b style="mso-bidi-font-weight: normal"><span style="FONT-SIZE: 10pt; BACKGROUND: red; COLOR: #ff9900; mso-bidi-font-family: Arial; mso-highlight: red">Sampe MS Word content</span></b><b style="mso-bidi-font-weight: normal"><span style="FONT-SIZE: 10pt; COLOR: #ff9900; mso-bidi-font-family: Arial"><?xml:namespace prefix = o ns = "urn:schemas-microsoft-com:office:office" /><o:p></o:p></span></b></p></span></span>          
	        </Content>
	    </telerik:RadEditor>
	    <asp:Button ID="Button1" runat="server" Text="Submit" />
````


