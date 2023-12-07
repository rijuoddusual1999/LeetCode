/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> verticalTraversal(TreeNode* root) {
        map<int,map<int,multiset<int>>> nodes;

        queue<pair<TreeNode*,pair<int,int>>>  temp;

        temp.push({root, {0, 0}});

        while(!temp.empty()){

            auto p = temp.front();

            temp.pop();

            TreeNode* Node = p.first;

            int x = p.second.first;
            int y = p.second.second;

            nodes[x][y].insert(Node->val);

            if(Node->left)  temp.push({Node->left,{x-1,y+1}});
            if(Node->right)  temp.push({Node->right,{x+1,y+1}});

             
        }


        vector<vector<int>> result;

        for(auto& it: nodes){
            vector<int> cols;
            for(auto& it2: it.second){
                cols.insert(cols.end(),it2.second.begin(),it2.second.end());
            }

            result.push_back(cols);
        }
        return result; 
    }
};