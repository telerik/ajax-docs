---
title: PDF Export
page_title: PDF Export | RadScheduler for ASP.NET AJAX Documentation
description: PDF Export
slug: scheduler/troubleshootings/pdf-export
tags: pdf,export
published: True
position: 1
previous_url: controls/scheduler/troubleshootings/pdf-export
---

# PDF Export Troubleshooting



This article shows some of the known RadScheduler PDF Export issues and their solutions.


* [Invalid XHTML Scheduler output](#invalid-xhtml-scheduler-output)

* ['div' start tag on line 96 position 15 does not match the end tag of 'li'. Line 102, position 13.](#div-start-tag-on-line-96-position-15-does-not-match-the-end-tag-of-li-line-102-position-13)

* [System.SystemException: Error while creating area : Encountered web exception while fetching image from](#systemsystemexception-error-while-creating-area--encountered-web-exception-while-fetching-image-from)

* [System.ArgumentException: Parameter is not valid. at System.Drawing.Bitmap..ctor(Stream stream)](#systemargumentexception-parameter-is-not-valid-at-systemdrawingbitmapctorstream-stream)

* [An error occurred while parsing EntityName. Line 1246, position 58 or '' is an unexpected token.](#an-error-occurred-while-parsing-entityname-line-1246-position-58-or--is-an-unexpected-token)

* [System.Net.Sockets.SocketException: An existing connection was forcibly closed by the remote host](#systemnetsocketssocketexception-an-existing-connection-was-forcibly-closed-by-the-remote-host)


## Invalid XHTML Scheduler output 
The rendered scheduler output should be valid XHTML. If it is not, you will receive exceptions on export. Here are some common causes for bad XHTML:

* Special symbols like `<`,`>`,`&`. 

	They should be replaced by the correct *XHTML* entity: `&lt;`, `&gt;`, `&amp;` 
	
* Unclosed tags 


## 'div' start tag on line 96 position 15 does not match the end tag of 'li'. Line 102, position 13.
Most likely it is caused by not closed html tags declared in scheduler templates for example. 
Please [validate](http://validator.w3.org/) the page output.



## System.SystemException: Error while creating area : Encountered web exception while fetching image from	
````ExceptionMessage
	System.SystemException: Error while creating area : 
	Encountered web exception while fetching image from 
	http://localhost:51300/Telerik.Web.UI.WebResource.axd?imgid=324e7fbdeca947c2b9a6c7ca14c88e87&type=rbi
	The remote server returned an error: (500) Internal Server Error.
````
	
To troubleshoot the issue, please open the url, specified in the error details. In the above example it is:
`http://localhost:51300/Telerik.Web.UI.WebResource.axd?imgid=324e7fbdeca947c2b9a6c7ca14c88e87&type=rbi`

The most probable cause of this issue is incorrect web resource handler registration when the Telerik.Web.UI.dll is referenced trough the GAC. For more details refer to the [General TroubleShooting help topic](https://www.telerik.com/help/aspnet-ajax/introduction-troubleshooting.html).

## System.ArgumentException: Parameter is not valid. at System.Drawing.Bitmap..ctor(Stream stream) 

````StackTrace
System.ArgumentException: Parameter is not valid. 
at System.Drawing.Bitmap..ctor(Stream stream) 
at Telerik.Web.Apoc.Image.ApocImage..ctor(String href, Byte[] imageData) 
at Telerik.Web.Apoc.Image.ApocImageFactory.Make(String href) 
at Telerik.Web.Apoc.Fo.Flow.ExternalGraphic.Layout(Area area) 
at Telerik.Web.Apoc.Fo.Flow.Block.Layout(Area area) 
at Telerik.Web.Apoc.Fo.Flow.Flow.Layout(Area area, Region region) 
at Telerik.Web.Apoc.Fo.Flow.Flow.Layout(Area area) 
at Telerik.Web.Apoc.Fo.Pagination.PageSequence.Format(AreaTree areaTree) 
at Telerik.Web.Apoc.StreamRenderer.Render(PageSequence pageSequence) 
at Telerik.Web.Apoc.Fo.FOTreeBuilder.EndElement() 
at Telerik.Web.Apoc.Fo.FOTreeBuilder.Parse(XmlReader reader)
````

This problem appears on export when the Telerik.Web.UI.dll is referenced trough the GAC and the assembly version is different from the WebResource.axd version registered in the web.config file. Please check you web.config for proper handler registration in the following section:

````web.config
<system.webServer>
	<handlers>
		<add name="Telerik.Web.UI.WebResource"  path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource, Telerik.Web.UI, Version=[ASSEMBLY_VERSION], Culture=neutral, PublicKeyToken=121fae78165ba3d4" />
	</handlers>
</system.webServer>
````

Where [ASSEMBLY_VERSION] is the exact version of your Telerik.Web.UI.dll.

If you are using Forms authentication please add the following section to your web.config file:
		
- In case you are using **RadScriptManager**:
		
	**web.config**

		<location path="Telerik.Web.UI.WebResource.axd">
			<system.web>
				<authorization>
					<allow users="?"/>
				</authorization>
			</system.web>
		</location>
		
		
- In case you are using **asp:ScriptManager**:
		
	**web.config**

		<location path="WebResource.axd">
			<system.web>
				<authorization>
					<allow users="?"/>
				</authorization>
			</system.web>
		</location>
		
		
## An error occurred while parsing EntityName. Line 1246, position 58 or '' is an unexpected token. 

````ExceptionMessage
An error occurred while parsing EntityName. 
Line 1246, position 58 or '' is an unexpected token. 
The expected token is ';'. Line 131, position 10.
````

If special characters are used, replace them by valid HTML equivalents: `&` - `&amp;`, `<` - `&lt;`, `>` - `&gt;`, etc.

You can use this article for reference - [Special Characters in HTML](http://www.degraeve.com/reference/specialcharacters.php).


## System.Net.Sockets.SocketException: An existing connection was forcibly closed by the remote host
<span></span>
### Description 

Such problems are usually caused by an incorrectly configured server and some generic connection issues.

The Stack trace sometimes says that the GetStyleSheet method is failing. The said method only executes a standard HttpWebRequest. The observed error most probably is related to a general connection issue rather than an issue with the control itself.

Below you can find some exception messages that you might encounter:

### Exception messages 

* [SocketException (0x2746): An existing connection was forcibly closed by the remote host]

	**ExceptionMessage**

		[SocketException (0x2746): An existing connection was forcibly closed by the remote host]
		System.Net.Sockets.NetworkStream.Read(Byte[] buffer, Int32 offset, Int32 size) +249

		[IOException: Unable to read data from the transport connection: An existing connection was forcibly closed by the remote host.]
		System.Net.Sockets.NetworkStream.Read(Byte[] buffer, Int32 offset, Int32 size) +8442161
		System.Net.FixedSizeReader.ReadPacket(Byte[] buffer, Int32 offset, Int32 count) +57
		System.Net.Security.SslState.StartReceiveBlob(Byte[] buffer, AsyncProtocolRequest asyncRequest) +243
		System.Net.Security.SslState.StartSendBlob(Byte[] incoming, Int32 count, AsyncProtocolRequest asyncRequest) +470
		System.Net.Security.SslState.ForceAuthentication(Boolean receiveFirst, Byte[] buffer, AsyncProtocolRequest asyncRequest) +8572686
		System.Net.Security.SslState.ProcessAuthentication(LazyAsyncResult lazyResult) +230
		System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state, Boolean preserveSyncCtx) +645
		System.Threading.ExecutionContext.Run(ExecutionContext executionContext, ContextCallback callback, Object state, Boolean preserveSyncCtx) +9
		System.Threading.ExecutionContext.Run(ExecutionContext executionContext, ContextCallback callback, Object state) +87
		System.Net.TlsStream.ProcessAuthentication(LazyAsyncResult result) +1467
		System.Net.TlsStream.Write(Byte[] buffer, Int32 offset, Int32 size) +84
		System.Net.ConnectStream.WriteHeaders(Boolean async) +816

		[WebException: The underlying connection was closed: An unexpected error occurred on a send.]
		System.Net.HttpWebRequest.GetResponse() +8442708
		Telerik.Web.UI.Scheduler.SchedulerExporter.GetStyleSheet(String url) +120
		Telerik.Web.UI.Scheduler.SchedulerExporter.GetStyleSheetFor(String controlName, Type controlType, Page page, String pathFormatString, String defaultPathFormatString) +318
		Telerik.Web.UI.Scheduler.SchedulerExporter.GetStyleSheets(Page page) +99
		Telerik.Web.UI.Scheduler.SchedulerExporter.RenderControl(Page page) +695
		Telerik.Web.UI.Scheduler.SchedulerExporter.PdfExportRenderForm(HtmlTextWriter nullWriter, Control form) +154
		System.Web.UI.Control.RenderChildrenInternal(HtmlTextWriter writer, ICollection children) +131
		System.Web.UI.HtmlControls.HtmlForm.RenderChildren(HtmlTextWriter writer) +151
		System.Web.UI.HtmlControls.HtmlContainerControl.Render(HtmlTextWriter writer) +49
		System.Web.UI.Control.RenderControlInternal(HtmlTextWriter writer, ControlAdapter adapter) +150
		System.Web.UI.Control.RenderChildrenInternal(HtmlTextWriter writer, ICollection children) +131
		System.Web.UI.Page.Render(HtmlTextWriter writer) +40
		System.Web.UI.Control.RenderControlInternal(HtmlTextWriter writer, ControlAdapter adapter) +150
		Telerik.Web.UI.RadAjaxControl.RenderPageInAjaxMode(HtmlTextWriter writer, Control page) +1040
		System.Web.UI.Control.RenderChildrenInternal(HtmlTextWriter writer, ICollection children) +131
		System.Web.UI.Page.Render(HtmlTextWriter writer) +40
		System.Web.UI.Control.RenderControlInternal(HtmlTextWriter writer, ControlAdapter adapter) +150
		System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint) +5363


* System.IO.IOException: Unable to read data from the transport connection: An existing connection was forcibly closed by the remote host.

	**ExceptionMessage**
	
		System.IO.IOException: Unable to read data from the transport connection: An existing connection was forcibly closed by the remote host.
		System.Net.Sockets.SocketException: An existing connection was forcibly closed by the remote host 
		at System.Net.Sockets.Socket.Receive(Byte[] buffer, Int32 offset, Int32 size, SocketFlags socketFlags) 
		at System.Net.Sockets.NetworkStream.Read(Byte[] buffer, Int32 offset, Int32 size) 
		at System.Net.Sockets.NetworkStream.Read(Byte[] buffer, Int32 offset, Int32 size) 
		at System.Net.FixedSizeReader.ReadPacket(Byte[] buffer, Int32 offset, Int32 count) 
		at System.Net.Security._SslStream.StartFrameHeader(Byte[] buffer, Int32 offset, Int32 count, AsyncProtocolRequest asyncRequest) 
		at System.Net.Security._SslStream.StartReading(Byte[] buffer, Int32 offset, Int32 count, AsyncProtocolRequest asyncRequest) 
		at System.Net.Security._SslStream.ProcessRead(Byte[] buffer, Int32 offset, Int32 count, AsyncProtocolRequest asyncRequest) 
		at System.Net.TlsStream.Read(Byte[] buffer, Int32 offset, Int32 size) 
		at System.Net.PooledStream.Read(Byte[] buffer, Int32 offset, Int32 size) 
		at System.Net.Connection.SyncRead(HttpWebRequest request, Boolean userRetrievedStream, Boolean probeRead) 


* A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond

	**ExceptionMessage**

		A connection attempt failed because the connected party did not properly respond after a period of time, 
		or established connection failed because connected host has failed to respond 216.146.38.125:89 

		Description: 
		An unhandled exception occurred during the execution of the current web request. 
		Please review the stack trace for more information about the error and where it originated in the code. 

		Exception Details: 
		System.Net.Sockets.SocketException: A connection attempt failed because the connected party did not properly respond after a period of time, 
		or established connection failed because connected host has failed to respond 216.146.38.125:89

		Source Error: 
		An unhandled exception was generated during the execution of the current web request. 
		Information regarding the origin and location of the exception can be identified using the exception stack trace below. 


### Solutions:
		
* One possible solution would be using the ClientExportManager to export the Scheduler to PDF as demonstrated in the [Scheduler client PDF export with ClientExportManager](https://www.telerik.com/support/code-library/scheduler-client-pdf-export-with-clientexportmanager) Code Library project.

* To troubleshoot the GetStyleSheet method itself you can use the extracted logic outside the code of the Scheduler in a TestGetStyleSheet method. 

````C#
protected void TestGetStyleSheet(object sender, EventArgs e)
{
    var url1 = Telerik.Web.SkinRegistrar.GetWebResourceUrl(Page, typeof(RadScheduler), "Telerik.Web.UI.Skins.Scheduler.css");
    url1 = UpdateWebResourceUrl(url1);
   
    var styleSheet1 = GetStyleSheet(url1);
   
    var url2 = Telerik.Web.SkinRegistrar.GetWebResourceUrl(Page, typeof(RadScheduler), "Telerik.Web.UI.Skins.Windows7.Scheduler.Windows7.css");
    url2 = UpdateWebResourceUrl(url2);
   
    var styleSheet2 = GetStyleSheet(url2);
}
   
private static string UpdateWebResourceUrl(string path)
{
    var currentContext = System.Web.HttpContext.Current;
    var request = currentContext.Request;
    var schemeAndServer = request.Url.GetComponents(UriComponents.SchemeAndServer, UriFormat.Unescaped);
    var sb = new StringBuilder(schemeAndServer);
   
    sb.Append(path);
    sb.Replace("~", "");
    path = sb.ToString();
    return path;
}
       
private string GetStyleSheet(string url)
{
    var request = (HttpWebRequest)WebRequest.Create(url);
    request.UseDefaultCredentials = true; //Fixes 401 Unauthorized exceptions
    var response = request.GetResponse();
   
    var enc = System.Text.Encoding.UTF8;
    var loResponseStream = new StreamReader(response.GetResponseStream(), enc);
   
    string result = loResponseStream.ReadToEnd();
   
    loResponseStream.Close();
    response.Close();
   
    HttpContext currentContext = System.Web.HttpContext.Current;
   
    string[] splittedResult = result.Split(new string[] { "url('", "')" }, StringSplitOptions.None);
    List<string> splittedUrlsThatNeedsUpdate = new List<string>();
   
    for (int i = 0; i < splittedResult.Length; i++)
    {
        if (splittedResult[i].Contains("WebResource.axd?"))
        {
            if (!splittedUrlsThatNeedsUpdate.Contains(splittedResult[i]))
            {
                splittedUrlsThatNeedsUpdate.Add(splittedResult[i]);
            }
        }
    }
   
    List<string> splittedUrlsUpdated = new List<string>();
    foreach (string item in splittedUrlsThatNeedsUpdate)
    {
        var currentRequest = currentContext.Request;
        var schemeAndServer = currentRequest.Url.GetComponents(UriComponents.SchemeAndServer, UriFormat.Unescaped);
        var sb = new StringBuilder(schemeAndServer);
   
        sb.Append(currentContext.Request.ApplicationPath);
        sb.Append("/" + item);
        sb.Replace("~", "");
   
        splittedUrlsUpdated.Add(sb.ToString());
    }
   
   
    StringBuilder stringBuilder = new StringBuilder(result);
    for (int j = 0; j < splittedUrlsUpdated.Count; j++)
    {
        stringBuilder.Replace(splittedUrlsThatNeedsUpdate[j], splittedUrlsUpdated[j]);
    }
   
    return stringBuilder.ToString();
}
````







