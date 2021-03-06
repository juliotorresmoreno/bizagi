/**
 *
 * @author JarveinR
 *
 */
 
var path = require('path');
var fs = require('fs');
var fsmk = require('node-fs');
var bizagiUtil = require('../index');
var config = bizagiUtil.config;
var loadModule = require('./../loadModule').loadModule;

var isEnabled = true;
var logger;

function BizagiLogger(logName){
    try {        
        var log4js = require('log4js');

        var loggerDirectory = path.join(config.logsPath);
        if (!fs.existsSync(loggerDirectory)){
            fsmk.mkdirSync(loggerDirectory, 0666, true);
        }

        var configuration = {
            "appenders": [
                {
                    "type": "file",
                    "filename": logName,
                    "maxLogSize": 10480000,
                    "backups": 5,
                    "category": "app"
                },
                {
                    "type": "console",
                    "category": "console"
                }
            ],
            "replaceConsole": true
        }

        log4js.configure(configuration, {cwd: loggerDirectory});

        var type = 'file';
        if (config.logType) {
            type = config.logType.toLowerCase();
        }

        if (type == 'console') {
            logger = log4js.getLogger('console');
        }
        else {
            logger = log4js.getLogger('app');
        }

        var level = 'INFO';
        if (config.levelLog) {
            if (config.levelLog.toUpperCase() in {
                    "DEBUG": "",
                    "ERROR": "",
                    "INFO": "",
                    "WARN": "",
                    "TRACE": "",
                    "FATAL": ""
                }) {
                level = config.levelLog.toUpperCase();
            }
        }

        logger.setLevel(level);
                
    }catch (e){
        throw e;
    }
}

BizagiLogger.prototype.isEnabled = isEnabled;

BizagiLogger.prototype.debug = function (msg){    
	logger.debug(getMessage(msg));
};

BizagiLogger.prototype.error = function (msg){
	logger.error(getMessage(msg));
};

BizagiLogger.prototype.info = function (msg){
	logger.info(getMessage(msg));
};

BizagiLogger.prototype.warn = function (msg){
	logger.warn(getMessage(msg));
};

BizagiLogger.prototype.trace = function (msg){
	logger.trace(getMessage(msg));
};

function getMessage(parameters) {
    if (typeof parameters !== 'undefined' && parameters.constructor === Array){            
        if (parameters.length > 0){
            var msg = '';
            for (var i = 0; i < parameters.length; i++){
                var value = parameters[i];
                if(value instanceof Error) {
                    value = value.message;
                }
                else if (value instanceof Object){
                    value = JSON.stringify(value);
                }
                else{
                    value = String(value);
                }                
                msg += value;                
            }
            return msg;
        }            
    }     
    else if (typeof parameters === 'object'){
        parameters = JSON.stringify(parameters);
        return parameters;
    }
    else{        
        return String(parameters);
    }    
}

exports.BizagiLogger = BizagiLogger;