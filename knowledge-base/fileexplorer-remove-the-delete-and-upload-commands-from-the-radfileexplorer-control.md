---
title: Remove the "Delete" and "Upload" commands from the RadFileExplorer
description: How to remove the 'Delete' and 'Upload' commands from the RadFileExplorer?
type: how-to
page_title: Remove the "Delete" and "Upload" commands from the RadFileExplorer
slug: fileexplorer-remove-the-delete-and-upload-commands-from-the-radfileexplorer-control
res_type: kb
---


   
## HOW-TO   


Remove command(s) from the toolbar and context menus in the **RadFiileExplorer** control. 

## DESCRIPTION

The example is about removing the *"Delete"* and *"Upload"*  commands, but the same approach can be applied for any of the remaining commands.  

## SOLUTION   

First we need to get reference to all of the objects that contain the *"Delete"* and *"Upload"* commands, and then remove the commands. The embedded into **RadFileExplorer** controls that need to be affected are :  **RadToolBar**, **RadTreeView**'s context menu, **RadGrid**'s context menu. This can be done as follows :
 
- RadToolBar - *RadFileExplorer1.ToolBar*
- RadtreeView's context menu - *RadFileExplorer1.TreeView.ContextMenu[0].* The *RadToolBarItemCollection* contains only one context menu and we get reference to that one.
- RadGrid's context menu - *RadFileExplorer1.GridContextMenu*

 
Then we can use the following approach in order to remove the commands :  
   
 ````C#
 
        RadToolBar toolBar = fileExplorer.ToolBar;  
        // Remove commands from the ToolBar control;  
        i = 0;  
        while (i < toolBar.Items.Count)  
        {  
            if (toolBar.Items[i].Value == "Delete")  
            {  
                toolBar.Items.RemoveAt(i);  
                continue;// Next item  
            }  
 
            else if (toolBar.Items[i].Value == "Upload")  
            {  
                toolBar.Items.RemoveAt(i);  
                continue; // Next item  
            }  
 
            i++;// Next item  
        } 
````
````VB

        Dim toolBar As RadToolBar = fileExplorer.ToolBar  
        ' Remove commands from the ToolBar control;  
        i = 0  
        While i < toolBar.Items.Count  
            If toolBar.Items(i).Value = "Delete" Then 
                toolBar.Items.RemoveAt(i)  
                ' Next item  
                Continue While 
 
            ElseIf toolBar.Items(i).Value = "Upload" Then 
                toolBar.Items.RemoveAt(i)  
                ' Next item  
                Continue While 
            End If 
 
            ' Next item  
            i += 1  
        End While 
````
 
 
 
The same approach can be applied to the RadTreeView's context menu and RadGrid's context menu.   
 Please do not forget to use the *continue* statement in case that an item is deleted. The statement is used in order to avoid an error like : "*Index was out of range...".*

 Here is the complete solution

 ````C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        RemoveUploadAndDelete(this.RadFileExplorer1);
    }

    private void RemoveUploadAndDelete(RadFileExplorer fileExplorer)
    {
        int i;// Global variable for that function 


        RadToolBar toolBar = fileExplorer.ToolBar;
        // Remove commands from the ToolBar control;
        i = 0;
        while (i < toolBar.Items.Count)
        {
            if (toolBar.Items[i].Value == "Delete")
            {
                toolBar.Items.RemoveAt(i);
                continue;// Next item
            }

            else if (toolBar.Items[i].Value == "Upload")
            {
                toolBar.Items.RemoveAt(i);
                continue; // Next item
            }

            i++;// Next item
        }

        RadContextMenu treeViewContextMenu = fileExplorer.TreeView.ContextMenus[0];
        // Remove commands from the TreeView's ContextMenus control;
        i = 0;
        while (i < treeViewContextMenu.Items.Count)
        {
            if (treeViewContextMenu.Items[i].Value == "Delete")
            {
                treeViewContextMenu.Items.RemoveAt(i);
                continue;// Next item
            }

            else if (treeViewContextMenu.Items[i].Value == "Upload")
            {
                treeViewContextMenu.Items.RemoveAt(i);
                continue;// Next item
            }

            i++;// Next item
        }




        RadContextMenu gridContextMenu = fileExplorer.GridContextMenu;
        // Remove commands from the GridContextMenu control;

        i = 0;
        while (i < gridContextMenu.Items.Count)
        {
            if (gridContextMenu.Items[i].Value == "Delete")
            {
                gridContextMenu.Items.RemoveAt(i);
                continue;// Next item
            }

            else if (gridContextMenu.Items[i].Value == "Upload")
            {
                gridContextMenu.Items.RemoveAt(i);
                continue;// Next item
            }

            i++;// Next item
        }
    }
}
 ````



   