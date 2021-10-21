---
title: Showing Radmultipage pages from RadTreeView
description: Showing Radmultipage pages from RadTreeView. Check it now!
type: how-to
page_title: Showing Radmultipage pages from RadTreeView
slug: treeview-showing-radmultipage-pages-from-radtreeview
res_type: kb
---

## How to

Show/switch pages of Rad**Multipage **from RadTreeView  
   
## Solution

First, you can keep integer values in the **Value** property of the treeview nodes for indexing the pages in the multipage. Then you can hook the **OnClientNodeClicking** event of the treeview control and get the client side object of the Rad**Multipage**. Finally, you can invoke the **set\_selectedIndex** client method of the multipage passing as a parameter the value of the clicked node.   
   
Below are the code details of a simple example:  

````ASPX
<script type="text/javascript">  
function HandleClick(sender, eventArgs)  
{  
   var node = eventArgs.get_node();  

   if(node.get_parent() != node.get_treeView())  
   {  
      var multipage = $find("<%=RadMultiPage1.ClientID%>");  
      multipage.set_selectedIndex(parseInt(node.get_value()));  
   }  
}  
</script> 

<telerik:RadTreeView ID="RadTreeView1" runat="server" OnClientNodeClicking="HandleClick">  
</telerik:RadTreeView> 
<telerik:RadMultiPage ID="RadMultiPage1" runat="server">  
   <telerik:RadPageView ID="RadPageView1" runat="server">  
      RadPageView1</telerik:RadPageView> 
   <telerik:RadPageView ID="RadPageView2" runat="server">  
      RadPageView2</telerik:RadPageView> 
   <telerik:RadPageView ID="RadPageView3" runat="server">  
      RadPageView3</telerik:RadPageView> 
</telerik:RadMultiPage> 
````

````C#
protected void Page_Load(object sender, EventArgs e)  
{  
    RadTreeView1.LoadContentFile("tree.xml");  
} 
````

````tree.xml
<Tree> 
  <Node Text="root">  
    <Node Text="Page 1" Value="0" /> 
    <Node Text="Page 2" Value="1" /> 
    <Node Text="Page 3" Value="2" /> 
  </Node> 
</Tree> 
````

 