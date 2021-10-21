---
title: Custom field in the GridContextMenu. Pass the selected item's path to the server when the field is clicked.
description: Custom field in the GridContextMenu of RadGrid. Pass the selected item's path to the server when the field is clicked.. Check it now!
type: how-to
page_title: Custom field in the GridContextMenu. Pass the selected item's path to the server when the field is clicked.
slug: fileexplorer-custom-field-in-the-gridcontextmenu-pass-the-selected-item-s-path-to-the-server-when-the-field-is-clicked
res_type: kb
---

   
## HOW-TO  
Custom field in the GridContextMenu. Pass the selected item's path to the server when the field is clicked.

## DESCRIPTIONs
   
 Add custom field in the *GridContextMenu* and implement the server functionality when that field is clicked. The problem is passing the path of the selected item to the server. The **RadFileExplorer** control does not have server property that holds the currently selected file's path. The *CurrentFolder*property is similar, but it holds the path to the currently selected directory.  
 We need to use some client-side and server-side scripts in order to achieve the desired result.   
   
## SOLUTION

### The first approach  
 
1. Create a RadMenuItem and add it to the *GridContextMenu's*item collection :  

   ````C#
   RadMenuItem item = new RadMenuItem("UnZip");  
   item.PostBack = false;  
   item.Value = "CustomValue";  
   RadFileExplorer1.GridContextMenu.Items.Add(item); 
   ````
   ````VB
   Dim item As New RadMenuItem("UnZip")  
   item.PostBack = False 
   item.Value = "CustomValue" 
   RadFileExplorer1.GridContextMenu.Items.Add(item)  
   ```` 
2. Attach a handler to the *GridContextMenu''s OnClientItemClicked* event as follows :  

````C# :  
RadFileExplorer1.GridContextMenu.OnClientItemClicked = "OnGridContextItemClicked"; 
````

````VB
RadFileExplorer1.GridContextMenu.OnClientItemClicked = "OnGridContextItemClicked" 
````

3. Add an **RadAjaxPanel** to the page. Attach a server handler to the *OnAjaxRequest*event. Please note that you can use different approach in this step (for example [\_\_doPostBack()](http://aspalliance.com/895) function instead of the ajax request).
4. Implement the *OnGridContextItemClicked*function as follows :  
 
 ````JavaScript
   <script type="text/javascript">  
    function OnGridContextItemClicked(oGridMenu, args)  
    {  
        var menuItemText = args.get_item().get_text();  
        if (menuItemText == "UnZip")  
        {// 'UnZip' command  
            var oExplorer = $find("<%= RadFileExplorer1.ClientID %>");  
            var oAjaxPanel = $find("<%= RadAjaxPanel1.ClientID %>");  
 
            var selectedItem = oExplorer.get_selectedItem();  
            if (selectedItem)  
            {  
                var itemPath = selectedItem.get_path(); // get the path of the current item  
                oAjaxPanel.ajaxRequest(itemPath); // Call the RadAjaxPanel1_AjaxRequest function on the server ;  
            }  
            else 
            {  
                alert("Please, selct an item");  
            }  
        }  
    }  
   </script> 
 ````

    Inside of this function we found the **RadFileExplorer'**s client-side object and use its API in order to get the selected item. Then we trigger an AJAX request to the server and pass the path to the selected file as a parameter of the *ajaxRequest()* function.
5. The AJAX request is handled on the server as follows :  

      ````C#
      protected void RadAjaxPanel1_AjaxRequest(object sender, AjaxRequestEventArgs e)  
      {  
         string path = e.Argument;  
         Label1.Text = path;  
      } 
      ````
      ````VB 
      Protected Sub RadAjaxPanel1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)  
         Dim path As String = e.Argument  
         Label1.Text = path  
      End Sub 
      ````

 
### The second approach  
   
 In this case, we use an *asp:HiddenField* and store the selected item's path in its value property :

1. You need to implement the steps from 1 to 3 of the first described approach
2. Then implement the *OnGridContextItemClicked*function as follow :  
   ````ASP.NET
      function OnGridContextItemClicked(oGridMenu, args)
      {
         var menuItemText = args.get_item().get_text();
         if (menuItemText == "UnZip")
         {// 'UnZip' command
            var oExplorer = $find("<%= RadFileExplorer1.ClientID %>");
            var selectedItem = oExplorer.get_selectedItem();
            if (selectedItem)
            {
                  var itemPath = selectedItem.get_path(); // get the path of the current item
                  var oHiddenField = $get("<%= HiddenField1.ClientID %>");
                  oHiddenField.value = itemPath; // Store the path into the hidden field
            }
            else
            {
                  alert("Please, select an item");
            }
            var oAjaxPanel = $find("<%= RadAjaxPanel1.ClientID %>");
            oAjaxPanel.ajaxRequest(); // Call the RadAjaxPanel1_AjaxRequest function on the server ;
         }
      }
   ````
3. On the server you can get the value of the hidden field as follow :  

   ````C#
      protected void RadAjaxPanel1_AjaxRequest(object sender, AjaxRequestEventArgs e)  
      {  
         // The second approach :  
         string path = HiddenField1.Value;  
         Label1.Text = path;  
      } 
   ````
   ````VB  
      Protected Sub RadAjaxPanel1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)  
         ' The second approach :  
         Dim path As String = HiddenField1.Value  
         Label1.Text = path  
      End Sub
   ````


  