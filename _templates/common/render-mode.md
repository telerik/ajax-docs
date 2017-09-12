#do-not-mix-modes
>important @{control}, as well as the other controls included in the Telerik® UI for ASP.NET Ajax suite that utilize render modes, support only one type of render mode per page. This includes mode being set for a standalone @{control}. All such controls must have the same RenderMode on a given page.This also includes instances from user controls and master pages.
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

#intro-all
**@{control}** has different render modes that can change the actual HTML markup that is rendered.	They are exposed via the **RenderMode** property that can have four	possible values - **Classic**, **Lightweight**, **Mobile** and **Auto**. This functionality was introduced in the **@{version}** version.

The possible options are:
#end

#classic-desc
**Classic**—this mode is the rendering that has been used before. It remains without changes and it is the default value of the property.
#end

#lightweight-desc
**Lightweight**—this mode emphasizes on semantic HTML and CSS3. It reduces the amount of markup the control renders	and makes it easier to customize. This also reduces the number of image sprites required by the control. All of this decreases the overall size and complexity of each skin, including custom ones.
#end

#mobile-desc
**Mobile**—this mode is currently not supported. If you set it, the mode will fall back automatically to **Lightweight**.
#end

#auto-desc
**Auto**—this mode makes each control choose the appropriate rendering mode according to the used	browser—**Classic** or **Lightweight**.
#end

#do-not-mix-modes-all
>important **@{control}**, as well as the other Telerik controls that utilize render modes, supports only one type of render mode per page. This includes mode being set for a standalone instance(s), and a programmatically created instance(s). All such controls must have the same **RenderMode** on a given page.This also includes instances from user controls and master pages.
#end

#resp-design-desc
Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating the user experience. This often includes {% if '@{slug-el}' == 'no' %} changing the font size {% else %} [changing the font size]({%slug @{slug-el}%}) {% endif %} and having {% if '@{slug-fl}' == 'no' %} dimensions set in percent{% else %} [dimensions set in percent]({%slug @{slug-fl}%}){% endif %}.
#end

#resp-elastic-desc
Generally, elastic design means that the page and its content are able to adapt to different font size by scaling the elements properly depending on the chosen font-size.
#end




