---
title: Advanced via NeedDataSource
page_title: Advanced via NeedDataSource - RadImageGallery
description: Check our Web Forms article about Advanced via NeedDataSource.
slug: imagegallery/data-binding/server-side/advanced-via-needdatasource
tags: advanced,via,needdatasource
published: True
position: 3
---

# Advanced via NeedDataSource



The key to the advanced data binding of a **RadImageGallery** controlis handling the **NeedDataSource** event. **RadImageGallery** fires the **NeedDataSource** event each time it needs to be bound to a data source.

## 

This **NeedDataSource** event fires in the following cases:

* Immediately after **On_Load** if the **RadImageGallery** has not yet been data-bound and there is no **ViewState** data. This means that if the **EnableViewState** property is set to False, **RadImageGallery** will bind each time the page loads, not only the first time;

* When a paging operation occurs (including **PageIndexChanged**and **PageSizeChanged**);

* When the **Rebind()** method is called.

>caution  **Important** : You should never call the **Rebind()** method in a **NeedDataSource** event handler.You should never call **DataBind()** as well when using advanceddata-binding through **NeedDataSource** .
>


In the **NeedDataSource** event handler, you should prepare the data source (list of objects) for RadImageGallery and assign it to the **DataSource** property.The following example demonstrated how to assign a **DataTable** as a data source for the **RadImageGallery**:

````ASPNET
<telerik:RadImageGallery RenderMode="Lightweight" ID="RadImageGallery1" runat="server"
	OnNeedDataSource="RadImageGallery1_NeedDataSource"
	DataTitleField="Title"
	DataDescriptionField="Description"
	DataImageField="ImageData"
	DataThumbnailField="ThumbnailData">
</telerik:RadImageGallery> 
````





````C#
protected void RadImageGallery1_NeedDataSource(object sender, Telerik.Web.UI.ImageGalleryNeedDataSourceEventArgs e)
{
	(sender as RadImageGallery).DataSource = GetImageGalleryData();
}

private DataTable GetImageGalleryData()
{
	DataTable table = new DataTable();
	table.Columns.Add("Title", typeof(string));
	table.Columns.Add("Description", typeof(string));
	table.Columns.Add("ImageData", typeof(string));
	table.Columns.Add("ThumbnailData", typeof(string));

	table.Rows.Add("Image 1", "Description", "image1.png", "image1_thumb.png");
	table.Rows.Add("Image 2", "Description", "image2.png", "image2_thumb.png");
	table.Rows.Add("Image 3", "Description", "image3.png", "image3_thumb.png");

	return table;
}
````
````VB.NET
Protected Sub RadImageGallery1_NeedDataSource(sender As Object, e As Telerik.Web.UI.ImageGalleryNeedDataSourceEventArgs) Handles RadImageGallery1.NeedDataSource
	TryCast(sender, RadImageGallery).DataSource = GetImageGalleryData()
End Sub

Private Function GetImageGalleryData() As DataTable
	Dim table As New DataTable()
	table.Columns.Add("Title", GetType(String))
	table.Columns.Add("Description", GetType(String))
	table.Columns.Add("ImageData", GetType(String))
	table.Columns.Add("ThumbnailData", GetType(String))

	table.Rows.Add("Image 1", "Description", "image1.png", "image1_thumb.png")
	table.Rows.Add("Image 2", "Description", "image2.png", "image2_thumb.png")
	table.Rows.Add("Image 3", "Description", "image3.png", "image3_thumb.png")

	Return table
End Function
````


# See Also

 * [Binding to a Static Collection]({%slug imagegallery/data-binding/server-side/binding-radimagegallery-to-a-static-collection-of-items%})

 * [Binding to a Declarative Data Source]({%slug imagegallery/data-binding/server-side/declarative-data-source%})

 * [Advanced Data-binding]({%slug imagegallery/data-binding/server-side/advanced-via-needdatasource%})
