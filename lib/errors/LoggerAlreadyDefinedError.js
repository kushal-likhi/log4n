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

//Utils module loaded
var util = require('util');

/**
 * Error Class LoggerAlreadyDefined
 *
 * This is thrown in case you are initializing a logger with same `interfaceName` as the one already defined.
 * */
function LoggerAlreadyDefinedError(interfaceName) {
    Error.call(this); //super constructor
    Error.captureStackTrace(this, this.constructor); //super helper method to include stack trace in error object

    this.name = this.constructor.name; //set our function’s name as error name.

    //Define error message
    this.message = "Logger with interfaceName '" + interfaceName + "' is already defined in the system. Use a different name or change the logger name in the original source. If you are experiencing this from a third party node module then contact the author to use the desired logger interface name. INTERFACE NAMES SHOULD BE UNIQUE TO MAINTAIN INTEGRITY."
}

// inherit from Error
util.inherits(LoggerAlreadyDefinedError, Error);

//Export
exports = module.exports = LoggerAlreadyDefinedError;
