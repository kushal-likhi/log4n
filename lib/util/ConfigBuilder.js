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

//Import module
var extend = require("extend");

//Get the config builder
var Constants = require("../util/Constants");

/**
 * @class ConfigBuilder
 *
 * This class builds the config for the module.
 *
 * This also defines all the config params
 *
 * */
exports = module.exports = function ConfigBuilder() {

    //defines the default config object
    this.defaultConfig = {

        /**
         * Interface Name
         * This property defines the name of the global logger object.
         *
         * Example:
         * -------
         *
         * if interfaceName = "log";
         * you can log as:
         * log.debug(), log.info() etc.
         *
         * if interfaceName = "myModuleLog";
         * you can log as:
         * myModuleLog.debug(), myModuleLog.info() etc.
         * */
        interfaceName: Constants.DEFAULT_INTERFACE_NAME,

        /**
         * Silent Failing
         * If true, it will disable all error throws in the module. they will just be printed.
         * */
        silentFailing: false
    };

};

/**
 * Returns the config object
 *
 * @param {Object} config the config object
 * */
ConfigBuilder.prototype.build = function (config) {
    return extend(true, this.defaultConfig, config);
};