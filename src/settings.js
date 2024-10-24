/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Vue from 'vue'
import { translate, translatePlural } from '@nextcloud/l10n'

import SecuritySection from './components/SecuritySection.vue'

Vue.prototype.t = translate
Vue.prototype.n = translatePlural

const View = Vue.extend(SecuritySection)
new View({}).$mount('#security-end-to-end')
