jquery.select-with-keys
=======================

This jquery plugin can create keybaord shortcuts to select a checkout/radio inputs in a sequence.

Usage
=====

Simple to use. Simply call it on an element selected bu jquerty selector.
By default 4 keys a,b,c,d are binded to select 1st, 2nd, 3rd and 4th radio input.

    $('#answers').inputKeyPress();

To bind to checkbox inputs:

    $('#answers').inputKeyPress({type: 'checkbox'});

To use a different set of keys: 

    $('#answers').inputKeyPress({keys: [keycode1, keycode2, ... keycoden]});
