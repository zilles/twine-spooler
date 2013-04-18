'use strict';

/* Services */
angular.module('myApp.services', []).
    factory('storyFuncs', function($window) {
        var obj = {
            storyContent: function() {
                return $window.document.getElementById('story').contentWindow;
            },
            replaceFade: function() {
                obj.storyContent().fade = function(e, c) {
                    if (c.fade=="in")
                        e.style.visibility="visible";
                    if (c.onComplete)
                        c.onComplete();
                }
            },
            getPassages: function() {
                return obj.storyContent().tale.passages;
            },
            getCurrentPassage: function() {
                return obj.storyContent().state.history[0].passage.title;
            },
            getLinks: function() {
                return $("#story").contents().find("#passages .content a");
            },
            getURL: function() {
                return obj.storyContent().location.href;
            },
            setURL: function($url) {
                obj.storyContent().location.href=$url;
            },
            back: function(num) {
                obj.storyContent().history.go(-num);
            }
        };

        return obj;
    });
