---
title: Specify order when loading images in RadImageGallery
description: Specify order when loading images in RadImageGallery. Check it now!
type: how-to
page_title: Specify order when loading images in RadImageGallery
slug: imagegallery-specify-order-when-loading-images-in-radimagegallery
res_type: kb
---


## HOW-TO

Change order when loading images in RadImageGallery.


## DESCRIPTION
 In order to change the default order of images by Name, Last Modified Date, Alphabetic descending or other, generate the DataSource records by [cycling through the files in the specified images folder and sort them](https://stackoverflow.com/questions/4765789/getting-files-by-creation-date-in-net/4765827#4765827) before loading the DataSource via the [NeedDataSource](https://docs.telerik.com/devtools/aspnet-ajax/controls/imagegallery/data-binding/server-side/advanced-via-needdatasource) event of RadImageGallery.  
  

## SOLUTION

The example below shows how to get the images from a folder named Images (placed in the root of the web app/site), sort the files by Creation Time in descending order, create and set the DataSource of the Image Gallery:  
  
 Default.aspx:

````ASP.NETs
<%@ page language="C#" autoeventwireup="true" codefile="Default.aspx.cs" inherits="Default" %>
 
<!DOCTYPE html>
 
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager runat="server" />
        <telerik:RadImageGallery RenderMode="Lightweight" runat="server" ID="RadImageGallery1" DisplayAreaMode="Image" OnNeedDataSource="RadImageGallery1_NeedDataSource"
            Width="600px" Visible="true"
            DataTitleField="Title" DataDescriptionField="Description" DataImageField="ImageData" DataThumbnailField="ThumbnailData">
            <ImageAreaSettings Height="500px" />
        </telerik:RadImageGallery>
    </form>
</body>
</html>
````



Default.aspx.cs

````C#
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;
 
public partial class Default : System.Web.UI.Page
{
    
    protected void RadImageGallery1_NeedDataSource(object sender, Telerik.Web.UI.ImageGalleryNeedDataSourceEventArgs e)
    {
        RadImageGallery1.DataSource = LoadGallery();
    }
 
    private DataTable LoadGallery()
    {
        DirectoryInfo info = new DirectoryInfo(Server.MapPath("~/Images"));
 
        FileInfo[] files = info.GetFiles().OrderByDescending(p => p.CreationTime).ToArray();
 
        //Data table for image gallery data source
        DataTable table = new DataTable();
        table.Columns.Add("Title", typeof(string));
        table.Columns.Add("Description", typeof(string));
        table.Columns.Add("ImageData", typeof(string));
        table.Columns.Add("ThumbnailData", typeof(string));
 
        foreach (FileInfo file in files)
        {
            table.Rows.Add(file.Name, "", "~/Images/"+ file.Name, "~/Images/" + file.Name);
        }
 
        return table;
    }
}
````




 