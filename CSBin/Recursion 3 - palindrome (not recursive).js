function palindrome(string) {
	return (string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "") == 
          string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join(""));
}

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna"));
console.log(palindrome("llama mall"));
console.log(palindrome("jmoney"));
