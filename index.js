/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module unist:util:generated
 * @fileoverview Check if a node is generated.
 */

'use strict';

/* eslint-env commonjs */

/**
 * Return `value` if it’s an object, an empty object
 * otherwise.
 *
 * @private
 * @param {*} value - Value to check.
 * @return {Object} - `value` or `{}`.
 */
function optional(value) {
    return value && typeof value === 'object' ? value : {};
}

/**
 * Detect if a node was available in the original document.
 *
 * @example
 *   generated(); // true
 *
 *   generated({
 *     start: {
 *       line: 1,
 *       column: 1
 *     },
 *     end: {
 *       line: 1,
 *       column: 2
 *     }
 *   }); // false
 *
 * @param {Node} node - Node to check.
 * @return {boolean} - Whether or not `node` is generated.
 */
function generated(node) {
    var position = optional(optional(node).position);
    var start = optional(position.start);
    var end = optional(position.end);

    return !start.line || !start.column || !end.line || !end.column;
}

/*
 * Expose.
 */

module.exports = generated;
