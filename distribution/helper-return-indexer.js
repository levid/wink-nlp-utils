"use strict";

//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     “wink-nlp-utils” is free software: you can redistribute it
//     and/or modify it under the terms of the GNU Affero
//     General Public License as published by the Free
//     Software Foundation, version 3 of the License.
//
//     “wink-nlp-utils” is distributed in the hope that it will
//     be useful, but WITHOUT ANY WARRANTY; without even
//     the implied warranty of MERCHANTABILITY or FITNESS
//     FOR A PARTICULAR PURPOSE.  See the GNU Affero General
//     Public License for more details.
//
//     You should have received a copy of the GNU Affero
//     General Public License along with “wink-nlp-utils”.
//     If not, see <http://www.gnu.org/licenses/>.

//

// ## string

// ### returnIndexer

/**
 *
 * Returns an Indexer object that contains two functions. The first function `build()`
 * incrementally builds an index for each `element` using `itsIndex` — both passed as
 * parameters to it. The second function — `result()` allows accessing the index anytime.
 *
 * It is typically used with [string.soc](#stringsoc), [string.bong](#stringbong),
 * [string.song](#stringsong), and [tokens.sow](#tokenssow).
 *
 * @name helper.returnIndexer
 * @return {indexer} used to build and access the index.
 * @example
 * var indexer = returnIndexer();
 * // -> { build: [function], result: [function] }
 */
var returnIndexer = function returnIndexer() {
  var theIndex = Object.create(null);
  var methods = Object.create(null);

  // Builds index by adding the `element` and `itsIndex`. The `itsIndex` should
  // be a valid JS array index; no validation checks are performed while building
  // index.
  var build = function build(element, itsIndex) {
    theIndex[element] = theIndex[element] || [];
    theIndex[element].push(itsIndex);
    return true;
  }; // build()

  // Returns the index built so far.
  var result = function result() {
    return theIndex;
  }; // result()

  methods.build = build;
  methods.result = result;

  return methods;
}; // index()

module.exports = returnIndexer;