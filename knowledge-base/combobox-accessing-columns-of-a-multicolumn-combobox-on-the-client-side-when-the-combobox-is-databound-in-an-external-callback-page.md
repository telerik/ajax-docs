---
title: Accessing columns (of a multicolumn combobox) on the client-side when the combobox is databound in an external callback page
description: Accessing columns (of a multicolumn combobox) on the client-side when the RadCombobox is databound in an external callback page. Check it now!
type: how-to
page_title: Accessing columns (of a multicolumn combobox) on the client-side when the combobox is databound in an external callback page
slug: combobox-accessing-columns-of-a-multicolumn-combobox-on-the-client-side-when-the-combobox-is-databound-in-an-external-callback-page
res_type: kb
---

 
## HOW-TO
Access columns (of a multicolumn combobox) on the client-side when the combobox is databound in an external callback page 

## SOLUTION
For RadComboBox AJAX (Prometheus) an external streamer page is no longer needed. 
 
````ASP.NET
<telerik:RadComboBox runat="server"  
    ID="RadComboBox1"  
    Width="455px"  
    HighlightTemplatedItems="true" 
    EnableLoadOnDemand="true" 
    OnClientSelectedIndexChanged="onClientSelectedIndexChanged"  
    OnItemDataBound="RadComboBox1_ItemDataBound"  
    OnItemsRequested="RadComboBox1_ItemsRequested"> 
      <ItemTemplate> 
                     <table style="width:415px"> 
                        <tr> 
                           <td style="width:125px;"> 
                              <%# DataBinder.Eval(Container.DataItem, "ID") %> 
                           </td> 
                           <td style="width:125px;"> 
                              <%# DataBinder.Eval(Container.DataItem, "ProductName") %> 
                           </td> 
                           <td style="width:125px;"> 
                              <%# DataBinder.Eval(Container.DataItem, "Price") %> 
                           </td> 
                        </tr> 
                     </table>             
      </ItemTemplate> 
      <HeaderTemplate> 
                     <table style="width:415px"> 
                        <tr> 
                           <td style="width:125px;"> 
                              ID 
                           </td> 
                           <td style="width:125px;"> 
                              Product Name 
                           </td> 
                           <td style="width:125px;"> 
                              Price 
                           </td> 
                        </tr> 
                     </table>             
      </HeaderTemplate> 
</telerik:RadComboBox> 
<script type="text/javascript"> 
function onClientSelectedIndexChanged(sender, eventArgs) 
{ 
    var message = "ID: " + eventArgs.get_item().get_attributes().getAttribute("ProductID"); 
    message += "\nProduct Name: " + eventArgs.get_item().get_attributes().getAttribute("Name"); 
    message += "\nPrice: " + eventArgs.get_item().get_attributes().getAttribute("Price"); 
    alert(message); 
} 
</script> 
````

````C#
protected void RadComboBox1_ItemsRequested(object o, Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs e) 
{ 
    SqlConnection connection = 
                new SqlConnection(ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString); 
     
    SqlCommand selectCommand = 
        new SqlCommand(@"   SELECT ID, ProductName, Price FROM Products
                            WHERE LOWER(ProductName) LIKE '" + e.Text + "%'", connection); 
 
    SqlDataAdapter adapter = new SqlDataAdapter(selectCommand); 
    DataTable products = new DataTable(); 
    adapter.Fill(products); 
 
    RadComboBox1.DataTextField = "ProductName"; 
    RadComboBox1.DataValueField = "ID"; 
    RadComboBox1.DataSource = products; 
    RadComboBox1.DataBind(); 
} 
 
protected void RadComboBox1_ItemDataBound(object sender, RadComboBoxItemEventArgs e) 
{ 
    DataRowView row = e.Item.DataItem as DataRowView; 
    e.Item.Attributes["Name"] = row["ProductName"].ToString(); 
    e.Item.Attributes["ProductID"] = row["ID"].ToString(); 
    e.Item.Attributes["Price"] = row["Price"].ToString(); 
} 
````


   