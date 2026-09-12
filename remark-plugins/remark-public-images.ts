import type { Root } from 'mdast'
import { visit } from 'unist-util-visit'

export default function remarkPublicImages() {
	return (tree: Root) => {
		visit(tree, 'image', (node) => {
			if (node.url.startsWith('/public/images/')) {
				node.url = node.url.replace('/public/images/', '/images/')
			}
		})
	}
}
