odoo.define('web.web_decimal_numpad_dot', function (require) {
"use strict";  

var core = require('web.core');
var _t = core._t;
var FieldFloat = require('web.form_widgets').FieldFloat;

FieldFloat.include({
    render_value: function() {
        var self = this;
        this._super();
        if (!this.get('readonly')){
            this.$el.find('input').on('keypress', this.floatKeypress.bind(this));
        }
    },
    floatKeypress: function(e){
        if((e.keyCode == '46' || e.charCode == '46') && 
        	_t.database.parameters.decimal_point == ','){
            //Cancel the keypress
            e.preventDefault();
            // Add the comma to the value of the input field
            if(this.el.firstElementChild.value.slice(-1)!=','){
                this.$("input").val(this.$("input").val() + ',');
            }
         }
    },
});

return FieldFloat
});