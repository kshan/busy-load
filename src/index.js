import './sass/sass.scss';
import {
    busyLoad,
    busyLoadSetup,
    busyLoadFull
} from './lib/busy-load.js'
import {get} from "lodash";
import defaults from './lib/defaults.js';
 
jQuery = require('jquery');


(function($) {
    $.fn.busyLoad = busyLoad;
    $.busyLoadSetup = busyLoadSetup;
    $.busyLoadFull = busyLoadFull;
    $.fn.busyLoad.defaults = defaults;
  
// travis 
// phantom-repbuit
}(jQuery));