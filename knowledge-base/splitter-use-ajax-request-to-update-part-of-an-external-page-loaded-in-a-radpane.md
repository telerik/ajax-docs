---
title: Use Ajax request to update part of an external page, loaded in a RadPane
description: Use Ajax request to update part of an external page, loaded in a RadPane. Check it now!
type: how-to
page_title: Use Ajax request to update part of an external page, loaded in a RadPane
slug: window-binding-to-a-grid---opening-windows-by-clicking-grid-items
res_type: kb
---


## HOW-TO   
   
 Use Ajax request to update part of an external page, loaded in a **RadPane  
 
 ## SOLUTION

 Let's assume that we have a **RadSplitter** and an external page is loaded in one of its **RadPanes**. When you want to update a part of this nested page you can perform a postback but a better solution is to update by using AJAX.   
   
 In order to achieve the described functionality you should go through the following steps:  
   
 
1. Add a **RadAjaxManager **control to the content page (the external page which is loaded in the **RadPane**).
2. Write a javascript function which is placed on the content page and which uses the **RadAjaxManager**'s client-side API to perform an ajax request as shown below:  
   ````JavaScript
      function UpdateLabel()  
      {     
         $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest("UpdateLabel");  
      } 
   ````
3. Handle the ajax request on the server:  
   ````C#
      protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)  
      {  
         if (e.Argument == "UpdateLabel")  
         {  
               this.Label1.Text = "The content page was updated!";  
         }  
      } 
   ````
4. In your main page (the one which contains the RadSplitter control) implement a javascript function which references the RadPane content iframe's window and executes the UpdateLabel() function:  
   ````JavaScript
   function UpdateContentPage()  
         {  
            var pane = $find("<%=RadPane2.ClientID %>");  
               
            //When you set the ContentUrl property of the pane of your choice,   
            //you actually insert an iframe element into the pane.   
            //So in order to get a reference to the content page you have to get a reference to the iframe window  
               
            pane.getExtContentElement().contentWindow.UpdateLabel();  
         } 
   ````
   
 Please, note, that this approach concerns only scenarios in which the main page and the content page are from the same domain due to security reasons.  
   
 You can find a working project [here](files/splitter-ajax-update-part-of-external-page.zip) that demonstrates the above explained approach in the attached archive file.   

