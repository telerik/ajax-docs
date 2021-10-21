---
title: Inserting new tables with a header row as default
description: Inserting new tables with a header row as default in RadEditor. Check it now!
type: how-to
page_title: Inserting new tables with a header row as default
slug: editor-inserting-new-tables-with-a-header-row-as-default
res_type: kb
---


   
## HOW-TO
Insert new tables with a header row as default via the Insert Table dropdown or TableWizard dialog of RadEditor
   
## SOLUTION
To implement this accessibility feature attach to the [OnClientPasteHtml event](http://demos.telerik.com/aspnet-ajax/editor/examples/onclientpastehtml/defaultcs.aspx), which will allow to catch and modify the inserted content via the **InsertTable** and **TableWizard** tools of RadEditor. Here is an example:  
   
````ASP.NET

<telerik:radeditor runat="server" OnClientPasteHtml="OnClientPasteHtml" ID="RadEditor1">  
    <ImageManager ViewPaths="~/Images" UploadPaths="~/Images" />  
</telerik:radeditor>  
 
<script type="text/javascript">  
function OnClientPasteHtml(sender, args) {   
  var commandName = args.get_commandName();   
  var value = args.get_value();   
 
  if (commandName == "InsertTable" || commandName == "TableWizard")  
  {   
    var tempDiv = document.createElement("DIV");   
    value = value.trim();   
    Telerik.Web.UI.Editor.Utils.setElementInnerHtml(tempDiv, value);   
    var table = tempDiv.firstChild;   
    // Set css class on alternate rows   
    for (var i = 0; i < table.rows.length; i++) {   
      if ((i % 2) == 0) {   
        table.rows[i].setAttribute("class","row0");   
      }   
      else {   
        table.rows[i].setAttribute("class","row1");   
      }   
    }   
    // Insert THEAD into table   
    var colCount = table.rows[0].cells.length;   
    var newTHead = table.createTHead();   
    var newRow = newTHead.insertRow(-1);   
    for (var j = 0; j < colCount; j++) {   
      var newTh = document.createElement("TH");   
      newRow.appendChild(newTh);   
    }   
    args.set_value(tempDiv.innerHTML);   
  }   
}   
</script> 
```` 
 
  