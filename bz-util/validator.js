/**
 *
 * @author JarveinR
 *
 */

var iz = require('iz');
var bizagiUtil = require('./index');

function requiredParameters(parameters){
    var parameterName;

    for (parameterName in parameters) {
        var parameter = parameters[parameterName];
        if(!iz(parameter).required().valid){
            var error = bizagiUtil.getResponse(null, null, -400, bizagiUtil.error('VAL.REQUIRED_PARAM', [parameterName]));
            return error;
        }
    }
};

function isValidGlobalsJson(globals){
    try{
        var error = requiredParameters({'globals': globals});
        if (error){
            return error;
        }
        globals = escapeString(globals);
        globals = JSON.parse(globals);

        if (typeof globals.authdata === 'undefined'){
            var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.REQUIRED_ELEMENT', ['globals.authdata', 'globals']));
            return error;
        }

        if (typeof globals.systemproperties === 'undefined'){
            var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.REQUIRED_ELEMENT', ['globals.systemproperties', 'globals']));
            return error;
        }

        if (typeof globals.projectname === 'undefined'){
            var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.REQUIRED_ELEMENT', ['globals.projectname', 'globals']));
            return error;
        }

        for (key in globals.authdata) {
            globals.authdata[key] = escapeString(globals.authdata[key]);
        }

        for (key in globals.systemproperties) {
            globals.systemproperties[key] = escapeString(globals.systemproperties[key]);
        }

        var success = bizagiUtil.getResponse(globals, null, 200);
        return success;
    }catch(exception){
        var error = bizagiUtil.getResponse(null, exception, -200, bizagiUtil.error('VAL.PARAM_TYPE', ['globals', 'JSON']));
        return error;
    }
};

function isValidDataJson(json){
    try{
        var name = Object.keys(json)[0];
        var jsonStr = escapeString(json[name]);
        var data = JSON.parse(jsonStr);
        var success = bizagiUtil.getResponse(data, null, 200);
        return success;
    }catch(exception){
        var error = bizagiUtil.getResponse(null, null, -200, bizagiUtil.error('VAL.PARAM_TYPE', [name, 'JSON']));
        return error;
    }
};

function escapeString(str) {
    str = deleteInvalidCharacteres(str);
    var strEscape = '';

    if (str.match(/^%7B/)) {
        str = str.replace(/\+/g, ' ');
        var pattern = /%/g;
        var match;
        var startIndex = 0;
        var pivotIndex = 0;

        while ((match = pattern.exec(str)) !== null) {
            var encodeNum = str.substr(match.index + 1, 2);
            var character = getUnescapeCharacter(encodeNum);
            strEscape += str.substring(pivotIndex, match.index) + character;
            pivotIndex = match.index + 3;
        }
    }
    else
    {
        strEscape = str;
    }

    return unescape(strEscape);
};

function deleteInvalidCharacteres(str){
    // the pattern looks for invalid characteres
    var pattern = /[\b\f\n\r\t\v]/g;

    var array = str.split("");
    var match;
    while ((match = pattern.exec(str)) !== null) {
        array.splice(match.index, 1, '');
    }

    return array.join('');
};

function getUnescapeCharacter(encodeNum){

    var unescapeCh = numCharacters[encodeNum];

    if (unescapeCh === undefined){
        unescapeCh = '%' + encodeNum;
    }

    return unescapeCh;
};

var characters = {
    '2C': ',',
    '3A': ':',
    '20': ' ',
    '22': '"',
    '7B': '{',
    '7D': '}'
}

exports.requiredParameters = requiredParameters;
exports.isValidGlobalsJson = isValidGlobalsJson;
exports.isValidDataJson = isValidDataJson;