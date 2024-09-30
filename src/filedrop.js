/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Vue from 'vue'
import FileDrop from './views/FileDrop.vue'

const View = Vue.extend(FileDrop)
new View({}).$mount('#content')
