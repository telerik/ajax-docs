---
title: Using dynamic/unique names for JavaScript functions
description: Using dynamic/unique names for JavaScript functions and Telerik Web UI. Check it now!
type: how-to
page_title: Using dynamic/unique names for JavaScript functions
slug: licensing-using-dynamic-unique-names-for-javascript-functions
res_type: kb
---


## PROBLEM  
 There are cases where you will need to use dynamic/unique names for JavaScript functions.  
 Consider the following scenario:   
 A user control contains RadControl (RadTreeView, RadComboBox, RadMenu, etc.) and some other "standard" control - ListBox, TextBox, Label, etc.   
 Let's put RadTreeView and ListBox in the user control for example.  
 Assume you want to update the ListBox after every client check. Usually you use the code like this:  

````ASP.NET
<telerik:RadTreeView ID="RadTreeView1"          
runat="server"           
CheckBoxes="True"        
OnClientNodeChecked="afterClientCheck"> 
</telerik:RadTreeView> 
<script type="text/javascript"> 
function afterClientCheck(sender, eventArgs)         
{                            
    var listBox1 = document.getElementById("<%=ListBox1.ClientID%>"); 
    var node =  eventArgs.get_node(); 
                     
    if (node.get_checked()==true)                
    {                            
        var optn = document.createElement("OPTION");                         
        optn.text = node.get_text();                         
        optn.value = node.get_value();                       
        listBox1.options.add(optn);                  
     }       
}   
</script> 
````

   
 Now if you put that user control in a page and open it - it will work as expected - checking a CheckBox of node will add node's text to the ListBox.   
 Now add a second instance of the user control on the same page. You will notice that checking a node of the first TreeView updates the second ListBox, not the first one.   
 The problem occurs because the JavaScript function **afterClientCheck** existed two times on the page (because there two instances of the user control). The first **afterClientCheck** updates the first ListBox and the second one updates the second ListBox. But since the name of the function is the same - the second one gets executed every time.  
   
   
## SOLUTION  
 Use dynamic/unique names for the Javascript function.   
 Here are the steps you need to do:  
 
- Rename the JavaScript function as follows:
   ````ASP.NET
      function afterClientCheck_<%= ClientID %>(sender, eventArgs) {}
   ````
- Set the the name of the **AfterClientCheck** event handler in the code behind, not in the aspx file like:
   ````C#
   protected void Page_Load(object sender, EventArgs e) 
   { 
      RadTreeView1.OnClientNodeChecked = "afterClientCheck_" + this.ClientID; 
   } 
   ````
  
  Now two different javascript functions are rendered: **afterClientCheck_WebUserControl1(node)** and **afterClientCheck_WebUserControl2(node)** and it is working as expected.  
   
 

