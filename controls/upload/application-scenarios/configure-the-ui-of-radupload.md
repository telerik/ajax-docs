---
title: Configure the UI of RadUpload
page_title: Configure the UI of RadUpload | UI for ASP.NET AJAX Documentation
description: Configure the UI of RadUpload
slug: upload/application-scenarios/configure-the-ui-of-radupload
tags: configure,the,ui,of,radupload
published: True
position: 2
---

# Configure the UI of RadUpload



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


The visibility of the __RadUpload__ UI elements is controlled by the__ControlObjectsVisibility__ property. You can optionally show or hide any of the elements(other than the file input area):

* The __check box__ for selecting rows appears if __ControlObjectsVisibility__includes "CheckBoxes".

* The __Clear button__ appears on each row if __ControlObjectsVisibility__includes ""ClearButtons"

* The __Remove button__ appears on each row if __ControlObjectsVisiblity__includes "RemoveButtons".

* The __Add button__ for adding rows appears if __ControlObjectsVisibility__includes "AddButton"

* The __Delete Selected button__ appears if __ControlObjectsVisibility__includes "DeleteSelectedButton".

Most of the __RadUpload__ UI elements are for letting the user add and remove rows to change the number of filesthat are uploaded. Two properties let you control the number of rows:

* The __InitialFileInputsCount__ property determines the number of rows that appear when the__RadUpload__ control is first loaded.

* The __MaxFileInputsCount__ property specifies the maximum number of rows that can appear in the__RadUpload__ control. Once the RadUpload control contains this number of rows, the Add button is disabled until a rowis deleted. Here you can find out how to [implement minimum file inputs count]({%slug upload/application-scenarios/how-to-set-minimum-file-inputs-count%}).

By default, the user can enter select a file either by typing in the file input area or by clicking the __Select__button and picking a file using a file browser. You can prevent users from typing directly in the file input area, requiring them to select filesusing the browser, by setting the __ReadOnlyFileInputs__ property to __true__.

## Example

The following example shows a __RadUpload__ control with three input areas. The __MaxFileInputsCount__ property sets this as a maximum. The __ControlObjectsVisibility__ property is set to include all controls except the check boxes for selecting rows and the delete button that deletes buttons selected this way:

````ASPNET
	    <telerik:radupload runat="server" id="RadUpload1" initialfileinputscount="3" maxfileinputscount="3"
	        controlobjectsvisibility="RemoveButtons,ClearButtons,AddButton" />
````



When assigning the __ControlObjectsVisibility__ property at runtime, use the "or" operator to combine values:



>tabbedCode

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


>end

# See Also

 * [RadUpload Structure]({%slug upload/radupload-structure%})
