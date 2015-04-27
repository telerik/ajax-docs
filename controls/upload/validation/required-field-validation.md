---
title: Required Field Validation
page_title: Required Field Validation | RadUpload for ASP.NET AJAX Documentation
description: Required Field Validation
slug: upload/validation/required-field-validation
tags: required,field,validation
published: True
position: 3
---

# Required Field Validation



>caution  **RadUpload** has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

Sometimes you might want to implement required field validation against the RadUpload control. That is to ensure that at least one file is uploaded on the server.

To accomplish this, we will use a custom validator.

````ASPNET
	    <telerik:radupload id="RadUpload1" initialfileinputscount="3" allowedfileextensions=".txt"
	        targetfolder="~/uploads" runat="server"></telerik:radupload>
	    <asp:CustomValidator ID="CustomValidator1" runat="server" ClientValidationFunction="validateRadUpload"
	        ErrorMessage="Please select at least one Text file" OnServerValidate="CustomValidator1_ServerValidate"></asp:CustomValidator>
````



Here is the client validation function of the validator:

````JavaScript
	
	    function validateRadUpload(source, e) { 
	       e.IsValid = false;      
	         var upload = $find("<%= RadUpload1.ClientID %>");   
	          var inputs = upload.getFileInputs();   
	           for (var i = 0; i < inputs.length; i++)    {
	               //check for empty string or invalid extension     
	               if (inputs[i].value != "" && upload.isExtensionValid(inputs[i].value)) {
	                   e.IsValid = true;
	                   break;
	               }
	           }
	       }  
				
````



Here is the server validation function of the validator:





````C#
	
	    private void CustomValidator1_ServerValidate(object source, ServerValidateEventArgs e)
	    {
	        е.IsValid = (RadUpload1.InvalidFiles.Count == 0);
	    } 		
````
````VB.NET
	     
	    Private Sub CustomValidator1_ServerValidate( _
	         ByVal source As Object, _
	         ByVal e As ServerValidateEventArgs) _
	         Handles Customvalidator1.ServerValidate
	        е.IsValid = (RadUpload1.InvalidFiles.Count = 0)
	    End Sub
````


# See Also

 * [Integrated Validation]({%slug upload/validation/integrated-validation%})

 * [Custom Validation]({%slug upload/validation/custom-validation%})

 * [Client-side Validation]({%slug upload/validation/client-side-validation%})
