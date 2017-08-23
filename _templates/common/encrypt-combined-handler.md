#encrypt-handler-template
You can choose to encrypt the querystring parameters that the Telerik WebResource request has in order to make them unreadable for a third party inspecting the network traffic as of Q3 2015.

This feature affects **RadScriptManager** and **RadStyleSheetManager**, and the **Telerik.Web.UI.WebResoruce.axd** handler.

>caption **Example 1**: Enable Telerik WebResource querystring encryption.

````web.config
<appSettings>
	<add key="Telerik.ScriptManager.EnableHandlerEncryption" value="true"/>
</appSettings>
````

You must also ensure that the encrypted URL will not be trimmed which will break the request.

>caption **Example 2**: Increasing the maximum querystring length and URL length for an application:

````web.config
. . . .
<httpRuntime maxRequestLength="204800" executionTimeout="36000" maxQueryStringLength="4096"/>
. . . .
<security>
	<requestFiltering>
		<requestLimits maxAllowedContentLength="209715200" maxQueryString="4096" maxUrl="4096" />
	</requestFiltering>
</security>
````  

# See Also

 * [Telerik Control Properties You Can Set in the web.config](./general-information/web-config-settings-overview#control-properties-you-can-set-from-the-webconfig) 
#end