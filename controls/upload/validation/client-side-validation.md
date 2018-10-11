---
title: Client-side Validation
page_title: Client-side Validation | RadUpload for ASP.NET AJAX Documentation
description: Client-side Validation
slug: upload/validation/client-side-validation
tags: client-side,validation
published: True
position: 0
---

# Client-side Validation



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


You can use **RadUpload** with an ASP.NET custom validator. **CustomValidator** supports both client-side and server-side validation.

* Validating **client-side** has the advantage that the **CustomValidator** prevents the page from submitting when there are selected files that the client-side validation function considers invalid.The validation function can use the **validateExtensions()** client-side method to validate file extensions on the client.

>tip Selected files must be transferred to the server before they can be validated for **size** or **mime-type** .
>


* Validating **server-side** has the advantage that you can access file information such as **size** or **mime-type**, or even examine the file contents. The custom validator's **ServerValidate** event occurs *after* the **RadUpload** [ValidatingFile]({%slug upload/server-side-programming/validatingfile%}) event and any [integrated validation]({%slug upload/validation/integrated-validation%}).

>caution When using **RadUpload** with a **CustomValidator** , the validator's **ControlToValidate** property must not be set!
>


## Example

The following example demonstrates using **RadUpload** with a custom validator to validate the extensions of selected files both client-side and server-side.

````ASPNET
<telerik:radupload id="RadUpload1" runat="server" allowedfileextensions=".zip,.jpg,.jpeg" />

<asp:CustomValidator runat="server" ID="CustomValidator1" Display="Dynamic" ClientValidationFunction="validateRadUpload1"
    OnServerValidate="CustomValidator1_ServerValidate">        
    Invalid extension.
</asp:CustomValidator>

<asp:Button runat="server" ID="Button1" Text="Submit" />

<script type="text/javascript">
    function validateRadUpload1(source, arguments) {
        arguments.IsValid = $find("<%= RadUpload1.ClientID %>").validateExtensions();
    }
</script>
	
````



````C#
private void CustomValidator1_ServerValidate( object source, ServerValidateEventArgs e) {  
    е .IsValid = (RadUpload1.InvalidFiles.Count == 0);
}
````
````VB.NET
Private Sub CustomValidator1_ServerValidate(ByVal source As Object, ByVal e As ServerValidateEventArgs) Handles Customvalidator1.ServerValidate
    е.IsValid = (RadUpload1.InvalidFiles.Count = 0)
End Sub
````


# See Also

 * [Required Field Validation]({%slug upload/validation/required-field-validation%})
