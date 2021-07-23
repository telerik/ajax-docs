---
title: Using radprompt and radconfirm with Telerik navigational controls
description: Using radprompt and radconfirm with Telerik navigational controls. Check it now!
type: how-to
page_title: Using radprompt and radconfirm with Telerik navigational controls
slug: window-using-radprompt-and-radconfirm-with-telerik-navigational-controls
res_type: kb
---

## How to
   

This article shows how to suspend clicking of an item and either cancel the event or perform postback  
   
## Description

When the user clicks on the "Run radpropt" item, a dialog is shown to offer a choice of cancelling the operation (no postback) or  entering some text and passing it to the server by pressing the "OK" button.   
   

When the user clicks on the "Run radconfirm" item, a dialog is shown asking the user if he really wants to postback or not.   
   

The key client-side methods used to achieve this functionality are:
 - eventArgs.**set\_cancel**(true) - cancels the client-side clicking event

 - item.**click**() - causes server-side item click to occur [ for RadTreeNode, use **select()** instead of click() ].
 
 - item.**set\_value**() - sets the value on the client. You can also set any other property or custom attribute. For example set\_text().

 - controlClientObject.**trackChanges**() and **commitChanges**() - needed to persist the changes caused by item.set\_value() on the server.
   
## Solution
   
This example uses  RadToolBar, but in the attached demo project you can find examples with all the Telerik navigational controls.   

````ASPX
<telerik:RadToolBar ID="RadToolBar1" OnClientButtonClicking="onClientButtonClicking" runat="server" OnButtonClick="RadToolBar1_ButtonClick">  
    <CollapseAnimation Duration="200" Type="OutQuint" /> 
    <Items> 
        <telerik:RadToolBarButton runat="server" Text="Run radprompt">  
        </telerik:RadToolBarButton> 
        <telerik:RadToolBarButton runat="server" Text="Run radconfirm">  
        </telerik:RadToolBarButton> 
    </Items> 
</telerik:RadToolBar> 
<asp:Label ID="Label1" runat="server" Text="Label"></asp:Label> 
 <telerik:RadWindowManager ID="RadWindowManager1" runat="server">  
</telerik:RadWindowManager> 
````

````JavaScript
var lastClickedItem = null;     
var clickCalledAfterRadprompt = false;  
var clickCalledAfterRadconfirm = false;  
function onClientButtonClicking(sender, args)  
{  
   if(args.get_item().get_text() == "Run radprompt")  
   {  
         if (!clickCalledAfterRadprompt)  
         {  
            args.set_cancel(true);  
            lastClickedItem = args.get_item();              
            radprompt("Please, enter the value you want to pass to the server", promptCallbackFunction);  
         }  
   }  
   else if (args.get_item().get_text() == "Run radconfirm")  
   {  
         if (!clickCalledAfterRadconfirm)  
         {  
            args.set_cancel(true);  
            lastClickedItem = args.get_item();              
            radconfirm("Are you sure you want to postback?", confirmCallbackFunction);  
         }  
   }  
      
}  
function promptCallbackFunction(args)  
{     
   var toolbar = $find("RadToolBar1");  
   if (args)  
   {  
         toolbar.trackChanges();  
         lastClickedItem.set_value(args);  
         toolbar.commitChanges();  
         clickCalledAfterRadprompt = true;  
         lastClickedItem.click();  
   }  
   else 
   clickCalledAfterRadprompt = false;            
   lastClickedItem = null;  
}     
function confirmCallbackFunction(args)  
{                
   if (args)  
   {    
         clickCalledAfterRadconfirm = true;  
         lastClickedItem.click();  
   }  
   else 
   clickCalledAfterRadconfirm = false;           
   lastClickedItem = null;  
}  
````

````C#

protected void RadToolBar1_ButtonClick(object sender, Telerik.Web.UI.RadToolBarEventArgs e)  
{  
    if (e.Item.Text == "Run radprompt")  
    {  
        Label1.Text = e.Item.Value;  
    }  
    else 
    {  
        Label1.Text = DateTime.Now.ToString();  
    }  
} 
````

 