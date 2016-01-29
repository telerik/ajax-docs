#do-not-mix-modes
>important @{control}, as well as the other controls included in the Telerik UI for ASP.NET AJAX suite that utilize render modes, support only one type of render mode per page. This includes mode being set for a standalone @{control}. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.
#end


#do-not-mix-modes-buttons
@[template](/_templates/common/render-mode.md#do-not-mix-modes "control: @{control}")
>
>RadButton, RadCheckBox, RadImageButton, RadLinkButton, RadPushButton and RadToggleButton share the same rendering and stylesheets, so all their instances on the same page must have `RenderMode=Lightweight` because this is the only mode supported by all of these controls.
#end


#buttons-supported-modes
**@{control}** supports only **Lightweight** render mode. Generally it is exposed via the **RenderMode** property that can have five possible values - **Classic**, **Lightweight**, **Native**, **Mobile** and **Auto**.

The possible options are:

* **Lightweight**—this is the default mode and it emphasizes on semantic HTML and CSS3 which makes the control easy to customize (including custom skins creation).

* **Classic**, **Native**, **Mobile**—these modes are not supported. If you set them, the mode will fall back automatically to **Lightweight**.

* **Auto**—this mode makes each control choose the appropriate rendering mode according to the used browser.
#end




