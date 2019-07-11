/**
 * 模拟实现call
 * @param {*} val
 */

// 借助 apply
function applyBind (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
  
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

function fakeBind (context) {
    context = Object(context) || window;
    context.__fn__ = this;
    let args = [...arguments].slice(1);
    context.__result__ = function() {
      let result_args = [...args, ...arguments];
      context.__fn__(...result_args);
    }
    return context.__result__;
}


export {
    applyBind,
    fakeBind
}

