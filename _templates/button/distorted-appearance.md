#intro
This help article describes what to do when you have an appearance issue with **@{control}** and provides a resolution.

The appearance of **@{control}** may be distorted (**Figure 1**) when the control is declarted on the same page that contains a **RadButton** with a `Classic` `RenderMode` (*i.e., the default `RenderMode`*).

>caption Figure 1: Distorted appearance of **@{control}** when placed on the same page with **RadButton** `RenderMode`="`Classic`".

![distorted appearance](images/distorted-appearance.png)

>caption Example 1: The code that reproduces the appearance issue from **Figure 1**.
#end

#cause-resolve
## Cause of the Problem

Generally, controls from the Telerik® UI for ASP.NET AJAX suite that use the same styles support only a single type of `RenderMode` per page. This also includes instances from user controls and master pages.

**RadButton**, **@{control}** and controls that utilize them, however, share similar resources. Since **@{control}** supports only a `Lightweight` `RenderMode`, its styles may interfere with the styles of the `Classic` **RadButton**. The improper appearance is shown in **Figure 1** and the code that creates it shown in **Example 1**.

## How to Resolve It

To resolve this issue you should:

* Either replace the `Classic` **RadButton** with its `Lightweight` equivalent (i.e., [RadPushButton]({%slug pushbutton/overview%}), [RadLinkButton]({%slug linkbutton/overview%}), [RadImageButton]({%slug imagebutton/overview%}), [RadToggleButton]({%slug togglebutton/overview%})).

* Or set the `RenderMode` of the **RadButton** to `Lightweight`.

@[template](/_templates/button/render-modes.md#set-render-mode)
#end


