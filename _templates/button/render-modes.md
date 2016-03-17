#set-render-mode
There are two ways to configure the rendering mode of the controls:

* The **RenderMode property** in the markup or in the code-behind that can be used for a particular instance:

	**ASP.NET**
	
		<telerik:RadButton ID="RadButton1" runat="server" RenderMode="Lightweight">
		</telerik:RadButton>

	**C#**
	
		RadButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight;
	
	**VB**
	
		RadButton1.RenderMode = Telerik.Web.UI.RenderMode.Lightweight

* A **global setting in the web.config** file that will affect the entire application, unless a concrete value is specified for a given control instance:

	**XML**
	
		<appSettings>
			<add key="Telerik.Web.UI.Button.RenderMode" value="lightweight" />
		</appSettings>
#end



