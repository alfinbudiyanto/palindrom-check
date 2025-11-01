// Input say from user
// const kata = prompt("Masukkan kata:");
const inSayFrUsr = isPalindrome("KAsuR RUsaK");

console.log(isPalindrome("MomI Hosyiko"));

// check and print result
if (inSayFrUsr) {
	console.log(`'${inSayFrUsr}' adalah palindrome`);
} else {
	console.log(`'${inSayFrUsr}' bukan palindrome`);
}

// function to check whether a say is a palindrome
function isPalindrome(say) {
	const inpUsr = say.toUpperCase();
	console.log(inpUsr);

	// const bersih = convBgFnt.replace(" ", "");
	// console.log(bersih);

	const slash = inpUsr.split(" ");
	console.log(slash);
	// for (let i = 0; i < slash.length; i++) {
	// 	console.log(slash[i]);
	// 	let slashs = slash[i].replace(" ", ",");
	// 	console.log(slashs);
	// }
	// const c = slashs.join("");
	// console.log(c);
	// const c=for (let i = 0; i < slash.length; i++) {}
	// if (slash === " ") {
	// 	slash.split(" ");
	// }

	const inverted = slash.reverse();
	console.log(inverted);

	const combine = inverted.join("");
	console.log(combine);

	// Mengubah kata menjadi huruf kecil dan menghilangkan spasi
	// kata = kata.toLowerCase().replace(/\s+/g, "");
	// Membandingkan kata dengan kata yang dibalik
	// return kata === kata.split("").reverse().join("");

	const result = inpUsr === combine;
	console.log(result);

	return result, combine, slash;
}

const arr = ["a", "b", "c", "d", "e"];
let rra = [];
console.log(rra);
arr.forEach((x) => {
	rra = x;
	console.log(rra);
	return rra;
});

console.log(qw(rra));

function qw(v) {
	for (let i = v; i <= v; i++) {
		return i;
	}
}
