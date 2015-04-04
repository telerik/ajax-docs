---
title: OutputType
page_title: OutputType | UI for ASP.NET AJAX Documentation
description: OutputType
slug: barcode/outputtype
tags: outputtype
published: True
position: 3
---

# OutputType



## 

__OutputType__ specifies the output type of the __RadBarcode__, currently there are two versions, SVG_VML and EmbeddedPNG. In the first case, the Barcode is rendered as SVG (or VML for IE8 and older).

>note  __RadBarcode__ could be exported when is placed within __RadGrid__ or __RadTreeList__ . Note that Embedded PNG should be set as value of the __OutputType__ property.
>


````ASPNET
	    <telerik:RadBarCode runat="server" OutputType="EmbeddedPNG" LineWidth="1" Type="Code128" Text="1234567">
	    </telerik:RadBarCode>
````



````ASPNET
	    <span style="display:inline-block;height:150px;width:300px;" class="RadBarcode"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAoCAYAAAB+Qu3IAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE5SURBVGhD7ZpRDsMgDEO5/6U3lS7C9RJC/9+kaVNDWfHADg5jjPG53tcrPuO7xjSeXa/azo6lb29X/VZ1T9zvz6zXNebj62JdXJ83xpaNIekHoCuguj8JoGWFdmB1M9jjzOgfBWbA7sAC6ILX4WgRVRdWxHDqIGKIGJqoHaZRj3QVMZTcyHl3l3vD0XD0XEmbjRQcDUfD0WsVdL4IXseNFelds11nC26OI+4dNinUcWJAQR1Qx7OiQtZB1vG3kzuhEox/jH+Ks2xYzASCOhpA3Abo6oBvTCTSO9I70rusRoqphKm0jqh1IgVHW13wNNmnZphUPDD+lyZRMzwsiXUUlaV6uvoAGqDzZQdHw9FzDihFQB0CCMd2pZ5YzRKfQRwJ40gYR8KgDqhjKWvMhsyRqhRX21KcvYuzX4/I0tPtahaOAAAAAElFTkSuQmCC" class="rbcImg"></span> 
````


>caption Image:

![barcode outputtype 1](images/barcode_outputtype1.png)

Since the dimensions of the rendered image are unknown until it is generated, it is recommend to set__Width=””__ and __Height=””__. The image will be seen in its original width and height. The __LineWidth__ propertydeterminates the width of the thinnest line in the Barcode in pixels. When rendered as Image, the Barcodecannot be resized smoothly as in vector format like SVG. So if the user needs bigger barcode, it should berendered with higher __LineWidth__. In the example below a __LineWidth=”2”__ is used to make the lines thicker. For the __QRCode__ mode, there is similar property called __DotSize__, it is accessible from the __QRCodeSettings__ collection of settings.

````ASPNET
	    <telerik:RadBarcode runat="server" OutputType="EmbeddedPNG" Width="" Height="" LineWidth="2" Type="Code128" Text="123">
	    </telerik:RadBarcode>
````



````ASPNET
	     <span class="RadBarcode"> 
	    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAA9CAYAAAB2vSGUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHNSURBVHhe7d3bjoMwDIRh3v+l6YFSQkhic7j8VtqLrdpqiabj3+OETtM0zeXv/PtZH1v/rh/vva73+uzz7z6v/r/r94uuN7ruu+tQr+dT6xW9b3Tdg+sikM/iZIVJIBzkK5aecxIIgRDIHjuUGCVmc8wGsxEIgRDIAUKjbgeD/I2Dg3AQDsJBknkXBgkWSlC2ryjv9VBilBglRolJGoESo8TsgsCom1NiquQYg2CQ4fSaQAiEQIphpBJTMUfUtXEQDsJBOMiwrycQAiGQ7MYmDIJBmiFhdi+sHEQO0gzOCpg3izGLMYsxizGLWWpFArp0MboYXYwu5rplchAOwkE4CAdpOuHZs9QJZtPmanO1udrc647LQTgIB+EgHERQ1rqJTO8GOoZ1nSGcHWULUhAIgexGD9EHY5CbgFSQClJBKkgFqSC1GOffqKmGdSDVsM6w7npN5SAchINwEA5i3D+64zFIbedX9oN0DkKdiI4xCAbBIBgEg2AQDLJxRsQWrRS1NWPq7UE1rEuyixvIuIEMSAWpIBWkglSQClJB6mFvZPbLBSWpktThd8cRCIEQSMFZcpAgp3iQyrW52lxt7oMfKMceHHtw7MGxh4u50QtdRgUasz70OQAAAABJRU5ErkJggg=="  
	        class="rbcImg"> 
	</span>
````


>caption Image:

![barcode outputtype 2](images/barcode_outputtype2.png)

In the SVG_VML, the different __LineWidth__ will not result in any difference during the rendering.

````ASPNET
	    <telerik:RadBarcode runat="server" OutputType="SVG_VML" Type="Code128" Text="1234567">
	    </telerik:RadBarcode>
````



````ASPNET
	<span style="display: inline-block; height: 150px; width: 300px;" class="RadBarcode"> 
	    <svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
	        <rect style="fill: rgb(0,0,0)" height="90%" width="2.22%" y="0%" x="0%" /> 
	        <rect style="fill: rgb(0,0,0)" height="90%" width="1.11%" y="0%" x="3.33%" /> 
	        ..... 
	        ..... 
	        <rect style="fill: rgb(0,0,0)" height="90%" width="2.22%" y="0%" x="85.55%" /> 
	        <rect style="fill: rgb(0,0,0)" height="90%" width="3.33%" y="0%" x="91.11%" /> 
	        <rect style="fill: rgb(0,0,0)" height="90%" width="1.11%" y="0%" x="95.55%" /> 
	        <rect style="fill: rgb(0,0,0)" height="90%" width="2.22%" y="0%" x="97.77%" /> 
	        <text text-anchor="middle" y="100%" x="50%">123456748</text> 
	    </svg> 
	</span> 
````


>caption Image:

![barcode outputtype 3](images/barcode_outputtype3.png)

The output image can be generated using GetImage() method of the RadBarcode. It will return a System.Drawing. Bitmap object that the user can save later. The return image size depends on the LineWidth (DotSize) set for the Barcode.



````C#
	    public void Example()
	    {
	        
	        RadBarcode barcode = new RadBarcode();
	        barcode.Text = "some text";
	        barcode.Type = BarcodeType.Code128;
	        barcode.LineWidth = 2;
	        System.Drawing.Image image = barcode.GetImage();
	
	    }
````
````VB.NET
	    Protected Sub Example()
	        Dim barcode As RadBarcode = New RadBarcode()
	        barcode.Text = "some text"
	        barcode.Type = BarcodeType.Code128
	        barcode.LineWidth = 2
	        Dim image As System.Drawing.Image = barcode.GetImage()
	    End Sub
	#End Region
	End Class
````



## RadBinaryImage and RadBarcode

Radbarcode’s rendered image can be used as DataValue for the RadBinaryImage. Here is an example:



````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadBarcode barcode = new RadBarcode();
	        barcode.Text = "some text";
	        barcode.Type = BarcodeType.Code128;
	        barcode.LineWidth = 2;
	        RadBinaryImage image = new RadBinaryImage();
	        PlaceHolder1.Controls.Add(image);
	        System.IO.MemoryStream stream = new System.IO.MemoryStream();
	        barcode.GetImage().Save(stream, System.Drawing.Imaging.ImageFormat.Png);
	        image.DataValue = stream.ToArray();
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        Dim barcode As RadBarcode = New RadBarcode()
	        barcode.Text = "some text"
	        barcode.Type = BarcodeType.Code128
	        barcode.LineWidth = 2
	        Dim image As RadBinaryImage = New RadBinaryImage()
	        PlaceHolder1.Controls.Add(image)
	        Dim stream As System.IO.MemoryStream = New System.IO.MemoryStream()
	        barcode.GetImage().Save(stream, System.Drawing.Imaging.ImageFormat.Png)
	        image.DataValue = stream.ToArray()
	    End Sub
	#End Region
	#Region "barcode-outputype_7"
	    Protected Sub Example()
	        Dim barcode As RadBarcode = New RadBarcode()
	        barcode.Text = "some text"
	        barcode.Type = BarcodeType.Code128
	        barcode.LineWidth = 2
	        Dim image As System.Drawing.Image = barcode.GetImage()
	    End Sub
	#End Region
	End Class
````


