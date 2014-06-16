/**
 Log4n - Powerful logger for NodeJS applications.
 Copyright (C) 2014  Kushal Likhi

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 For any issues, create an issue on GitHub <https://github.com/kushal-likhi/log4n/>
 Contact the author at <kushal.likhi@gmail.com>
 */
"use strict";

//Load the Log4n Class
var Log4n = require("./Log4n");

//Load the Config Builder class
var ConfigBuilder = require("./util/ConfigBuilder");

//Import errors
var LoggerAlreadyDefinedError = require("./errors/LoggerAlreadyDefinedError");

/**
 * Logger module initialization.
 * Returns a function that can be called to configure
 *
 * @function
 * @public
 *
 * @param {Object} configOptions Configuration options
 * */
exports = module.exports = function initLogger(configOptions) {

    //Build the full config object
    configOptions = new ConfigBuilder().build(configOptions);

    //Check for logger existing
    if (Boolean(global[configOptions.interfaceName])) {
        if (Boolean(configOptions.silentFailing)) console.log(new LoggerAlreadyDefinedError(configOptions.interfaceName));
        else throw new LoggerAlreadyDefinedError(configOptions.interfaceName);
    }

    //Load logger
    var log4n = new Log4n();

    //Load configurations
    log4n.configure(configOptions);

    //Initialize the logger
    log4n.load();
};