---
title: Using RadComboBox with AutoComplete as a custom editor in RadGrid
description: Using RadComboBox with AutoComplete as a custom editor in RadGrid. Check it now!
type: how-to
page_title: Using RadComboBox with AutoComplete as a custom editor in RadGrid
slug: combobox-using-radcombobox-with-autocomplete-as-a-custom-editor-in-radgrid
res_type: kb
---

 

   
 **HOW-TO**
 Use RadComboBox with enabled AutoComplete as a custom editor in RadGrid  
   
 **DESCRIPTION**  
 In some situations the developer may need to load combobox items "on demand" in a dropdown grid column editor. This is useful when presenting large number of items in that dropdown list.  
   

   
 **SOLUTION**  
 You can use one of the following approaches:  
 
- The built-in GridDropDownColumn which now supports RadComboBox. The combo is populated using the WebService.
- GridTemplateColumn with RadComboBox added to the EditItemTemplate section. The combo is populated in the ItemsRequested event handler.

 Both methods are used in the attached [combobox-in-grid-autocomplete.zip project](files/combobox-in-grid-autocomplete.zip).   
   


 
    