export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 17,
            "column": 6
          },
          "end": {
            "line": 19,
            "column": 6
          }
        },
        "moduleName": "run-timer/templates/new-run.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"type","button");
        var el2 = dom.createTextNode("Cancel");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.6.2",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 24,
          "column": 0
        }
      },
      "moduleName": "run-timer/templates/new-run.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","app");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h1");
      dom.setAttribute(el2,"class","app-title");
      var el3 = dom.createTextNode("New Run");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      dom.setAttribute(el1,"class","app-list");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","app-list__item");
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","app-list__item");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","app-list__item");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","app-list__item");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("button");
      var el5 = dom.createTextNode("Save");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2, 1]);
      var morphs = new Array(5);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
      morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]),1,1);
      return morphs;
    },
    statements: [
      ["element","action",["newRun"],["on","submit"],["loc",[null,[5,8],[5,39]]]],
      ["inline","input",[],["type","text","class","app-list__item text-input","value",["subexpr","@mut",[["get","runTime",["loc",[null,[8,66],[8,73]]]]],[],[]],"placeholder","Run Time"],["loc",[null,[8,6],[8,98]]]],
      ["inline","input",[],["type","text","class","app-list__item text-input","value",["subexpr","@mut",[["get","runDate",["loc",[null,[11,66],[11,73]]]]],[],[]],"placeholder","Run Date"],["loc",[null,[11,6],[11,98]]]],
      ["inline","input",[],["type","text","class","app-list__item notes text-input","value",["subexpr","@mut",[["get","runNotes",["loc",[null,[14,72],[14,80]]]]],[],[]],"placeholder","Run Notes"],["loc",[null,[14,6],[14,106]]]],
      ["block","link-to",["index"],[],0,null,["loc",[null,[17,6],[19,18]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));