# transient-style

Providing initial css rules for light children, prior to be slotted, provides a useful service as far as avoiding FOUC.  But it presents its own issues as far as avoiding encapsulation / leaking on other non shadow children.

Plus there's overhead to having styles which aren't meant to apply to anything.

Syntax:

```html
<transient-style remove-when='["my-custom-element-1", "my-custom-element-2"]'>
    <style>
        my-class:{
            color:red;
        }
    </style>
</transient-style>
```

When all the specified custom elements are registered, delete the style (or link) tags contained within.
