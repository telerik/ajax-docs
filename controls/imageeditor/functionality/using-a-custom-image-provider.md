---
title: Using a Custom Image Provider
page_title: Using a Custom Image Provider | UI for ASP.NET AJAX Documentation
description: Using a Custom Image Provider
slug: imageeditor/functionality/using-a-custom-image-provider
tags: using,a,custom,image,provider
published: True
position: 4
---

# Using a Custom Image Provider



## 

The __RadImagEditor__ stores the image on the server in the Session or in the Cache. This is controlled via the __ImageCacheStorageLocation__ property. This is needed because some operations on the images are performed on the server (e.g. Crop, AddText, etc.) - they perform a Callback to the server, the needed editing is done on the server and the provider places the new image in the Session or in the Cache. Then an HTTP handler allows it to be transferred back to the client.

The case where multiple servers are used for the same site may therefore be problematic for maintaining the image, because the Cahce or the Session are often disabled or not shared between all servers. In such a scenario the developer can implement a custom provider that will save and supply the image for the particular scenario. This is done by implementing the __ICacheImageProvider__ interface the __RadImageEditor__ has and creating the desired functionality in its methods. In order to use your custom provider you need to set it to the __ImageProviderTypeName__ property of the __ImageManager__. It requires the fully qualified assembly name of this custom class' type. This property defaults to an empty string (so that the built-in functionality is used), if you pass a value it will try to find and use the passed class.

Below follows an example structure of this interface and how to set it, as well as a list of the methods and properties in it:


>caption Interface methods

|  __Name__  |  __Return Type__  |  __Parameters__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __Store__ |The key that corresponds to the stored editable image|The EditableImage object to store|Stores an image, generates key that corresponds to the stored image, and returns the key|
| __LoadImage__ |Returns the System.Drawing.Image object loaded from the specified location|

1. The path to the image to load

1. The physical path to the image to load

1. The HttpContext to which the application belongs|Loads an image from the specified location. This image will be used to create an EditableImage object|
| __SaveImage__ |Returns string.Empty if the saving was successful, "FileExists" - if overwriting is not allowed and the file exists and "MessageCannotWriteToFolder" - if there are not enough permissions to write the file|

1. The EditableImage object to store

1. The physical path (including the file name) where the image will be stored

1. The path (relative) to the image that is currently loaded in the ImageEditor. If new image name was specified when saving the image, it will be reflected in the imageUrl

1. Bool value indicating whether or not the existing image (if it exists) will be overwritten|Saves the image in persistent storage location|
| __Retrieve__ |An EditableImage object that corresponds to the key passed|The key that corresponds to the editable image|Retrieves an EditableImage from the provider|
| __ClearImages__ |-|(optional)The key up to which the images are cleared|Clears all images currently saved by the provider. If a key is passed it clears the images in the provider up to the image key passed. The clearing is done from the first image that was placed by the provider, up to the one corresponding to the key. The image that corresponds to the key is not cleared|


>caption Interface properties

|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __Storage__ |ImageStorage|Gets or sets the location where the EditableImage objects will be stored. This property is set by the RadImageEditor instance. When implementing the property in a class, providing an Auto-Implemented property is enough for the provider to work correctly.|
| __ImageStorageKey__ |String|Gets or sets a unique key that used to associate the current RadImageEditor instance with the images stored by the provider. This property is set by the RadImageEditor instance. The RadImageEditor class provides exactly the same property, and the provider and the corresponding ImageEditor instance have the same value. When implementing the property in a class, providing an Auto-Implemented property is enough for the provider to work correctly. The property should not be set, since it is set by the corresponding ImageEditor instance.|

An example structure of a class that implements this interface:



````C#
	    protected override void OnInit(EventArgs e)
	    {
	        RadImageEditor1.ImageManager.ImageProviderTypeName = typeof(provider).AssemblyQualifiedName;
	        base.OnInit(e);
	    }
	
	    class provider : Telerik.Web.UI.ImageEditor.ICacheImageProvider
	    {
	        public void ClearImages(string imageKey)
	        {
	            throw new NotImplementedException();
	        }
	
	        public void ClearImages()
	        {
	            throw new NotImplementedException();
	        }
	
	        public string ImageStorageKey
	        {
	            get;
	            set;
	        }
	
	        public Image LoadImage(string imageUrl, HttpContext context)
	        {
	            throw new NotImplementedException();
	        }
	
	        public Telerik.Web.UI.ImageEditor.EditableImage Retrieve(string key)
	        {
	            throw new NotImplementedException();
	        }
	
	        public string SaveImage(Telerik.Web.UI.ImageEditor.EditableImage editableImage, string physicalPath, bool overwrite)
	        {
	            throw new NotImplementedException();
	        }
	
	        public Telerik.Web.UI.ImageEditor.ImageStorage Storage
	        {
	            get;
	            set;
	        }
	
	        public string Store(Telerik.Web.UI.ImageEditor.EditableImage image)
	        {
	            throw new NotImplementedException();
	        }
	    }
````
````VB.NET
	    Protected Sub Page_Init(sender As Object, e As System.EventArgs) Handles Me.Init
	        RadImageEditor1.ImageManager.ImageProviderTypeName = GetType(provider).AssemblyQualifiedName
	    End Sub
	
	    Class provider
	        Implements Telerik.Web.UI.ImageEditor.ICacheImageProvider
	
	        Public Sub ClearImages() Implements Telerik.Web.UI.ImageEditor.ICacheImageProvider.ClearImages
	            Throw New NotImplementedException()
	        End Sub
	
	        Public Sub ClearImages(imageKey As String) Implements Telerik.Web.UI.ImageEditor.ICacheImageProvider.ClearImages
	            Throw New NotImplementedException()
	        End Sub
	
	        Public Property ImageStorageKey As String Implements Telerik.Web.UI.ImageEditor.ICacheImageProvider.ImageStorageKey
	            Get
	            End Get
	            Set(value As String)
	            End Set
	        End Property
	
	        Public Function LoadImage(imageUrl As String, context As System.Web.HttpContext) As System.Drawing.Image Implements Telerik.Web.UI.ImageEditor.ICacheImageProvider.LoadImage
	            Throw New NotImplementedException()
	        End Function
	
	        Public Function Retrieve(key As String) As Telerik.Web.UI.ImageEditor.EditableImage Implements Telerik.Web.UI.ImageEditor.ICacheImageProvider.Retrieve
	            Throw New NotImplementedException()
	        End Function
	
	        Public Function SaveImage(editableImage As Telerik.Web.UI.ImageEditor.EditableImage, physicalPath As String, overwrite As Boolean) As String Implements Telerik.Web.UI.ImageEditor.ICacheImageProvider.SaveImage
	            Throw New NotImplementedException()
	        End Function
	
	        Public Property Storage As Telerik.Web.UI.ImageEditor.ImageStorage Implements Telerik.Web.UI.ImageEditor.ICacheImageProvider.Storage
	            Get
	            End Get
	            Set
	            End Set
	        End Property
	
	        Public Function Store(image As Telerik.Web.UI.ImageEditor.EditableImage) As String Implements Telerik.Web.UI.ImageEditor.ICacheImageProvider.Store
	            Throw New NotImplementedException()
	        End Function
	    End Class
	#End Region
	
	End Class



