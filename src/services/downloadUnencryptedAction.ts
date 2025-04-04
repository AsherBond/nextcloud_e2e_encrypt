/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/* eslint-disable jsdoc/require-jsdoc */

import ArrowDownSvg from '@mdi/svg/svg/arrow-down.svg?raw'

import { t } from '@nextcloud/l10n'
import { FileAction, Node, FileType, DefaultType } from '@nextcloud/files'

import { isDownloadable } from './permissions.ts'

async function downloadNodes([file]: Node[]) {
	// Decryption happens in the proxy.
	const response = await fetch(file.encodedSource)
	const decryptedFileContent = await response.arrayBuffer()
	const blob = new Blob([decryptedFileContent], { type: file.mime })

	const link = document.createElement('a')
	link.href = window.URL.createObjectURL(blob)
	link.download = file.displayname
	link.click()
}

export default new FileAction({
	id: 'download_unencrypted',
	default: DefaultType.DEFAULT,

	displayName: () => t('files', 'Download unencrypted'),
	iconSvgInline: () => ArrowDownSvg,

	enabled(nodes: Node[]) {
		if (nodes.length !== 1) {
			return false
		}

		if (nodes.some(node => node.attributes['e2ee-is-encrypted'] !== 1)) {
			return false
		}

		// We can only download dav ressource
		if (nodes.some(node => !node.isDavRessource)) {
			return false
		}

		// We can only download files
		if (nodes.some(node => node.type !== FileType.File)) {
			return false
		}

		return nodes.every(isDownloadable)
	},

	async exec(node: Node) {
		downloadNodes([node])
		return null
	},

	order: 30,
})
