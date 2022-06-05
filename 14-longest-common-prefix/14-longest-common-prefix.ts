function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";

    let prefix = strs[0];
    for (let i = strs.length; --i;) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix.length) return "";
        }
    }
    
    return prefix;
};