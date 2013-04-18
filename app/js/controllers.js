'use strict';

function Spooler($scope, $timeout, storyFuncs) {
    $scope.findLinks = function() {
        // replace fade function
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


//        $scope.passages = getPassages();
    }
}

