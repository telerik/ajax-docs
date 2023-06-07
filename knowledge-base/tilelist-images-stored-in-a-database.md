---
title: Images Stored in a DataBase in RadTileList
description: Images Stored in a DataBase in RadTileList. Check it now!
type: how-to
page_title: Images Stored in a DataBase in RadTileList
slug: tilelist-images-stored-in-a-database
res_type: kb
---


## Problem

How to show **images** from a **database** in a **RadTileList**.

[RadTileList's built-in data binding]({%slug tilelist/data-binding/overview%}) allows for URLs to be set to the file system.

## Solution

There are three possible approaches you can take:

- Point the ImageUrl to a **custom handler that will take some argument and return the image**.

 The result would be something like:

 ````
 <img src="myhandler.ashx?imageId=1234" />
 ````
 
 where the needed **URL data (direct links to the handler) can be stored in the data source and provided to the tile list via its data binding properties**:

 ````
 <CommonTileBinding DataBadgeImageUrlField="badgeUrls" DataTitleImageUrlField="titleUrls" />
<ImageTileBinding DataImageUrlField="imageUrls" />
 ````
 
 With this approach the database queries will not run synchronously for each item in the TileDataBound event, but the browser will call the handler as many times as needed when it renders images. This will improve the page performance and can even improve caching (depending on your handler specifics).
 
- **Create your own structure** in a [RadContentTemplateTile]({%slug tilelist/tiles/contenttemplate-tile%}). This lets you use **data binding expressions** to fetch the **image from a custom handler**, for example:  

 ````
 <ContentTemplateTileBinding>
    <ContentTemplate>
        <img src='myImageHandler.ashx?id=<%# DataBinder.Eval(Container.DataItem, "imageId") %>' />
    </ContentTemplate>
</ContentTemplateTileBinding>
 ````
 
- Add a [RadBinaryImage]({%slug binaryimage/overview%})in a [RadContentTemplateTile]({%slug tilelist/tiles/contenttemplate-tile%}). You can **provide** it with a **byte array of image data in the [TileDataBound event]({%slug tilelist/server-side-programming/server-side-events/ontiledatabound%})**. This will have worse performance than the options above because all queries will have to run synchronously.  

 ````ASPX
 <telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" Width="634px" OnTileDataBound="RadTileList1_TileDataBound">
    <DataBindings>
        <CommonTileBinding TileType="RadContentTemplateTile" />
        <ContentTemplateTileBinding>
            <ContentTemplate>
                <telerik:RadBinaryImage runat="server" ID="theImage"  />
            </ContentTemplate>
        </ContentTemplateTileBinding>
    </DataBindings>
</telerik:RadTileList>
 ````

 ````C#
 protected void RadTileList1_TileDataBound(object sender, TileListEventArgs e)
{
    //get the actual image, this is a sample with an image in the file system
    System.Drawing.Image img = System.Drawing.Image.FromFile(Server.MapPath("~/images/someImage.png"));
    byte[] arr;
    using (MemoryStream ms = new MemoryStream())
    {
        img.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
        arr = ms.ToArray();
    }
     //end get of image, you should have a byte array with the image data at this point
    ((e.Tile as RadContentTemplateTile).ContentContainer.FindControl("theImage") as RadBinaryImage).DataValue = arr;
}
protected void Page_Load(object sender, EventArgs e)
{
    RadTileList1.DataSource = new[] { 1, 2, 3 };
    RadTileList1.DataBind();
}
 ````

 