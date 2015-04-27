---
title: Printing Content
page_title: Printing Content | RadSplitter for ASP.NET AJAX Documentation
description: Printing Content
slug: splitter/panes/printing-content
tags: printing,content
published: True
position: 3
---

# Printing Content



You can print the content of a **RadPane** control using its [client-side API]({%slug splitter/client-side-programming/radpane-object%}). The **RadPane** client-side object has a **print()** method that prints the content of the pane.

* If the content of the pane comes [from an external source]({%slug splitter/panes/displaying-external-content%}), the URL must be from the same domain as the splitter parent page. Otherwise, the pane cannot print its content due to security restrictions of the browser.

* If the pane is not displaying external content, you can specify a stylesheet which will be used to format the printed content.

## Example

The following example demonstrates how to print the content of a pane:

````ASPNET
	<telerik:RadSplitter id="RadSplitter1" runat="server" height="200">
	 <telerik:RadPane id="InternalContentPane" runat="server" width="120">
	   <p>Founded in 2002, Telerik Corporation is a leading vendor
	      of User Interface (UI) components for ASP.NET and Windows Forms.
	      Building on our expertise in interface development
	      and Microsoft technologies,
	      Telerik helps customers build applications with unparalleled richness,
	      responsiveness and interactivity. Created with passion,
	      Telerik products help thousands of developers every day to be more
	      productive and deliver reliable applications under budget and on time.
	   </p>
	 </telerik:RadPane>
	 <telerik:RadSplitBar id="RadSplitbar1" runat="server"/>
	 <telerik:RadPane id="ExternalContentPane" runat="server" width="300"
	    ContentUrl="Default.html" />
	</telerik:RadSplitter>
	<a href="javascript:PrintPane('<%= InternalContentPane.ClientID %>');">
	 Print the content of 'Internal Content Pane'</a><br />
	<a href="javascript:PrintPane('<%= ExternalContentPane.ClientID %>');">
	 Print the content of 'External Content Pane'</a>
	<script type="text/javascript">
	    function PrintPane(paneID)
	    {
	        var splitter = $find('<%= RadSplitter1.ClientID%>');
	        var pane = splitter.GetPaneById(paneID);
	        if (!pane) return;
	        var cssFileAbsPath = 'http://localhost/printStyles.css';
	        var arrExtStylsheetFiles = [cssFileAbsPath];
	        pane.Print(arrExtStylsheetFiles);
	    }
	</script> 
````



## Printing Telerik controls in the content of a RadPane

If there are Telerik controls in the content of a **RadPane** you should add the CSS files that decorate the controls to the array, containing the external stylesheets.Below you can find a modified version of the **PrintPane** function that includes the Telerik controls CSS files, linked on the page, and adds them to the **arrExtStylsheetFiles** array.

````JavaScript
			<script type="text/javascript">
				function PrintPane(paneID) {
					var splitter = $find('<%= RadSplitter1.ClientID%>');
					var pane = splitter.GetPaneById(paneID);
					if (!pane) return;
	
					var arrExtStylsheetFiles = getTelerikCssLinks();
	
					pane.Print(arrExtStylsheetFiles);
				}
	
				function getTelerikCssLinks() {
					var result = new Array();
	
					var links = document.getElementsByTagName("LINK"); //get all link elements on the page
	
					for (var i = 0; i < links.length; i++) {
						if (links[i].getAttribute("class") == "Telerik_stylesheet")//check if the link element is a Telerik Stylesheet
							result.push(links[i].getAttribute("href", 2)); //add link href attribute to the result
					}
	
					return result;
				}
	
		</script>
````



# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})
