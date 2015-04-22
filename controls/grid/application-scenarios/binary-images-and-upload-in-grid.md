---
title: Binary Images and Upload in Grid
page_title: Binary Images and Upload in Grid | RadGrid for ASP.NET AJAX Documentation
description: Binary Images and Upload in Grid
slug: grid/application-scenarios/binary-images-and-upload-in-grid
tags: binary,images,and,upload,in,grid
published: True
position: 7
---

# Binary Images and Upload in Grid



## 

[This example](http://demos.telerik.com/aspnet-ajax/controls/examples/integration/raduploadinajaxifiedgrid/defaultcs.aspx?product=grid) illustrates the usage of built-in GridBinaryImageColumn and how to display and edit images in it.Each cell in a **GridBinaryImageColumn** contains an image streamed from a binary image source field (specified through the **DataField** property of the column). When used this column willshow a RadBinaryImage control in view mode and RadUpload in edit mode to upload an image.

The image will be sized automatically to **ImageHeight** and **ImageWidth** pixel values if the **ResizeMode** property of the column is different than **None**. Possible values for the **ResizeMode** property of the column are:

* **Crop** (the image will be trimmed)

* **Fit** (the image will be sized to fit the given dimensions)

* **None** (default)

Additionally, you can set the **DataAlternateTextField** property to specify by which field in the grid source the column will be sorted/filtered. For the filtering you must also set explicitly the **DataType** property of the column to the type of the field specified through the DataAlternateTextField property (System.String in the common case). You can also apply format using the **DataAlternateTextFormatString** property.


>caption  

| ![](images/hs_note.gif) | You need to register the http handler of the RadBinaryImage control (which is part of built-in GridBinaryImageColumn) manually in the web.config file to ensure that it will be served as expected when the page is rendered. Namely: **web.config** <httpHandlers><remove path="*.asmx" verb="*" />...................................................... **<add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" validate="false" />** </httpHandlers> |
| ------ | ------ |

>caution If you would like to set the GridBinaryImageColumn's image filename which will appear inside SaveAs browser dialog when image is saved, set the *SavedImageName* property of the column
>


Since RadUpload cannot upload files using AJAX calls (this is a limitation of the XmlHttpRequest component, used in all AJAX frameworks for asynchronous calls to the application), in order to upload a file you should perform a full page postback.

![](images/grd_BinaryImageGridUploadAjaxEdit_thumb.PNG)

You can also perform validation over the file input as shown in the demo code:



````JavaScript
	
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	    //On insert and update buttons click temporarily disables ajax to perform upload actions      
	    function conditionalPostback(e, sender) {
	      var theRegexp = new RegExp("\.UpdateButton$|\.PerformInsertButton$", "ig");
	      if (sender.EventTarget.match(theRegexp)) {
	        var upload = $find(window['UploadId']);
	        //AJAX is disabled only if file is selected for upload                  
	        if (upload.getFileInputs()[0].value != "") {
	          sender.EnableAjax = false;
	        }
	      }
	    }
	    function validateRadUpload(source, e) {
	      e.IsValid = false;
	      var upload = $find(source.parentNode.getElementsByTagName('div')[0].id);
	      var inputs = upload.getFileInputs(); for (var i = 0; i < inputs.length; i++) {
	        //check for empty string or invalid extension     
	        if (inputs[i].value != "" && upload.isExtensionValid(inputs[i].value)) {
	          e.IsValid = true;
	          break;
	        } 
	      } 
	    }
	    </telerik:RadCodeBlock>
	
````
````ASPNET
	  <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" ClientEvents-OnRequestStart="conditionalPostback">
	    <telerik:RadProgressManager ID="RadProgressManager1" runat="server" />
	    <telerik:RadProgressArea ID="RadProgressArea1" runat="server" />
	    <telerik:RadGrid runat="server" ID="RadGrid1" AllowPaging="True" AllowSorting="True"
	      AutoGenerateColumns="False" Width="97%" DataSourceID="SqlDataSource1" AllowAutomaticInserts="true"
	      AllowAutomaticUpdates="true" AllowAutomaticDeletes="true" ShowStatusBar="True"
	      GridLines="None" OnItemDataBound="RadGrid1_ItemDataBound" OnItemCreated="RadGrid1_ItemCreated"
	      PageSize="3">
	      <PagerStyle Mode="NumericPages" AlwaysVisible="true" />
	      <MasterTableView Width="100%" CommandItemDisplay="Top" DataKeyNames="ID" DataSourceID="SqlDataSource1">
	        <Columns>
	          <telerik:GridEditCommandColumn ButtonType="ImageButton">
	            <HeaderStyle Width="3%" />
	          </telerik:GridEditCommandColumn>
	          <telerik:GridTemplateColumn HeaderText="Image Name" UniqueName="ImageName" SortExpression="Name">
	            <ItemTemplate>
	              <asp:Label runat="server" ID="lblName" Text='<%# Eval("Name") %>' />
	            </ItemTemplate>
	            <EditItemTemplate>
	              <telerik:RadTextBox runat="server" Width="200px" ID="txbName" Text='<%# Bind("Name") %>' />
	              <asp:RequiredFieldValidator ID="Requiredfieldvalidator1" runat="server" ControlToValidate="txbName"
	                ErrorMessage="Please, enter a name!" Display="Dynamic" SetFocusOnError="true" />
	            </EditItemTemplate>
	            <HeaderStyle Width="30%" />
	          </telerik:GridTemplateColumn>
	          <telerik:GridTemplateColumn HeaderText="Description" UniqueName="Description" DataField="Description">
	            <ItemTemplate>
	              <asp:Label ID="lblDescription" runat="server" Text='<%# TrimDescription(CType(Eval("Description"),String)) %>' />
	            </ItemTemplate>
	            <EditItemTemplate>
	              <telerik:RadTextBox ID="txbDescription" Width="300px" runat="server" TextMode="MultiLine"
	                Text='<%# Bind("Description") %>' Height="150px" />
	            </EditItemTemplate>
	            <ItemStyle VerticalAlign="Top" />
	          </telerik:GridTemplateColumn>
	          <telerik:GridBinaryImageColumn DataField="Data" HeaderText="Image" UniqueName="Upload"
	            ImageHeight="80px" ImageWidth="80px" ResizeMode="Fit" DataAlternateTextField="Description"
	            DataAlternateTextFormatString="Image of {0}">
	            <HeaderStyle Width="10%" />
	          </telerik:GridBinaryImageColumn>
	          <telerik:GridButtonColumn Text="Delete" CommandName="Delete" ButtonType="ImageButton">
	            <HeaderStyle Width="2%" />
	          </telerik:GridButtonColumn>
	        </Columns>
	        <EditFormSettings>
	          <EditColumn ButtonType="ImageButton" />
	        </EditFormSettings>
	      </MasterTableView>
	    </telerik:RadGrid>
	  </telerik:RadAjaxPanel>
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	        SelectCommand="SELECT * FROM [Images]" InsertCommand="INSERT INTO [Images] ([Name], [Description], [Data]) VALUES (@Name, @Description, @Data)"
	        UpdateCommand="UPDATE [Images] SET [Name] = @Name, [Description] = @Description, [Data] = @Data WHERE [ID] = @ID"
	        DeleteCommand="DELETE FROM [Images] WHERE [ID] = @ID">
	        <InsertParameters>
	            <asp:Parameter Name="Name" Type="String" />
	            <asp:Parameter Name="Description" Type="String" />
	            <asp:Parameter Name="Data" DbType="Binary" />
	        </InsertParameters>
	        <UpdateParameters>
	            <asp:Parameter Name="Name" Type="String" />
	            <asp:Parameter Name="Description" Type="String" />
	            <asp:Parameter Name="ID" Type="Int32" />
	            <asp:Parameter Name="Data" DbType="Binary" />
	        </UpdateParameters>
	        <DeleteParameters>
	            <asp:Parameter Name="ID" Type="Int32" />
	        </DeleteParameters>
	    </asp:SqlDataSource>
````
````C#
	
	
	    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridEditableItem && e.Item.IsInEditMode)
	        {
	            GridBinaryImageColumnEditor editor = ((GridEditableItem)e.Item).EditManager.GetColumnEditor("Upload") as GridBinaryImageColumnEditor;
	            RadAjaxPanel1.ResponseScripts.Add(string.Format("window['UploadId'] = '{0}';", editor.RadUploadControl.ClientID));
	        }
	    }
	    protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridEditableItem && e.Item.IsInEditMode)
	        {
	            GridBinaryImageColumnEditor editor = ((GridEditableItem)e.Item).EditManager.GetColumnEditor("Upload") as GridBinaryImageColumnEditor;
	            TableCell cell = (TableCell)editor.RadUploadControl.Parent;
	            CustomValidator validator = new CustomValidator();
	            validator.ErrorMessage = "Please select file to be uploaded";
	            validator.ClientValidationFunction = "validateRadUpload";
	            validator.Display = ValidatorDisplay.Dynamic;
	            cell.Controls.Add(validator);
	        }
	    }
	    protected string TrimDescription(string description)
	    {
	        if (description.Length > 200)
	        {
	            return string.Concat(description.Substring(0, 200), "...");
	        }
	        return description;
	    }
	
````
````VB.NET
	    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
	        If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
	            Dim editItem As GridEditableItem = DirectCast(e.Item, GridEditableItem)
	            Dim upload As RadUpload = DirectCast(editItem.EditManager.GetColumnEditor("Upload"), GridBinaryImageColumnEditor).RadUploadControl
	            RadAjaxPanel1.ResponseScripts.Add(String.Format("window['UploadId'] = '{0}';", upload.ClientID))
	        End If
	    End Sub
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
	        If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
	            Dim editItem As GridEditableItem = DirectCast(e.Item, GridEditableItem)
	            Dim upload As RadUpload = DirectCast(editItem.EditManager.GetColumnEditor("Upload"), GridBinaryImageColumnEditor).RadUploadControl
	            Dim validator As CustomValidator = New CustomValidator()
	            validator.ErrorMessage = "Please select file to be uploaded"
	            validator.ClientValidationFunction = "validateRadUpload"
	            validator.Display = ValidatorDisplay.Dynamic
	            DirectCast(upload.Parent, TableCell).Controls.Add(validator)
	        End If
	    End Sub
	    Protected Function TrimDescription(ByVal description As String) As String
	        If description.Length > 200 Then
	            Return String.Concat(description.Substring(0, 200), "...")
	        End If
	        Return description
	    End Function
````

