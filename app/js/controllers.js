'use strict';

function Spooler($scope, $timeout, storyFuncs) {

    function depthFirst(ids)
    {
        if ($scope.data.length>80000)
            return;

        var history = storyFuncs.getHistory();
        var stackDepth = history.length;
        var passage = storyFuncs.getCurrentPassage();
        var url = storyFuncs.getURL();
        var variables = storyFuncs.getVariables();
        // remember stuff
        $scope.data.push(passage + stackDepth);

        // depth first search
        _.each(ids, function(id) {
            var dom = storyFuncs.display(id);
            var newids = storyFuncs.getLinksIdsFromDom(dom);
            depthFirst(newids);
            while(history.length > stackDepth)
               history.shift();
        })
    }

    $scope.search="";
    $timeout(function () { $scope.passages = storyFuncs.getPassages();}, 1000);

    $scope.findLinks = function() {
        /*
        var ids = storyFuncs.getLinksIds();
        $scope.data = [];
        depthFirst(ids);
        */

//        alert($(dom).text());
//        var links = $("a", dom).map(function() { return this.id }).get();
//        alert(angular.toJson(links));
        alert(angular.toJson(ids2));
//        var variables = document.getElementById('story').contentWindow.state.history[0].variables;
//        alert(angular.toJson(variables));

        // replace fade function
        /*
        storyFuncs.replaceFade();

        var titles = [];
        do {
            titles.push(storyFuncs.getURL());
            var links = storyFuncs.getLinks();
            if (links.length>0)
                links.get(0).click();
        } while (links.length>0);

        alert(titles.join("\n"));
//        storyFuncs.setURL(titles[2]);
        storyFuncs.back(1);
        $timeout(function() {
            var links = storyFuncs.getLinks();
            links.css('background-color','blue');
        }, 5);

        //var variables = $("#story").contents().get().state.history[0].variables;
        var variables = document.getElementById('story').contentWindow.state.history[0].variables;
//        alert(angular.toJson(variables));


         */
        $scope.passages = storyFuncs.getPassages();
    }
}

