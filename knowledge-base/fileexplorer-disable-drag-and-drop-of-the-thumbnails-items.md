---
title: Cancel Drap and Drop in the Thumbnails panel and override the ListView template
description: Learn how to disable the drag and drop operations in the ListView when the ExplorerMode is set to Thumbnails - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Disable the Drap and Drop in the Thumbnails panel and override the ListView template
slug: fileexplorer-disable-drag-and-drop-of-the-thumbnails-items
position: 
tags: 
ticketid: 270153
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadFileExplorer for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
Learn how to disable the drag and drop operations in the ListView when the ExplorerMode is set to "Thumbnails". 

## Solution
To disable the drag and drop, set the ListView AllowItemsDragDrop property to false and modify the ItemTemplate by adding draggable="false" to the A tag: 

 
````C#
    private void Page_PreRenderComplete(object sender, EventArgs e)
    {
        FileExplorer1.TreeView.EnableDragAndDrop = false;
        FileExplorer1.Grid.ClientSettings.AllowRowsDragDrop = false;
        FileExplorer1.ListView.ClientSettings.AllowItemsDragDrop = false;
        
        FileExplorer1.ListView.ClientSettings.DataBinding.ItemTemplate =
            @"<li class=""rfeThumbList rlvI"">
                <a href=""javascript: void 0;"" draggable=""false"" class=""rfeLink rlvDrag#= isSelected ? ' rfeSelectedLink' : ''#"" data-index=""#= index #"" title=""#= Name #"">
                    <span class=""rfeFile#= Telerik.Web.UI.FileExplorerHelper.isWebImage(item.Extension) ? ' rfeImageFile' : '' #"">
                    # if(Telerik.Web.UI.FileExplorerHelper.isWebImage(item.Extension)) {#
                        <img src=""#= item.Url || Path #"" alt=""#= Name #"" width=""32"" height=""32"" />
                    # } else { #
                        <span class=""rfeFileIcon #= Telerik.Web.UI.FileExplorerHelper.getThumbnailCSSExtension(item) #""></span>
                    # } #
                    </span>
                    <span class=""rfeThumbTitle"">#= Name #</span>
                </a>
            </li>";
        }
````

 