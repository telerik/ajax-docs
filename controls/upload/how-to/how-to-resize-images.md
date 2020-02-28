---
title: How to Resize Images
page_title: How to Resize Images | RadUpload for ASP.NET AJAX Documentation
description: How to Resize Images
slug: upload/how-to/how-to-resize-images
tags: how,to,resize,images
published: True
position: 6
---

# How to Resize Images



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

A common requirement is to resize uploaded images. To accomplish this, you can use the classes inSystem. Drawing namespace.

The following example demonstrates how to save uploaded images and create thumbnails.

>note For more information, see:[https://msdn2.microsoft.com/en-us/library/system.drawing.image.getthumbnailimage.aspx](https://msdn2.microsoft.com/en-us/library/system.drawing.image.getthumbnailimage.aspx)
>






````C#
	     
using System.Drawing;
using System.IO;
using Telerik.Web.UI;
...

public bool ThumbnailCallback()
{  
    return false;
}

protected void Button1_Click( object sender, EventArgs e)
{  
    string target = Server.MapPath("~/UploadedImages" );
    Image.GetThumbnailImageAbort thumbnailImageAbortDelegate =
        new Image.GetThumbnailImageAbort(ThumbnailCallback);  

    foreach (UploadedFile file in RadUpload1.UploadedFiles)
    {  
        file.SaveAs(Path.Combine(target, file.GetName()));  
        using (Bitmap originalImage = new Bitmap(file.InputStream))
        { 
            //You can implement additional logic to compute
            // the width / height according your requirements
            int width = originalImage.Width / 2;
            int height = originalImage.Height / 2; 
            using (Image thumbnail = originalImage.GetThumbnailImage(width, height, thumbnailImageAbortDelegate, IntPtr.Zero))   
            {   
                string thumbnailFileName = Path.Combine(target,
                    string.Format("{0}_thumb{1}" ,  file.GetNameWithoutExtension(), file.GetExtension()));
                thumbnail.Save(thumbnailFileName);   
            }   
        } 
    }
}
				
````
````VB.NET
	     	
Imports System.Drawing
Imports System.IO
Imports Telerik.Web.UI
...
    Public Function ThumbnailCallback() As Boolean
        Return False
    End Function
    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) _
        Handles Button1.Click
        Dim target As String = Server.MapPath("~/UploadedImages")
        Dim thumbnailImageAbortDelegate As New Image.GetThumbnailImageAbort(ThumbnailCallback)
        For Each file As UploadedFile In RadUpload1.UploadedFiles
            file.SaveAs(Path.Combine(target, file.GetName()))
            Dim originalImage As New Bitmap(file.InputStream)
            Try
                'You can implement additional logic to compute
                ' width/height according your requirements
                Dim width As Integer = originalImage.Width / 2
                Dim height As Integer = originalImage.Height / 2
                Dim thumbnail As Image = _
                  originalImage.GetThumbnailImage(width, height, _
                         thumbnailImageAbortDelegate, IntPtr.Zero)
                Try
                    Dim thumbnailFileName As String = Path.Combine(target, _
                       String.Format("{0}_thumb{1}", _
                                      file.GetNameWithoutExtension(), _
                                      file.GetExtension()))
                    thumbnail.Save(thumbnailFileName)
                Finally
                    thumbnail.Dispose()
                End Try
            Finally
                originalImage.Dispose()
            End Try
        Next file
    End Sub
	
````


This method is useful when the produced thumbnail image is less than 120 x 120px. If you need a bigger thumbnail you can use the following one:





````C#
	     
// This method can create big thumbnails using resizing
private void CreateBigThumbNail(int newWidth, UploadedFile file)
{
   string target = Server.MapPath("~/UploadedImages");
   if (!Directory.Exists(target))
   {
       Directory.CreateDirectory(target);
   }
   file.SaveAs(Path.Combine(target, file.GetName()));
   using (Bitmap originalImage = new Bitmap(file.InputStream))
   {
       int width = newWidth;
       int height = (originalImage.Height * newWidth) / originalImage.Width;
       Bitmap thumbnail = new Bitmap(width, height);
       using (Graphics g = Graphics.FromImage((System.Drawing.Image)thumbnail))
           g.DrawImage(originalImage, 0, 0, width, height);
       string thumbnailFileName = Path.Combine(target,
           string.Format("{0}_bthumb{1}", file.GetNameWithoutExtension(), file.GetExtension()));
       thumbnail.Save(thumbnailFileName);
   }
} 

````
````VB.NET
		
' This method can create big thumbnails using resizing
Private Sub CreateBigThumbNail(ByVal newWidth As Integer, ByVal file As UploadedFile)
    Dim target As String = Server.MapPath("~/UploadedImages")
    If Not Directory.Exists(target) Then
        Directory.CreateDirectory(target)
    End If
    file.SaveAs(Path.Combine(target, file.GetName()))
    Using originalImage As New Bitmap(file.InputStream)
        Dim width As Integer = newWidth
        Dim height As Integer = (originalImage.Height * newWidth) / originalImage.Width
        Dim thumbnail As New Bitmap(width, height)
        Using g As Graphics = Graphics.FromImage(DirectCast(thumbnail, System.Drawing.Image))
            g.DrawImage(originalImage, 0, 0, width, height)
        End Using
        Dim thumbnailFileName As String = Path.Combine(target, String.Format("{0}_bthumb{1}", file.GetNameWithoutExtension(), file.GetExtension()))
        thumbnail.Save(thumbnailFileName)
    End Using
End Sub
	
````

