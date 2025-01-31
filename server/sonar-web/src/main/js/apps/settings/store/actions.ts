/*
 * SonarQube
 * Copyright (C) 2009-2022 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { Dispatch } from 'redux';
import { getValues } from '../../../api/settings';
import { closeAllGlobalMessages } from '../../../store/globalMessages';
import { receiveValues } from './values';

export function fetchValues(keys: string[], component?: string) {
  return (dispatch: Dispatch) =>
    getValues({ keys: keys.join(), component }).then(settings => {
      dispatch(receiveValues(keys, settings, component));
      dispatch(closeAllGlobalMessages());
    });
}

export function setValues(
  keys: string[],
  settings: Array<{ key: string; value?: string }>,
  component?: string
) {
  return (dispatch: Dispatch) => dispatch(receiveValues(keys, settings, component));
}
