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
            display: function(title) {
                return obj.storyContent().state.display(title, null, "offscreen");
            },
            getPassages: function() {
                return _.reject(_.values(obj.storyContent().tale.passages), function(x) {
                    return _.intersection(x.tags, ["script","stylesheet","Twine.private"]).length>0 ||
                        _.contains(["StoryMenu","StoryTitle"], x.title);
                });
            },
            getHistory: function() {
                return obj.storyContent().state.history;
            },
            getCurrentPassage: function() {
                return obj.getHistory()[0].passage.title;
            },
            getVariables: function() {
                return obj.getHistory()[0].variables;
            },
            getLinks: function() {
                return $("#story").contents().find("#passages .content a");
            },
            getLinksFromDom: function(dom) {
                return $("a",dom);
            },
            getLinksIds: function() {
                return obj.getLinks().map(function() { return this.id; }).get();
            },
            getLinksIdsFromDom: function(dom) {
                return obj.getLinksFromDom(dom).map(function() { return this.id; }).get();
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
