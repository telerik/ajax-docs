---
title: Create URL src with RadBinaryImage to easily preview uploaded images
description: The RadBinaryImage can be used to pass an image file as a byte array, and then get the ImageUrl to a handler that will server the image.
type: how-to
page_title: Create URL src with RadBinaryImage to easily preview uploaded images
slug: binaryimage-create-url-to-preview-image
position: 
tags: 
ticketid: 1566204
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadBinaryImage for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
To preview an uploaded image or an image from the local filesystem, you would need to either make the image publicly accessible or create a custom handler or API/web service that will serve the image.

## Solution
The RadBinaryImage can be used to pass an image file as a byte array, and then get the ImageUrl to a handler that will server the image. The RadBinaryImage does not need to be added to the page, but if it is hidden, the `PersistDataIfNotVisible` property should be set to `true`. 


## Example

````ASP.NET
<asp:HiddenField ID="HiddenField1" runat="server" />
<telerik:RadButton runat="server" ID="RadButton1" Text="Submit uploaded files and preview them" AutoPostBack="true" />
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" MultipleFileSelection="Automatic" OnFileUploaded="RadAsyncUpload1_FileUploaded"></telerik:RadAsyncUpload>
<script>
    function pageLoadHandler() {
        var value = $get("<%= HiddenField1.ClientID %>").value;
        if (value) {
            var json = JSON.parse(value);
                    
            json.forEach(function (item) {
                var $image = $telerik.$("<img />")
                    .attr("height", 100)
                    .attr("src", item.ImageSrc)
                    .attr("alt", item.ImageName);

                $telerik.$("#preview-container").append($image);
            })

        }
        // Sys.Application.remove_load(pageLoadHandler);  
    }
    Sys.Application.add_load(pageLoadHandler);
</script>
<div id="preview-container"></div>
````

````C#
protected void Page_PreRender(object sender, EventArgs e)
{
    var serializer = new AdvancedJavaScriptSerializer();
    HiddenField1.Value = serializer.Serialize(ImagesList);
}

public string ImagesListSessionKey = "ImageListSessionKey";
public List<ImageItem> ImagesList
{
    get
    {
        if (Session[ImagesListSessionKey] as List<ImageItem> == null)
        {
            Session[ImagesListSessionKey] = new List<ImageItem>();
        }

        return Session[ImagesListSessionKey] as List<ImageItem>;
    }
}

protected void RadAsyncUpload1_FileUploaded(object sender, FileUploadedEventArgs e)
{
    BinaryReader reader = new BinaryReader(e.File.InputStream);
    Byte[] data = reader.ReadBytes((int)e.File.InputStream.Length);
    ImageItem newImage = new ImageItem();

    var binaryimage = new RadBinaryImage();
    binaryimage.DataValue = data;
    binaryimage.Visible = false;
    binaryimage.PersistDataIfNotVisible = true;
    binaryimage.DataBind();

    newImage.ImageName = e.File.FileName;
    newImage.ImageSrc = binaryimage.ResolveClientUrl(binaryimage.ImageUrl);

    ImagesList.Add(newImage);
}

public class ImageItem
{
    public string ImageName { get; set; }
    public string ImageSrc { get; set; }
}
````

## See Also

* [RadBinaryImage online demo](https://demos.telerik.com/aspnet-ajax/binaryimage/examples/overview/defaultcs.aspx)
  
* [RadBinaryImage documentation]({%slug controls/radbinaryimage %})

* [Preview uploaded image with RadAsyncUpload KB article]({%slug asyncupload-preview-uploaded-image %})
