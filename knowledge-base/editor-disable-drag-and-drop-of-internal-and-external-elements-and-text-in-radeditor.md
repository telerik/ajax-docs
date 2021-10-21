---
title: Disable Drag and Drop of internal and external elements and text in RadEditor
description: See how to disable Drag and Drop of internal and external elements and text in RadEditor.
type: how-to
page_title: Disable Drag and Drop of internal and external elements and text in RadEditor
slug: editor-disable-drag-and-drop-of-internal-and-external-elements-and-text-in-radeditor
res_type: kb
---

## HOW-TO

Disable Drag and Drop of internal and external elements and text in RadEditor

## Solution

Sometimes you may need to prevent the browser drag and drop events to stop unwanted insertion of malicious or bulky content. The client-side solution below will show you how to disable the drag and drop operations of text and HTML elements, regardless of whether they are located inside or outside the content area of the control:

````ASP.NET
<script>
    function OnClientLoad(sender, args) {
        //disable drag and drop of external elements and text in Design mode
        $telerik.$(sender.get_contentArea()).bind("drop", function (e) {
            $telerik.cancelRawEvent(e);
        });
        //disable drag and drop from external elements and text in HTML mode
        $telerik.$(sender.get_textArea()).bind("drop", function (e) {
            $telerik.cancelRawEvent(e);
        });
 
        //disable drag and drop of elements and text inside RadEditor content area
        var element = document.all ? editor.get_document().body : editor.get_document();
        var eventHandler = document.all ? "drop" : "dragstart";
        $telerik.addExternalHandler(element, eventHandler, function (e) {
            $telerik.cancelRawEvent(e);
        });
    }
</script>
<telerik:RadEditor OnClientLoad="OnClientLoad" ID="RadEditor1" runat="server">
    <Content>
        Try to drag and drop the <img src="Images/Apply.png" /> image in the end of this line.</div>
    </Content>
</telerik:RadEditor>
<br />
<div style="background-color: yellow; display:inline;">Select and drag the image <img src="Images/Apply.png" /> into the editor's content area</div>
<div style="background-color: yellow; display:inline;">Select and drag the text into the editor's content area</div>
````

## Pro Tip

You can also make text and HTML elements unselectable on the page by applying the following CSS selector to them:

````ASP.NET
<style>
*.unselectable {
   -moz-user-select:
   -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
</style>
<asp:button Id="button1" runat="server" unselectable="on" class="unselectable" Text="Submit" />
<div id="foo" unselectable="on" class="unselectable">Unselectable DIV element</div>
````


