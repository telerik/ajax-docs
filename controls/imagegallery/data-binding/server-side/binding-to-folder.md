---
title: Binding to Folder
page_title: Binding to Folder | RadImageGallery for ASP.NET AJAX Documentation
description: Binding to Folder
slug: imagegallery/data-binding/server-side/binding-to-folder
tags: binding,to,folder
published: True
position: 0
---

# Binding to Folder



You can bind **RadImageGallery** to a virtual folder path and display all images contained in it. All that you need to do is set the **ImagesFolderPath** property as shown in the code snippet. The control will automatically generate thumbnail images. If necessary the thumbnails will be cropped to fit the defined thumbnail width and height. The images in the Image Area have relative paths and the user only needs to wait for the image to be loaded by the browser. Figure 1 shows how the rendered control will look on the web page.

## 

````ASPNET
<telerik:RadImageGallery runat="server" ID="RadImageGallery1" 
	ImagesFolderPath="~/Images"
	Width="600px" Height="480px">
	<ThumbnailsAreaSettings Position="Left" ScrollOrientation="Vertical" ScrollButtonsTrigger="Click" />
	<ImageAreaSettings ShowNextPrevImageButtons="true" NavigationMode="Button" />
</telerik:RadImageGallery>
````



**Figure 1** - RadImageGallery bound to a Folder
![image-gallery-binding-to-folder](images/image-gallery-binding-to-folder.jpg)

# See Also

 * [Binding to a Static Collection]({%slug imagegallery/data-binding/server-side/binding-radimagegallery-to-a-static-collection-of-items%})

 * [Binding to a Declarative Data Source]({%slug imagegallery/data-binding/server-side/declarative-data-source%})

 * [Advanced Data-binding]({%slug imagegallery/data-binding/server-side/advanced-via-needdatasource%})
