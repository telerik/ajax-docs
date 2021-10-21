---
title: Drag and Drop or NavigateUrl with ContentTemplateTile that has input or anchor elements
description: Drag and Drop or NavigateUrl with ContentTemplateTile that has input or anchor elements. Check it now!
type: how-to
page_title: Drag and Drop or NavigateUrl with ContentTemplateTile that has input or anchor elements
slug: tilelist-drag-and-drop-with-contenttemplatetile-input-elements
res_type: kb
---

## How To

 Use **form elements** (inputs, buttons, RadInputs, RadButtons, etc.) in a **RadContentTemplateTile** inside a RadTileList with `EnableDragAndDrop=true` (Option 1). 
Use anchors inside such tiles to navigate to a different URL than denoted in the tile itself (Option 2).
  
## Description
 When the user clicks on the textbox or an anchor (for example), the event bubbles to the tile element where the dragging logic intercepts it, starts dragging the tile and cancels the event. This prevents the textboxes from getting focus, for example. 
Alternatively, if a `NavigateUrl` is provided to the tile, the tile attempts to navigate.
  
## Solutions

### Option 1

To handle clicks on buttons or inputs, capture the mousedown event on the elements you need to use it on and cancel its propagation (i.e., bubbling) to prevent it from reaching the Tile element.  

````ASP.NET
<script>
    function canceljQueryEventBubbling(evt) {
        //prevent the event from bubbling, i.e., reaching the Tile element where it will initiate dragging
        evt.stopPropagation();
    }
    function disableTileDragOnChildElems() {
        //a selector specific to certain elements that have the appropriace CSS class defined
        //$telerik.$(".noTileDrag").mousedown(canceljQueryEventBubbling);
    
        //a selector for all input elements in the tile. Useful, for example, for buttons
        $telerik.$(".RadContentTemplateTile input").mousedown(canceljQueryEventBubbling);
    
        Sys.Application.remove_load(disableTileDragOnChildElems);
    }
    Sys.Application.add_load(disableTileDragOnChildElems);
    
    function doSomeWork(data) {
        if (console)
            console.log(data);
    }
    
    function doWorkWithRadButton(sender, args) {
        doSomeWork(sender.get_commandArgument());
    }
</script>
<telerik:RadTileList runat="server" ID="RadTileList1" EnableDragAndDrop="true">
    <Groups>
    <telerik:TileGroup>
        <telerik:RadContentTemplateTile runat="server" ID="firstTile">
            <ContentTemplate>
                <asp:TextBox CssClass="noTileDrag" ID="Textbox1" runat="server" Text="first tile" Width="100px" />
                first tile
                <asp:Button ID="Button1" Text="click 1" OnClientClick="doSomeWork(1); return false;" runat="server" />
            </ContentTemplate>
        </telerik:RadContentTemplateTile>
        <telerik:RadContentTemplateTile runat="server" ID="secondTile">
            <ContentTemplate>
                <telerik:RadTextBox runat="server" ID="RadTextBox2" Text="second tile" Width="100px"></telerik:RadTextBox>
                second tile
                <telerik:RadButton runat="server" ID="RadButton2" Text="click 2" OnClientClicked="doWorkWithRadButton"
                     CommandArgument="2" AutoPostBack="false"></telerik:RadButton>
            </ContentTemplate>
        </telerik:RadContentTemplateTile>
    </telerik:TileGroup>
    </Groups>
</telerik:RadTileList>
````
  
### Option 2

Use the [OnClientTileClicking]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%}) event and cancel it according to your conditions, so you can perform the desired task. The general solution would be to avoid the conflict and remove the `NavigateUrl` and the `EnableDragAndDrop` properties.  

````ASP.NET
<script>
    function OnClientTileClicking(sender, args) {
        var evt = window.event;//get actual browser click event
        if (evt && window.event.target.nodeName.toUpperCase() == "A") {//or any other logic to determine where the user clicked
            args.set_cancel(true);//prevent the default action of the tile (navigate or postback)
            window.location.href = window.event.target.getAttribute("href");//perform the intended action
        }
    }
</script>
<telerik:RadTileList ID="elmHomeTileList" CssClass="responsiveWidth" runat="server" Skin="Telerik" EnableDragAndDrop="true" SelectionMode="Single" ScrollingMode="Accelerated" TileRows="1" OnClientTileClicking="OnClientTileClicking">
    <Groups>
        <telerik:TileGroup>
 
            <telerik:RadContentTemplateTile ID="tileService" runat="server" Shape="Wide" CssClass="tile-services" Selected="false" NavigateUrl="http://bing.com">
                <ContentTemplate>
                    <div class="pull-left">
                        <a href="http://google.com">I want to go to Google but my tile wants to drag and to go to Bing </a>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/13/Telerik_Logo.png" width="200"/>
                </ContentTemplate>
            </telerik:RadContentTemplateTile>
        </telerik:TileGroup>
    </Groups>
</telerik:RadTileList>
````



