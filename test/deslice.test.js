/*
 * Copyright 2020 Alexengrig Dev.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import deslice from '../src/deslice';

describe('Test deslice method', () => {
  describe('Test using', () => {
    it('should return the same array', () => {
      expect(deslice([0, 1, 2])).toStrictEqual([0, 1, 2]);
    });

    it('should return the array without the first item', () => {
      expect(deslice([0, 1, 2], 1)).toStrictEqual([1, 2]);
    });

    it('should return the array starting from 1', () => {
      expect(deslice([0, 1, 2], -2)).toStrictEqual([1, 2, 0]);
    });

    it('should return the array without the last item', () => {
      expect(deslice([0, 1, 2], 0, 2)).toStrictEqual([0, 1]);
    });

    it('should return the array without the first item and the last item', () => {
      expect(deslice([0, 1, 2], 1, 2)).toStrictEqual([1]);
    });

    it('should return the array that starts with the last item', () => {
      expect(deslice([0, 1, 2], -1, 2)).toStrictEqual([2, 0, 1]);
    });

    it('should return the array that starts with the middle item', () => {
      expect(deslice([0, 1, 2], -2, 1)).toStrictEqual([1, 2, 0]);
    });

    it('should return the same array (with negative indices)', () => {
      expect(deslice([0, 1, 2], -3, 0)).toStrictEqual([0, 1, 2]);
    });
  });

  describe('Test arguments mistakes', () => {
    it('should return undefined', () => {
      expect(deslice()).toBeUndefined();
    });

    it('should return null', () => {
      expect(deslice(null)).toBeNull();
    });

    it('should return string', () => {
      expect(deslice('test')).toEqual('test');
    });

    it('should return integer', () => {
      expect(deslice(1)).toEqual(1);
    });

    it('should return the same array (with the end index is gt the array length)', () => {
      expect(deslice([0, 1, 2], 0, 10)).toStrictEqual([0, 1, 2]);
    });

    it('should return the same array (with the negative start index is gt the array length)', () => {
      expect(deslice([0, 1, 2], -10, 0)).toStrictEqual([0, 1, 2]);
    });

    it('should return the same array (with the negative start index and the end index is gt the start index)', () => {
      expect(deslice([0, 1, 2], -3, 10)).toStrictEqual([0, 1, 2]);
    });

    it('should return the same array (with the negative start index and the end index are gt the array length)', () => {
      expect(deslice([0, 1, 2], -10, 10)).toStrictEqual([0, 1, 2]);
    });
  });
});
