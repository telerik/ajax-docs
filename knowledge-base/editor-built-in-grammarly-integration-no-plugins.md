---
title: Built-in Grammarly Integration with Ajax RadEditor for DIV and IFRAME modes
description: Check out the steps to learn the basics of using the Grammarly Text Editor SDK with RadEditor for ASP.NET AJAX in your ASP.NET Web Forms application or website.
type: how-to
page_title: Grammarly Integration (no add-ons) with Ajax RadEditor for DIV and IFRAME modes
slug: editor-built-in-grammarly-integration-no-plugins
position: 
tags: 
ticketid: 1599186
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
This process allows you to enable Grammarly on specific RadEditors. This is especially beneficial if you have a paid subscription, where you are charged for words analyzed and want to limit how many words are sent over the internet to Grammarly to reduce your costs.

## Solution

Here is a summary of the steps:

1. Create an App on Grammarly
1. Take note of your API key: {myapikey}
1. Add your website address to the allow list

and a video demonstrating the solution:

<iframe width="560" height="315" src="https://www.youtube.com/embed/pOldmQgt934" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


> Note that in the beginning of the video, Grammerly is not available on the client machine as an add-on.

Let proceed to the implementation:
First step is to go to [Grammarly's website](https://developer.grammarly.com/) and get a API key. This is achieved by creating what Grammarly call an “App”. An App essentially allows you to track usage, etc., against a specific client ID.

Once you create an App through the provided + sign or **New App** button, the Grammarly website will show you your Client ID, in the format of "client_xxxxxxxxx"

Next, you need to add your Website to the Allow List at the bottom of the page. This prevents your ClientID being used by other websites and enables Grammarly to work on your site.

On your website, you need to create a reference to the Grammarly Editor SDK script:

````ASPX
<script src="https://unpkg.com/@grammarly/editor-sdk?<%=GrammarlyKey %>"></script>
````

*note the above reference may change with different version releases


Add the following JavaScript to your Webpage (or create a separate JS file to link from your Master page)

````ASPX
<script type="text/javascript">
    function editor_OnClientLoad(editor, args) {

        if (typeof (Grammarly) != "undefined") {
            Grammarly.init().then((grammarly) => {
                // determine if RadEditor in DIV or Iframe mode
                const parentElement = document.getElementById(editor._element.id); //no hash
                const iframeElement = parentElement.querySelector("iframe");

                if (iframeElement) {
                    //locate the body element in the iframe
                    const iframeDocument = iframeElement.contentDocument;
                    const iframeBody = iframeDocument.querySelector("body");

                    //add grammarly to iframe
                    grammarly.addPlugin(iframeBody,
                        {
                            documentDialect: "auto-browser",
                            documentDomain: "business",
                        }
                    );
                    //reset iframe elements to gain back control (otherwise content like paste, etc., will fail)
                    var oValue = editor.get_html(true);
                    editor.set_html(oValue);

                } else {
                    //locate the DIV element & add grammarly
                    const mysubelement = parentElement.querySelector("#" + editor._element.id + "_contentDiv");
                    grammarly.addPlugin(mysubelement,
                        {
                            documentDialect: "auto-browser",
                            documentDomain: "business",
                        }
                    );
                }
            });
        }
    }
</script>
````

The above script works for both RadEditors in DIV and IFRAME modes. If you only use one or the other you can simplify the code by removing the unnecessary sections.


Lastly, add a reference to the script to the RadEditor:


````ASPX
<h3>Editor as DIV with Handlers</h3>
<telerik:RadEditor OnClientLoad="editor_OnClientLoad" ContentAreaMode="Div" Skin="Bootstrap" runat="server" ID="RadEditor1" EditModes="All" NewLineMode="P" RenderMode="Auto" Height="250px" ToolbarMode="Default">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="Bold" />
        </telerik:EditorToolGroup>
    </Tools>
    <Content>miztake onne</Content>
</telerik:RadEditor>

<h3>Editor as iFrame</h3>

<telerik:RadEditor OnClientLoad="editor_OnClientLoad" ContentAreaMode="Iframe" Skin="Bootstrap" runat="server" ID="RadEditor2" EditModes="All" NewLineMode="P" RenderMode="Auto" Height="250px" ToolbarMode="Default">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="Bold" />
        </telerik:EditorToolGroup>
    </Tools>
    <Content>miztake twwo</Content>
</telerik:RadEditor>

````


  
