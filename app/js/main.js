function Answer() {
    this.question = {}, this.text = "", this.image = "", this.correct = !1;
}

function Category() {
    this.manager = {}, this.name = "", this.id = "", this.uri = "", this.type = "", 
    this.questions = [];
}

function qa_Manager(categories) {
    this.categories = [], function(cats) {
        this.categories = cats, this.categories = this.categories.map(function(cat) {
            cat.manager = this;
        }), console.log(this.categories);
    }(categories);
}

function Question() {
    this.category = {}, this.text = "", this.image = "", this.type = "", this.info = "", 
    this.points = 0, this.answers = [], this.next = function() {};
}

var gameData = function() {
    "use strict";
    return {};
}(), playerData = function() {
    "use strict";
    var rightAnswers = 0, wrongAnswers = 0, points = 0, lastUri = null, lastCat = null;
    return {
        rightAnswers: rightAnswers,
        wrongAnswers: wrongAnswers,
        points: points,
        lastUri: lastUri,
        lastCat: lastCat
    };
}(), logger = function(out) {
    "use strict";
    function setOutput(newOut) {
        out = newOut;
    }
    function clear() {
        bypass("clear", arguments);
    }
    function log() {
        mutableBypass("log", arguments);
    }
    function info() {
        mutableBypass("info", arguments);
    }
    function debug() {
        mutableBypass("debug", arguments);
    }
    function warn() {
        mutableBypass("warn", arguments);
    }
    function error() {
        mutableBypass("error", arguments);
    }
    function group() {
        mutableBypass("group", arguments);
    }
    function groupEnd() {
        mutableBypass("groupEnd", arguments);
    }
    function mutableBypass(fnName, args) {
        mute !== !0 && bypass(fnName, args);
    }
    function bypass(fnName, args) {
        out[fnName].apply(this, sliceArgs(args));
    }
    function sliceArgs(args) {
        return Array.prototype.slice.call(args);
    }
    var mute = !1;
    return {
        mute: mute,
        setOutput: setOutput,
        clear: clear,
        log: log,
        info: info,
        debug: debug,
        warn: warn,
        error: error,
        group: group,
        groupEnd: groupEnd
    };
}(console), router = function() {
    "use strict";
    function setDefaultRoute(fn) {
        defaultRoute = fn;
    }
    function addRoute(url, fn) {
        return mappedRoutes.push({
            url: parseURL(url),
            fn: fn
        }), this;
    }
    function parseURL(url) {
        var parsedUrl = {};
        return parsedUrl.parts = url.split("/"), parsedUrl.length = parsedUrl.parts.length, 
        parsedUrl.params = {}, parsedUrl.paramsCount = 0, "" !== parsedUrl.parts[0] && "#" !== parsedUrl.parts[0] || (parsedUrl.parts.shift(), 
        parsedUrl.length -= 1), parsedUrl;
    }
    function checkParsedUrl(parsedUrl) {
        if (null === cache.currUrl && (cache.currUrl = parseURL(window.location.hash)), 
        parsedUrl.length !== cache.currUrl.length) return !1;
        for (var i = 0; i < parsedUrl.length; i++) {
            var part1 = parsedUrl.parts[i], part2 = cache.currUrl.parts[i];
            if (part1 !== part2 && ":" !== part1[0]) return !1;
            ":" === part1[0] && (parsedUrl.params[part1.replace(":", "")] = part2, parsedUrl.paramsCount += 1);
        }
        return parsedUrl;
    }
    function checkRoute() {
        for (var match = !1, parsedURLs = [], i = 0; i < mappedRoutes.length; i++) {
            var mappedRoute = mappedRoutes[i], parsedURL = checkParsedUrl(mappedRoute.url);
            parsedURL !== !1 && (match = !0, parsedURLs.push({
                fn: mappedRoute.fn,
                params: parsedURL.params,
                paramsCount: parsedURL.paramsCount
            }));
        }
        return match ? exeFoundedRoutes(parsedURLs) : exeDefaultRoute(), cache.currUrl = null, 
        this;
    }
    function exeDefaultRoute() {
        defaultRoute();
    }
    function exeFoundedRoutes(parsedURLs) {
        if (settings.strict !== !1 && parsedURLs.length > 1) {
            var minCount = 0, hits = parsedURLs.sort(function(a, b) {
                var aSmaller = a.paramsCount < b.paramsCount;
                return minCount = aSmaller ? a.paramsCount : b.paramsCount, aSmaller;
            }).filter(function(a) {
                return a.paramsCount <= minCount;
            });
            parsedURLs = hits;
        }
        for (var j = 0; j < parsedURLs.length; j++) {
            var item = parsedURLs[j];
            item.fn(item.params);
        }
    }
    var settings = {
        strict: !1
    }, cache = {
        currUrl: null
    }, mappedRoutes = [], defaultRoute = function() {
        console.warn("WARNING: No deafult route defined!");
    };
    return function() {
        window.addEventListener ? (window.addEventListener("hashchange", checkRoute, !1), 
        window.addEventListener("load", checkRoute, !1)) : (window.attachEvent("onhashchange", checkRoute), 
        window.attachEvent("onload", checkRoute));
    }(), {
        settings: settings,
        checkRoute: checkRoute,
        when: addRoute,
        otherwise: setDefaultRoute
    };
}(), xmlData = function() {
    "use strict";
    function getXML() {
        if (null !== cache.parsedXML) return cache.parsedXML;
        throw Error("no XML in chache!");
    }
    
    /**
     * 
     * @param {type} file
     * @callback {function} cb
     * @returns {undefined}
     */
    function loadXML(file, cb) {
        if ("function" == typeof file ? (cb = file, file = cache.filePath) : cache.filePath = file, 
        null === file) throw Error("no file found!");
        cache.filePath === file && null !== cache.parsedXML ? cb(getXML()) : $.get(file + "?v=" + Math.random(), function(data) {
            console.info("new data"), cache.parsedXML = parseXML(data), cb(cache.parsedXML);
        });
    }
    function reloadXML(cb) {
        cache.parsedXML = null, loadXML(cb);
    }
    function parseXML(xml) {
        var cats = $.map($(xml).find("qcategory"), function(item) {
            var category = new Category();
            category.name = $(item).attr("name"), category.uri = $(item).attr("uri"), category.catTag = $(item).attr("uri").slice($(item).attr("uri").lastIndexOf("/") + 1, $(item).attr("uri").length), 
            category.questions = $.map($(item).find("qcatquestiontxt"), function(i) {
                console.log(i);
                var question = new Question();
                question.category = category;
            });
        });
        console.info(cats), console.info($(xml).find("qcategory").toArray());
    }
    var cache = {
        parsedXML: null,
        filePath: null
    };
    return {
        getData: getXML,
        loadData: loadXML,
        reloadData: reloadXML
    };
}();

$(function() {
    console = logger;
    var data = xmlData;
    data.loadData("xml/fragen.xml", function(qa_Manager) {
        console.info(qa_Manager);
    });
});