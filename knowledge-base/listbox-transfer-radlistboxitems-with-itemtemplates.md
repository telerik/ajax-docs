---
title: Transfer RadListBoxItems with ItemTemplates
description: Transfer RadListBoxItems with ItemTemplates. Check it now!
type: how-to
page_title: Transfer RadListBoxItems with ItemTemplates
slug: listbox-transfer-radlistboxitems-with-itemtemplates
res_type: kb
---




## HOW-TO  
 Transfer `RadListBoxItems` with `ItemTemplates`, evaluated from the datasource.  
   
 ## SOLUTION  
 When the values from the attributes(assigned from the DataItem) are used to be evaluated in the ItemTemplate in the following manner,  
 
 
````ASP.NET
<ItemTemplate>
<asp:Label ID="Label1" runat="server" Text='<%# DataBinder.Eval(Container, "Attributes[\"ContactName\"]")%>'></asp:Label>
<asp:Label ID="Label2" runat="server" Text='<%# DataBinder.Eval(Container, "Attributes[\"City\"]")%>'></asp:Label>
</ItemTemplate>
````
 
    

the `DataBind()` method should be explicitly called for each `RadListBoxItem`, when a transfer operation is performed. This is needed, because the DataItem is nullified, once the datasource is bound to the `SourceListBox`. The appropriate event-handler for implementing the above is the `OnTransferred` event handler:  
   
 
````C#
protected void SourceListBox_Transferred(object sender, RadListBoxTransferredEventArgs e)
{
      foreach (RadListBoxItem item in e.Items)
      {
         item.DataBind();
      }
   }
````
````VB
Protected Sub SourceListBox_Transferred(ByVal sender As Object, ByVal e As RadListBoxTransferredEventArgs)
    For Each item As RadListBoxItem In e.Items
        item.DataBind()
    Next
End Sub
````
 
    
 A sample project that demonstrates the approach can be found attached [here](files/listbox-transfer-templates.zip)

