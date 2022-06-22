// 4 - Given two input objects that both represent the root node of a binary tree, return a boolean indicating whether or not the two trees are structurally identical. Assume that each tree may contain up to 100 nodes.

const treesAreEqual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};


