import { types } from "mobx-state-tree"
import { Cats } from "./cats"

export default types.model("API", {
	cats: types.optional(Cats, () => Cats.create({ state: "done" })),
})
