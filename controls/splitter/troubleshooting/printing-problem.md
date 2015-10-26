---
title: Printing Problem
page_title: Printing Problem | RadSplitter for ASP.NET AJAX Documentation
description: Printing Problem
slug: splitter/troubleshooting/printing-problem
tags: printing,problem
published: True
position: 0
---

# Printing Problem

This article contains the following sections:

* [Incorrectly Styled Telerik Controls](#incorrectly-styled-telerik-controls)

* [Missing Empty Message](#missing-empty-message)

## Incorrectly Styled Telerik Controls

When printing a RadPane containing Telerik controls or other decorated controls, some of them may not be rendered correctly.

### Description:

The reason for this issue is the missing CSS files decorating the controls. When calling RadPane’s print method the content of the pane is loaded inside a new browser’s window which does not contain the CSS files registered on the parent page.

### Solution:

In order to avoid this problem you need to manually load the CSS files. RadPane’s print method accepts a string array as an argument with paths to external CSS files that should be loaded in the newly opened window.

The following sample demonstrates how to get reference to the RadComboBox’s CSS files path as WebResources and provide them to the RadPane’s Print() method:

````ASP.NET
<telerik:radsplitter id="RadSplitter1" runat="server">
<telerik:RadPane ID="RadPane1" runat="server">
 <telerik:RadComboBox ID="RadComboBox1" runat="server">
  <Items>
   <telerik:RadComboBoxItem Text="Item 1" />
   <telerik:RadComboBoxItem Text="Item 2" />
   <telerik:RadComboBoxItem Text="Item 3" />
   <telerik:RadComboBoxItem Text="Item 4" />
  </Items>
 </telerik:RadComboBox>
</telerik:RadPane>
</telerik:radsplitter>
<asp:Button ID="printPane" runat="server" Text="Print RadPane's Content" OnClientClick="PrintPane(); return false;" />
<telerik:radcodeblock id="RadCodeBlock1" runat="server">
<script type="text/javascript">
	function PrintPane()
	{
		var splitter = $find("<%=RadSplitter1.ClientID %>");
		var pane = splitter.getPaneById("RadPane1");
		//get reference to the RadComboBox CSS files WebResource
		var radComboBoxBaseStylesheet = '<%= Page.ClientScript.GetWebResourceUrl(typeof(RadComboBox), "Telerik.Web.UI.Skins.ComboBox.css") %>';
		var radComboBoxDefaultSkinStylesheet = '<%= Page.ClientScript.GetWebResourceUrl(typeof(RadComboBox), "Telerik.Web.UI.Skins.Default.ComboBox.Default.css") %>';
		
		var externalCssFiles = new Array();
		externalCssFiles.push(radComboBoxBaseStylesheet);
		externalCssFiles.push(radComboBoxDefaultSkinStylesheet);
		pane.Print(externalCssFiles);
	}
</script>
</telerik:radcodeblock>
````


## Missing Empty Message

When inline content is used (i.e., controls are added directly in the `RadPane`), some settings may not be applied (e.g., empty messages of inputs like **RadAutoCompleteBox**). This can happen for settings/elements that are applied via JavaScript.

### Description:

When inline content is used, the `innerHTML` of the pane is taken and directly written into the `document` of a newly created blank browser window. This does not take into account some modifications made with JavaScript.

You can see this effect with the following mockup:

````ASP.NET
<div id="paneMockup">
	RadAutoCompleteBox mockup:
	<input class="racInput radPreventDecorate" id="RadAutoCompleteBoxMockup" name="RadAutoCompleteBox" type="text" id="RadAutoCompleteBox_Input" autocomplete="off" size="6" style="width: 46px;" />
</div>
<asp:Button ID="Button1" Text="mock-print contents" OnClientClick="printContents();return false;" runat="server" />
<script type="text/javascript">
	function printContents() {
		$get("RadAutoCompleteBoxMockup").value = "Hello World";
		alert($get("paneMockup").innerHTML);
		//the contents will not inlcude the value attribute of the input which is the cause of the problem
	}
</script>
````

### Solution:

There are two ways to avoid such a problem:

* Use an entire **content page** instead of inline controls. In this case, the browser's `print` command is invoked and it should print the content as you see it.

* Add **CSS** rules to your main page (or to the stylesheets array you can pass to RadPane's print() method) that hide the rest of the content and **only show the desired print area**. This can be done with `@media` queries and/or with a CSS class on the RadPane or its contents.

