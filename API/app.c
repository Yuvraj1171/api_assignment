int find_max(int nums[], int len)
 {
 int i, max_num = nums[0];
 for (i = 1; i < len; i ++)
 if (nums[i] > max_num)
 // (Fill in the missing line here)
 return max_num;
 }