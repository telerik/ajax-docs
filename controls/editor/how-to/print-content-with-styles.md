---
title: Print Content with Styles
page_title: Print Content with Styles | RadEditor for ASP.NET AJAX Documentation
description: Print Content with Styles
slug: editor/how-to/print-content-with-styles
tags: print,content,with,styles
published: True
position: 3
---

# Print Content with Styles

You may want to print the content of the editor along with the styles although browsers do not generally print with styles.Internet Explorer for example, automatically strips CSS styles when the page is being printed.

Fortunately, there is a workaround for this:

1. Define your own external PrintWithStyles.css file including the styles you want to use for printing.

1. Create a custom CustomPrint button:

	**ASP.NET**

		<telerik:RadEditor runat="server" ID="RadEditor1">
			<Tools>
				<telerik:EditorToolGroup>
					<telerik:EditorTool Name="CustomPrint" />
				</telerik:EditorToolGroup>
			</Tools>
		</telerik:RadEditor>




1. Add the following custom **Print** command under the editor declaration, i.e.

	**JavaScript**

		<script type="text/javascript">
			Telerik.Web.UI.Editor.CommandList["CustomPrint"] = function (commandName, editor, args)
			{
				var printIframe = document.createElement("IFRAME");
				document.body.appendChild(printIframe);
				var printDocument = printIframe.contentWindow.document;
				printDocument.designMode = "on";
				printDocument.open();
				var currentLocation = document.location.href;
				currentLocation = currentLocation.substring(0, currentLocation.lastIndexOf("/") + 1);
				printDocument.write("<html><head></head><body>" + editor.get_html() + "</body></html>");
				printDocument.close();
				try
				{
					if (document.all)
					{
						var oLink = printDocument.createElement("link");
						oLink.setAttribute("href", currentLocation + "PrintWithStyles.css", 0);
						oLink.setAttribute("type", "text/css");
						oLink.setAttribute("rel", "stylesheet", 0);
						printDocument.getElementsByTagName("head")[0].appendChild(oLink);
						printDocument.execCommand("Print");
					}
					else
					{
						printDocument.body.innerHTML = "<link rel='stylesheet' type='text/css' href='" + currentLocation + "PrintWithStyles.css'></link>" + printDocument.body.innerHTML;
						printIframe.contentWindow.print();
					}
				}
				catch (ex)
				{
				}
				document.body.removeChild(printIframe);
			};
		</script> 



1. To add an icon to the CustomPrint button add the following style in your page:

	**CSS**

		.rade_toolbar.Default .CustomPrint
		{
			background-image: url(http://www.telerik.com/DEMOS/ASPNET/RadControls/Editor/Skins/Default/buttons/CustomDialog.gif);
		}


>note The provided solution works properly under Firefox and Internet Explorer.

**ADDITIONAL INFORMATION**

You can find a good resource on how to print CSS styles on the Internet. You can see the following articles which we have chosen for you:

* [Introduction to media types](http://www.w3.org/TR/REC-CSS2/media.html)

* [Print Different](http://www.meyerweb.com/eric/articles/webrev/200001.html)

* [CSS For Printing](http://www.webdesignschoolreview.com/css-printing.html)

**EXAMPLE FILES**

[PrintWithStyles](http://www.telerik.com/ArticleFileDownload.aspx?I=jDO&G=Ctb)
