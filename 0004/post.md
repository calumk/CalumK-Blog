# Markup

## HTML

HTML stands for Hyper-Text Markup Language. It is essentially a way of
defining the structure of data on a page. in JUST html, all you would get is a
blank page with text in it, organised into different 'invisible' boxes or
'divisions'. This is what we call a 'div' example:

<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplehtml.html"></script>

## CSS

CSS stands for cascading style-sheets CSS is where we define what a page
'looks' like. colours, position of the 'divs', font-sizes, gradients,
background-images etc. example: 

<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplecss.css"></script>

In an ideal world,
what the page looks like, is Not connected to how the page is written in html.
A good example of this is the site 'CSS Zen Garden'[1] ALL of the pages in the
above page, are the exact same HTML. Only the CSS has been changed. In a
'real-world' example this is not always practical, especially for larger sites
like facebook, reddit etc.... but it proves a point. CSS is for how it looks,
HTML is for how it is 'marked out' (content) Looping , While, and other 'code'

# Code

Neither HTML or CSS are 'code' they are both essentially just GUI. They do not
'do' anything, other than provide an interface. For code you basically have
two options: 'Javascript' or 'PHP' Both do different things, and I will
outline them below, but first it is important to understand how a website
works. When you load a website, you request a page from a server. The server
gives you the page, it downloads to your computer and it is displayed. If you
want to have content that is 'dynamic', for example, text that displays todays
date, or (in an advanced system) text that displays a username, or blog post.
you wound not have a different page.html for each page. It would be silly to
have a 'different' .html page for every page/article in a blog, and this is
where PHP comes in. PHP looks like this:

## PHP

<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplephp.php"></script>


echo is essentially the same as 'print' in other
languages, in php it is kind-of not a function, hense there is no need to have
echo(). HOWEVER echo() and echo are the same. This is not true for all
functions. Just echo.... TL;DR echo is weird, deal with it PHP on its own, is
also no use, because all you would get is a page of data, with no formatting.
For PHP to be useful, you must use integrate it with HTML (& CSS) eg:

<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplephp2.php"></script>

 This may not look useful, but as soon as you
start to use PHP functions, you will see it is. for example to display the
day, you could do: 

<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplephp3.php"></script>

Hopefully that makes some
sense. So remember how earlier i spoke about servers? The PHP code (the above
file) lives on the server. When you ask for it, by going to the url (eg:
www.website.com/index.php[2] ) the server runs the PHP code, and generates the
output BEFORE it is sent to you. When it sent to you you will receive ONLY
html code. (if you right-click>view-source on a webpage, you see the HTML) for
the above index.php file, you would receive: 

<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplephp3_out.html"></script>


This is important, because once the page has reached you, it is STATIC. It
will not change. even if you leave the webpage open forever, it will always
say "Wednesday the 15th" If you want that info to 'change' you want to use
'Javascript'

## Javascript

Javascript runs NOT on the server, but on the users computer. ANYTHING that
moves or changes on a web-page is 99% probably javascript. There are a few
exceptions, don't worry about it yet so, Lets imagine you want to get the date
in javascript and display it on a page if we imagine we have the same HTML
page as above, Ignore the PHP stuff. 

<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplehtml1.html"></script>

javascript could look like this: 

<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplejs.js"></script>

 This would cause the page to 'update' the date in '

' every 10 seconds, forever. Hopefully that is a good explanation of how a
webpage works. Basically most modern webpages work with a combination of PHP,
Javascript, HTML, CSS.. Yes its confusing :) If you need any more advice, or
help, let me know. Edit: Just realised after all of that I didn't actually
explain while or for loops... damn... Ill post another one below ;) Looping
(Again) For this example, Im going to use a HTML list as an example: Imagine
you want to (for some reason) list the numbers 1-15. Here is the html code:
<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplehtml2.html"></script>
 This would be better to do in PHP
<script src="https://gist.github.com/calumk/55a17257defaeda538bd.js?file=simplephp4.php"></script>

