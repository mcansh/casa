$(function(){var l=$("nav");$(window).scroll(function(){var s=$(window).scrollTop();s>=200?l.addClass("scroll"):l.removeClass("scroll")})});var $hamburger=$(".hamburger"),$links=$(".links");$hamburger.on("click",function(){$hamburger.toggleClass("is-active"),$links.toggleClass("is-open"),$links.toggleClass("blur")});