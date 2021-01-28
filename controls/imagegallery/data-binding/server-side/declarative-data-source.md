---
title: Declarative Data Source
page_title: Declarative Data Source - RadImageGallery
description: Check our Web Forms article about Declarative Data Source.
slug: imagegallery/data-binding/server-side/declarative-data-source
tags: declarative,data,source
published: True
position: 2
---

# Declarative Data Source



You can bind a **RadImageGallery** to any ASP.NET declarative data source control, including **SqlDataSource**, **AccessDataSource**, **ObjectDataSource**, **XmlDataSource**, **EntityDataSource**, **OpenAccessDataSource**, **LinqDataSource** and **ObjectContainerDataSource**.

## 

The steps below demonstrate how to bind a **RadImageGallery** to a **SqlDataSource**. The sample assumes that you have installed the Telerik sample database. If you have not done that, there is an article [here](https://msdn.microsoft.com/en-us/library/8b6y4c7s.aspx) describing how to install a sample database.

1. Add a **SqlDataSource** control to a page and set its SelectCommand appropriately.

1. Place a **RadImageGallery** control on the page.

1. Assign the **DataSourceID** property to the data source control ID from step 1.

1. Set the **DataImageField** property to the name of the data source field containing the images.

In addition, you could set different optional properties:

* **DataTitleField**: Specifies the field with the title for each image. If not specified, images would have no Title.

* **DataDescriptionField**: Specifies the field containing the description for each image. If not specified, images would have no Description.

* **DataThumbnailField**: Specifies the field containing the thumbnail for each image. If this property is not set, thumbnails will be generated automatically.

## Example 1: Binding a RadImageGallery to a SqlDataSource

````ASPNET
<telerik:RadImageGallery RenderMode="Lightweight" runat="server" ID="RadImageGallery2" DataSourceID="SqlDataSource1" DataDescriptionField="Description" DataImageField="ImageUrl"
	DataTitleField="Title">
</telerik:RadImageGallery>

<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>" 
	ProviderName="System.Data.SqlClient" SelectCommand="SELECT [ImageUrl], [Description], [Title] FROM [CityImages]"></asp:SqlDataSource>
````





# See Also

 * [Binding a RadImageGallery to a Folder]({%slug imagegallery/data-binding/server-side/binding-to-folder%})

 * [Binding to a Static Collection]({%slug imagegallery/data-binding/server-side/binding-radimagegallery-to-a-static-collection-of-items%})

 * [Advanced Data-binding]({%slug imagegallery/data-binding/server-side/advanced-via-needdatasource%})
