import { getRoot, IAnyStateTreeNode, Instance } from "mobx-state-tree"
import { RealRootModel } from "./root"

export function getRootStore(node: IAnyStateTreeNode) {
	return getRoot(node) as Instance<typeof RealRootModel>
}
