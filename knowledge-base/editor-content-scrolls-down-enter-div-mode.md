---
title: The content scrolls way down when clicking enter within the DIV content area mode of RadEditor
description: The content may scroll way down when the content area is DIV and the NewLineMode property is set to Paragraph - RadEditor for ASP.NET AJAX
type: troubleshooting
page_title: The content scrolls way down when clicking enter within the DIV content area mode of RadEditor
slug: editor-content-scrolls-down-enter-div-mode
position: 
tags: 
ticketid: 1573557
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
The content may scroll way down when the content area is DIV, the NewLineMode property is set to Paragraph and the content is a pretty long text without any wrapper or nested tags. If you experience this corner case scenario, use the solution provided below to prevent the issue.

## Solution
The code below provides fine tuning of the Enter key behavior:

````ASPX
    <script>
        var $E = Telerik.Web.UI.Editor;
        var utils = $E.Utils;
        var scrollTo = utils.scrollTo;

        var executeDomCommand = $E.InsertParagraphCommand.prototype.executeDomCommand;
        $E.InsertParagraphCommand.prototype.executeDomCommand = function () {
            var command = this;
            utils.scrollTo = (element, editor) => {
                //Here you can implement your own custom scroll logic to handle more specific scenarios
            };
            executeDomCommand.call(command);
            utils.scrollTo = scrollTo;
        };
    </script>
    <telerik:RadEditor runat="server" ID="RadEditor1" ContentAreaMode="Div">
        <Content>

        </Content>
    </telerik:RadEditor>
 ````

````C#
    protected void Page_Init(object sender, EventArgs e)
    {
        RadEditor1.Content = @"Barcelona is an excellent place to discover world-class arts and culture. The sights in Barcelona are second to none. Don’t miss the architectural wonder, Casa Mila - otherwise known as La Pedrera. You’ll want to see another one of Antoni Gaudi’s architectural masterpieces, Casa Batllo, which is located at the center of Barcelona.
        Tenerife, one of the nearby Canary Islands, is the perfect escape once you’ve had your fill of the city.In Los Gigantes, life revolves around the marina.Take a boat out in search of bottlenose dolphins and whales. While you’re in Tenerife, visit Mount Teide.It’s the highest point in Spain and the third-largest volcano in the world.
        Los Gigantes, Tenerife Los Gigantes is located on the south-west coast of the Canary Island, Tenerife.It’s a cozy and tranquil resort town framed by a backdrop of magnificent cliffs.
        Casa Mila, Barcelona Casa Mila, more commonly known as La Pedrera, is a quirky modernist apartment building designed by Antoni Gaudi in Barcelona, Spain.Mount Teidet, Tenerife At 12,200 feet(3, 718 meters) Mount Teide is the highest mountain in Spain and the third-largest volcano in the world.";
    }
 ````

Since the scenario is a bit corner, you have the ability to customize the scrolling direction in the utils.scrollTo function override:

````C#
utils.scrollTo = (element, editor) => {
    //Here you can implement your own custom scroll logic to handle more specific scenarios
};
````

   
   