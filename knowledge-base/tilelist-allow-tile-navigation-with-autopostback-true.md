---
title: Allow Tile Navigation with AutoPostBack=true in RadTileList
description: Allow Tile Navigation with AutoPostBack=true in RadTileList. Check it now!
type: how-to
page_title: Allow Tile Navigation with AutoPostBack=true in RadTileList
slug: tilelist-allow-tile-navigation-with-autopostback-true
res_type: kb
---

### HOW TO 

 Allow certain tiles to navigate according to their `NavigateUrl` properties when the RadTileList's `AutoPostBack` property is set to `true`.  
   
 ### PROBLEM 
 When RadTileList's `AutoPostBack` property is set to true, all tiles perform a postback regardless of their own `AutoPostBack` values and their `NavigateUrl` properties. This is noted in the [Navigation help article]({%slug tilelist/functionality/navigation%}). Also, RadTileList changes the `AutoPostBack` property of all its child tiles to true in order to capture their postbacks. Thus, they would not navigate even if the [OnClientTileClicked event]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicked%}) is cancelled.  
   
 ## SOLUTION 
 Use the [OnClientLoad event]({%slug tilelist/client-side-programming/client-side-events/onclientload%}) of the RadTileList to **reset** the `AutoPostBack` property of the **tiles** you wish to use **for navigation only** to `false`. You would need to define the condition for this change, and a good example is the presence of the `NavigateUrl` property. If it is set - the tile should always navigate, so its `AutoPostBack` property gets reset to `false`.

 Here is a small example:  
 
 ````ASP.NET
 <telerik:RadTileList runat="server" ID="RadTileList1"
                     OnClientLoad="resetAutoPostBackTileProperties"
                     AutoPostBack="true" OnTileClick="OnTileClick">
    <Groups>
        <telerik:TileGroup Name="Test">
            <telerik:RadTextTile runat="server" ID="TileAPBFalse"
                                 AutoPostBack="false"
                                 NavigateUrl="the-desired-page.aspx"
                                 Text="I will navigate only" />
            <telerik:RadTextTile runat="server" ID="TileAPBTrue"
                                 AutoPostBack="true"
                                 Text="I will POST this page" />
        </telerik:TileGroup>
    </Groups>
</telerik:RadTileList>
<script type="text/javascript">
    function resetAutoPostBackTileProperties(sender, args) {
        var tiles = sender.get_allTiles();
        for (var i = 0; i < tiles.length; i++) {
            //a default condition would be if the tile has NavigateUrl set
            //you can use a custom one - e.g., the presence of a CSS class
            if (tiles[i].get_navigateUrl()) {
                tiles[i].set_autoPostBack(false);
            }
        }
    }
</script>
 ````
 
   
 and here is a small server-side method you can use to confirm the postback did not occur:  
 ````C#
 protected void OnTileClick(object sender, TileListEventArgs e)
{
    Response.Write("Clicked Tile ID: " + e.Tile.ID);
}
 ````
 ````VB
 Protected Sub RadTileList1_TileClick(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileClick
    Response.Write("Clicked Tile ID: " + e.Tile.ID)
End Sub
 ````






 


