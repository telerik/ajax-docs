---
title: Configure the UI of RadUpload
page_title: Configure the UI of RadUpload - RadUpload
description: Check our Web Forms article about Configure the UI of RadUpload.
slug: upload/how-to/configure-the-ui-of-radupload
tags: configure,the,ui,of,radupload
published: True
position: 2
---

# Configure the UI of RadUpload



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


The visibility of the **RadUpload** UI elements is controlled by the **ControlObjectsVisibility** property. You can optionally show or hide any of the elements(other than the file input area):

* The **check box** for selecting rows appears if **ControlObjectsVisibility** includes "CheckBoxes".

* The **Clear button** appears on each row if **ControlObjectsVisibility** includes ""ClearButtons"

* The **Remove button** appears on each row if **ControlObjectsVisiblity** includes "RemoveButtons".

* The **Add button** for adding rows appears if **ControlObjectsVisibility** includes "AddButton"

* The **Delete Selected button** appears if **ControlObjectsVisibility** includes "DeleteSelectedButton".

Most of the **RadUpload** UI elements are for letting the user add and remove rows to change the number of files that are uploaded. Two properties let you control the number of rows:

* The **InitialFileInputsCount** property determines the number of rows that appear when the **RadUpload** control is first loaded.

* The **MaxFileInputsCount** property specifies the maximum number of rows that can appear in the **RadUpload** control. Once the RadUpload control contains this number of rows, the Add button is disabled until a row is deleted. Here you can find out how to [implement minimum file inputs count]({%slug upload/how-to/how-to-set-minimum-file-inputs-count%}).

By default, the user can enter select a file either by typing in the file input area or by clicking the **Select** button and picking a file using a file browser. You can prevent users from typing directly in the file input area, requiring them to select files using the browser, by setting the **ReadOnlyFileInputs** property to **true**.

## Example

The following example shows a **RadUpload** control with three input areas. The **MaxFileInputsCount** property sets this as a maximum. The **ControlObjectsVisibility** property is set to include all controls except the check boxes for selecting rows and the delete button that deletes buttons selected this way:

````ASPNET
<telerik:radupload runat="server" id="RadUpload1" initialfileinputscount="3" maxfileinputscount="3"
    controlobjectsvisibility="RemoveButtons,ClearButtons,AddButton" />
````



When assigning the **ControlObjectsVisibility** property at runtime, use the "or" operator to combine values:





````C#
	     
RadUpload1.ControlObjectsVisibility =  ControlObjectsVisibility.RemoveButtons |  
                                        ControlObjectsVisibility.ClearButtons |  
                                        ControlObjectsVisibility.AddButton;
				
````
````VB.NET
	     
RadUpload1.ControlObjectsVisibility = _
       ControlObjectsVisibility.RemoveButtons Or _
       ControlObjectsVisibility.ClearButtons Or _
       ControlObjectsVisibility.AddButton 
				
````


# See Also

 * [RadUpload Structure]({%slug upload/radupload-structure%})
