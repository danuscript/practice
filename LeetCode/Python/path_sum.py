# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False
        if root.left is None and root.right is None:
            return targetSum - root.val == 0
        left_path = self.hasPathSum(root.left, targetSum - root.val)
        right_path = self.hasPathSum(root.right, targetSum - root.val)
        return left_path or right_path
    
# iterative - depth-first search
# class Solution:
#     def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
#         if root is None:
#             return False
#         stack = [(root, 0)]
#         while stack:
#             node, sum = stack.pop()
#             if node.left is None and node.right is None:
#                 if node.val + sum == targetSum:
#                     return True
#             if node.left:
#                 stack.append((node.left, sum + node.val))
#             if node.right:
#                 stack.append((node.right, sum + node.val))
#         return False
