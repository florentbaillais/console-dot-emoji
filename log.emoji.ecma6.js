/**
 *  log.emoji — Custom Console Logging with Emoji and CSS styles
 *
 *  forked from https://github.com/ines/console-dot-emoji by ines
 *  add CSS styles
 *  add support to chained objects logging eg console.log('some text', myobject, this)
 *  change console.* to log.*
 *
 *  MIT licensed
 *
 */

var log = {};
// Define your custom commands and emoji
// without style, will fallback by default to "color: black"
const commands = [
    { name: 'unicorn', emoji: '🦄', style: 'background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) ); background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) ); color:transparent; -webkit-background-clip: text; background-clip: text;' },
    { name: 'beer', emoji: '🍺'},
    { name: 'info', emoji: '💡', style: 'color: #bada55; background-color: #222'},
    { name: 'success', emoji: '✔️', style: 'color: darkgreen'},
    { name: 'warn', emoji: '💩', style: 'color: orange'},
    { name: 'error', emoji: '️❌', style: 'color: darkred'}
];

{
    // Create custom commands
    commands.forEach(({ name, emoji, style }) => log[name] = function() {
        var args = [...arguments];
        console.log(emoji + " %c" + args[0], style || "color: black", ...args.splice(1, args.length - 1));
    });
}

// Log to the console!
log.unicorn("It's so magical to have unicorns here!",["this", "is", "an", "array"]);
log.beer("Cheers!");
log.info("I think this is it");
log.success("You did it!!");
log.warn("You should take care...");
log.error("Oh f*ck!");