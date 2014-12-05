'use strict';

goog.provide('Blockly.Blocks.planik');

goog.require('Blockly.Blocks');



Blockly.Blocks['planik_and_or'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.appendValueInput("and_or")
            .setCheck("planik_tag")
            .appendField(new Blockly.FieldDropdown([["and", "AND"], ["or", "OR"]]), "and_or");
        this.setOutput(true, "planik_and_or");
        this.setTooltip('');
    }
};
Blockly.Blocks['planik_tag'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(345);
        this.appendValueInput("and_or")
            .setCheck("planik_and_or");
        this.setOutput(true, "planik_tag");
        this.setTooltip('');
    }
};


/**
 * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8q7vup
 * Alternative: Tagesindex in dropdown: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#a6i6yd
 */
Blockly.Blocks['old_planik_tag'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(315);
        this.setOutput(true, 'PLANIK_TAG');
        this.appendDummyInput()
            .appendField("Tag");
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("index");
        this.appendValueInput("ATTRIBUT")
            .appendField(new Blockly.FieldDropdown([["name", "NAME"], ["typ", "TYP"], ["wochentag", "WOCHENTAG"]]), "attribute");
        //this.setPreviousStatement(true);
        //this.setNextStatement(true);
        this.setTooltip('');
    }
};

/**
 * lists_create_with
 */
Blockly.Blocks['planik_tage'] = {
    init: function() {

        var OPERATORS =
            [[Blockly.Msg.LOGIC_OPERATION_AND, 'AND'],
                [Blockly.Msg.LOGIC_OPERATION_OR, 'OR']];

        this.setColour(260);
        this.appendValueInput('ADD0')
            .setCheck("PLANIK_TAG")
            .appendField("Tage");
        this.appendValueInput('A')
            .setCheck('Boolean')
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
        this.appendValueInput('ADD1')
            .setCheck("PLANIK_TAG")
        ;
        this.appendValueInput('ADD2');
        this.setOutput(true, 'Array');
        this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
        this.itemCount_ = 3;
    }
};


/**
 * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9jj7kq
 * @type {{init: init}}
 */
Blockly.Blocks['planik_typ'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(20);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["DIENST", "DIENST"], ["FREI", "FREI"], ["FERIEN", "FERIEN"]]), "NAME");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks['planik_compare'] = {
    /**
     * Abgeleitet vom built-in block 'logic_compare'
     */
    init: function() {
        var OPERATORS = [
            ['=', 'EQ'],
            ['!=', 'NEQ'],
            ['>', 'LT'],
            ['\u2265', 'LTE'],
            ['<', 'GT'],
            ['\u2264', 'GTE'],
            ['in', 'IN']
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
        this.setColour(210);
        this.setOutput(true, 'Boolean');

        this.appendValueInput('B')
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
        this.setInputsInline(false);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue('OP');
            var TOOLTIPS = {
                'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
                'NEQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
                'LT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
                'LTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
                'GT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
                'GTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
            };
            return TOOLTIPS[op];
        });
    }
};


Blockly.Blocks['planik_logic'] = {
    /**
     * Block for logical operations: 'and', 'or'.
     * @this Blockly.Block
     */
    init: function() {
        var OPERATORS =
            [[Blockly.Msg.LOGIC_OPERATION_AND, 'AND'],
                [Blockly.Msg.LOGIC_OPERATION_OR, 'OR']];
        this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL);
        this.setColour(210);
        this.setOutput(true, 'Boolean');
        this.appendValueInput('A')
            .setCheck('Boolean');
        this.appendValueInput('B')
            .setCheck('Boolean')
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
        this.setInputsInline(false);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue('OP');
            var TOOLTIPS = {
                'AND': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
                'OR': Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
            };
            return TOOLTIPS[op];
        });
    }
};




