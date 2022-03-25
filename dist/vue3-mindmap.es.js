import { ref, computed, defineComponent, useCssModule, reactive, nextTick, withDirectives, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, Fragment, renderList, toDisplayString, vShow, watchEffect, onMounted, watch, resolveComponent, createCommentVNode, createBlock } from "vue";
var selection = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get svg() {
    return svg;
  },
  get g() {
    return g;
  },
  get asstSvg() {
    return asstSvg;
  },
  get foreign() {
    return foreign;
  }
}, Symbol.toStringTag, { value: "Module" }));
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e2) {
    var i = n.get(t);
    i && i.push(e2) || n.set(t, [e2]);
  }, off: function(t, e2) {
    var i = n.get(t);
    i && i.splice(i.indexOf(e2) >>> 0, 1);
  }, emit: function(t, e2) {
    (n.get(t) || []).slice().map(function(n2) {
      n2(e2);
    }), (n.get("*") || []).slice().map(function(n2) {
      n2(t, e2);
    });
  } };
}
const emitter = mitt();
const container$1 = "Mindmap_container_fgvb6";
const svg$1 = "Mindmap_svg_fgvb6";
const trigger = "Mindmap_trigger_fgvb6";
const dragging = "Mindmap_dragging_fgvb6";
const hidden = "Mindmap_hidden_fgvb6";
const text = "Mindmap_text_fgvb6";
const selected = "Mindmap_selected_fgvb6";
const content$1 = "Mindmap_content_fgvb6";
const root$1 = "Mindmap_root_fgvb6";
const edited = "Mindmap_edited_fgvb6";
const outline = "Mindmap_outline_fgvb6";
const collapse$1 = "Mindmap_collapse_fgvb6";
const disabled$1 = "Mindmap_disabled_fgvb6";
const gps = "Mindmap_gps_fgvb6";
const fit = "Mindmap_fit_fgvb6";
const download$1 = "Mindmap_download_fgvb6";
const prev$1 = "Mindmap_prev_fgvb6";
const next$1 = "Mindmap_next_fgvb6";
const close = "Mindmap_close_fgvb6";
var style = {
  container: container$1,
  "svg-wrapper": "Mindmap_svg-wrapper_fgvb6",
  "asst-svg": "Mindmap_asst-svg_fgvb6",
  svg: svg$1,
  trigger,
  dragging,
  "add-btn": "Mindmap_add-btn_fgvb6",
  hidden,
  "expand-btn": "Mindmap_expand-btn_fgvb6",
  text,
  selected,
  content: content$1,
  root: root$1,
  edited,
  outline,
  collapse: collapse$1,
  "button-list": "Mindmap_button-list_fgvb6",
  "right-bottom": "Mindmap_right-bottom_fgvb6",
  "right-top": "Mindmap_right-top_fgvb6",
  disabled: disabled$1,
  gps,
  fit,
  download: download$1,
  prev: prev$1,
  next: next$1,
  close
};
const pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function Path() {
  this._x0 = this._y0 = this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path();
}
Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x2, y2) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x2, y2) {
    this._ += "L" + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  quadraticCurveTo: function(x1, y1, x2, y2) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else if (!(l01_2 > epsilon))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else {
      var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }
      this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }
    if (!r)
      return;
    if (da < 0)
      da = da % tau + tau;
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x2 - dx) + "," + (y2 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x2 + r * Math.cos(a1)) + "," + (this._y1 = y2 + r * Math.sin(a1));
    }
  },
  rect: function(x2, y2, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function() {
    return this._;
  }
};
function constant$4(x2) {
  return function constant2() {
    return x2;
  };
}
var slice = Array.prototype.slice;
function array$1(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function curveLinear(context) {
  return new Linear(context);
}
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}
function line(x$1, y$1) {
  var defined = constant$4(true), context = null, curve = curveLinear, output2 = null;
  x$1 = typeof x$1 === "function" ? x$1 : x$1 === void 0 ? x : constant$4(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : y$1 === void 0 ? y : constant$4(y$1);
  function line2(data) {
    var i, n = (data = array$1(data)).length, d, defined0 = false, buffer;
    if (context == null)
      output2 = curve(buffer = path());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0)
          output2.lineStart();
        else
          output2.lineEnd();
      }
      if (defined0)
        output2.point(+x$1(d, i, data), +y$1(d, i, data));
    }
    if (buffer)
      return output2 = null, buffer + "" || null;
  }
  line2.x = function(_23) {
    return arguments.length ? (x$1 = typeof _23 === "function" ? _23 : constant$4(+_23), line2) : x$1;
  };
  line2.y = function(_23) {
    return arguments.length ? (y$1 = typeof _23 === "function" ? _23 : constant$4(+_23), line2) : y$1;
  };
  line2.defined = function(_23) {
    return arguments.length ? (defined = typeof _23 === "function" ? _23 : constant$4(!!_23), line2) : defined;
  };
  line2.curve = function(_23) {
    return arguments.length ? (curve = _23, context != null && (output2 = curve(context)), line2) : curve;
  };
  line2.context = function(_23) {
    return arguments.length ? (_23 == null ? context = output2 = null : output2 = curve(context = _23), line2) : context;
  };
  return line2;
}
function linkSource(d) {
  return d.source;
}
function linkTarget(d) {
  return d.target;
}
function link$1(curve) {
  var source = linkSource, target = linkTarget, x$1 = x, y$1 = y, context = null;
  function link2() {
    var buffer, argv = slice.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context)
      context = buffer = path();
    curve(context, +x$1.apply(this, (argv[0] = s, argv)), +y$1.apply(this, argv), +x$1.apply(this, (argv[0] = t, argv)), +y$1.apply(this, argv));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  link2.source = function(_23) {
    return arguments.length ? (source = _23, link2) : source;
  };
  link2.target = function(_23) {
    return arguments.length ? (target = _23, link2) : target;
  };
  link2.x = function(_23) {
    return arguments.length ? (x$1 = typeof _23 === "function" ? _23 : constant$4(+_23), link2) : x$1;
  };
  link2.y = function(_23) {
    return arguments.length ? (y$1 = typeof _23 === "function" ? _23 : constant$4(+_23), link2) : y$1;
  };
  link2.context = function(_23) {
    return arguments.length ? (context = _23 == null ? null : _23, link2) : context;
  };
  return link2;
}
function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}
function linkHorizontal$1() {
  return link$1(curveHorizontal);
}
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};
function step(context) {
  return new Step(context, 0.5);
}
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var exponent = 3;
var polyOut = function custom(e2) {
  e2 = +e2;
  function polyOut2(t) {
    return 1 - Math.pow(1 - t, e2);
  }
  polyOut2.exponent = custom;
  return polyOut2;
}(exponent);
var noop$1 = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _23 = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _23 || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _23[t] = [];
  }
  return new Dispatch(_23);
}
function Dispatch(_23) {
  this._ = _23;
}
function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _23 = this._, T2 = parseTypenames$1(typename + "", _23), t, i = -1, n = T2.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T2[i]).type) && (t = get$2(_23[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T2[i]).type)
        _23[t] = set$1(_23[t], typename.name, callback);
      else if (callback == null)
        for (t in _23)
          _23[t] = set$1(_23[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy2 = {}, _23 = this._;
    for (var t in _23)
      copy2[t] = _23[t].slice();
    return new Dispatch(copy2);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get$2(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type.push({ name, value: callback });
  return type;
}
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator(name) {
  var fullname = namespace(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {
}
function selector(selector2) {
  return selector2 == null ? none : function() {
    return this.querySelector(selector2);
  };
}
function selection_select(select2) {
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function array(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}
function empty() {
  return [];
}
function selectorAll(selector2) {
  return selector2 == null ? empty : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll(select2) {
  return function() {
    var group = select2.apply(this, arguments);
    return group == null ? [] : array(group);
  };
}
function selection_selectAll(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll(select2);
  else
    select2 = selectorAll(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select2.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection$1(subgroups, parents);
}
function matcher(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher(selector2) {
  return function(node) {
    return node.matches(selector2);
  };
}
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selection_selectChild(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
  return this.children;
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selection_selectChildren(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function sparse(update) {
  return new Array(update.length);
}
function selection_enter() {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next2) {
    return this._parent.insertBefore(child, next2);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$3(x2) {
  return function() {
    return x2;
  };
}
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function selection_data(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant$3(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = array(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next2; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next2 = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next2 || null;
      }
    }
  }
  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function selection_exit() {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null)
    update = onupdate(update);
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(selection2) {
  if (!(selection2 instanceof Selection$1))
    throw new Error("invalid merge");
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection$1(merges, this._parents);
}
function selection_order() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next2 = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next2 && node.compareDocumentPosition(next2) ^ 4)
          next2.parentNode.insertBefore(node, next2);
        next2 = node;
      }
    }
  }
  return this;
}
function selection_sort(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a2, b) {
    return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}
function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes() {
  return Array.from(this);
}
function selection_node() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}
function selection_size() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}
function selection_empty() {
  return !this.node();
}
function selection_each(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS$1(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function selection_attr(name, value) {
  var fullname = namespace(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function defaultView(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction$1(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function selection_style(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function selection_property(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function selection_classed(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function textRemove() {
  this.textContent = "";
}
function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function selection_text(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function selection_html(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise() {
  return this.each(raise);
}
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
  return this.each(lower);
}
function selection_append(name) {
  var create2 = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull() {
  return null;
}
function selection_insert(name, before) {
  var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove$1() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove() {
  return this.each(remove$1);
}
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function selection_on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}
function dispatchEvent(node, type, params) {
  var window2 = defaultView(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        yield node;
    }
  }
}
var root = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection$1() {
  return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection$1.prototype = selection$1.prototype = {
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};
function select(selector2) {
  return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root);
}
function sourceEvent(event) {
  let sourceEvent2;
  while (sourceEvent2 = event.sourceEvent)
    event = sourceEvent2;
  return event;
}
function pointer(event, node) {
  event = sourceEvent(event);
  if (node === void 0)
    node = event.currentTarget;
  if (node) {
    var svg2 = node.ownerSVGElement || node;
    if (svg2.createSVGPoint) {
      var point = svg2.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}
function nopropagation$1(event) {
  event.stopImmediatePropagation();
}
function noevent$1(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function dragDisable(view) {
  var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", noevent$1, true);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent$1, true);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent$1, true);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
var constant$2 = (x2) => () => x2;
function DragEvent(type, {
  sourceEvent: sourceEvent2,
  subject,
  target,
  identifier,
  active,
  x: x2,
  y: y2,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x2, enumerable: true, configurable: true },
    y: { value: y2, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};
function defaultFilter$1(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable$1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag$1() {
  var filter2 = defaultFilter$1, container2 = defaultContainer, subject = defaultSubject, touchable = defaultTouchable$1, gestures = {}, listeners = dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag2(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d))
      return;
    var gesture = beforestart(this, container2.call(this, event, d), event, d, "mouse");
    if (!gesture)
      return;
    select(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    dragDisable(event.view);
    nopropagation$1(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent$1(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent$1(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d))
      return;
    var touches = event.changedTouches, c = container2.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation$1(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent$1(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation$1(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container3, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer(touch || event, container3), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag2,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null)
      return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer(touch2 || event2, container3), n = active;
          break;
      }
      dispatch2.call(type, that, new DragEvent(type, {
        sourceEvent: event2,
        subject: s,
        target: drag2,
        identifier,
        active: n,
        x: p[0] + dx,
        y: p[1] + dy,
        dx: p[0] - p0[0],
        dy: p[1] - p0[1],
        dispatch: dispatch2
      }), d);
    };
  }
  drag2.filter = function(_23) {
    return arguments.length ? (filter2 = typeof _23 === "function" ? _23 : constant$2(!!_23), drag2) : filter2;
  };
  drag2.container = function(_23) {
    return arguments.length ? (container2 = typeof _23 === "function" ? _23 : constant$2(_23), drag2) : container2;
  };
  drag2.subject = function(_23) {
    return arguments.length ? (subject = typeof _23 === "function" ? _23 : constant$2(_23), drag2) : subject;
  };
  drag2.touchable = function(_23) {
    return arguments.length ? (touchable = typeof _23 === "function" ? _23 : constant$2(!!_23), drag2) : touchable;
  };
  drag2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag2 : value;
  };
  drag2.clickDistance = function(_23) {
    return arguments.length ? (clickDistance2 = (_23 = +_23) * _23, drag2) : Math.sqrt(clickDistance2);
  };
  return drag2;
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color$2, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color$2(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g2, b, a2) {
  if (a2 <= 0)
    r = g2 = b = NaN;
  return new Rgb(r, g2, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color$2(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb$1(r, g2, b, opacity2) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g2, b, opacity2 == null ? 1 : opacity2);
}
function Rgb(r, g2, b, opacity2) {
  this.r = +r;
  this.g = +g2;
  this.b = +b;
  this.opacity = +opacity2;
}
define(Rgb, rgb$1, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a2 = this.opacity;
  a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
  return (a2 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a2 === 1 ? ")" : ", " + a2 + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a2) {
  if (a2 <= 0)
    h = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s = NaN;
  else if (s <= 0)
    h = NaN;
  return new Hsl(h, s, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color$2(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g2 = o.g / 255, b = o.b / 255, min = Math.min(r, g2, b), max = Math.max(r, g2, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max)
      h = (g2 - b) / s + (g2 < b) * 6;
    else if (g2 === max)
      h = (b - r) / s + 2;
    else
      h = (r - g2) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl$1(h, s, l, opacity2) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity2 == null ? 1 : opacity2);
}
function Hsl(h, s, l, opacity2) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity2;
}
define(Hsl, hsl$1, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a2 = this.opacity;
    a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
    return (a2 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a2 === 1 ? ")" : ", " + a2 + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
var constant$1 = (x2) => () => x2;
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y2) {
  return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t) {
    return Math.pow(a2 + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y2) : constant$1(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant$1(isNaN(a2) ? b : a2);
}
var interpolateRgb = function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb$1(start2)).r, (end = rgb$1(end)).r), g2 = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity2 = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g2(t);
      start2.b = b(t);
      start2.opacity = opacity2(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function numberArray(a2, b) {
  if (!b)
    b = [];
  var n = a2 ? Math.min(b.length, a2.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c[i] = a2[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}
function genericArray(a2, b) {
  var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x2 = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x2[i] = interpolate$1(a2[i], b[i]);
  for (; i < nb; ++i)
    c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c[i] = x2[i](t);
    return c;
  };
}
function date(a2, b) {
  var d = new Date();
  return a2 = +a2, b = +b, function(t) {
    return d.setTime(a2 * (1 - t) + b * t), d;
  };
}
function interpolateNumber(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}
function object(a2, b) {
  var i = {}, c = {}, k;
  if (a2 === null || typeof a2 !== "object")
    a2 = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a2) {
      i[k] = interpolate$1(a2[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i)
      c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate$1(a2, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$1(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color$2(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color$2 ? interpolateRgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a2, b);
}
var degrees = 180 / Math.PI;
var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose(a2, b, c, d, e2, f2) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a2 * a2 + b * b))
    a2 /= scaleX, b /= scaleX;
  if (skewX = a2 * c + b * d)
    c -= a2 * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d))
    c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a2 * d < b * c)
    a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e2,
    translateY: f2,
    rotate: Math.atan2(b, a2) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null)
    return identity$1;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform(parse2, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a2, b, s, q) {
    if (a2 !== b) {
      if (a2 - b > 180)
        b += 360;
      else if (b - a2 > 180)
        a2 += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a2, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a2, b, s, q) {
    if (a2 !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a2, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a2, b) {
    var s = [], q = [];
    a2 = parse2(a2), b = parse2(b);
    translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s, q);
    rotate(a2.rotate, b.rotate, s, q);
    skewX(a2.skewX, b.skewX, s, q);
    scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s, q);
    a2 = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var epsilon2 = 1e-12;
function cosh(x2) {
  return ((x2 = Math.exp(x2)) + 1 / x2) / 2;
}
function sinh(x2) {
  return ((x2 = Math.exp(x2)) - 1 / x2) / 2;
}
function tanh(x2) {
  return ((x2 = Math.exp(2 * x2)) - 1) / (x2 + 1);
}
var interpolateZoom = function zoomRho(rho, rho2, rho4) {
  function zoom2(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u2 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u2 * dx,
          uy0 + u2 * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom2.rho = function(_23) {
    var _1 = Math.max(1e-3, +_23), _24 = _1 * _1, _42 = _24 * _24;
    return zoomRho(_1, _24, _42);
  };
  return zoom2;
}(Math.SQRT2, 2, 4);
var frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f2) {
  setTimeout(f2, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time2) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time2;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time2) {
  var t = new Timer();
  t.restart(callback, delay, time2);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e2;
  while (t) {
    if ((e2 = clockNow - t._time) >= 0)
      t._call.call(null, e2);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time2 = Infinity;
  while (t1) {
    if (t1._call) {
      if (time2 > t1._time)
        time2 = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time2);
}
function sleep(time2) {
  if (frame)
    return;
  if (timeout$1)
    timeout$1 = clearTimeout(timeout$1);
  var delay = time2 - clockNow;
  if (delay > 24) {
    if (time2 < Infinity)
      timeout$1 = setTimeout(wake, time2 - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
function timeout(callback, delay, time2) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time2);
  return t;
}
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index,
    group,
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule2 = get$1(node, id2);
  if (schedule2.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule2;
}
function set(node, id2) {
  var schedule2 = get$1(node, id2);
  if (schedule2.state > STARTED)
    throw new Error("too late; already running");
  return schedule2;
}
function get$1(node, id2) {
  var schedule2 = node.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2]))
    throw new Error("transition not found");
  return schedule2;
}
function create(node, id2, self2) {
  var schedules = node.__transition, tween;
  schedules[id2] = self2;
  self2.timer = timer(schedule2, 0, self2.time);
  function schedule2(elapsed) {
    self2.state = SCHEDULED;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed)
      start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self2.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self2.name)
        continue;
      if (o.state === STARTED)
        return timeout(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout(function() {
      if (self2.state === STARTED) {
        self2.state = RUNNING;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING;
    self2.on.call("start", node, node.__data__, self2.index, self2.group);
    if (self2.state !== STARTING)
      return;
    self2.state = STARTED;
    tween = new Array(n = self2.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self2.tween[i].value.call(node, node.__data__, self2.index, self2.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self2.state === ENDING) {
      self2.on.call("end", node, node.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED;
    self2.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}
function interrupt(node, name) {
  var schedules = node.__transition, schedule2, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule2.state > STARTING && schedule2.state < ENDING;
    schedule2.state = ENDED;
    schedule2.timer.stop();
    schedule2.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2)
    delete node.__transition;
}
function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get$1(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule2 = set(this, id2);
    (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get$1(node, id2).value[name];
  };
}
function interpolate(a2, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber : b instanceof color$2 ? interpolateRgb : (c = color$2(b)) ? (b = c, interpolateRgb) : interpolateString)(a2, b);
}
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function transition_delay(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get$1(this.node(), id2).delay;
}
function durationFunction(id2, value) {
  return function() {
    set(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set(this, id2).duration = value;
  };
}
function transition_duration(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get$1(this.node(), id2).duration;
}
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set(this, id2).ease = value;
  };
}
function transition_ease(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get$1(this.node(), id2).ease;
}
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function")
      throw new Error();
    set(this, id2).ease = v;
  };
}
function transition_easeVarying(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}
function transition_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule2 = sit(this, id2), on = schedule2.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule2.on = on1;
  };
}
function transition_on(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get$1(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id2, i, subgroup, get$1(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
function transition_selectAll(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selectorAll(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select2.call(node, node.__data__, i, group), child, inherit2 = get$1(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
var Selection = selection$1.prototype.constructor;
function transition_selection() {
  return new Selection(this._groups, this._parents);
}
function styleNull(name, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule2 = set(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text(value) {
  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}
function transition_transition() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get$1(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}
function transition_end() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule2 = set(this, id2), on = schedule2.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size === 0)
      resolve();
  });
}
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection$1().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection$1.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
var defaultTiming = {
  time: null,
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}
selection$1.prototype.interrupt = selection_interrupt;
selection$1.prototype.transition = selection_transition;
var constant = (x2) => () => x2;
function ZoomEvent(type, {
  sourceEvent: sourceEvent2,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
function Transform(k, x2, y2) {
  this.k = k;
  this.x = x2;
  this.y = y2;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x2, y2) {
    return x2 === 0 & y2 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y2);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x2) {
    return x2 * this.k + this.x;
  },
  applyY: function(y2) {
    return y2 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x2) {
    return (x2 - this.x) / this.k;
  },
  invertY: function(y2) {
    return (y2 - this.y) / this.k;
  },
  rescaleX: function(x2) {
    return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
  },
  rescaleY: function(y2) {
    return y2.copy().domain(y2.range().map(this.invertY, this).map(y2.invert, y2));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity = new Transform(1, 0, 0);
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e2 = this;
  if (e2 instanceof SVGElement) {
    e2 = e2.ownerSVGElement || e2;
    if (e2.hasAttribute("viewBox")) {
      e2 = e2.viewBox.baseVal;
      return [[e2.x, e2.y], [e2.x + e2.width, e2.y + e2.height]];
    }
    return [[0, 0], [e2.width.baseVal.value, e2.height.baseVal.value]];
  }
  return [[0, 0], [e2.clientWidth, e2.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function zoom$1() {
  var filter2 = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent2 = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration2 = 250, interpolate2 = interpolateZoom, listeners = dispatch("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom2(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom2.transform = function(collection, transform2, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule2(collection, transform2, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom2.scaleBy = function(selection2, k, p, event) {
    zoom2.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom2.scaleTo = function(selection2, k, p, event) {
    zoom2.transform(selection2, function() {
      var e2 = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e2) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e2, translateExtent);
    }, p, event);
  };
  zoom2.translateBy = function(selection2, x2, y2, event) {
    zoom2.transform(selection2, function() {
      return constrain(this.__zoom.translate(typeof x2 === "function" ? x2.apply(this, arguments) : x2, typeof y2 === "function" ? y2.apply(this, arguments) : y2), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom2.translateTo = function(selection2, x2, y2, p, event) {
    zoom2.transform(selection2, function() {
      var e2 = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e2) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x2 === "function" ? -x2.apply(this, arguments) : -x2, typeof y2 === "function" ? -y2.apply(this, arguments) : -y2), e2, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent2[0], Math.min(scaleExtent2[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x2 = p0[0] - p1[0] * transform2.k, y2 = p0[1] - p1[1] * transform2.k;
    return x2 === transform2.x && y2 === transform2.y ? transform2 : new Transform(transform2.k, x2, y2);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule2(transition2, transform2, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g2 = gesture(that, args).event(event), e2 = extent.apply(that, args), p = point == null ? centroid(e2) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e2[1][0] - e2[0][0], e2[1][1] - e2[0][1]), a2 = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate2(a2.invert(p).concat(w / a2.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1)
          t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g2.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event)
        this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse")
        this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch")
        this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch")
        this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(type, this.that, new ZoomEvent(type, {
        sourceEvent: this.sourceEvent,
        target: zoom2,
        type,
        transform: this.that.__zoom,
        dispatch: listeners
      }), d);
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var g2 = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent2[0], Math.min(scaleExtent2[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer(event);
    if (g2.wheel) {
      if (g2.mouse[0][0] !== p[0] || g2.mouse[0][1] !== p[1]) {
        g2.mouse[1] = t.invert(g2.mouse[0] = p);
      }
      clearTimeout(g2.wheel);
    } else if (t.k === k)
      return;
    else {
      g2.mouse = [p, t.invert(p)];
      interrupt(this);
      g2.start();
    }
    noevent(event);
    g2.wheel = setTimeout(wheelidled, wheelDelay);
    g2.zoom("mouse", constrain(translate(scale(t, k), g2.mouse[0], g2.mouse[1]), g2.extent, translateExtent));
    function wheelidled() {
      g2.wheel = null;
      g2.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments))
      return;
    var g2 = gesture(this, args, true).event(event), v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer(event, currentTarget), currentTarget = event.currentTarget, x0 = event.clientX, y0 = event.clientY;
    dragDisable(event.view);
    nopropagation(event);
    g2.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g2.start();
    function mousemoved(event2) {
      noevent(event2);
      if (!g2.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g2.moved = dx * dx + dy * dy > clickDistance2;
      }
      g2.event(event2).zoom("mouse", constrain(translate(g2.that.__zoom, g2.mouse[0] = pointer(event2, currentTarget), g2.mouse[1]), g2.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g2.moved);
      noevent(event2);
      g2.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var t0 = this.__zoom, p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent(event);
    if (duration2 > 0)
      select(this).transition().duration(duration2).call(schedule2, t1, p0, event);
    else
      select(this).call(zoom2.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var touches = event.touches, n = touches.length, g2 = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g2.touch0)
        g2.touch0 = p, started = true, g2.taps = 1 + !!touchstarting;
      else if (!g2.touch1 && g2.touch0[2] !== p[2])
        g2.touch1 = p, g2.taps = 0;
    }
    if (touchstarting)
      touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g2.taps < 2)
        touchfirst = p[0], touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
      interrupt(this);
      g2.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming)
      return;
    var g2 = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g2.touch0 && g2.touch0[2] === t.identifier)
        g2.touch0[0] = p;
      else if (g2.touch1 && g2.touch1[2] === t.identifier)
        g2.touch1[0] = p;
    }
    t = g2.that.__zoom;
    if (g2.touch1) {
      var p0 = g2.touch0[0], l0 = g2.touch0[1], p1 = g2.touch1[0], l1 = g2.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g2.touch0)
      p = g2.touch0[0], l = g2.touch0[1];
    else
      return;
    g2.zoom("touch", constrain(translate(t, p, l), g2.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming)
      return;
    var g2 = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation(event);
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g2.touch0 && g2.touch0[2] === t.identifier)
        delete g2.touch0;
      else if (g2.touch1 && g2.touch1[2] === t.identifier)
        delete g2.touch1;
    }
    if (g2.touch1 && !g2.touch0)
      g2.touch0 = g2.touch1, delete g2.touch1;
    if (g2.touch0)
      g2.touch0[1] = this.__zoom.invert(g2.touch0[0]);
    else {
      g2.end();
      if (g2.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p)
            p.apply(this, arguments);
        }
      }
    }
  }
  zoom2.wheelDelta = function(_23) {
    return arguments.length ? (wheelDelta = typeof _23 === "function" ? _23 : constant(+_23), zoom2) : wheelDelta;
  };
  zoom2.filter = function(_23) {
    return arguments.length ? (filter2 = typeof _23 === "function" ? _23 : constant(!!_23), zoom2) : filter2;
  };
  zoom2.touchable = function(_23) {
    return arguments.length ? (touchable = typeof _23 === "function" ? _23 : constant(!!_23), zoom2) : touchable;
  };
  zoom2.extent = function(_23) {
    return arguments.length ? (extent = typeof _23 === "function" ? _23 : constant([[+_23[0][0], +_23[0][1]], [+_23[1][0], +_23[1][1]]]), zoom2) : extent;
  };
  zoom2.scaleExtent = function(_23) {
    return arguments.length ? (scaleExtent2[0] = +_23[0], scaleExtent2[1] = +_23[1], zoom2) : [scaleExtent2[0], scaleExtent2[1]];
  };
  zoom2.translateExtent = function(_23) {
    return arguments.length ? (translateExtent[0][0] = +_23[0][0], translateExtent[1][0] = +_23[1][0], translateExtent[0][1] = +_23[0][1], translateExtent[1][1] = +_23[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom2.constrain = function(_23) {
    return arguments.length ? (constrain = _23, zoom2) : constrain;
  };
  zoom2.duration = function(_23) {
    return arguments.length ? (duration2 = +_23, zoom2) : duration2;
  };
  zoom2.interpolate = function(_23) {
    return arguments.length ? (interpolate2 = _23, zoom2) : interpolate2;
  };
  zoom2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom2 : value;
  };
  zoom2.clickDistance = function(_23) {
    return arguments.length ? (clickDistance2 = (_23 = +_23) * _23, zoom2) : Math.sqrt(clickDistance2);
  };
  zoom2.tapDistance = function(_23) {
    return arguments.length ? (tapDistance = +_23, zoom2) : tapDistance;
  };
  return zoom2;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash_clonedeep = { exports: {} };
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", promiseTag = "[object Promise]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reFlags = /\w*$/;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root2 = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  function addMapEntry(map, pair) {
    map.set(pair[0], pair[1]);
    return map;
  }
  function addSetEntry(set2, value) {
    set2.add(value);
    return set2;
  }
  function arrayEach(array2, iteratee) {
    var index = -1, length = array2 ? array2.length : 0;
    while (++index < length) {
      if (iteratee(array2[index], index, array2) === false) {
        break;
      }
    }
    return array2;
  }
  function arrayPush(array2, values) {
    var index = -1, length = values.length, offset = array2.length;
    while (++index < length) {
      array2[offset + index] = values[index];
    }
    return array2;
  }
  function arrayReduce(array2, iteratee, accumulator, initAccum) {
    var index = -1, length = array2 ? array2.length : 0;
    if (initAccum && length) {
      accumulator = array2[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array2[index], index, array2);
    }
    return accumulator;
  }
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function getValue(object2, key) {
    return object2 == null ? void 0 : object2[key];
  }
  function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != "function") {
      try {
        result = !!(value + "");
      } catch (e2) {
      }
    }
    return result;
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func, transform2) {
    return function(arg) {
      return func(transform2(arg));
    };
  }
  function setToArray(set2) {
    var index = -1, result = Array(set2.size);
    set2.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root2["__core-js_shared__"];
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Buffer = moduleExports ? root2.Buffer : void 0, Symbol2 = root2.Symbol, Uint8Array2 = root2.Uint8Array, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView2 = getNative(root2, "DataView"), Map2 = getNative(root2, "Map"), Promise2 = getNative(root2, "Promise"), Set = getNative(root2, "Set"), WeakMap = getNative(root2, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    return getMapData(this, key)["delete"](key);
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack(entries) {
    this.__data__ = new ListCache(entries);
  }
  function stackClear() {
    this.__data__ = new ListCache();
  }
  function stackDelete(key) {
    return this.__data__["delete"](key);
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        return this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value);
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignValue(object2, key, value) {
    var objValue = object2[key];
    if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
      object2[key] = value;
    }
  }
  function assocIndexOf(array2, key) {
    var length = array2.length;
    while (length--) {
      if (eq(array2[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseAssign(object2, source) {
    return object2 && copyObject(source, keys(source), object2);
  }
  function baseClone(value, isDeep, isFull, customizer, key, object2, stack) {
    var result;
    if (customizer) {
      result = object2 ? customizer(value, key, object2, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object2) {
        if (isHostObject(value)) {
          return object2 ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object2 ? value : {};
        }
        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
    });
    return result;
  }
  function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  }
  function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
    var result = keysFunc(object2);
    return isArray(object2) ? result : arrayPush(result, symbolsFunc(object2));
  }
  function baseGetTag(value) {
    return objectToString.call(value);
  }
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseKeys(object2) {
    if (!isPrototype(object2)) {
      return nativeKeys(object2);
    }
    var result = [];
    for (var key in Object(object2)) {
      if (hasOwnProperty.call(object2, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
    return result;
  }
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  function cloneMap(map, isDeep, cloneFunc) {
    var array2 = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array2, addMapEntry, new map.constructor());
  }
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  function cloneSet(set2, isDeep, cloneFunc) {
    var array2 = isDeep ? cloneFunc(setToArray(set2), true) : setToArray(set2);
    return arrayReduce(array2, addSetEntry, new set2.constructor());
  }
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array2) {
    var index = -1, length = source.length;
    array2 || (array2 = Array(length));
    while (++index < length) {
      array2[index] = source[index];
    }
    return array2;
  }
  function copyObject(source, props, object2, customizer) {
    object2 || (object2 = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
      assignValue(object2, key, newValue === void 0 ? source[key] : newValue);
    }
    return object2;
  }
  function copySymbols(source, object2) {
    return copyObject(source, getSymbols(source), object2);
  }
  function getAllKeys(object2) {
    return baseGetAllKeys(object2, keys, getSymbols);
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object2, key) {
    var value = getValue(object2, key);
    return baseIsNative(value) ? value : void 0;
  }
  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
  var getTag = baseGetTag;
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function(value) {
      var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function initCloneArray(array2) {
    var length = array2.length, result = array2.constructor(length);
    if (length && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
      result.index = array2.index;
      result.input = array2.input;
    }
    return result;
  }
  function initCloneObject(object2) {
    return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
  }
  function initCloneByTag(object2, tag, cloneFunc, isDeep) {
    var Ctor = object2.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object2);
      case boolTag:
      case dateTag:
        return new Ctor(+object2);
      case dataViewTag:
        return cloneDataView(object2, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object2, isDeep);
      case mapTag:
        return cloneMap(object2, isDeep, cloneFunc);
      case numberTag:
      case stringTag:
        return new Ctor(object2);
      case regexpTag:
        return cloneRegExp(object2);
      case setTag:
        return cloneSet(object2, isDeep, cloneFunc);
      case symbolTag:
        return cloneSymbol(object2);
    }
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  function cloneDeep2(value) {
    return baseClone(value, true, true);
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
  }
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength2(value.length) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
  }
  function isLength2(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function keys(object2) {
    return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module.exports = cloneDeep2;
})(lodash_clonedeep, lodash_clonedeep.exports);
var cloneDeep = lodash_clonedeep.exports;
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step2(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step2(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step2(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step2((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _23 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y2, t, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n) {
    return function(v) {
      return step2([n, v]);
    };
  }
  function step2(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_23)
      try {
        if (f2 = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
          return t;
        if (y2 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _23.label++;
            return { value: op[1], done: false };
          case 5:
            _23.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _23.ops.pop();
            _23.trys.pop();
            continue;
          default:
            if (!(t = _23.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _23 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _23.label = op[1];
              break;
            }
            if (op[0] === 6 && _23.label < t[1]) {
              _23.label = t[1];
              t = op;
              break;
            }
            if (t && _23.label < t[2]) {
              _23.label = t[2];
              _23.ops.push(op);
              break;
            }
            if (t[2])
              _23.ops.pop();
            _23.trys.pop();
            continue;
        }
        op = body.call(thisArg, _23);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack2) {
  if (pack2 || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || from);
}
var Bounds = function() {
  function Bounds2(left, top, width, height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }
  Bounds2.prototype.add = function(x2, y2, w, h) {
    return new Bounds2(this.left + x2, this.top + y2, this.width + w, this.height + h);
  };
  Bounds2.fromClientRect = function(context, clientRect) {
    return new Bounds2(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
  };
  Bounds2.fromDOMRectList = function(context, domRectList) {
    var domRect = Array.from(domRectList).find(function(rect) {
      return rect.width !== 0;
    });
    return domRect ? new Bounds2(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds2.EMPTY;
  };
  Bounds2.EMPTY = new Bounds2(0, 0, 0, 0);
  return Bounds2;
}();
var parseBounds = function(context, node) {
  return Bounds.fromClientRect(context, node.getBoundingClientRect());
};
var parseDocumentSize = function(document2) {
  var body = document2.body;
  var documentElement = document2.documentElement;
  if (!body || !documentElement) {
    throw new Error("Unable to get document size");
  }
  var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
  var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
  return new Bounds(0, 0, width, height);
};
var toCodePoints$1 = function(str) {
  var codePoints = [];
  var i = 0;
  var length = str.length;
  while (i < length) {
    var value = str.charCodeAt(i++);
    if (value >= 55296 && value <= 56319 && i < length) {
      var extra = str.charCodeAt(i++);
      if ((extra & 64512) === 56320) {
        codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        codePoints.push(value);
        i--;
      }
    } else {
      codePoints.push(value);
    }
  }
  return codePoints;
};
var fromCodePoint$1 = function() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  if (String.fromCodePoint) {
    return String.fromCodePoint.apply(String, codePoints);
  }
  var length = codePoints.length;
  if (!length) {
    return "";
  }
  var codeUnits = [];
  var index = -1;
  var result = "";
  while (++index < length) {
    var codePoint = codePoints[index];
    if (codePoint <= 65535) {
      codeUnits.push(codePoint);
    } else {
      codePoint -= 65536;
      codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
    }
    if (index + 1 === length || codeUnits.length > 16384) {
      result += String.fromCharCode.apply(String, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$2 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
  lookup$2[chars$2.charCodeAt(i$2)] = i$2;
}
var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$1$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
  lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
}
var decode$1 = function(base642) {
  var bufferLength = base642.length * 0.75, len = base642.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base642[base642.length - 1] === "=") {
    bufferLength--;
    if (base642[base642.length - 2] === "=") {
      bufferLength--;
    }
  }
  var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
  var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup$1$1[base642.charCodeAt(i)];
    encoded2 = lookup$1$1[base642.charCodeAt(i + 1)];
    encoded3 = lookup$1$1[base642.charCodeAt(i + 2)];
    encoded4 = lookup$1$1[base642.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return buffer;
};
var polyUint16Array$1 = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 2) {
    bytes.push(buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var polyUint32Array$1 = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 4) {
    bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var UTRIE2_SHIFT_2$1 = 5;
var UTRIE2_SHIFT_1$1 = 6 + 5;
var UTRIE2_INDEX_SHIFT$1 = 2;
var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1;
var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1;
var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 2048 >> 6;
var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1;
var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
var slice16$1 = function(view, start2, end) {
  if (view.slice) {
    return view.slice(start2, end);
  }
  return new Uint16Array(Array.prototype.slice.call(view, start2, end));
};
var slice32$1 = function(view, start2, end) {
  if (view.slice) {
    return view.slice(start2, end);
  }
  return new Uint32Array(Array.prototype.slice.call(view, start2, end));
};
var createTrieFromBase64$1 = function(base642, _byteLength) {
  var buffer = decode$1(base642);
  var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
  var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
  var headerLength = 24;
  var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
  var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
  return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie$1 = function() {
  function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
    this.initialValue = initialValue;
    this.errorValue = errorValue;
    this.highStart = highStart;
    this.highValueIndex = highValueIndex;
    this.index = index;
    this.data = data;
  }
  Trie2.prototype.get = function(codePoint) {
    var ix;
    if (codePoint >= 0) {
      if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
        ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
        ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
        return this.data[ix];
      }
      if (codePoint <= 65535) {
        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 55296 >> UTRIE2_SHIFT_2$1)];
        ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
        return this.data[ix];
      }
      if (codePoint < this.highStart) {
        ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
        ix = this.index[ix];
        ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
        ix = this.index[ix];
        ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
        return this.data[ix];
      }
      if (codePoint <= 1114111) {
        return this.data[this.highValueIndex];
      }
    }
    return this.errorValue;
  };
  return Trie2;
}();
var chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$3 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
  lookup$3[chars$3.charCodeAt(i$3)] = i$3;
}
var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==";
var LETTER_NUMBER_MODIFIER = 50;
var BK = 1;
var CR$1 = 2;
var LF$1 = 3;
var CM = 4;
var NL = 5;
var WJ = 7;
var ZW = 8;
var GL = 9;
var SP = 10;
var ZWJ$1 = 11;
var B2 = 12;
var BA = 13;
var BB = 14;
var HY = 15;
var CB = 16;
var CL = 17;
var CP = 18;
var EX = 19;
var IN = 20;
var NS = 21;
var OP = 22;
var QU = 23;
var IS = 24;
var NU = 25;
var PO = 26;
var PR = 27;
var SY = 28;
var AI = 29;
var AL = 30;
var CJ = 31;
var EB = 32;
var EM = 33;
var H2 = 34;
var H3 = 35;
var HL = 36;
var ID = 37;
var JL = 38;
var JV = 39;
var JT = 40;
var RI$1 = 41;
var SA = 42;
var XX = 43;
var ea_OP = [9001, 65288];
var BREAK_MANDATORY = "!";
var BREAK_NOT_ALLOWED$1 = "\xD7";
var BREAK_ALLOWED$1 = "\xF7";
var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
var SPACE$1 = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];
var codePointsToCharacterClasses = function(codePoints, lineBreak2) {
  if (lineBreak2 === void 0) {
    lineBreak2 = "strict";
  }
  var types = [];
  var indices = [];
  var categories = [];
  codePoints.forEach(function(codePoint, index) {
    var classType = UnicodeTrie$1.get(codePoint);
    if (classType > LETTER_NUMBER_MODIFIER) {
      categories.push(true);
      classType -= LETTER_NUMBER_MODIFIER;
    } else {
      categories.push(false);
    }
    if (["normal", "auto", "loose"].indexOf(lineBreak2) !== -1) {
      if ([8208, 8211, 12316, 12448].indexOf(codePoint) !== -1) {
        indices.push(index);
        return types.push(CB);
      }
    }
    if (classType === CM || classType === ZWJ$1) {
      if (index === 0) {
        indices.push(index);
        return types.push(AL);
      }
      var prev2 = types[index - 1];
      if (LINE_BREAKS.indexOf(prev2) === -1) {
        indices.push(indices[index - 1]);
        return types.push(prev2);
      }
      indices.push(index);
      return types.push(AL);
    }
    indices.push(index);
    if (classType === CJ) {
      return types.push(lineBreak2 === "strict" ? NS : ID);
    }
    if (classType === SA) {
      return types.push(AL);
    }
    if (classType === AI) {
      return types.push(AL);
    }
    if (classType === XX) {
      if (codePoint >= 131072 && codePoint <= 196605 || codePoint >= 196608 && codePoint <= 262141) {
        return types.push(ID);
      } else {
        return types.push(AL);
      }
    }
    types.push(classType);
  });
  return [indices, types, categories];
};
var isAdjacentWithSpaceIgnored = function(a2, b, currentIndex, classTypes) {
  var current = classTypes[currentIndex];
  if (Array.isArray(a2) ? a2.indexOf(current) !== -1 : a2 === current) {
    var i = currentIndex;
    while (i <= classTypes.length) {
      i++;
      var next2 = classTypes[i];
      if (next2 === b) {
        return true;
      }
      if (next2 !== SP) {
        break;
      }
    }
  }
  if (current === SP) {
    var i = currentIndex;
    while (i > 0) {
      i--;
      var prev2 = classTypes[i];
      if (Array.isArray(a2) ? a2.indexOf(prev2) !== -1 : a2 === prev2) {
        var n = currentIndex;
        while (n <= classTypes.length) {
          n++;
          var next2 = classTypes[n];
          if (next2 === b) {
            return true;
          }
          if (next2 !== SP) {
            break;
          }
        }
      }
      if (prev2 !== SP) {
        break;
      }
    }
  }
  return false;
};
var previousNonSpaceClassType = function(currentIndex, classTypes) {
  var i = currentIndex;
  while (i >= 0) {
    var type = classTypes[i];
    if (type === SP) {
      i--;
    } else {
      return type;
    }
  }
  return 0;
};
var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
  if (indicies[index] === 0) {
    return BREAK_NOT_ALLOWED$1;
  }
  var currentIndex = index - 1;
  if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
    return BREAK_NOT_ALLOWED$1;
  }
  var beforeIndex = currentIndex - 1;
  var afterIndex = currentIndex + 1;
  var current = classTypes[currentIndex];
  var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
  var next2 = classTypes[afterIndex];
  if (current === CR$1 && next2 === LF$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
    return BREAK_MANDATORY;
  }
  if (HARD_LINE_BREAKS.indexOf(next2) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (SPACE$1.indexOf(next2) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
    return BREAK_ALLOWED$1;
  }
  if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === WJ || next2 === WJ) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === GL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([SP, BA, HY].indexOf(current) === -1 && next2 === GL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([CL, CP, EX, IS, SY].indexOf(next2) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === SP) {
    return BREAK_ALLOWED$1;
  }
  if (current === QU || next2 === QU) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (next2 === CB || current === CB) {
    return BREAK_ALLOWED$1;
  }
  if ([BA, HY, NS].indexOf(next2) !== -1 || current === BB) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (before === HL && HYPHEN.indexOf(current) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === SY && next2 === HL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (next2 === IN) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(next2) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next2 === NU) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === PR && [ID, EB, EM].indexOf(next2) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next2 === PO) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next2) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next2) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([PR, PO].indexOf(current) !== -1 && (next2 === NU || [OP, HY].indexOf(next2) !== -1 && classTypes[afterIndex + 1] === NU) || [OP, HY].indexOf(current) !== -1 && next2 === NU || current === NU && [NU, SY, IS].indexOf(next2) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([NU, SY, IS, CL, CP].indexOf(next2) !== -1) {
    var prevIndex = currentIndex;
    while (prevIndex >= 0) {
      var type = classTypes[prevIndex];
      if (type === NU) {
        return BREAK_NOT_ALLOWED$1;
      } else if ([SY, IS].indexOf(type) !== -1) {
        prevIndex--;
      } else {
        break;
      }
    }
  }
  if ([PR, PO].indexOf(next2) !== -1) {
    var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
    while (prevIndex >= 0) {
      var type = classTypes[prevIndex];
      if (type === NU) {
        return BREAK_NOT_ALLOWED$1;
      } else if ([SY, IS].indexOf(type) !== -1) {
        prevIndex--;
      } else {
        break;
      }
    }
  }
  if (JL === current && [JL, JV, H2, H3].indexOf(next2) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next2) !== -1 || [JT, H3].indexOf(current) !== -1 && next2 === JT) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next2) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next2) !== -1 && current === PR) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next2) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === IS && ALPHABETICS.indexOf(next2) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next2 === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next2) !== -1 && current === CP) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === RI$1 && next2 === RI$1) {
    var i = indicies[currentIndex];
    var count = 1;
    while (i > 0) {
      i--;
      if (classTypes[i] === RI$1) {
        count++;
      } else {
        break;
      }
    }
    if (count % 2 !== 0) {
      return BREAK_NOT_ALLOWED$1;
    }
  }
  if (current === EB && next2 === EM) {
    return BREAK_NOT_ALLOWED$1;
  }
  return BREAK_ALLOWED$1;
};
var cssFormattedClasses = function(codePoints, options) {
  if (!options) {
    options = { lineBreak: "normal", wordBreak: "normal" };
  }
  var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
  if (options.wordBreak === "break-all" || options.wordBreak === "break-word") {
    classTypes = classTypes.map(function(type) {
      return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
    });
  }
  var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(letterNumber, i) {
    return letterNumber && codePoints[i] >= 19968 && codePoints[i] <= 40959;
  }) : void 0;
  return [indicies, classTypes, forbiddenBreakpoints];
};
var Break = function() {
  function Break2(codePoints, lineBreak2, start2, end) {
    this.codePoints = codePoints;
    this.required = lineBreak2 === BREAK_MANDATORY;
    this.start = start2;
    this.end = end;
  }
  Break2.prototype.slice = function() {
    return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
  };
  return Break2;
}();
var LineBreaker = function(str, options) {
  var codePoints = toCodePoints$1(str);
  var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
  var length = codePoints.length;
  var lastEnd = 0;
  var nextIndex = 0;
  return {
    next: function() {
      if (nextIndex >= length) {
        return { done: true, value: null };
      }
      var lineBreak2 = BREAK_NOT_ALLOWED$1;
      while (nextIndex < length && (lineBreak2 = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {
      }
      if (lineBreak2 !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
        var value = new Break(codePoints, lineBreak2, lastEnd, nextIndex);
        lastEnd = nextIndex;
        return { value, done: false };
      }
      return { done: true, value: null };
    }
  };
};
var FLAG_UNRESTRICTED = 1 << 0;
var FLAG_ID = 1 << 1;
var FLAG_INTEGER = 1 << 2;
var FLAG_NUMBER = 1 << 3;
var LINE_FEED = 10;
var SOLIDUS = 47;
var REVERSE_SOLIDUS = 92;
var CHARACTER_TABULATION = 9;
var SPACE = 32;
var QUOTATION_MARK = 34;
var EQUALS_SIGN = 61;
var NUMBER_SIGN = 35;
var DOLLAR_SIGN = 36;
var PERCENTAGE_SIGN = 37;
var APOSTROPHE = 39;
var LEFT_PARENTHESIS = 40;
var RIGHT_PARENTHESIS = 41;
var LOW_LINE = 95;
var HYPHEN_MINUS = 45;
var EXCLAMATION_MARK = 33;
var LESS_THAN_SIGN = 60;
var GREATER_THAN_SIGN = 62;
var COMMERCIAL_AT = 64;
var LEFT_SQUARE_BRACKET = 91;
var RIGHT_SQUARE_BRACKET = 93;
var CIRCUMFLEX_ACCENT = 61;
var LEFT_CURLY_BRACKET = 123;
var QUESTION_MARK = 63;
var RIGHT_CURLY_BRACKET = 125;
var VERTICAL_LINE = 124;
var TILDE = 126;
var CONTROL = 128;
var REPLACEMENT_CHARACTER = 65533;
var ASTERISK = 42;
var PLUS_SIGN = 43;
var COMMA = 44;
var COLON = 58;
var SEMICOLON = 59;
var FULL_STOP = 46;
var NULL = 0;
var BACKSPACE = 8;
var LINE_TABULATION = 11;
var SHIFT_OUT = 14;
var INFORMATION_SEPARATOR_ONE = 31;
var DELETE = 127;
var EOF = -1;
var ZERO = 48;
var a = 97;
var e = 101;
var f = 102;
var u = 117;
var z = 122;
var A = 65;
var E = 69;
var F = 70;
var U = 85;
var Z = 90;
var isDigit = function(codePoint) {
  return codePoint >= ZERO && codePoint <= 57;
};
var isSurrogateCodePoint = function(codePoint) {
  return codePoint >= 55296 && codePoint <= 57343;
};
var isHex = function(codePoint) {
  return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
};
var isLowerCaseLetter = function(codePoint) {
  return codePoint >= a && codePoint <= z;
};
var isUpperCaseLetter = function(codePoint) {
  return codePoint >= A && codePoint <= Z;
};
var isLetter = function(codePoint) {
  return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
};
var isNonASCIICodePoint = function(codePoint) {
  return codePoint >= CONTROL;
};
var isWhiteSpace = function(codePoint) {
  return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
};
var isNameStartCodePoint = function(codePoint) {
  return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
};
var isNameCodePoint = function(codePoint) {
  return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
};
var isNonPrintableCodePoint = function(codePoint) {
  return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
};
var isValidEscape = function(c1, c2) {
  if (c1 !== REVERSE_SOLIDUS) {
    return false;
  }
  return c2 !== LINE_FEED;
};
var isIdentifierStart = function(c1, c2, c3) {
  if (c1 === HYPHEN_MINUS) {
    return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
  } else if (isNameStartCodePoint(c1)) {
    return true;
  } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
    return true;
  }
  return false;
};
var isNumberStart = function(c1, c2, c3) {
  if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
    if (isDigit(c2)) {
      return true;
    }
    return c2 === FULL_STOP && isDigit(c3);
  }
  if (c1 === FULL_STOP) {
    return isDigit(c2);
  }
  return isDigit(c1);
};
var stringToNumber = function(codePoints) {
  var c = 0;
  var sign = 1;
  if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
    if (codePoints[c] === HYPHEN_MINUS) {
      sign = -1;
    }
    c++;
  }
  var integers = [];
  while (isDigit(codePoints[c])) {
    integers.push(codePoints[c++]);
  }
  var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
  if (codePoints[c] === FULL_STOP) {
    c++;
  }
  var fraction = [];
  while (isDigit(codePoints[c])) {
    fraction.push(codePoints[c++]);
  }
  var fracd = fraction.length;
  var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
  if (codePoints[c] === E || codePoints[c] === e) {
    c++;
  }
  var expsign = 1;
  if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
    if (codePoints[c] === HYPHEN_MINUS) {
      expsign = -1;
    }
    c++;
  }
  var exponent2 = [];
  while (isDigit(codePoints[c])) {
    exponent2.push(codePoints[c++]);
  }
  var exp = exponent2.length ? parseInt(fromCodePoint$1.apply(void 0, exponent2), 10) : 0;
  return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
};
var LEFT_PARENTHESIS_TOKEN = {
  type: 2
};
var RIGHT_PARENTHESIS_TOKEN = {
  type: 3
};
var COMMA_TOKEN = { type: 4 };
var SUFFIX_MATCH_TOKEN = { type: 13 };
var PREFIX_MATCH_TOKEN = { type: 8 };
var COLUMN_TOKEN = { type: 21 };
var DASH_MATCH_TOKEN = { type: 9 };
var INCLUDE_MATCH_TOKEN = { type: 10 };
var LEFT_CURLY_BRACKET_TOKEN = {
  type: 11
};
var RIGHT_CURLY_BRACKET_TOKEN = {
  type: 12
};
var SUBSTRING_MATCH_TOKEN = { type: 14 };
var BAD_URL_TOKEN = { type: 23 };
var BAD_STRING_TOKEN = { type: 1 };
var CDO_TOKEN = { type: 25 };
var CDC_TOKEN = { type: 24 };
var COLON_TOKEN = { type: 26 };
var SEMICOLON_TOKEN = { type: 27 };
var LEFT_SQUARE_BRACKET_TOKEN = {
  type: 28
};
var RIGHT_SQUARE_BRACKET_TOKEN = {
  type: 29
};
var WHITESPACE_TOKEN = { type: 31 };
var EOF_TOKEN = { type: 32 };
var Tokenizer = function() {
  function Tokenizer2() {
    this._value = [];
  }
  Tokenizer2.prototype.write = function(chunk) {
    this._value = this._value.concat(toCodePoints$1(chunk));
  };
  Tokenizer2.prototype.read = function() {
    var tokens = [];
    var token = this.consumeToken();
    while (token !== EOF_TOKEN) {
      tokens.push(token);
      token = this.consumeToken();
    }
    return tokens;
  };
  Tokenizer2.prototype.consumeToken = function() {
    var codePoint = this.consumeCodePoint();
    switch (codePoint) {
      case QUOTATION_MARK:
        return this.consumeStringToken(QUOTATION_MARK);
      case NUMBER_SIGN:
        var c1 = this.peekCodePoint(0);
        var c2 = this.peekCodePoint(1);
        var c3 = this.peekCodePoint(2);
        if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
          var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
          var value = this.consumeName();
          return { type: 5, value, flags };
        }
        break;
      case DOLLAR_SIGN:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return SUFFIX_MATCH_TOKEN;
        }
        break;
      case APOSTROPHE:
        return this.consumeStringToken(APOSTROPHE);
      case LEFT_PARENTHESIS:
        return LEFT_PARENTHESIS_TOKEN;
      case RIGHT_PARENTHESIS:
        return RIGHT_PARENTHESIS_TOKEN;
      case ASTERISK:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return SUBSTRING_MATCH_TOKEN;
        }
        break;
      case PLUS_SIGN:
        if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeNumericToken();
        }
        break;
      case COMMA:
        return COMMA_TOKEN;
      case HYPHEN_MINUS:
        var e1 = codePoint;
        var e2 = this.peekCodePoint(0);
        var e3 = this.peekCodePoint(1);
        if (isNumberStart(e1, e2, e3)) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeNumericToken();
        }
        if (isIdentifierStart(e1, e2, e3)) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeIdentLikeToken();
        }
        if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
          this.consumeCodePoint();
          this.consumeCodePoint();
          return CDC_TOKEN;
        }
        break;
      case FULL_STOP:
        if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeNumericToken();
        }
        break;
      case SOLIDUS:
        if (this.peekCodePoint(0) === ASTERISK) {
          this.consumeCodePoint();
          while (true) {
            var c = this.consumeCodePoint();
            if (c === ASTERISK) {
              c = this.consumeCodePoint();
              if (c === SOLIDUS) {
                return this.consumeToken();
              }
            }
            if (c === EOF) {
              return this.consumeToken();
            }
          }
        }
        break;
      case COLON:
        return COLON_TOKEN;
      case SEMICOLON:
        return SEMICOLON_TOKEN;
      case LESS_THAN_SIGN:
        if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
          this.consumeCodePoint();
          this.consumeCodePoint();
          return CDO_TOKEN;
        }
        break;
      case COMMERCIAL_AT:
        var a1 = this.peekCodePoint(0);
        var a2 = this.peekCodePoint(1);
        var a3 = this.peekCodePoint(2);
        if (isIdentifierStart(a1, a2, a3)) {
          var value = this.consumeName();
          return { type: 7, value };
        }
        break;
      case LEFT_SQUARE_BRACKET:
        return LEFT_SQUARE_BRACKET_TOKEN;
      case REVERSE_SOLIDUS:
        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeIdentLikeToken();
        }
        break;
      case RIGHT_SQUARE_BRACKET:
        return RIGHT_SQUARE_BRACKET_TOKEN;
      case CIRCUMFLEX_ACCENT:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return PREFIX_MATCH_TOKEN;
        }
        break;
      case LEFT_CURLY_BRACKET:
        return LEFT_CURLY_BRACKET_TOKEN;
      case RIGHT_CURLY_BRACKET:
        return RIGHT_CURLY_BRACKET_TOKEN;
      case u:
      case U:
        var u1 = this.peekCodePoint(0);
        var u2 = this.peekCodePoint(1);
        if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
          this.consumeCodePoint();
          this.consumeUnicodeRangeToken();
        }
        this.reconsumeCodePoint(codePoint);
        return this.consumeIdentLikeToken();
      case VERTICAL_LINE:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return DASH_MATCH_TOKEN;
        }
        if (this.peekCodePoint(0) === VERTICAL_LINE) {
          this.consumeCodePoint();
          return COLUMN_TOKEN;
        }
        break;
      case TILDE:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return INCLUDE_MATCH_TOKEN;
        }
        break;
      case EOF:
        return EOF_TOKEN;
    }
    if (isWhiteSpace(codePoint)) {
      this.consumeWhiteSpace();
      return WHITESPACE_TOKEN;
    }
    if (isDigit(codePoint)) {
      this.reconsumeCodePoint(codePoint);
      return this.consumeNumericToken();
    }
    if (isNameStartCodePoint(codePoint)) {
      this.reconsumeCodePoint(codePoint);
      return this.consumeIdentLikeToken();
    }
    return { type: 6, value: fromCodePoint$1(codePoint) };
  };
  Tokenizer2.prototype.consumeCodePoint = function() {
    var value = this._value.shift();
    return typeof value === "undefined" ? -1 : value;
  };
  Tokenizer2.prototype.reconsumeCodePoint = function(codePoint) {
    this._value.unshift(codePoint);
  };
  Tokenizer2.prototype.peekCodePoint = function(delta) {
    if (delta >= this._value.length) {
      return -1;
    }
    return this._value[delta];
  };
  Tokenizer2.prototype.consumeUnicodeRangeToken = function() {
    var digits = [];
    var codePoint = this.consumeCodePoint();
    while (isHex(codePoint) && digits.length < 6) {
      digits.push(codePoint);
      codePoint = this.consumeCodePoint();
    }
    var questionMarks = false;
    while (codePoint === QUESTION_MARK && digits.length < 6) {
      digits.push(codePoint);
      codePoint = this.consumeCodePoint();
      questionMarks = true;
    }
    if (questionMarks) {
      var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
        return digit === QUESTION_MARK ? ZERO : digit;
      })), 16);
      var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
        return digit === QUESTION_MARK ? F : digit;
      })), 16);
      return { type: 30, start: start_1, end };
    }
    var start2 = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
    if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      codePoint = this.consumeCodePoint();
      var endDigits = [];
      while (isHex(codePoint) && endDigits.length < 6) {
        endDigits.push(codePoint);
        codePoint = this.consumeCodePoint();
      }
      var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
      return { type: 30, start: start2, end };
    } else {
      return { type: 30, start: start2, end: start2 };
    }
  };
  Tokenizer2.prototype.consumeIdentLikeToken = function() {
    var value = this.consumeName();
    if (value.toLowerCase() === "url" && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
      this.consumeCodePoint();
      return this.consumeUrlToken();
    } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
      this.consumeCodePoint();
      return { type: 19, value };
    }
    return { type: 20, value };
  };
  Tokenizer2.prototype.consumeUrlToken = function() {
    var value = [];
    this.consumeWhiteSpace();
    if (this.peekCodePoint(0) === EOF) {
      return { type: 22, value: "" };
    }
    var next2 = this.peekCodePoint(0);
    if (next2 === APOSTROPHE || next2 === QUOTATION_MARK) {
      var stringToken = this.consumeStringToken(this.consumeCodePoint());
      if (stringToken.type === 0) {
        this.consumeWhiteSpace();
        if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
          this.consumeCodePoint();
          return { type: 22, value: stringToken.value };
        }
      }
      this.consumeBadUrlRemnants();
      return BAD_URL_TOKEN;
    }
    while (true) {
      var codePoint = this.consumeCodePoint();
      if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
        return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
      } else if (isWhiteSpace(codePoint)) {
        this.consumeWhiteSpace();
        if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
          this.consumeCodePoint();
          return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
        }
        this.consumeBadUrlRemnants();
        return BAD_URL_TOKEN;
      } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
        this.consumeBadUrlRemnants();
        return BAD_URL_TOKEN;
      } else if (codePoint === REVERSE_SOLIDUS) {
        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          value.push(this.consumeEscapedCodePoint());
        } else {
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        }
      } else {
        value.push(codePoint);
      }
    }
  };
  Tokenizer2.prototype.consumeWhiteSpace = function() {
    while (isWhiteSpace(this.peekCodePoint(0))) {
      this.consumeCodePoint();
    }
  };
  Tokenizer2.prototype.consumeBadUrlRemnants = function() {
    while (true) {
      var codePoint = this.consumeCodePoint();
      if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
        return;
      }
      if (isValidEscape(codePoint, this.peekCodePoint(0))) {
        this.consumeEscapedCodePoint();
      }
    }
  };
  Tokenizer2.prototype.consumeStringSlice = function(count) {
    var SLICE_STACK_SIZE = 5e4;
    var value = "";
    while (count > 0) {
      var amount = Math.min(SLICE_STACK_SIZE, count);
      value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
      count -= amount;
    }
    this._value.shift();
    return value;
  };
  Tokenizer2.prototype.consumeStringToken = function(endingCodePoint) {
    var value = "";
    var i = 0;
    do {
      var codePoint = this._value[i];
      if (codePoint === EOF || codePoint === void 0 || codePoint === endingCodePoint) {
        value += this.consumeStringSlice(i);
        return { type: 0, value };
      }
      if (codePoint === LINE_FEED) {
        this._value.splice(0, i);
        return BAD_STRING_TOKEN;
      }
      if (codePoint === REVERSE_SOLIDUS) {
        var next2 = this._value[i + 1];
        if (next2 !== EOF && next2 !== void 0) {
          if (next2 === LINE_FEED) {
            value += this.consumeStringSlice(i);
            i = -1;
            this._value.shift();
          } else if (isValidEscape(codePoint, next2)) {
            value += this.consumeStringSlice(i);
            value += fromCodePoint$1(this.consumeEscapedCodePoint());
            i = -1;
          }
        }
      }
      i++;
    } while (true);
  };
  Tokenizer2.prototype.consumeNumber = function() {
    var repr = [];
    var type = FLAG_INTEGER;
    var c1 = this.peekCodePoint(0);
    if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
      repr.push(this.consumeCodePoint());
    }
    while (isDigit(this.peekCodePoint(0))) {
      repr.push(this.consumeCodePoint());
    }
    c1 = this.peekCodePoint(0);
    var c2 = this.peekCodePoint(1);
    if (c1 === FULL_STOP && isDigit(c2)) {
      repr.push(this.consumeCodePoint(), this.consumeCodePoint());
      type = FLAG_NUMBER;
      while (isDigit(this.peekCodePoint(0))) {
        repr.push(this.consumeCodePoint());
      }
    }
    c1 = this.peekCodePoint(0);
    c2 = this.peekCodePoint(1);
    var c3 = this.peekCodePoint(2);
    if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
      repr.push(this.consumeCodePoint(), this.consumeCodePoint());
      type = FLAG_NUMBER;
      while (isDigit(this.peekCodePoint(0))) {
        repr.push(this.consumeCodePoint());
      }
    }
    return [stringToNumber(repr), type];
  };
  Tokenizer2.prototype.consumeNumericToken = function() {
    var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
    var c1 = this.peekCodePoint(0);
    var c2 = this.peekCodePoint(1);
    var c3 = this.peekCodePoint(2);
    if (isIdentifierStart(c1, c2, c3)) {
      var unit = this.consumeName();
      return { type: 15, number, flags, unit };
    }
    if (c1 === PERCENTAGE_SIGN) {
      this.consumeCodePoint();
      return { type: 16, number, flags };
    }
    return { type: 17, number, flags };
  };
  Tokenizer2.prototype.consumeEscapedCodePoint = function() {
    var codePoint = this.consumeCodePoint();
    if (isHex(codePoint)) {
      var hex2 = fromCodePoint$1(codePoint);
      while (isHex(this.peekCodePoint(0)) && hex2.length < 6) {
        hex2 += fromCodePoint$1(this.consumeCodePoint());
      }
      if (isWhiteSpace(this.peekCodePoint(0))) {
        this.consumeCodePoint();
      }
      var hexCodePoint = parseInt(hex2, 16);
      if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 1114111) {
        return REPLACEMENT_CHARACTER;
      }
      return hexCodePoint;
    }
    if (codePoint === EOF) {
      return REPLACEMENT_CHARACTER;
    }
    return codePoint;
  };
  Tokenizer2.prototype.consumeName = function() {
    var result = "";
    while (true) {
      var codePoint = this.consumeCodePoint();
      if (isNameCodePoint(codePoint)) {
        result += fromCodePoint$1(codePoint);
      } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
        result += fromCodePoint$1(this.consumeEscapedCodePoint());
      } else {
        this.reconsumeCodePoint(codePoint);
        return result;
      }
    }
  };
  return Tokenizer2;
}();
var Parser = function() {
  function Parser2(tokens) {
    this._tokens = tokens;
  }
  Parser2.create = function(value) {
    var tokenizer = new Tokenizer();
    tokenizer.write(value);
    return new Parser2(tokenizer.read());
  };
  Parser2.parseValue = function(value) {
    return Parser2.create(value).parseComponentValue();
  };
  Parser2.parseValues = function(value) {
    return Parser2.create(value).parseComponentValues();
  };
  Parser2.prototype.parseComponentValue = function() {
    var token = this.consumeToken();
    while (token.type === 31) {
      token = this.consumeToken();
    }
    if (token.type === 32) {
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    }
    this.reconsumeToken(token);
    var value = this.consumeComponentValue();
    do {
      token = this.consumeToken();
    } while (token.type === 31);
    if (token.type === 32) {
      return value;
    }
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  };
  Parser2.prototype.parseComponentValues = function() {
    var values = [];
    while (true) {
      var value = this.consumeComponentValue();
      if (value.type === 32) {
        return values;
      }
      values.push(value);
      values.push();
    }
  };
  Parser2.prototype.consumeComponentValue = function() {
    var token = this.consumeToken();
    switch (token.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(token.type);
      case 19:
        return this.consumeFunction(token);
    }
    return token;
  };
  Parser2.prototype.consumeSimpleBlock = function(type) {
    var block = { type, values: [] };
    var token = this.consumeToken();
    while (true) {
      if (token.type === 32 || isEndingTokenFor(token, type)) {
        return block;
      }
      this.reconsumeToken(token);
      block.values.push(this.consumeComponentValue());
      token = this.consumeToken();
    }
  };
  Parser2.prototype.consumeFunction = function(functionToken) {
    var cssFunction = {
      name: functionToken.value,
      values: [],
      type: 18
    };
    while (true) {
      var token = this.consumeToken();
      if (token.type === 32 || token.type === 3) {
        return cssFunction;
      }
      this.reconsumeToken(token);
      cssFunction.values.push(this.consumeComponentValue());
    }
  };
  Parser2.prototype.consumeToken = function() {
    var token = this._tokens.shift();
    return typeof token === "undefined" ? EOF_TOKEN : token;
  };
  Parser2.prototype.reconsumeToken = function(token) {
    this._tokens.unshift(token);
  };
  return Parser2;
}();
var isDimensionToken = function(token) {
  return token.type === 15;
};
var isNumberToken = function(token) {
  return token.type === 17;
};
var isIdentToken = function(token) {
  return token.type === 20;
};
var isStringToken = function(token) {
  return token.type === 0;
};
var isIdentWithValue = function(token, value) {
  return isIdentToken(token) && token.value === value;
};
var nonWhiteSpace = function(token) {
  return token.type !== 31;
};
var nonFunctionArgSeparator = function(token) {
  return token.type !== 31 && token.type !== 4;
};
var parseFunctionArgs = function(tokens) {
  var args = [];
  var arg = [];
  tokens.forEach(function(token) {
    if (token.type === 4) {
      if (arg.length === 0) {
        throw new Error("Error parsing function args, zero tokens for arg");
      }
      args.push(arg);
      arg = [];
      return;
    }
    if (token.type !== 31) {
      arg.push(token);
    }
  });
  if (arg.length) {
    args.push(arg);
  }
  return args;
};
var isEndingTokenFor = function(token, type) {
  if (type === 11 && token.type === 12) {
    return true;
  }
  if (type === 28 && token.type === 29) {
    return true;
  }
  return type === 2 && token.type === 3;
};
var isLength = function(token) {
  return token.type === 17 || token.type === 15;
};
var isLengthPercentage = function(token) {
  return token.type === 16 || isLength(token);
};
var parseLengthPercentageTuple = function(tokens) {
  return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
};
var ZERO_LENGTH = {
  type: 17,
  number: 0,
  flags: FLAG_INTEGER
};
var FIFTY_PERCENT = {
  type: 16,
  number: 50,
  flags: FLAG_INTEGER
};
var HUNDRED_PERCENT = {
  type: 16,
  number: 100,
  flags: FLAG_INTEGER
};
var getAbsoluteValueForTuple = function(tuple, width, height) {
  var x2 = tuple[0], y2 = tuple[1];
  return [getAbsoluteValue(x2, width), getAbsoluteValue(typeof y2 !== "undefined" ? y2 : x2, height)];
};
var getAbsoluteValue = function(token, parent) {
  if (token.type === 16) {
    return token.number / 100 * parent;
  }
  if (isDimensionToken(token)) {
    switch (token.unit) {
      case "rem":
      case "em":
        return 16 * token.number;
      case "px":
      default:
        return token.number;
    }
  }
  return token.number;
};
var DEG = "deg";
var GRAD = "grad";
var RAD = "rad";
var TURN = "turn";
var angle = {
  name: "angle",
  parse: function(_context, value) {
    if (value.type === 15) {
      switch (value.unit) {
        case DEG:
          return Math.PI * value.number / 180;
        case GRAD:
          return Math.PI / 200 * value.number;
        case RAD:
          return value.number;
        case TURN:
          return Math.PI * 2 * value.number;
      }
    }
    throw new Error("Unsupported angle type");
  }
};
var isAngle = function(value) {
  if (value.type === 15) {
    if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
      return true;
    }
  }
  return false;
};
var parseNamedSide = function(tokens) {
  var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
    return ident.value;
  }).join(" ");
  switch (sideOrCorner) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [ZERO_LENGTH, ZERO_LENGTH];
    case "to top":
    case "bottom":
      return deg(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [ZERO_LENGTH, HUNDRED_PERCENT];
    case "to right":
    case "left":
      return deg(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [HUNDRED_PERCENT, HUNDRED_PERCENT];
    case "to bottom":
    case "top":
      return deg(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [HUNDRED_PERCENT, ZERO_LENGTH];
    case "to left":
    case "right":
      return deg(270);
  }
  return 0;
};
var deg = function(deg2) {
  return Math.PI * deg2 / 180;
};
var color$1 = {
  name: "color",
  parse: function(context, value) {
    if (value.type === 18) {
      var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
      if (typeof colorFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported color function "' + value.name + '"');
      }
      return colorFunction(context, value.values);
    }
    if (value.type === 5) {
      if (value.value.length === 3) {
        var r = value.value.substring(0, 1);
        var g2 = value.value.substring(1, 2);
        var b = value.value.substring(2, 3);
        return pack(parseInt(r + r, 16), parseInt(g2 + g2, 16), parseInt(b + b, 16), 1);
      }
      if (value.value.length === 4) {
        var r = value.value.substring(0, 1);
        var g2 = value.value.substring(1, 2);
        var b = value.value.substring(2, 3);
        var a2 = value.value.substring(3, 4);
        return pack(parseInt(r + r, 16), parseInt(g2 + g2, 16), parseInt(b + b, 16), parseInt(a2 + a2, 16) / 255);
      }
      if (value.value.length === 6) {
        var r = value.value.substring(0, 2);
        var g2 = value.value.substring(2, 4);
        var b = value.value.substring(4, 6);
        return pack(parseInt(r, 16), parseInt(g2, 16), parseInt(b, 16), 1);
      }
      if (value.value.length === 8) {
        var r = value.value.substring(0, 2);
        var g2 = value.value.substring(2, 4);
        var b = value.value.substring(4, 6);
        var a2 = value.value.substring(6, 8);
        return pack(parseInt(r, 16), parseInt(g2, 16), parseInt(b, 16), parseInt(a2, 16) / 255);
      }
    }
    if (value.type === 20) {
      var namedColor = COLORS[value.value.toUpperCase()];
      if (typeof namedColor !== "undefined") {
        return namedColor;
      }
    }
    return COLORS.TRANSPARENT;
  }
};
var isTransparent = function(color2) {
  return (255 & color2) === 0;
};
var asString = function(color2) {
  var alpha = 255 & color2;
  var blue = 255 & color2 >> 8;
  var green = 255 & color2 >> 16;
  var red = 255 & color2 >> 24;
  return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
};
var pack = function(r, g2, b, a2) {
  return (r << 24 | g2 << 16 | b << 8 | Math.round(a2 * 255) << 0) >>> 0;
};
var getTokenColorValue = function(token, i) {
  if (token.type === 17) {
    return token.number;
  }
  if (token.type === 16) {
    var max = i === 3 ? 1 : 255;
    return i === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
  }
  return 0;
};
var rgb = function(_context, args) {
  var tokens = args.filter(nonFunctionArgSeparator);
  if (tokens.length === 3) {
    var _a = tokens.map(getTokenColorValue), r = _a[0], g2 = _a[1], b = _a[2];
    return pack(r, g2, b, 1);
  }
  if (tokens.length === 4) {
    var _b = tokens.map(getTokenColorValue), r = _b[0], g2 = _b[1], b = _b[2], a2 = _b[3];
    return pack(r, g2, b, a2);
  }
  return 0;
};
function hue2rgb(t1, t2, hue) {
  if (hue < 0) {
    hue += 1;
  }
  if (hue >= 1) {
    hue -= 1;
  }
  if (hue < 1 / 6) {
    return (t2 - t1) * hue * 6 + t1;
  } else if (hue < 1 / 2) {
    return t2;
  } else if (hue < 2 / 3) {
    return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
  } else {
    return t1;
  }
}
var hsl = function(context, args) {
  var tokens = args.filter(nonFunctionArgSeparator);
  var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
  var h = (hue.type === 17 ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
  var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
  var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
  var a2 = typeof alpha !== "undefined" && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
  if (s === 0) {
    return pack(l * 255, l * 255, l * 255, 1);
  }
  var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
  var t1 = l * 2 - t2;
  var r = hue2rgb(t1, t2, h + 1 / 3);
  var g2 = hue2rgb(t1, t2, h);
  var b = hue2rgb(t1, t2, h - 1 / 3);
  return pack(r * 255, g2 * 255, b * 255, a2);
};
var SUPPORTED_COLOR_FUNCTIONS = {
  hsl,
  hsla: hsl,
  rgb,
  rgba: rgb
};
var parseColor = function(context, value) {
  return color$1.parse(context, Parser.create(value).parseComponentValue());
};
var COLORS = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
};
var backgroundClip = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.map(function(token) {
      if (isIdentToken(token)) {
        switch (token.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      }
      return 0;
    });
  }
};
var backgroundColor = {
  name: "background-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var parseColorStop = function(context, args) {
  var color2 = color$1.parse(context, args[0]);
  var stop = args[1];
  return stop && isLengthPercentage(stop) ? { color: color2, stop } : { color: color2, stop: null };
};
var processColorStops = function(stops, lineLength) {
  var first = stops[0];
  var last = stops[stops.length - 1];
  if (first.stop === null) {
    first.stop = ZERO_LENGTH;
  }
  if (last.stop === null) {
    last.stop = HUNDRED_PERCENT;
  }
  var processStops = [];
  var previous = 0;
  for (var i = 0; i < stops.length; i++) {
    var stop_1 = stops[i].stop;
    if (stop_1 !== null) {
      var absoluteValue = getAbsoluteValue(stop_1, lineLength);
      if (absoluteValue > previous) {
        processStops.push(absoluteValue);
      } else {
        processStops.push(previous);
      }
      previous = absoluteValue;
    } else {
      processStops.push(null);
    }
  }
  var gapBegin = null;
  for (var i = 0; i < processStops.length; i++) {
    var stop_2 = processStops[i];
    if (stop_2 === null) {
      if (gapBegin === null) {
        gapBegin = i;
      }
    } else if (gapBegin !== null) {
      var gapLength = i - gapBegin;
      var beforeGap = processStops[gapBegin - 1];
      var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
      for (var g2 = 1; g2 <= gapLength; g2++) {
        processStops[gapBegin + g2 - 1] = gapValue * g2;
      }
      gapBegin = null;
    }
  }
  return stops.map(function(_a, i2) {
    var color2 = _a.color;
    return { color: color2, stop: Math.max(Math.min(1, processStops[i2] / lineLength), 0) };
  });
};
var getAngleFromCorner = function(corner, width, height) {
  var centerX = width / 2;
  var centerY = height / 2;
  var x2 = getAbsoluteValue(corner[0], width) - centerX;
  var y2 = centerY - getAbsoluteValue(corner[1], height);
  return (Math.atan2(y2, x2) + Math.PI * 2) % (Math.PI * 2);
};
var calculateGradientDirection = function(angle2, width, height) {
  var radian = typeof angle2 === "number" ? angle2 : getAngleFromCorner(angle2, width, height);
  var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
  var halfWidth = width / 2;
  var halfHeight = height / 2;
  var halfLineLength = lineLength / 2;
  var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
  var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
  return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
};
var distance = function(a2, b) {
  return Math.sqrt(a2 * a2 + b * b);
};
var findCorner = function(width, height, x2, y2, closest) {
  var corners = [
    [0, 0],
    [0, height],
    [width, 0],
    [width, height]
  ];
  return corners.reduce(function(stat, corner) {
    var cx = corner[0], cy = corner[1];
    var d = distance(x2 - cx, y2 - cy);
    if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
      return {
        optimumCorner: corner,
        optimumDistance: d
      };
    }
    return stat;
  }, {
    optimumDistance: closest ? Infinity : -Infinity,
    optimumCorner: null
  }).optimumCorner;
};
var calculateRadius = function(gradient, x2, y2, width, height) {
  var rx = 0;
  var ry = 0;
  switch (gradient.size) {
    case 0:
      if (gradient.shape === 0) {
        rx = ry = Math.min(Math.abs(x2), Math.abs(x2 - width), Math.abs(y2), Math.abs(y2 - height));
      } else if (gradient.shape === 1) {
        rx = Math.min(Math.abs(x2), Math.abs(x2 - width));
        ry = Math.min(Math.abs(y2), Math.abs(y2 - height));
      }
      break;
    case 2:
      if (gradient.shape === 0) {
        rx = ry = Math.min(distance(x2, y2), distance(x2, y2 - height), distance(x2 - width, y2), distance(x2 - width, y2 - height));
      } else if (gradient.shape === 1) {
        var c = Math.min(Math.abs(y2), Math.abs(y2 - height)) / Math.min(Math.abs(x2), Math.abs(x2 - width));
        var _a = findCorner(width, height, x2, y2, true), cx = _a[0], cy = _a[1];
        rx = distance(cx - x2, (cy - y2) / c);
        ry = c * rx;
      }
      break;
    case 1:
      if (gradient.shape === 0) {
        rx = ry = Math.max(Math.abs(x2), Math.abs(x2 - width), Math.abs(y2), Math.abs(y2 - height));
      } else if (gradient.shape === 1) {
        rx = Math.max(Math.abs(x2), Math.abs(x2 - width));
        ry = Math.max(Math.abs(y2), Math.abs(y2 - height));
      }
      break;
    case 3:
      if (gradient.shape === 0) {
        rx = ry = Math.max(distance(x2, y2), distance(x2, y2 - height), distance(x2 - width, y2), distance(x2 - width, y2 - height));
      } else if (gradient.shape === 1) {
        var c = Math.max(Math.abs(y2), Math.abs(y2 - height)) / Math.max(Math.abs(x2), Math.abs(x2 - width));
        var _b = findCorner(width, height, x2, y2, false), cx = _b[0], cy = _b[1];
        rx = distance(cx - x2, (cy - y2) / c);
        ry = c * rx;
      }
      break;
  }
  if (Array.isArray(gradient.size)) {
    rx = getAbsoluteValue(gradient.size[0], width);
    ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
  }
  return [rx, ry];
};
var linearGradient = function(context, tokens) {
  var angle$1 = deg(180);
  var stops = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    if (i === 0) {
      var firstToken = arg[0];
      if (firstToken.type === 20 && firstToken.value === "to") {
        angle$1 = parseNamedSide(arg);
        return;
      } else if (isAngle(firstToken)) {
        angle$1 = angle.parse(context, firstToken);
        return;
      }
    }
    var colorStop = parseColorStop(context, arg);
    stops.push(colorStop);
  });
  return { angle: angle$1, stops, type: 1 };
};
var prefixLinearGradient = function(context, tokens) {
  var angle$1 = deg(180);
  var stops = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    if (i === 0) {
      var firstToken = arg[0];
      if (firstToken.type === 20 && ["top", "left", "right", "bottom"].indexOf(firstToken.value) !== -1) {
        angle$1 = parseNamedSide(arg);
        return;
      } else if (isAngle(firstToken)) {
        angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
        return;
      }
    }
    var colorStop = parseColorStop(context, arg);
    stops.push(colorStop);
  });
  return {
    angle: angle$1,
    stops,
    type: 1
  };
};
var webkitGradient = function(context, tokens) {
  var angle2 = deg(180);
  var stops = [];
  var type = 1;
  var shape = 0;
  var size = 3;
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    var firstToken = arg[0];
    if (i === 0) {
      if (isIdentToken(firstToken) && firstToken.value === "linear") {
        type = 1;
        return;
      } else if (isIdentToken(firstToken) && firstToken.value === "radial") {
        type = 2;
        return;
      }
    }
    if (firstToken.type === 18) {
      if (firstToken.name === "from") {
        var color2 = color$1.parse(context, firstToken.values[0]);
        stops.push({ stop: ZERO_LENGTH, color: color2 });
      } else if (firstToken.name === "to") {
        var color2 = color$1.parse(context, firstToken.values[0]);
        stops.push({ stop: HUNDRED_PERCENT, color: color2 });
      } else if (firstToken.name === "color-stop") {
        var values = firstToken.values.filter(nonFunctionArgSeparator);
        if (values.length === 2) {
          var color2 = color$1.parse(context, values[1]);
          var stop_1 = values[0];
          if (isNumberToken(stop_1)) {
            stops.push({
              stop: { type: 16, number: stop_1.number * 100, flags: stop_1.flags },
              color: color2
            });
          }
        }
      }
    }
  });
  return type === 1 ? {
    angle: (angle2 + deg(180)) % deg(360),
    stops,
    type
  } : { size, shape, stops, position: position2, type };
};
var CLOSEST_SIDE = "closest-side";
var FARTHEST_SIDE = "farthest-side";
var CLOSEST_CORNER = "closest-corner";
var FARTHEST_CORNER = "farthest-corner";
var CIRCLE = "circle";
var ELLIPSE = "ellipse";
var COVER = "cover";
var CONTAIN = "contain";
var radialGradient = function(context, tokens) {
  var shape = 0;
  var size = 3;
  var stops = [];
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    var isColorStop = true;
    if (i === 0) {
      var isAtPosition_1 = false;
      isColorStop = arg.reduce(function(acc, token) {
        if (isAtPosition_1) {
          if (isIdentToken(token)) {
            switch (token.value) {
              case "center":
                position2.push(FIFTY_PERCENT);
                return acc;
              case "top":
              case "left":
                position2.push(ZERO_LENGTH);
                return acc;
              case "right":
              case "bottom":
                position2.push(HUNDRED_PERCENT);
                return acc;
            }
          } else if (isLengthPercentage(token) || isLength(token)) {
            position2.push(token);
          }
        } else if (isIdentToken(token)) {
          switch (token.value) {
            case CIRCLE:
              shape = 0;
              return false;
            case ELLIPSE:
              shape = 1;
              return false;
            case "at":
              isAtPosition_1 = true;
              return false;
            case CLOSEST_SIDE:
              size = 0;
              return false;
            case COVER:
            case FARTHEST_SIDE:
              size = 1;
              return false;
            case CONTAIN:
            case CLOSEST_CORNER:
              size = 2;
              return false;
            case FARTHEST_CORNER:
              size = 3;
              return false;
          }
        } else if (isLength(token) || isLengthPercentage(token)) {
          if (!Array.isArray(size)) {
            size = [];
          }
          size.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    }
    if (isColorStop) {
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    }
  });
  return { size, shape, stops, position: position2, type: 2 };
};
var prefixRadialGradient = function(context, tokens) {
  var shape = 0;
  var size = 3;
  var stops = [];
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    var isColorStop = true;
    if (i === 0) {
      isColorStop = arg.reduce(function(acc, token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case "center":
              position2.push(FIFTY_PERCENT);
              return false;
            case "top":
            case "left":
              position2.push(ZERO_LENGTH);
              return false;
            case "right":
            case "bottom":
              position2.push(HUNDRED_PERCENT);
              return false;
          }
        } else if (isLengthPercentage(token) || isLength(token)) {
          position2.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    } else if (i === 1) {
      isColorStop = arg.reduce(function(acc, token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case CIRCLE:
              shape = 0;
              return false;
            case ELLIPSE:
              shape = 1;
              return false;
            case CONTAIN:
            case CLOSEST_SIDE:
              size = 0;
              return false;
            case FARTHEST_SIDE:
              size = 1;
              return false;
            case CLOSEST_CORNER:
              size = 2;
              return false;
            case COVER:
            case FARTHEST_CORNER:
              size = 3;
              return false;
          }
        } else if (isLength(token) || isLengthPercentage(token)) {
          if (!Array.isArray(size)) {
            size = [];
          }
          size.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    }
    if (isColorStop) {
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    }
  });
  return { size, shape, stops, position: position2, type: 2 };
};
var isLinearGradient = function(background) {
  return background.type === 1;
};
var isRadialGradient = function(background) {
  return background.type === 2;
};
var image = {
  name: "image",
  parse: function(context, value) {
    if (value.type === 22) {
      var image_1 = { url: value.value, type: 0 };
      context.cache.addImage(value.value);
      return image_1;
    }
    if (value.type === 18) {
      var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
      if (typeof imageFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported image function "' + value.name + '"');
      }
      return imageFunction(context, value.values);
    }
    throw new Error("Unsupported image type " + value.type);
  }
};
function isSupportedImage(value) {
  return !(value.type === 20 && value.value === "none") && (value.type !== 18 || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
}
var SUPPORTED_IMAGE_FUNCTIONS = {
  "linear-gradient": linearGradient,
  "-moz-linear-gradient": prefixLinearGradient,
  "-ms-linear-gradient": prefixLinearGradient,
  "-o-linear-gradient": prefixLinearGradient,
  "-webkit-linear-gradient": prefixLinearGradient,
  "radial-gradient": radialGradient,
  "-moz-radial-gradient": prefixRadialGradient,
  "-ms-radial-gradient": prefixRadialGradient,
  "-o-radial-gradient": prefixRadialGradient,
  "-webkit-radial-gradient": prefixRadialGradient,
  "-webkit-gradient": webkitGradient
};
var backgroundImage = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return [];
    }
    return tokens.filter(function(value) {
      return nonFunctionArgSeparator(value) && isSupportedImage(value);
    }).map(function(value) {
      return image.parse(context, value);
    });
  }
};
var backgroundOrigin = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.map(function(token) {
      if (isIdentToken(token)) {
        switch (token.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      }
      return 0;
    });
  }
};
var backgroundPosition = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isLengthPercentage);
    }).map(parseLengthPercentageTuple);
  }
};
var backgroundRepeat = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isIdentToken).map(function(token) {
        return token.value;
      }).join(" ");
    }).map(parseBackgroundRepeat);
  }
};
var parseBackgroundRepeat = function(value) {
  switch (value) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
};
var BACKGROUND_SIZE;
(function(BACKGROUND_SIZE2) {
  BACKGROUND_SIZE2["AUTO"] = "auto";
  BACKGROUND_SIZE2["CONTAIN"] = "contain";
  BACKGROUND_SIZE2["COVER"] = "cover";
})(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
var backgroundSize = {
  name: "background-size",
  initialValue: "0",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isBackgroundSizeInfoToken);
    });
  }
};
var isBackgroundSizeInfoToken = function(value) {
  return isIdentToken(value) || isLengthPercentage(value);
};
var borderColorForSide = function(side) {
  return {
    name: "border-" + side + "-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  };
};
var borderTopColor = borderColorForSide("top");
var borderRightColor = borderColorForSide("right");
var borderBottomColor = borderColorForSide("bottom");
var borderLeftColor = borderColorForSide("left");
var borderRadiusForSide = function(side) {
  return {
    name: "border-radius-" + side,
    initialValue: "0 0",
    prefix: false,
    type: 1,
    parse: function(_context, tokens) {
      return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
    }
  };
};
var borderTopLeftRadius = borderRadiusForSide("top-left");
var borderTopRightRadius = borderRadiusForSide("top-right");
var borderBottomRightRadius = borderRadiusForSide("bottom-right");
var borderBottomLeftRadius = borderRadiusForSide("bottom-left");
var borderStyleForSide = function(side) {
  return {
    name: "border-" + side + "-style",
    initialValue: "solid",
    prefix: false,
    type: 2,
    parse: function(_context, style2) {
      switch (style2) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
};
var borderTopStyle = borderStyleForSide("top");
var borderRightStyle = borderStyleForSide("right");
var borderBottomStyle = borderStyleForSide("bottom");
var borderLeftStyle = borderStyleForSide("left");
var borderWidthForSide = function(side) {
  return {
    name: "border-" + side + "-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(_context, token) {
      if (isDimensionToken(token)) {
        return token.number;
      }
      return 0;
    }
  };
};
var borderTopWidth = borderWidthForSide("top");
var borderRightWidth = borderWidthForSide("right");
var borderBottomWidth = borderWidthForSide("bottom");
var borderLeftWidth = borderWidthForSide("left");
var color = {
  name: "color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var direction = {
  name: "direction",
  initialValue: "ltr",
  prefix: false,
  type: 2,
  parse: function(_context, direction2) {
    switch (direction2) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
};
var display = {
  name: "display",
  initialValue: "inline-block",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).reduce(function(bit, token) {
      return bit | parseDisplayValue(token.value);
    }, 0);
  }
};
var parseDisplayValue = function(display2) {
  switch (display2) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
};
var float = {
  name: "float",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, float2) {
    switch (float2) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
};
var letterSpacing = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: false,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20 && token.value === "normal") {
      return 0;
    }
    if (token.type === 17) {
      return token.number;
    }
    if (token.type === 15) {
      return token.number;
    }
    return 0;
  }
};
var LINE_BREAK;
(function(LINE_BREAK2) {
  LINE_BREAK2["NORMAL"] = "normal";
  LINE_BREAK2["STRICT"] = "strict";
})(LINE_BREAK || (LINE_BREAK = {}));
var lineBreak = {
  name: "line-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, lineBreak2) {
    switch (lineBreak2) {
      case "strict":
        return LINE_BREAK.STRICT;
      case "normal":
      default:
        return LINE_BREAK.NORMAL;
    }
  }
};
var lineHeight = {
  name: "line-height",
  initialValue: "normal",
  prefix: false,
  type: 4
};
var computeLineHeight = function(token, fontSize2) {
  if (isIdentToken(token) && token.value === "normal") {
    return 1.2 * fontSize2;
  } else if (token.type === 17) {
    return fontSize2 * token.number;
  } else if (isLengthPercentage(token)) {
    return getAbsoluteValue(token, fontSize2);
  }
  return fontSize2;
};
var listStyleImage = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: false,
  parse: function(context, token) {
    if (token.type === 20 && token.value === "none") {
      return null;
    }
    return image.parse(context, token);
  }
};
var listStylePosition = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: false,
  type: 2,
  parse: function(_context, position2) {
    switch (position2) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
};
var listStyleType = {
  name: "list-style-type",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, type) {
    switch (type) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
};
var marginForSide = function(side) {
  return {
    name: "margin-" + side,
    initialValue: "0",
    prefix: false,
    type: 4
  };
};
var marginTop = marginForSide("top");
var marginRight = marginForSide("right");
var marginBottom = marginForSide("bottom");
var marginLeft = marginForSide("left");
var overflow = {
  name: "overflow",
  initialValue: "visible",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(overflow2) {
      switch (overflow2.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
};
var overflowWrap = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, overflow2) {
    switch (overflow2) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
};
var paddingForSide = function(side) {
  return {
    name: "padding-" + side,
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length-percentage"
  };
};
var paddingTop = paddingForSide("top");
var paddingRight = paddingForSide("right");
var paddingBottom = paddingForSide("bottom");
var paddingLeft = paddingForSide("left");
var textAlign = {
  name: "text-align",
  initialValue: "left",
  prefix: false,
  type: 2,
  parse: function(_context, textAlign2) {
    switch (textAlign2) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
};
var position = {
  name: "position",
  initialValue: "static",
  prefix: false,
  type: 2,
  parse: function(_context, position2) {
    switch (position2) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
};
var textShadow = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
      return [];
    }
    return parseFunctionArgs(tokens).map(function(values) {
      var shadow = {
        color: COLORS.TRANSPARENT,
        offsetX: ZERO_LENGTH,
        offsetY: ZERO_LENGTH,
        blur: ZERO_LENGTH
      };
      var c = 0;
      for (var i = 0; i < values.length; i++) {
        var token = values[i];
        if (isLength(token)) {
          if (c === 0) {
            shadow.offsetX = token;
          } else if (c === 1) {
            shadow.offsetY = token;
          } else {
            shadow.blur = token;
          }
          c++;
        } else {
          shadow.color = color$1.parse(context, token);
        }
      }
      return shadow;
    });
  }
};
var textTransform = {
  name: "text-transform",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, textTransform2) {
    switch (textTransform2) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
};
var transform$1 = {
  name: "transform",
  initialValue: "none",
  prefix: true,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20 && token.value === "none") {
      return null;
    }
    if (token.type === 18) {
      var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
      if (typeof transformFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported transform function "' + token.name + '"');
      }
      return transformFunction(token.values);
    }
    return null;
  }
};
var matrix = function(args) {
  var values = args.filter(function(arg) {
    return arg.type === 17;
  }).map(function(arg) {
    return arg.number;
  });
  return values.length === 6 ? values : null;
};
var matrix3d = function(args) {
  var values = args.filter(function(arg) {
    return arg.type === 17;
  }).map(function(arg) {
    return arg.number;
  });
  var a1 = values[0], b1 = values[1];
  values[2];
  values[3];
  var a2 = values[4], b2 = values[5];
  values[6];
  values[7];
  values[8];
  values[9];
  values[10];
  values[11];
  var a4 = values[12], b4 = values[13];
  values[14];
  values[15];
  return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
};
var SUPPORTED_TRANSFORM_FUNCTIONS = {
  matrix,
  matrix3d
};
var DEFAULT_VALUE = {
  type: 16,
  number: 50,
  flags: FLAG_INTEGER
};
var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
var transformOrigin = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    var origins = tokens.filter(isLengthPercentage);
    if (origins.length !== 2) {
      return DEFAULT;
    }
    return [origins[0], origins[1]];
  }
};
var visibility = {
  name: "visible",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, visibility2) {
    switch (visibility2) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
};
var WORD_BREAK;
(function(WORD_BREAK2) {
  WORD_BREAK2["NORMAL"] = "normal";
  WORD_BREAK2["BREAK_ALL"] = "break-all";
  WORD_BREAK2["KEEP_ALL"] = "keep-all";
})(WORD_BREAK || (WORD_BREAK = {}));
var wordBreak = {
  name: "word-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, wordBreak2) {
    switch (wordBreak2) {
      case "break-all":
        return WORD_BREAK.BREAK_ALL;
      case "keep-all":
        return WORD_BREAK.KEEP_ALL;
      case "normal":
      default:
        return WORD_BREAK.NORMAL;
    }
  }
};
var zIndex = {
  name: "z-index",
  initialValue: "auto",
  prefix: false,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20) {
      return { auto: true, order: 0 };
    }
    if (isNumberToken(token)) {
      return { auto: false, order: token.number };
    }
    throw new Error("Invalid z-index number parsed");
  }
};
var time = {
  name: "time",
  parse: function(_context, value) {
    if (value.type === 15) {
      switch (value.unit.toLowerCase()) {
        case "s":
          return 1e3 * value.number;
        case "ms":
          return value.number;
      }
    }
    throw new Error("Unsupported time type");
  }
};
var opacity = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isNumberToken(token)) {
      return token.number;
    }
    return 1;
  }
};
var textDecorationColor = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var textDecorationLine = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(token) {
      switch (token.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(line2) {
      return line2 !== 0;
    });
  }
};
var fontFamily = {
  name: "font-family",
  initialValue: "",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    var accumulator = [];
    var results = [];
    tokens.forEach(function(token) {
      switch (token.type) {
        case 20:
        case 0:
          accumulator.push(token.value);
          break;
        case 17:
          accumulator.push(token.number.toString());
          break;
        case 4:
          results.push(accumulator.join(" "));
          accumulator.length = 0;
          break;
      }
    });
    if (accumulator.length) {
      results.push(accumulator.join(" "));
    }
    return results.map(function(result) {
      return result.indexOf(" ") === -1 ? result : "'" + result + "'";
    });
  }
};
var fontSize = {
  name: "font-size",
  initialValue: "0",
  prefix: false,
  type: 3,
  format: "length"
};
var fontWeight = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isNumberToken(token)) {
      return token.number;
    }
    if (isIdentToken(token)) {
      switch (token.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    }
    return 400;
  }
};
var fontVariant = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(token) {
      return token.value;
    });
  }
};
var fontStyle = {
  name: "font-style",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, overflow2) {
    switch (overflow2) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
};
var contains = function(bit, value) {
  return (bit & value) !== 0;
};
var content = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return [];
    }
    return tokens;
  }
};
var counterIncrement = {
  name: "counter-increment",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return null;
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return null;
    }
    var increments = [];
    var filtered = tokens.filter(nonWhiteSpace);
    for (var i = 0; i < filtered.length; i++) {
      var counter = filtered[i];
      var next2 = filtered[i + 1];
      if (counter.type === 20) {
        var increment = next2 && isNumberToken(next2) ? next2.number : 1;
        increments.push({ counter: counter.value, increment });
      }
    }
    return increments;
  }
};
var counterReset = {
  name: "counter-reset",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var resets = [];
    var filtered = tokens.filter(nonWhiteSpace);
    for (var i = 0; i < filtered.length; i++) {
      var counter = filtered[i];
      var next2 = filtered[i + 1];
      if (isIdentToken(counter) && counter.value !== "none") {
        var reset = next2 && isNumberToken(next2) ? next2.number : 0;
        resets.push({ counter: counter.value, reset });
      }
    }
    return resets;
  }
};
var duration = {
  name: "duration",
  initialValue: "0s",
  prefix: false,
  type: 1,
  parse: function(context, tokens) {
    return tokens.filter(isDimensionToken).map(function(token) {
      return time.parse(context, token);
    });
  }
};
var quotes = {
  name: "quotes",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return null;
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return null;
    }
    var quotes2 = [];
    var filtered = tokens.filter(isStringToken);
    if (filtered.length % 2 !== 0) {
      return null;
    }
    for (var i = 0; i < filtered.length; i += 2) {
      var open_1 = filtered[i].value;
      var close_1 = filtered[i + 1].value;
      quotes2.push({ open: open_1, close: close_1 });
    }
    return quotes2;
  }
};
var getQuote = function(quotes2, depth, open2) {
  if (!quotes2) {
    return "";
  }
  var quote = quotes2[Math.min(depth, quotes2.length - 1)];
  if (!quote) {
    return "";
  }
  return open2 ? quote.open : quote.close;
};
var boxShadow = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
      return [];
    }
    return parseFunctionArgs(tokens).map(function(values) {
      var shadow = {
        color: 255,
        offsetX: ZERO_LENGTH,
        offsetY: ZERO_LENGTH,
        blur: ZERO_LENGTH,
        spread: ZERO_LENGTH,
        inset: false
      };
      var c = 0;
      for (var i = 0; i < values.length; i++) {
        var token = values[i];
        if (isIdentWithValue(token, "inset")) {
          shadow.inset = true;
        } else if (isLength(token)) {
          if (c === 0) {
            shadow.offsetX = token;
          } else if (c === 1) {
            shadow.offsetY = token;
          } else if (c === 2) {
            shadow.blur = token;
          } else {
            shadow.spread = token;
          }
          c++;
        } else {
          shadow.color = color$1.parse(context, token);
        }
      }
      return shadow;
    });
  }
};
var paintOrder = {
  name: "paint-order",
  initialValue: "normal",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    var DEFAULT_VALUE2 = [0, 1, 2];
    var layers = [];
    tokens.filter(isIdentToken).forEach(function(token) {
      switch (token.value) {
        case "stroke":
          layers.push(1);
          break;
        case "fill":
          layers.push(0);
          break;
        case "markers":
          layers.push(2);
          break;
      }
    });
    DEFAULT_VALUE2.forEach(function(value) {
      if (layers.indexOf(value) === -1) {
        layers.push(value);
      }
    });
    return layers;
  }
};
var webkitTextStrokeColor = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: false,
  type: 3,
  format: "color"
};
var webkitTextStrokeWidth = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isDimensionToken(token)) {
      return token.number;
    }
    return 0;
  }
};
var CSSParsedDeclaration = function() {
  function CSSParsedDeclaration2(context, declaration) {
    var _a, _b;
    this.animationDuration = parse(context, duration, declaration.animationDuration);
    this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
    this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
    this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
    this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
    this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
    this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
    this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
    this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
    this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
    this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
    this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
    this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
    this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
    this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
    this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
    this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
    this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
    this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
    this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
    this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
    this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
    this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
    this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
    this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
    this.color = parse(context, color, declaration.color);
    this.direction = parse(context, direction, declaration.direction);
    this.display = parse(context, display, declaration.display);
    this.float = parse(context, float, declaration.cssFloat);
    this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
    this.fontSize = parse(context, fontSize, declaration.fontSize);
    this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
    this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
    this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
    this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
    this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
    this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
    this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
    this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
    this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
    this.marginTop = parse(context, marginTop, declaration.marginTop);
    this.marginRight = parse(context, marginRight, declaration.marginRight);
    this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
    this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
    this.opacity = parse(context, opacity, declaration.opacity);
    var overflowTuple = parse(context, overflow, declaration.overflow);
    this.overflowX = overflowTuple[0];
    this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
    this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
    this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
    this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
    this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
    this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
    this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
    this.position = parse(context, position, declaration.position);
    this.textAlign = parse(context, textAlign, declaration.textAlign);
    this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
    this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
    this.textShadow = parse(context, textShadow, declaration.textShadow);
    this.textTransform = parse(context, textTransform, declaration.textTransform);
    this.transform = parse(context, transform$1, declaration.transform);
    this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
    this.visibility = parse(context, visibility, declaration.visibility);
    this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
    this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
    this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
    this.zIndex = parse(context, zIndex, declaration.zIndex);
  }
  CSSParsedDeclaration2.prototype.isVisible = function() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  };
  CSSParsedDeclaration2.prototype.isTransparent = function() {
    return isTransparent(this.backgroundColor);
  };
  CSSParsedDeclaration2.prototype.isTransformed = function() {
    return this.transform !== null;
  };
  CSSParsedDeclaration2.prototype.isPositioned = function() {
    return this.position !== 0;
  };
  CSSParsedDeclaration2.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  };
  CSSParsedDeclaration2.prototype.isFloating = function() {
    return this.float !== 0;
  };
  CSSParsedDeclaration2.prototype.isInlineLevel = function() {
    return contains(this.display, 4) || contains(this.display, 33554432) || contains(this.display, 268435456) || contains(this.display, 536870912) || contains(this.display, 67108864) || contains(this.display, 134217728);
  };
  return CSSParsedDeclaration2;
}();
var CSSParsedPseudoDeclaration = function() {
  function CSSParsedPseudoDeclaration2(context, declaration) {
    this.content = parse(context, content, declaration.content);
    this.quotes = parse(context, quotes, declaration.quotes);
  }
  return CSSParsedPseudoDeclaration2;
}();
var CSSParsedCounterDeclaration = function() {
  function CSSParsedCounterDeclaration2(context, declaration) {
    this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
    this.counterReset = parse(context, counterReset, declaration.counterReset);
  }
  return CSSParsedCounterDeclaration2;
}();
var parse = function(context, descriptor, style2) {
  var tokenizer = new Tokenizer();
  var value = style2 !== null && typeof style2 !== "undefined" ? style2.toString() : descriptor.initialValue;
  tokenizer.write(value);
  var parser = new Parser(tokenizer.read());
  switch (descriptor.type) {
    case 2:
      var token = parser.parseComponentValue();
      return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
    case 0:
      return descriptor.parse(context, parser.parseComponentValue());
    case 1:
      return descriptor.parse(context, parser.parseComponentValues());
    case 4:
      return parser.parseComponentValue();
    case 3:
      switch (descriptor.format) {
        case "angle":
          return angle.parse(context, parser.parseComponentValue());
        case "color":
          return color$1.parse(context, parser.parseComponentValue());
        case "image":
          return image.parse(context, parser.parseComponentValue());
        case "length":
          var length_1 = parser.parseComponentValue();
          return isLength(length_1) ? length_1 : ZERO_LENGTH;
        case "length-percentage":
          var value_1 = parser.parseComponentValue();
          return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
        case "time":
          return time.parse(context, parser.parseComponentValue());
      }
      break;
  }
};
var elementDebuggerAttribute = "data-html2canvas-debug";
var getElementDebugType = function(element) {
  var attribute = element.getAttribute(elementDebuggerAttribute);
  switch (attribute) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
};
var isDebugging = function(element, type) {
  var elementType = getElementDebugType(element);
  return elementType === 1 || type === elementType;
};
var ElementContainer = function() {
  function ElementContainer2(context, element) {
    this.context = context;
    this.textNodes = [];
    this.elements = [];
    this.flags = 0;
    if (isDebugging(element, 3)) {
      debugger;
    }
    this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
    if (isHTMLElementNode(element)) {
      if (this.styles.animationDuration.some(function(duration2) {
        return duration2 > 0;
      })) {
        element.style.animationDuration = "0s";
      }
      if (this.styles.transform !== null) {
        element.style.transform = "none";
      }
    }
    this.bounds = parseBounds(this.context, element);
    if (isDebugging(element, 4)) {
      this.flags |= 16;
    }
  }
  return ElementContainer2;
}();
var base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=";
var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
  lookup$1[chars$1.charCodeAt(i$1)] = i$1;
}
var decode = function(base642) {
  var bufferLength = base642.length * 0.75, len = base642.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base642[base642.length - 1] === "=") {
    bufferLength--;
    if (base642[base642.length - 2] === "=") {
      bufferLength--;
    }
  }
  var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
  var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup$1[base642.charCodeAt(i)];
    encoded2 = lookup$1[base642.charCodeAt(i + 1)];
    encoded3 = lookup$1[base642.charCodeAt(i + 2)];
    encoded4 = lookup$1[base642.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return buffer;
};
var polyUint16Array = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 2) {
    bytes.push(buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var polyUint32Array = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 4) {
    bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var UTRIE2_SHIFT_2 = 5;
var UTRIE2_SHIFT_1 = 6 + 5;
var UTRIE2_INDEX_SHIFT = 2;
var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
var UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2;
var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2;
var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 2048 >> 6;
var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1;
var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
var slice16 = function(view, start2, end) {
  if (view.slice) {
    return view.slice(start2, end);
  }
  return new Uint16Array(Array.prototype.slice.call(view, start2, end));
};
var slice32 = function(view, start2, end) {
  if (view.slice) {
    return view.slice(start2, end);
  }
  return new Uint32Array(Array.prototype.slice.call(view, start2, end));
};
var createTrieFromBase64 = function(base642, _byteLength) {
  var buffer = decode(base642);
  var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
  var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
  var headerLength = 24;
  var index = slice16(view16, headerLength / 2, view32[4] / 2);
  var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
  return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie = function() {
  function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
    this.initialValue = initialValue;
    this.errorValue = errorValue;
    this.highStart = highStart;
    this.highValueIndex = highValueIndex;
    this.index = index;
    this.data = data;
  }
  Trie2.prototype.get = function(codePoint) {
    var ix;
    if (codePoint >= 0) {
      if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
        ix = this.index[codePoint >> UTRIE2_SHIFT_2];
        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
        return this.data[ix];
      }
      if (codePoint <= 65535) {
        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 55296 >> UTRIE2_SHIFT_2)];
        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
        return this.data[ix];
      }
      if (codePoint < this.highStart) {
        ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
        ix = this.index[ix];
        ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
        ix = this.index[ix];
        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
        return this.data[ix];
      }
      if (codePoint <= 1114111) {
        return this.data[this.highValueIndex];
      }
    }
    return this.errorValue;
  };
  return Trie2;
}();
var chars$4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i = 0; i < chars$4.length; i++) {
  lookup[chars$4.charCodeAt(i)] = i;
}
var Prepend = 1;
var CR = 2;
var LF = 3;
var Control = 4;
var Extend = 5;
var SpacingMark = 7;
var L = 8;
var V = 9;
var T = 10;
var LV = 11;
var LVT = 12;
var ZWJ = 13;
var Extended_Pictographic = 14;
var RI = 15;
var toCodePoints = function(str) {
  var codePoints = [];
  var i = 0;
  var length = str.length;
  while (i < length) {
    var value = str.charCodeAt(i++);
    if (value >= 55296 && value <= 56319 && i < length) {
      var extra = str.charCodeAt(i++);
      if ((extra & 64512) === 56320) {
        codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        codePoints.push(value);
        i--;
      }
    } else {
      codePoints.push(value);
    }
  }
  return codePoints;
};
var fromCodePoint = function() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  if (String.fromCodePoint) {
    return String.fromCodePoint.apply(String, codePoints);
  }
  var length = codePoints.length;
  if (!length) {
    return "";
  }
  var codeUnits = [];
  var index = -1;
  var result = "";
  while (++index < length) {
    var codePoint = codePoints[index];
    if (codePoint <= 65535) {
      codeUnits.push(codePoint);
    } else {
      codePoint -= 65536;
      codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
    }
    if (index + 1 === length || codeUnits.length > 16384) {
      result += String.fromCharCode.apply(String, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
var UnicodeTrie = createTrieFromBase64(base64);
var BREAK_NOT_ALLOWED = "\xD7";
var BREAK_ALLOWED = "\xF7";
var codePointToClass = function(codePoint) {
  return UnicodeTrie.get(codePoint);
};
var _graphemeBreakAtIndex = function(_codePoints, classTypes, index) {
  var prevIndex = index - 2;
  var prev2 = classTypes[prevIndex];
  var current = classTypes[index - 1];
  var next2 = classTypes[index];
  if (current === CR && next2 === LF) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === CR || current === LF || current === Control) {
    return BREAK_ALLOWED;
  }
  if (next2 === CR || next2 === LF || next2 === Control) {
    return BREAK_ALLOWED;
  }
  if (current === L && [L, V, LV, LVT].indexOf(next2) !== -1) {
    return BREAK_NOT_ALLOWED;
  }
  if ((current === LV || current === V) && (next2 === V || next2 === T)) {
    return BREAK_NOT_ALLOWED;
  }
  if ((current === LVT || current === T) && next2 === T) {
    return BREAK_NOT_ALLOWED;
  }
  if (next2 === ZWJ || next2 === Extend) {
    return BREAK_NOT_ALLOWED;
  }
  if (next2 === SpacingMark) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === Prepend) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === ZWJ && next2 === Extended_Pictographic) {
    while (prev2 === Extend) {
      prev2 = classTypes[--prevIndex];
    }
    if (prev2 === Extended_Pictographic) {
      return BREAK_NOT_ALLOWED;
    }
  }
  if (current === RI && next2 === RI) {
    var countRI = 0;
    while (prev2 === RI) {
      countRI++;
      prev2 = classTypes[--prevIndex];
    }
    if (countRI % 2 === 0) {
      return BREAK_NOT_ALLOWED;
    }
  }
  return BREAK_ALLOWED;
};
var GraphemeBreaker = function(str) {
  var codePoints = toCodePoints(str);
  var length = codePoints.length;
  var index = 0;
  var lastEnd = 0;
  var classTypes = codePoints.map(codePointToClass);
  return {
    next: function() {
      if (index >= length) {
        return { done: true, value: null };
      }
      var graphemeBreak = BREAK_NOT_ALLOWED;
      while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {
      }
      if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
        var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
        lastEnd = index;
        return { value, done: false };
      }
      return { done: true, value: null };
    }
  };
};
var splitGraphemes = function(str) {
  var breaker = GraphemeBreaker(str);
  var graphemes = [];
  var bk;
  while (!(bk = breaker.next()).done) {
    if (bk.value) {
      graphemes.push(bk.value.slice());
    }
  }
  return graphemes;
};
var testRangeBounds = function(document2) {
  var TEST_HEIGHT = 123;
  if (document2.createRange) {
    var range = document2.createRange();
    if (range.getBoundingClientRect) {
      var testElement = document2.createElement("boundtest");
      testElement.style.height = TEST_HEIGHT + "px";
      testElement.style.display = "block";
      document2.body.appendChild(testElement);
      range.selectNode(testElement);
      var rangeBounds = range.getBoundingClientRect();
      var rangeHeight = Math.round(rangeBounds.height);
      document2.body.removeChild(testElement);
      if (rangeHeight === TEST_HEIGHT) {
        return true;
      }
    }
  }
  return false;
};
var testIOSLineBreak = function(document2) {
  var testElement = document2.createElement("boundtest");
  testElement.style.width = "50px";
  testElement.style.display = "block";
  testElement.style.fontSize = "12px";
  testElement.style.letterSpacing = "0px";
  testElement.style.wordSpacing = "0px";
  document2.body.appendChild(testElement);
  var range = document2.createRange();
  testElement.innerHTML = typeof "".repeat === "function" ? "&#128104;".repeat(10) : "";
  var node = testElement.firstChild;
  var textList = toCodePoints$1(node.data).map(function(i) {
    return fromCodePoint$1(i);
  });
  var offset = 0;
  var prev2 = {};
  var supports = textList.every(function(text2, i) {
    range.setStart(node, offset);
    range.setEnd(node, offset + text2.length);
    var rect = range.getBoundingClientRect();
    offset += text2.length;
    var boundAhead = rect.x > prev2.x || rect.y > prev2.y;
    prev2 = rect;
    if (i === 0) {
      return true;
    }
    return boundAhead;
  });
  document2.body.removeChild(testElement);
  return supports;
};
var testCORS = function() {
  return typeof new Image().crossOrigin !== "undefined";
};
var testResponseType = function() {
  return typeof new XMLHttpRequest().responseType === "string";
};
var testSVG = function(document2) {
  var img = new Image();
  var canvas = document2.createElement("canvas");
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return false;
  }
  img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    ctx.drawImage(img, 0, 0);
    canvas.toDataURL();
  } catch (e2) {
    return false;
  }
  return true;
};
var isGreenPixel = function(data) {
  return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};
var testForeignObject = function(document2) {
  var canvas = document2.createElement("canvas");
  var size = 100;
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return Promise.reject(false);
  }
  ctx.fillStyle = "rgb(0, 255, 0)";
  ctx.fillRect(0, 0, size, size);
  var img = new Image();
  var greenImageSrc = canvas.toDataURL();
  img.src = greenImageSrc;
  var svg2 = createForeignObjectSVG(size, size, 0, 0, img);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, size, size);
  return loadSerializedSVG$1(svg2).then(function(img2) {
    ctx.drawImage(img2, 0, 0);
    var data = ctx.getImageData(0, 0, size, size).data;
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, size);
    var node = document2.createElement("div");
    node.style.backgroundImage = "url(" + greenImageSrc + ")";
    node.style.height = size + "px";
    return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
  }).then(function(img2) {
    ctx.drawImage(img2, 0, 0);
    return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
  }).catch(function() {
    return false;
  });
};
var createForeignObjectSVG = function(width, height, x2, y2, node) {
  var xmlns = "http://www.w3.org/2000/svg";
  var svg2 = document.createElementNS(xmlns, "svg");
  var foreignObject = document.createElementNS(xmlns, "foreignObject");
  svg2.setAttributeNS(null, "width", width.toString());
  svg2.setAttributeNS(null, "height", height.toString());
  foreignObject.setAttributeNS(null, "width", "100%");
  foreignObject.setAttributeNS(null, "height", "100%");
  foreignObject.setAttributeNS(null, "x", x2.toString());
  foreignObject.setAttributeNS(null, "y", y2.toString());
  foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
  svg2.appendChild(foreignObject);
  foreignObject.appendChild(node);
  return svg2;
};
var loadSerializedSVG$1 = function(svg2) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      return resolve(img);
    };
    img.onerror = reject;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg2));
  });
};
var FEATURES = {
  get SUPPORT_RANGE_BOUNDS() {
    var value = testRangeBounds(document);
    Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", { value });
    return value;
  },
  get SUPPORT_WORD_BREAKING() {
    var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
    Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", { value });
    return value;
  },
  get SUPPORT_SVG_DRAWING() {
    var value = testSVG(document);
    Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", { value });
    return value;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var value = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
    Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", { value });
    return value;
  },
  get SUPPORT_CORS_IMAGES() {
    var value = testCORS();
    Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", { value });
    return value;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var value = testResponseType();
    Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", { value });
    return value;
  },
  get SUPPORT_CORS_XHR() {
    var value = "withCredentials" in new XMLHttpRequest();
    Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", { value });
    return value;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var value = !!(typeof Intl !== "undefined" && Intl.Segmenter);
    Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value });
    return value;
  }
};
var TextBounds = function() {
  function TextBounds2(text2, bounds) {
    this.text = text2;
    this.bounds = bounds;
  }
  return TextBounds2;
}();
var parseTextBounds = function(context, value, styles, node) {
  var textList = breakText(value, styles);
  var textBounds = [];
  var offset = 0;
  textList.forEach(function(text2) {
    if (styles.textDecorationLine.length || text2.trim().length > 0) {
      if (FEATURES.SUPPORT_RANGE_BOUNDS) {
        var clientRects = createRange(node, offset, text2.length).getClientRects();
        if (clientRects.length > 1) {
          var subSegments = segmentGraphemes(text2);
          var subOffset_1 = 0;
          subSegments.forEach(function(subSegment) {
            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
            subOffset_1 += subSegment.length;
          });
        } else {
          textBounds.push(new TextBounds(text2, Bounds.fromDOMRectList(context, clientRects)));
        }
      } else {
        var replacementNode = node.splitText(text2.length);
        textBounds.push(new TextBounds(text2, getWrapperBounds(context, node)));
        node = replacementNode;
      }
    } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
      node = node.splitText(text2.length);
    }
    offset += text2.length;
  });
  return textBounds;
};
var getWrapperBounds = function(context, node) {
  var ownerDocument = node.ownerDocument;
  if (ownerDocument) {
    var wrapper = ownerDocument.createElement("html2canvaswrapper");
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
      parentNode.replaceChild(wrapper, node);
      var bounds = parseBounds(context, wrapper);
      if (wrapper.firstChild) {
        parentNode.replaceChild(wrapper.firstChild, wrapper);
      }
      return bounds;
    }
  }
  return Bounds.EMPTY;
};
var createRange = function(node, offset, length) {
  var ownerDocument = node.ownerDocument;
  if (!ownerDocument) {
    throw new Error("Node has no owner document");
  }
  var range = ownerDocument.createRange();
  range.setStart(node, offset);
  range.setEnd(node, offset + length);
  return range;
};
var segmentGraphemes = function(value) {
  if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(segmenter.segment(value)).map(function(segment) {
      return segment.segment;
    });
  }
  return splitGraphemes(value);
};
var segmentWords = function(value, styles) {
  if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var segmenter = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(segmenter.segment(value)).map(function(segment) {
      return segment.segment;
    });
  }
  return breakWords(value, styles);
};
var breakText = function(value, styles) {
  return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
};
var wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241];
var breakWords = function(str, styles) {
  var breaker = LineBreaker(str, {
    lineBreak: styles.lineBreak,
    wordBreak: styles.overflowWrap === "break-word" ? "break-word" : styles.wordBreak
  });
  var words = [];
  var bk;
  var _loop_1 = function() {
    if (bk.value) {
      var value = bk.value.slice();
      var codePoints = toCodePoints$1(value);
      var word_1 = "";
      codePoints.forEach(function(codePoint) {
        if (wordSeparators.indexOf(codePoint) === -1) {
          word_1 += fromCodePoint$1(codePoint);
        } else {
          if (word_1.length) {
            words.push(word_1);
          }
          words.push(fromCodePoint$1(codePoint));
          word_1 = "";
        }
      });
      if (word_1.length) {
        words.push(word_1);
      }
    }
  };
  while (!(bk = breaker.next()).done) {
    _loop_1();
  }
  return words;
};
var TextContainer = function() {
  function TextContainer2(context, node, styles) {
    this.text = transform(node.data, styles.textTransform);
    this.textBounds = parseTextBounds(context, this.text, styles, node);
  }
  return TextContainer2;
}();
var transform = function(text2, transform2) {
  switch (transform2) {
    case 1:
      return text2.toLowerCase();
    case 3:
      return text2.replace(CAPITALIZE, capitalize$1);
    case 2:
      return text2.toUpperCase();
    default:
      return text2;
  }
};
var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
var capitalize$1 = function(m, p1, p2) {
  if (m.length > 0) {
    return p1 + p2.toUpperCase();
  }
  return m;
};
var ImageElementContainer = function(_super) {
  __extends(ImageElementContainer2, _super);
  function ImageElementContainer2(context, img) {
    var _this = _super.call(this, context, img) || this;
    _this.src = img.currentSrc || img.src;
    _this.intrinsicWidth = img.naturalWidth;
    _this.intrinsicHeight = img.naturalHeight;
    _this.context.cache.addImage(_this.src);
    return _this;
  }
  return ImageElementContainer2;
}(ElementContainer);
var CanvasElementContainer = function(_super) {
  __extends(CanvasElementContainer2, _super);
  function CanvasElementContainer2(context, canvas) {
    var _this = _super.call(this, context, canvas) || this;
    _this.canvas = canvas;
    _this.intrinsicWidth = canvas.width;
    _this.intrinsicHeight = canvas.height;
    return _this;
  }
  return CanvasElementContainer2;
}(ElementContainer);
var SVGElementContainer = function(_super) {
  __extends(SVGElementContainer2, _super);
  function SVGElementContainer2(context, img) {
    var _this = _super.call(this, context, img) || this;
    var s = new XMLSerializer();
    var bounds = parseBounds(context, img);
    img.setAttribute("width", bounds.width + "px");
    img.setAttribute("height", bounds.height + "px");
    _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
    _this.intrinsicWidth = img.width.baseVal.value;
    _this.intrinsicHeight = img.height.baseVal.value;
    _this.context.cache.addImage(_this.svg);
    return _this;
  }
  return SVGElementContainer2;
}(ElementContainer);
var LIElementContainer = function(_super) {
  __extends(LIElementContainer2, _super);
  function LIElementContainer2(context, element) {
    var _this = _super.call(this, context, element) || this;
    _this.value = element.value;
    return _this;
  }
  return LIElementContainer2;
}(ElementContainer);
var OLElementContainer = function(_super) {
  __extends(OLElementContainer2, _super);
  function OLElementContainer2(context, element) {
    var _this = _super.call(this, context, element) || this;
    _this.start = element.start;
    _this.reversed = typeof element.reversed === "boolean" && element.reversed === true;
    return _this;
  }
  return OLElementContainer2;
}(ElementContainer);
var CHECKBOX_BORDER_RADIUS = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
];
var RADIO_BORDER_RADIUS = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
];
var reformatInputBounds = function(bounds) {
  if (bounds.width > bounds.height) {
    return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
  } else if (bounds.width < bounds.height) {
    return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
  }
  return bounds;
};
var getInputValue = function(node) {
  var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("\u2022") : node.value;
  return value.length === 0 ? node.placeholder || "" : value;
};
var CHECKBOX = "checkbox";
var RADIO = "radio";
var PASSWORD = "password";
var INPUT_COLOR = 707406591;
var InputElementContainer = function(_super) {
  __extends(InputElementContainer2, _super);
  function InputElementContainer2(context, input) {
    var _this = _super.call(this, context, input) || this;
    _this.type = input.type.toLowerCase();
    _this.checked = input.checked;
    _this.value = getInputValue(input);
    if (_this.type === CHECKBOX || _this.type === RADIO) {
      _this.styles.backgroundColor = 3739148031;
      _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 2779096575;
      _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
      _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1;
      _this.styles.backgroundClip = [0];
      _this.styles.backgroundOrigin = [0];
      _this.bounds = reformatInputBounds(_this.bounds);
    }
    switch (_this.type) {
      case CHECKBOX:
        _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
        break;
      case RADIO:
        _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
        break;
    }
    return _this;
  }
  return InputElementContainer2;
}(ElementContainer);
var SelectElementContainer = function(_super) {
  __extends(SelectElementContainer2, _super);
  function SelectElementContainer2(context, element) {
    var _this = _super.call(this, context, element) || this;
    var option = element.options[element.selectedIndex || 0];
    _this.value = option ? option.text || "" : "";
    return _this;
  }
  return SelectElementContainer2;
}(ElementContainer);
var TextareaElementContainer = function(_super) {
  __extends(TextareaElementContainer2, _super);
  function TextareaElementContainer2(context, element) {
    var _this = _super.call(this, context, element) || this;
    _this.value = element.value;
    return _this;
  }
  return TextareaElementContainer2;
}(ElementContainer);
var IFrameElementContainer = function(_super) {
  __extends(IFrameElementContainer2, _super);
  function IFrameElementContainer2(context, iframe) {
    var _this = _super.call(this, context, iframe) || this;
    _this.src = iframe.src;
    _this.width = parseInt(iframe.width, 10) || 0;
    _this.height = parseInt(iframe.height, 10) || 0;
    _this.backgroundColor = _this.styles.backgroundColor;
    try {
      if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
        _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
        var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
        var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
        _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
      }
    } catch (e2) {
    }
    return _this;
  }
  return IFrameElementContainer2;
}(ElementContainer);
var LIST_OWNERS = ["OL", "UL", "MENU"];
var parseNodeTree = function(context, node, parent, root2) {
  for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
    nextNode = childNode.nextSibling;
    if (isTextNode(childNode) && childNode.data.trim().length > 0) {
      parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
    } else if (isElementNode(childNode)) {
      if (isSlotElement(childNode) && childNode.assignedNodes) {
        childNode.assignedNodes().forEach(function(childNode2) {
          return parseNodeTree(context, childNode2, parent, root2);
        });
      } else {
        var container2 = createContainer(context, childNode);
        if (container2.styles.isVisible()) {
          if (createsRealStackingContext(childNode, container2, root2)) {
            container2.flags |= 4;
          } else if (createsStackingContext(container2.styles)) {
            container2.flags |= 2;
          }
          if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
            container2.flags |= 8;
          }
          parent.elements.push(container2);
          childNode.slot;
          if (childNode.shadowRoot) {
            parseNodeTree(context, childNode.shadowRoot, container2, root2);
          } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
            parseNodeTree(context, childNode, container2, root2);
          }
        }
      }
    }
  }
};
var createContainer = function(context, element) {
  if (isImageElement(element)) {
    return new ImageElementContainer(context, element);
  }
  if (isCanvasElement(element)) {
    return new CanvasElementContainer(context, element);
  }
  if (isSVGElement(element)) {
    return new SVGElementContainer(context, element);
  }
  if (isLIElement(element)) {
    return new LIElementContainer(context, element);
  }
  if (isOLElement(element)) {
    return new OLElementContainer(context, element);
  }
  if (isInputElement(element)) {
    return new InputElementContainer(context, element);
  }
  if (isSelectElement(element)) {
    return new SelectElementContainer(context, element);
  }
  if (isTextareaElement(element)) {
    return new TextareaElementContainer(context, element);
  }
  if (isIFrameElement(element)) {
    return new IFrameElementContainer(context, element);
  }
  return new ElementContainer(context, element);
};
var parseTree = function(context, element) {
  var container2 = createContainer(context, element);
  container2.flags |= 4;
  parseNodeTree(context, element, container2, container2);
  return container2;
};
var createsRealStackingContext = function(node, container2, root2) {
  return container2.styles.isPositionedWithZIndex() || container2.styles.opacity < 1 || container2.styles.isTransformed() || isBodyElement(node) && root2.styles.isTransparent();
};
var createsStackingContext = function(styles) {
  return styles.isPositioned() || styles.isFloating();
};
var isTextNode = function(node) {
  return node.nodeType === Node.TEXT_NODE;
};
var isElementNode = function(node) {
  return node.nodeType === Node.ELEMENT_NODE;
};
var isHTMLElementNode = function(node) {
  return isElementNode(node) && typeof node.style !== "undefined" && !isSVGElementNode(node);
};
var isSVGElementNode = function(element) {
  return typeof element.className === "object";
};
var isLIElement = function(node) {
  return node.tagName === "LI";
};
var isOLElement = function(node) {
  return node.tagName === "OL";
};
var isInputElement = function(node) {
  return node.tagName === "INPUT";
};
var isHTMLElement = function(node) {
  return node.tagName === "HTML";
};
var isSVGElement = function(node) {
  return node.tagName === "svg";
};
var isBodyElement = function(node) {
  return node.tagName === "BODY";
};
var isCanvasElement = function(node) {
  return node.tagName === "CANVAS";
};
var isVideoElement = function(node) {
  return node.tagName === "VIDEO";
};
var isImageElement = function(node) {
  return node.tagName === "IMG";
};
var isIFrameElement = function(node) {
  return node.tagName === "IFRAME";
};
var isStyleElement = function(node) {
  return node.tagName === "STYLE";
};
var isScriptElement = function(node) {
  return node.tagName === "SCRIPT";
};
var isTextareaElement = function(node) {
  return node.tagName === "TEXTAREA";
};
var isSelectElement = function(node) {
  return node.tagName === "SELECT";
};
var isSlotElement = function(node) {
  return node.tagName === "SLOT";
};
var isCustomElement = function(node) {
  return node.tagName.indexOf("-") > 0;
};
var CounterState = function() {
  function CounterState2() {
    this.counters = {};
  }
  CounterState2.prototype.getCounterValue = function(name) {
    var counter = this.counters[name];
    if (counter && counter.length) {
      return counter[counter.length - 1];
    }
    return 1;
  };
  CounterState2.prototype.getCounterValues = function(name) {
    var counter = this.counters[name];
    return counter ? counter : [];
  };
  CounterState2.prototype.pop = function(counters) {
    var _this = this;
    counters.forEach(function(counter) {
      return _this.counters[counter].pop();
    });
  };
  CounterState2.prototype.parse = function(style2) {
    var _this = this;
    var counterIncrement2 = style2.counterIncrement;
    var counterReset2 = style2.counterReset;
    var canReset = true;
    if (counterIncrement2 !== null) {
      counterIncrement2.forEach(function(entry) {
        var counter = _this.counters[entry.counter];
        if (counter && entry.increment !== 0) {
          canReset = false;
          if (!counter.length) {
            counter.push(1);
          }
          counter[Math.max(0, counter.length - 1)] += entry.increment;
        }
      });
    }
    var counterNames = [];
    if (canReset) {
      counterReset2.forEach(function(entry) {
        var counter = _this.counters[entry.counter];
        counterNames.push(entry.counter);
        if (!counter) {
          counter = _this.counters[entry.counter] = [];
        }
        counter.push(entry.reset);
      });
    }
    return counterNames;
  };
  return CounterState2;
}();
var ROMAN_UPPER = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
};
var ARMENIAN = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "\u0554",
    "\u0553",
    "\u0552",
    "\u0551",
    "\u0550",
    "\u054F",
    "\u054E",
    "\u054D",
    "\u054C",
    "\u054B",
    "\u054A",
    "\u0549",
    "\u0548",
    "\u0547",
    "\u0546",
    "\u0545",
    "\u0544",
    "\u0543",
    "\u0542",
    "\u0541",
    "\u0540",
    "\u053F",
    "\u053E",
    "\u053D",
    "\u053C",
    "\u053B",
    "\u053A",
    "\u0539",
    "\u0538",
    "\u0537",
    "\u0536",
    "\u0535",
    "\u0534",
    "\u0533",
    "\u0532",
    "\u0531"
  ]
};
var HEBREW = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "\u05D9\u05F3",
    "\u05D8\u05F3",
    "\u05D7\u05F3",
    "\u05D6\u05F3",
    "\u05D5\u05F3",
    "\u05D4\u05F3",
    "\u05D3\u05F3",
    "\u05D2\u05F3",
    "\u05D1\u05F3",
    "\u05D0\u05F3",
    "\u05EA",
    "\u05E9",
    "\u05E8",
    "\u05E7",
    "\u05E6",
    "\u05E4",
    "\u05E2",
    "\u05E1",
    "\u05E0",
    "\u05DE",
    "\u05DC",
    "\u05DB",
    "\u05D9\u05D8",
    "\u05D9\u05D7",
    "\u05D9\u05D6",
    "\u05D8\u05D6",
    "\u05D8\u05D5",
    "\u05D9",
    "\u05D8",
    "\u05D7",
    "\u05D6",
    "\u05D5",
    "\u05D4",
    "\u05D3",
    "\u05D2",
    "\u05D1",
    "\u05D0"
  ]
};
var GEORGIAN = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "\u10F5",
    "\u10F0",
    "\u10EF",
    "\u10F4",
    "\u10EE",
    "\u10ED",
    "\u10EC",
    "\u10EB",
    "\u10EA",
    "\u10E9",
    "\u10E8",
    "\u10E7",
    "\u10E6",
    "\u10E5",
    "\u10E4",
    "\u10F3",
    "\u10E2",
    "\u10E1",
    "\u10E0",
    "\u10DF",
    "\u10DE",
    "\u10DD",
    "\u10F2",
    "\u10DC",
    "\u10DB",
    "\u10DA",
    "\u10D9",
    "\u10D8",
    "\u10D7",
    "\u10F1",
    "\u10D6",
    "\u10D5",
    "\u10D4",
    "\u10D3",
    "\u10D2",
    "\u10D1",
    "\u10D0"
  ]
};
var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
  if (value < min || value > max) {
    return createCounterText(value, fallback, suffix.length > 0);
  }
  return symbols.integers.reduce(function(string, integer, index) {
    while (value >= integer) {
      value -= integer;
      string += symbols.values[index];
    }
    return string;
  }, "") + suffix;
};
var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
  var string = "";
  do {
    if (!isNumeric) {
      value--;
    }
    string = resolver(value) + string;
    value /= codePointRangeLength;
  } while (value * codePointRangeLength >= codePointRangeLength);
  return string;
};
var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
  var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
  return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
    return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
  }) + suffix);
};
var createCounterStyleFromSymbols = function(value, symbols, suffix) {
  if (suffix === void 0) {
    suffix = ". ";
  }
  var codePointRangeLength = symbols.length;
  return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
    return symbols[Math.floor(codePoint % codePointRangeLength)];
  }) + suffix;
};
var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
  if (value < -9999 || value > 9999) {
    return createCounterText(value, 4, suffix.length > 0);
  }
  var tmp = Math.abs(value);
  var string = suffix;
  if (tmp === 0) {
    return numbers[0] + string;
  }
  for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
    var coefficient = tmp % 10;
    if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== "") {
      string = numbers[coefficient] + string;
    } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
      string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
    } else if (coefficient === 1 && digit > 0) {
      string = multipliers[digit - 1] + string;
    }
    tmp = Math.floor(tmp / 10);
  }
  return (value < 0 ? negativeSign : "") + string;
};
var CHINESE_INFORMAL_MULTIPLIERS = "\u5341\u767E\u5343\u842C";
var CHINESE_FORMAL_MULTIPLIERS = "\u62FE\u4F70\u4EDF\u842C";
var JAPANESE_NEGATIVE = "\u30DE\u30A4\u30CA\u30B9";
var KOREAN_NEGATIVE = "\uB9C8\uC774\uB108\uC2A4";
var createCounterText = function(value, type, appendSuffix) {
  var defaultSuffix = appendSuffix ? ". " : "";
  var cjkSuffix = appendSuffix ? "\u3001" : "";
  var koreanSuffix = appendSuffix ? ", " : "";
  var spaceSuffix = appendSuffix ? " " : "";
  switch (type) {
    case 0:
      return "\u2022" + spaceSuffix;
    case 1:
      return "\u25E6" + spaceSuffix;
    case 2:
      return "\u25FE" + spaceSuffix;
    case 5:
      var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
      return string.length < 4 ? "0" + string : string;
    case 4:
      return createCounterStyleFromSymbols(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", cjkSuffix);
    case 6:
      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix).toLowerCase();
    case 7:
      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix);
    case 8:
      return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
    case 9:
      return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
    case 10:
      return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
    case 11:
      return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
    case 12:
    case 49:
      return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix);
    case 35:
      return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix).toLowerCase();
    case 13:
      return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
    case 14:
    case 30:
      return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
    case 15:
      return createCounterStyleFromSymbols(value, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", cjkSuffix);
    case 16:
      return createCounterStyleFromSymbols(value, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", cjkSuffix);
    case 17:
    case 48:
      return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 47:
      return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 42:
      return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 41:
      return createCJKCounter(value, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 26:
      return createCJKCounter(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, 0);
    case 25:
      return createCJKCounter(value, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 31:
      return createCJKCounter(value, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 33:
      return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", KOREAN_NEGATIVE, koreanSuffix, 0);
    case 32:
      return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 18:
      return createCounterStyleFromRange(value, 2406, 2415, true, defaultSuffix);
    case 20:
      return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3, defaultSuffix);
    case 21:
      return createCounterStyleFromRange(value, 2790, 2799, true, defaultSuffix);
    case 22:
      return createCounterStyleFromRange(value, 2662, 2671, true, defaultSuffix);
    case 22:
      return createAdditiveCounter(value, 1, 10999, HEBREW, 3, defaultSuffix);
    case 23:
      return createCounterStyleFromSymbols(value, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
    case 24:
      return createCounterStyleFromSymbols(value, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
    case 27:
      return createCounterStyleFromRange(value, 3302, 3311, true, defaultSuffix);
    case 28:
      return createCounterStyleFromSymbols(value, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", cjkSuffix);
    case 29:
      return createCounterStyleFromSymbols(value, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", cjkSuffix);
    case 34:
      return createCounterStyleFromRange(value, 3792, 3801, true, defaultSuffix);
    case 37:
      return createCounterStyleFromRange(value, 6160, 6169, true, defaultSuffix);
    case 38:
      return createCounterStyleFromRange(value, 4160, 4169, true, defaultSuffix);
    case 39:
      return createCounterStyleFromRange(value, 2918, 2927, true, defaultSuffix);
    case 40:
      return createCounterStyleFromRange(value, 1776, 1785, true, defaultSuffix);
    case 43:
      return createCounterStyleFromRange(value, 3046, 3055, true, defaultSuffix);
    case 44:
      return createCounterStyleFromRange(value, 3174, 3183, true, defaultSuffix);
    case 45:
      return createCounterStyleFromRange(value, 3664, 3673, true, defaultSuffix);
    case 46:
      return createCounterStyleFromRange(value, 3872, 3881, true, defaultSuffix);
    case 3:
    default:
      return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
  }
};
var IGNORE_ATTRIBUTE = "data-html2canvas-ignore";
var DocumentCloner = function() {
  function DocumentCloner2(context, element, options) {
    this.context = context;
    this.options = options;
    this.scrolledElements = [];
    this.referenceElement = element;
    this.counters = new CounterState();
    this.quoteDepth = 0;
    if (!element.ownerDocument) {
      throw new Error("Cloned element does not have an owner document");
    }
    this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
  }
  DocumentCloner2.prototype.toIFrame = function(ownerDocument, windowSize) {
    var _this = this;
    var iframe = createIFrameContainer(ownerDocument, windowSize);
    if (!iframe.contentWindow) {
      return Promise.reject("Unable to find iframe window");
    }
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;
    var cloneWindow = iframe.contentWindow;
    var documentClone = cloneWindow.document;
    var iframeLoad = iframeLoader(iframe).then(function() {
      return __awaiter(_this, void 0, void 0, function() {
        var onclone, referenceElement;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.scrolledElements.forEach(restoreNodeScroll);
              if (cloneWindow) {
                cloneWindow.scrollTo(windowSize.left, windowSize.top);
                if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                  this.context.logger.warn("Unable to restore scroll position for cloned document");
                  this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                }
              }
              onclone = this.options.onclone;
              referenceElement = this.clonedReferenceElement;
              if (typeof referenceElement === "undefined") {
                return [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
              }
              if (!(documentClone.fonts && documentClone.fonts.ready))
                return [3, 2];
              return [4, documentClone.fonts.ready];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              if (!/(AppleWebKit)/g.test(navigator.userAgent))
                return [3, 4];
              return [4, imagesReady(documentClone)];
            case 3:
              _a.sent();
              _a.label = 4;
            case 4:
              if (typeof onclone === "function") {
                return [2, Promise.resolve().then(function() {
                  return onclone(documentClone, referenceElement);
                }).then(function() {
                  return iframe;
                })];
              }
              return [2, iframe];
          }
        });
      });
    });
    documentClone.open();
    documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
    restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
    documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
    documentClone.close();
    return iframeLoad;
  };
  DocumentCloner2.prototype.createElementClone = function(node) {
    if (isDebugging(node, 2)) {
      debugger;
    }
    if (isCanvasElement(node)) {
      return this.createCanvasClone(node);
    }
    if (isVideoElement(node)) {
      return this.createVideoClone(node);
    }
    if (isStyleElement(node)) {
      return this.createStyleClone(node);
    }
    var clone = node.cloneNode(false);
    if (isImageElement(clone)) {
      if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
        clone.src = node.currentSrc;
        clone.srcset = "";
      }
      if (clone.loading === "lazy") {
        clone.loading = "eager";
      }
    }
    if (isCustomElement(clone)) {
      return this.createCustomElementClone(clone);
    }
    return clone;
  };
  DocumentCloner2.prototype.createCustomElementClone = function(node) {
    var clone = document.createElement("html2canvascustomelement");
    copyCSSStyles(node.style, clone);
    return clone;
  };
  DocumentCloner2.prototype.createStyleClone = function(node) {
    try {
      var sheet = node.sheet;
      if (sheet && sheet.cssRules) {
        var css = [].slice.call(sheet.cssRules, 0).reduce(function(css2, rule) {
          if (rule && typeof rule.cssText === "string") {
            return css2 + rule.cssText;
          }
          return css2;
        }, "");
        var style2 = node.cloneNode(false);
        style2.textContent = css;
        return style2;
      }
    } catch (e2) {
      this.context.logger.error("Unable to access cssRules property", e2);
      if (e2.name !== "SecurityError") {
        throw e2;
      }
    }
    return node.cloneNode(false);
  };
  DocumentCloner2.prototype.createCanvasClone = function(canvas) {
    var _a;
    if (this.options.inlineImages && canvas.ownerDocument) {
      var img = canvas.ownerDocument.createElement("img");
      try {
        img.src = canvas.toDataURL();
        return img;
      } catch (e2) {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
      }
    }
    var clonedCanvas = canvas.cloneNode(false);
    try {
      clonedCanvas.width = canvas.width;
      clonedCanvas.height = canvas.height;
      var ctx = canvas.getContext("2d");
      var clonedCtx = clonedCanvas.getContext("2d");
      if (clonedCtx) {
        if (!this.options.allowTaint && ctx) {
          clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
        } else {
          var gl = (_a = canvas.getContext("webgl2")) !== null && _a !== void 0 ? _a : canvas.getContext("webgl");
          if (gl) {
            var attribs = gl.getContextAttributes();
            if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
              this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", canvas);
            }
          }
          clonedCtx.drawImage(canvas, 0, 0);
        }
      }
      return clonedCanvas;
    } catch (e2) {
      this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
    }
    return clonedCanvas;
  };
  DocumentCloner2.prototype.createVideoClone = function(video) {
    var canvas = video.ownerDocument.createElement("canvas");
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    var ctx = canvas.getContext("2d");
    try {
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        if (!this.options.allowTaint) {
          ctx.getImageData(0, 0, canvas.width, canvas.height);
        }
      }
      return canvas;
    } catch (e2) {
      this.context.logger.info("Unable to clone video as it is tainted", video);
    }
    var blankCanvas = video.ownerDocument.createElement("canvas");
    blankCanvas.width = video.offsetWidth;
    blankCanvas.height = video.offsetHeight;
    return blankCanvas;
  };
  DocumentCloner2.prototype.appendChildNode = function(clone, child, copyStyles) {
    if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== "function" || !this.options.ignoreElements(child))) {
      if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
        clone.appendChild(this.cloneNode(child, copyStyles));
      }
    }
  };
  DocumentCloner2.prototype.cloneChildNodes = function(node, clone, copyStyles) {
    var _this = this;
    for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
      if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === "function") {
        var assignedNodes = child.assignedNodes();
        if (assignedNodes.length) {
          assignedNodes.forEach(function(assignedNode) {
            return _this.appendChildNode(clone, assignedNode, copyStyles);
          });
        }
      } else {
        this.appendChildNode(clone, child, copyStyles);
      }
    }
  };
  DocumentCloner2.prototype.cloneNode = function(node, copyStyles) {
    if (isTextNode(node)) {
      return document.createTextNode(node.data);
    }
    if (!node.ownerDocument) {
      return node.cloneNode(false);
    }
    var window2 = node.ownerDocument.defaultView;
    if (window2 && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
      var clone = this.createElementClone(node);
      clone.style.transitionProperty = "none";
      var style2 = window2.getComputedStyle(node);
      var styleBefore = window2.getComputedStyle(node, ":before");
      var styleAfter = window2.getComputedStyle(node, ":after");
      if (this.referenceElement === node && isHTMLElementNode(clone)) {
        this.clonedReferenceElement = clone;
      }
      if (isBodyElement(clone)) {
        createPseudoHideStyles(clone);
      }
      var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style2));
      var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
      if (isCustomElement(node)) {
        copyStyles = true;
      }
      if (!isVideoElement(node)) {
        this.cloneChildNodes(node, clone, copyStyles);
      }
      if (before) {
        clone.insertBefore(before, clone.firstChild);
      }
      var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
      if (after) {
        clone.appendChild(after);
      }
      this.counters.pop(counters);
      if (style2 && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) {
        copyCSSStyles(style2, clone);
      }
      if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
        this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
      }
      if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
        clone.value = node.value;
      }
      return clone;
    }
    return node.cloneNode(false);
  };
  DocumentCloner2.prototype.resolvePseudoContent = function(node, clone, style2, pseudoElt) {
    var _this = this;
    if (!style2) {
      return;
    }
    var value = style2.content;
    var document2 = clone.ownerDocument;
    if (!document2 || !value || value === "none" || value === "-moz-alt-content" || style2.display === "none") {
      return;
    }
    this.counters.parse(new CSSParsedCounterDeclaration(this.context, style2));
    var declaration = new CSSParsedPseudoDeclaration(this.context, style2);
    var anonymousReplacedElement = document2.createElement("html2canvaspseudoelement");
    copyCSSStyles(style2, anonymousReplacedElement);
    declaration.content.forEach(function(token) {
      if (token.type === 0) {
        anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
      } else if (token.type === 22) {
        var img = document2.createElement("img");
        img.src = token.value;
        img.style.opacity = "1";
        anonymousReplacedElement.appendChild(img);
      } else if (token.type === 18) {
        if (token.name === "attr") {
          var attr = token.values.filter(isIdentToken);
          if (attr.length) {
            anonymousReplacedElement.appendChild(document2.createTextNode(node.getAttribute(attr[0].value) || ""));
          }
        } else if (token.name === "counter") {
          var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
          if (counter && isIdentToken(counter)) {
            var counterState = _this.counters.getCounterValue(counter.value);
            var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
            anonymousReplacedElement.appendChild(document2.createTextNode(createCounterText(counterState, counterType, false)));
          }
        } else if (token.name === "counters") {
          var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
          if (counter && isIdentToken(counter)) {
            var counterStates = _this.counters.getCounterValues(counter.value);
            var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
            var separator = delim && delim.type === 0 ? delim.value : "";
            var text2 = counterStates.map(function(value2) {
              return createCounterText(value2, counterType_1, false);
            }).join(separator);
            anonymousReplacedElement.appendChild(document2.createTextNode(text2));
          }
        } else
          ;
      } else if (token.type === 20) {
        switch (token.value) {
          case "open-quote":
            anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
            break;
          case "close-quote":
            anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
            break;
          default:
            anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
        }
      }
    });
    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (isSVGElementNode(clone)) {
      clone.className.baseValue += newClassName;
    } else {
      clone.className += newClassName;
    }
    return anonymousReplacedElement;
  };
  DocumentCloner2.destroy = function(container2) {
    if (container2.parentNode) {
      container2.parentNode.removeChild(container2);
      return true;
    }
    return false;
  };
  return DocumentCloner2;
}();
var PseudoElementType;
(function(PseudoElementType2) {
  PseudoElementType2[PseudoElementType2["BEFORE"] = 0] = "BEFORE";
  PseudoElementType2[PseudoElementType2["AFTER"] = 1] = "AFTER";
})(PseudoElementType || (PseudoElementType = {}));
var createIFrameContainer = function(ownerDocument, bounds) {
  var cloneIframeContainer = ownerDocument.createElement("iframe");
  cloneIframeContainer.className = "html2canvas-container";
  cloneIframeContainer.style.visibility = "hidden";
  cloneIframeContainer.style.position = "fixed";
  cloneIframeContainer.style.left = "-10000px";
  cloneIframeContainer.style.top = "0px";
  cloneIframeContainer.style.border = "0";
  cloneIframeContainer.width = bounds.width.toString();
  cloneIframeContainer.height = bounds.height.toString();
  cloneIframeContainer.scrolling = "no";
  cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, "true");
  ownerDocument.body.appendChild(cloneIframeContainer);
  return cloneIframeContainer;
};
var imageReady = function(img) {
  return new Promise(function(resolve) {
    if (img.complete) {
      resolve();
      return;
    }
    if (!img.src) {
      resolve();
      return;
    }
    img.onload = resolve;
    img.onerror = resolve;
  });
};
var imagesReady = function(document2) {
  return Promise.all([].slice.call(document2.images, 0).map(imageReady));
};
var iframeLoader = function(iframe) {
  return new Promise(function(resolve, reject) {
    var cloneWindow = iframe.contentWindow;
    if (!cloneWindow) {
      return reject("No window assigned for iframe");
    }
    var documentClone = cloneWindow.document;
    cloneWindow.onload = iframe.onload = function() {
      cloneWindow.onload = iframe.onload = null;
      var interval2 = setInterval(function() {
        if (documentClone.body.childNodes.length > 0 && documentClone.readyState === "complete") {
          clearInterval(interval2);
          resolve(iframe);
        }
      }, 50);
    };
  });
};
var ignoredStyleProperties = [
  "all",
  "d",
  "content"
];
var copyCSSStyles = function(style2, target) {
  for (var i = style2.length - 1; i >= 0; i--) {
    var property = style2.item(i);
    if (ignoredStyleProperties.indexOf(property) === -1) {
      target.style.setProperty(property, style2.getPropertyValue(property));
    }
  }
  return target;
};
var serializeDoctype = function(doctype) {
  var str = "";
  if (doctype) {
    str += "<!DOCTYPE ";
    if (doctype.name) {
      str += doctype.name;
    }
    if (doctype.internalSubset) {
      str += doctype.internalSubset;
    }
    if (doctype.publicId) {
      str += '"' + doctype.publicId + '"';
    }
    if (doctype.systemId) {
      str += '"' + doctype.systemId + '"';
    }
    str += ">";
  }
  return str;
};
var restoreOwnerScroll = function(ownerDocument, x2, y2) {
  if (ownerDocument && ownerDocument.defaultView && (x2 !== ownerDocument.defaultView.pageXOffset || y2 !== ownerDocument.defaultView.pageYOffset)) {
    ownerDocument.defaultView.scrollTo(x2, y2);
  }
};
var restoreNodeScroll = function(_a) {
  var element = _a[0], x2 = _a[1], y2 = _a[2];
  element.scrollLeft = x2;
  element.scrollTop = y2;
};
var PSEUDO_BEFORE = ":before";
var PSEUDO_AFTER = ":after";
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";
var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';
var createPseudoHideStyles = function(body) {
  createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};
var createStyles = function(body, styles) {
  var document2 = body.ownerDocument;
  if (document2) {
    var style2 = document2.createElement("style");
    style2.textContent = styles;
    body.appendChild(style2);
  }
};
var CacheStorage = function() {
  function CacheStorage2() {
  }
  CacheStorage2.getOrigin = function(url) {
    var link2 = CacheStorage2._link;
    if (!link2) {
      return "about:blank";
    }
    link2.href = url;
    link2.href = link2.href;
    return link2.protocol + link2.hostname + link2.port;
  };
  CacheStorage2.isSameOrigin = function(src) {
    return CacheStorage2.getOrigin(src) === CacheStorage2._origin;
  };
  CacheStorage2.setContext = function(window2) {
    CacheStorage2._link = window2.document.createElement("a");
    CacheStorage2._origin = CacheStorage2.getOrigin(window2.location.href);
  };
  CacheStorage2._origin = "about:blank";
  return CacheStorage2;
}();
var Cache = function() {
  function Cache2(context, _options) {
    this.context = context;
    this._options = _options;
    this._cache = {};
  }
  Cache2.prototype.addImage = function(src) {
    var result = Promise.resolve();
    if (this.has(src)) {
      return result;
    }
    if (isBlobImage(src) || isRenderable(src)) {
      (this._cache[src] = this.loadImage(src)).catch(function() {
      });
      return result;
    }
    return result;
  };
  Cache2.prototype.match = function(src) {
    return this._cache[src];
  };
  Cache2.prototype.loadImage = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      var isSameOrigin, useCORS, useProxy, src;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            isSameOrigin = CacheStorage.isSameOrigin(key);
            useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
            useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === "string" && FEATURES.SUPPORT_CORS_XHR && !useCORS;
            if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
              return [2];
            }
            src = key;
            if (!useProxy)
              return [3, 2];
            return [4, this.proxy(src)];
          case 1:
            src = _a.sent();
            _a.label = 2;
          case 2:
            this.context.logger.debug("Added image " + key.substring(0, 256));
            return [4, new Promise(function(resolve, reject) {
              var img = new Image();
              img.onload = function() {
                return resolve(img);
              };
              img.onerror = reject;
              if (isInlineBase64Image(src) || useCORS) {
                img.crossOrigin = "anonymous";
              }
              img.src = src;
              if (img.complete === true) {
                setTimeout(function() {
                  return resolve(img);
                }, 500);
              }
              if (_this._options.imageTimeout > 0) {
                setTimeout(function() {
                  return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                }, _this._options.imageTimeout);
              }
            })];
          case 3:
            return [2, _a.sent()];
        }
      });
    });
  };
  Cache2.prototype.has = function(key) {
    return typeof this._cache[key] !== "undefined";
  };
  Cache2.prototype.keys = function() {
    return Promise.resolve(Object.keys(this._cache));
  };
  Cache2.prototype.proxy = function(src) {
    var _this = this;
    var proxy = this._options.proxy;
    if (!proxy) {
      throw new Error("No proxy defined");
    }
    var key = src.substring(0, 256);
    return new Promise(function(resolve, reject) {
      var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? "blob" : "text";
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        if (xhr.status === 200) {
          if (responseType === "text") {
            resolve(xhr.response);
          } else {
            var reader_1 = new FileReader();
            reader_1.addEventListener("load", function() {
              return resolve(reader_1.result);
            }, false);
            reader_1.addEventListener("error", function(e2) {
              return reject(e2);
            }, false);
            reader_1.readAsDataURL(xhr.response);
          }
        } else {
          reject("Failed to proxy resource " + key + " with status code " + xhr.status);
        }
      };
      xhr.onerror = reject;
      var queryString = proxy.indexOf("?") > -1 ? "&" : "?";
      xhr.open("GET", "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
      if (responseType !== "text" && xhr instanceof XMLHttpRequest) {
        xhr.responseType = responseType;
      }
      if (_this._options.imageTimeout) {
        var timeout_1 = _this._options.imageTimeout;
        xhr.timeout = timeout_1;
        xhr.ontimeout = function() {
          return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
        };
      }
      xhr.send();
    });
  };
  return Cache2;
}();
var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;
var isRenderable = function(src) {
  return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
};
var isInlineImage = function(src) {
  return INLINE_IMG.test(src);
};
var isInlineBase64Image = function(src) {
  return INLINE_BASE64.test(src);
};
var isBlobImage = function(src) {
  return src.substr(0, 4) === "blob";
};
var isSVG = function(src) {
  return src.substr(-3).toLowerCase() === "svg" || INLINE_SVG.test(src);
};
var Vector = function() {
  function Vector2(x2, y2) {
    this.type = 0;
    this.x = x2;
    this.y = y2;
  }
  Vector2.prototype.add = function(deltaX, deltaY) {
    return new Vector2(this.x + deltaX, this.y + deltaY);
  };
  return Vector2;
}();
var lerp = function(a2, b, t) {
  return new Vector(a2.x + (b.x - a2.x) * t, a2.y + (b.y - a2.y) * t);
};
var BezierCurve = function() {
  function BezierCurve2(start2, startControl, endControl, end) {
    this.type = 1;
    this.start = start2;
    this.startControl = startControl;
    this.endControl = endControl;
    this.end = end;
  }
  BezierCurve2.prototype.subdivide = function(t, firstHalf) {
    var ab = lerp(this.start, this.startControl, t);
    var bc = lerp(this.startControl, this.endControl, t);
    var cd = lerp(this.endControl, this.end, t);
    var abbc = lerp(ab, bc, t);
    var bccd = lerp(bc, cd, t);
    var dest = lerp(abbc, bccd, t);
    return firstHalf ? new BezierCurve2(this.start, ab, abbc, dest) : new BezierCurve2(dest, bccd, cd, this.end);
  };
  BezierCurve2.prototype.add = function(deltaX, deltaY) {
    return new BezierCurve2(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
  };
  BezierCurve2.prototype.reverse = function() {
    return new BezierCurve2(this.end, this.endControl, this.startControl, this.start);
  };
  return BezierCurve2;
}();
var isBezierCurve = function(path2) {
  return path2.type === 1;
};
var BoundCurves = function() {
  function BoundCurves2(element) {
    var styles = element.styles;
    var bounds = element.bounds;
    var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
    var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
    var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
    var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);
    if (maxFactor > 1) {
      tlh /= maxFactor;
      tlv /= maxFactor;
      trh /= maxFactor;
      trv /= maxFactor;
      brh /= maxFactor;
      brv /= maxFactor;
      blh /= maxFactor;
      blv /= maxFactor;
    }
    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;
    var borderTopWidth2 = styles.borderTopWidth;
    var borderRightWidth2 = styles.borderRightWidth;
    var borderBottomWidth2 = styles.borderBottomWidth;
    var borderLeftWidth2 = styles.borderLeftWidth;
    var paddingTop2 = getAbsoluteValue(styles.paddingTop, element.bounds.width);
    var paddingRight2 = getAbsoluteValue(styles.paddingRight, element.bounds.width);
    var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
    var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
    this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3, tlh - borderLeftWidth2 / 3, tlv - borderTopWidth2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3);
    this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 3, trh - borderRightWidth2 / 3, trv - borderTopWidth2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + borderTopWidth2 / 3);
    this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 3, brv - borderBottomWidth2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
    this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 / 3, blv - borderBottomWidth2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
    this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3, tlh - borderLeftWidth2 * 2 / 3, tlv - borderTopWidth2 * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
    this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 * 2 / 3, trh - borderRightWidth2 * 2 / 3, trv - borderTopWidth2 * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
    this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 * 2 / 3, brv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
    this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 * 2 / 3, blv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
    this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2, tlh - borderLeftWidth2 / 2, tlv - borderTopWidth2 / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2);
    this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 2, trh - borderRightWidth2 / 2, trv - borderTopWidth2 / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + borderTopWidth2 / 2);
    this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 2, brv - borderBottomWidth2 / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
    this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + leftHeight, blh - borderLeftWidth2 / 2, blv - borderBottomWidth2 / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
    this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
    this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
    this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
    this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
    this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2, Math.max(0, tlh - borderLeftWidth2), Math.max(0, tlv - borderTopWidth2), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2);
    this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth2), bounds.top + borderTopWidth2, topWidth > bounds.width + borderRightWidth2 ? 0 : Math.max(0, trh - borderRightWidth2), Math.max(0, trv - borderTopWidth2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + borderTopWidth2);
    this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth2), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth2), Math.max(0, brh - borderRightWidth2), Math.max(0, brv - borderBottomWidth2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + bounds.height - borderBottomWidth2);
    this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth2), Math.max(0, blh - borderLeftWidth2), Math.max(0, blv - borderBottomWidth2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + bounds.height - borderBottomWidth2);
    this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2, Math.max(0, tlh - (borderLeftWidth2 + paddingLeft2)), Math.max(0, tlv - (borderTopWidth2 + paddingTop2)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2);
    this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth2 + paddingLeft2), bounds.top + borderTopWidth2 + paddingTop2, topWidth > bounds.width + borderLeftWidth2 + paddingLeft2 ? 0 : trh - borderLeftWidth2 + paddingLeft2, trv - (borderTopWidth2 + paddingTop2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + borderTopWidth2 + paddingTop2);
    this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth2 + paddingLeft2)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth2 + paddingTop2), Math.max(0, brh - (borderRightWidth2 + paddingRight2)), brv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
    this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth2 + paddingLeft2)), blv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
  }
  return BoundCurves2;
}();
var CORNER;
(function(CORNER2) {
  CORNER2[CORNER2["TOP_LEFT"] = 0] = "TOP_LEFT";
  CORNER2[CORNER2["TOP_RIGHT"] = 1] = "TOP_RIGHT";
  CORNER2[CORNER2["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
  CORNER2[CORNER2["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
})(CORNER || (CORNER = {}));
var getCurvePoints = function(x2, y2, r1, r2, position2) {
  var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
  var ox = r1 * kappa;
  var oy = r2 * kappa;
  var xm = x2 + r1;
  var ym = y2 + r2;
  switch (position2) {
    case CORNER.TOP_LEFT:
      return new BezierCurve(new Vector(x2, ym), new Vector(x2, ym - oy), new Vector(xm - ox, y2), new Vector(xm, y2));
    case CORNER.TOP_RIGHT:
      return new BezierCurve(new Vector(x2, y2), new Vector(x2 + ox, y2), new Vector(xm, ym - oy), new Vector(xm, ym));
    case CORNER.BOTTOM_RIGHT:
      return new BezierCurve(new Vector(xm, y2), new Vector(xm, y2 + oy), new Vector(x2 + ox, ym), new Vector(x2, ym));
    case CORNER.BOTTOM_LEFT:
    default:
      return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x2, y2 + oy), new Vector(x2, y2));
  }
};
var calculateBorderBoxPath = function(curves) {
  return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
};
var calculateContentBoxPath = function(curves) {
  return [
    curves.topLeftContentBox,
    curves.topRightContentBox,
    curves.bottomRightContentBox,
    curves.bottomLeftContentBox
  ];
};
var calculatePaddingBoxPath = function(curves) {
  return [
    curves.topLeftPaddingBox,
    curves.topRightPaddingBox,
    curves.bottomRightPaddingBox,
    curves.bottomLeftPaddingBox
  ];
};
var TransformEffect = function() {
  function TransformEffect2(offsetX, offsetY, matrix2) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.matrix = matrix2;
    this.type = 0;
    this.target = 2 | 4;
  }
  return TransformEffect2;
}();
var ClipEffect = function() {
  function ClipEffect2(path2, target) {
    this.path = path2;
    this.target = target;
    this.type = 1;
  }
  return ClipEffect2;
}();
var OpacityEffect = function() {
  function OpacityEffect2(opacity2) {
    this.opacity = opacity2;
    this.type = 2;
    this.target = 2 | 4;
  }
  return OpacityEffect2;
}();
var isTransformEffect = function(effect) {
  return effect.type === 0;
};
var isClipEffect = function(effect) {
  return effect.type === 1;
};
var isOpacityEffect = function(effect) {
  return effect.type === 2;
};
var equalPath = function(a2, b) {
  if (a2.length === b.length) {
    return a2.some(function(v, i) {
      return v === b[i];
    });
  }
  return false;
};
var transformPath = function(path2, deltaX, deltaY, deltaW, deltaH) {
  return path2.map(function(point, index) {
    switch (index) {
      case 0:
        return point.add(deltaX, deltaY);
      case 1:
        return point.add(deltaX + deltaW, deltaY);
      case 2:
        return point.add(deltaX + deltaW, deltaY + deltaH);
      case 3:
        return point.add(deltaX, deltaY + deltaH);
    }
    return point;
  });
};
var StackingContext = function() {
  function StackingContext2(container2) {
    this.element = container2;
    this.inlineLevel = [];
    this.nonInlineLevel = [];
    this.negativeZIndex = [];
    this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
    this.positiveZIndex = [];
    this.nonPositionedFloats = [];
    this.nonPositionedInlineLevel = [];
  }
  return StackingContext2;
}();
var ElementPaint = function() {
  function ElementPaint2(container2, parent) {
    this.container = container2;
    this.parent = parent;
    this.effects = [];
    this.curves = new BoundCurves(this.container);
    if (this.container.styles.opacity < 1) {
      this.effects.push(new OpacityEffect(this.container.styles.opacity));
    }
    if (this.container.styles.transform !== null) {
      var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
      var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
      var matrix2 = this.container.styles.transform;
      this.effects.push(new TransformEffect(offsetX, offsetY, matrix2));
    }
    if (this.container.styles.overflowX !== 0) {
      var borderBox = calculateBorderBoxPath(this.curves);
      var paddingBox2 = calculatePaddingBoxPath(this.curves);
      if (equalPath(borderBox, paddingBox2)) {
        this.effects.push(new ClipEffect(borderBox, 2 | 4));
      } else {
        this.effects.push(new ClipEffect(borderBox, 2));
        this.effects.push(new ClipEffect(paddingBox2, 4));
      }
    }
  }
  ElementPaint2.prototype.getEffects = function(target) {
    var inFlow = [2, 3].indexOf(this.container.styles.position) === -1;
    var parent = this.parent;
    var effects = this.effects.slice(0);
    while (parent) {
      var croplessEffects = parent.effects.filter(function(effect) {
        return !isClipEffect(effect);
      });
      if (inFlow || parent.container.styles.position !== 0 || !parent.parent) {
        effects.unshift.apply(effects, croplessEffects);
        inFlow = [2, 3].indexOf(parent.container.styles.position) === -1;
        if (parent.container.styles.overflowX !== 0) {
          var borderBox = calculateBorderBoxPath(parent.curves);
          var paddingBox2 = calculatePaddingBoxPath(parent.curves);
          if (!equalPath(borderBox, paddingBox2)) {
            effects.unshift(new ClipEffect(paddingBox2, 2 | 4));
          }
        }
      } else {
        effects.unshift.apply(effects, croplessEffects);
      }
      parent = parent.parent;
    }
    return effects.filter(function(effect) {
      return contains(effect.target, target);
    });
  };
  return ElementPaint2;
}();
var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
  parent.container.elements.forEach(function(child) {
    var treatAsRealStackingContext = contains(child.flags, 4);
    var createsStackingContext2 = contains(child.flags, 2);
    var paintContainer = new ElementPaint(child, parent);
    if (contains(child.styles.display, 2048)) {
      listItems.push(paintContainer);
    }
    var listOwnerItems = contains(child.flags, 8) ? [] : listItems;
    if (treatAsRealStackingContext || createsStackingContext2) {
      var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
      var stack = new StackingContext(paintContainer);
      if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
        var order_1 = child.styles.zIndex.order;
        if (order_1 < 0) {
          var index_1 = 0;
          parentStack.negativeZIndex.some(function(current, i) {
            if (order_1 > current.element.container.styles.zIndex.order) {
              index_1 = i;
              return false;
            } else if (index_1 > 0) {
              return true;
            }
            return false;
          });
          parentStack.negativeZIndex.splice(index_1, 0, stack);
        } else if (order_1 > 0) {
          var index_2 = 0;
          parentStack.positiveZIndex.some(function(current, i) {
            if (order_1 >= current.element.container.styles.zIndex.order) {
              index_2 = i + 1;
              return false;
            } else if (index_2 > 0) {
              return true;
            }
            return false;
          });
          parentStack.positiveZIndex.splice(index_2, 0, stack);
        } else {
          parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
        }
      } else {
        if (child.styles.isFloating()) {
          parentStack.nonPositionedFloats.push(stack);
        } else {
          parentStack.nonPositionedInlineLevel.push(stack);
        }
      }
      parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
    } else {
      if (child.styles.isInlineLevel()) {
        stackingContext.inlineLevel.push(paintContainer);
      } else {
        stackingContext.nonInlineLevel.push(paintContainer);
      }
      parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
    }
    if (contains(child.flags, 8)) {
      processListItems(child, listOwnerItems);
    }
  });
};
var processListItems = function(owner, elements) {
  var numbering = owner instanceof OLElementContainer ? owner.start : 1;
  var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
  for (var i = 0; i < elements.length; i++) {
    var item = elements[i];
    if (item.container instanceof LIElementContainer && typeof item.container.value === "number" && item.container.value !== 0) {
      numbering = item.container.value;
    }
    item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
    numbering += reversed ? -1 : 1;
  }
};
var parseStackingContexts = function(container2) {
  var paintContainer = new ElementPaint(container2, null);
  var root2 = new StackingContext(paintContainer);
  var listItems = [];
  parseStackTree(paintContainer, root2, root2, listItems);
  processListItems(paintContainer.container, listItems);
  return root2;
};
var parsePathForBorder = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
  }
};
var parsePathForBorderDoubleOuter = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
  }
};
var parsePathForBorderDoubleInner = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
  }
};
var parsePathForBorderStroke = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
    case 1:
      return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
    case 2:
      return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
    case 3:
    default:
      return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
  }
};
var createStrokePathFromCurves = function(outer1, outer2) {
  var path2 = [];
  if (isBezierCurve(outer1)) {
    path2.push(outer1.subdivide(0.5, false));
  } else {
    path2.push(outer1);
  }
  if (isBezierCurve(outer2)) {
    path2.push(outer2.subdivide(0.5, true));
  } else {
    path2.push(outer2);
  }
  return path2;
};
var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
  var path2 = [];
  if (isBezierCurve(outer1)) {
    path2.push(outer1.subdivide(0.5, false));
  } else {
    path2.push(outer1);
  }
  if (isBezierCurve(outer2)) {
    path2.push(outer2.subdivide(0.5, true));
  } else {
    path2.push(outer2);
  }
  if (isBezierCurve(inner2)) {
    path2.push(inner2.subdivide(0.5, true).reverse());
  } else {
    path2.push(inner2);
  }
  if (isBezierCurve(inner1)) {
    path2.push(inner1.subdivide(0.5, false).reverse());
  } else {
    path2.push(inner1);
  }
  return path2;
};
var paddingBox = function(element) {
  var bounds = element.bounds;
  var styles = element.styles;
  return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
};
var contentBox = function(element) {
  var styles = element.styles;
  var bounds = element.bounds;
  var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, bounds.width);
  var paddingRight2 = getAbsoluteValue(styles.paddingRight, bounds.width);
  var paddingTop2 = getAbsoluteValue(styles.paddingTop, bounds.width);
  var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, bounds.width);
  return bounds.add(paddingLeft2 + styles.borderLeftWidth, paddingTop2 + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft2 + paddingRight2), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop2 + paddingBottom2));
};
var calculateBackgroundPositioningArea = function(backgroundOrigin2, element) {
  if (backgroundOrigin2 === 0) {
    return element.bounds;
  }
  if (backgroundOrigin2 === 2) {
    return contentBox(element);
  }
  return paddingBox(element);
};
var calculateBackgroundPaintingArea = function(backgroundClip2, element) {
  if (backgroundClip2 === 0) {
    return element.bounds;
  }
  if (backgroundClip2 === 2) {
    return contentBox(element);
  }
  return paddingBox(element);
};
var calculateBackgroundRendering = function(container2, index, intrinsicSize) {
  var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container2.styles.backgroundOrigin, index), container2);
  var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container2.styles.backgroundClip, index), container2);
  var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container2.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
  var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
  var position2 = getAbsoluteValueForTuple(getBackgroundValueForIndex(container2.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
  var path2 = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container2.styles.backgroundRepeat, index), position2, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
  var offsetX = Math.round(backgroundPositioningArea.left + position2[0]);
  var offsetY = Math.round(backgroundPositioningArea.top + position2[1]);
  return [path2, offsetX, offsetY, sizeWidth, sizeHeight];
};
var isAuto = function(token) {
  return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
};
var hasIntrinsicValue = function(value) {
  return typeof value === "number";
};
var calculateBackgroundSize = function(size, _a, bounds) {
  var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
  var first = size[0], second = size[1];
  if (!first) {
    return [0, 0];
  }
  if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
    return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
  }
  var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
  if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
    if (hasIntrinsicValue(intrinsicProportion)) {
      var targetRatio = bounds.width / bounds.height;
      return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
    }
    return [bounds.width, bounds.height];
  }
  var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
  var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
  var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
  if (isAuto(first) && (!second || isAuto(second))) {
    if (hasIntrinsicWidth && hasIntrinsicHeight) {
      return [intrinsicWidth, intrinsicHeight];
    }
    if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
      return [bounds.width, bounds.height];
    }
    if (hasIntrinsicDimensions && hasIntrinsicProportion) {
      var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
      var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
      return [width_1, height_1];
    }
    var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
    var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
    return [width_2, height_2];
  }
  if (hasIntrinsicProportion) {
    var width_3 = 0;
    var height_3 = 0;
    if (isLengthPercentage(first)) {
      width_3 = getAbsoluteValue(first, bounds.width);
    } else if (isLengthPercentage(second)) {
      height_3 = getAbsoluteValue(second, bounds.height);
    }
    if (isAuto(first)) {
      width_3 = height_3 * intrinsicProportion;
    } else if (!second || isAuto(second)) {
      height_3 = width_3 / intrinsicProportion;
    }
    return [width_3, height_3];
  }
  var width = null;
  var height = null;
  if (isLengthPercentage(first)) {
    width = getAbsoluteValue(first, bounds.width);
  } else if (second && isLengthPercentage(second)) {
    height = getAbsoluteValue(second, bounds.height);
  }
  if (width !== null && (!second || isAuto(second))) {
    height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
  }
  if (height !== null && isAuto(first)) {
    width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
  }
  if (width !== null && height !== null) {
    return [width, height];
  }
  throw new Error("Unable to calculate background-size for element");
};
var getBackgroundValueForIndex = function(values, index) {
  var value = values[index];
  if (typeof value === "undefined") {
    return values[0];
  }
  return value;
};
var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
  var x2 = _a[0], y2 = _a[1];
  var width = _b[0], height = _b[1];
  switch (repeat) {
    case 2:
      return [
        new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y2))
      ];
    case 3:
      return [
        new Vector(Math.round(backgroundPositioningArea.left + x2), Math.round(backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x2 + width), Math.round(backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x2 + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x2), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
      ];
    case 1:
      return [
        new Vector(Math.round(backgroundPositioningArea.left + x2), Math.round(backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left + x2 + width), Math.round(backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left + x2 + width), Math.round(backgroundPositioningArea.top + y2 + height)),
        new Vector(Math.round(backgroundPositioningArea.left + x2), Math.round(backgroundPositioningArea.top + y2 + height))
      ];
    default:
      return [
        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
      ];
  }
};
var SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
var SAMPLE_TEXT = "Hidden Text";
var FontMetrics = function() {
  function FontMetrics2(document2) {
    this._data = {};
    this._document = document2;
  }
  FontMetrics2.prototype.parseMetrics = function(fontFamily2, fontSize2) {
    var container2 = this._document.createElement("div");
    var img = this._document.createElement("img");
    var span = this._document.createElement("span");
    var body = this._document.body;
    container2.style.visibility = "hidden";
    container2.style.fontFamily = fontFamily2;
    container2.style.fontSize = fontSize2;
    container2.style.margin = "0";
    container2.style.padding = "0";
    container2.style.whiteSpace = "nowrap";
    body.appendChild(container2);
    img.src = SMALL_IMAGE;
    img.width = 1;
    img.height = 1;
    img.style.margin = "0";
    img.style.padding = "0";
    img.style.verticalAlign = "baseline";
    span.style.fontFamily = fontFamily2;
    span.style.fontSize = fontSize2;
    span.style.margin = "0";
    span.style.padding = "0";
    span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
    container2.appendChild(span);
    container2.appendChild(img);
    var baseline = img.offsetTop - span.offsetTop + 2;
    container2.removeChild(span);
    container2.appendChild(this._document.createTextNode(SAMPLE_TEXT));
    container2.style.lineHeight = "normal";
    img.style.verticalAlign = "super";
    var middle = img.offsetTop - container2.offsetTop + 2;
    body.removeChild(container2);
    return { baseline, middle };
  };
  FontMetrics2.prototype.getMetrics = function(fontFamily2, fontSize2) {
    var key = fontFamily2 + " " + fontSize2;
    if (typeof this._data[key] === "undefined") {
      this._data[key] = this.parseMetrics(fontFamily2, fontSize2);
    }
    return this._data[key];
  };
  return FontMetrics2;
}();
var Renderer = function() {
  function Renderer2(context, options) {
    this.context = context;
    this.options = options;
  }
  return Renderer2;
}();
var MASK_OFFSET = 1e4;
var CanvasRenderer = function(_super) {
  __extends(CanvasRenderer2, _super);
  function CanvasRenderer2(context, options) {
    var _this = _super.call(this, context, options) || this;
    _this._activeEffects = [];
    _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
    _this.ctx = _this.canvas.getContext("2d");
    if (!options.canvas) {
      _this.canvas.width = Math.floor(options.width * options.scale);
      _this.canvas.height = Math.floor(options.height * options.scale);
      _this.canvas.style.width = options.width + "px";
      _this.canvas.style.height = options.height + "px";
    }
    _this.fontMetrics = new FontMetrics(document);
    _this.ctx.scale(_this.options.scale, _this.options.scale);
    _this.ctx.translate(-options.x, -options.y);
    _this.ctx.textBaseline = "bottom";
    _this._activeEffects = [];
    _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
    return _this;
  }
  CanvasRenderer2.prototype.applyEffects = function(effects) {
    var _this = this;
    while (this._activeEffects.length) {
      this.popEffect();
    }
    effects.forEach(function(effect) {
      return _this.applyEffect(effect);
    });
  };
  CanvasRenderer2.prototype.applyEffect = function(effect) {
    this.ctx.save();
    if (isOpacityEffect(effect)) {
      this.ctx.globalAlpha = effect.opacity;
    }
    if (isTransformEffect(effect)) {
      this.ctx.translate(effect.offsetX, effect.offsetY);
      this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
      this.ctx.translate(-effect.offsetX, -effect.offsetY);
    }
    if (isClipEffect(effect)) {
      this.path(effect.path);
      this.ctx.clip();
    }
    this._activeEffects.push(effect);
  };
  CanvasRenderer2.prototype.popEffect = function() {
    this._activeEffects.pop();
    this.ctx.restore();
  };
  CanvasRenderer2.prototype.renderStack = function(stack) {
    return __awaiter(this, void 0, void 0, function() {
      var styles;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            styles = stack.element.container.styles;
            if (!styles.isVisible())
              return [3, 2];
            return [4, this.renderStackContent(stack)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderNode = function(paint) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (contains(paint.container.flags, 16)) {
              debugger;
            }
            if (!paint.container.styles.isVisible())
              return [3, 3];
            return [4, this.renderNodeBackgroundAndBorders(paint)];
          case 1:
            _a.sent();
            return [4, this.renderNodeContent(paint)];
          case 2:
            _a.sent();
            _a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderTextWithLetterSpacing = function(text2, letterSpacing2, baseline) {
    var _this = this;
    if (letterSpacing2 === 0) {
      this.ctx.fillText(text2.text, text2.bounds.left, text2.bounds.top + baseline);
    } else {
      var letters = segmentGraphemes(text2.text);
      letters.reduce(function(left, letter) {
        _this.ctx.fillText(letter, left, text2.bounds.top + baseline);
        return left + _this.ctx.measureText(letter).width;
      }, text2.bounds.left);
    }
  };
  CanvasRenderer2.prototype.createFontStyle = function(styles) {
    var fontVariant2 = styles.fontVariant.filter(function(variant) {
      return variant === "normal" || variant === "small-caps";
    }).join("");
    var fontFamily2 = fixIOSSystemFonts(styles.fontFamily).join(", ");
    var fontSize2 = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
    return [
      [styles.fontStyle, fontVariant2, styles.fontWeight, fontSize2, fontFamily2].join(" "),
      fontFamily2,
      fontSize2
    ];
  };
  CanvasRenderer2.prototype.renderTextNode = function(text2, styles) {
    return __awaiter(this, void 0, void 0, function() {
      var _a, font, fontFamily2, fontSize2, _b, baseline, middle, paintOrder2;
      var _this = this;
      return __generator(this, function(_c) {
        _a = this.createFontStyle(styles), font = _a[0], fontFamily2 = _a[1], fontSize2 = _a[2];
        this.ctx.font = font;
        this.ctx.direction = styles.direction === 1 ? "rtl" : "ltr";
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "alphabetic";
        _b = this.fontMetrics.getMetrics(fontFamily2, fontSize2), baseline = _b.baseline, middle = _b.middle;
        paintOrder2 = styles.paintOrder;
        text2.textBounds.forEach(function(text3) {
          paintOrder2.forEach(function(paintOrderLayer) {
            switch (paintOrderLayer) {
              case 0:
                _this.ctx.fillStyle = asString(styles.color);
                _this.renderTextWithLetterSpacing(text3, styles.letterSpacing, baseline);
                var textShadows = styles.textShadow;
                if (textShadows.length && text3.text.trim().length) {
                  textShadows.slice(0).reverse().forEach(function(textShadow2) {
                    _this.ctx.shadowColor = asString(textShadow2.color);
                    _this.ctx.shadowOffsetX = textShadow2.offsetX.number * _this.options.scale;
                    _this.ctx.shadowOffsetY = textShadow2.offsetY.number * _this.options.scale;
                    _this.ctx.shadowBlur = textShadow2.blur.number;
                    _this.renderTextWithLetterSpacing(text3, styles.letterSpacing, baseline);
                  });
                  _this.ctx.shadowColor = "";
                  _this.ctx.shadowOffsetX = 0;
                  _this.ctx.shadowOffsetY = 0;
                  _this.ctx.shadowBlur = 0;
                }
                if (styles.textDecorationLine.length) {
                  _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                  styles.textDecorationLine.forEach(function(textDecorationLine2) {
                    switch (textDecorationLine2) {
                      case 1:
                        _this.ctx.fillRect(text3.bounds.left, Math.round(text3.bounds.top + baseline), text3.bounds.width, 1);
                        break;
                      case 2:
                        _this.ctx.fillRect(text3.bounds.left, Math.round(text3.bounds.top), text3.bounds.width, 1);
                        break;
                      case 3:
                        _this.ctx.fillRect(text3.bounds.left, Math.ceil(text3.bounds.top + middle), text3.bounds.width, 1);
                        break;
                    }
                  });
                }
                break;
              case 1:
                if (styles.webkitTextStrokeWidth && text3.text.trim().length) {
                  _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                  _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                  _this.ctx.lineJoin = !!window.chrome ? "miter" : "round";
                  _this.ctx.strokeText(text3.text, text3.bounds.left, text3.bounds.top + baseline);
                }
                _this.ctx.strokeStyle = "";
                _this.ctx.lineWidth = 0;
                _this.ctx.lineJoin = "miter";
                break;
            }
          });
        });
        return [2];
      });
    });
  };
  CanvasRenderer2.prototype.renderReplacedElement = function(container2, curves, image2) {
    if (image2 && container2.intrinsicWidth > 0 && container2.intrinsicHeight > 0) {
      var box = contentBox(container2);
      var path2 = calculatePaddingBoxPath(curves);
      this.path(path2);
      this.ctx.save();
      this.ctx.clip();
      this.ctx.drawImage(image2, 0, 0, container2.intrinsicWidth, container2.intrinsicHeight, box.left, box.top, box.width, box.height);
      this.ctx.restore();
    }
  };
  CanvasRenderer2.prototype.renderNodeContent = function(paint) {
    return __awaiter(this, void 0, void 0, function() {
      var container2, curves, styles, _i, _a, child, image2, image2, iframeRenderer, canvas, size, _b, fontFamily2, fontSize2, baseline, bounds, x2, textBounds, img, image2, url, fontFamily2, bounds;
      return __generator(this, function(_c) {
        switch (_c.label) {
          case 0:
            this.applyEffects(paint.getEffects(4));
            container2 = paint.container;
            curves = paint.curves;
            styles = container2.styles;
            _i = 0, _a = container2.textNodes;
            _c.label = 1;
          case 1:
            if (!(_i < _a.length))
              return [3, 4];
            child = _a[_i];
            return [4, this.renderTextNode(child, styles)];
          case 2:
            _c.sent();
            _c.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            if (!(container2 instanceof ImageElementContainer))
              return [3, 8];
            _c.label = 5;
          case 5:
            _c.trys.push([5, 7, , 8]);
            return [4, this.context.cache.match(container2.src)];
          case 6:
            image2 = _c.sent();
            this.renderReplacedElement(container2, curves, image2);
            return [3, 8];
          case 7:
            _c.sent();
            this.context.logger.error("Error loading image " + container2.src);
            return [3, 8];
          case 8:
            if (container2 instanceof CanvasElementContainer) {
              this.renderReplacedElement(container2, curves, container2.canvas);
            }
            if (!(container2 instanceof SVGElementContainer))
              return [3, 12];
            _c.label = 9;
          case 9:
            _c.trys.push([9, 11, , 12]);
            return [4, this.context.cache.match(container2.svg)];
          case 10:
            image2 = _c.sent();
            this.renderReplacedElement(container2, curves, image2);
            return [3, 12];
          case 11:
            _c.sent();
            this.context.logger.error("Error loading svg " + container2.svg.substring(0, 255));
            return [3, 12];
          case 12:
            if (!(container2 instanceof IFrameElementContainer && container2.tree))
              return [3, 14];
            iframeRenderer = new CanvasRenderer2(this.context, {
              scale: this.options.scale,
              backgroundColor: container2.backgroundColor,
              x: 0,
              y: 0,
              width: container2.width,
              height: container2.height
            });
            return [4, iframeRenderer.render(container2.tree)];
          case 13:
            canvas = _c.sent();
            if (container2.width && container2.height) {
              this.ctx.drawImage(canvas, 0, 0, container2.width, container2.height, container2.bounds.left, container2.bounds.top, container2.bounds.width, container2.bounds.height);
            }
            _c.label = 14;
          case 14:
            if (container2 instanceof InputElementContainer) {
              size = Math.min(container2.bounds.width, container2.bounds.height);
              if (container2.type === CHECKBOX) {
                if (container2.checked) {
                  this.ctx.save();
                  this.path([
                    new Vector(container2.bounds.left + size * 0.39363, container2.bounds.top + size * 0.79),
                    new Vector(container2.bounds.left + size * 0.16, container2.bounds.top + size * 0.5549),
                    new Vector(container2.bounds.left + size * 0.27347, container2.bounds.top + size * 0.44071),
                    new Vector(container2.bounds.left + size * 0.39694, container2.bounds.top + size * 0.5649),
                    new Vector(container2.bounds.left + size * 0.72983, container2.bounds.top + size * 0.23),
                    new Vector(container2.bounds.left + size * 0.84, container2.bounds.top + size * 0.34085),
                    new Vector(container2.bounds.left + size * 0.39363, container2.bounds.top + size * 0.79)
                  ]);
                  this.ctx.fillStyle = asString(INPUT_COLOR);
                  this.ctx.fill();
                  this.ctx.restore();
                }
              } else if (container2.type === RADIO) {
                if (container2.checked) {
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.arc(container2.bounds.left + size / 2, container2.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                  this.ctx.fillStyle = asString(INPUT_COLOR);
                  this.ctx.fill();
                  this.ctx.restore();
                }
              }
            }
            if (isTextInputElement(container2) && container2.value.length) {
              _b = this.createFontStyle(styles), fontFamily2 = _b[0], fontSize2 = _b[1];
              baseline = this.fontMetrics.getMetrics(fontFamily2, fontSize2).baseline;
              this.ctx.font = fontFamily2;
              this.ctx.fillStyle = asString(styles.color);
              this.ctx.textBaseline = "alphabetic";
              this.ctx.textAlign = canvasTextAlign(container2.styles.textAlign);
              bounds = contentBox(container2);
              x2 = 0;
              switch (container2.styles.textAlign) {
                case 1:
                  x2 += bounds.width / 2;
                  break;
                case 2:
                  x2 += bounds.width;
                  break;
              }
              textBounds = bounds.add(x2, 0, 0, -bounds.height / 2 + 1);
              this.ctx.save();
              this.path([
                new Vector(bounds.left, bounds.top),
                new Vector(bounds.left + bounds.width, bounds.top),
                new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                new Vector(bounds.left, bounds.top + bounds.height)
              ]);
              this.ctx.clip();
              this.renderTextWithLetterSpacing(new TextBounds(container2.value, textBounds), styles.letterSpacing, baseline);
              this.ctx.restore();
              this.ctx.textBaseline = "alphabetic";
              this.ctx.textAlign = "left";
            }
            if (!contains(container2.styles.display, 2048))
              return [3, 20];
            if (!(container2.styles.listStyleImage !== null))
              return [3, 19];
            img = container2.styles.listStyleImage;
            if (!(img.type === 0))
              return [3, 18];
            image2 = void 0;
            url = img.url;
            _c.label = 15;
          case 15:
            _c.trys.push([15, 17, , 18]);
            return [4, this.context.cache.match(url)];
          case 16:
            image2 = _c.sent();
            this.ctx.drawImage(image2, container2.bounds.left - (image2.width + 10), container2.bounds.top);
            return [3, 18];
          case 17:
            _c.sent();
            this.context.logger.error("Error loading list-style-image " + url);
            return [3, 18];
          case 18:
            return [3, 20];
          case 19:
            if (paint.listValue && container2.styles.listStyleType !== -1) {
              fontFamily2 = this.createFontStyle(styles)[0];
              this.ctx.font = fontFamily2;
              this.ctx.fillStyle = asString(styles.color);
              this.ctx.textBaseline = "middle";
              this.ctx.textAlign = "right";
              bounds = new Bounds(container2.bounds.left, container2.bounds.top + getAbsoluteValue(container2.styles.paddingTop, container2.bounds.width), container2.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
              this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
              this.ctx.textBaseline = "bottom";
              this.ctx.textAlign = "left";
            }
            _c.label = 20;
          case 20:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderStackContent = function(stack) {
    return __awaiter(this, void 0, void 0, function() {
      var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
      return __generator(this, function(_p) {
        switch (_p.label) {
          case 0:
            if (contains(stack.element.container.flags, 16)) {
              debugger;
            }
            return [4, this.renderNodeBackgroundAndBorders(stack.element)];
          case 1:
            _p.sent();
            _i = 0, _a = stack.negativeZIndex;
            _p.label = 2;
          case 2:
            if (!(_i < _a.length))
              return [3, 5];
            child = _a[_i];
            return [4, this.renderStack(child)];
          case 3:
            _p.sent();
            _p.label = 4;
          case 4:
            _i++;
            return [3, 2];
          case 5:
            return [4, this.renderNodeContent(stack.element)];
          case 6:
            _p.sent();
            _b = 0, _c = stack.nonInlineLevel;
            _p.label = 7;
          case 7:
            if (!(_b < _c.length))
              return [3, 10];
            child = _c[_b];
            return [4, this.renderNode(child)];
          case 8:
            _p.sent();
            _p.label = 9;
          case 9:
            _b++;
            return [3, 7];
          case 10:
            _d = 0, _e = stack.nonPositionedFloats;
            _p.label = 11;
          case 11:
            if (!(_d < _e.length))
              return [3, 14];
            child = _e[_d];
            return [4, this.renderStack(child)];
          case 12:
            _p.sent();
            _p.label = 13;
          case 13:
            _d++;
            return [3, 11];
          case 14:
            _f = 0, _g = stack.nonPositionedInlineLevel;
            _p.label = 15;
          case 15:
            if (!(_f < _g.length))
              return [3, 18];
            child = _g[_f];
            return [4, this.renderStack(child)];
          case 16:
            _p.sent();
            _p.label = 17;
          case 17:
            _f++;
            return [3, 15];
          case 18:
            _h = 0, _j = stack.inlineLevel;
            _p.label = 19;
          case 19:
            if (!(_h < _j.length))
              return [3, 22];
            child = _j[_h];
            return [4, this.renderNode(child)];
          case 20:
            _p.sent();
            _p.label = 21;
          case 21:
            _h++;
            return [3, 19];
          case 22:
            _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
            _p.label = 23;
          case 23:
            if (!(_k < _l.length))
              return [3, 26];
            child = _l[_k];
            return [4, this.renderStack(child)];
          case 24:
            _p.sent();
            _p.label = 25;
          case 25:
            _k++;
            return [3, 23];
          case 26:
            _m = 0, _o = stack.positiveZIndex;
            _p.label = 27;
          case 27:
            if (!(_m < _o.length))
              return [3, 30];
            child = _o[_m];
            return [4, this.renderStack(child)];
          case 28:
            _p.sent();
            _p.label = 29;
          case 29:
            _m++;
            return [3, 27];
          case 30:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.mask = function(paths) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.canvas.width, 0);
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.lineTo(0, 0);
    this.formatPath(paths.slice(0).reverse());
    this.ctx.closePath();
  };
  CanvasRenderer2.prototype.path = function(paths) {
    this.ctx.beginPath();
    this.formatPath(paths);
    this.ctx.closePath();
  };
  CanvasRenderer2.prototype.formatPath = function(paths) {
    var _this = this;
    paths.forEach(function(point, index) {
      var start2 = isBezierCurve(point) ? point.start : point;
      if (index === 0) {
        _this.ctx.moveTo(start2.x, start2.y);
      } else {
        _this.ctx.lineTo(start2.x, start2.y);
      }
      if (isBezierCurve(point)) {
        _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
      }
    });
  };
  CanvasRenderer2.prototype.renderRepeat = function(path2, pattern, offsetX, offsetY) {
    this.path(path2);
    this.ctx.fillStyle = pattern;
    this.ctx.translate(offsetX, offsetY);
    this.ctx.fill();
    this.ctx.translate(-offsetX, -offsetY);
  };
  CanvasRenderer2.prototype.resizeImage = function(image2, width, height) {
    var _a;
    if (image2.width === width && image2.height === height) {
      return image2;
    }
    var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
    var canvas = ownerDocument.createElement("canvas");
    canvas.width = Math.max(1, width);
    canvas.height = Math.max(1, height);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image2, 0, 0, image2.width, image2.height, 0, 0, width, height);
    return canvas;
  };
  CanvasRenderer2.prototype.renderBackgroundImage = function(container2) {
    return __awaiter(this, void 0, void 0, function() {
      var index, _loop_1, this_1, _i, _a, backgroundImage2;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            index = container2.styles.backgroundImage.length - 1;
            _loop_1 = function(backgroundImage3) {
              var image2, url, _c, path2, x2, y2, width, height, pattern, _d, path2, x2, y2, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path2, left, top_1, width, height, position2, x2, y2, _g, rx, ry, radialGradient_1, midX, midY, f2, invF;
              return __generator(this, function(_h) {
                switch (_h.label) {
                  case 0:
                    if (!(backgroundImage3.type === 0))
                      return [3, 5];
                    image2 = void 0;
                    url = backgroundImage3.url;
                    _h.label = 1;
                  case 1:
                    _h.trys.push([1, 3, , 4]);
                    return [4, this_1.context.cache.match(url)];
                  case 2:
                    image2 = _h.sent();
                    return [3, 4];
                  case 3:
                    _h.sent();
                    this_1.context.logger.error("Error loading background-image " + url);
                    return [3, 4];
                  case 4:
                    if (image2) {
                      _c = calculateBackgroundRendering(container2, index, [
                        image2.width,
                        image2.height,
                        image2.width / image2.height
                      ]), path2 = _c[0], x2 = _c[1], y2 = _c[2], width = _c[3], height = _c[4];
                      pattern = this_1.ctx.createPattern(this_1.resizeImage(image2, width, height), "repeat");
                      this_1.renderRepeat(path2, pattern, x2, y2);
                    }
                    return [3, 6];
                  case 5:
                    if (isLinearGradient(backgroundImage3)) {
                      _d = calculateBackgroundRendering(container2, index, [null, null, null]), path2 = _d[0], x2 = _d[1], y2 = _d[2], width = _d[3], height = _d[4];
                      _e = calculateGradientDirection(backgroundImage3.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                      canvas = document.createElement("canvas");
                      canvas.width = width;
                      canvas.height = height;
                      ctx = canvas.getContext("2d");
                      gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                      processColorStops(backgroundImage3.stops, lineLength).forEach(function(colorStop) {
                        return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                      });
                      ctx.fillStyle = gradient_1;
                      ctx.fillRect(0, 0, width, height);
                      if (width > 0 && height > 0) {
                        pattern = this_1.ctx.createPattern(canvas, "repeat");
                        this_1.renderRepeat(path2, pattern, x2, y2);
                      }
                    } else if (isRadialGradient(backgroundImage3)) {
                      _f = calculateBackgroundRendering(container2, index, [
                        null,
                        null,
                        null
                      ]), path2 = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                      position2 = backgroundImage3.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage3.position;
                      x2 = getAbsoluteValue(position2[0], width);
                      y2 = getAbsoluteValue(position2[position2.length - 1], height);
                      _g = calculateRadius(backgroundImage3, x2, y2, width, height), rx = _g[0], ry = _g[1];
                      if (rx > 0 && ry > 0) {
                        radialGradient_1 = this_1.ctx.createRadialGradient(left + x2, top_1 + y2, 0, left + x2, top_1 + y2, rx);
                        processColorStops(backgroundImage3.stops, rx * 2).forEach(function(colorStop) {
                          return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                        });
                        this_1.path(path2);
                        this_1.ctx.fillStyle = radialGradient_1;
                        if (rx !== ry) {
                          midX = container2.bounds.left + 0.5 * container2.bounds.width;
                          midY = container2.bounds.top + 0.5 * container2.bounds.height;
                          f2 = ry / rx;
                          invF = 1 / f2;
                          this_1.ctx.save();
                          this_1.ctx.translate(midX, midY);
                          this_1.ctx.transform(1, 0, 0, f2, 0, 0);
                          this_1.ctx.translate(-midX, -midY);
                          this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                          this_1.ctx.restore();
                        } else {
                          this_1.ctx.fill();
                        }
                      }
                    }
                    _h.label = 6;
                  case 6:
                    index--;
                    return [2];
                }
              });
            };
            this_1 = this;
            _i = 0, _a = container2.styles.backgroundImage.slice(0).reverse();
            _b.label = 1;
          case 1:
            if (!(_i < _a.length))
              return [3, 4];
            backgroundImage2 = _a[_i];
            return [5, _loop_1(backgroundImage2)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderSolidBorder = function(color2, side, curvePoints) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        this.path(parsePathForBorder(curvePoints, side));
        this.ctx.fillStyle = asString(color2);
        this.ctx.fill();
        return [2];
      });
    });
  };
  CanvasRenderer2.prototype.renderDoubleBorder = function(color2, width, side, curvePoints) {
    return __awaiter(this, void 0, void 0, function() {
      var outerPaths, innerPaths;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!(width < 3))
              return [3, 2];
            return [4, this.renderSolidBorder(color2, side, curvePoints)];
          case 1:
            _a.sent();
            return [2];
          case 2:
            outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
            this.path(outerPaths);
            this.ctx.fillStyle = asString(color2);
            this.ctx.fill();
            innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
            this.path(innerPaths);
            this.ctx.fill();
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderNodeBackgroundAndBorders = function(paint) {
    return __awaiter(this, void 0, void 0, function() {
      var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.applyEffects(paint.getEffects(2));
            styles = paint.container.styles;
            hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
            borders = [
              { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
              { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
              { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
              { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
            ];
            backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
            if (!(hasBackground || styles.boxShadow.length))
              return [3, 2];
            this.ctx.save();
            this.path(backgroundPaintingArea);
            this.ctx.clip();
            if (!isTransparent(styles.backgroundColor)) {
              this.ctx.fillStyle = asString(styles.backgroundColor);
              this.ctx.fill();
            }
            return [4, this.renderBackgroundImage(paint.container)];
          case 1:
            _a.sent();
            this.ctx.restore();
            styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
              _this.ctx.save();
              var borderBoxArea = calculateBorderBoxPath(paint.curves);
              var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
              var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
              if (shadow.inset) {
                _this.path(borderBoxArea);
                _this.ctx.clip();
                _this.mask(shadowPaintingArea);
              } else {
                _this.mask(borderBoxArea);
                _this.ctx.clip();
                _this.path(shadowPaintingArea);
              }
              _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
              _this.ctx.shadowOffsetY = shadow.offsetY.number;
              _this.ctx.shadowColor = asString(shadow.color);
              _this.ctx.shadowBlur = shadow.blur.number;
              _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : "rgba(0,0,0,1)";
              _this.ctx.fill();
              _this.ctx.restore();
            });
            _a.label = 2;
          case 2:
            side = 0;
            _i = 0, borders_1 = borders;
            _a.label = 3;
          case 3:
            if (!(_i < borders_1.length))
              return [3, 13];
            border = borders_1[_i];
            if (!(border.style !== 0 && !isTransparent(border.color) && border.width > 0))
              return [3, 11];
            if (!(border.style === 2))
              return [3, 5];
            return [4, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2)];
          case 4:
            _a.sent();
            return [3, 11];
          case 5:
            if (!(border.style === 3))
              return [3, 7];
            return [4, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3)];
          case 6:
            _a.sent();
            return [3, 11];
          case 7:
            if (!(border.style === 4))
              return [3, 9];
            return [4, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
          case 8:
            _a.sent();
            return [3, 11];
          case 9:
            return [4, this.renderSolidBorder(border.color, side, paint.curves)];
          case 10:
            _a.sent();
            _a.label = 11;
          case 11:
            side++;
            _a.label = 12;
          case 12:
            _i++;
            return [3, 3];
          case 13:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderDashedDottedBorder = function(color2, width, side, curvePoints, style2) {
    return __awaiter(this, void 0, void 0, function() {
      var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
      return __generator(this, function(_a) {
        this.ctx.save();
        strokePaths = parsePathForBorderStroke(curvePoints, side);
        boxPaths = parsePathForBorder(curvePoints, side);
        if (style2 === 2) {
          this.path(boxPaths);
          this.ctx.clip();
        }
        if (isBezierCurve(boxPaths[0])) {
          startX = boxPaths[0].start.x;
          startY = boxPaths[0].start.y;
        } else {
          startX = boxPaths[0].x;
          startY = boxPaths[0].y;
        }
        if (isBezierCurve(boxPaths[1])) {
          endX = boxPaths[1].end.x;
          endY = boxPaths[1].end.y;
        } else {
          endX = boxPaths[1].x;
          endY = boxPaths[1].y;
        }
        if (side === 0 || side === 2) {
          length = Math.abs(startX - endX);
        } else {
          length = Math.abs(startY - endY);
        }
        this.ctx.beginPath();
        if (style2 === 3) {
          this.formatPath(strokePaths);
        } else {
          this.formatPath(boxPaths.slice(0, 2));
        }
        dashLength = width < 3 ? width * 3 : width * 2;
        spaceLength = width < 3 ? width * 2 : width;
        if (style2 === 3) {
          dashLength = width;
          spaceLength = width;
        }
        useLineDash = true;
        if (length <= dashLength * 2) {
          useLineDash = false;
        } else if (length <= dashLength * 2 + spaceLength) {
          multiplier = length / (2 * dashLength + spaceLength);
          dashLength *= multiplier;
          spaceLength *= multiplier;
        } else {
          numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
          minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
          maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
          spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
        }
        if (useLineDash) {
          if (style2 === 3) {
            this.ctx.setLineDash([0, dashLength + spaceLength]);
          } else {
            this.ctx.setLineDash([dashLength, spaceLength]);
          }
        }
        if (style2 === 3) {
          this.ctx.lineCap = "round";
          this.ctx.lineWidth = width;
        } else {
          this.ctx.lineWidth = width * 2 + 1.1;
        }
        this.ctx.strokeStyle = asString(color2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        if (style2 === 2) {
          if (isBezierCurve(boxPaths[0])) {
            path1 = boxPaths[3];
            path2 = boxPaths[0];
            this.ctx.beginPath();
            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
            this.ctx.stroke();
          }
          if (isBezierCurve(boxPaths[1])) {
            path1 = boxPaths[1];
            path2 = boxPaths[2];
            this.ctx.beginPath();
            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
            this.ctx.stroke();
          }
        }
        this.ctx.restore();
        return [2];
      });
    });
  };
  CanvasRenderer2.prototype.render = function(element) {
    return __awaiter(this, void 0, void 0, function() {
      var stack;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (this.options.backgroundColor) {
              this.ctx.fillStyle = asString(this.options.backgroundColor);
              this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
            }
            stack = parseStackingContexts(element);
            return [4, this.renderStack(stack)];
          case 1:
            _a.sent();
            this.applyEffects([]);
            return [2, this.canvas];
        }
      });
    });
  };
  return CanvasRenderer2;
}(Renderer);
var isTextInputElement = function(container2) {
  if (container2 instanceof TextareaElementContainer) {
    return true;
  } else if (container2 instanceof SelectElementContainer) {
    return true;
  } else if (container2 instanceof InputElementContainer && container2.type !== RADIO && container2.type !== CHECKBOX) {
    return true;
  }
  return false;
};
var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
  switch (clip) {
    case 0:
      return calculateBorderBoxPath(curves);
    case 2:
      return calculateContentBoxPath(curves);
    case 1:
    default:
      return calculatePaddingBoxPath(curves);
  }
};
var canvasTextAlign = function(textAlign2) {
  switch (textAlign2) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
};
var iOSBrokenFonts = ["-apple-system", "system-ui"];
var fixIOSSystemFonts = function(fontFamilies) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function(fontFamily2) {
    return iOSBrokenFonts.indexOf(fontFamily2) === -1;
  }) : fontFamilies;
};
var ForeignObjectRenderer = function(_super) {
  __extends(ForeignObjectRenderer2, _super);
  function ForeignObjectRenderer2(context, options) {
    var _this = _super.call(this, context, options) || this;
    _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
    _this.ctx = _this.canvas.getContext("2d");
    _this.options = options;
    _this.canvas.width = Math.floor(options.width * options.scale);
    _this.canvas.height = Math.floor(options.height * options.scale);
    _this.canvas.style.width = options.width + "px";
    _this.canvas.style.height = options.height + "px";
    _this.ctx.scale(_this.options.scale, _this.options.scale);
    _this.ctx.translate(-options.x, -options.y);
    _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
    return _this;
  }
  ForeignObjectRenderer2.prototype.render = function(element) {
    return __awaiter(this, void 0, void 0, function() {
      var svg2, img;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            svg2 = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
            return [4, loadSerializedSVG(svg2)];
          case 1:
            img = _a.sent();
            if (this.options.backgroundColor) {
              this.ctx.fillStyle = asString(this.options.backgroundColor);
              this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
            }
            this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
            return [2, this.canvas];
        }
      });
    });
  };
  return ForeignObjectRenderer2;
}(Renderer);
var loadSerializedSVG = function(svg2) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.onerror = reject;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg2));
  });
};
var Logger$1 = function() {
  function Logger2(_a) {
    var id2 = _a.id, enabled = _a.enabled;
    this.id = id2;
    this.enabled = enabled;
    this.start = Date.now();
  }
  Logger2.prototype.debug = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.enabled) {
      if (typeof window !== "undefined" && window.console && typeof console.debug === "function") {
        console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
      } else {
        this.info.apply(this, args);
      }
    }
  };
  Logger2.prototype.getTime = function() {
    return Date.now() - this.start;
  };
  Logger2.prototype.info = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.enabled) {
      if (typeof window !== "undefined" && window.console && typeof console.info === "function") {
        console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
      }
    }
  };
  Logger2.prototype.warn = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.enabled) {
      if (typeof window !== "undefined" && window.console && typeof console.warn === "function") {
        console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
      } else {
        this.info.apply(this, args);
      }
    }
  };
  Logger2.prototype.error = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.enabled) {
      if (typeof window !== "undefined" && window.console && typeof console.error === "function") {
        console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
      } else {
        this.info.apply(this, args);
      }
    }
  };
  Logger2.instances = {};
  return Logger2;
}();
var Context = function() {
  function Context2(options, windowBounds) {
    var _a;
    this.windowBounds = windowBounds;
    this.instanceName = "#" + Context2.instanceCount++;
    this.logger = new Logger$1({ id: this.instanceName, enabled: options.logging });
    this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
  }
  Context2.instanceCount = 1;
  return Context2;
}();
var html2canvas = function(element, options) {
  if (options === void 0) {
    options = {};
  }
  return renderElement(element, options);
};
if (typeof window !== "undefined") {
  CacheStorage.setContext(window);
}
var renderElement = function(element, opts) {
  return __awaiter(void 0, void 0, void 0, function() {
    var ownerDocument, defaultView2, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container2, _a, width, height, left, top, backgroundColor2, renderOptions, canvas, renderer, root2, renderer;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    return __generator(this, function(_u) {
      switch (_u.label) {
        case 0:
          if (!element || typeof element !== "object") {
            return [2, Promise.reject("Invalid element provided as first argument")];
          }
          ownerDocument = element.ownerDocument;
          if (!ownerDocument) {
            throw new Error("Element is not attached to a Document");
          }
          defaultView2 = ownerDocument.defaultView;
          if (!defaultView2) {
            throw new Error("Document is not attached to a Window");
          }
          resourceOptions = {
            allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
            imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15e3,
            proxy: opts.proxy,
            useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
          };
          contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
          windowOptions = {
            windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView2.innerWidth,
            windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView2.innerHeight,
            scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView2.pageXOffset,
            scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView2.pageYOffset
          };
          windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
          context = new Context(contextOptions, windowBounds);
          foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
          cloneOptions = {
            allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
            onclone: opts.onclone,
            ignoreElements: opts.ignoreElements,
            inlineImages: foreignObjectRendering,
            copyStyles: foreignObjectRendering
          };
          context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
          documentCloner = new DocumentCloner(context, element, cloneOptions);
          clonedElement = documentCloner.clonedReferenceElement;
          if (!clonedElement) {
            return [2, Promise.reject("Unable to find element in cloned iframe")];
          }
          return [4, documentCloner.toIFrame(ownerDocument, windowBounds)];
        case 1:
          container2 = _u.sent();
          _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
          backgroundColor2 = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
          renderOptions = {
            canvas: opts.canvas,
            backgroundColor: backgroundColor2,
            scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView2.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
            x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
            y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
            width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
            height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
          };
          if (!foreignObjectRendering)
            return [3, 3];
          context.logger.debug("Document cloned, using foreign object rendering");
          renderer = new ForeignObjectRenderer(context, renderOptions);
          return [4, renderer.render(clonedElement)];
        case 2:
          canvas = _u.sent();
          return [3, 5];
        case 3:
          context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
          context.logger.debug("Starting DOM parsing");
          root2 = parseTree(context, clonedElement);
          if (backgroundColor2 === root2.styles.backgroundColor) {
            root2.styles.backgroundColor = COLORS.TRANSPARENT;
          }
          context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
          renderer = new CanvasRenderer(context, renderOptions);
          return [4, renderer.render(root2)];
        case 4:
          canvas = _u.sent();
          _u.label = 5;
        case 5:
          if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
            if (!DocumentCloner.destroy(container2)) {
              context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
            }
          }
          context.logger.debug("Finished rendering");
          return [2, canvas];
      }
    });
  });
};
var parseBackgroundColor = function(context, element, backgroundColorOverride) {
  var ownerDocument = element.ownerDocument;
  var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
  var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
  var defaultBackgroundColor = typeof backgroundColorOverride === "string" ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 4294967295;
  return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
};
const wrapperEle = ref();
const svgEle = ref();
const gEle = ref();
const asstSvgEle = ref();
const foreignEle = ref();
const foreignDivEle = ref();
emitter.on("updateNode", (value) => {
  if (Object.prototype.hasOwnProperty.call(value, "id"))
    rename(value.id, value.name);
});
emitter.on("removeNode", (value) => {
  if (value.length > 0)
    del(value);
});
function onMouseEnter() {
  const temp = this.querySelector(`g.${style["add-btn"]}`);
  if (temp) {
    temp.style.opacity = "1";
  }
}
function onMouseLeave() {
  const temp = this.querySelector(`g.${style["add-btn"]}`);
  if (temp) {
    temp.style.opacity = "0";
  }
}
const onZoomMove = (e2) => {
  const { g: g2 } = selection;
  if (!g2) {
    return;
  }
  zoomTransform.value = e2.transform;
  g2.attr("transform", e2.transform.toString());
};
const onSelect = (e2, d) => {
  e2.stopPropagation();
  selectGNode(d);
};
function onEdit(_e, d) {
  var _a, _b;
  const gNode = (_a = this.parentNode) == null ? void 0 : _a.parentNode;
  const { foreign: foreign2 } = selection;
  if (editFlag && foreign2 && foreignDivEle.value) {
    gNode.classList.add(style.edited);
    emitter.emit("edit-flag", false);
    foreign2.attr("x", d.x - 2 - (d.left ? d.width : 0)).attr("y", d.y - mmdata.data.y - 2).attr("data-id", d.id).attr("data-name", d.name).style("display", "");
    const div = foreignDivEle.value;
    div.textContent = d.name;
    div.focus();
    (_b = getSelection()) == null ? void 0 : _b.selectAllChildren(div);
    const gContent = gNode.querySelector(`:scope > .${style.content}`);
    if (gContent) {
      moveView(gContent);
    }
  }
}
const onEditBlur = () => {
  var _a;
  (_a = document.getElementsByClassName(style.edited)[0]) == null ? void 0 : _a.classList.remove(style.edited, style.selected);
  if (foreignEle.value && foreignDivEle.value) {
    foreignEle.value.style.display = "none";
    const id2 = foreignEle.value.getAttribute("data-id");
    const oldname = foreignEle.value.getAttribute("data-name");
    const name = foreignDivEle.value.textContent;
    if (id2 && name !== null && name !== oldname) {
      rename(id2, name);
    }
  }
};
const onContextmenu = (e2) => {
  e2.preventDefault();
  if (!wrapperEle.value) {
    return;
  }
  const relativePos = getRelativePos(wrapperEle.value, e2);
  pos.value = relativePos;
  const eventTargets = e2.composedPath();
  const gNode = eventTargets.find((et) => {
    var _a;
    return (_a = et.classList) == null ? void 0 : _a.contains("node");
  });
  if (gNode) {
    const { classList: classList2 } = gNode;
    const isRoot = classList2.contains(style.root);
    const collapseFlag = classList2.contains(style["collapse"]);
    if (!classList2.contains(style.selected)) {
      selectGNode(gNode);
    }
    deleteItem.value.disabled = isRoot;
    cutItem.value.disabled = isRoot;
    deleteOneItem.value.disabled = isRoot;
    addSiblingItem.value.disabled = isRoot;
    addSiblingBeforeItem.value.disabled = isRoot;
    addParentItem.value.disabled = isRoot;
    expandItem.value.disabled = !collapseFlag;
    collapseItem.value.disabled = collapseFlag || classList2.contains("leaf");
    showViewMenu.value = false;
  } else {
    showViewMenu.value = true;
  }
  emitter.emit("showContextmenu", true);
};
const onClickMenu = (name) => {
  var _a, _b;
  switch (name) {
    case "zoomfit":
      fitView();
      break;
    case "zoomin":
      scaleView(true);
      break;
    case "zoomout":
      scaleView(true);
      break;
    case "edit":
      emitter.emit("changeNode", getSelectedGData().id);
      break;
    case "add":
      addAndEdit(new MouseEvent("click"), getSelectedGData());
      break;
    case "delete":
      del(getSelectedGData().id);
      break;
    case "delete-one":
      delOne(getSelectedGData().id);
      break;
    case "collapse":
      collapse(getSelectedGData().id);
      break;
    case "expand":
      expand(getSelectedGData().id);
      break;
    case "add-sibling":
      {
        const seleData = getSelectedGData();
        const d = addSibling(seleData.id, "");
        if (d) {
          edit(d);
        }
      }
      break;
    case "add-sibling-before":
      {
        const seleData = getSelectedGData();
        const d = addSibling(seleData.id, "", true);
        if (d) {
          edit(d);
        }
      }
      break;
    case "add-parent":
      {
        const seleData = getSelectedGData();
        const d = addParent(seleData.id, "");
        if (d) {
          edit(d);
        }
      }
      break;
    case "cut":
      {
        const { id: id2 } = getSelectedGData();
        const rawdata = (_a = mmdata.find(id2)) == null ? void 0 : _a.rawData;
        if (rawdata) {
          navigator.clipboard.writeText(JSON.stringify(rawdata));
        }
        del(id2);
      }
      break;
    case "copy":
      {
        const seleData = getSelectedGData();
        const rawdata = (_b = mmdata.find(seleData.id)) == null ? void 0 : _b.rawData;
        if (rawdata) {
          navigator.clipboard.writeText(JSON.stringify(rawdata));
        }
      }
      break;
    case "paste":
      {
        const seleData = getSelectedGData();
        navigator.clipboard.readText().then((clipText) => {
          const rawdata = isData(clipText) || { name: clipText };
          add(seleData.id, rawdata);
        });
      }
      break;
  }
};
const addAndEdit = (e2, d) => {
  const child = add(d.id, "");
  if (child) {
    edit(child, e2);
  }
};
function edit(d, e2 = new MouseEvent("click")) {
  const { g: g2 } = selection;
  if (!g2) {
    return;
  }
  const gText = g2.selectAll(`g[data-id='${getDataId(d)}'] > g.${style.content} > g.${style.text}`);
  const node = gText.node();
  if (node) {
    emitter.emit("edit-flag", true);
    onEdit.call(node, e2, d);
  }
}
const onClickExpandBtn = (e2, d) => {
  expand(d.id);
};
function onDragMove(e2, d) {
  var _a;
  const gNode = (_a = this.parentNode) == null ? void 0 : _a.parentNode;
  if (svgEle.value) {
    svgEle.value.classList.add(style.dragging);
  }
  const { g: g2 } = selection;
  if (!g2) {
    return;
  }
  moveNode(gNode, d, [e2.x - d.x, e2.y - d.y]);
  const mousePos = pointer(e2, gEle.value);
  mousePos[1] += mmdata.data.y;
  const temp = g2.selectAll("g.node").filter((other) => {
    if (other !== d && other !== d.parent && !other.id.startsWith(d.id)) {
      let diffx0 = textRectPadding;
      let diffx1 = other.width + textRectPadding;
      if (other.left && other.depth !== 0) {
        [diffx0, diffx1] = [diffx1, diffx0];
      }
      const rect = {
        x0: other.x - diffx0,
        x1: other.x + diffx1,
        y0: other.y - textRectPadding,
        y1: other.y + other.height + textRectPadding
      };
      return mousePos[0] > rect.x0 && mousePos[1] > rect.y0 && mousePos[0] < rect.x1 && mousePos[1] < rect.y1;
    }
    return false;
  });
  const old = Array.from(document.getElementsByClassName(style.outline));
  const n = temp.node();
  old.forEach((o) => {
    if (o !== n) {
      o.classList.remove(style.outline);
    }
  });
  n == null ? void 0 : n.classList.add(style.outline);
}
function onDragEnd(e2, d) {
  var _a;
  const gNode = (_a = this.parentNode) == null ? void 0 : _a.parentNode;
  if (svgEle.value) {
    svgEle.value.classList.remove(style.dragging);
  }
  const np = document.getElementsByClassName(style.outline)[0];
  if (np) {
    np.classList.remove(style.outline);
    const pid = np.getAttribute("data-id");
    if (pid) {
      d.px = 0;
      d.py = 0;
      moveChild(pid, d.id);
    } else {
      throw new Error("outline data-id null");
    }
    return;
  }
  const xToCenter = d.x - mmdata.getRootWidth() / 2;
  const lr = d.depth === 1 && xToCenter * (xToCenter + d.px) < 0;
  const getSameSide = lr ? (a2) => a2.left !== d.left : (a2) => a2.left === d.left;
  const p = gNode.parentNode;
  let downD = lr ? { y: Infinity, id: d.id } : d;
  let upD = lr ? { y: -Infinity, id: d.id } : d;
  const brothers = select(p).selectAll(`g.${getSiblingGClass(d).join(".")}`).filter((a2) => a2 !== d && getSameSide(a2));
  const endY = d.y + d.py;
  brothers.each((b) => {
    if ((lr || b.y > d.y) && b.y < endY && b.y > upD.y) {
      upD = b;
    }
    if ((lr || b.y < d.y) && b.y > endY && b.y < downD.y) {
      downD = b;
    }
  });
  if (downD.id !== d.id) {
    d.px = 0;
    d.py = 0;
    moveSibling(d.id, downD.id);
  } else if (upD.id !== d.id) {
    d.px = 0;
    d.py = 0;
    moveSibling(d.id, upD.id, 1);
  } else if (lr) {
    d.px = 0;
    d.py = 0;
    changeLeft(d.id);
  } else {
    moveNode(gNode, d, [0, 0], 500);
  }
}
const switchZoom = (zoomable) => {
  const { svg: svg2 } = selection;
  if (!svg2) {
    return;
  }
  if (zoomable) {
    zoom(svg2);
    svg2.on("dblclick.zoom", null);
  } else {
    svg2.on(".zoom", null);
  }
};
const switchEdit = (editable) => {
  const { g: g2 } = selection;
  if (!foreignDivEle.value || !g2) {
    return;
  }
  const gText = g2.selectAll(`g.${style.text}`);
  if (editable) {
    gText.on("click", onEdit);
  } else {
    gText.on("click", null);
  }
};
const switchSelect = (selectable) => {
  const { g: g2 } = selection;
  if (!g2) {
    return;
  }
  const gText = g2.selectAll(`g.${style.text}`);
  if (selectable) {
    gText.on("mousedown", onSelect);
  } else {
    gText.on("mousedown", null);
  }
};
const switchContextmenu = (val) => {
  if (!wrapperEle.value) {
    return;
  }
  if (val) {
    wrapperEle.value.addEventListener("contextmenu", onContextmenu);
  } else {
    wrapperEle.value.removeEventListener("contextmenu", onContextmenu);
  }
};
const switchDrag = (draggable) => {
  const { g: g2 } = selection;
  if (!g2) {
    return;
  }
  const gText = g2.selectAll(`g.node:not(.${style.root}) > g > g.${style.text}`);
  if (draggable) {
    drag(gText);
  } else {
    gText.on(".drag", null);
  }
};
let svg;
let g;
let asstSvg;
let foreign;
emitter.on("selection-svg", (val) => svg = val);
emitter.on("selection-g", (val) => g = val);
emitter.on("selection-asstSvg", (val) => asstSvg = val);
emitter.on("selection-foreign", (val) => foreign = val);
const showViewMenu = ref(true);
const pos = ref({ left: 0, top: 0 });
const collapseItem = ref({ name: "collapse", disabled: true });
const expandItem = ref({ name: "expand", disabled: true });
const deleteItem = ref({ name: "delete", disabled: false });
const addItem = ref({ name: "add", disabled: false });
const editItem = ref({ name: "edit", disabled: false });
const addParentItem = ref({ name: "add-parent", disabled: false });
const addSiblingItem = ref({ name: "add-sibling", disabled: false });
const addSiblingBeforeItem = ref({ name: "add-sibling-before", disabled: true });
const cutItem = ref({ name: "cut", disabled: false });
const copyItem = ref({ name: "copy", disabled: false });
const pasteItem = ref({ name: "paste", disabled: false });
const deleteOneItem = ref({ name: "delete-one", disabled: false });
const nodeMenu = computed(() => [
  [addItem.value, addParentItem.value, addSiblingItem.value, addSiblingBeforeItem.value],
  [editItem.value, cutItem.value, copyItem.value, pasteItem.value, deleteItem.value, deleteOneItem.value],
  [{ name: "selectall", disabled: true }],
  [collapseItem.value, expandItem.value]
].filter((item, index) => {
  if (index === 0 || index === 1) {
    return mmprops.value.edit;
  } else {
    return true;
  }
}));
const viewMenu = computed(() => [
  [
    {
      name: "zoomin",
      disabled: zoomTransform.value.k >= scaleExtent[1]
    },
    {
      name: "zoomout",
      disabled: zoomTransform.value.k <= scaleExtent[0]
    },
    { name: "zoomfit", disabled: false }
  ],
  [
    { name: "selectall", disabled: true }
  ]
]);
const menu$1 = computed(() => showViewMenu.value ? viewMenu.value : nodeMenu.value);
const linkHorizontal = linkHorizontal$1().source((d) => d.source).target((d) => d.target);
const curveStepLine = line().curve(step);
const curveStepLink = ({ source, target }) => curveStepLine([source, target]);
let sharpCorner = false;
let link = linkHorizontal;
const changeSharpCorner = ref(false);
emitter.on("sharp-corner", (value) => {
  if (sharpCorner !== value) {
    changeSharpCorner.value = true;
  }
  sharpCorner = !!value;
  link = value ? curveStepLink : linkHorizontal;
});
let branch = 4;
emitter.on("branch", (value) => branch = value || branch);
let scaleExtent = [0.1, 8];
emitter.on("scale-extent", (value) => scaleExtent = value || scaleExtent);
let editFlag = false;
emitter.on("edit-flag", (val) => editFlag = !!val);
const rootTextRectRadius = 6;
const rootTextRectPadding = 10;
let yGap = 18;
let xGap = 84;
let textRectPadding = Math.min(yGap / 2 - 1, rootTextRectPadding);
emitter.on("gap", (gap) => {
  if (!gap) {
    return;
  }
  xGap = gap.xGap;
  yGap = gap.yGap;
  textRectPadding = Math.min(yGap / 2 - 1, rootTextRectPadding);
  textRectPadding = Math.min(xGap / 2 - 1, textRectPadding);
});
const observer = new ResizeObserver((arr) => {
  const { foreign: foreign2 } = selection;
  if (!foreign2) {
    return;
  }
  const temp = arr[0];
  const foreignDiv = temp.target;
  const { width, height } = temp.contentRect;
  const pl = parseInt(getComputedStyle(foreignDiv).paddingLeft || "0", 10);
  const b = parseInt(getComputedStyle(foreignDiv.parentNode).borderTopWidth || "0", 10);
  const gap = (pl + b) * 2;
  foreign2.attr("width", width + gap).attr("height", height + gap);
  if (foreign2.style("display") !== "none") {
    moveView(foreignDiv);
  }
});
const addBtnRect = { side: 12, padding: 2, margin: 8 };
const addBtnSide = addBtnRect.side + addBtnRect.padding * 2;
const expandBtnRect = { width: 16, height: 4, radius: 2 };
const zoomTransform = ref(identity);
const zoom = zoom$1().on("zoom", onZoomMove).scaleExtent(scaleExtent);
const drag = drag$1().container(getDragContainer).on("drag", onDragMove).on("end", onDragEnd);
const addNodeBtn = ref(false);
let mmcontext;
emitter.on("mindmap-context", (val) => val ? mmcontext = val : null);
const mmprops = ref({
  drag: false,
  edit: false
});
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array2, setter, iteratee, accumulator) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        var value = array2[index];
        setter(accumulator, value, iteratee(value), array2);
      }
      return accumulator;
    }
    function arrayEach(array2, iteratee) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (iteratee(array2[index], index, array2) === false) {
          break;
        }
      }
      return array2;
    }
    function arrayEachRight(array2, iteratee) {
      var length = array2 == null ? 0 : array2.length;
      while (length--) {
        if (iteratee(array2[length], length, array2) === false) {
          break;
        }
      }
      return array2;
    }
    function arrayEvery(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (!predicate(array2[index], index, array2)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array2[index];
        if (predicate(value, index, array2)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array2, value) {
      var length = array2 == null ? 0 : array2.length;
      return !!length && baseIndexOf(array2, value, 0) > -1;
    }
    function arrayIncludesWith(array2, value, comparator) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (comparator(value, array2[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array2, iteratee) {
      var index = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array2[index], index, array2);
      }
      return result;
    }
    function arrayPush(array2, values) {
      var index = -1, length = values.length, offset = array2.length;
      while (++index < length) {
        array2[offset + index] = values[index];
      }
      return array2;
    }
    function arrayReduce(array2, iteratee, accumulator, initAccum) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      if (initAccum && length) {
        accumulator = array2[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array2[index], index, array2);
      }
      return accumulator;
    }
    function arrayReduceRight(array2, iteratee, accumulator, initAccum) {
      var length = array2 == null ? 0 : array2.length;
      if (initAccum && length) {
        accumulator = array2[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array2[length], length, array2);
      }
      return accumulator;
    }
    function arraySome(array2, predicate) {
      var index = -1, length = array2 == null ? 0 : array2.length;
      while (++index < length) {
        if (predicate(array2[index], index, array2)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array2, predicate, fromIndex, fromRight) {
      var length = array2.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array2[index], index, array2)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array2, value, fromIndex) {
      return value === value ? strictIndexOf(array2, value, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array2, value, fromIndex, comparator) {
      var index = fromIndex - 1, length = array2.length;
      while (++index < length) {
        if (comparator(array2[index], value)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array2, iteratee) {
      var length = array2 == null ? 0 : array2.length;
      return length ? baseSum(array2, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object2) {
        return object2 == null ? undefined$1 : object2[key];
      };
    }
    function basePropertyOf(object2) {
      return function(key) {
        return object2 == null ? undefined$1 : object2[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array2, comparer) {
      var length = array2.length;
      array2.sort(comparer);
      while (length--) {
        array2[length] = array2[length].value;
      }
      return array2;
    }
    function baseSum(array2, iteratee) {
      var result, index = -1, length = array2.length;
      while (++index < length) {
        var current = iteratee(array2[index]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object2, props) {
      return arrayMap(props, function(key) {
        return [key, object2[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object2, props) {
      return arrayMap(props, function(key) {
        return object2[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1, length = strSymbols.length;
      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function countHolders(array2, placeholder) {
      var length = array2.length, result = 0;
      while (length--) {
        if (array2[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object2, key) {
      return object2 == null ? undefined$1 : object2[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform2) {
      return function(arg) {
        return func(transform2(arg));
      };
    }
    function replaceHolders(array2, placeholder) {
      var index = -1, length = array2.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array2[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array2[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function setToPairs(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array2, value, fromIndex) {
      var index = fromIndex - 1, length = array2.length;
      while (++index < length) {
        if (array2[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array2, value, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array2[index] === value) {
          return index;
        }
      }
      return index;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root2 : _23.defaults(root2.Object(), context, _23.pick(root2, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root2._;
      var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e2) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root2.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root2.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root2.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap && new WeakMap();
      var realNames = {};
      var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object2() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object2.prototype = proto;
          var result2 = new object2();
          object2.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array2 = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array2), isRight = dir < 0, arrLength = isArr ? array2.length : 0, view = getView(0, arrLength, this.__views__), start2 = view.start, end = view.end, length = end - start2, index = isRight ? end : start2 - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array2, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array2[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed2;
              } else if (!computed2) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? undefined$1 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values2[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array2) {
        var length = array2.length;
        return length ? array2[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array2, n) {
        return shuffleSelf(copyArray(array2), baseClamp(n, 0, array2.length));
      }
      function arrayShuffle(array2) {
        return shuffleSelf(copyArray(array2));
      }
      function assignMergeValue(object2, key, value) {
        if (value !== undefined$1 && !eq(object2[key], value) || value === undefined$1 && !(key in object2)) {
          baseAssignValue(object2, key, value);
        }
      }
      function assignValue(object2, key, value) {
        var objValue = object2[key];
        if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === undefined$1 && !(key in object2)) {
          baseAssignValue(object2, key, value);
        }
      }
      function assocIndexOf(array2, key) {
        var length = array2.length;
        while (length--) {
          if (eq(array2[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object2, source) {
        return object2 && copyObject(source, keys(source), object2);
      }
      function baseAssignIn(object2, source) {
        return object2 && copyObject(source, keysIn(source), object2);
      }
      function baseAssignValue(object2, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object2, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object2[key] = value;
        }
      }
      function baseAt(object2, paths) {
        var index = -1, length = paths.length, result2 = Array2(length), skip = object2 == null;
        while (++index < length) {
          result2[index] = skip ? undefined$1 : get2(object2, paths[index]);
        }
        return result2;
      }
      function baseClamp(number, lower2, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower2 !== undefined$1) {
            number = number >= lower2 ? number : lower2;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object2, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object2 ? customizer(value, key, object2, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object2) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object2 ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object2) {
          return baseConformsTo(object2, source, props);
        };
      }
      function baseConformsTo(object2, source, props) {
        var length = props.length;
        if (object2 == null) {
          return !length;
        }
        object2 = Object2(object2);
        while (length--) {
          var key = props[length], predicate = source[key], value = object2[key];
          if (value === undefined$1 && !(key in object2) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array2, values2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, isCommon = true, length = array2.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index < length) {
            var value = array2[index], computed2 = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed2) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed2, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index, collection2) {
          result2 = !!predicate(value, index, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array2, iteratee2, comparator) {
        var index = -1, length = array2.length;
        while (++index < length) {
          var value = array2[index], current = iteratee2(value);
          if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
            var computed2 = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array2, value, start2, end) {
        var length = array2.length;
        start2 = toInteger(start2);
        if (start2 < 0) {
          start2 = -start2 > length ? 0 : length + start2;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start2 > end ? 0 : toLength(end);
        while (start2 < end) {
          array2[start2++] = value;
        }
        return array2;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index, collection2) {
          if (predicate(value, index, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array2, depth, predicate, isStrict, result2) {
        var index = -1, length = array2.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index < length) {
          var value = array2[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object2, iteratee2) {
        return object2 && baseFor(object2, iteratee2, keys);
      }
      function baseForOwnRight(object2, iteratee2) {
        return object2 && baseForRight(object2, iteratee2, keys);
      }
      function baseFunctions(object2, props) {
        return arrayFilter(props, function(key) {
          return isFunction(object2[key]);
        });
      }
      function baseGet(object2, path2) {
        path2 = castPath(path2, object2);
        var index = 0, length = path2.length;
        while (object2 != null && index < length) {
          object2 = object2[toKey(path2[index++])];
        }
        return index && index == length ? object2 : undefined$1;
      }
      function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object2);
        return isArray(object2) ? result2 : arrayPush(result2, symbolsFunc(object2));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object2, key) {
        return object2 != null && hasOwnProperty.call(object2, key);
      }
      function baseHasIn(object2, key) {
        return object2 != null && key in Object2(object2);
      }
      function baseInRange(number, start2, end) {
        return number >= nativeMin(start2, end) && number < nativeMax(start2, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array2 = arrays[othIndex];
          if (othIndex && iteratee2) {
            array2 = arrayMap(array2, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array2.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array2.length >= 120) ? new SetCache(othIndex && array2) : undefined$1;
        }
        array2 = arrays[0];
        var index = -1, seen = caches[0];
        outer:
          while (++index < length && result2.length < maxLength) {
            var value = array2[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object2, setter, iteratee2, accumulator) {
        baseForOwn(object2, function(value, key, object3) {
          setter(accumulator, iteratee2(value), key, object3);
        });
        return accumulator;
      }
      function baseInvoke(object2, path2, args) {
        path2 = castPath(path2, object2);
        object2 = parent(object2, path2);
        var func = object2 == null ? object2 : object2[toKey(last(path2))];
        return func == null ? undefined$1 : apply(func, object2, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object2, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object2), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object2)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object2, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object2 == null) {
          return !length;
        }
        object2 = Object2(object2);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object2[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object2)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object2, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength2(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity2;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object2) {
        if (!isPrototype(object2)) {
          return nativeKeys(object2);
        }
        var result2 = [];
        for (var key in Object2(object2)) {
          if (hasOwnProperty.call(object2, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object2) {
        if (!isObject(object2)) {
          return nativeKeysIn(object2);
        }
        var isProto = isPrototype(object2), result2 = [];
        for (var key in object2) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object2, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object2) {
          return object2 === source || baseIsMatch(object2, source, matchData);
        };
      }
      function baseMatchesProperty(path2, srcValue) {
        if (isKey(path2) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path2), srcValue);
        }
        return function(object2) {
          var objValue = get2(object2, path2);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object2, path2) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object2, source, srcIndex, customizer, stack) {
        if (object2 === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object2, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object2, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object2, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object2, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object2, key, newValue);
      }
      function baseNth(array2, n) {
        var length = array2.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex(n, length) ? array2[n] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity2];
        }
        var index = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index, "value": value };
        });
        return baseSortBy(result2, function(object2, other) {
          return compareMultiple(object2, other, orders);
        });
      }
      function basePick(object2, paths) {
        return basePickBy(object2, paths, function(value, path2) {
          return hasIn(object2, path2);
        });
      }
      function basePickBy(object2, paths, predicate) {
        var index = -1, length = paths.length, result2 = {};
        while (++index < length) {
          var path2 = paths[index], value = baseGet(object2, path2);
          if (predicate(value, path2)) {
            baseSet(result2, castPath(path2, object2), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path2) {
        return function(object2) {
          return baseGet(object2, path2);
        };
      }
      function basePullAll(array2, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array2;
        if (array2 === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array2, baseUnary(iteratee2));
        }
        while (++index < length) {
          var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
            if (seen !== array2) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array2, fromIndex, 1);
          }
        }
        return array2;
      }
      function basePullAt(array2, indexes) {
        var length = array2 ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index = indexes[length];
          if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex(index)) {
              splice.call(array2, index, 1);
            } else {
              baseUnset(array2, index);
            }
          }
        }
        return array2;
      }
      function baseRandom(lower2, upper) {
        return lower2 + nativeFloor(nativeRandom() * (upper - lower2 + 1));
      }
      function baseRange(start2, end, step2, fromRight) {
        var index = -1, length = nativeMax(nativeCeil((end - start2) / (step2 || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index] = start2;
          start2 += step2;
        }
        return result2;
      }
      function baseRepeat(string, n) {
        var result2 = "";
        if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string += string;
          }
        } while (n);
        return result2;
      }
      function baseRest(func, start2) {
        return setToString(overRest(func, start2, identity2), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array2 = values(collection);
        return shuffleSelf(array2, baseClamp(n, 0, array2.length));
      }
      function baseSet(object2, path2, value, customizer) {
        if (!isObject(object2)) {
          return object2;
        }
        path2 = castPath(path2, object2);
        var index = -1, length = path2.length, lastIndex = length - 1, nested = object2;
        while (nested != null && ++index < length) {
          var key = toKey(path2[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object2;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject(objValue) ? objValue : isIndex(path2[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object2;
      }
      var baseSetData = !metaMap ? identity2 : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity2 : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant2(string),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array2, start2, end) {
        var index = -1, length = array2.length;
        if (start2 < 0) {
          start2 = -start2 > length ? 0 : length + start2;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start2 > end ? 0 : end - start2 >>> 0;
        start2 >>>= 0;
        var result2 = Array2(length);
        while (++index < length) {
          result2[index] = array2[index + start2];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index, collection2) {
          result2 = predicate(value, index, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array2, value, retHighest) {
        var low = 0, high = array2 == null ? low : array2.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed2 = array2[mid];
            if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array2, value, identity2, retHighest);
      }
      function baseSortedIndexBy(array2, value, iteratee2, retHighest) {
        var low = 0, high = array2 == null ? 0 : array2.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array2[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed2 <= value : computed2 < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array2, iteratee2) {
        var index = -1, length = array2.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array2[index], computed2 = iteratee2 ? iteratee2(value) : value;
          if (!index || !eq(computed2, seen)) {
            var seen = computed2;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, length = array2.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set3 = iteratee2 ? null : createSet(array2);
          if (set3) {
            return setToArray(set3);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index < length) {
            var value = array2[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed2) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed2);
              }
              result2.push(value);
            } else if (!includes2(seen, computed2, comparator)) {
              if (seen !== result2) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object2, path2) {
        path2 = castPath(path2, object2);
        object2 = parent(object2, path2);
        return object2 == null || delete object2[toKey(last(path2))];
      }
      function baseUpdate(object2, path2, updater, customizer) {
        return baseSet(object2, path2, updater(baseGet(object2, path2)), customizer);
      }
      function baseWhile(array2, predicate, isDrop, fromRight) {
        var length = array2.length, index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length) && predicate(array2[index], index, array2)) {
        }
        return isDrop ? baseSlice(array2, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array2, fromRight ? index + 1 : 0, fromRight ? length : index);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index = -1, result2 = Array2(length);
        while (++index < length) {
          var array2 = arrays[index], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index) {
              result2[index] = baseDifference(result2[index] || array2, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index < length) {
          var value = index < valsLength ? values2[index] : undefined$1;
          assignFunc(result2, props[index], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity2;
      }
      function castPath(value, object2) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object2) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array2, start2, end) {
        var length = array2.length;
        end = end === undefined$1 ? length : end;
        return !start2 && end >= length ? array2 : baseSlice(array2, start2, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id2) {
        return root2.clearTimeout(id2);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object2, other, orders) {
        var index = -1, objCriteria = object2.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index < length) {
          var result2 = compareAscending(objCriteria[index], othCriteria[index]);
          if (result2) {
            if (index >= ordersLength) {
              return result2;
            }
            var order = orders[index];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object2.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array2) {
        var index = -1, length = source.length;
        array2 || (array2 = Array2(length));
        while (++index < length) {
          array2[index] = source[index];
        }
        return array2;
      }
      function copyObject(source, props, object2, customizer) {
        var isNew = !object2;
        object2 || (object2 = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object2, key, newValue);
          } else {
            assignValue(object2, key, newValue);
          }
        }
        return object2;
      }
      function copySymbols(source, object2) {
        return copyObject(source, getSymbols(source), object2);
      }
      function copySymbolsIn(source, object2) {
        return copyObject(source, getSymbolsIn(source), object2);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object2, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object2 = Object2(object2);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object2, source, index, customizer);
            }
          }
          return object2;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee2(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object2, iteratee2, keysFunc) {
          var index = -1, iterable = Object2(object2), props = keysFunc(object2), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object2;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
          }
          var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result2 = funcs[index2].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root2 && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object2, iteratee2) {
          return baseInverter(object2, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars2) {
        chars2 = chars2 === undefined$1 ? " " : baseToString(chars2);
        var charsLength = chars2.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars2, length) : chars2;
        }
        var result2 = baseRepeat(chars2, nativeCeil(length / stringSize(chars2)));
        return hasUnicode(chars2) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange2(fromRight) {
        return function(start2, end, step2) {
          if (step2 && typeof step2 != "number" && isIterateeCall(start2, end, step2)) {
            end = step2 = undefined$1;
          }
          start2 = toFinite(start2);
          if (end === undefined$1) {
            end = start2;
            start2 = 0;
          } else {
            end = toFinite(end);
          }
          step2 = step2 === undefined$1 ? start2 < end ? 1 : -1 : toFinite(step2);
          return baseRange(start2, end, step2, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop2 : function(values2) {
        return new Set(values2);
      };
      function createToPairs(keysFunc) {
        return function(object2) {
          var tag = getTag(object2);
          if (tag == mapTag) {
            return mapToArray(object2);
          }
          if (tag == setTag) {
            return setToPairs(object2);
          }
          return baseToPairs(object2, keysFunc(object2));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object2) {
        if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object2, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object2, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array2);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array2;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array2, other);
        stack.set(other, array2);
        while (++index < arrLength) {
          var arrValue = array2[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array2);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object2, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
              return false;
            }
            object2 = object2.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object2, +other);
          case errorTag:
            return object2.name == other.name && object2.message == other.message;
          case regexpTag:
          case stringTag:
            return object2 == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object2.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object2);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object2, other);
            var result2 = equalArrays(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object2);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object2) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object2, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object2);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object2;
        }
        var result2 = true;
        stack.set(object2, other);
        stack.set(other, object2);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object2[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object2.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object2);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object2) {
        return baseGetAllKeys(object2, keys, getSymbols);
      }
      function getAllKeysIn(object2) {
        return baseGetAllKeys(object2, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop2 : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array2 = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array2.length : 0;
        while (length--) {
          var data = array2[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object2 = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
        return object2.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object2) {
        var result2 = keys(object2), length = result2.length;
        while (length--) {
          var key = result2[length], value = object2[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object2, key) {
        var value = getValue(object2, key);
        return baseIsNative(value) ? value : undefined$1;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined$1;
          var unmasked = true;
        } catch (e2) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
        if (object2 == null) {
          return [];
        }
        object2 = Object2(object2);
        return arrayFilter(nativeGetSymbols(object2), function(symbol) {
          return propertyIsEnumerable.call(object2, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object2) {
        var result2 = [];
        while (object2) {
          arrayPush(result2, getSymbols(object2));
          object2 = getPrototype(object2);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start2, end, transforms) {
        var index = -1, length = transforms.length;
        while (++index < length) {
          var data = transforms[index], size2 = data.size;
          switch (data.type) {
            case "drop":
              start2 += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start2 + size2);
              break;
            case "takeRight":
              start2 = nativeMax(start2, end - size2);
              break;
          }
        }
        return { "start": start2, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object2, path2, hasFunc) {
        path2 = castPath(path2, object2);
        var index = -1, length = path2.length, result2 = false;
        while (++index < length) {
          var key = toKey(path2[index]);
          if (!(result2 = object2 != null && hasFunc(object2, key))) {
            break;
          }
          object2 = object2[key];
        }
        if (result2 || ++index != length) {
          return result2;
        }
        length = object2 == null ? 0 : object2.length;
        return !!length && isLength2(length) && isIndex(key, length) && (isArray(object2) || isArguments(object2));
      }
      function initCloneArray(array2) {
        var length = array2.length, result2 = new array2.constructor(length);
        if (length && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
          result2.index = array2.index;
          result2.input = array2.input;
        }
        return result2;
      }
      function initCloneObject(object2) {
        return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
      }
      function initCloneByTag(object2, tag, isDeep) {
        var Ctor = object2.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object2);
          case boolTag:
          case dateTag:
            return new Ctor(+object2);
          case dataViewTag:
            return cloneDataView(object2, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object2, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object2);
          case regexpTag:
            return cloneRegExp(object2);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object2);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index, object2) {
        if (!isObject(object2)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type == "string" && index in object2) {
          return eq(object2[index], value);
        }
        return false;
      }
      function isKey(value, object2) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object2(object2);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object2) {
          if (object2 == null) {
            return false;
          }
          return object2[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object2));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object2) {
        var result2 = [];
        if (object2 != null) {
          for (var key in Object2(object2)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start2, transform3) {
        start2 = nativeMax(start2 === undefined$1 ? func.length - 1 : start2, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start2, 0), array2 = Array2(length);
          while (++index < length) {
            array2[index] = args[start2 + index];
          }
          index = -1;
          var otherArgs = Array2(start2 + 1);
          while (++index < start2) {
            otherArgs[index] = args[index];
          }
          otherArgs[start2] = transform3(array2);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object2, path2) {
        return path2.length < 2 ? object2 : baseGet(object2, baseSlice(path2, 0, -1));
      }
      function reorder(array2, indexes) {
        var arrLength = array2.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array2);
        while (length--) {
          var index = indexes[length];
          array2[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
        }
        return array2;
      }
      function safeGet(object2, key) {
        if (key === "constructor" && typeof object2[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object2[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root2.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array2, size2) {
        var index = -1, length = array2.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index < size2) {
          var rand = baseRandom(index, lastIndex), value = array2[rand];
          array2[rand] = array2[index];
          array2[index] = value;
        }
        array2.length = size2;
        return array2;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e2) {
          }
          try {
            return func + "";
          } catch (e2) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array2, size2, guard) {
        if (guard ? isIterateeCall(array2, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array2 == null ? 0 : array2.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index < length) {
          result2[resIndex++] = baseSlice(array2, index, index += size2);
        }
        return result2;
      }
      function compact(array2) {
        var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array2[index];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array2 = arguments[0], index = length;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray(array2) ? copyArray(array2) : [array2], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array2, values2) {
        return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array2, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array2, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array2, n, guard) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array2, n < 0 ? 0 : n, length);
      }
      function dropRight(array2, n, guard) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array2, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array2, predicate) {
        return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array2, predicate) {
        return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true) : [];
      }
      function fill(array2, value, start2, end) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        if (start2 && typeof start2 != "number" && isIterateeCall(array2, value, start2)) {
          start2 = 0;
          end = length;
        }
        return baseFill(array2, value, start2, end);
      }
      function findIndex(array2, predicate, fromIndex) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array2, getIteratee(predicate, 3), index);
      }
      function findLastIndex(array2, predicate, fromIndex) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array2, getIteratee(predicate, 3), index, true);
      }
      function flatten(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseFlatten(array2, 1) : [];
      }
      function flattenDeep(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseFlatten(array2, INFINITY) : [];
      }
      function flattenDepth(array2, depth) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array2, depth);
      }
      function fromPairs(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index < length) {
          var pair = pairs[index];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array2) {
        return array2 && array2.length ? array2[0] : undefined$1;
      }
      function indexOf(array2, value, fromIndex) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseIndexOf(array2, value, index);
      }
      function initial(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseSlice(array2, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array2, separator) {
        return array2 == null ? "" : nativeJoin.call(array2, separator);
      }
      function last(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? array2[length - 1] : undefined$1;
      }
      function lastIndexOf(array2, value, fromIndex) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return -1;
        }
        var index = length;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return value === value ? strictLastIndexOf(array2, value, index) : baseFindIndex(array2, baseIsNaN, index, true);
      }
      function nth(array2, n) {
        return array2 && array2.length ? baseNth(array2, toInteger(n)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array2, values2) {
        return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2) : array2;
      }
      function pullAllBy(array2, values2, iteratee2) {
        return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, getIteratee(iteratee2, 2)) : array2;
      }
      function pullAllWith(array2, values2, comparator) {
        return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, undefined$1, comparator) : array2;
      }
      var pullAt = flatRest(function(array2, indexes) {
        var length = array2 == null ? 0 : array2.length, result2 = baseAt(array2, indexes);
        basePullAt(array2, arrayMap(indexes, function(index) {
          return isIndex(index, length) ? +index : index;
        }).sort(compareAscending));
        return result2;
      });
      function remove2(array2, predicate) {
        var result2 = [];
        if (!(array2 && array2.length)) {
          return result2;
        }
        var index = -1, indexes = [], length = array2.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length) {
          var value = array2[index];
          if (predicate(value, index, array2)) {
            result2.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array2, indexes);
        return result2;
      }
      function reverse(array2) {
        return array2 == null ? array2 : nativeReverse.call(array2);
      }
      function slice2(array2, start2, end) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array2, start2, end)) {
          start2 = 0;
          end = length;
        } else {
          start2 = start2 == null ? 0 : toInteger(start2);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array2, start2, end);
      }
      function sortedIndex(array2, value) {
        return baseSortedIndex(array2, value);
      }
      function sortedIndexBy(array2, value, iteratee2) {
        return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array2, value) {
        var length = array2 == null ? 0 : array2.length;
        if (length) {
          var index = baseSortedIndex(array2, value);
          if (index < length && eq(array2[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array2, value) {
        return baseSortedIndex(array2, value, true);
      }
      function sortedLastIndexBy(array2, value, iteratee2) {
        return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array2, value) {
        var length = array2 == null ? 0 : array2.length;
        if (length) {
          var index = baseSortedIndex(array2, value, true) - 1;
          if (eq(array2[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array2) {
        return array2 && array2.length ? baseSortedUniq(array2) : [];
      }
      function sortedUniqBy(array2, iteratee2) {
        return array2 && array2.length ? baseSortedUniq(array2, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array2) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseSlice(array2, 1, length) : [];
      }
      function take(array2, n, guard) {
        if (!(array2 && array2.length)) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array2, 0, n < 0 ? 0 : n);
      }
      function takeRight(array2, n, guard) {
        var length = array2 == null ? 0 : array2.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array2, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array2, predicate) {
        return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array2, predicate) {
        return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array2) {
        return array2 && array2.length ? baseUniq(array2) : [];
      }
      function uniqBy(array2, iteratee2) {
        return array2 && array2.length ? baseUniq(array2, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array2, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array2 && array2.length ? baseUniq(array2, undefined$1, comparator) : [];
      }
      function unzip(array2) {
        if (!(array2 && array2.length)) {
          return [];
        }
        var length = 0;
        array2 = arrayFilter(array2, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index) {
          return arrayMap(array2, baseProperty(index));
        });
      }
      function unzipWith(array2, iteratee2) {
        if (!(array2 && array2.length)) {
          return [];
        }
        var result2 = unzip(array2);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array2, values2) {
        return isArrayLikeObject(array2) ? baseDifference(array2, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start2 = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object2) {
          return baseAt(object2, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start2)) {
          return this.thru(interceptor);
        }
        value = value.slice(start2, +start2 + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array2) {
          if (length && !array2.length) {
            array2.push(undefined$1);
          }
          return array2;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter2(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find2 = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path2, args) {
        var index = -1, isFunc = typeof path2 == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index] = isFunc ? apply(path2, value, args) : baseInvoke(value, path2, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now2 = ctxNow || function() {
        return root2.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined$1 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey2 = baseRest(function(object2, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey2));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object2, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time2) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time2;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time2) {
          lastInvokeTime = time2;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time2) : result2;
        }
        function remainingWait(time2) {
          var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time2) {
          var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time2 = now2();
          if (shouldInvoke(time2)) {
            return trailingEdge(time2);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time2));
        }
        function trailingEdge(time2) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time2);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now2());
        }
        function debounced() {
          var time2 = now2(), isInvoking = shouldInvoke(time2);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time2;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer2 = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index = -1, length = nativeMin(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start2) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start2 = start2 === undefined$1 ? start2 : toInteger(start2);
        return baseRest(func, start2);
      }
      function spread(func, start2) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start2 = start2 == null ? 0 : nativeMax(toInteger(start2), 0);
        return baseRest(function(args) {
          var array2 = args[start2], otherArgs = castSlice(args, 0, start2);
          if (array2) {
            arrayPush(otherArgs, array2);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep2(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object2, source) {
        return source == null || baseConformsTo(object2, source, keys(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength2(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength2(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object2, source) {
        return object2 === source || baseIsMatch(object2, source, getMatchData(source));
      }
      function isMatchWith(object2, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object2, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object2, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object2);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object2, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object2, source) {
        copyObject(source, keysIn(source), object2);
      });
      var assignInWith = createAssigner(function(object2, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object2, customizer);
      });
      var assignWith = createAssigner(function(object2, source, srcIndex, customizer) {
        copyObject(source, keys(source), object2, customizer);
      });
      var at = flatRest(baseAt);
      function create2(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest(function(object2, sources) {
        object2 = Object2(object2);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object2[key];
            if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object2, key)) {
              object2[key] = source[key];
            }
          }
        }
        return object2;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object2, predicate) {
        return baseFindKey(object2, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object2, predicate) {
        return baseFindKey(object2, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object2, iteratee2) {
        return object2 == null ? object2 : baseFor(object2, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object2, iteratee2) {
        return object2 == null ? object2 : baseForRight(object2, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object2, iteratee2) {
        return object2 && baseForOwn(object2, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object2, iteratee2) {
        return object2 && baseForOwnRight(object2, getIteratee(iteratee2, 3));
      }
      function functions(object2) {
        return object2 == null ? [] : baseFunctions(object2, keys(object2));
      }
      function functionsIn(object2) {
        return object2 == null ? [] : baseFunctions(object2, keysIn(object2));
      }
      function get2(object2, path2, defaultValue) {
        var result2 = object2 == null ? undefined$1 : baseGet(object2, path2);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object2, path2) {
        return object2 != null && hasPath(object2, path2, baseHas);
      }
      function hasIn(object2, path2) {
        return object2 != null && hasPath(object2, path2, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant2(identity2));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object2) {
        return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
      }
      function keysIn(object2) {
        return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
      }
      function mapKeys(object2, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object2, function(value, key, object3) {
          baseAssignValue(result2, iteratee2(value, key, object3), value);
        });
        return result2;
      }
      function mapValues(object2, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object2, function(value, key, object3) {
          baseAssignValue(result2, key, iteratee2(value, key, object3));
        });
        return result2;
      }
      var merge = createAssigner(function(object2, source, srcIndex) {
        baseMerge(object2, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object2, source, srcIndex, customizer) {
        baseMerge(object2, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object2, paths) {
        var result2 = {};
        if (object2 == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path2) {
          path2 = castPath(path2, object2);
          isDeep || (isDeep = path2.length > 1);
          return path2;
        });
        copyObject(object2, getAllKeysIn(object2), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object2, predicate) {
        return pickBy(object2, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object2, paths) {
        return object2 == null ? {} : basePick(object2, paths);
      });
      function pickBy(object2, predicate) {
        if (object2 == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object2), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object2, props, function(value, path2) {
          return predicate(value, path2[0]);
        });
      }
      function result(object2, path2, defaultValue) {
        path2 = castPath(path2, object2);
        var index = -1, length = path2.length;
        if (!length) {
          length = 1;
          object2 = undefined$1;
        }
        while (++index < length) {
          var value = object2 == null ? undefined$1 : object2[toKey(path2[index])];
          if (value === undefined$1) {
            index = length;
            value = defaultValue;
          }
          object2 = isFunction(value) ? value.call(object2) : value;
        }
        return object2;
      }
      function set2(object2, path2, value) {
        return object2 == null ? object2 : baseSet(object2, path2, value);
      }
      function setWith(object2, path2, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object2 == null ? object2 : baseSet(object2, path2, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform2(object2, iteratee2, accumulator) {
        var isArr = isArray(object2), isArrLike = isArr || isBuffer(object2) || isTypedArray(object2);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object2 && object2.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject(object2)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object2)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object2, function(value, index, object3) {
          return iteratee2(accumulator, value, index, object3);
        });
        return accumulator;
      }
      function unset(object2, path2) {
        return object2 == null ? true : baseUnset(object2, path2);
      }
      function update(object2, path2, updater) {
        return object2 == null ? object2 : baseUpdate(object2, path2, castFunction(updater));
      }
      function updateWith(object2, path2, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object2 == null ? object2 : baseUpdate(object2, path2, castFunction(updater), customizer);
      }
      function values(object2) {
        return object2 == null ? [] : baseValues(object2, keys(object2));
      }
      function valuesIn(object2) {
        return object2 == null ? [] : baseValues(object2, keysIn(object2));
      }
      function clamp(number, lower2, upper) {
        if (upper === undefined$1) {
          upper = lower2;
          lower2 = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower2 !== undefined$1) {
          lower2 = toNumber(lower2);
          lower2 = lower2 === lower2 ? lower2 : 0;
        }
        return baseClamp(toNumber(number), lower2, upper);
      }
      function inRange(number, start2, end) {
        start2 = toFinite(start2);
        if (end === undefined$1) {
          end = start2;
          start2 = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start2, end);
      }
      function random(lower2, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower2, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower2 == "boolean") {
            floating = lower2;
            lower2 = undefined$1;
          }
        }
        if (lower2 === undefined$1 && upper === undefined$1) {
          lower2 = 0;
          upper = 1;
        } else {
          lower2 = toFinite(lower2);
          if (upper === undefined$1) {
            upper = lower2;
            lower2 = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower2 > upper) {
          var temp = lower2;
          lower2 = upper;
          upper = temp;
        }
        if (floating || lower2 % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower2 + rand * (upper - lower2 + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower2, upper);
      }
      var camelCase = createCompounder(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize2(word) : word);
      });
      function capitalize2(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position2) {
        string = toString(string);
        target = baseToString(target);
        var length = string.length;
        position2 = position2 === undefined$1 ? length : baseClamp(toInteger(position2), 0, length);
        var end = position2;
        position2 -= target.length;
        return position2 >= 0 && string.slice(position2, end) == target;
      }
      function escape2(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars2) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars2) + string + createPadding(nativeCeil(mid), chars2);
      }
      function padEnd(string, length, chars2) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars2) : string;
      }
      function padStart(string, length, chars2) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars2) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n, guard) {
        if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString(string), n);
      }
      function replace() {
        var args = arguments, string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position2) {
        string = toString(string);
        position2 = position2 == null ? 0 : baseClamp(toInteger(position2), 0, string.length);
        target = baseToString(target);
        return string.slice(position2, position2 + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined$1;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index = 0, interpolate2 = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate2.source + "|" + (interpolate2 === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars2, guard) {
        string = toString(string);
        if (string && (guard || chars2 === undefined$1)) {
          return baseTrim(string);
        }
        if (!string || !(chars2 = baseToString(chars2))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars2), start2 = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start2, end).join("");
      }
      function trimEnd(string, chars2, guard) {
        string = toString(string);
        if (string && (guard || chars2 === undefined$1)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars2 = baseToString(chars2))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars2)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars2, guard) {
        string = toString(string);
        if (string && (guard || chars2 === undefined$1)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars2 = baseToString(chars2))) {
          return string;
        }
        var strSymbols = stringToArray(string), start2 = charsStartIndex(strSymbols, stringToArray(chars2));
        return castSlice(strSymbols, start2).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString(options.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index = result2.lastIndexOf(separator);
          if (index > -1) {
            result2 = result2.slice(0, index);
          }
        }
        return result2 + omission;
      }
      function unescape(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e2) {
          return isError(e2) ? e2 : new Error2(e2);
        }
      });
      var bindAll = flatRest(function(object2, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object2, key, bind(object2[key], object2));
        });
        return object2;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index = -1;
          while (++index < length) {
            var pair = pairs[index];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant2(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity2(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path2, srcValue) {
        return baseMatchesProperty(path2, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path2, args) {
        return function(object2) {
          return baseInvoke(object2, path2, args);
        };
      });
      var methodOf = baseRest(function(object2, args) {
        return function(path2) {
          return baseInvoke(object2, path2, args);
        };
      });
      function mixin(object2, source, options) {
        var props = keys(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object2;
          object2 = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object2);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object2[methodName] = func;
          if (isFunc) {
            object2.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object2(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object2 });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object2, arrayPush([this.value()], arguments));
            };
          }
        });
        return object2;
      }
      function noConflict() {
        if (root2._ === this) {
          root2._ = oldDash;
        }
        return this;
      }
      function noop2() {
      }
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path2) {
        return isKey(path2) ? baseProperty(toKey(path2)) : basePropertyDeep(path2);
      }
      function propertyOf(object2) {
        return function(path2) {
          return object2 == null ? undefined$1 : baseGet(object2, path2);
        };
      }
      var range = createRange2();
      var rangeRight = createRange2(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee2) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index < n) {
          iteratee2(index);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id2 = ++idCounter;
        return toString(prefix) + id2;
      }
      var add2 = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array2) {
        return array2 && array2.length ? baseExtremum(array2, identity2, baseGt) : undefined$1;
      }
      function maxBy(array2, iteratee2) {
        return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array2) {
        return baseMean(array2, identity2);
      }
      function meanBy(array2, iteratee2) {
        return baseMean(array2, getIteratee(iteratee2, 2));
      }
      function min(array2) {
        return array2 && array2.length ? baseExtremum(array2, identity2, baseLt) : undefined$1;
      }
      function minBy(array2, iteratee2) {
        return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array2) {
        return array2 && array2.length ? baseSum(array2, identity2) : 0;
      }
      function sumBy(array2, iteratee2) {
        return array2 && array2.length ? baseSum(array2, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey2;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant2;
      lodash2.countBy = countBy;
      lodash2.create = create2;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer2;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter2;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys;
      lodash2.keysIn = keysIn;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove2;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set2;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice2;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform2;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add2;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize2;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep2;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq;
      lodash2.escape = escape2;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find2;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get2;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity2;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments;
      lodash2.isArray = isArray;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean;
      lodash2.isBuffer = isBuffer;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength2;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber;
      lodash2.isObject = isObject;
      lodash2.isObjectLike = isObjectLike;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString;
      lodash2.isSymbol = isSymbol;
      lodash2.isTypedArray = isTypedArray;
      lodash2.isUndefined = isUndefined;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop2;
      lodash2.now = now2;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
          var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin(n, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
        var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index) {
        var takeName = "take" + (index ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index) {
        var dropName = "drop" + (index ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity2);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path2, args) {
        if (typeof path2 == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path2, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start2, end) {
        start2 = toInteger(start2);
        var result2 = this;
        if (result2.__filtered__ && (start2 > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start2 < 0) {
          result2 = result2.takeRight(-start2);
        } else if (start2) {
          result2 = result2.drop(start2);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start2);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _23 = runInContext();
    if (freeModule) {
      (freeModule.exports = _23)._ = _23;
      freeExports._ = _23;
    } else {
      root2._ = _23;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
class Snapshot {
  constructor(length = 20) {
    this.length = length;
    this.snapshots = [];
    this.cursor = -1;
  }
  get hasPrev() {
    return this.cursor > 0;
  }
  get hasNext() {
    return this.snapshots.length > this.cursor + 1;
  }
  snap(data) {
    const snapshot2 = lodash.exports.cloneDeep(data);
    while (this.cursor < this.snapshots.length - 1) {
      this.snapshots.pop();
    }
    this.snapshots.push(snapshot2);
    if (this.snapshots.length > this.length) {
      this.snapshots.shift();
    }
    this.cursor = this.snapshots.length - 1;
  }
  prev() {
    if (this.hasPrev) {
      this.cursor -= 1;
      return lodash.exports.cloneDeep(this.snapshots[this.cursor]);
    }
    return null;
  }
  next() {
    if (this.hasNext) {
      this.cursor += 1;
      return lodash.exports.cloneDeep(this.snapshots[this.cursor]);
    }
    return null;
  }
}
const snapshot = new Snapshot();
const hasPrev = ref(false);
const hasNext = ref(false);
const updateTimeTravelState = () => {
  hasPrev.value = snapshot.hasPrev;
  hasNext.value = snapshot.hasNext;
};
const getAddPath = (stroke, side) => {
  const temp0 = -side / 2;
  const temp1 = -stroke / 2;
  const temp2 = stroke / 2;
  const temp3 = side / 2;
  return `M${temp3},${temp2}H${temp2}V${temp3}H${temp1}V${temp2}H${temp0}V${temp1}H${temp1}V${temp0}H${temp2}V${temp1}H${temp3}V${temp2}Z`;
};
const getMultiline = (str) => {
  const multiline = str.split("\n");
  if (multiline.length > 1 && multiline[multiline.length - 1] === "") {
    multiline.pop();
  }
  return multiline;
};
const convertToImg = (svgdiv, name) => {
  html2canvas(svgdiv).then((canvas) => {
    const dataUrl = canvas.toDataURL();
    const window2 = open();
    if (window2) {
      window2.document.write(`<img src='${dataUrl}'>`);
      window2.document.title = name;
      window2.document.close();
    }
  });
};
const makeTransition = (dura, easingFn) => {
  return transition().duration(dura).ease(easingFn);
};
const getRelativePos = (wrapper, e2) => {
  const { pageX, pageY } = e2;
  const wrapperPos = wrapper.getBoundingClientRect();
  const wrapperLeft = wrapperPos.left + window.pageXOffset;
  const wrapperTop = wrapperPos.top + window.pageYOffset;
  return {
    left: pageX - wrapperLeft,
    top: pageY - wrapperTop
  };
};
function getDragContainer() {
  var _a, _b;
  return (_b = (_a = this.parentNode) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.parentNode;
}
function selectGNode(d) {
  const ele = d instanceof SVGGElement ? d : document.querySelector(`g[data-id='${getDataId(d)}']`);
  const oldSele = document.getElementsByClassName(style.selected)[0];
  if (ele) {
    if (oldSele) {
      if (oldSele !== ele) {
        oldSele.classList.remove(style.selected);
        ele.classList.add(style.selected);
      } else {
        emitter.emit("edit-flag", true);
      }
    } else {
      ele.classList.add(style.selected);
    }
  } else {
    throw new Error("selectGNode failed");
  }
}
function getSelectedGData() {
  const sele = select(`.${style.selected}`);
  return sele.data()[0];
}
const getSize = (text2) => {
  const { asstSvg: asstSvg2 } = selection;
  if (!asstSvg2) {
    throw new Error("asstSvg undefined");
  }
  const multiline = getMultiline(text2);
  const t = asstSvg2.append("text");
  t.selectAll("tspan").data(multiline).enter().append("tspan").text((d) => d).attr("x", 0);
  const tBox = t.node().getBBox();
  t.remove();
  return {
    width: Math.max(tBox.width, 22),
    height: Math.max(tBox.height, 22) * multiline.length
  };
};
const moveNode = (node, d, p, dura = 0) => {
  const tran = makeTransition(dura, polyOut);
  d.px = p[0];
  d.py = p[1];
  select(node).transition(tran).attr("transform", getGTransform);
  select(`g[data-id='${getDataId(d)}'] > path`).transition(tran).attr("d", (d2) => getPath$1(d2));
};
const centerView = () => {
  const { svg: svg2 } = selection;
  if (!svg2) {
    return;
  }
  const data = mmdata.data;
  zoom.translateTo(svg2, 0 + data.width / 2, 0 + data.height / 2);
};
const fitView = () => {
  const { svg: svg2 } = selection;
  if (!svg2 || !gEle.value || !svgEle.value) {
    return;
  }
  const gBB = gEle.value.getBBox();
  const svgBCR = svgEle.value.getBoundingClientRect();
  const multiple = Math.min(svgBCR.width / gBB.width, svgBCR.height / gBB.height);
  const svgCenter = { x: svgBCR.width / 2, y: svgBCR.height / 2 };
  const gCenter = { x: gBB.width * multiple / 2, y: gBB.height * multiple / 2 };
  const center = identity.translate(-gBB.x * multiple + svgCenter.x - gCenter.x, -gBB.y * multiple + svgCenter.y - gCenter.y).scale(multiple);
  zoom.transform(svg2, center);
};
const moveView = (ele) => {
  const { svg: svg2 } = selection;
  if (svg2 && svgEle.value) {
    const { k } = zoomTransform.value;
    const gBCR = ele.getBoundingClientRect();
    const { x: x2, y: y2, width, height } = svgEle.value.getBoundingClientRect();
    const gLeft = gBCR.x - x2;
    const gRight = gLeft + gBCR.width;
    const gTop = gBCR.y - y2;
    const gBottom = gTop + gBCR.height;
    const space = 2;
    let x1 = 0;
    let y1 = 0;
    if (gLeft < 0) {
      x1 = -gLeft / k + space;
    }
    if (gBCR.width > width || gRight > width) {
      x1 = -(gRight - width) / k - space;
    }
    if (gTop < 0) {
      y1 = -gTop / k + space;
    }
    if (gBCR.height > height || gBottom > height) {
      y1 = -(gBottom - height) / k - space;
    }
    zoom.translateBy(svg2, x1, y1);
  }
};
const scaleView = (flag) => {
  const { svg: svg2 } = selection;
  if (!svg2) {
    return;
  }
  zoom.scaleBy(svg2, flag ? 1.1 : 0.9);
};
const download = () => {
  if (!wrapperEle.value) {
    return;
  }
  convertToImg(wrapperEle.value, mmdata.data.name);
};
const next = () => {
  const nextData = snapshot.next();
  if (nextData) {
    mmdata.data = nextData;
    afterOperation(false);
  }
};
const prev = () => {
  const prevData = snapshot.prev();
  if (prevData) {
    mmdata.data = prevData;
    afterOperation(false);
  }
};
const bindForeignDiv = () => {
  if (foreignDivEle.value) {
    observer.observe(foreignDivEle.value);
    foreignDivEle.value.addEventListener("blur", onEditBlur);
    foreignDivEle.value.addEventListener("mousedown", (e2) => e2.stopPropagation());
  }
};
const isData = (str) => {
  let data;
  try {
    data = JSON.parse(str);
    return "name" in data ? data : false;
  } catch (error2) {
    return false;
  }
};
const getYOffset = () => 3;
const getSiblingGClass = (d) => {
  const arr = ["node"];
  if (d) {
    arr.push(`depth-${d.depth}`);
  }
  return arr;
};
const getGClass = (d) => {
  const arr = getSiblingGClass(d);
  if (d) {
    if (d.depth === 0) {
      arr.push(style.root);
    }
    if (d.collapse) {
      arr.push(style["collapse"]);
    } else if (!d.children || d.children.length === 0) {
      arr.push("leaf");
    }
  }
  return arr;
};
const getAddBtnClass = (d) => {
  const arr = [style["add-btn"]];
  if (d.collapse) {
    arr.push(style["hidden"]);
  }
  return arr;
};
const getGTransform = (d) => {
  return `translate(${d.dx + d.px},${d.dy + d.py})`;
};
const getDataId = (d) => {
  return d.id;
};
const getTspanData = (d) => {
  const multiline = getMultiline(d.name);
  const height = d.height / multiline.length;
  return multiline.map((name) => ({ name, height }));
};
const getPath$1 = (d) => {
  let dpw = 0;
  let dph = 0;
  const trp = Math.max(textRectPadding - 3, 0);
  let w = d.width + trp;
  const targetOffset = getYOffset();
  let sourceOffset = targetOffset;
  const { parent } = d;
  if (parent) {
    dpw = parent.width;
    dph = parent.height;
    if (parent.depth === 0) {
      if (!sharpCorner) {
        dpw /= 2;
      }
      dph /= 2;
      sourceOffset = 0;
    }
  }
  if (d.left) {
    if (parent) {
      if (parent.depth !== 0) {
        dpw = -dpw;
      } else if (sharpCorner) {
        dpw = 0;
      }
    }
    w = -w;
  }
  const source = [-d.dx + dpw - d.px, -d.dy + dph + sourceOffset - d.py];
  const target = [0, d.height + targetOffset];
  return `${link({ source, target })}L${w},${target[1]}`;
};
const getAddBtnTransform = (d, trp) => {
  const y2 = d.depth === 0 ? d.height / 2 : d.height + getYOffset();
  let x2 = d.width + trp + addBtnSide / 2 + addBtnRect.margin;
  if (d.left) {
    x2 = -x2;
  }
  return `translate(${x2},${y2})`;
};
const getExpandBtnTransform = (d, trp) => {
  const gap = 4;
  const y2 = d.depth === 0 ? d.height / 2 : d.height + getYOffset();
  let x2 = d.width + trp + expandBtnRect.width / 2 + gap;
  if (d.left) {
    x2 = -x2;
  }
  return `translate(${x2},${y2})`;
};
const attrA = (isRoot, gTrigger, gTextRect, gExpandBtn, gAddBtn) => {
  if (isRoot) {
    attrTrigger(gTrigger, rootTextRectPadding);
    attrTextRect(gTextRect, rootTextRectPadding, rootTextRectRadius);
    attrExpandBtn(gExpandBtn, rootTextRectPadding);
    if (gAddBtn) {
      attrAddBtn(gAddBtn, rootTextRectPadding);
    }
  } else {
    attrTrigger(gTrigger, textRectPadding);
    attrTextRect(gTextRect, textRectPadding);
    attrExpandBtn(gExpandBtn, textRectPadding);
    if (gAddBtn) {
      attrAddBtn(gAddBtn, textRectPadding);
    }
  }
};
const attrG = (g2, tran) => {
  const g1 = g2.attr("class", (d) => getGClass(d).join(" ")).attr("data-id", getDataId);
  const g22 = tran ? g1.transition(tran) : g1;
  g22.attr("transform", getGTransform);
};
const attrText = (text2, tran) => {
  const t1 = tran ? text2.transition(tran) : text2;
  t1.attr("transform", (d) => `translate(${d.left ? -d.width : 0},0)`);
};
const attrTspan = (tspan) => {
  tspan.attr("alignment-baseline", "text-before-edge").text((d) => d.name || " ").attr("x", 0).attr("dy", (d, i) => i ? d.height : 0);
};
const attrAddBtnRect = (rect) => {
  const { side, padding } = addBtnRect;
  const radius = 4;
  const temp0 = -padding - side / 2;
  const temp1 = side + padding * 2;
  rect.attr("x", temp0).attr("y", temp0).attr("rx", radius).attr("ry", radius).attr("width", temp1).attr("height", temp1);
};
const attrExpandBtnRect = (rect) => {
  rect.attr("x", -expandBtnRect.width / 2).attr("y", -expandBtnRect.height / 2).attr("width", expandBtnRect.width).attr("height", expandBtnRect.height).attr("rx", expandBtnRect.radius).attr("ry", expandBtnRect.radius).attr("stroke", (d) => d.color || "grey").attr("fill", (d) => d.color || "grey");
};
const attrExpandBtnCircle = (circle, cx) => {
  circle.attr("cx", cx).attr("cy", 0).attr("r", 1);
};
const attrTextRect = (rect, padding, radius = 4) => {
  rect.attr("x", (d) => -padding - (d.left ? d.width : 0)).attr("y", -padding).attr("rx", radius).attr("ry", radius).attr("width", (d) => d.width + padding * 2).attr("height", (d) => d.height + padding * 2);
};
const attrExpandBtn = (g2, trp) => {
  g2.attr("class", style["expand-btn"]).attr("transform", (d) => getExpandBtnTransform(d, trp)).style("color", (d) => d.color);
};
const attrAddBtn = (g2, trp) => {
  g2.attr("class", (d) => getAddBtnClass(d).join(" ")).attr("transform", (d) => getAddBtnTransform(d, trp));
};
const attrTrigger = (rect, padding) => {
  const w = addBtnSide + addBtnRect.margin;
  const p = padding * 2;
  rect.attr("class", style.trigger).attr("x", (d) => -padding - (d.left ? d.width + w : 0)).attr("y", -padding).attr("width", (d) => d.width + p + w).attr("height", (d) => d.height + p);
};
const attrPath = (p, tran) => {
  const p1 = p.attr("stroke", (d) => d.color).attr("stroke-width", branch);
  if (tran) {
    const p2 = p1.transition(tran);
    if (changeSharpCorner.value) {
      p2.attrTween("d", pathTween);
    } else {
      p2.attr("d", getPath$1);
    }
  } else {
    p1.attr("d", getPath$1);
  }
};
function pathTween(data, index, paths) {
  const precision = 10;
  const d = getPath$1(data);
  const path0 = paths[index];
  const path1 = path0.cloneNode();
  const n0 = path0.getTotalLength();
  path1.setAttribute("d", d);
  const n1 = path1.getTotalLength();
  const distances = [0];
  const dt = precision / Math.max(n0, n1);
  let i = 0;
  while ((i += dt) < 1)
    distances.push(i);
  distances.push(1);
  const points = distances.map((t) => {
    const p0 = path0.getPointAtLength(t * n0);
    const p1 = path1.getPointAtLength(t * n1);
    return interpolate$1([p0.x, p0.y], [p1.x, p1.y]);
  });
  return (t) => {
    return t < 1 ? "M" + points.map((p) => p(t)).join("L") : d;
  };
}
const appendTspan = (enter) => {
  const tspan = enter.append("tspan");
  attrTspan(tspan);
  return tspan;
};
const updateTspan = (update) => {
  attrTspan(update);
  return update;
};
const appendAddBtn = (g2) => {
  const gAddBtn = g2.append("g");
  attrAddBtnRect(gAddBtn.append("rect"));
  gAddBtn.append("path").attr("d", getAddPath(2, addBtnRect.side));
  return gAddBtn;
};
const appendAndBindAddBtn = (g2) => {
  const gAddBtn = appendAddBtn(g2);
  gAddBtn.on("click", addAndEdit);
  return gAddBtn;
};
const appendExpandBtn = (g2) => {
  const expandBtn = g2.append("g");
  attrExpandBtnRect(expandBtn.append("rect"));
  attrExpandBtnCircle(expandBtn.append("circle"), -4);
  attrExpandBtnCircle(expandBtn.append("circle"), 0);
  attrExpandBtnCircle(expandBtn.append("circle"), 4);
  return expandBtn;
};
const bindEvent = (g2, isRoot) => {
  const gExpandBtn = g2.select(`:scope > g.${style.content} > g.${style["expand-btn"]}`);
  gExpandBtn.on("click", onClickExpandBtn);
  if (mmprops.value.drag || mmprops.value.edit) {
    const gText = g2.select(`:scope > g.${style.content} > g.${style.text}`);
    gText.on("mousedown", onSelect);
    if (mmprops.value.drag && !isRoot) {
      drag(gText);
    }
    if (mmprops.value.edit) {
      gText.on("click", onEdit);
    }
  }
  if (addNodeBtn.value) {
    g2.select(`:scope > g.${style.content}`).on("mouseenter", onMouseEnter).on("mouseleave", onMouseLeave);
  }
};
const appendNode = (enter) => {
  var _a;
  const isRoot = !((_a = enter.data()[0]) == null ? void 0 : _a.depth);
  const enterG = enter.append("g");
  attrG(enterG);
  attrPath(enterG.append("path"));
  const gContent = enterG.append("g").attr("class", style.content);
  const gTrigger = gContent.append("rect");
  const gText = gContent.append("g").attr("class", style.text);
  const gTextRect = gText.append("rect");
  const text2 = gText.append("text");
  attrText(text2);
  const tspan = text2.selectAll("tspan").data(getTspanData).enter().append("tspan");
  attrTspan(tspan);
  let gAddBtn;
  if (addNodeBtn.value) {
    gAddBtn = appendAndBindAddBtn(gContent);
  }
  const gExpandBtn = appendExpandBtn(gContent);
  attrA(isRoot, gTrigger, gTextRect, gExpandBtn, gAddBtn);
  bindEvent(enterG, isRoot);
  enterG.each((d, i) => {
    if (!d.children) {
      return;
    }
    draw(d.children, enterG.filter((a2, b) => i === b));
  });
  gContent.raise();
  return enterG;
};
const updateNode = (update) => {
  var _a;
  const isRoot = !((_a = update.data()[0]) == null ? void 0 : _a.depth);
  const tran = makeTransition(500, polyOut);
  attrG(update, tran);
  attrPath(update.select(":scope > path"), tran);
  const gContent = update.select(`:scope > g.${style.content}`);
  const gTrigger = gContent.select(":scope > rect");
  const gText = gContent.select(`g.${style.text}`);
  const gTextRect = gText.select("rect");
  const text2 = gText.select("text");
  attrText(text2, tran);
  text2.selectAll("tspan").data(getTspanData).join(appendTspan, updateTspan, (exit) => exit.remove());
  let gAddBtn = gContent.select(`g.${style["add-btn"]}`);
  const gExpandBtn = gContent.select(`g.${style["expand-btn"]}`);
  if (addNodeBtn.value) {
    if (!gAddBtn.node()) {
      gAddBtn = appendAndBindAddBtn(gContent);
    }
  } else {
    gAddBtn.remove();
  }
  attrA(isRoot, gTrigger, gTextRect, gExpandBtn, gAddBtn);
  update.each((d, i) => {
    if (!d.children) {
      return;
    }
    draw(d.children, update.filter((a2, b) => i === b));
  });
  gContent.raise();
  return update;
};
const draw = (d = [mmdata.data], sele = g) => {
  const temp = sele.selectAll(`g.${getSiblingGClass(d[0]).join(".")}`);
  temp.data(d, (d2) => d2.gKey).join(appendNode, updateNode);
};
function colors(specifier) {
  var n = specifier.length / 6 | 0, colors2 = new Array(n), i = 0;
  while (i < n)
    colors2[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors2;
}
var Paired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}
const implicit = Symbol("implicit");
function ordinal() {
  var index = /* @__PURE__ */ new Map(), domain = [], range = [], unknown = implicit;
  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit)
        return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }
  scale.domain = function(_23) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index = /* @__PURE__ */ new Map();
    for (const value of _23) {
      const key = value + "";
      if (index.has(key))
        continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };
  scale.range = function(_23) {
    return arguments.length ? (range = Array.from(_23), scale) : range.slice();
  };
  scale.unknown = function(_23) {
    return arguments.length ? (unknown = _23, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}
class Tree {
  constructor(width, height, y2, children2) {
    this.w = width;
    this.h = height;
    this.y = y2;
    this.c = children2;
    this.cs = children2.length;
    this.x = 0;
    this.prelim = 0;
    this.mod = 0;
    this.shift = 0;
    this.change = 0;
    this.tl = null;
    this.tr = null;
    this.el = null;
    this.er = null;
    this.msel = 0;
    this.mser = 0;
  }
}
function setExtremes(tree) {
  if (tree.cs === 0) {
    tree.el = tree;
    tree.er = tree;
    tree.msel = tree.mser = 0;
  } else {
    tree.el = tree.c[0].el;
    tree.msel = tree.c[0].msel;
    tree.er = tree.c[tree.cs - 1].er;
    tree.mser = tree.c[tree.cs - 1].mser;
  }
}
function bottom(tree) {
  return tree.y + tree.h;
}
class IYL {
  constructor(lowY, index, next2) {
    this.lowY = lowY;
    this.index = index;
    this.next = next2;
  }
}
function updateIYL(minY, i, ih) {
  while (ih !== null && minY >= ih.lowY) {
    ih = ih.next;
  }
  return new IYL(minY, i, ih);
}
function distributeExtra(tree, i, si, distance2) {
  if (si !== i - 1) {
    const nr = i - si;
    tree.c[si + 1].shift += distance2 / nr;
    tree.c[i].shift -= distance2 / nr;
    tree.c[i].change -= distance2 - distance2 / nr;
  }
}
function moveSubtree(tree, i, si, distance2) {
  tree.c[i].mod += distance2;
  tree.c[i].msel += distance2;
  tree.c[i].mser += distance2;
  distributeExtra(tree, i, si, distance2);
}
function nextLeftContour(tree) {
  return tree.cs === 0 ? tree.tl : tree.c[0];
}
function nextRightContour(tree) {
  return tree.cs === 0 ? tree.tr : tree.c[tree.cs - 1];
}
function setLeftThread(tree, i, cl, modsumcl) {
  const li = tree.c[0].el;
  li.tl = cl;
  const diff = modsumcl - cl.mod - tree.c[0].msel;
  li.mod += diff;
  li.prelim -= diff;
  tree.c[0].el = tree.c[i].el;
  tree.c[0].msel = tree.c[i].msel;
}
function setRightThread(tree, i, sr, modsumsr) {
  const ri = tree.c[i].er;
  ri.tr = sr;
  const diff = modsumsr - sr.mod - tree.c[i].mser;
  ri.mod += diff;
  ri.prelim -= diff;
  tree.c[i].er = tree.c[i - 1].er;
  tree.c[i].mser = tree.c[i - 1].mser;
}
function seperate(tree, i, ih) {
  let sr = tree.c[i - 1];
  let mssr = sr.mod;
  let cl = tree.c[i];
  let mscl = cl.mod;
  while (sr !== null && cl !== null) {
    if (bottom(sr) > ih.lowY) {
      ih = ih.next;
    }
    const distance2 = mssr + sr.prelim + sr.w - (mscl + cl.prelim);
    if (distance2 > 0) {
      mscl += distance2;
      moveSubtree(tree, i, ih.index, distance2);
    }
    const sy = bottom(sr);
    const cy = bottom(cl);
    if (sy <= cy) {
      sr = nextRightContour(sr);
      if (sr !== null) {
        mssr += sr.mod;
      }
    }
    if (sy >= cy) {
      cl = nextLeftContour(cl);
      if (cl !== null) {
        mscl += cl.mod;
      }
    }
  }
  if (sr === null && cl !== null) {
    setLeftThread(tree, i, cl, mscl);
  } else if (sr !== null && cl === null) {
    setRightThread(tree, i, sr, mssr);
  }
}
function positionRoot(tree) {
  tree.prelim = (tree.c[0].prelim + tree.c[0].mod + tree.c[tree.cs - 1].mod + tree.c[tree.cs - 1].prelim + tree.c[tree.cs - 1].w) / 2 - tree.w / 2;
}
function firstWalk(tree) {
  if (tree.cs === 0) {
    setExtremes(tree);
    return;
  }
  firstWalk(tree.c[0]);
  let ih = updateIYL(bottom(tree.c[0].el), 0, null);
  for (let i = 1; i < tree.cs; i++) {
    firstWalk(tree.c[i]);
    const minY = bottom(tree.c[i].er);
    seperate(tree, i, ih);
    ih = updateIYL(minY, i, ih);
  }
  positionRoot(tree);
  setExtremes(tree);
}
function addChildSpacing(tree) {
  let d = 0;
  let modsumdelta = 0;
  for (let i = 0; i < tree.cs; i++) {
    d += tree.c[i].shift;
    modsumdelta += d + tree.c[i].change;
    tree.c[i].mod += modsumdelta;
  }
}
function secondWalk(tree, modsum) {
  modsum += tree.mod;
  tree.x = tree.prelim + modsum;
  addChildSpacing(tree);
  for (let i = 0; i < tree.cs; i++) {
    secondWalk(tree.c[i], modsum);
  }
}
function layout(tree) {
  firstWalk(tree);
  secondWalk(tree, 0);
}
class BoundingBox {
  constructor(gap, bottomPadding) {
    this.gap = gap;
    this.bottomPadding = bottomPadding;
  }
  addBoundingBox(width, height) {
    return { width: width + this.gap, height: height + this.bottomPadding };
  }
  removeBoundingBox(x2, y2) {
    return { x: x2 + this.gap / 2, y: y2 };
  }
}
class Layout {
  constructor(boundingBox) {
    this.bb = boundingBox;
  }
  layout(treeData) {
    const tree = this.convert(treeData);
    layout(tree);
    const { boundingBox, result } = this.assignLayout(tree, treeData);
    return { result, boundingBox };
  }
  convert(treeData, y2 = 0) {
    const { width, height } = this.bb.addBoundingBox(treeData.width, treeData.height);
    const children2 = [];
    if (treeData.children && treeData.children.length) {
      for (let i = 0; i < treeData.children.length; i++) {
        children2[i] = this.convert(treeData.children[i], y2 + height);
      }
    }
    return new Tree(width, height, y2, children2);
  }
  assignCoordinates(tree, treeData) {
    const { x: x2, y: y2 } = this.bb.removeBoundingBox(tree.x, tree.y);
    treeData.x = x2;
    treeData.y = y2;
    for (let i = 0; i < tree.c.length; i++) {
      this.assignCoordinates(tree.c[i], treeData.children[i]);
    }
  }
  getSize(treeData, box) {
    const { x: x2, y: y2, width, height } = treeData;
    if (!box) {
      box = { left: x2, right: x2 + width, top: y2, bottom: y2 + height };
    }
    box.left = Math.min(box.left, x2);
    box.right = Math.max(box.right, x2 + width);
    box.top = Math.min(box.top, y2);
    box.bottom = Math.max(box.bottom, y2 + height);
    if (treeData.children) {
      for (const child of treeData.children) {
        this.getSize(child, box);
      }
    }
    return box;
  }
  assignLayout(tree, treeData, box) {
    const { x: x2, y: y2 } = this.bb.removeBoundingBox(tree.x, tree.y);
    treeData.x = x2;
    treeData.y = y2;
    const { width, height } = treeData;
    if (!box) {
      box = { left: x2, right: x2 + width, top: y2, bottom: y2 + height };
    }
    box.left = Math.min(box.left, x2);
    box.right = Math.max(box.right, x2 + width);
    box.top = Math.min(box.top, y2);
    box.bottom = Math.max(box.bottom, y2 + height);
    for (let i = 0; i < tree.c.length; i++) {
      this.assignLayout(tree.c[i], treeData.children[i], box);
    }
    return { result: treeData, boundingBox: box };
  }
}
const swapWidthAndHeight = (d) => [d.width, d.height] = [d.height, d.width];
const renewDelta = (d) => {
  if (d.parent) {
    d.dx = d.x - d.parent.x;
    d.dy = d.y - d.parent.y;
  } else {
    d.dx = 0;
    d.dy = 0;
  }
};
const renewId = (d, id2) => d.id = id2;
const renewDepth = (d) => {
  if (d.parent) {
    d.depth = d.parent.depth + 1;
  } else {
    d.depth = 0;
  }
};
const renewColor = (d) => {
  if (d.parent && d.parent.color) {
    d.color = d.parent.color;
  }
};
const renewLeft = (d) => {
  if (d.depth > 1 && d.parent) {
    d.left = d.parent.left;
  }
};
const separateLeftAndRight = (d) => {
  const ld = Object.assign({}, d);
  const rd = Object.assign({}, d);
  if (d.collapse)
    ;
  else {
    const { children: children2 } = d;
    ld.children = [];
    rd.children = [];
    children2.forEach((child) => {
      if (child.left) {
        ld.children.push(child);
      } else {
        rd.children.push(child);
      }
      if (child.parent) {
        child.parent = rd;
      }
    });
  }
  return { left: ld, right: rd };
};
const traverse = (d, processers, id2 = "0") => {
  var _a;
  processers.forEach((p) => {
    p(d, id2);
  });
  const { children: children2 } = d;
  if (children2) {
    for (let index = 0; index < children2.length; ) {
      const child = children2[index];
      if (child.id === "del") {
        children2.splice(index, 1);
        (_a = d.rawData.children) == null ? void 0 : _a.splice(index, 1);
      } else {
        traverse(child, processers, `${id2}-${index}`);
        index += 1;
      }
    }
  }
};
const getLayout = (xGap2, yGap2) => {
  const bb = new BoundingBox(yGap2, xGap2);
  return new Layout(bb);
};
class ImData {
  constructor(d, xGap2, yGap2, getSize2, colorScale = ordinal(Paired)) {
    this.colorNumber = 0;
    this.gKey = 0;
    this.rootWidth = 0;
    this.diffY = 0;
    this.colorScale = colorScale;
    this.getSize = getSize2;
    this.layout = getLayout(xGap2, yGap2);
    this.data = this.createMdataFromData(d, "0");
    this.renew();
  }
  createMdataFromData(rawData, id2, parent = null) {
    const { name, collapse: collapse2, children: rawChildren } = rawData;
    const { width, height } = this.getSize(name);
    const depth = parent ? parent.depth + 1 : 0;
    let left = false;
    let color2 = parent ? parent.color : "";
    if (depth === 1) {
      left = !!rawData.left;
      color2 = this.colorScale(`${this.colorNumber += 1}`);
    } else if (depth !== 0 && parent) {
      left = parent.left;
    }
    const data = {
      id: id2,
      name,
      rawData,
      parent,
      left,
      color: color2,
      depth,
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      px: 0,
      py: 0,
      width,
      height,
      children: [],
      _children: [],
      collapse: !!collapse2,
      gKey: this.gKey += 1
    };
    if (rawChildren) {
      if (!data.collapse) {
        rawChildren.forEach((c, j) => {
          data.children.push(this.createMdataFromData(c, `${id2}-${j}`, data));
        });
      } else {
        rawChildren.forEach((c, j) => {
          data._children.push(this.createMdataFromData(c, `${id2}-${j}`, data));
        });
      }
    }
    return data;
  }
  renew(...plugins) {
    traverse(this.data, [swapWidthAndHeight, renewDepth, renewLeft]);
    this.data = this.l(this.data);
    const temp = [swapWidthAndHeight, this.renewXY.bind(this), renewDelta];
    traverse(this.data, temp.concat(plugins));
  }
  l(data) {
    const { left, right } = separateLeftAndRight(data);
    this.layout.layout(left);
    this.layout.layout(right);
    this.diffY = right.x - left.x;
    this.rootWidth = left.height;
    right.children = data.children;
    return right;
  }
  renewXY(d) {
    [d.x, d.y] = [d.y, d.x];
    if (d.left) {
      d.x = -d.x + this.rootWidth;
      d.y += this.diffY;
    }
  }
  getRootWidth() {
    return this.rootWidth;
  }
  setBoundingBox(xGap2, yGap2) {
    this.layout = getLayout(xGap2, yGap2);
    this.renew();
  }
  find(id2) {
    const array2 = id2.split("-").map((n) => ~~n);
    let data = this.data;
    for (let i = 1; i < array2.length; i++) {
      const index = array2[i];
      const { children: children2 } = data;
      if (index < children2.length) {
        data = children2[index];
      } else {
        return null;
      }
    }
    return data.id === id2 ? data : null;
  }
  rename(id2, name) {
    if (id2.length > 0) {
      const d = this.find(id2);
      if (d && d.name !== name) {
        d.name = name;
        d.rawData.name = name;
        const size = this.getSize(d.name);
        d.width = size.width;
        d.height = size.height;
        this.renew();
      }
      return d;
    } else {
      return null;
    }
  }
  moveChild(parentId, delId) {
    var _a, _b;
    if (parentId === delId) {
      return null;
    }
    const np = this.find(parentId);
    const del2 = this.find(delId);
    const delIndex = delId.split("-").pop();
    if (delIndex && np && del2) {
      const delParent = del2.parent;
      (_a = delParent == null ? void 0 : delParent.children) == null ? void 0 : _a.splice(~~delIndex, 1);
      (_b = delParent == null ? void 0 : delParent.rawData.children) == null ? void 0 : _b.splice(~~delIndex, 1);
      del2.parent = np;
      del2.gKey = this.gKey += 1;
      del2.depth = del2.parent.depth + 1;
      if (del2.depth === 1) {
        del2.color = this.colorScale(`${this.colorNumber += 1}`);
      } else {
        del2.left = del2.parent.left;
      }
      if (np.collapse) {
        np._children.push(del2);
      } else {
        np.children.push(del2);
      }
      np.rawData.children ? np.rawData.children.push(del2.rawData) : np.rawData.children = [del2.rawData];
      this.renew(renewId, renewColor);
    }
    return del2;
  }
  moveSibling(id2, referenceId, after = 0) {
    const idArr = id2.split("-");
    const refArr = referenceId.split("-");
    let index = idArr.pop();
    let refIndex = refArr.pop();
    if (id2 === referenceId || idArr.length !== refArr.length || !index || !refIndex) {
      return null;
    }
    const d = this.find(id2);
    const r = this.find(referenceId);
    if (r && d && d.parent) {
      index = parseInt(index, 10);
      refIndex = parseInt(refIndex, 10);
      if (index < refIndex) {
        refIndex -= 1;
      }
      const { children: children2 } = d.parent;
      const { children: rawChildren } = d.parent.rawData;
      if (children2 && rawChildren) {
        children2.splice(index, 1);
        children2.splice(refIndex + after, 0, d);
        rawChildren.splice(index, 1);
        rawChildren.splice(refIndex + after, 0, d.rawData);
        if (d.depth === 1) {
          d.left = r.left;
        }
        this.renew(renewId);
        return d;
      }
    }
    return null;
  }
  add(id2, variable) {
    const p = this.find(id2);
    if (p) {
      if (p.collapse) {
        this.expand(id2);
      }
      if (!p.rawData.children) {
        p.rawData.children = [];
      }
      if (typeof variable === "string") {
        const name = variable;
        const size = this.getSize(name);
        const rawData = { name };
        const color2 = p.color ? p.color : this.colorScale(`${this.colorNumber += 1}`);
        const d = {
          id: `${p.id}-${p.children.length}`,
          name,
          rawData,
          parent: p,
          left: p.left,
          collapse: false,
          color: color2,
          gKey: this.gKey += 1,
          width: size.width,
          height: size.height,
          depth: p.depth + 1,
          x: 0,
          y: 0,
          dx: 0,
          dy: 0,
          px: 0,
          py: 0,
          children: [],
          _children: []
        };
        p.children.push(d);
        p.rawData.children.push(rawData);
        this.renew();
        return d;
      } else {
        const rawData = variable;
        const m = this.createMdataFromData(rawData, `${p.id}-${p.children.length}`, p);
        p.children.push(m);
        p.rawData.children.push(rawData);
        this.renew();
        return m;
      }
    }
    return null;
  }
  expand(id2) {
    return this.eoc(id2, false, [renewColor, renewId]);
  }
  collapse(id2) {
    return this.eoc(id2, true);
  }
  eoc(id2, collapse2, plugins = []) {
    const d = this.find(id2);
    if (d) {
      d.collapse = collapse2;
      d.rawData.collapse = collapse2;
      [d._children, d.children] = [d.children, d._children];
      this.renew(...plugins);
    }
    return d;
  }
  delete(id2) {
    const del2 = this.find(id2);
    if (del2 && del2.parent) {
      del2.id = "del";
      this.renew(renewId);
    } else {
      throw new Error(del2 ? "\u6682\u4E0D\u652F\u6301\u5220\u9664\u6839\u8282\u70B9" : "\u672A\u627E\u5230\u9700\u8981\u5220\u9664\u7684\u8282\u70B9");
    }
  }
  deleteOne(id2) {
    var _a;
    const del2 = this.find(id2);
    if (del2 && del2.parent) {
      const { parent, children: children2, _children, collapse: collapse2, rawData } = del2;
      const index = parseInt(id2.split("-").pop(), 10);
      parent.children.splice(index, 1, ...collapse2 ? _children : children2);
      (_a = parent.rawData.children) == null ? void 0 : _a.splice(index, 1, ...rawData.children || []);
      children2.forEach((c) => {
        c.parent = parent;
        if (c.depth === 1) {
          c.rawData.left = c.left;
        }
      });
      this.renew(renewId);
    }
  }
  addSibling(id2, name, before = false) {
    var _a;
    const d = this.find(id2);
    if (d && d.parent) {
      const index = parseInt(id2.split("-").pop(), 10);
      const { parent, left } = d;
      const rawSibling = { name, left };
      const size = this.getSize(name);
      const start2 = before ? index : index + 1;
      const color2 = parent.color ? parent.color : this.colorScale(`${this.colorNumber += 1}`);
      const sibling = {
        name,
        parent,
        children: [],
        _children: [],
        color: color2,
        collapse: false,
        rawData: rawSibling,
        id: `${parent.id}-${start2}`,
        left,
        gKey: this.gKey += 1,
        depth: d.depth,
        width: size.width,
        height: size.height,
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        px: 0,
        py: 0
      };
      parent.children.splice(start2, 0, sibling);
      (_a = parent.rawData.children) == null ? void 0 : _a.splice(start2, 0, rawSibling);
      this.renew(renewId);
      return sibling;
    }
    return null;
  }
  addParent(id2, name) {
    var _a;
    const d = this.find(id2);
    if (d && d.parent) {
      const { parent: oldP, left, color: color2 } = d;
      const size = this.getSize(name);
      const index = parseInt(d.id.split("-").pop(), 10);
      const rawP = { name, children: [d.rawData], left };
      (_a = oldP.rawData.children) == null ? void 0 : _a.splice(index, 1, rawP);
      const p = {
        rawData: rawP,
        left,
        name,
        color: color2,
        collapse: false,
        parent: oldP,
        id: d.id,
        depth: d.depth,
        width: size.width,
        height: size.height,
        gKey: this.gKey += 1,
        children: [d],
        _children: [],
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        px: 0,
        py: 0
      };
      d.parent = p;
      oldP.children.splice(index, 1, p);
      this.renew(renewId);
      return p;
    }
    return null;
  }
  changeLeft(id2) {
    const d = this.find(id2);
    if (d) {
      d.left = !d.left;
      this.renew();
    }
    return d;
  }
}
let mmdata;
emitter.on("mmdata", (val) => val ? mmdata = val : null);
const afterOperation = (snap = true) => {
  if (snap) {
    snapshot.snap(mmdata.data);
  }
  mmcontext.emit("update:modelValue", cloneDeep([mmdata.data.rawData]));
  updateTimeTravelState();
  draw();
};
const rename = (id2, name) => {
  mmdata.rename(id2, name);
  afterOperation();
};
const moveChild = (pid, id2) => {
  mmdata.moveChild(pid, id2);
  afterOperation();
};
const moveSibling = (id2, referenceId, after = 0) => {
  mmdata.moveSibling(id2, referenceId, after);
  afterOperation();
};
const add = (id2, name) => {
  var _a;
  const d = mmdata.add(id2, name);
  afterOperation();
  console.log(d);
  emitter.emit("newNode", (_a = d == null ? void 0 : d.id) != null ? _a : d);
  return d;
};
const del = (id2) => {
  mmdata.delete(id2);
  afterOperation();
};
const delOne = (id2) => {
  mmdata.deleteOne(id2);
  afterOperation();
};
const expand = (id2) => {
  mmdata.expand(id2);
  afterOperation();
};
const collapse = (id2) => {
  mmdata.collapse(id2);
  afterOperation();
};
const addSibling = (id2, name, before = false) => {
  const d = mmdata.addSibling(id2, name, before);
  afterOperation();
  return d;
};
const addParent = (id2, name) => {
  const d = mmdata.addParent(id2, name);
  afterOperation();
  return d;
};
const changeLeft = (id2) => {
  mmdata.changeLeft(id2);
  afterOperation();
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck(instance2, Constructor) {
  if (!(instance2 instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function ownKeys(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var consoleLogger = {
  type: "logger",
  log: function log(args) {
    this.output("log", args);
  },
  warn: function warn(args) {
    this.output("warn", args);
  },
  error: function error(args) {
    this.output("error", args);
  },
  output: function output(type, args) {
    if (console && console[type])
      console[type].apply(console, args);
  }
};
var Logger = function() {
  function Logger2(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Logger2);
    this.init(concreteLogger, options);
  }
  _createClass(Logger2, [{
    key: "init",
    value: function init2(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = options.prefix || "i18next:";
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.forward(args, "log", "", true);
    }
  }, {
    key: "warn",
    value: function warn2() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this.forward(args, "warn", "", true);
    }
  }, {
    key: "error",
    value: function error2() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return this.forward(args, "error", "");
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug)
        return null;
      if (typeof args[0] === "string")
        args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create2(moduleName) {
      return new Logger2(this.logger, _objectSpread(_objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }), this.options));
    }
  }]);
  return Logger2;
}();
var baseLogger = new Logger();
var EventEmitter = function() {
  function EventEmitter2() {
    _classCallCheck(this, EventEmitter2);
    this.observers = {};
  }
  _createClass(EventEmitter2, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;
      events.split(" ").forEach(function(event) {
        _this.observers[event] = _this.observers[event] || [];
        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event])
        return;
      if (!listener) {
        delete this.observers[event];
        return;
      }
      this.observers[event] = this.observers[event].filter(function(l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function(observer2) {
          observer2.apply(void 0, args);
        });
      }
      if (this.observers["*"]) {
        var _cloned = [].concat(this.observers["*"]);
        _cloned.forEach(function(observer2) {
          observer2.apply(observer2, [event].concat(args));
        });
      }
    }
  }]);
  return EventEmitter2;
}();
function defer() {
  var res;
  var rej;
  var promise = new Promise(function(resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object2) {
  if (object2 == null)
    return "";
  return "" + object2;
}
function copy(a2, s, t) {
  a2.forEach(function(m) {
    if (s[m])
      t[m] = s[m];
  });
}
function getLastOfPath(object2, path2, Empty) {
  function cleanKey(key2) {
    return key2 && key2.indexOf("###") > -1 ? key2.replace(/###/g, ".") : key2;
  }
  function canNotTraverseDeeper() {
    return !object2 || typeof object2 === "string";
  }
  var stack = typeof path2 !== "string" ? [].concat(path2) : path2.split(".");
  while (stack.length > 1) {
    if (canNotTraverseDeeper())
      return {};
    var key = cleanKey(stack.shift());
    if (!object2[key] && Empty)
      object2[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object2, key)) {
      object2 = object2[key];
    } else {
      object2 = {};
    }
  }
  if (canNotTraverseDeeper())
    return {};
  return {
    obj: object2,
    k: cleanKey(stack.shift())
  };
}
function setPath(object2, path2, newValue) {
  var _getLastOfPath = getLastOfPath(object2, path2, Object), obj = _getLastOfPath.obj, k = _getLastOfPath.k;
  obj[k] = newValue;
}
function pushPath(object2, path2, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object2, path2, Object), obj = _getLastOfPath2.obj, k = _getLastOfPath2.k;
  obj[k] = obj[k] || [];
  if (concat)
    obj[k] = obj[k].concat(newValue);
  if (!concat)
    obj[k].push(newValue);
}
function getPath(object2, path2) {
  var _getLastOfPath3 = getLastOfPath(object2, path2), obj = _getLastOfPath3.obj, k = _getLastOfPath3.k;
  if (!obj)
    return void 0;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function escape(data) {
  if (typeof data === "string") {
    return data.replace(/[&<>"'\/]/g, function(s) {
      return _entityMap[s];
    });
  }
  return data;
}
var isIE10 = typeof window !== "undefined" && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
var chars = [" ", ",", "?", "!", ";"];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  var possibleChars = chars.filter(function(c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0)
    return true;
  var r = new RegExp("(".concat(possibleChars.map(function(c) {
    return c === "?" ? "\\?" : c;
  }).join("|"), ")"));
  var matched = !r.test(key);
  if (!matched) {
    var ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function ownKeys$1(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function deepFind(obj, path2) {
  var keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj)
    return void 0;
  if (obj[path2])
    return obj[path2];
  var paths = path2.split(keySeparator);
  var current = obj;
  for (var i = 0; i < paths.length; ++i) {
    if (!current)
      return void 0;
    if (typeof current[paths[i]] === "string" && i + 1 < paths.length) {
      return void 0;
    }
    if (current[paths[i]] === void 0) {
      var j = 2;
      var p = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p];
      while (mix === void 0 && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }
      if (mix === void 0)
        return void 0;
      if (path2.endsWith(p)) {
        if (typeof mix === "string")
          return mix;
        if (p && typeof mix[p] === "string")
          return mix[p];
      }
      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath)
        return deepFind(mix, joinedPath, keySeparator);
      return void 0;
    }
    current = current[paths[i]];
  }
  return current;
}
var ResourceStore = function(_EventEmitter) {
  _inherits(ResourceStore2, _EventEmitter);
  var _super = _createSuper(ResourceStore2);
  function ResourceStore2(data) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    _classCallCheck(this, ResourceStore2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.data = data || {};
    _this.options = options;
    if (_this.options.keySeparator === void 0) {
      _this.options.keySeparator = ".";
    }
    if (_this.options.ignoreJSONStructure === void 0) {
      _this.options.ignoreJSONStructure = true;
    }
    return _this;
  }
  _createClass(ResourceStore2, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);
      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path2 = [lng, ns];
      if (key && typeof key !== "string")
        path2 = path2.concat(key);
      if (key && typeof key === "string")
        path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.indexOf(".") > -1) {
        path2 = lng.split(".");
      }
      var result = getPath(this.data, path2);
      if (result || !ignoreJSONStructure || typeof key !== "string")
        return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === void 0)
        keySeparator = ".";
      var path2 = [lng, ns];
      if (key)
        path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
      if (lng.indexOf(".") > -1) {
        path2 = lng.split(".");
        value = ns;
        ns = path2[1];
      }
      this.addNamespaces(ns);
      setPath(this.data, path2, value);
      if (!options.silent)
        this.emit("added", lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: false
      };
      for (var m in resources) {
        if (typeof resources[m] === "string" || Object.prototype.toString.apply(resources[m]) === "[object Array]")
          this.addResource(lng, ns, m, resources[m], {
            silent: true
          });
      }
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: false
      };
      var path2 = [lng, ns];
      if (lng.indexOf(".") > -1) {
        path2 = lng.split(".");
        deep = resources;
        resources = ns;
        ns = path2[1];
      }
      this.addNamespaces(ns);
      var pack2 = getPath(this.data, path2) || {};
      if (deep) {
        deepExtend(pack2, resources, overwrite);
      } else {
        pack2 = _objectSpread$1(_objectSpread$1({}, pack2), resources);
      }
      setPath(this.data, path2, pack2);
      if (!options.silent)
        this.emit("added", lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }
      this.removeNamespaces(ns);
      this.emit("removed", lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns)
        ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === "v1")
        return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(lng) {
      var data = this.getDataByLanguage(lng);
      var n = data && Object.keys(data) || [];
      return !!n.find(function(v) {
        return data[v] && Object.keys(data[v]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);
  return ResourceStore2;
}(EventEmitter);
var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;
    processors.forEach(function(processor) {
      if (_this.processors[processor])
        value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
function ownKeys$2(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
var checkedLoadedFor = {};
var Translator = function(_EventEmitter) {
  _inherits(Translator2, _EventEmitter);
  var _super = _createSuper$1(Translator2);
  function Translator2(services) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Translator2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, _assertThisInitialized(_this));
    _this.options = options;
    if (_this.options.keySeparator === void 0) {
      _this.options.keySeparator = ".";
    }
    _this.logger = baseLogger.create("translator");
    return _this;
  }
  _createClass(Translator2, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng)
        this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (key === void 0 || key === null) {
        return false;
      }
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === void 0)
        nsSeparator = ":";
      var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      var namespaces2 = options.ns || this.options.defaultNS || [];
      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        var m = key.match(this.interpolator.nestingRegexp);
        if (m && m.length > 0) {
          return {
            key,
            namespaces: namespaces2
          };
        }
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
          namespaces2 = parts.shift();
        key = parts.join(keySeparator);
      }
      if (typeof namespaces2 === "string")
        namespaces2 = [namespaces2];
      return {
        key,
        namespaces: namespaces2
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;
      if (_typeof(options) !== "object" && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }
      if (!options)
        options = {};
      if (keys === void 0 || keys === null)
        return "";
      if (!Array.isArray(keys))
        keys = [String(keys)];
      var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options), key = _this$extractFromKey.key, namespaces2 = _this$extractFromKey.namespaces;
      var namespace2 = namespaces2[namespaces2.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (lng && lng.toLowerCase() === "cimode") {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace2 + nsSeparator + key;
        }
        return key;
      }
      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
      var joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          }
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
            ns: namespaces2
          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        }
        if (keySeparator) {
          var resTypeIsArray = resType === "[object Array]";
          var copy2 = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy2[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                joinArrays: false,
                ns: namespaces2
              }));
              if (copy2[m] === deepKey)
                copy2[m] = res[m];
            }
          }
          res = copy2;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
        res = res.join(joinArrays);
        if (res)
          res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
        var hasDefaultValue = Translator2.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }
        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }
        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace2, key, updateMissing ? defaultValue : res);
          if (keySeparator) {
            var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
              keySeparator: false
            }));
            if (fk && fk.res)
              this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === "all") {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }
          var send = function send2(l, k, specificDefaultValue) {
            var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace2, k, defaultForMissing, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace2, k, defaultForMissing, updateMissing, options);
            }
            _this2.emit("missingKey", l, namespace2, k, res);
          };
          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function(language) {
                _this2.pluralResolver.getSuffixes(language, options).forEach(function(suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }
        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
          res = "".concat(namespace2, ":").concat(key);
        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
          if (this.options.compatibilityAPI !== "v1") {
            res = this.options.parseMissingKeyHandler(key, usedDefault ? res : void 0);
          } else {
            res = this.options.parseMissingKeyHandler(res);
          }
        }
      }
      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;
      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation)
          this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
            interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
          }));
        var skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        var nestBef;
        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }
        var data = options.replace && typeof options.replace !== "string" ? options.replace : options;
        if (this.options.interpolation.defaultVariables)
          data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft)
            options.nest = false;
        }
        if (options.nest !== false)
          res = this.interpolator.nest(res, function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (lastKey && lastKey[0] === args[0] && !options.context) {
              _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
              return null;
            }
            return _this3.translate.apply(_this3, args.concat([key]));
          }, options);
        if (options.interpolation)
          this.interpolator.reset();
      }
      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
      if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
          i18nResolved: resolved
        }, options) : options, this);
      }
      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === "string")
        keys = [keys];
      keys.forEach(function(k) {
        if (_this4.isValidLookup(found))
          return;
        var extracted = _this4.extractFromKey(k, options);
        var key = extracted.key;
        usedKey = key;
        var namespaces2 = extracted.namespaces;
        if (_this4.options.fallbackNS)
          namespaces2 = namespaces2.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
        var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
        var needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces2.forEach(function(ns) {
          if (_this4.isValidLookup(found))
            return;
          usedNS = ns;
          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
            _this4.logger.warn('key "'.concat(usedKey, '" for languages "').concat(codes.join(", "), `" won't get resolved as namespace "`).concat(usedNS, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          }
          codes.forEach(function(code) {
            if (_this4.isValidLookup(found))
              return;
            usedLng = code;
            var finalKeys = [key];
            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling)
                pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
              var zeroSuffix = "_zero";
              if (needsPluralHandling) {
                finalKeys.push(key + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }
              if (needsContextHandling) {
                var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                finalKeys.push(contextKey);
                if (needsPluralHandling) {
                  finalKeys.push(contextKey + pluralSuffix);
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey + zeroSuffix);
                  }
                }
              }
            }
            var possibleKey;
            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey,
        exactUsedKey,
        usedLng,
        usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource)
        return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = "defaultValue";
      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && options[option] !== void 0) {
          return true;
        }
      }
      return false;
    }
  }]);
  return Translator2;
}(EventEmitter);
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var LanguageUtil = function() {
  function LanguageUtil2(options) {
    _classCallCheck(this, LanguageUtil2);
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  _createClass(LanguageUtil2, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf("-") < 0)
        return null;
      var p = code.split("-");
      if (p.length === 2)
        return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === "x")
        return null;
      return this.formatLanguageCode(p.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf("-") < 0)
        return code;
      var p = code.split("-");
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === "string" && code.indexOf("-") > -1) {
        var specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
        var p = code.split("-");
        if (this.options.lowerCaseLng) {
          p = p.map(function(part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1)
            p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2)
            p[1] = p[1].toUpperCase();
          if (p[0] !== "sgn" && p[2].length === 2)
            p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1)
            p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1)
            p[2] = capitalize(p[2].toLowerCase());
        }
        return p.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }
      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;
      if (!codes)
        return null;
      var found;
      codes.forEach(function(code) {
        if (found)
          return;
        var cleanedLng = _this.formatLanguageCode(code);
        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng))
          found = cleanedLng;
      });
      if (!found && this.options.supportedLngs) {
        codes.forEach(function(code) {
          if (found)
            return;
          var lngOnly = _this.getLanguagePartFromCode(code);
          if (_this.isSupportedCode(lngOnly))
            return found = lngOnly;
          found = _this.options.supportedLngs.find(function(supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0)
              return supportedLng;
          });
        });
      }
      if (!found)
        found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks)
        return [];
      if (typeof fallbacks === "function")
        fallbacks = fallbacks(code);
      if (typeof fallbacks === "string")
        fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
        return fallbacks;
      if (!code)
        return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found)
        found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found)
        found = fallbacks[this.formatLanguageCode(code)];
      if (!found)
        found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found)
        found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;
      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];
      var addCode = function addCode2(c) {
        if (!c)
          return;
        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };
      if (typeof code === "string" && code.indexOf("-") > -1) {
        if (this.options.load !== "languageOnly")
          addCode(this.formatLanguageCode(code));
        if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
          addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== "currentOnly")
          addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === "string") {
        addCode(this.formatLanguageCode(code));
      }
      fallbackCodes.forEach(function(fc) {
        if (codes.indexOf(fc) < 0)
          addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);
  return LanguageUtil2;
}();
var sets = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _2(n) {
    return Number(n != 1);
  },
  3: function _3(n) {
    return 0;
  },
  4: function _4(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _5(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _6(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _7(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _8(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _9(n) {
    return Number(n >= 2);
  },
  10: function _10(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _11(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _12(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _13(n) {
    return Number(n !== 0);
  },
  14: function _14(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _15(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _16(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _17(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _18(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _19(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _20(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _21(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _22(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var deprecatedJsonVersions = ["v1", "v2", "v3"];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  var rules = {};
  sets.forEach(function(set2) {
    set2.lngs.forEach(function(l) {
      rules[l] = {
        numbers: set2.nr,
        plurals: _rulesPluralsTypes[set2.fc]
      };
    });
  });
  return rules;
}
var PluralResolver = function() {
  function PluralResolver2(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, PluralResolver2);
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl === "undefined" || !Intl.PluralRules)) {
      this.options.compatibilityJSON = "v3";
      this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
    }
    this.rules = createRules();
  }
  _createClass(PluralResolver2, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(code, {
            type: options.ordinal ? "ordinal" : "cardinal"
          });
        } catch (_unused) {
          return;
        }
      }
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var rule = this.getRule(code, options);
      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(code, options).map(function(suffix) {
        return "".concat(key).concat(suffix);
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var rule = this.getRule(code, options);
      if (!rule) {
        return [];
      }
      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort(function(pluralCategory1, pluralCategory2) {
          return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
        }).map(function(pluralCategory) {
          return "".concat(_this.options.prepend).concat(pluralCategory);
        });
      }
      return rule.numbers.map(function(number) {
        return _this.getSuffix(code, number, options);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var rule = this.getRule(code, options);
      if (rule) {
        if (this.shouldUseIntlApi()) {
          return "".concat(this.options.prepend).concat(rule.select(count));
        }
        return this.getSuffixRetroCompatible(rule, count);
      }
      this.logger.warn("no plural rule found for: ".concat(code));
      return "";
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function getSuffixRetroCompatible(rule, count) {
      var _this2 = this;
      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];
      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = "plural";
        } else if (suffix === 1) {
          suffix = "";
        }
      }
      var returnSuffix = function returnSuffix2() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };
      if (this.options.compatibilityJSON === "v1") {
        if (suffix === 1)
          return "";
        if (typeof suffix === "number")
          return "_plural_".concat(suffix.toString());
        return returnSuffix();
      } else if (this.options.compatibilityJSON === "v2") {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }
      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function shouldUseIntlApi() {
      return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
    }
  }]);
  return PluralResolver2;
}();
function ownKeys$3(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Interpolator = function() {
  function Interpolator2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, Interpolator2);
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || function(value) {
      return value;
    };
    this.init(options);
  }
  _createClass(Interpolator2, [{
    key: "init",
    value: function init2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!options.interpolation)
        options.interpolation = {
          escapeValue: true
        };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
      this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
      this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
      this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options)
        this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, "g");
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
    }
  }, {
    key: "interpolate",
    value: function interpolate2(str, data, lng, options) {
      var _this = this;
      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function regexSafe(val) {
        return val.replace(/\$/g, "$$$$");
      }
      var handleFormat = function handleFormat2(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path2 = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path2, void 0, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: key
          })) : path2;
        }
        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f2 = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f2, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
          interpolationkey: k
        }));
      };
      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function(todo) {
        replaces = 0;
        while (match = todo.regex.exec(str)) {
          var matchedVar = match[1].trim();
          value = handleFormat(matchedVar);
          if (value === void 0) {
            if (typeof missingInterpolationHandler === "function") {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === "string" ? temp : "";
            } else if (options && options.hasOwnProperty(matchedVar)) {
              value = "";
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
              value = "";
            }
          } else if (typeof value !== "string" && !_this.useRawValueToEscape) {
            value = makeString(value);
          }
          var safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);
          if (skipOnVariables) {
            todo.regex.lastIndex += safeValue.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }
          replaces++;
          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var match;
      var value;
      var clonedOptions = _objectSpread$3({}, options);
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0)
          return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');
        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions)
            clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
        } catch (e2) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e2);
          return "".concat(key).concat(sep).concat(optionsString);
        }
        delete clonedOptions.defaultValue;
        return key;
      }
      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;
        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function(elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }
        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== "string")
          return value;
        if (typeof value !== "string")
          value = makeString(value);
        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = "";
        }
        if (doReduce) {
          value = formatters.reduce(function(v, f2) {
            return _this2.format(v, f2, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
              interpolationkey: match[1].trim()
            }));
          }, value.trim());
        }
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }
      return str;
    }
  }]);
  return Interpolator2;
}();
function ownKeys$4(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    var p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    var optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(";");
      opts.forEach(function(opt) {
        if (!opt)
          return;
        var _opt$split = opt.split(":"), _opt$split2 = _toArray(_opt$split), key = _opt$split2[0], rest = _opt$split2.slice(1);
        var val = rest.join(":");
        if (val.trim() === "false")
          formatOptions[key.trim()] = false;
        if (val.trim() === "true")
          formatOptions[key.trim()] = true;
        if (!isNaN(val.trim()))
          formatOptions[key.trim()] = parseInt(val.trim(), 10);
        if (!formatOptions[key.trim()])
          formatOptions[key.trim()] = val.trim();
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
var Formatter = function() {
  function Formatter2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, Formatter2);
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: function number(val, lng, options2) {
        return new Intl.NumberFormat(lng, options2).format(val);
      },
      currency: function currency(val, lng, options2) {
        return new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options2), {}, {
          style: "currency"
        })).format(val);
      },
      datetime: function datetime(val, lng, options2) {
        return new Intl.DateTimeFormat(lng, _objectSpread$4({}, options2)).format(val);
      },
      relativetime: function relativetime(val, lng, options2) {
        return new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options2)).format(val, options2.range || "day");
      },
      list: function list(val, lng, options2) {
        return new Intl.ListFormat(lng, _objectSpread$4({}, options2)).format(val);
      }
    };
    this.init(options);
  }
  _createClass(Formatter2, [{
    key: "init",
    value: function init2(services) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      var iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function add2(name, fc) {
      this.formats[name.toLowerCase().trim()] = fc;
    }
  }, {
    key: "format",
    value: function format(value, _format, lng, options) {
      var _this = this;
      var formats = _format.split(this.formatSeparator);
      var result = formats.reduce(function(mem, f2) {
        var _parseFormatStr = parseFormatStr(f2), formatName = _parseFormatStr.formatName, formatOptions = _parseFormatStr.formatOptions;
        if (_this.formats[formatName]) {
          var formatted = mem;
          try {
            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
          } catch (error2) {
            _this.logger.warn(error2);
          }
          return formatted;
        } else {
          _this.logger.warn("there was no format function for ".concat(formatName));
        }
        return mem;
      }, value);
      return result;
    }
  }]);
  return Formatter2;
}();
function ownKeys$5(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$5(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function remove(arr, what) {
  var found = arr.indexOf(what);
  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}
var Connector = function(_EventEmitter) {
  _inherits(Connector2, _EventEmitter);
  var _super = _createSuper$2(Connector2);
  function Connector2(backend, store, services) {
    var _this;
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    _classCallCheck(this, Connector2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create("backendConnector");
    _this.state = {};
    _this.queue = [];
    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }
    return _this;
  }
  _createClass(Connector2, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces2, options, callback) {
      var _this2 = this;
      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function(lng) {
        var hasAllNamespaces = true;
        namespaces2.forEach(function(ns) {
          var name = "".concat(lng, "|").concat(ns);
          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0)
            ;
          else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0)
              pending.push(name);
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0)
              pending.push(name);
            if (toLoad.indexOf(name) < 0)
              toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0)
              toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces)
          toLoadLanguages.push(lng);
      });
      if (toLoad.length || pending.length) {
        this.queue.push({
          pending,
          loaded: {},
          errors: [],
          callback
        });
      }
      return {
        toLoad,
        pending,
        toLoadLanguages,
        toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split("|");
      var lng = s[0];
      var ns = s[1];
      if (err)
        this.emit("failedLoading", lng, ns, err);
      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }
      this.state[name] = err ? -1 : 2;
      var loaded2 = {};
      this.queue.forEach(function(q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err)
          q.errors.push(err);
        if (q.pending.length === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function(l) {
            if (!loaded2[l])
              loaded2[l] = [];
            if (q.loaded[l].length) {
              q.loaded[l].forEach(function(ns2) {
                if (loaded2[l].indexOf(ns2) < 0)
                  loaded2[l].push(ns2);
              });
            }
          });
          q.done = true;
          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit("loaded", loaded2);
      this.queue = this.queue.filter(function(q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;
      var tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 350;
      var callback = arguments.length > 5 ? arguments[5] : void 0;
      if (!lng.length)
        return callback(null, {});
      return this.backend[fcName](lng, ns, function(err, data) {
        if (err && data && tried < 5) {
          setTimeout(function() {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }
        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces2) {
      var _this4 = this;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend) {
        this.logger.warn("No backend was added via i18next.use. Will not load resources.");
        return callback && callback();
      }
      if (typeof languages === "string")
        languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces2 === "string")
        namespaces2 = [namespaces2];
      var toLoad = this.queueLoad(languages, namespaces2, options, callback);
      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length)
          callback();
        return null;
      }
      toLoad.toLoad.forEach(function(name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces2, callback) {
      this.prepareLoading(languages, namespaces2, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces2, callback) {
      this.prepareLoading(languages, namespaces2, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var s = name.split("|");
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, "read", void 0, void 0, function(err, data) {
        if (err)
          _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data)
          _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace2, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace2)) {
        this.logger.warn('did not save key "'.concat(key, '" as the namespace "').concat(namespace2, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      if (key === void 0 || key === null || key === "")
        return;
      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace2, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
          isUpdate
        }));
      }
      if (!languages || !languages[0])
        return;
      this.store.addResource(languages[0], namespace2, key, fallbackValue);
    }
  }]);
  return Connector2;
}(EventEmitter);
function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle2(args) {
      var ret = {};
      if (_typeof(args[1]) === "object")
        ret = args[1];
      if (typeof args[1] === "string")
        ret.defaultValue = args[1];
      if (typeof args[2] === "string")
        ret.tDescription = args[2];
      if (_typeof(args[2]) === "object" || _typeof(args[3]) === "object") {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function(key) {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === "string")
    options.ns = [options.ns];
  if (typeof options.fallbackLng === "string")
    options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === "string")
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
}
function ownKeys$6(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$6(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function noop() {
}
function bindMemberFunctions(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function(mem) {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
var I18n = function(_EventEmitter) {
  _inherits(I18n2, _EventEmitter);
  var _super = _createSuper$3(I18n2);
  function I18n2() {
    var _this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : void 0;
    _classCallCheck(this, I18n2);
    _this = _super.call(this);
    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }
    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };
    bindMemberFunctions(_assertThisInitialized(_this));
    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);
        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }
      setTimeout(function() {
        _this.init(options, callback);
      }, 0);
    }
    return _this;
  }
  _createClass(I18n2, [{
    key: "init",
    value: function init2() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : void 0;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!options.defaultNS && options.ns) {
        if (typeof options.ns === "string") {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf("translation") < 0) {
          options.defaultNS = options.ns[0];
        }
      }
      var defOpts = get();
      this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));
      if (this.options.compatibilityAPI !== "v1") {
        this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
      }
      if (options.keySeparator !== void 0) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }
      if (options.nsSeparator !== void 0) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }
      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject)
          return null;
        if (typeof ClassOrObject === "function")
          return new ClassOrObject();
        return ClassOrObject;
      }
      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }
        var formatter;
        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== "undefined") {
          formatter = Formatter;
        }
        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s.formatter = createClassOnDemand(formatter);
          s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on("*", function(event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          _this2.emit.apply(_this2, [event].concat(args));
        });
        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }
        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init)
            s.i18nFormat.init(this);
        }
        this.translator = new Translator(this.services, this.options);
        this.translator.on("*", function(event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function(m) {
          if (m.init)
            m.init(_this2);
        });
      }
      this.format = this.options.interpolation.format;
      if (!callback)
        callback = noop;
      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== "dev")
          this.options.lng = codes[0];
      }
      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn("init: no languageDetector is used and no lng is defined");
      }
      var storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      storeApi.forEach(function(fcName) {
        _this2[fcName] = function() {
          var _this2$store;
          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      storeApiChained.forEach(function(fcName) {
        _this2[fcName] = function() {
          var _this2$store2;
          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
          return _this2;
        };
      });
      var deferred = defer();
      var load = function load2() {
        var finish = function finish2(err, t) {
          if (_this2.isInitialized && !_this2.initializedStoreOnce)
            _this2.logger.warn("init: i18next is already initialized. You should call init just once!");
          _this2.isInitialized = true;
          if (!_this2.options.isClone)
            _this2.logger.log("initialized", _this2.options);
          _this2.emit("initialized", _this2.options);
          deferred.resolve(t);
          callback(err, t);
        };
        if (_this2.languages && _this2.options.compatibilityAPI !== "v1" && !_this2.isInitialized)
          return finish(null, _this2.t.bind(_this2));
        _this2.changeLanguage(_this2.options.lng, finish);
      };
      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }
      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === "string" ? language : this.language;
      if (typeof language === "function")
        usedCallback = language;
      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === "cimode")
          return usedCallback();
        var toLoad = [];
        var append = function append2(lng) {
          if (!lng)
            return;
          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
          lngs.forEach(function(l) {
            if (toLoad.indexOf(l) < 0)
              toLoad.push(l);
          });
        };
        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function(l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }
        if (this.options.preload) {
          this.options.preload.forEach(function(l) {
            return append(l);
          });
        }
        this.services.backendConnector.load(toLoad, this.options.ns, function(e2) {
          if (!e2 && !_this3.resolvedLanguage && _this3.language)
            _this3.setResolvedLanguage(_this3.language);
          usedCallback(e2);
        });
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs)
        lngs = this.languages;
      if (!ns)
        ns = this.options.ns;
      if (!callback)
        callback = noop;
      this.services.backendConnector.reload(lngs, ns, function(err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!module.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      if (module.type === "backend") {
        this.modules.backend = module;
      }
      if (module.type === "logger" || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }
      if (module.type === "languageDetector") {
        this.modules.languageDetector = module;
      }
      if (module.type === "i18nFormat") {
        this.modules.i18nFormat = module;
      }
      if (module.type === "postProcessor") {
        postProcessor.addPostProcessor(module);
      }
      if (module.type === "formatter") {
        this.modules.formatter = module;
      }
      if (module.type === "3rdParty") {
        this.modules.external.push(module);
      }
      return this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function setResolvedLanguage(l) {
      if (!l || !this.languages)
        return;
      if (["cimode", "dev"].indexOf(l) > -1)
        return;
      for (var li = 0; li < this.languages.length; li++) {
        var lngInLngs = this.languages[li];
        if (["cimode", "dev"].indexOf(lngInLngs) > -1)
          continue;
        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
          this.resolvedLanguage = lngInLngs;
          break;
        }
      }
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;
      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit("languageChanging", lng);
      var setLngProps = function setLngProps2(l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
        _this4.resolvedLanguage = void 0;
        _this4.setResolvedLanguage(l);
      };
      var done = function done2(err, l) {
        if (l) {
          setLngProps(l);
          _this4.translator.changeLanguage(l);
          _this4.isLanguageChangingTo = void 0;
          _this4.emit("languageChanged", l);
          _this4.logger.log("languageChanged", l);
        } else {
          _this4.isLanguageChangingTo = void 0;
        }
        deferred.resolve(function() {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback)
          callback(err, function() {
            return _this4.t.apply(_this4, arguments);
          });
      };
      var setLng = function setLng2(lngs) {
        if (!lng && !lngs && _this4.services.languageDetector)
          lngs = [];
        var l = typeof lngs === "string" ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
        if (l) {
          if (!_this4.language) {
            setLngProps(l);
          }
          if (!_this4.translator.language)
            _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector)
            _this4.services.languageDetector.cacheUserLanguage(l);
        }
        _this4.loadResources(l, function(err) {
          done(err, l);
        });
      };
      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }
      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      var _this5 = this;
      var fixedT = function fixedT2(key, opts) {
        var options;
        if (_typeof(opts) !== "object") {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }
          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread$6({}, opts);
        }
        options.lng = options.lng || fixedT2.lng;
        options.lngs = options.lngs || fixedT2.lngs;
        options.ns = options.ns || fixedT2.ns;
        var keySeparator = _this5.options.keySeparator || ".";
        var resultKey = keyPrefix ? "".concat(keyPrefix).concat(keySeparator).concat(key) : key;
        return _this5.t(resultKey, options);
      };
      if (typeof lng === "string") {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }
      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;
      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;
      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized) {
        this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
        return false;
      }
      if (!this.languages || !this.languages.length) {
        this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
        return false;
      }
      var lng = this.resolvedLanguage || this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === "cimode")
        return true;
      var loadNotPending = function loadNotPending2(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];
        return loadState === -1 || loadState === 2;
      };
      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== void 0)
          return preResult;
      }
      if (this.hasResourceBundle(lng, ns))
        return true;
      if (!this.services.backendConnector.backend)
        return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
        return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;
      var deferred = defer();
      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }
      if (typeof ns === "string")
        ns = [ns];
      ns.forEach(function(n) {
        if (_this7.options.ns.indexOf(n) < 0)
          _this7.options.ns.push(n);
      });
      this.loadResources(function(err) {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === "string")
        lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function(lng) {
        return preloaded.indexOf(lng) < 0;
      });
      if (!newLngs.length) {
        if (callback)
          callback();
        return Promise.resolve();
      }
      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function(err) {
        deferred.resolve();
        if (callback)
          callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng)
        lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng)
        return "rtl";
      var rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
        isClone: true
      });
      var clone = new I18n2(mergedOptions);
      var membersToCopy = ["store", "services", "language"];
      membersToCopy.forEach(function(m) {
        clone[m] = _this8[m];
      });
      clone.services = _objectSpread$6({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on("*", function(event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }
        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]);
  return I18n2;
}(EventEmitter);
_defineProperty(I18n, "createInstance", function() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : void 0;
  return new I18n(options, callback);
});
var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
instance.createInstance;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
var zh = {
  translation: {
    contextmenu: {
      collapse: "\u6298\u53E0\u8282\u70B9",
      expand: "\u5C55\u5F00\u8282\u70B9",
      delete: "\u5220\u9664\u8282\u70B9",
      "delete-one": "\u5220\u9664\u5355\u4E2A\u8282\u70B9",
      add: "\u65B0\u5EFA\u5B50\u8282\u70B9",
      "add-parent": "\u65B0\u5EFA\u7236\u8282\u70B9",
      "add-sibling": "\u65B0\u5EFA\u5144\u5F1F\u8282\u70B9",
      "add-sibling-before": "\u5728\u6B64\u4E4B\u524D\u65B0\u5EFA\u5144\u5F1F\u8282\u70B9",
      cut: "\u526A\u5207",
      copy: "\u62F7\u8D1D",
      paste: "\u7C98\u8D34",
      selectall: "\u5168\u9009",
      zoomin: "\u653E\u5927",
      edit: "Editar",
      zoomout: "\u7F29\u5C0F",
      zoomfit: "\u7F29\u653E\u81F3\u5408\u9002\u5927\u5C0F"
    }
  }
};
var en = {
  translation: {
    contextmenu: {
      collapse: "collapse",
      expand: "expand",
      delete: "delete",
      "delete-one": "delete a single node",
      add: "add child node",
      "add-parent": "add parent node",
      "add-sibling": "add sibling node",
      "add-sibling-before": "add sibling node before",
      cut: "cut",
      copy: "copy",
      paste: "paste",
      selectall: "select all",
      zoomin: "zoom in",
      zoomout: "zoom out",
      zoomfit: "zoom fit"
    }
  }
};
var ptBR = {
  translation: {
    contextmenu: {
      collapse: "Fechar",
      expand: "Abrir",
      delete: "Excluir",
      "delete-one": "Excluir \xFAnico n\xF3",
      add: "Adicionar n\xF3 filho",
      "add-parent": "Adicionar n\xF3 antes",
      "add-sibling": "Adicionar n\xF3 abaixo",
      "add-sibling-before": "Adicionar n\xF3 acima",
      cut: "Recortar",
      copy: "Copiar",
      paste: "Colar",
      selectall: "Selecionar tudo",
      zoomin: "Aproximar",
      zoomout: "Retrair",
      edit: "Editar",
      zoomfit: "Centralizar"
    }
  }
};
instance.init({
  fallbackLng: "zh",
  lng: "zh",
  resources: {
    zh,
    en,
    ptBR
  }
});
const container = "Contextmenu_container_154ic";
const menu = "Contextmenu_menu_154ic";
const disabled = "Contextmenu_disabled_154ic";
var style0 = {
  container,
  menu,
  disabled
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "contextmenu",
  props: {
    position: {
      default: { top: 0, left: 0 }
    },
    groups: Array
  },
  emits: ["click-item"],
  setup(props, context) {
    const show = ref(false);
    const style2 = useCssModule();
    const containerEle = ref();
    const menuEle = ref();
    const pos2 = reactive({ top: 0, left: 0 });
    const margin = 8;
    emitter.on("showContextmenu", async (val) => {
      if (!containerEle.value || !menuEle.value) {
        return;
      }
      show.value = !!val;
      await nextTick();
      const { offsetWidth: w1, offsetHeight: h1 } = containerEle.value;
      const { offsetWidth: w2, offsetHeight: h2 } = menuEle.value;
      const { top, left } = props.position;
      pos2.top = top + h2 > h1 ? h1 - h2 - margin : top;
      pos2.left = left + w2 > w1 ? left - w2 : left;
    });
    const close2 = () => show.value = false;
    const onClick = (name) => {
      close2();
      context.emit("click-item", name);
    };
    return {
      style: style2,
      show,
      close: close2,
      onClick,
      menuEle,
      containerEle,
      pos: pos2,
      i18n: instance
    };
  }
});
const _hoisted_1$1 = ["id"];
const _hoisted_2$1 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.style["container"]),
    ref: "containerEle"
  }, [
    createElementVNode("div", {
      onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
    }, null, 32),
    createElementVNode("div", {
      ref: "menuEle",
      id: _ctx.style["menu"],
      style: normalizeStyle({ top: _ctx.pos.top + "px", left: _ctx.pos.left + "px" })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.groups, (group, index) => {
        return openBlock(), createElementBlock("ul", { key: index }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(group, (item) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass(item.disabled ? _ctx.style["disabled"] : ""),
              key: item.name,
              onClick: ($event) => _ctx.onClick(item.name)
            }, toDisplayString(_ctx.i18n.t(`contextmenu.${item.name}`)), 11, _hoisted_2$1);
          }), 128))
        ]);
      }), 128))
    ], 12, _hoisted_1$1)
  ], 2)), [
    [vShow, _ctx.show]
  ]);
}
const cssModules = {};
cssModules["$style"] = style0;
var Contextmenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__cssModules", cssModules]]);
const _sfc_main = defineComponent({
  name: "Mindmap",
  components: {
    Contextmenu
  },
  emits: ["update:modelValue", "editNode", "addNode"],
  props: {
    updateNode: {
      type: Object,
      default: {}
    },
    removeNode: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Array,
      required: true
    },
    xGap: { type: Number, default: xGap },
    yGap: { type: Number, default: yGap },
    branch: {
      type: Number,
      default: branch,
      validator: (val) => val >= 1 && val <= 6
    },
    scaleExtent: {
      type: Object,
      default: scaleExtent
    },
    sharpCorner: Boolean,
    centerBtn: Boolean,
    fitBtn: Boolean,
    downloadBtn: Boolean,
    timetravel: Boolean,
    addNodeBtn: Boolean,
    edit: Boolean,
    drag: Boolean,
    keyboard: Boolean,
    ctm: Boolean,
    zoom: Boolean,
    locale: { type: String, default: "zh" }
  },
  setup(props, context) {
    watchEffect(() => instance.changeLanguage(props.locale));
    watchEffect(() => emitter.emit("scale-extent", props.scaleExtent));
    watchEffect(() => emitter.emit("branch", props.branch));
    watchEffect(() => emitter.emit("sharp-corner", props.sharpCorner));
    watchEffect(() => emitter.emit("gap", { xGap: props.xGap, yGap: props.yGap }));
    watchEffect(() => emitter.emit("mindmap-context", context));
    watchEffect(() => addNodeBtn.value = props.edit && props.addNodeBtn);
    watchEffect(() => mmprops.value.drag = props.drag);
    watchEffect(() => mmprops.value.edit = props.edit);
    onMounted(() => {
      if (!svgEle.value || !gEle.value || !asstSvgEle.value || !foreignEle.value || !foreignDivEle.value) {
        return;
      }
      emitter.emit("selection-svg", select(svgEle.value));
      emitter.emit("selection-g", select(gEle.value));
      emitter.emit("selection-asstSvg", select(asstSvgEle.value));
      emitter.emit("selection-foreign", select(foreignEle.value));
      emitter.emit("mmdata", new ImData(lodash.exports.cloneDeep(props.modelValue[0]), xGap, yGap, getSize));
      changeSharpCorner.value = false;
      afterOperation();
      const { svg: svg2, foreign: foreign2 } = selection;
      foreign2 == null ? void 0 : foreign2.raise();
      bindForeignDiv();
      fitView();
      svg2 == null ? void 0 : svg2.on("mousedown", () => {
        const oldSele = document.getElementsByClassName(style.selected)[0];
        oldSele == null ? void 0 : oldSele.classList.remove(style.selected);
      });
      switchZoom(props.zoom);
      switchContextmenu(props.ctm);
    });
    watch(() => [props.branch, addNodeBtn.value, props.sharpCorner], () => {
      draw();
      changeSharpCorner.value = false;
    });
    watch(() => [props.xGap, props.yGap], (val) => {
      mmdata.setBoundingBox(val[0], val[1]);
      draw();
    });
    watch(() => [props.drag, props.edit], (val) => {
      switchSelect(val[0] || val[1]);
      switchDrag(val[0]);
      switchEdit(val[1]);
    });
    watch(() => props.zoom, (val) => switchZoom(val));
    watch(() => props.ctm, (val) => switchContextmenu(val));
    watch(() => props.updateNode, (val) => emitter.emit("updateNode", val));
    watch(() => props.removeNode, (val) => emitter.emit("removeNode", val));
    emitter.on("changeNode", (value) => context.emit("editNode", value));
    emitter.on("newNode", (value) => context.emit("addNode", value));
    return {
      wrapperEle,
      svgEle,
      gEle,
      style,
      asstSvgEle,
      foreignEle,
      foreignDivEle,
      centerView,
      fitView,
      download,
      menu: menu$1,
      contextmenuPos: pos,
      onClickMenu,
      next,
      prev,
      hasPrev,
      hasNext
    };
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = { ref: "gEle" };
const _hoisted_3 = {
  ref: "foreignEle",
  style: { "display": "none" }
};
const _hoisted_4 = {
  ref: "foreignDivEle",
  contenteditable: ""
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_contextmenu = resolveComponent("contextmenu");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.style["container"])
  }, [
    createElementVNode("div", {
      id: _ctx.style["svg-wrapper"],
      ref: "wrapperEle"
    }, [
      (openBlock(), createElementBlock("svg", {
        class: normalizeClass(_ctx.style["svg"]),
        ref: "svgEle"
      }, [
        createElementVNode("g", _hoisted_2, [
          (openBlock(), createElementBlock("foreignObject", _hoisted_3, [
            createElementVNode("div", _hoisted_4, null, 512)
          ], 512))
        ], 512)
      ], 2))
    ], 8, _hoisted_1),
    (openBlock(), createElementBlock("svg", {
      ref: "asstSvgEle",
      class: normalizeClass(_ctx.style["asst-svg"])
    }, null, 2)),
    createElementVNode("div", {
      class: normalizeClass([_ctx.style["button-list"], _ctx.style["right-bottom"]])
    }, [
      _ctx.centerBtn ? (openBlock(), createElementBlock("button", {
        key: 0,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.centerView())
      }, [
        createElementVNode("i", {
          class: normalizeClass(_ctx.style["gps"])
        }, null, 2)
      ])) : createCommentVNode("", true),
      _ctx.fitBtn ? (openBlock(), createElementBlock("button", {
        key: 1,
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.fitView())
      }, [
        createElementVNode("i", {
          class: normalizeClass(_ctx.style["fit"])
        }, null, 2)
      ])) : createCommentVNode("", true),
      _ctx.downloadBtn ? (openBlock(), createElementBlock("button", {
        key: 2,
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.download())
      }, [
        createElementVNode("i", {
          class: normalizeClass(_ctx.style["download"])
        }, null, 2)
      ])) : createCommentVNode("", true)
    ], 2),
    _ctx.timetravel ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass([_ctx.style["button-list"], _ctx.style["right-top"]])
    }, [
      createElementVNode("button", {
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.prev && _ctx.prev(...args)),
        class: normalizeClass({ [_ctx.style["disabled"]]: !_ctx.hasPrev })
      }, [
        createElementVNode("i", {
          class: normalizeClass(_ctx.style["prev"])
        }, null, 2)
      ], 2),
      createElementVNode("button", {
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.next && _ctx.next(...args)),
        class: normalizeClass({ [_ctx.style["disabled"]]: !_ctx.hasNext })
      }, [
        createElementVNode("i", {
          class: normalizeClass(_ctx.style["next"])
        }, null, 2)
      ], 2)
    ], 2)) : createCommentVNode("", true),
    _ctx.ctm ? (openBlock(), createBlock(_component_contextmenu, {
      key: 1,
      position: _ctx.contextmenuPos,
      groups: _ctx.menu,
      onClickItem: _ctx.onClickMenu
    }, null, 8, ["position", "groups", "onClickItem"])) : createCommentVNode("", true)
  ], 2);
}
var Mindmap = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Mindmap as default };
