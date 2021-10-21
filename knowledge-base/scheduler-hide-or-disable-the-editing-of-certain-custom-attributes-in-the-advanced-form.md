---
title: Hide or disable the editing of certain custom attributes in the advanced form
description: Hide or disable the editing of certain custom attributes in the advanced form of RadScheduler. Check it now!
type: how-to
page_title: Hide or disable the editing of certain custom attributes in the advanced form
slug: scheduler-hide-or-disable-the-editing-of-certain-custom-attributes-in-the-advanced-form
res_type: kb
---

## HOW-TO  
   
Hide or disable the editing of certain custom attributes in the advanced form  
   
## SOLUTION  
   
 We can hide the attribute text fields (and labels) by handling the FormCreated event. For example, if you want to hide an attribute named "Annotations" the code will look like this:  
 
````C#
protected void RadScheduler1_FormCreated(object sender, Telerik.Web.UI.SchedulerFormCreatedEventArgs e)       
{       
    if (e.Container.Mode == SchedulerFormMode.AdvancedEdit || e.Container.Mode == SchedulerFormMode.AdvancedInsert)       
    {       
        TextBox attributeTextBox = (TextBox) e.Container.FindControl("Attr" + /* Attribute name */ "Annotations");       
        WebControl attributeLabel = (WebControl) e.Container.FindControl("LblAttr" + "Annotations");       
       
        attributeTextBox.Visible = false;       
        attributeLabel.Visible = false;       
    }       
}       
````
 

  