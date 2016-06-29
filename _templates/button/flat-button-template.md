#intro
This help article shows how you can setup **@{control}** with **Material** **Skin** to render it as flat button. 

Flat button is styled with no background color. You can see an example in **Figure 1**

>important Flat button style is supported only with **Material** **Skin**. 

In order to render such a button you should add the @{className} class to the control so to get the proper styles. You can see **Example 1**.

>caption Figure 1: @{control} decorated as flat button vs normal.

![](images/flat-button.png)

>caption Example 1: Configuring @{control} to render as flat button.
#end

#intro-bak
This help article describes what to do when you have an appearance issue with **@{control}** and provides a resolution.

The appearance of **@{control}** may be distorted (**Figure 1**) when the control is declarted on the same page that contains a **RadButton** with a `Classic` `RenderMode` (*i.e., the default `RenderMode`*).

>caption Figure 1: Distorted appearance of **@{control}** when placed on the same page with **RadButton** `RenderMode`="`Classic`".

![distorted appearance](images/distorted-appearance.png)

>caption Example 1: The code that reproduces the appearance issue from **Figure 1**.
#end




