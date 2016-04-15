---
title: Binding RadLightBox to BinaryImage
page_title: Binding RadLightBox to BinaryImage | RadLightBox for ASP.NET AJAX Documentation
description: Binding RadLightBox to BinaryImage
slug: lightbox/how-to/bind-lightbox-to-binaryimage
tags: lightbox,binding,BinaryImage
published: True
position: 1
---

# Binding RadLightBox to BinaryImage



##

The example below demonstrates how the **RadLightBox** control can be bound to a **BinaryImage**:


````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
      <Scripts>
          <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
          <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
          <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
      </Scripts>
  </telerik:RadScriptManager>
  <telerik:RadCodeBlock runat="server">
      <script type="text/javascript">
          function OpenLigthBox() {
              var lightBox = $find('<%= RadLightBox1.ClientID %>');
          lightBox.show();
      }
      </script>
  </telerik:RadCodeBlock>
  <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" EnableAJAX="false">
      <AjaxSettings>
          <telerik:AjaxSetting AjaxControlID="RadLightBox1">
              <UpdatedControls>
                  <telerik:AjaxUpdatedControl ControlID="RadLightBox1" />
              </UpdatedControls>
          </telerik:AjaxSetting>
      </AjaxSettings>
  </telerik:RadAjaxManager>
  <asp:Button Text="Open LightBox" OnClientClick="OpenLigthBox(); return false;" runat="server" />
  <telerik:RadLightBox RenderMode="Lightweight" ID="RadLightBox1" runat="server" PreserveCurrentItemTemplates="true">
      <ClientSettings AllowKeyboardNavigation="true"></ClientSettings>
  </telerik:RadLightBox>


````
````C#
protected void Page_Init(object sender, EventArgs e)
   {
       if (true)
       {
           DataTable table = GetDataTable();

           for (int i = 0; i < 1; i++)
           {
               RadLightBoxItem item = new RadLightBoxItem();
               byte[] binary = table.Rows[i]["Photo"] as byte[];
               item.ItemTemplate = new LightBoxTemplate(binary);
               RadLightBox1.Items.Add(item);
           }
       }
   }

   private class LightBoxTemplate : ITemplate
   {
       protected RadBinaryImage image;
       private byte[] binary;

       public LightBoxTemplate(byte[] binary)
       {
           this.binary = binary;
       }

       public void InstantiateIn(Control container)
       {
           image = new RadBinaryImage();
           image.DataValue = binary;
           container.Controls.Add(image);
       }
   }

   public DataTable GetDataTable()
   {
       string query = "SELECT TOP 6 * FROM [CustomerPhotos]";

       String ConnString = ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString;
       SqlConnection conn = new SqlConnection(ConnString);
       SqlDataAdapter adapter = new SqlDataAdapter();
       adapter.SelectCommand = new SqlCommand(query, conn);

       DataTable myDataTable = new DataTable();

       conn.Open();
       try
       {
           adapter.Fill(myDataTable);
       }
       finally
       {
           conn.Close();
       }

       return myDataTable;
   }

   public byte[] GetImage(object container)
   {

       return (container as byte[]);
   }


````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	If True Then
		Dim table As DataTable = GetDataTable()

		For i As Integer = 0 To 0
			Dim item As New RadLightBoxItem()
			Dim binary As Byte() = TryCast(table.Rows(i)("Photo"), Byte())
			item.ItemTemplate = New LightBoxTemplate(binary)
			RadLightBox1.Items.Add(item)
		Next
	End If
End Sub

Private Class LightBoxTemplate
	Implements ITemplate
	Protected image As RadBinaryImage
	Private binary As Byte()

	Public Sub New(binary As Byte())
		Me.binary = binary
	End Sub

	Public Sub InstantiateIn(container As Control)
		image = New RadBinaryImage()
		image.DataValue = binary
		container.Controls.Add(image)
	End Sub
End Class

Public Function GetDataTable() As DataTable
	Dim query As String = "SELECT TOP 6 * FROM [CustomerPhotos]"

	Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("TelerikConnectionString").ConnectionString
	Dim conn As New SqlConnection(ConnString)
	Dim adapter As New SqlDataAdapter()
	adapter.SelectCommand = New SqlCommand(query, conn)

	Dim myDataTable As New DataTable()

	conn.Open()
	Try
		adapter.Fill(myDataTable)
	Finally
		conn.Close()
	End Try

	Return myDataTable
End Function

Public Function GetImage(container As Object) As Byte()

	Return TryCast(container, Byte())
End Function


````


