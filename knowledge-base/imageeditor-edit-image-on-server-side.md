---
title: ImageEditor edit images on the server
description: ImageEditor how to edit images on the server.
type: how-to
page_title: ImageEditor edit images on the server | ImageEditor
slug: imageeditor-edit-image-on-server-side
ticketid: 1632631
res_type: kb
---

## Environment

<table>
    <tr>
        <td>Product</td>
        <td>Telerik WebForms ImageEditor for ASP.NET AJAX</td>
    </tr>
</table>

## Description

How to edit images in the **ImageEditor** on the server.

## Solution

One way of achieving this is by adding a button that has a respective `OnClick` event attached to it. 

Example

````ASPX
<telerik:RadImageEditor ID="RadImageEditor1" runat="server" ImageUrl="~/Images/image.jpeg" /> 

<asp:Button ID="EditImageButton" runat="server" Text="Edit Image" OnClick="EditImageButton_Click" />
````

Inside the **EditImageButton_Click** event handler, perform specific image manipulations to achieve the desired result.
Additioanlly, save the edited image to a new file.

Example

````C#
protected void EditImageButton_Click(object sender, EventArgs e)
{
    string originalImagePath = Server.MapPath(RadImageEditor1.ImageUrl); // Load the original image
    EditableImage editableImage = new EditableImage(originalImagePath);

    editableImage.Rotate(Rotation.Rotate180);    // Perform image manipulations
    editableImage.Flip(FlipDirection.Vertical);

    string newImagePath = Server.MapPath("~/Images/image.jpg"); // Save the edited image to a new file
    editableImage.Image.Save(newImagePath, System.Drawing.Imaging.ImageFormat.Jpeg);
    
    RadImageEditor1.ImageUrl = "~/Images/image.jpg"; // Update the ImageUrl of the RadImageEditor to display the new image

    editableImage.Dispose();  // Cleanup: Dispose of the EditableImage object
}
````
````VB
Protected Sub EditImageButton_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim originalImagePath As String = Server.MapPath(RadImageEditor1.ImageUrl)
    Dim editableImage As EditableImage = New EditableImage(originalImagePath)

    editableImage.Rotate(Rotation.Rotate180)
    editableImage.Flip(FlipDirection.Vertical)

    Dim newImagePath As String = Server.MapPath("~/Images/image.jpg")
    editableImage.Image.Save(newImagePath, System.Drawing.Imaging.ImageFormat.Jpeg)

    RadImageEditor1.ImageUrl = "~/Images/image.jpg"

    editableImage.Dispose()
End Sub
````

## See Also

- [RadImageEditor's Server-Side Programming Overview]({%slug imageeditor/server-side-programming/overview%})
- [RadImageEditor's Server-Side Programming Events]({%slug imageeditor/server-side-programming/events%})


   