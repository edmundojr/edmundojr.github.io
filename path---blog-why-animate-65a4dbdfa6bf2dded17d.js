webpackJsonp([0x92d13206ca9f],{382:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Edmundo Santos",author:"Edmundo Santos"}},markdownRemark:{id:"/Users/esantos/Sites/edmundojr.com/src/pages/blog/why-animate/index.md absPath of file >>> MarkdownRemark",html:'<p>When done well, animations can add valuable interaction and feedback. They enhance the emotional experience, bringing delight and adding personality to your interface. In fact, to animate means bring to life.</p>\n<blockquote>\n<p>Emotional design’s primary goal is to facilitate human-to-human communication. If we’re doing our job well, the computer recedes into the background, and personalities rise to the surface.</p>\n<footer>— Aarron Walter, Designing For Emotion</footer>\n</blockquote>\n<h2>No animation is unnatural</h2>\n<p>You click on a “New” button and a form just… appears from nowhere? You click a “X” to close a modal and… it just vanishes into thin air? That is unnatural and it’s what we should be avoiding as designers. Nothing in the real world does anything as jarringly as just swapping states. If that happened it would feel like a glitch in the matrix.</p>\n<p>Take for instance the carousel interface below: without any animations, could you tell that it is indeed a carousel interface? Are we offering the user any clues other than changing the background color and emoji when we swap the panels?</p>\n<div class="embed-responsive embed-responsive-16by9">\n  <iframe class="embed-responsive-item" height="310" scrolling="no" title="CSS 3D transform Colorful Animated Carousel" src="//codepen.io/edmundojr/embed/qdLWWx/?height=383&theme-id=33557&default-tab=result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>\n</div>\n<p>If you toggle the animation (go on, I wait), you\'ll see how much nicer it is to understand the relationship between the  elements and the flow between different states – you instantly get a sense of depth of the interface, it feels faster, it is now enjoybable… you feel that it is truly alive. 😊</p>\n<h2>What makes a good animation</h2>\n<p>So we know we should animate, but what makes for a good animation? What should we focus on?</p>\n<p>First of all, you should animate exclusively using <code class="language-text">opacity</code> and <code class="language-text">transform</code> properties, anything else will trigger a browser layout or paint, which are expensive operations. That\'s the only way to keep your animations running at a smooth 60fps rate.</p>\n<blockquote>\n<p>The process that the browser goes through is pretty simple: calculate the styles that apply to the elements (Recalculate Style), generate the geometry and position for each element (Layout), fill out the pixels for each element into layers (Paint Setup and Paint) and draw the layers out to screen (Composite Layers). To achieve silky smooth animations you need to avoid work, and the best way to do that is to only change properties that affect compositing -- transform and opacity. The <strong>higher up</strong> you start on the timeline waterfall the <strong>more work</strong> the browser has to do to get pixels on to the screen.</p>\n<footer><span>—</span> Paul Lewis and Paul Irish, <a href="https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/#disqus_thread">High Performance Animations</a></footer>\n</blockquote>\n<p>Secondly, animation is all about timing:</p>\n<ul>\n<li>Try to <strong>keep your animations fast</strong>: usually around the <em>300ms</em> mark</li>\n<li><strong>Animate things independently</strong>: stagger individual elements instead of animating big blocks</li>\n<li>Always <strong>use custom easings</strong>: the default ones are crap</li>\n</ul>\n<p>That\'s about it. Remember that having fun is the best way to get the best results. Go the extra mile, play, experiment, and be happy with what you do. Try, iterate, and polish!</p>',frontmatter:{title:"Why animate?",date:"21 May 2018",tags:["Design","Animation"]}}},pathContext:{slug:"/blog/why-animate/"}}}});
//# sourceMappingURL=path---blog-why-animate-65a4dbdfa6bf2dded17d.js.map