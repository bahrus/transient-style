# transient-style

transient-style is a martyr component.  It removes itself from the DOM tree when the web component definitions it monitors for become registered. 

The biggest use case is providing initial css rules for light children, prior to being slotted.  This is important for avoiding FOUC.  But leaving the styles behind when no longer applicable, could have a lasting negative impact on other light children waiting for their web components to become registered, as well as non-shadowed content.

Plus there's overhead to having styles which aren't meant to apply to anything, sitting there for no reason.

Syntax:

```html
<transient-style remove-when='["transient-style"]' is-defined>
    <style>
        div.forgive {
            display: block;
        }
        div.spirit {
            display: none;
        }
    </style>
</transient-style>
<style>
    .forgive{
        display: none;
    }
</style>
<div class=forgive>Forgive them; for they do not know what they are doing.</div>
<div class=spirit>Into your hands I commit my spirit.</div>
```

