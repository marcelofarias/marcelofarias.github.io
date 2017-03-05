window.Swap = new function Swap() {
    var me = this;

    me.promoteByClassName = function (cls) {
        var div = document.getElementsByClassName(cls)[0];
        this.promote(div);
    },

    me.promoteById = function (id) {
        var div = document.getElementById(id);
        this.promote(div);
    }

    me.promoteByText = function (text) {
        var container = document.getElementById('container'),
            children = container.childNodes,
            i, child;

            for (i = 0; i < children.length; i++) {
                child = children[i];
                if (child.textContent === text) {
                    this.promote(child);
                }
            }
    }

    me.promote = function (div) {
        var container = document.getElementById('container');
        container.removeChild(div);
        container.insertBefore(div, container.firstChild);
    }

}