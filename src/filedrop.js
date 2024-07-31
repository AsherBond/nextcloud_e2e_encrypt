// SPDX-FileCopyrightText: 2022 Carl Schwan <carl@carlschwan.eu>
// SPDX-License-Identifier: AGPL-3.0-or-later

import Vue from 'vue'
import FileDrop from './views/FileDrop.vue'

const View = Vue.extend(FileDrop)
new View({}).$mount('#content')
