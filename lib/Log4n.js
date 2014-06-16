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

/**
 * @class Log4n
 *
 * The main logger class that is initiated by main file.
 *
 * This file acts like the core of the log4n module.
 *
 * */
exports = module.exports = function Log4n() {

    //Require colors support on CLI
    require('colors');


};

/**
 * @public function configure
 *
 * This function is used to configure the Logger on load.
 *
 * @throw Errors in case the configurations have error.
 *
 * @param {Object} options Configuration options
 * */
Log4n.prototype.configure = function (options) {

};

/**
 * @public Load
 *
 * this loads the logger in the system.
 * Starts logging.
 * */
Log4n.prototype.load = function () {

};