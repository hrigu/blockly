'use strict';

goog.provide('Blockly.Blocks.planik');

goog.require('Blockly.Blocks');


Blockly.Blocks['planik_tag'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(315);
        this.appendDummyInput()
            .appendField("Tag");
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("index");
        this.appendValueInput("ATTRIBUT")
            .appendField(new Blockly.FieldDropdown([["name", "NAME"], ["typ", "TYP"], ["wochentag", "WOCHENTAG"]]), "attribute");
        this.setNextStatement(true);
        this.setTooltip('');
    }
};