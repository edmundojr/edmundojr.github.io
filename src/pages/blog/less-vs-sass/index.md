---
title: 'Less vs Sass'
description: 'Comparison between Sass and Less, and why Sass is better.'
date: '2017-11-02'
tags: ['CSS']
---

CSS preprocessors help to make the CSS structure more readable and easier to maintain, with features such as variables, mixins, nesting selectors, selector inheritance, color functions. Here's a shortish comparison between Sass and Less.

## Variables

Sass uses `$` and Less uses `@` for setting variables. The dollar sign has no inherit meaning in CSS, while the `@` sign does, it's used for things like declaring `@keyframes` (for animations) or `@media` queries.

```scss
// Sass

$turquoise: #3DE3C9;

div {
  color: $turquoise;
}
```

```less
// Less

@turquoise: #3DE3C9;

div {
  color: @turquoise;
}
```

```css
/* CSS Output */

div {
  color: #3DE3C9;
}
```

## Nesting

Sass and Less have the `&` selector that allows nested selector to refer to the parent scope.

```scss
// Sass & Less

p {
  color: black;

  a {
    color: blue;

    &:hover,
    &:focus {
      color: purple;
    }
  }
}
```

```css
/* CSS Output */

p {
  color: black;
}

p a {
  color: blue;
}

p a:hover,
p a:focus {
  color: purple;
}
```

## Mixins

Mixins allow you to define styles that can be re-used throughout the stylesheet and they can even take arguments which allows you to produce a wide variety of styles with very few mixins.

```scss
// Sass

@mixin invisibility-cloak {
  visibility: hidden;
}

.harry-potter {
  @include invisibility-cloak;
}

// CSS Output

.harry-potter {
  visibility: hidden;
}
```

The difference here is that Less outputs the mixin, so you end up with styles you are probably never gonna use on your compiled CSS.

```less
// Less

.invisibility-cloak {
  visibility: hidden;
}

.harry-potter {
  .invisibility-cloak;
}

// CSS Output

.invisibility-cloak {
  visibility: hidden;
}

.harry-potter {
  visibility: hidden;
}
```

Mixins can also have arguments.

```scss
// Sass

@mixin bordered($width: 1px) {
  border-top: $width solid black;
  border-bottom: $width solid black;
}

div {
  @include .bordered(42px);
}
```

```less
// Less

.bordered(@width: 1px) {
  border-top: @width solid black;
  border-bottom: @width solid black;
}

div {
  .bordered(42px);
}
```

## Extend: selector inheritance

There are often cases when designing a page when one class should have all the styles of another class, as well as its own specific styles. This was one of the big reasons why many chose Sass over Less. Less has added the `extend` feature in version 1.4.

```scss
// Sass

.alert {
  color: white;
  padding: 10px;
	background: blue;
}

.alert-error {
  @extend .alert;
  background: red;
}
```

```less
// Less

.alert {
  color: white;
  padding: 10px;
	background: blue;
}

.alert-error {
  &:extend(.alert);
  background: red;
}
```

```css
// CSS Output

.alert,
.alert-error {
  color: white;
  padding: 10px;
  background: blue;
}

.alert-error {
  background: red;
}
```

## Numbers

Both Sass and Less support basic arithmetic. However they differ significantly with respect to how they handle units.

Sass supports unit-based arithmetic, just like you learned in school. Complex units are supported in any intermediate form and will only raise an error if you try to print out the value of a complex unit.

Additionally, Sass has conversion tables so that any comparable units can be combined.

Sass will let you define your own units and will happily print out unknown units into your css. Less will not. Sass does this as a form of future proofing against changes in the W3C specification or in case a browser introduces a non-standard unit.

Less calculates some values that shouldn't be calculated in the first place, such as values inside the [`calc()` CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) and `border-radius` with multiple values (e.g. `50%/10px 10px 0 0`).

```less
// Less

div {
  width: calc(100% - 80px);
}

/* CSS Output */

div {
  width: calc(20%)
}
```

You can prevent that from happen by escaping the values with the escape functions `~""`:

```less
// Less

div {
  width: calc(~"100% - 80px"); // this looks horrible
}

/* CSS Output */

div {
  width: calc(100% - 80px);
}
```

## Color manipulation

Both Sass and Less provide color math. Sass provides a full array of tools for manipulating colours, here's some of the most useful ones:

```scss
// Sass

$color: purple;
$amount: 10%;

color: lighten($color, $amount);
color: darken($color, $amount);
color: saturate($color, $amount);
color: desaturate($color, $amount);
color: adjust-hue($color, $amount);
color: grayscale($color);
color: compliment($color);
```

## Conditionals & Control Structures

Less does not provide any conditionals or looping structures. Instead, it provides mixin guards and pattern-matching which can be used to similar effect.

Sass and Less provides boolean types `true` and `false`, the `and`, `or`, and `not` operators as well as `<`, `>`, `<=`, `>=`, `==` operators. There are minor syntax differences between the two (Sass syntax shown here).

```scss
// Sass

@if lightness($color) > 30% {
  background-color: black;
}
@else {
  background-color: white;
}
```

Looping:

```scss
// Sass

@for $i from 1px to 10px {
  .border-#{i} {
    border: $i solid blue;
  }
}
```

A similar example in Less, using mixins:

```less
// Less

.mixin (@color) when (lightness(@color) > 30%) {
  background-color: black;
}
.mixin (@color) when (lightness(@color) =< 30%) {
  background-color: white;
}
```

Less supports looping via recursion, but not selector interpolation as shown in the Sass example. So in Less the example looks like this:

```less
@iterations: 10;

.loopingClass (@index) when (@index > 0) {

  .border-@{index}px {
    border: unit(@index, px) solid blue;
  }

  .loopingClass(@index - 1);
}

.loopingClass (0) { /*stop*/ }
.loopingClass (@iterations);
```

## Comments

Less and Sass both support C-style `/* */` and C++ style comments `//`.

## Output Formatting

Less has three output formats: normal, compressed & yui-compressed. Sass has four: nested, compact, compressed, expanded.

---

# Why Sass?

Less and Sass are equally easy to install, but with Sass it's also really easy to extend on what others have built before you – [Bootstrap 4](http://getbootstrap.com/), [Bulma](https://bulma.io/), [Miligram](https://milligram.io/), [Spectre](https://picturepan2.github.io/spectre/), [Materialize](http://materializecss.com/), [Angular Material](https://material.angularjs.org/latest/)… are all CSS frameworks built upon Sass.

Sass has a better language syntax with a more extended set of features:

- `!default` flag for variables
- `@extend` for inheritance and placeholder selectors
- `@if`, `@for`, `@each`, `@while` directives
- Better error messages
- _AND_ Bootstrap 4 is using Sass