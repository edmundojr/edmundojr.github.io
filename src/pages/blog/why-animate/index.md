---
title: 'Why animate?'
description: 'No animation is unnatural.'
date: '2018-05-21'
tags: ['Design', 'Animation']
---

When done well, animations can add valuable interaction and feedback. They enhance the emotional experience, bringing delight and adding personality to your interface. In fact, to animate means bring to life.

> Emotional design’s primary goal is to facilitate human-to-human communication. If we’re doing our job well, the computer recedes into the background, and personalities rise to the surface.
>
> <footer>— Aarron Walter, Designing For Emotion</footer>

## No animation is unnatural

You click on a “New” button and a form just… appears from nowhere? You click a “X” to close a modal and… it just vanishes into thin air? That is unnatural and it’s what we should be avoiding as designers. Nothing in the real world does anything as jarringly as just swapping states. If that happened it would feel like a glitch in the matrix.

Take for instance the carousel interface below: without any animations, could you tell that it is indeed a carousel interface? Are we offering the user any clues other than changing the background color and emoji when we swap the panels?

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" height="310" scrolling="no" title="CSS 3D transform Colorful Animated Carousel" src="//codepen.io/edmundojr/embed/qdLWWx/?height=383&theme-id=33557&default-tab=result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
</div>

If you toggle the animation (go on, I wait), you'll see how much nicer it is to understand the relationship between the elements and the flow between different states – you instantly get a sense of depth of the interface, it feels faster, it is now enjoybable… you feel that it is truly alive. 😊

## What makes a good animation

So we know we should animate, but what makes for a good animation? What should we focus on?

First of all, you should animate exclusively using `opacity` and `transform` properties, anything else will trigger a browser layout or paint, which are expensive operations. That's the only way to keep your animations running at a smooth 60fps rate.

> The process that the browser goes through is pretty simple: calculate the styles that apply to the elements (Recalculate Style), generate the geometry and position for each element (Layout), fill out the pixels for each element into layers (Paint Setup and Paint) and draw the layers out to screen (Composite Layers). To achieve silky smooth animations you need to avoid work, and the best way to do that is to only change properties that affect compositing -- transform and opacity. The **higher up** you start on the timeline waterfall the **more work** the browser has to do to get pixels on to the screen.
>
> <footer><span>—</span> Paul Lewis and Paul Irish, <a href="https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/#disqus_thread">High Performance Animations</a></footer>

Secondly, animation is all about timing:

- Try to **keep your animations fast**: usually around the _300ms_ mark
- **Animate things independently**: stagger individual elements instead of animating big blocks
- Always **use custom easings**: the default ones are crap

That's about it. Remember that having fun is the best way to get the best results. Go the extra mile, play, experiment, and be happy with what you do. Try, iterate, and polish!
